import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ChatbotAnimationSection } from './components/ChatbotAnimationSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { FeaturesSection } from './components/FeaturesSection';
import { CustomSolutionsSection } from './components/CustomSolutionsSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { PricingSection } from './components/PricingSection';
import { TrialCTASection } from './components/TrialCTASection';
import { FutureFeaturesSection } from './components/FutureFeaturesSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { BookDemoModal } from './components/BookDemoModal';
import { BookSessionModal } from './components/BookSessionModal';
import { ContactModal } from './components/ContactModal';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSessionModalOpen, setIsSessionModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleBookDemo = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleBookSession = () => {
    setIsSessionModalOpen(true);
  };

  const handleCloseSessionModal = () => {
    setIsSessionModalOpen(false);
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
      <Navigation onBookDemo={handleBookDemo} onBookSession={handleBookSession} />
      <HeroSection onBookDemo={handleBookDemo} />
      <ChatbotAnimationSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <CustomSolutionsSection onContactUs={handleContactUs} />
      <CaseStudiesSection />
      <PricingSection onBookDemo={handleBookDemo} onContactUs={handleContactUs} />
      <TrialCTASection onBookDemo={handleBookDemo} />
      <FutureFeaturesSection />
      <FAQSection onContactUs={handleContactUs} />
      <Footer />
      <BookDemoModal isOpen={isModalOpen} onClose={handleCloseModal} />
      <BookSessionModal isOpen={isSessionModalOpen} onClose={handleCloseSessionModal} />
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