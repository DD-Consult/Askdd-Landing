import React, { useState } from 'react';
import { Check, Star, Info } from 'lucide-react';
import { PricingComparisonModal } from './PricingComparisonModal';

export const PricingSection = ({ onBookDemo }) => {
  const [showComparison, setShowComparison] = useState(false);

  const plans = [
    {
      name: 'Essential Chat',
      price: '$22',
      audience: 'Solopreneurs & Startups',
      description: 'Perfect for getting started with AI chat',
      features: [
        '24/7 Web Chat',
        'Knowledge Base Answers',
        'Automated Lead Capture',
        'Email Lead Alerts',
        'Basic Analytics',
        'Website Integration'
      ],
      popular: false,
      cta: 'Get Started'
    },
    {
      name: 'Growth Engine',
      price: '$50',
      audience: 'Growing Businesses & Agencies',
      description: 'Most popular for scaling businesses',
      features: [
        'Everything in Essential, PLUS:',
        'Multi-Channel (WhatsApp/Messenger)',
        'AI Readiness Assessment',
        'Full Workflow Engine',
        'Client Admin Portal',
        'Live Analytics Dashboard',
        'Priority Support'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise AI',
      price: '$350',
      audience: 'Established Businesses',
      description: 'Advanced features for enterprise needs',
      features: [
        'Everything in Growth, PLUS:',
        'Conversational Voice AI',
        'Advanced Business Intelligence',
        'Complete White-Labeling',
        'Custom Flow Builder',
        'Direct CRM Integrations',
        'Dedicated Account Manager',
        'Custom Onboarding'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6" style={{ background: 'var(--bg-section)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Simple, Transparent Pricing</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Choose the plan that fits your business needs. All plans include 30-day free trial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
            >
              {plan.popular && (
                <div className="popular-badge">
                  <Star size={16} fill="currentColor" />
                  <span>Most Popular</span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="heading-3 mb-2">{plan.name}</h3>
                <p className="body-small mb-4" style={{ color: 'var(--text-muted)' }}>
                  {plan.audience}
                </p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold" style={{ color: 'var(--text-primary)' }}>
                    {plan.price}
                  </span>
                  <span className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                    AUD/month
                  </span>
                </div>
                <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                  {plan.description}
                </p>
              </div>
              
              <button 
                onClick={onBookDemo}
                className={plan.popular ? 'btn-primary w-full mb-6' : 'btn-secondary w-full mb-6'}
              >
                {plan.cta}
              </button>
              
              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <Check 
                      size={20} 
                      style={{ 
                        color: plan.popular ? 'var(--accent-primary)' : 'var(--accent-blue)', 
                        flexShrink: 0,
                        marginTop: '2px'
                      }} 
                    />
                    <span className="body-small" style={{ color: 'var(--text-body)' }}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Comparison Button */}
        <div className="text-center">
          <button 
            onClick={() => setShowComparison(true)}
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Info size={18} />
            View Detailed Comparison
          </button>
        </div>
      </div>

      <PricingComparisonModal 
        isOpen={showComparison} 
        onClose={() => setShowComparison(false)} 
      />
    </section>
  );
};

/* Styles */
const styles = `
.pricing-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 32px;
  transition: all 0.2s ease;
  position: relative;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.pricing-card.popular {
  border: 2px solid var(--accent-primary);
  box-shadow: 0 4px 24px rgba(234, 88, 12, 0.15);
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--gradient-button);
  color: white;
  padding: 6px 16px;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 12px rgba(234, 88, 12, 0.3);
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);