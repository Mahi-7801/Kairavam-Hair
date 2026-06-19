import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

const reviews = [
  { id: 1, name: 'Patient Review', rating: 5, text: 'I was struggling with severe hair fall. After GFC sessions at Kairavam, I noticed stronger hair and reduced shedding.' },
  { id: 2, name: 'Patient Review', rating: 5, text: 'The PRP treatment was comfortable and professionally handled. My hair density improved significantly.' },
  { id: 3, name: 'Patient Review', rating: 5, text: 'Excellent consultation and personalized treatment plan. Highly recommended for hair regrowth.' },
  { id: 4, name: 'Patient Review', rating: 5, text: 'The team explained every step clearly. I started seeing visible changes within a few months.' },
  { id: 5, name: 'Patient Review', rating: 5, text: 'Very hygienic clinic with advanced equipment. Great experience and satisfying results.' },
];

export default function Reviews() {
  const { ref, isInView } = useInView();
  const [active, setActive] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goTo = (dir: number) => {
    setIsAutoPlaying(false);
    setActive((prev) => (prev + dir + reviews.length) % reviews.length);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section id="reviews" className="relative section-padding bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold-600 font-medium text-sm tracking-wider uppercase mb-3">Patient Reviews</p>
          <h2 className="heading-primary mb-4">
            What Our <span className="text-gradient-gold">Patients</span> Say
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className={`relative max-w-3xl mx-auto transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-3xl p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-gold-500/10" />

            <div className="relative z-10 text-center">
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: reviews[active].rating }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-gold-500 fill-gold-500" />
                ))}
              </div>

              <div className="min-h-[80px] flex items-center justify-center mb-6">
                <p className="text-emerald-800 text-lg md:text-xl font-medium leading-relaxed italic max-w-xl">
                  "{reviews[active].text}"
                </p>
              </div>

              <p className="text-clinic-gray text-sm font-medium">{reviews[active].name}</p>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => goTo(-1)}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setActive(i); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 8000); }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === active ? 'bg-gold-500 w-8' : 'bg-gray-200 hover:bg-gold-300'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={() => goTo(1)}
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-emerald-800 hover:text-white transition-all"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
