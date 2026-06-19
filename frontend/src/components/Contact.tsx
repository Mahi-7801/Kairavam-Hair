import { useState } from 'react';
import { MapPin, Clock, Phone, MessageCircle, Calendar, Send, AlertCircle, Loader2 } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({ name: '', phone: '', email: '', concern: '', message: '' });
  const [errors, setErrors] = useState<Partial<Record<keyof typeof form, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [apiError, setApiError] = useState('');
  const [emailSent, setEmailSent] = useState(true);

  const validate = () => {
    const errs: Partial<Record<keyof typeof form, string>> = {};

    const trimmed = form.name.trim();
    if (!trimmed) errs.name = 'Full name is required';
    else if (trimmed.length < 2) errs.name = 'Name must be at least 2 characters';
    else if (/^\d+$/.test(trimmed)) errs.name = 'Please enter a valid name, not a phone number';
    else if (/[\d]{7,}/.test(trimmed)) errs.name = 'Name should not contain phone numbers';

    const phoneDigits = form.phone.replace(/\D/g, '');
    if (!form.phone.trim()) errs.phone = 'Phone number is required';
    else if (phoneDigits.length < 10) errs.phone = 'Enter a valid 10-digit phone number';
    else if (phoneDigits.length > 15) errs.phone = 'Phone number is too long';

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      errs.email = 'Enter a valid email address';
    }

    if (!form.concern) errs.concern = 'Please select your hair concern';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError('');
    if (!validate()) return;

    setSubmitting(true);
    try {
      const apiBase = import.meta.env.VITE_API_URL || '';
      const res = await fetch(`${apiBase}/api/consultation`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          treatment: form.concern,
          message: form.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Failed to submit');
      }

      const data = await res.json();
      setEmailSent(data.emailSent);

      const whatsappMsg = `Hi, I'd like to book a hair consultation.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nConcern: ${form.concern}\nMessage: ${form.message}`;
      window.open(`https://wa.me/918478060606?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
      setForm({ name: '', phone: '', email: '', concern: '', message: '' });
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setApiError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: '' });
  };

  const handleBlur = (field: keyof typeof form) => {
    const errs = { ...errors };
    if (field === 'name') {
      const trimmed = form.name.trim();
      if (!trimmed) errs.name = 'Full name is required';
      else if (trimmed.length < 2) errs.name = 'Name must be at least 2 characters';
      else if (/^\d+$/.test(trimmed)) errs.name = 'Please enter a valid name, not a phone number';
      else if (/[\d]{7,}/.test(trimmed)) errs.name = 'Name should not contain phone numbers';
      else delete errs.name;
    }
    if (field === 'phone') {
      const phoneDigits = form.phone.replace(/\D/g, '');
      if (!form.phone.trim()) errs.phone = 'Phone number is required';
      else if (phoneDigits.length < 10) errs.phone = 'Enter a valid 10-digit phone number';
      else if (phoneDigits.length > 15) errs.phone = 'Phone number is too long';
      else delete errs.phone;
    }
    if (field === 'email') {
      if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        errs.email = 'Enter a valid email address';
      } else delete errs.email;
    }
    if (field === 'concern') {
      if (!form.concern) errs.concern = 'Please select your hair concern';
      else delete errs.concern;
    }
    setErrors(errs);
  };

  return (
    <section id="contact" className="relative section-padding bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold-600 font-medium text-sm tracking-wider uppercase mb-3">Get In Touch</p>
          <h2 className="heading-primary mb-4">
            Book Your <span className="text-gradient-gold">Hair Consultation</span>
          </h2>
          <p className="text-clinic-gray max-w-2xl mx-auto mt-4">
            Take the first step towards healthier, thicker hair. Book your consultation with Dr. Yamini today.
          </p>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className={`lg:col-span-2 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-card-dark rounded-3xl p-8 h-full">
              <h3 className="text-white font-serif text-xl font-bold mb-6">Kairavam Hair Growth & Restoration Clinic</h3>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/90 text-sm">Fortune Murali Park Road</p>
                    <p className="text-white/90 text-sm">Above Apollo Pharmacy, 3rd Floor</p>
                    <p className="text-white/90 text-sm">Moghalrajpuram, Vijayawada – 520010</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <p className="text-white/90 text-sm">10:00 AM – 8:00 PM</p>
                </div>
                <a href="tel:7998777666" className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <p className="text-white/90 text-sm group-hover:text-gold-400 transition-colors">7998777666</p>
                </a>
                <a href="https://wa.me/918478060606" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <MessageCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <p className="text-white/90 text-sm group-hover:text-gold-400 transition-colors">WhatsApp: 8478060606</p>
                </a>
              </div>

              <div className="p-4 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                <p className="text-gold-400 font-semibold text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Exclusive Offers On Selected Treatments
                </p>
                <p className="text-white/60 text-xs mt-1">Limited Appointments Available</p>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-serif text-xl font-bold text-emerald-800 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold-500" />
                Book Your Hair Consultation
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <h4 className="text-emerald-800 font-semibold text-lg mb-2">Request Sent!</h4>
                  <p className="text-clinic-gray text-sm">We'll get back to you within 24 hours.</p>
                  {!emailSent && (
                    <p className="text-amber-600 text-xs mt-2 flex items-center justify-center gap-1">
                      <AlertCircle className="w-3 h-3" /> Email notification failed — your details are saved, and we will check manually.
                    </p>
                  )}
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-emerald-800 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm bg-white ${
                          errors.name ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' : 'border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20'
                        }`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-emerald-800 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        onBlur={() => handleBlur('phone')}
                        className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm bg-white ${
                          errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' : 'border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20'
                        }`}
                        placeholder="Your phone number"
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.phone}</p>}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-1.5">Email (Optional)</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      onBlur={() => handleBlur('email')}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm bg-white ${
                        errors.email ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' : 'border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20'
                      }`}
                      placeholder="Your email address"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-1.5">Hair Concern *</label>
                    <select
                      required
                      value={form.concern}
                      onChange={(e) => handleChange('concern', e.target.value)}
                      onBlur={() => handleBlur('concern')}
                      className={`w-full px-4 py-3 rounded-xl border outline-none transition-all text-sm bg-white appearance-none ${
                        errors.concern ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-500/20' : 'border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20'
                      }`}
                    >
                      <option value="">Select your hair concern</option>
                      <option value="Hair Fall">Hair Fall</option>
                      <option value="Hair Thinning">Hair Thinning</option>
                      <option value="Baldness">Male / Female Pattern Baldness</option>
                      <option value="Hair Regrowth">Hair Regrowth</option>
                      <option value="PRP Treatment">PRP Treatment</option>
                      <option value="GFC Treatment">GFC Treatment</option>
                      <option value="Hair Extensions">Hair Extensions</option>
                      <option value="Scalp Issues">Scalp Issues</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-1.5">Message (Optional)</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm bg-white resize-none"
                      placeholder="Tell us about your hair concerns..."
                    />
                  </div>
                  {apiError && (
                    <p className="text-red-500 text-xs text-center flex items-center justify-center gap-1"><AlertCircle className="w-3 h-3" />{apiError}</p>
                  )}
                  <button type="submit" disabled={submitting} className="btn-primary w-full flex items-center justify-center gap-2 text-base mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
                    {submitting ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                    {submitting ? 'Submitting...' : 'Book Consultation'}
                  </button>
                  <p className="text-center text-clinic-gray text-xs">
                    By submitting, you agree to be contacted via WhatsApp/phone for your consultation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className={`mt-12 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-3xl overflow-hidden">
            <iframe
              title="Kairavam Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7650.852375143656!2d80.64465607460865!3d16.504568027637607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35fb1531f3efc5%3A0xf99a9d5c3d3ccae6!2sKairavam!5e0!3m2!1sen!2sin!4v1781849157215!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
