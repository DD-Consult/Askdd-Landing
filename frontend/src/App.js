import React, { useState } from 'react';
import './App.css';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { PricingSection } from './components/PricingSection';
import { TrialCTASection } from './components/TrialCTASection';
import { FutureFeaturesSection } from './components/FutureFeaturesSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';
import { ContactModal } from './components/ContactModal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleBookDemo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleContactUs = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="App">
      <Navigation onBookDemo={handleBookDemo} />
      <HeroSection onBookDemo={handleBookDemo} />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <CaseStudiesSection />
      <PricingSection onBookDemo={handleBookDemo} />
      <TrialCTASection onBookDemo={handleBookDemo} />
      <FutureFeaturesSection />
      <FAQSection onBookDemo={handleBookDemo} />
      <Footer />
      <BookDemoModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default App;