import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export const SolutionSection = () => {
  const benefits = [
    'Engage customers 24/7 across all your channels',
    'Qualify leads with AI-powered conversations',
    'Automatically generate personalized proposals',
    'Integrate seamlessly with your existing workflow'
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div>
            <div className="inline-block px-4 py-2 bg-[var(--accent-wash)] rounded-full mb-6">
              <span className="text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>
                The Solution
              </span>
            </div>
            
            <h2 className="heading-2 mb-6">
              How Ask DD Transforms Your Business
            </h2>
            
            <p className="body-large mb-8" style={{ color: 'var(--text-secondary)' }}>
              Ask DD is your all-in-one AI assistant that works across your website, WhatsApp, and Facebook Messenger to engage, qualify, and convert leads automatically.
            </p>
            
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={24} style={{ color: 'var(--accent-primary)', flexShrink: 0 }} />
                  <p className="body-medium" style={{ color: 'var(--text-body)' }}>{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right: Image */}
          <div className="relative">
            <div className="solution-mockup">
              <img 
                src="https://customer-assets.emergentagent.com/job_33a0d074-936c-4861-b14b-10f50673f9e6/artifacts/yo65pjlq_chatbot%20response%20image.png"
                alt="Ask DD Conversation Example"
                className="w-full rounded-2xl shadow-xl"
              />
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--accent-blue)] opacity-10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[var(--accent-primary)] opacity-10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* Styles */
const styles = `
.solution-mockup {
  position: relative;
}

@media (max-width: 1024px) {
  .solution-mockup {
    margin-top: 2rem;
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);