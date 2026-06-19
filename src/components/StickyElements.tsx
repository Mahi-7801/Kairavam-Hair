import { useState, useEffect } from 'react';
import { MessageCircle, X, Calendar, Sparkles } from 'lucide-react';

export function StickyWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <a
      href="https://wa.me/918478060606?text=Hi%2C%20I%27d%20like%20to%20book%20a%20consultation%20at%20Kairavam"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-gold"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}

export function StickyBookCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-500 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 px-4 py-3 flex gap-3 shadow-premium">
        <a
          href="https://wa.me/918478060606"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-green-600 text-white font-semibold rounded-xl text-sm"
        >
          <MessageCircle className="w-4 h-4" />
          WhatsApp
        </a>
        <a
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 py-3 bg-emerald-800 text-white font-semibold rounded-xl text-sm"
        >
          <Calendar className="w-4 h-4" />
          Book Now
        </a>
      </div>
    </div>
  );
}

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !dismissed) {
        setShow(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [dismissed]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="glass-card rounded-3xl p-8 max-w-md w-full relative shadow-premium animate-slide-up">
        <button
          onClick={() => { setShow(false); setDismissed(true); }}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
        >
          <X className="w-4 h-4 text-gray-600" />
        </button>

        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gold-gradient flex items-center justify-center shadow-gold">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
          <h3 className="font-serif text-xl font-bold text-emerald-800 mb-2">
            Wait! Don't Miss Your Chance
          </h3>
          <p className="text-clinic-gray text-sm mb-4">
            Get exclusive offers on selected treatments. Limited time only!
          </p>
          <div className="flex flex-col gap-3">
            <a
              href="#contact"
              className="btn-primary text-center"
              onClick={() => { setShow(false); setDismissed(true); }}
            >
              Book Consultation Now
            </a>
            <a
              href="https://wa.me/918478060606?text=Hi%2C%20I%27m%20interested%20in%20the%20offer%20for%20treatments"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all text-sm"
              onClick={() => { setShow(false); setDismissed(true); }}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp for Offer
            </a>
          </div>
          <p className="text-xs text-clinic-gray mt-3">Limited appointments available</p>
        </div>
      </div>
    </div>
  );
}

export function OfferRibbon() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[55] bg-gold-gradient text-white text-center py-1.5 text-sm font-semibold">
      <span className="flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4" />
        Exclusive Offers On Selected Treatments
        <span className="hidden sm:inline">&mdash;</span>
        <a href="#contact" className="hidden sm:inline underline hover:no-underline font-bold">Book Now</a>
        <Sparkles className="w-4 h-4" />
      </span>
    </div>
  );
}
