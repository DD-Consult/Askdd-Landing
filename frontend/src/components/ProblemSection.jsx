import React from 'react';
import { Clock, MessageSquareX, Users, TrendingDown } from 'lucide-react';

export const ProblemSection = () => {
  const problems = [
    {
      icon: MessageSquareX,
      title: 'Fragmented Customer Experience',
      description: 'Customers reach out across different channels but get inconsistent responses'
    },
    {
      icon: Clock,
      title: 'Losing Leads After Hours',
      description: 'Your best prospects visit at night and on weekends—when nobody is there to help'
    },
    {
      icon: Users,
      title: 'Time Wasted on FAQs',
      description: 'Your team spends hours answering the same questions instead of closing deals'
    },
    {
      icon: TrendingDown,
      title: 'Inefficient Lead Nurturing',
      description: 'Prospects slip through the cracks without proper follow-up and qualification'
    }
  ];

  return (
    <section className="py-24 px-6" style={{ background: 'var(--bg-section)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">What's the Gap?</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Small and mid-size businesses face critical challenges in customer engagement
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="problem-card"
            >
              <div className="problem-icon-wrapper">
                <problem.icon size={32} style={{ color: 'var(--accent-primary)' }} />
              </div>
              <h3 className="heading-3 mb-3">{problem.title}</h3>
              <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
                {problem.description}
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
.problem-card {
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 32px;
  transition: all 0.2s ease;
  cursor: default;
}

.problem-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: var(--border-medium);
}

.problem-icon-wrapper {
  width: 64px;
  height: 64px;
  background: var(--accent-wash);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);