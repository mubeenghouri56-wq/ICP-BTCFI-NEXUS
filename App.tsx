import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import SwapDemo from './components/SwapDemo';
import AdvancedCapabilities from './components/AdvancedCapabilities';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-brand-dark bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <Header />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Hero />
        <Features />
        <HowItWorks />
        <UseCases />
        <SwapDemo />
        <AdvancedCapabilities />
      </main>
      <Footer />
    </div>
  );
};

export default App;
