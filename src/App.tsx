import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import AboutDoctor from './components/AboutDoctor';
import Treatments from './components/Treatments';
import Results from './components/Results';
import ProcessTimeline from './components/ProcessTimeline';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LocalSEO from './components/LocalSEO';
import { StickyWhatsApp, StickyBookCTA, ExitIntentPopup } from './components/StickyElements';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <AboutDoctor />
        <Treatments />
        <Results />
        <ProcessTimeline />
        <Reviews />
        <FAQ />
        <Contact />
        <LocalSEO />
      </main>
      <Footer />
      <StickyWhatsApp />
      <StickyBookCTA />
      <ExitIntentPopup />
    </div>
  );
}

export default App;
