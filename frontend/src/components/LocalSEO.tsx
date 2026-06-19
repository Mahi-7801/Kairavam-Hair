import { useInView } from '../hooks/useScrollAnimation';

export default function LocalSEO() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative section-padding bg-clinic-cream overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div ref={ref} className="max-w-4xl mx-auto">
        <div className={`glass-card rounded-3xl p-8 md:p-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="font-serif text-xl md:text-2xl font-bold text-emerald-800 mb-4">
            Trusted Hair Growth Clinic in Vijayawada
          </h3>
          <div className="text-clinic-gray text-sm leading-relaxed space-y-3">
            <p>
              Searching for the best Hair Growth Clinic in Vijayawada? Kairavam Hair Growth & Restoration Clinic offers advanced PRP Hair Treatment, GFC Hair Therapy, Hair Fall Management Programs, Hair Regrowth Solutions and Hair Extensions under expert supervision.
            </p>
            <p>
              Led by Dr. Yamini Kiran Pasupuleti, our clinic helps men and women achieve healthier, thicker and stronger hair using personalized treatment plans and advanced technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
