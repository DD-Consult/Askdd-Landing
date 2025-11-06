import React from 'react';
import { MessageSquare, Brain, FileText, Workflow, Settings, BarChart3 } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Multi-Channel Support',
      description: 'Seamlessly engage customers across your website, WhatsApp, and Facebook Messenger'
    },
    {
      icon: Brain,
      title: 'AI-Powered Assessment',
      description: 'Qualify and educate leads through intelligent, conversational interactions'
    },
    {
      icon: FileText,
      title: 'Automated Proposals',
      description: 'Instantly generate and send personalized PDF proposals to qualified leads'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Connect seamlessly to your email lists and CRM via Make.com or N8N'
    },
    {
      icon: Settings,
      title: 'Full Customization',
      description: 'Customize branding, messaging, and behavior through the client admin portal'
    },
    {
      icon: BarChart3,
      title: 'Live Analytics Dashboard',
      description: 'Track conversations, conversions, and popular questions in real-time'
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Powerful Features for Growth</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Everything you need to automate and scale your customer engagement
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card"
            >
              <div className="feature-icon-wrapper">
                <feature.icon size={28} style={{ color: 'white' }} />
              </div>
              <h3 className="heading-3 mb-3">{feature.title}</h3>
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Easy Integration Callout */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-[var(--bg-section)] rounded-2xl px-8 py-6 border border-[var(--border-light)]">
            <p className="body-large mb-2" style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
              ✨ Easy to Add to Your Website
            </p>
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              Just copy and paste a few lines of code — no technical expertise required!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Styles */
const styles = `
.feature-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 32px;
  transition: all 0.2s ease;
  cursor: default;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  border-color: var(--accent-primary);
}

.feature-icon-wrapper {
  width: 56px;
  height: 56px;
  background: var(--gradient-button);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  box-shadow: 0 4px 12px rgba(234, 88, 12, 0.25);
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);