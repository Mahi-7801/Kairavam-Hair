import { Microscope, Stethoscope, ClipboardList, Droplets, BarChart3, ShieldCheck } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

const steps = [
  { num: 1, icon: Microscope, title: 'Advanced Hair & Scalp Analysis', desc: 'Comprehensive scalp and hair examination using advanced diagnostic tools.' },
  { num: 2, icon: Stethoscope, title: 'Doctor Consultation', desc: 'One-on-one consultation with Dr. Yamini to discuss your concerns and goals.' },
  { num: 3, icon: ClipboardList, title: 'Personalized Treatment Plan', desc: 'Customized treatment protocol based on your unique hair condition.' },
  { num: 4, icon: Droplets, title: 'PRP / GFC / Hair Restoration Sessions', desc: 'Expertly administered treatment sessions using advanced technology.' },
  { num: 5, icon: BarChart3, title: 'Progress Monitoring', desc: 'Regular follow-ups and progress tracking to ensure optimal results.' },
  { num: 6, icon: ShieldCheck, title: 'Long-Term Hair Maintenance Program', desc: 'Ongoing guidance and maintenance plans for lasting hair health.' },
];

export default function ProcessTimeline() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative section-padding bg-emerald-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,168,83,0.08),transparent_70%)]" />
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 3.5-2 3z' fill='%23A68263' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }}
      />

      <div ref={ref} className="relative max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold-400 font-medium text-sm tracking-wider uppercase mb-3">Our Process</p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Hair Restoration <span className="text-gold-400">Journey</span>
          </h2>
          <p className="text-emerald-200/60 max-w-2xl mx-auto">
            A structured, evidence-based approach to your hair restoration from consultation to maintenance.
          </p>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`relative transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${i * 250}ms` }}
            >
              <div className="glass-card-dark rounded-2xl p-6 h-full hover:border-gold-500/40 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gold-gradient flex items-center justify-center shadow-gold group-hover:shadow-gold-lg transition-shadow">
                      <span className="text-white font-serif font-bold text-lg">{step.num}</span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="hidden lg:block absolute top-12 left-1/2 -translate-x-1/2 w-px h-8 bg-gold-500/20" />
                    )}
                  </div>
                  <div>
                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-2">
                      <step.icon className="w-4 h-4 text-gold-400" />
                    </div>
                    <h3 className="text-white font-semibold text-base mb-2">{step.title}</h3>
                    <p className="text-emerald-200/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
