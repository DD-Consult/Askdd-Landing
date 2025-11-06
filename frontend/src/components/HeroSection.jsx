import React from 'react';
import { ArrowRight } from 'lucide-react';

export const HeroSection = ({ onBookDemo }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="heading-1 mb-6">
          Meet Ask DD:<br />Your 24/7 AI Agent
        </h1>
        
        <p className="body-large mb-8 max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
          Stop losing leads overnight. Turn your website visitors, WhatsApp, and Facebook messages into qualified, sales-ready leads—automatically.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button onClick={onBookDemo} className="btn-primary">
            Start Your Free Trial
            <ArrowRight size={18} />
          </button>
        </div>
        
        <p className="body-small" style={{ color: 'var(--text-muted)' }}>
          No credit card required • 30-day free trial • Setup in minutes
        </p>
      </div>
    </section>
  );
};

/* Styles */
const styles = `
.hero-section {
  background: var(--gradient-hero);
  min-height: 80vh;
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
    min-height: 70vh;
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);