import { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill="none">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="m6.306 14.691 6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.91 11.91 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002 6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}

const reviews = [
  {
    author: "Swathi Komakula (swathikomakula24)",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjXVH1IijQteqyI8awHOzPLQxJA4kl2otblwIbjr-T5_cQK0aKU=w90-h90-p-rp-mo-ba12-br100",
    stars: 5,
    role: "Local Guide · 15 reviews · 4 photos",
    date: "a year ago",
    text: "Amazing Hair Botox Experience at Kairavaram Salon!\n\nI recently had a Hair Botox treatment at Kairavaram Salon, and I couldn't be happier with the results! From start to finish, the experience was absolutely fantastic. The team was professional, attentive, and made sure I was comfortable throughout the process.\n\nMy hair feels silky smooth, frizz-free, and healthier than ever! The shine and softness are truly unbelievable, and I can already feel the long-lasting benefits of the treatment.",
    source: "Google Maps",
    photos: [
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn3HjMozC75nTEVvysL4PN__CSQ76sBYNCZJ0g1s03KMJauZKKOLh0kyaU57eXCsksN4bfUe80YYAvVXsKjOqLyf02wLzARlaBEPgF5rI64440nHmUm-GRNmCj2ujXr6NIbfLGDR=s157-p-k-rw",
      "https://lh3.googleusercontent.com/grass-cs/ANxoTn2bYrlpX_fkYIPYN_84yk-DdiBHwtmFMVEYNg-7c_dzP0NBEknHhb6b1f5x_8ItfwmhAmHIrwUs0e983YxlocwFv4eLdyJy2HEmcv4r3Lc2uUpb-SdJRpzuO2mMUBOaFyzGcKKm=s157-p-k-rw"
    ]
  },
  {
    author: "Dr.Arshad Shaik",
    avatar: null,
    stars: 5,
    role: "1 review · 3 photos",
    date: "10 months ago",
    text: "Mr Reehan..\nHad done a very good styling with a decent look\nVery much satisfied with the service\nMust visit",
    source: "Google Maps"
  },
  {
    author: "saiprakash tirupati",
    avatar: null,
    stars: 5,
    role: "3 reviews · 1 photo",
    date: "a year ago",
    text: "Wonderful Facial Treatment,Super relaxing thinking about details such as Lighting,Soft music.....staff are well trained and professional...and my skin was silky soft afterwards... Haircut and Beard was done Greatly.....\n\nWorthy for every single rupee..\n\nHere you can VIP Rooms...I took that one only.. I'm posting my review and Photo.... Definately Biggest salon in Andhra Pradesh",
    source: "Google Maps"
  },
  {
    author: "chandu sapparapu",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjWtXvJ8R-qyqlW51fZua2at-fnE13rU1bedsTY-eBiOw4oGSaBr=w45-h45-p-rp-mo-br100",
    stars: 5,
    role: "4 reviews",
    date: "a year ago",
    text: "Best experience in this salon me and my family have visited they doing kids haircut also and my kid was not crying at all....Very happy after the haircut..for kids and ladies best Salon in Vijayawada.....",
    source: "Google Maps"
  },
  {
    author: "Bharath Gupta",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUsQDvwQSBCy32xfp91tlArUjFkTuJE93TsAkhgwiFpqJk9wvFZjg=w45-h45-p-rp-mo-ba12-br100",
    stars: 5,
    role: "Local Guide · 139 reviews · 201 photos",
    date: "a year ago",
    text: "Amazing experience\nWorth every penny\n\nHad de tan treatment and shaving.\nThe staff is extremely professional and well versed in their crafts\n\nHighly recommended",
    source: "Google Maps"
  },
  {
    author: "Pavan Naidu",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUew5R_S0awCUNddFiJqpyArLktQ9GzXhCOSFOIqiq9rzKnH1iX=w90-h90-p-rp-mo-br100",
    stars: 5,
    role: "1 review",
    date: "a month ago",
    text: "I had a really nice experience at this place. The atmosphere was pleasant, the staff were friendly and helpful, and everything was well maintained.",
    source: "Google Maps"
  },
  {
    author: "BOBBY .08",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUgZjFjbbyAU_bK4O8xLowj-sdFWL0ia4VDbryrOl2Onpzqqt1KWA=w90-h90-p-rp-mo-ba12-br100",
    stars: 5,
    role: "Local Guide · 7 reviews · 34 photos",
    date: "10 months ago",
    text: "Recently visited Kairavam Hair Saloon and was impressed from start to finish. The ambience is modern, clean, and relaxing & also a place where you instantly feel comfortable. The service was attentive and professional, with the staff ensuring every detail was taken care of.",
    source: "Google Maps"
  },
  {
    author: "AKSHARA VUMMITI",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjVlLW7n5oRqjhGFOcSmHqduQLVaBdqM_4hjQUp4IGHYo33AdTw2=w90-h90-p-rp-mo-br100",
    stars: 5,
    role: "7 reviews",
    date: "10 months ago",
    text: "Really good service! They did my eyebrows very nicely, waxing was smooth, and the hair spa made my hair feel soft and healthy. The place looks nice and has a relaxing vibe.",
    source: "Google Maps"
  },
  {
    author: "Venkataapparao Yandrapu",
    avatar: null,
    stars: 5,
    role: "1 review · 1 photo",
    date: "a year ago",
    text: "Services are next level and Hospitality is another next level...They are greeting customers in a Good way....If any problem is there they are telling us before the service then they are doing the Services...",
    source: "Google Maps"
  },
  {
    author: "SRAVYA KODATI",
    avatar: "https://lh3.googleusercontent.com/a-/ALV-UjUbSLAaSRLxDHFrhnsH5wlVcAnH8qt8G0vk-NKJ2zjobfrVU1Y=w90-h90-p-rp-mo-br100",
    stars: 5,
    role: "2 reviews",
    date: "a year ago",
    text: "Recently, I have undergone hair spa and hair cut service. It was good and done by Sameer. The ambience is nice. One of the premium salons in vijayawada.",
    source: "Google Maps"
  }
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

        <div className={`relative transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative">
            <div className="flex items-center justify-center gap-2 mb-6 pb-4 border-b border-gold-500/10">
              <GoogleIcon className="w-6 h-6" />
              <span className="text-emerald-800 font-semibold text-sm">Google</span>
              <div className="flex items-center gap-0.5 mx-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold-500 fill-gold-500" />
                ))}
              </div>
              <span className="text-clinic-gray text-sm font-medium">5.0</span>
              <span className="text-clinic-gray/50 text-xs">({reviews.length} reviews)</span>
            </div>

            <div className="relative z-10">
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: reviews[active].stars }).map((_, i) => (
                  <Star key={i} className="w-7 h-7 text-gold-500 fill-gold-500" />
                ))}
              </div>

              <div className="flex items-center justify-center gap-4 mb-4">
                {reviews[active].avatar && (
                  <img
                    src={reviews[active].avatar}
                    alt={reviews[active].author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold-500/20"
                  />
                )}
                {!reviews[active].avatar && (
                  <div className="w-14 h-14 rounded-full bg-emerald-800 flex items-center justify-center text-white text-lg font-bold">
                    {reviews[active].author.charAt(0)}
                  </div>
                )}
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <p className="text-emerald-800 font-semibold text-base">{reviews[active].author}</p>
                    <GoogleIcon className="w-4 h-4" />
                  </div>
                  <p className="text-clinic-gray text-sm">{reviews[active].role}</p>
                </div>
              </div>

              <div className="min-h-[100px] flex items-center justify-center mb-4">
                <p className="text-emerald-800 text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto whitespace-pre-line">
                  "{reviews[active].text}"
                </p>
              </div>

              {reviews[active].photos && reviews[active].photos.length > 0 && (
                <div className="flex justify-center gap-2 mb-3">
                  {reviews[active].photos.map((photo, pi) => (
                    <img
                      key={pi}
                      src={photo}
                      alt="Review photo"
                      className="w-20 h-20 rounded-lg object-cover border border-gold-500/10"
                    />
                  ))}
                </div>
              )}

              <p className="text-clinic-gray/50 text-xs text-center">{reviews[active].date}</p>
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
