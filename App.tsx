import React, { Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsSection } from './components/StatsSection';
import { Footer } from './components/Footer';

// Lazy load heavy components below the fold
// Using default imports for React.lazy compatibility
const ModelShowcase = lazy(() => import('./components/ModelShowcase'));
const Features = lazy(() => import('./components/Features'));
const PrecisionCare = lazy(() => import('./components/PrecisionCare'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const PricingReveal = lazy(() => import('./components/PricingReveal'));
const Technology = lazy(() => import('./components/Technology'));
const Contact = lazy(() => import('./components/Contact'));

const SectionLoader = () => (
  <div className="h-64 flex items-center justify-center bg-slate-50">
    <div className="w-8 h-8 border-4 border-slate-200 border-t-slate-900 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <div id="home">
          <Hero />
        </div>
        <div id="services">
          <StatsSection />
        </div>
        <Suspense fallback={<SectionLoader />}>
            <div id="technology">
              <Technology />
            </div>
            <div id="models">
              <ModelShowcase />
            </div>
            <div id="about">
              <Features />
            </div>
            <div id="precision">
              <PrecisionCare />
            </div>
            <div id="testimonials">
              <Testimonials />
            </div>
            <div id="consultation">
              <PricingReveal />
            </div>
            <div id="contact">
              <Contact />
            </div>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
