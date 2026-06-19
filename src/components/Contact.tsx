import { useState } from 'react';
import { MapPin, Clock, Phone, MessageCircle, Calendar, Send, AlertCircle } from 'lucide-react';
import { useInView } from '../hooks/useScrollAnimation';

export default function Contact() {
  const { ref, isInView } = useInView();
  const [form, setForm] = useState({ name: '', phone: '', email: '', concern: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMsg = `Hi, I'd like to book a hair consultation.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nConcern: ${form.concern}\nMessage: ${form.message}`;
    window.open(`https://wa.me/918478060606?text=${encodeURIComponent(whatsappMsg)}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative section-padding bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

      <div ref={ref} className="max-w-7xl mx-auto">
        <div className={`text-center mb-14 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-gold-600 font-medium text-sm tracking-wider uppercase mb-3">Get In Touch</p>
          <h2 className="heading-primary mb-4">
            Book Your <span className="text-gradient-gold">Hair Consultation</span>
          </h2>
          <p className="text-clinic-gray max-w-2xl mx-auto mt-4">
            Take the first step towards healthier, thicker hair. Book your consultation with Dr. Yamini today.
          </p>
          <div className="gold-divider mt-6" />
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className={`lg:col-span-2 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-card-dark rounded-3xl p-8 h-full">
              <h3 className="text-white font-serif text-xl font-bold mb-6">Kairavam Hair Growth & Restoration Clinic</h3>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white/90 text-sm">Fortune Murali Park Road</p>
                    <p className="text-white/90 text-sm">Above Apollo Pharmacy, 3rd Floor</p>
                    <p className="text-white/90 text-sm">Moghalrajpuram, Vijayawada – 520010</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <p className="text-white/90 text-sm">10:00 AM – 8:00 PM</p>
                </div>
                <a href="tel:7998777666" className="flex items-center gap-3 group">
                  <Phone className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <p className="text-white/90 text-sm group-hover:text-gold-400 transition-colors">7998777666</p>
                </a>
                <a href="https://wa.me/918478060606" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <MessageCircle className="w-5 h-5 text-gold-500 flex-shrink-0" />
                  <p className="text-white/90 text-sm group-hover:text-gold-400 transition-colors">WhatsApp: 8478060606</p>
                </a>
              </div>

              <div className="p-4 bg-gold-500/10 border border-gold-500/20 rounded-xl">
                <p className="text-gold-400 font-semibold text-sm flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" />
                  Exclusive Offers On Selected Treatments
                </p>
                <p className="text-white/60 text-xs mt-1">Limited Appointments Available</p>
              </div>
            </div>
          </div>

          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="glass-card rounded-3xl p-8">
              <h3 className="font-serif text-xl font-bold text-emerald-800 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-gold-500" />
                Book Your Hair Consultation
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <h4 className="text-emerald-800 font-semibold text-lg mb-2">Request Sent!</h4>
                  <p className="text-clinic-gray text-sm">We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-emerald-800 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm bg-white"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-emerald-800 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm bg-white"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-1.5">Email (Optional)</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm bg-white"
                      placeholder="Your email address"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-1.5">Hair Concern *</label>
                    <select
                      required
                      value={form.concern}
                      onChange={(e) => setForm({ ...form, concern: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm bg-white appearance-none"
                    >
                      <option value="">Select your hair concern</option>
                      <option value="Hair Fall">Hair Fall</option>
                      <option value="Hair Thinning">Hair Thinning</option>
                      <option value="Baldness">Male / Female Pattern Baldness</option>
                      <option value="Hair Regrowth">Hair Regrowth</option>
                      <option value="PRP Treatment">PRP Treatment</option>
                      <option value="GFC Treatment">GFC Treatment</option>
                      <option value="Hair Extensions">Hair Extensions</option>
                      <option value="Scalp Issues">Scalp Issues</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-emerald-800 mb-1.5">Message (Optional)</label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 outline-none transition-all text-sm bg-white resize-none"
                      placeholder="Tell us about your hair concerns..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-base mt-2">
                    <Send className="w-5 h-5" />
                    Book Consultation
                  </button>
                  <p className="text-center text-clinic-gray text-xs">
                    By submitting, you agree to be contacted via WhatsApp/phone for your consultation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className={`mt-12 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="glass-card rounded-3xl overflow-hidden">
            <iframe
              title="Kairavam Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.8!2d80.6!3d16.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDMwJzAwLjAiTiA4MMKwMzYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
