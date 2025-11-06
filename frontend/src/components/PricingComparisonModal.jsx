import React from 'react';
import { X, Check, Minus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

export const PricingComparisonModal = ({ isOpen, onClose }) => {
  const features = [
    { name: '24/7 Web Chat Widget', essential: true, growth: true, enterprise: true },
    { name: 'Knowledge Base Integration', essential: true, growth: true, enterprise: true },
    { name: 'Automated Lead Capture', essential: true, growth: true, enterprise: true },
    { name: 'Email Lead Alerts', essential: true, growth: true, enterprise: true },
    { name: 'Basic Analytics', essential: true, growth: false, enterprise: false },
    { name: 'Website Integration Code', essential: true, growth: true, enterprise: true },
    { name: 'Monthly Conversations', essential: '100', growth: '500', enterprise: '2,000' },
    { name: 'Multi-Channel (WhatsApp/Messenger)', essential: false, growth: true, enterprise: true },
    { name: 'AI Readiness Assessment', essential: false, growth: true, enterprise: true },
    { name: 'Full Workflow Engine (Make/N8N)', essential: false, growth: true, enterprise: true },
    { name: 'Client Admin Portal', essential: false, growth: true, enterprise: true },
    { name: 'Live Analytics Dashboard', essential: false, growth: true, enterprise: true },
    { name: 'Priority Email Support', essential: false, growth: true, enterprise: true },
    { name: 'Conversational Voice AI', essential: false, growth: false, enterprise: true },
    { name: 'Advanced Business Intelligence', essential: false, growth: false, enterprise: true },
    { name: 'Complete White-Labeling', essential: false, growth: false, enterprise: true },
    { name: 'Custom Flow Builder', essential: false, growth: false, enterprise: true },
    { name: 'Direct CRM Integrations', essential: false, growth: false, enterprise: true },
    { name: 'Dedicated Account Manager', essential: false, growth: false, enterprise: true },
    { name: 'Custom Onboarding', essential: false, growth: false, enterprise: true },
  ];

  const renderCell = (value) => {
    if (value === true) {
      return <Check size={20} style={{ color: 'var(--accent-primary)' }} />;
    } else if (value === false) {
      return <Minus size={20} style={{ color: 'var(--text-muted)' }} />;
    } else {
      return <span className="body-small font-medium">{value}</span>;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="comparison-modal-content">
        <DialogHeader>
          <DialogTitle className="heading-3">Detailed Plan Comparison</DialogTitle>
        </DialogHeader>
        
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th className="feature-column">Feature</th>
                <th className="plan-column">
                  <div className="plan-header">
                    <div className="plan-name">Essential Chat</div>
                    <div className="plan-price">$22 <span>AUD/mo</span></div>
                  </div>
                </th>
                <th className="plan-column popular">
                  <div className="plan-header">
                    <div className="plan-badge">Most Popular</div>
                    <div className="plan-name">Growth Engine</div>
                    <div className="plan-price">$50 <span>AUD/mo</span></div>
                  </div>
                </th>
                <th className="plan-column">
                  <div className="plan-header">
                    <div className="plan-name">Enterprise AI</div>
                    <div className="plan-price">$350 <span>AUD/mo</span></div>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index}>
                  <td className="feature-name">{feature.name}</td>
                  <td className="text-center">{renderCell(feature.essential)}</td>
                  <td className="text-center popular-column">{renderCell(feature.growth)}</td>
                  <td className="text-center">{renderCell(feature.enterprise)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Fair Use Policy */}
        <div className="policy-section">
          <h4 className="heading-3 mb-4">Fair Use Policy & Additional Information</h4>
          
          <div className="policy-item">
            <h5 className="body-medium font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Conversation Definition</h5>
            <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
              A "conversation" is a unique interaction between a visitor and the AI Assistant within a 24-hour period. Multiple messages within that timeframe count as one conversation.
            </p>
          </div>

          <div className="policy-item">
            <h5 className="body-medium font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Overage Policy</h5>
            <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
              If you exceed your monthly limit, you'll be notified and can upgrade or pay a small overage fee. Service will not be automatically cut off.
            </p>
          </div>

          <div className="policy-item">
            <h5 className="body-medium font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>Setup Fees (Optional)</h5>
            <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
              <strong>Quickstart Setup ($100 AUD):</strong> Basic configuration and knowledge base setup<br/>
              <strong>Pro Onboarding ($499 AUD):</strong> Complete custom setup, training, and optimization
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

/* Styles */
const styles = `
.comparison-modal-content {
  max-width: 900px;
  max-height: 90vh;
  background: var(--bg-card);
  border-radius: 16px;
  padding: 32px;
  overflow-y: auto;
}

.comparison-table-wrapper {
  overflow-x: auto;
  margin: 24px 0;
  border: 1px solid var(--border-light);
  border-radius: 12px;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.comparison-table thead {
  background: var(--bg-section);
  position: sticky;
  top: 0;
  z-index: 10;
}

.comparison-table th {
  padding: 16px;
  text-align: left;
  border-bottom: 2px solid var(--border-medium);
}

.comparison-table th.feature-column {
  font-weight: 600;
  color: var(--text-primary);
  width: 40%;
}

.comparison-table th.plan-column {
  text-align: center;
  width: 20%;
}

.comparison-table th.popular {
  background: var(--accent-wash);
  border-left: 2px solid var(--accent-primary);
  border-right: 2px solid var(--accent-primary);
}

.plan-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.plan-badge {
  background: var(--gradient-button);
  color: white;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 4px;
}

.plan-name {
  font-weight: 600;
  color: var(--text-primary);
  font-size: 1rem;
}

.plan-price {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
}

.plan-price span {
  font-size: 0.875rem;
  font-weight: 400;
  color: var(--text-secondary);
}

.comparison-table tbody tr {
  border-bottom: 1px solid var(--border-light);
  transition: background 0.2s ease;
}

.comparison-table tbody tr:hover {
  background: rgba(0, 0, 0, 0.02);
}

.comparison-table td {
  padding: 16px;
}

.comparison-table td.feature-name {
  font-weight: 500;
  color: var(--text-body);
}

.comparison-table td.popular-column {
  background: rgba(234, 88, 12, 0.02);
}

.policy-section {
  margin-top: 32px;
  padding-top: 32px;
  border-top: 2px solid var(--border-light);
}

.policy-item {
  margin-bottom: 20px;
  padding: 16px;
  background: var(--bg-section);
  border-radius: 8px;
}

@media (max-width: 768px) {
  .comparison-modal-content {
    padding: 20px;
  }
  
  .comparison-table th,
  .comparison-table td {
    padding: 12px 8px;
    font-size: 0.875rem;
  }
  
  .plan-price {
    font-size: 1.25rem;
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);