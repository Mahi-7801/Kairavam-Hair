import { Shield, HeartPulse, FlaskConical, Clock, Sparkles, Users, Leaf, Stethoscope } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

const reasons = [
  { icon: Shield, title: 'FDA Approved Technologies', desc: 'All treatments use clinically validated, FDA approved technology for maximum safety and results.' },
  { icon: HeartPulse, title: 'Customized Treatment Plans', desc: 'Every treatment is tailored to your unique hair condition, scalp health and growth goals.' },
  { icon: FlaskConical, title: 'Advanced Hair Growth Protocols', desc: 'Evidence-based treatment protocols designed for optimal hair restoration outcomes.' },
  { icon: Clock, title: 'Minimal Downtime Procedures', desc: 'Resume your daily routine quickly with our minimally invasive treatment approaches.' },
  { icon: Sparkles, title: 'Safe & Hygienic Environment', desc: 'State-of-the-art clinic with stringent hygiene and safety standards.' },
  { icon: Users, title: 'Experienced Hair Restoration Team', desc: 'Led by Dr. Yamini with 10+ years of expertise in hair restoration treatments.' },
  { icon: Leaf, title: 'Natural Looking Results', desc: 'Our focus on natural hair growth ensures results that look and feel authentic.' },
  { icon: Stethoscope, title: 'Comprehensive Hair Care Solutions', desc: 'From diagnosis to maintenance, we offer a complete hair care ecosystem.' },
];

export default function TrustSection() {
  const { ref, isInView } = useInView();

  return (
    <section id="why" className="relative section-padding bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold-600 font-medium text-sm tracking-wider uppercase mb-3">Why Choose Us</p>
          <h2 className="heading-primary mb-4">
            Why Hundreds Choose <span className="text-gradient-gold">Kairavam</span>
            <br />For Hair Restoration
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, i) => (
            <div
              key={item.title}
              className={`group glass-card rounded-2xl p-6 hover:shadow-premium transition-all duration-500 hover:-translate-y-1 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 group-hover:bg-emerald-800 flex items-center justify-center mb-4 transition-colors duration-300">
                <item.icon className="w-6 h-6 text-emerald-800 group-hover:text-gold-500 transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-emerald-800 text-base mb-2">{item.title}</h3>
              <p className="text-clinic-gray text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
