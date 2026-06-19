import { useState, useEffect, useRef } from 'react';
import { Droplets, Zap, Leaf, TrendingUp, Scissors, Sun, Wand2, Layers, Sparkles, ArrowRight, ChevronRight } from 'lucide-react';

const treatments = [
  {
    id: 'prp',
    icon: Droplets,
    image: '/hair-gfc.jpg',
    title: 'PRP Hair Growth Treatment',
    subtitle: 'Platelet Rich Plasma Therapy',
    desc: 'Uses your body\'s natural growth factors to stimulate dormant hair follicles and promote new hair growth.',
    benefits: ['Reduces Hair Fall', 'Stimulates Hair Growth', 'Improves Hair Thickness', 'Enhances Hair Density', 'Natural & Safe Procedure'],
    price: '\u20B94,000 \u2013 \u20B910,000',
    priceLabel: 'Per Session',
    offer: 'Up To 40% OFF',
    accent: 'from-amber-400 to-amber-600',
    bg: 'bg-amber-50',
  },
  {
    id: 'gfc',
    icon: Zap,
    image: '/hair-gfc1.jpg',
    title: 'GFC Hair Treatment',
    subtitle: 'Growth Factor Concentrate Therapy',
    desc: 'An advanced hair restoration treatment using concentrated growth factors to improve hair quality and regrowth.',
    benefits: ['Reduces Hair Fall', 'Promotes Hair Regrowth', 'Improves Hair Density', 'Strengthens Hair Roots', 'Safe & Natural Treatment'],
    price: '\u20B95,000 \u2013 \u20B910,000',
    priceLabel: 'Per Session',
    offer: 'Up To 40% OFF',
    accent: 'from-emerald-400 to-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    id: 'transplant',
    icon: Layers,
    image: '/hair-transplant.jpg',
    title: 'Hair Transplant',
    subtitle: 'Permanent Hair Restoration',
    desc: 'Permanent and natural hair growth solution that restores hairline and boosts confidence.',
    benefits: ['Permanent Hair Growth', 'Restores Hairline & Confidence', 'Low Maintenance Solution', 'Natural Results'],
    price: 'Consult for Pricing',
    priceLabel: 'Based on Grafts & Technique',
    offer: null,
    accent: 'from-blue-400 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 'carbon',
    icon: Sun,
    image: '/carbon-peel.jpg',
    title: 'Carbon Laser',
    subtitle: 'Skin Rejuvenation Treatment',
    desc: 'Deep cleansing and skin brightening treatment for instant glow and improved texture.',
    benefits: ['Deep Cleansing & Oil Control', 'Instant Glow & Skin Brightening', 'Minimizes Pores', 'Improves Skin Texture'],
    price: '\u20B93,000 \u2013 \u20B97,000',
    priceLabel: 'Per Session',
    offer: 'Up To 40% OFF',
    accent: 'from-orange-400 to-orange-600',
    bg: 'bg-orange-50',
  },
  {
    id: 'laser-toning',
    icon: Wand2,
    image: '/laser-toning.jpg',
    title: 'Laser Toning',
    subtitle: 'Pigmentation & Skin Tone Treatment',
    desc: 'Reduces pigmentation, evens skin tone and improves acne marks for brighter skin.',
    benefits: ['Reduces Pigmentation', 'Improves Uneven Skin Tone', 'Improves Acne Marks', 'Brightens & Adds Natural Glow'],
    price: '\u20B93,000 \u2013 \u20B97,000',
    priceLabel: 'Per Session',
    offer: 'Up To 40% OFF',
    accent: 'from-rose-400 to-rose-600',
    bg: 'bg-rose-50',
  },
  {
    id: 'laser-hair',
    icon: Scissors,
    image: '/laser-uhr1.jpg',
    title: 'Laser Hair Reduction',
    subtitle: 'Long-Term Hair Reduction',
    desc: 'Advanced laser technology for long-term hair reduction across all treatment areas.',
    benefits: ['Long-Term Hair Reduction', 'No Ingrown Hair or Skin Darkening', 'Saves Time & Effort', 'Safe for All Skin Types'],
    price: '\u20B91,000 \u2013 \u20B930,000',
    priceLabel: 'Per Session (Varies by Area)',
    offer: 'Up To 40% OFF',
    accent: 'from-purple-400 to-purple-600',
    bg: 'bg-purple-50',
  },
  {
    id: 'pmu-eyebrows',
    icon: TrendingUp,
    image: '/pmu-eyebrows1.jpg',
    title: 'PMU Eyebrows',
    subtitle: 'Permanent Eyebrow Enhancement',
    desc: 'Perfect shape and symmetry with long-lasting, smudge-proof eyebrow enhancement.',
    benefits: ['Saves Time Everyday', 'Perfect Shape & Symmetry', 'Long-Lasting & Smudgeproof', 'Natural Looking Results'],
    price: '\u20B920,000 \u2013 \u20B940,000',
    priceLabel: 'Microblading / Ombre / Combination',
    offer: 'Up To 25% OFF',
    accent: 'from-teal-400 to-teal-600',
    bg: 'bg-teal-50',
  },
  {
    id: 'pmu-lips',
    icon: Leaf,
    image: '/PMU%20Lipblush%20122.jpg',
    title: 'PMU Lipblush',
    subtitle: 'Permanent Lip Colour Enhancement',
    desc: 'Defines lip borders and enhances natural lip colour for a beautiful, long-lasting look.',
    benefits: ['Defines Lip Borders', 'Enhances Natural Lip Colour', 'Long-Lasting & Low Maintenance', 'Pigmentation Correction'],
    price: '\u20B920,000 \u2013 \u20B940,000',
    priceLabel: 'Based on Technique & Correction',
    offer: 'Up To 25% OFF',
    accent: 'from-pink-400 to-pink-600',
    bg: 'bg-pink-50',
  },
  {
    id: 'scalp-pig',
    icon: Layers,
    image: '/SMP-Scalp-Micro-Pigmentation.webp',
    title: 'Scalp Micropigmentation',
    subtitle: 'Instant Fuller Hair Look',
    desc: 'Quick, non-surgical solution for an instant fuller hair appearance with low maintenance.',
    benefits: ['Instant Fuller Hair Look', 'Quick Results, Non-Surgical', 'Low Maintenance & Long-Lasting', 'Customizable to Hairline'],
    price: '\u20B920,000 \u2013 \u20B91,00,000',
    priceLabel: 'Based on Area & Customization',
    offer: 'Up To 25% OFF',
    accent: 'from-indigo-400 to-indigo-600',
    bg: 'bg-indigo-50',
  },
  {
    id: 'hairfall',
    icon: Leaf,
    image: '/hair-gfc2.jpg',
    title: 'Hair Fall Treatment Programs',
    subtitle: 'Targeted Hair Fall Solutions',
    desc: 'Target the root causes of excessive hair shedding with personalized treatment plans for lasting results.',
    benefits: ['Controls Hair Fall', 'Improves Scalp Health', 'Strengthens Hair Follicles', 'Reduces Hair Breakage', 'Promotes Healthy Hair Growth'],
    price: null,
    priceLabel: 'Consult for Pricing',
    offer: null,
    accent: 'from-rose-400 to-rose-600',
    bg: 'bg-rose-50',
  },
  {
    id: 'regrowth',
    icon: TrendingUp,
    image: '/hair-gfc.jpg',
    title: 'Hair Regrowth Programs',
    subtitle: 'Comprehensive Regrowth Solutions',
    desc: 'Comprehensive treatment programs designed to restore hair volume, density and your confidence.',
    benefits: ['Boosts Hair Growth', 'Improves Hair Density', 'Strengthens Existing Hair', 'Customized Solutions', 'Long-Term Maintenance Support'],
    price: null,
    priceLabel: 'Consult for Pricing',
    offer: null,
    accent: 'from-blue-400 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 'extensions',
    icon: Scissors,
    image: '/hair-gfc2.jpg',
    title: 'Hair Extensions',
    subtitle: 'Premium Hair Extension Solutions',
    desc: 'Instantly enhance hair length, volume and appearance with premium hair extension solutions.',
    benefits: ['Instant Hair Volume', 'Longer Hair Appearance', 'Natural Looking Results', 'Custom Matching', 'Confidence Boosting Transformation'],
    price: null,
    priceLabel: 'Consult for Pricing',
    offer: null,
    accent: 'from-purple-400 to-purple-600',
    bg: 'bg-purple-50',
  },
];

