import { lazy, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const TrustSection = lazy(() => import('./components/TrustSection'));
const AboutDoctor = lazy(() => import('./components/AboutDoctor'));
const Treatments = lazy(() => import('./components/Treatments'));
const Results = lazy(() => import('./components/Results'));
const ProcessTimeline = lazy(() => import('./components/ProcessTimeline'));
const Reviews = lazy(() => import('./components/Reviews'));
const FAQ = lazy(() => import('./components/FAQ'));
const InstagramSection = lazy(() => import('./components/InstagramSection'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const StickyElements = lazy(() =>
  import('./components/StickyElements').then((m) => ({ default: () => <><m.StickyBookCTA /><m.ExitIntentPopup /></> }))
);

function SectionFallback() {
  return <div className="h-64 flex items-center justify-center"><div className="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" /></div>;
}

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <ErrorBoundary>
        <Navbar />
        <main>
          <Hero />
          <ErrorBoundary><Suspense fallback={<SectionFallback />}><TrustSection /></Suspense></ErrorBoundary>
          <ErrorBoundary><Suspense fallback={<SectionFallback />}><AboutDoctor /></Suspense></ErrorBoundary>
          <ErrorBoundary><Suspense fallback={<SectionFallback />}><Treatments /></Suspense></ErrorBoundary>
          <ErrorBoundary><Suspense fallback={<SectionFallback />}><Results /></Suspense></ErrorBoundary>
          <ErrorBoundary><Suspense fallback={<SectionFallback />}><ProcessTimeline /></Suspense></ErrorBoundary>
          <ErrorBoundary><Suspense fallback={<SectionFallback />}><Reviews /></Suspense></ErrorBoundary>
          <ErrorBoundary><Suspense fallback={<SectionFallback />}><FAQ /></Suspense></ErrorBoundary>
          <ErrorBoundary><Suspense fallback={<SectionFallback />}><InstagramSection /></Suspense></ErrorBoundary>
          <ErrorBoundary><Suspense fallback={<SectionFallback />}><Contact /></Suspense></ErrorBoundary>
        </main>
        <ErrorBoundary><Suspense fallback={<SectionFallback />}><Footer /></Suspense></ErrorBoundary>
        <ErrorBoundary><Suspense fallback={null}><StickyElements /></Suspense></ErrorBoundary>
      </ErrorBoundary>
    </div>
  );
}

export default App;
