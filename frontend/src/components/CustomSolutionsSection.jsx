import React from 'react';
import { Smartphone, Globe, Camera, Rocket, ArrowRight } from 'lucide-react';

export const CustomSolutionsSection = ({ onContactUs }) => {
  const solutions = [
    {
      icon: Rocket,
      title: 'SaaS Onboarding Assistant',
      description: 'Guide new users through your software with intelligent, context-aware assistance.'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Integration',
      description: 'Seamlessly embed AskDD directly into your iOS and Android applications.'
    },
    {
      icon: Globe,
      title: 'Multi-Language Support',
      description: 'Serve a global audience by implementing AskDD in any language you need.'
    },
    {
      icon: Camera,
      title: 'Custom Quoting Tool',
      description: 'Capture photos and videos from customers to generate accurate, automated quotes.'
    }
  ];

  return (
    <section className="py-24 px-6" style={{ background: 'linear-gradient(to bottom, #f8fafc, #fff)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Customise AskDD for Your Needs</h2>
          <p className="body-large mx-auto max-w-2xl" style={{ color: 'var(--text-secondary)' }}>
            AskDD can be tailored to your specific business requirements. From custom integrations to specialized workflows, we build it for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon-wrapper">
                <solution.icon size={28} color="white" />
              </div>
              <h3 className="heading-3 text-lg mb-3">{solution.title}</h3>
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                {solution.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={onContactUs}
            className="btn-primary"
          >
            Contact Us to Discuss Your Use Case
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

/* Styles */
const styles = `
.solution-card {
  background: white;
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 24px;
  transition: all 0.2s ease;
  text-align: left;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.solution-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.08);
  border-color: var(--accent-blue-light);
}

.solution-icon-wrapper {
  width: 56px;
  height: 56px;
  background: var(--accent-blue);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
}

.solution-card:nth-child(2) .solution-icon-wrapper {
  background: var(--accent-primary);
  box-shadow: 0 4px 12px rgba(234, 88, 12, 0.25);
}

.solution-card:nth-child(3) .solution-icon-wrapper {
  background: #10b981;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
}

.solution-card:nth-child(4) .solution-icon-wrapper {
  background: #8b5cf6;
  box-shadow: 0 4px 12px rgba(139, 92, 246, 0.25);
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
