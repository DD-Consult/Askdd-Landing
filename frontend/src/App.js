import React, { useState } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { PricingSection } from './components/PricingSection';
import { TrialCTASection } from './components/TrialCTASection';
import { FutureFeaturesSection } from './components/FutureFeaturesSection';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookDemo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <Navigation onBookDemo={handleBookDemo} />
      <HeroSection onBookDemo={handleBookDemo} />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <PricingSection onBookDemo={handleBookDemo} />
      <TrialCTASection onBookDemo={handleBookDemo} />
      <FutureFeaturesSection />
      <Footer />
      <BookDemoModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;