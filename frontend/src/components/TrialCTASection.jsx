import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

export const TrialCTASection = ({ onBookDemo }) => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="cta-card">
          <div className="text-center">
            <h2 className="heading-2 mb-4" style={{ color: 'white' }}>
              Experience the Growth Engine for Free
            </h2>
            <p className="body-large mb-8" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
              Get 30 days of full access to our most popular plan, including the AI Assessment and Automated Proposal Generator. No risk, no credit card required.
            </p>
            
            <button onClick={onBookDemo} className="btn-cta-white">
              Start Your Free Trial
              <ArrowRight size={20} />
            </button>
            
            <div className="flex items-center justify-center gap-6 mt-8 flex-wrap">
              <div className="flex items-center gap-2">
                <Shield size={20} style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                <span className="body-small" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  No credit card required
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={20} style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                <span className="body-small" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Cancel anytime
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield size={20} style={{ color: 'rgba(255, 255, 255, 0.8)' }} />
                <span className="body-small" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                  Setup in minutes
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Styles */
const styles = `
.cta-card {
  background: linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-strong) 50%, var(--accent-blue) 100%);
  border-radius: 24px;
  padding: 64px 32px;
  box-shadow: 0 20px 60px rgba(234, 88, 12, 0.3);
  position: relative;
  overflow: hidden;
}

.cta-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.btn-cta-white {
  background: white;
  color: var(--accent-primary);
  border: none;
  border-radius: 9999px;
  padding: 16px 32px;
  font-family: system-ui, sans-serif;
  font-weight: 600;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 52px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.btn-cta-white:hover {
  transform: scale(1.05);
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.25);
}

.btn-cta-white:active {
  transform: scale(0.98);
}

@media (max-width: 768px) {
  .cta-card {
    padding: 48px 24px;
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);