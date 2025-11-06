import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export const HeroSection = ({ onBookDemo }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-wash)] rounded-full mb-6">
          <div className="w-2 h-2 bg-[var(--accent-primary)] rounded-full animate-pulse"></div>
          <span className="text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>
            Your 24/7 Digital Sales Agent
          </span>
        </div>
        
        <h1 className="heading-1 mb-6">
          Meet Ask DD: Your 24/7 AI Sales Agent
        </h1>
        
        <p className="body-large mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Stop losing leads overnight. Turn your website visitors, WhatsApp, and Facebook messages into qualified, sales-ready leads—automatically.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button onClick={onBookDemo} className="btn-primary">
            Start Your Free Trial
            <ArrowRight size={18} />
          </button>
          <button className="btn-secondary">
            <Play size={18} />
            Watch Demo
          </button>
        </div>
        
        <p className="body-small" style={{ color: 'var(--text-muted)' }}>
          No credit card required • 30-day free trial • Setup in minutes
        </p>
        
        {/* Hero Image/Mockup */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 pointer-events-none"></div>
            <img 
              src="https://customer-assets.emergentagent.com/job_33a0d074-936c-4861-b14b-10f50673f9e6/artifacts/vhme21ro_chatbot%20image.png"
              alt="Ask DD Chatbot Interface"
              className="w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

/* Styles */
const styles = `
.hero-section {
  background: var(--gradient-hero);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  padding: 10rem 1.5rem 4rem;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

@media (max-width: 768px) {
  .hero-section {
    padding: 7rem 1rem 3rem;
    min-height: 90vh;
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);