const concerns = [
  'Male Pattern Baldness', 'Female Pattern Hair Loss', 'Post Pregnancy Hair Fall',
  'Stress Related Hair Loss', 'Hair Thinning', 'Weak Hair Roots',
  'Patchy Hair Loss', 'Scalp Health Issues', 'Early Hair Loss Prevention',
];

function useStaggerInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

export default function Treatments() {
  const { ref, isInView } = useStaggerInView();
  const { ref: ref2, isInView: isInView2 } = useStaggerInView();
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="treatments" className="relative section-padding bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-14 md:mb-16 transition-all duration-1000 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="inline-block px-4 py-1.5 bg-gold-500/10 text-gold-600 text-xs font-semibold tracking-widest uppercase rounded-full mb-4">Our Treatments</span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-emerald-800 leading-tight mb-4">
            Advanced <span className="text-gradient-gold">Hair & Aesthetic</span> Treatments
          </h2>
          <p className="text-clinic-gray max-w-2xl mx-auto mt-2 text-base md:text-lg leading-relaxed">
            Choose from our range of scientifically advanced treatments for hair, skin and aesthetics.
          </p>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {treatments.map((t, i) => {
            const delay = i * 60;
            return (
              <div
                key={t.id}
                id={t.id}
                onMouseEnter={() => setHoveredId(t.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative rounded-2xl p-6 lg:p-8 cursor-default transition-all duration-700 ease-out ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${delay}ms`,
                  background: 'rgba(255,255,255,0.75)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(166,130,99,0.12)',
                  boxShadow: hoveredId === t.id
                    ? '0 24px 48px -16px rgba(52,79,57,0.2), 0 2px 8px rgba(52,79,57,0.04)'
                    : '0 8px 32px -8px rgba(52,79,57,0.06), 0 1px 3px rgba(0,0,0,0.02)',
                  transform: hoveredId === t.id ? 'translateY(-4px) scale(1.005)' : 'translateY(0) scale(1)',
                }}
              >
                <div className="relative h-52 md:h-64 -mx-6 -mt-6 lg:-mx-8 lg:-mt-8 mb-4 overflow-hidden rounded-t-2xl">
                  <img
                    src={t.image}
                    alt={t.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/60 to-transparent pt-8 px-6 pb-3 lg:px-8 lg:pb-3">
                    <div className="flex items-end gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${t.accent} flex items-center justify-center flex-shrink-0 shadow-lg`}
                      >
                        <t.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-base md:text-lg font-bold text-emerald-800 leading-tight">{t.title}</h3>
                        <p className="text-gold-600 text-xs md:text-sm font-medium">{t.subtitle}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-clinic-gray text-sm leading-relaxed mb-4">{t.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {t.benefits.map((b, bi) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1 px-2.5 py-1 text-xs rounded-full border transition-all duration-300"
                      style={{
                        backgroundColor: hoveredId === t.id ? 'rgba(52,79,57,0.06)' : 'rgba(52,79,57,0.04)',
                        borderColor: hoveredId === t.id ? 'rgba(166,130,99,0.2)' : 'rgba(52,79,57,0.1)',
                        color: '#242E28',
                        transitionDelay: hoveredId === t.id ? `${bi * 30}ms` : '0ms',
                      }}
                    >
                      <Sparkles className="w-3 h-3 text-gold-500 flex-shrink-0" />
                      {b}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t" style={{ borderColor: 'rgba(166,130,99,0.1)' }}>
                  <div>
                    {t.price && (
                      <div>
                        <p className="text-emerald-800 font-serif text-lg font-bold">{t.price}</p>
                        <p className="text-clinic-gray text-xs mt-0.5">{t.priceLabel}</p>
                      </div>
                    )}
                    {!t.price && (
                      <div>
                        <p className="text-emerald-800 font-serif text-sm font-semibold">{t.priceLabel}</p>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2.5">
                    {t.offer && (
                      <span
                        className="inline-flex items-center px-3 py-1 md:px-3 md:py-1 text-[0.625rem] md:text-xs font-bold tracking-wide rounded-md transition-all duration-300"
                        style={{
                          background: 'linear-gradient(135deg, #A68263 0%, #8E6E52 50%, #A68263 100%)',
                          color: 'white',
                          boxShadow: hoveredId === t.id ? '0 4px 12px rgba(166,130,99,0.3)' : 'none',
                        }}
                      >
                        {t.offer}
                      </span>
                    )}
                    <a
                      href="#contact"
                      className="relative inline-flex items-center gap-1.5 px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 overflow-hidden group/btn"
                      style={{
                        background: 'linear-gradient(135deg, #A68263 0%, #8E6E52 50%, #A68263 100%)',
                        color: 'white',
                        boxShadow: hoveredId === t.id ? '0 4px 16px rgba(166,130,99,0.25)' : '0 2px 8px rgba(166,130,99,0.15)',
                      }}
                    >
                      <span className="relative z-10 flex items-center gap-1.5">
                        Book
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-300 ${hoveredId === t.id ? 'translate-x-0.5' : ''}`} />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div ref={ref2} className="max-w-7xl mx-auto mt-20 md:mt-24">
        <div className={`text-center mb-10 transition-all duration-1000 ease-out ${isInView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-1.5 bg-gold-500/10 text-gold-600 text-xs font-semibold tracking-widest uppercase rounded-full mb-4">Common Concerns</span>
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-emerald-800">
            Hair Concerns We <span className="text-gradient-gold">Treat</span>
          </h3>
        </div>
        <div className="relative overflow-hidden before:absolute before:left-0 before:top-0 before:bottom-0 before:w-16 before:z-10 before:bg-gradient-to-r before:from-white before:to-transparent after:absolute after:right-0 after:top-0 after:bottom-0 after:w-16 after:z-10 after:bg-gradient-to-l after:from-white after:to-transparent">
          <div className="flex gap-3 animate-scroll hover:[animation-play-state:paused]" style={{ width: 'max-content' }}>
            {[...concerns, ...concerns].map((c, i) => (
              <span
                key={`${c}-${i}`}
                className="inline-flex px-5 py-2.5 rounded-full text-sm font-medium whitespace-nowrap cursor-default transition-all duration-300 hover:!bg-[#344F39] hover:!text-white hover:!border-transparent hover:-translate-y-0.5"
                style={{
                  background: 'rgba(255,255,255,0.7)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(166,130,99,0.12)',
                  color: '#242E28',
                  boxShadow: '0 4px 12px -4px rgba(52,79,57,0.04)',
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
