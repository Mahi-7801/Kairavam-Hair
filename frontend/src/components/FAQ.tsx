import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

const faqs = [
  {
    q: 'Is PRP Hair Treatment Safe?',
    a: 'Yes. PRP uses your own blood-derived growth factors and is considered a safe treatment under expert supervision. The procedure is minimally invasive with a very low risk of adverse reactions.',
  },
  {
    q: 'How Many Sessions Are Needed?',
    a: 'The number of sessions depends on hair loss severity and individual response. Typically, 4-6 sessions spaced 4-6 weeks apart are recommended for optimal results. Your doctor will create a personalized plan.',
  },
  {
    q: 'Is GFC Better Than PRP?',
    a: 'Both treatments are effective. GFC is more concentrated in growth factors, while PRP has a broader therapeutic effect. The ideal option depends on your hair condition and treatment goals. Dr. Yamini will recommend the best approach for you.',
  },
  {
    q: 'When Will I See Results?',
    a: 'Most patients begin noticing improvements within 2-3 months after starting treatment. Hair growth is a gradual process, and significant visible results typically appear after 4-6 months of consistent treatment.',
  },
  {
    q: 'Are Hair Extensions Safe?',
    a: 'Yes. Professional application and maintenance ensure safe and natural-looking results. Our hair extensions are applied by experienced specialists using premium-quality materials that protect your natural hair.',
  },
  {
    q: 'Do Hair Growth Treatments Require Downtime?',
    a: 'Most treatments have minimal downtime, allowing patients to resume normal activities quickly. PRP and GFC sessions typically take 45-60 minutes, and you can return to your daily routine immediately after.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const { ref, isInView } = useInView();

  return (
    <section id="faq" className="relative section-padding bg-clinic-cream overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold-600 font-medium text-sm tracking-wider uppercase mb-3">Got Questions?</p>
          <h2 className="heading-primary mb-4">
            Frequently Asked <span className="text-gradient-gold">Questions</span>
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div
                key={i}
                className={`glass-card rounded-2xl overflow-hidden transition-all duration-500 ${
                  isOpen ? 'shadow-premium' : ''
                } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <button
                  className="w-full flex items-center gap-4 p-6 text-left hover:bg-emerald-50/30 transition-colors"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                >
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${
                    isOpen ? 'bg-emerald-800' : 'bg-emerald-50'
                  }`}>
                    <HelpCircle className={`w-4 h-4 transition-colors ${isOpen ? 'text-gold-500' : 'text-emerald-800'}`} />
                  </div>
                  <span className={`font-semibold text-base flex-1 transition-colors ${isOpen ? 'text-emerald-800' : 'text-emerald-800'}`}>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-clinic-gray flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pl-[3.75rem]">
                      <p className="text-clinic-gray leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
