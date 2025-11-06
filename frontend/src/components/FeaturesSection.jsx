import React from 'react';
import { MessageSquare, FileCheck, Workflow, Wrench, BarChart3, Settings } from 'lucide-react';

export const FeaturesSection = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Live Analytics Dashboard',
      description: 'Track conversations, conversions, and popular questions in real-time. Get actionable insights to optimize your customer engagement.'
    },
    {
      icon: Settings,
      title: 'Fully Customizable',
      description: 'Match your brand perfectly. Customize colors, sizes, messages, and behavior to create the perfect experience for your customers.'
    },
    {
      icon: MessageSquare,
      title: 'Multi-Channel Support',
      description: 'Seamlessly engage customers across your website, WhatsApp, and Facebook Messenger'
    },
    {
      icon: FileCheck,
      title: 'AI-Powered Forms',
      description: 'Intelligent forms that adapt and qualify leads through smart, conversational interactions'
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Connect seamlessly to your email lists and CRM via Make.com or N8N'
    },
    {
      icon: Wrench,
      title: 'Agent Builder Portal',
      description: 'Customize your chatbot\'s responses, tone, and appearance. Train the AI with your own data, FAQs, and unique business insights for perfectly tailored interactions.'
    }
  ];

  return (
    <section id="features" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Powerful Features for Growth</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Everything you need to automate and scale your customer engagement
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

        {/* Highlighted Features with Visuals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
          {/* Live Analytics Dashboard */}
          <div className="feature-highlight">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="feature-icon-wrapper-small">
                  <BarChart3 size={24} style={{ color: 'white' }} />
                </div>
                <h3 className="heading-3">Live Analytics Dashboard</h3>
              </div>
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                Monitor your AI assistant's performance with comprehensive analytics. Track engagement metrics, conversion rates, and identify optimization opportunities in real-time.
              </p>
            </div>
            <div className="analytics-showcase">
              <img 
                src="https://customer-assets.emergentagent.com/job_ai-sales-agent-8/artifacts/d36ig3tm_analytics%20screenshot.png"
                alt="Ask DD Analytics Dashboard"
                className="w-full rounded-xl shadow-2xl border border-[var(--border-light)]"
              />
            </div>
          </div>

          {/* Customization Demo */}
          <div className="feature-highlight">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="feature-icon-wrapper-small">
                  <Settings size={24} style={{ color: 'white' }} />
                </div>
                <h3 className="heading-3">Fully Customizable</h3>
              </div>
              <p className="body-medium mb-4" style={{ color: 'var(--text-secondary)' }}>
                Complete control over your chatbot's look and feel. Adjust colors, positioning, welcome messages, and interaction styles to perfectly align with your brand identity.
              </p>
            </div>
            <div className="customization-demo">
              <img 
                src="https://customer-assets.emergentagent.com/job_33a0d074-936c-4861-b14b-10f50673f9e6/artifacts/pf9fjkf3_customisations%20screenshot.png"
                alt="Ask DD Customization Options"
                className="w-full rounded-xl shadow-2xl border border-[var(--border-light)]"
              />
            </div>
          </div>
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

.feature-icon-wrapper-small {
  width: 48px;
  height: 48px;
  background: var(--gradient-button);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(234, 88, 12, 0.25);
}

.feature-highlight {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 32px;
  transition: all 0.3s ease;
}

.feature-highlight:hover {
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
  border-color: var(--accent-primary);
}

.analytics-showcase,
.customization-demo {
  position: relative;
  overflow: hidden;
  border-radius: 12px;
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);