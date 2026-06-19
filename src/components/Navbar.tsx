import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, ChevronDown } from 'lucide-react';
import { useScrollDirection } from '../hooks/useScrollAnimation';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Doctor', href: '#about' },
  { label: 'Hair Treatments', href: '#treatments', hasDropdown: true },
  { label: 'Results', href: '#results' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const treatmentLinks = [
  { label: 'PRP Treatment', href: '#prp' },
  { label: 'GFC Treatment', href: '#gfc' },
  { label: 'Hair Fall Programs', href: '#hairfall' },
  { label: 'Hair Regrowth', href: '#regrowth' },
  { label: 'Hair Extensions', href: '#extensions' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isScrolled } = useScrollDirection();

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-premium py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-full bg-emerald-gradient flex items-center justify-center shadow-gold transition-transform duration-300 group-hover:scale-110">
              <span className="text-gold-500 font-serif font-bold text-lg">K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg text-emerald-800 leading-tight tracking-wide">
                Kairavam
              </span>
              <span className={`text-[10px] font-medium tracking-[0.2em] uppercase transition-colors duration-300 ${
                isScrolled ? 'text-gold-600' : 'text-gold-500'
              }`}>
                Hair Clinic
              </span>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <a
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium text-emerald-800 hover:text-gold-600 transition-colors duration-200 flex items-center gap-1 rounded-lg hover:bg-emerald-50/50"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </a>
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                    <div className="glass-card rounded-xl p-2 min-w-[200px]">
                      {treatmentLinks.map((t) => (
                        <a
                          key={t.href}
                          href={t.href}
                          className="block px-4 py-2.5 text-sm text-emerald-800 hover:text-gold-600 hover:bg-emerald-50/50 rounded-lg transition-colors"
                        >
                          {t.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:7998777666"
              className="flex items-center gap-1.5 text-sm font-medium text-emerald-700 hover:text-gold-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>7998777666</span>
            </a>
            <a
              href="https://wa.me/918478060606"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-full transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="#contact"
              className="btn-primary text-sm !px-5 !py-2"
            >
              Book Consultation
            </a>
          </div>

          <button
            className="lg:hidden p-2 text-emerald-800 hover:text-gold-600 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-premium animate-slide-in-right"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'slideInRight 0.3s ease-out' }}
          >
            <div className="flex flex-col h-full p-6">
              <div className="flex justify-between items-center mb-8">
                <span className="font-serif font-bold text-xl text-emerald-800">Kairavam</span>
                <button onClick={() => setMobileOpen(false)} className="p-2 text-emerald-800">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <div key={link.href}>
                    <a
                      href={link.href}
                      className="block px-4 py-3 text-base font-medium text-emerald-800 hover:text-gold-600 hover:bg-emerald-50/50 rounded-lg transition-colors"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                    {link.hasDropdown && (
                      <div className="pl-4 flex flex-col gap-0.5">
                        {treatmentLinks.map((t) => (
                          <a
                            key={t.href}
                            href={t.href}
                            className="block px-4 py-2 text-sm text-emerald-600 hover:text-gold-600 hover:bg-emerald-50/50 rounded-lg transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {t.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-auto flex flex-col gap-3 pt-6 border-t border-gray-100">
                <a
                  href="#contact"
                  className="btn-primary text-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Consultation
                </a>
                <a
                  href="https://wa.me/918478060606"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-full transition-all hover:bg-green-700"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </>
  );
}
