import React from 'react';
import { Sparkles, Phone, Video } from 'lucide-react';

export const FutureFeaturesSection = () => {
  const futureFeatures = [
    {
      icon: Phone,
      title: 'Conversational Voice AI',
      description: 'Natural voice interactions with your customers'
    },
    {
      icon: Video,
      title: 'Instant AI Video Calls',
      description: 'Face-to-face AI agent consultations on demand'
    }
  ];

  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-section)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--accent-wash)] rounded-full mb-6">
          <Sparkles size={20} style={{ color: 'var(--accent-primary)' }} />
          <span className="text-sm font-medium" style={{ color: 'var(--accent-primary)' }}>
            Coming Soon
          </span>
        </div>
        
        <h2 className="heading-2 mb-6">The Future of Engagement</h2>
        <p className="body-large mb-12" style={{ color: 'var(--text-secondary)' }}>
          We're constantly innovating. Get ready for upcoming features that will take your customer engagement to the next level.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {futureFeatures.map((feature, index) => (
            <div 
              key={index}
              className="future-feature-card"
            >
              <div className="future-icon-wrapper">
                <feature.icon size={32} style={{ color: 'var(--accent-blue)' }} />
              </div>
              <h3 className="heading-3 mb-2">{feature.title}</h3>
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* Styles */
const styles = `
.future-feature-card {
  background: var(--bg-card);
  border: 2px dashed var(--border-light);
  border-radius: 12px;
  padding: 32px;
  transition: all 0.2s ease;
}

.future-feature-card:hover {
  border-color: var(--accent-blue);
  transform: translateY(-2px);
}

.future-icon-wrapper {
  width: 64px;
  height: 64px;
  background: rgba(37, 99, 235, 0.1);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);