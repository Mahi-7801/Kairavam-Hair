import { MapPin, Phone, MessageCircle, ArrowUp, Heart } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Doctor', href: '#about' },
  { label: 'Hair Treatments', href: '#treatments' },
  { label: 'Before & After', href: '#results' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const treatments = [
  'PRP Hair Treatment',
  'GFC Hair Treatment',
  'Hair Fall Programs',
  'Hair Regrowth Programs',
  'Hair Extensions',
  'Scalp Treatments',
];

export default function Footer() {
  return (
    <footer className="relative bg-emerald-900 pt-16 pb-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(212,168,83,0.05),transparent_50%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/kairavamfinallogo.png" alt="Kairavam" className="w-10 h-10 object-contain" />
              <div>
                <p className="text-white font-serif font-bold text-lg">Kairavam</p>
                <p className="text-gold-400 text-[10px] tracking-[0.15em] uppercase">Hair Clinic</p>
              </div>
            </div>
            <p className="text-emerald-200/50 text-sm leading-relaxed mb-4">
              Advanced hair growth and restoration clinic in Vijayawada offering PRP, GFC, Hair Fall Treatment, Hair Regrowth Programs and Hair Extensions.
            </p>
            <div className="flex gap-2">
              <a href="tel:7998777666" className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold-500/20 flex items-center justify-center transition-colors">
                <Phone className="w-4 h-4 text-gold-400" />
              </a>
              <a href="https://wa.me/918478060606" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/5 hover:bg-green-500/20 flex items-center justify-center transition-colors">
                <MessageCircle className="w-4 h-4 text-gold-400" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-emerald-200/50 hover:text-gold-400 text-sm transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Treatments</h4>
            <ul className="space-y-2">
              {treatments.map((t) => (
                <li key={t}>
                  <span className="text-emerald-200/50 text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-gold-500 flex-shrink-0 mt-0.5" />
                <p className="text-emerald-200/50 text-sm">
                  Fortune Murali Park Road, Above Apollo Pharmacy, 3rd Floor, Moghalrajpuram, Vijayawada – 520010
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="tel:7998777666" className="text-emerald-200/50 text-sm hover:text-gold-400 transition-colors">7998777666</a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a href="https://wa.me/918478060606" target="_blank" rel="noopener noreferrer" className="text-emerald-200/50 text-sm hover:text-gold-400 transition-colors">8478060606</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-emerald-200/30 text-xs text-center sm:text-left flex items-center gap-1">
            &copy; {new Date().getFullYear()} Kairavam Hair Growth & Restoration Clinic. Made with
            <Heart className="w-3 h-3 text-gold-500 fill-gold-500" /> in Vijayawada
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://digitalverto.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400/80 hover:text-gold-300 text-sm font-semibold tracking-wide transition-all duration-300 hover:scale-105"
            >
              ⚡ Powered by <span className="text-white font-bold">Digital Verto</span>
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-1.5 text-emerald-200/30 hover:text-gold-400 text-xs transition-colors"
            >
              Back to Top
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
