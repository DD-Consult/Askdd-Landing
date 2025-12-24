import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ChatbotAnimationSection } from './components/ChatbotAnimationSection';
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
import { PrivacyPolicy } from './pages/PrivacyPolicy';

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

  // Home page component
  const HomePage = () => (
    <>
      <Navigation onBookDemo={handleBookDemo} />
      <HeroSection onBookDemo={handleBookDemo} />
      <ChatbotAnimationSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <CaseStudiesSection />
      <PricingSection onBookDemo={handleBookDemo} />
      <TrialCTASection onBookDemo={handleBookDemo} />
      <FutureFeaturesSection />
      <FAQSection onContactUs={handleContactUs} />
      <Footer />
      <BookDemoModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <ContactModal isOpen={isContactModalOpen} onClose={handleCloseContactModal} />
    </>
  );

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;