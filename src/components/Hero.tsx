import { useState, useEffect } from 'react';
import { ArrowRight, MessageCircle, Calendar, Shield, Users, Clock, Award, ChevronDown } from 'lucide-react';

function Particles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const p = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 6,
      duration: Math.random() * 4 + 6,
    }));
    setParticles(p);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            animation: `particle ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

const trustBadges = [
  { icon: Shield, text: 'FDA Approved Technology' },
  { icon: Users, text: 'Personalized Treatment Plans' },
  { icon: Clock, text: 'Minimal Downtime' },
  { icon: Award, text: 'Experienced Specialists' },
];

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(212,168,83,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(212,168,83,0.08),transparent_50%)]" />

      <Particles />

      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4A853' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 bg-gold-500 rounded-full animate-pulse" />
              <span className="text-gold-400 text-sm font-medium">Exclusive Offers On Selected Treatments</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Advanced{' '}
              <span className="text-gradient-gold">Hair Growth</span>
              <br />
              & Hair Restoration
              <br />
              <span className="text-gold-400">Solutions</span>
            </h1>

            <p className="text-emerald-200/80 text-lg sm:text-xl mb-6 max-w-lg leading-relaxed">
              PRP, GFC, Hair Fall Treatments, Hair Regrowth Programs & Hair Extensions — Regain thicker, healthier and stronger hair.
            </p>

            <div className="flex items-center gap-4 mb-8 p-4 glass-card-dark rounded-2xl">
              <div className="w-14 h-14 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0 shadow-gold">
                <span className="text-white font-serif font-bold text-xl">Dr</span>
              </div>
              <div>
                <p className="text-white font-semibold text-base">Dr. Yamini Kiran Pasupuleti</p>
                <p className="text-gold-400 text-sm">PG Diploma in Cosmetology & Aesthetics</p>
                <p className="text-emerald-300/60 text-xs mt-0.5">10+ Years Experience</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="btn-primary flex items-center justify-center gap-2 text-base"
              >
                <Calendar className="w-5 h-5" />
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/918478060606"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg text-base"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Now
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {trustBadges.map((badge, i) => (
                <div
                  key={badge.text}
                  className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ transitionDelay: `${400 + i * 100}ms` }}
                >
                  <badge.icon className="w-4 h-4 text-gold-500 flex-shrink-0" />
                  <span className="text-white/80 text-xs sm:text-sm">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-gold-500/20 to-emerald-600/20 rounded-[2rem] rotate-6 backdrop-blur-sm" />
              <div className="absolute inset-0 glass-card-dark rounded-[2rem] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-800/90 to-emerald-900/90" />
                <div className="relative h-full flex flex-col items-center justify-center p-8">
                  <div className="text-center mb-8">
                    <p className="text-gold-400 font-serif text-2xl mb-2">Your Hair Growth</p>
                    <p className="text-gold-300 font-serif text-4xl font-bold">Journey</p>
                    <p className="text-gold-400 font-serif text-2xl mb-2">Starts Here</p>
                  </div>
                  <div className="flex gap-3 mb-8">
                    {['PRP', 'GFC', 'Regrowth'].map((t, i) => (
                      <div
                        key={t}
                        className="px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full"
                        style={{ animationDelay: `${i * 200}ms` }}
                      >
                        <span className="text-gold-400 text-sm font-medium">{t}</span>
                      </div>
                    ))}
                  </div>
                  <div className="w-full max-w-xs">
                    <div className="flex justify-between text-xs text-emerald-300/60 mb-1">
                      <span>Hair Health Score</span>
                      <span className="text-gold-400">92%</span>
                    </div>
                    <div className="w-full h-2 bg-emerald-700/30 rounded-full overflow-hidden">
                      <div className="h-full bg-gold-gradient rounded-full transition-all duration-2000" style={{ width: '92%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#why"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-gold-400 transition-colors scroll-indicator"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
