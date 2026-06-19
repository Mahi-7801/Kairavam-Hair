import { useState, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

interface BeforeAfterCard {
  id: number;
  title: string;
  beforeLabel: string;
  afterLabel: string;
  improvement: string;
  beforeColor: string;
  afterColor: string;
}

const results: BeforeAfterCard[] = [
  { id: 1, title: 'Hair Density Improvement', beforeLabel: 'Before PRP', afterLabel: 'After 6 Sessions', improvement: 'Visible Reduction In Hair Fall', beforeColor: 'from-rose-200 to-rose-300', afterColor: 'from-emerald-200 to-emerald-300' },
  { id: 2, title: 'Hair Regrowth', beforeLabel: 'Before GFC', afterLabel: 'After 4 Sessions', improvement: 'Improved Hair Density', beforeColor: 'from-rose-200 to-rose-300', afterColor: 'from-emerald-200 to-emerald-300' },
  { id: 3, title: 'Hair Thickness', beforeLabel: 'Before Treatment', afterLabel: 'After 8 Sessions', improvement: 'Enhanced Hair Thickness', beforeColor: 'from-rose-200 to-rose-300', afterColor: 'from-emerald-200 to-emerald-300' },
  { id: 4, title: 'Hair Fall Control', beforeLabel: 'Before Treatment', afterLabel: 'After 5 Sessions', improvement: 'Healthier Hair Growth', beforeColor: 'from-rose-200 to-rose-300', afterColor: 'from-emerald-200 to-emerald-300' },
  { id: 5, title: 'Crown Area Regrowth', beforeLabel: 'Before PRP', afterLabel: 'After 6 Sessions', improvement: 'Natural Looking Results', beforeColor: 'from-rose-200 to-rose-300', afterColor: 'from-emerald-200 to-emerald-300' },
  { id: 6, title: 'Overall Hair Quality', beforeLabel: 'Before GFC', afterLabel: 'After 4 Sessions', improvement: 'Long-Term Improvement', beforeColor: 'from-rose-200 to-rose-300', afterColor: 'from-emerald-200 to-emerald-300' },
];

function BeforeAfterSlider({ card }: { card: BeforeAfterCard }) {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-col-resize select-none group/card"
      onMouseDown={() => { isDragging.current = true; }}
      onMouseMove={(e) => { if (isDragging.current) handleMove(e.clientX); }}
      onMouseUp={() => { isDragging.current = false; }}
      onMouseLeave={() => { isDragging.current = false; }}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${card.afterColor} flex items-center justify-center`}>
        <div className="text-center p-4">
          <p className="text-emerald-800 font-serif text-lg font-bold">{card.afterLabel}</p>
          <p className="text-emerald-700 text-sm mt-1">Improved Hair Growth</p>
        </div>
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-br ${card.beforeColor} flex items-center justify-center`}
        style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
      >
        <div className="text-center p-4">
          <p className="text-rose-800 font-serif text-lg font-bold">{card.beforeLabel}</p>
          <p className="text-rose-700 text-sm mt-1">Hair Concern Area</p>
        </div>
      </div>

      <div
        className="absolute top-0 bottom-0 w-1 bg-white/80 z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <ChevronLeft className="w-3 h-3 text-emerald-800 -mr-1" />
          <ChevronRight className="w-3 h-3 text-emerald-800 -ml-1" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/40 to-transparent">
        <p className="text-white text-sm font-medium flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-gold-400" />
          {card.improvement}
        </p>
      </div>
    </div>
  );
}

export default function Results() {
  const { ref, isInView } = useInView();

  return (
    <section id="results" className="relative section-padding bg-clinic-cream overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold-600 font-medium text-sm tracking-wider uppercase mb-3">Real Results</p>
          <h2 className="heading-primary mb-4">
            Before & After <span className="text-gradient-gold">Hair Transformations</span>
          </h2>
          <p className="text-clinic-gray max-w-2xl mx-auto mt-4">
            Real hair transformation stories from our patients. Drag the slider to see the difference.
          </p>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((card, i) => (
            <div
              key={card.id}
              className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <BeforeAfterSlider card={card} />
              <p className="text-center text-emerald-800 font-semibold mt-3">{card.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
