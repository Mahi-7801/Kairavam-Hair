import { Droplets, Zap, Leaf, TrendingUp, Scissors, Sun, Wand2, Layers, Sparkles, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

const treatments = [
  {
    id: 'prp',
    icon: Droplets,
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
    title: 'Hair Transplant',
    subtitle: 'Permanent Hair Restoration',
    desc: 'Permanent and natural hair growth solution that restores hairline and boosts confidence.',
    benefits: ['Permanent Hair Growth', 'Restores Hairline', 'Boosts Confidence', 'Low Maintenance Solution', 'Natural Results'],
    price: 'Consult for Pricing',
    priceLabel: 'Based on Grafts & Technique',
    offer: 'Up To 40% OFF',
    accent: 'from-blue-400 to-blue-600',
    bg: 'bg-blue-50',
  },
  {
    id: 'carbon',
    icon: Sun,
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

export default function Treatments() {
  const { ref, isInView } = useInView();
  const { ref: ref2, isInView: isInView2 } = useInView();

  return (
    <section id="treatments" className="relative section-padding bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold-600 font-medium text-sm tracking-wider uppercase mb-3">Our Treatments</p>
          <h2 className="heading-primary mb-4">
            Advanced <span className="text-gradient-gold">Hair & Aesthetic</span> Treatments
          </h2>
          <p className="text-clinic-gray max-w-2xl mx-auto mt-4">
            Choose from our range of scientifically advanced treatments for hair, skin and aesthetics.
          </p>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {treatments.map((t, i) => (
            <div
              key={t.id}
              id={t.id}
              className={`group glass-card rounded-2xl p-6 lg:p-8 hover:shadow-premium transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${t.accent} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-shadow`}>
                  <t.icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg lg:text-xl font-bold text-emerald-800 leading-tight">{t.title}</h3>
                  <p className="text-gold-600 text-sm font-medium">{t.subtitle}</p>
                </div>
              </div>

              <p className="text-clinic-gray text-sm leading-relaxed mb-4">{t.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {t.benefits.map((b) => (
                  <span key={b} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50 text-emerald-800 text-xs rounded-full border border-emerald-100">
                    <Sparkles className="w-3 h-3 text-gold-500" />
                    {b}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div>
                  {t.price && (
                    <div>
                      <p className="text-emerald-800 font-serif text-lg font-bold">{t.price}</p>
                      <p className="text-clinic-gray text-xs">{t.priceLabel}</p>
                    </div>
                  )}
                  {!t.price && (
                    <div>
                      <p className="text-emerald-800 font-serif text-sm font-semibold">{t.priceLabel}</p>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-3">
                  {t.offer && (
                    <div className="px-3 py-1.5 bg-gold-gradient rounded-full">
                      <span className="text-white text-xs font-bold">{t.offer}</span>
                    </div>
                  )}
                  <a href="#contact" className="btn-primary !px-4 !py-2 text-sm flex items-center gap-1">
                    Book
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div ref={ref2} className="max-w-7xl mx-auto mt-20">
        <div className={`text-center mb-10 transition-all duration-700 ${isInView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold-600 font-medium text-sm tracking-wider uppercase mb-3">Common Concerns</p>
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-emerald-800">
            Hair Concerns We <span className="text-gradient-gold">Treat</span>
          </h3>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {concerns.map((c, i) => (
            <span
              key={c}
              className={`px-5 py-2.5 glass-card rounded-full text-emerald-800 text-sm font-medium hover:bg-emerald-800 hover:text-white hover:shadow-emerald transition-all duration-300 cursor-default ${
                isInView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
