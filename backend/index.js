import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import { readFileSync, writeFileSync, existsSync, mkdirSync, appendFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { sendConsultationEmail, verifyTransporter } from './smtp.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DATA_DIR = join(__dirname, 'data');
const CONSULTATIONS_FILE = join(DATA_DIR, 'consultations.json');
const LOG_FILE = join(DATA_DIR, 'app.log');

const logger = {
  info(msg, data) {
    const line = `[${new Date().toISOString()}] INFO: ${msg} ${data ? JSON.stringify(data) : ''}\n`;
    process.stdout.write(line);
    try { appendFileSync(LOG_FILE, line, 'utf-8'); } catch {}
  },
  error(msg, err) {
    const line = `[${new Date().toISOString()}] ERROR: ${msg} ${err?.stack || err || ''}\n`;
    process.stderr.write(line);
    try { appendFileSync(LOG_FILE, line, 'utf-8'); } catch {}
  },
};

if (!existsSync(DATA_DIR)) mkdirSync(DATA_DIR, { recursive: true });
if (!existsSync(CONSULTATIONS_FILE)) writeFileSync(CONSULTATIONS_FILE, '[]', 'utf-8');

const REQUIRED_ENV = ['SMTP_USER', 'SMTP_PASS'];
for (const key of REQUIRED_ENV) {
  if (!process.env[key]) {
    logger.error(`Missing required env: ${key}`);
    process.exit(1);
  }
}

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || ['http://localhost:5173', 'http://localhost:4173'],
  methods: ['GET', 'POST'],
  maxAge: 86400,
}));
app.use(express.json({ limit: '10kb' }));

const apiLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many requests. Please try again later.' },
});

const authToken = process.env.API_TOKEN;

function sanitize(str) {
  if (!str) return '';
  return str.replace(/<[^>]*>/g, '').trim().slice(0, 500);
}

function validatePhone(phone) {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

function validateEmail(email) {
  if (!email) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

app.post('/api/consultation', apiLimiter, async (req, res) => {
  try {
    const { name, phone, email, treatment, message } = req.body;

    const cleanName = sanitize(name);
    const cleanPhone = sanitize(phone);
    const cleanEmail = sanitize(email);
    const cleanTreatment = sanitize(treatment);
    const cleanMessage = sanitize(message);

    if (!cleanName || cleanName.length < 2) {
      return res.status(400).json({ error: 'Full name is required (min 2 characters)' });
    }
    if (/\d{7,}/.test(cleanName.replace(/\s/g, ''))) {
      return res.status(400).json({ error: 'Name appears to contain a phone number' });
    }
    if (!cleanPhone || !validatePhone(cleanPhone)) {
      return res.status(400).json({ error: 'Valid phone number is required (10-15 digits)' });
    }
    if (!validateEmail(cleanEmail)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: cleanName,
      phone: cleanPhone,
      email: cleanEmail,
      treatment: cleanTreatment,
      message: cleanMessage,
      createdAt: new Date().toISOString(),
    };

    let consultations = [];
    try {
      consultations = JSON.parse(readFileSync(CONSULTATIONS_FILE, 'utf-8'));
    } catch {
      consultations = [];
    }
    consultations.push(entry);
    writeFileSync(CONSULTATIONS_FILE, JSON.stringify(consultations, null, 2), 'utf-8');

    let emailSent = false;
    try {
      await sendConsultationEmail(entry);
      emailSent = true;
      logger.info('Email sent', { id: entry.id });
    } catch (err) {
      logger.error('Email send failed', err);
    }

    logger.info('Consultation booked', { id: entry.id, name: cleanName, emailSent });
    res.status(201).json({ success: true, id: entry.id, emailSent });
  } catch (err) {
    logger.error('Submission failed', err);
    res.status(500).json({ error: 'Server error. Please try again.' });
  }
});

app.get('/api/consultations', (req, res) => {
  if (authToken && req.query.token !== authToken) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  try {
    const consultations = JSON.parse(readFileSync(CONSULTATIONS_FILE, 'utf-8'));
    res.json(consultations);
  } catch {
    res.json([]);
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', uptime: process.uptime(), timestamp: new Date().toISOString() });
});

app.post('/api/test-email', apiLimiter, async (_req, res) => {
  try {
    await sendConsultationEmail({
      name: 'Test User',
      phone: '9999999999',
      email: 'test@example.com',
      treatment: 'Test',
      message: 'This is a test email from Kairavam backend.',
    });
    res.json({ success: true, message: 'Test email sent successfully' });
  } catch (err) {
    logger.error('Test email failed', err);
    res.status(500).json({ error: err.message || 'Failed to send test email' });
  }
});

app.use((_req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.use((err, _req, res, _next) => {
  logger.error('Unhandled error', err);
  res.status(500).json({ error: 'Internal server error' });
});

const server = app.listen(PORT, () => {
  logger.info(`Backend running on http://localhost:${PORT}`);
  verifyTransporter();
});

function shutdown(signal) {
  logger.info(`${signal} received — shutting down gracefully`);
  server.close(() => {
    logger.info('Server closed');
    process.exit(0);
  });
  setTimeout(() => {
    logger.error('Forced shutdown after timeout');
    process.exit(1);
  }, 10000).unref();
}

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
