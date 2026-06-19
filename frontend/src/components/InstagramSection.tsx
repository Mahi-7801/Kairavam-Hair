import { useEffect, useRef, useState } from 'react';
import { Instagram, VolumeX, Volume2 } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

const videos = [
  { src: '/instgram-videos/luxury-salon.mp4' },
  { src: '/instgram-videos/pmu-eyebrows.mp4' },
  { src: '/instgram-videos/hollywood-peel.mp4' },
  { src: '/instgram-videos/new-look.mp4' },
];

function VideoCard({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    const el = videoRef.current;
    if (!el) return;
    el.muted = !el.muted;
    setMuted(el.muted);
    if (!el.muted) {
      el.play().catch(() => {});
    }
  };

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const play = () => {
      el.play().catch(() => {});
    };
    el.addEventListener('canplay', play, { once: true });
    play();
    return () => el.removeEventListener('canplay', play);
  }, []);

  return (
    <div className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-emerald-900 shadow-premium transition-all duration-500 hover:shadow-gold-lg">
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        muted
        loop
        playsInline
        autoPlay
      />
      <button
        onClick={toggleMute}
        className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors"
        aria-label={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? <VolumeX className="w-4 h-4 text-white" /> : <Volume2 className="w-4 h-4 text-white" />}
      </button>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
        <span className="text-white text-xs font-medium flex items-center gap-1">
          <Instagram className="w-3.5 h-3.5" />
          View on Instagram
        </span>
      </div>
    </div>
  );
}

export default function InstagramSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="relative section-padding bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-10 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold-600 font-medium text-sm tracking-wider uppercase mb-3">Follow Us</p>
          <h2 className="heading-primary mb-4">
            <span className="text-gradient-gold">Instagram</span>
          </h2>
          <div className="gold-divider mt-4" />
        </div>

        <div className={`flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 p-6 glass-card rounded-2xl transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 flex items-center justify-center shadow-lg flex-shrink-0">
              <Instagram className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-emerald-800">@kairavam_</h3>
              <p className="text-clinic-gray text-sm">Follow us for transformations, tips & clinic moments</p>
            </div>
          </div>
          <a
            href="https://www.instagram.com/kairavam_/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 flex-shrink-0"
          >
            <Instagram className="w-5 h-5" />
            Follow Now
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {videos.map((v, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${(i + 2) * 100}ms` }}
            >
              <VideoCard src={v.src} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
