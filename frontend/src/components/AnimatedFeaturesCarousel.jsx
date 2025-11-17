import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, FileCheck, FileText, TrendingUp } from 'lucide-react';

export const AnimatedFeaturesCarousel = () => {
  const [currentFeature, setCurrentFeature] = useState(0);

  const features = [
    {
      id: 1,
      icon: Clock,
      title: '24/7 Availability',
      description: 'Never miss a lead, even when you sleep',
      component: Feature24Hours
    },
    {
      id: 2,
      icon: FileCheck,
      title: 'Lead Qualification',
      description: 'AI-powered forms that adapt to each visitor',
      component: FeatureLeadQualification
    },
    {
      id: 3,
      icon: FileText,
      title: 'Automated Proposals',
      description: 'Generate personalized PDFs instantly',
      component: FeatureAutomatedProposals
    },
    {
      id: 4,
      icon: TrendingUp,
      title: 'Live Analytics',
      description: 'Real-time insights and performance tracking',
      component: FeatureAnalytics
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  const FeatureComponent = features[currentFeature].component;

  return (
    <div className="animated-carousel-container">
      <div className="carousel-header">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 mb-6"
          >
            {React.createElement(features[currentFeature].icon, { 
              size: 40, 
              style: { color: 'var(--accent-primary)' } 
            })}
            <div>
              <h3 className="heading-3 mb-1">{features[currentFeature].title}</h3>
              <p className="body-small" style={{ color: 'var(--text-muted)' }}>
                {features[currentFeature].description}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-display">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFeature}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <FeatureComponent />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="carousel-indicators">
        {features.map((feature, index) => (
          <button
            key={feature.id}
            onClick={() => setCurrentFeature(index)}
            className={`indicator ${currentFeature === index ? 'active' : ''}`}
            aria-label={`Show ${feature.title}`}
          >
            <div className="indicator-progress">
              {currentFeature === index && (
                <motion.div
                  className="indicator-fill"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 7, ease: 'linear' }}
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

function Feature24Hours() {
  const [isDayTime, setIsDayTime] = React.useState(true);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIsDayTime(prev => !prev);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="feature-display">
      <div className="mockup-browser">
        <div className="browser-header">
          <div className="browser-dots">
            <span></span><span></span><span></span>
          </div>
          <div className="browser-url">yourwebsite.com</div>
        </div>
        <div className="browser-content">
          <div className="day-night-cycle">
            <motion.div
              className="sun-moon"
              key={isDayTime ? 'day' : 'night'}
              initial={{ opacity: 0, scale: 0.5, rotate: -90 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 0.5, rotate: 90 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              {isDayTime ? (
                <div className="sun">☀️</div>
              ) : (
                <div className="moon">🌙</div>
              )}
            </motion.div>
          </div>

          <motion.div
            className="chatbot-widget-demo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="widget-bubble">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                💬
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="availability-message"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="message-box">
              <p>Always online, always ready</p>
              <div className="status-indicator">
                <span className="status-dot"></span>
                Available 24/7
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function FeatureLeadQualification() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="feature-display">
      <div className="mockup-chat">
        <div className="chat-messages">
          <motion.div
            className="chat-message bot"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="message-bubble">
              Hi! How can I help you today?
            </div>
          </motion.div>

          {step >= 1 && (
            <motion.div
              className="chat-message user"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="message-bubble">
                I am interested in your services
              </div>
            </motion.div>
          )}

          {step >= 2 && (
            <motion.div
              className="chat-message bot"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="message-bubble">
                Great! Let me ask a few questions...
              </div>
            </motion.div>
          )}

          {step >= 3 && (
            <motion.div
              className="chat-form"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="form-field">
                <div className="form-label">Company Name</div>
                <div className="form-input-demo">
                  <motion.div
                    className="typing-text"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 1 }}
                  >
                    Acme Corporation
                  </motion.div>
                </div>
              </div>
              <div className="form-field">
                <div className="form-label">Budget Range</div>
                <div className="form-input-demo">$5,000 - $10,000</div>
              </div>
              <motion.div
                className="check-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5 }}
              >
                ✓
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

function FeatureAutomatedProposals() {
  return (
    <div className="feature-display">
      <div className="proposal-demo">
        <motion.div
          className="document-stack"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <motion.div
            className="pdf-document"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="pdf-header">
              <div className="pdf-icon">📄</div>
              <div className="pdf-title">Proposal.pdf</div>
            </div>
            <div className="pdf-content">
              <div className="pdf-line long"></div>
              <div className="pdf-line"></div>
              <div className="pdf-line long"></div>
              <div className="pdf-line"></div>
            </div>
          </motion.div>

          <motion.div
            className="generation-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="status-steps">
              <motion.div className="step completed">
                ✓ Analyzing requirements
              </motion.div>
              <motion.div
                className="step completed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                ✓ Generating content
              </motion.div>
              <motion.div
                className="step completed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                ✓ Sent to customer
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="success-badge"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 2, type: 'spring', stiffness: 200 }}
          >
            <span className="badge-icon">🎉</span>
            <span>Proposal Generated!</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

function FeatureAnalytics() {
  return (
    <div className="feature-display">
      <div className="analytics-demo">
        <div className="analytics-grid">
          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="stat-label">Conversations</div>
            <motion.div
              className="stat-value"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                1,247
              </motion.span>
            </motion.div>
            <div className="stat-trend up">↗ 23%</div>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="stat-label">Qualified Leads</div>
            <motion.div className="stat-value">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                342
              </motion.span>
            </motion.div>
            <div className="stat-trend up">↗ 18%</div>
          </motion.div>

          <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="stat-label">Proposals Sent</div>
            <motion.div className="stat-value">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
              >
                156
              </motion.span>
            </motion.div>
            <div className="stat-trend up">↗ 31%</div>
          </motion.div>
        </div>

        <motion.div
          className="chart-demo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <div className="chart-bars">
            {[60, 75, 45, 90, 70, 85, 95].map((height, index) => (
              <motion.div
                key={index}
                className="chart-bar"
                initial={{ height: 0 }}
                animate={{ height: `${height}%` }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                style={{ background: 'var(--gradient-button)' }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const styles = `
.animated-carousel-container {
  position: relative;
  background: var(--bg-card);
  border: 1px solid var(--border-light);
  border-radius: 16px;
  padding: 32px;
  min-height: 500px;
}

.carousel-header {
  margin-bottom: 24px;
}

.carousel-display {
  min-height: 380px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.carousel-indicators {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 24px;
}

.indicator {
  width: 50px;
  height: 4px;
  background: var(--border-light);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.3s ease;
}

.indicator:hover {
  background: var(--border-medium);
}

.indicator.active {
  background: var(--accent-wash);
}

.indicator-progress {
  width: 100%;
  height: 100%;
  position: relative;
}

.indicator-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--gradient-button);
}

.feature-display {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

.mockup-browser {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.browser-header {
  background: #f5f5f5;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
}

.browser-dots {
  display: flex;
  gap: 6px;
}

.browser-dots span {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #ddd;
}

.browser-dots span:nth-child(1) { background: #ff5f57; }
.browser-dots span:nth-child(2) { background: #ffbd2e; }
.browser-dots span:nth-child(3) { background: #28ca42; }

.browser-url {
  flex: 1;
  background: white;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 0.875rem;
  color: var(--text-muted);
}

.browser-content {
  height: 300px;
  position: relative;
  background: linear-gradient(to bottom, #e0f2fe, #ffffff);
  display: flex;
  align-items: center;
  justify-content: center;
}

.day-night-cycle {
  position: absolute;
  top: 20px;
  right: 20px;
}

.sun-moon {
  position: relative;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
}

.sun, .moon {
  display: block;
}

.chatbot-widget-demo {
  position: absolute;
  bottom: 20px;
  right: 20px;
}

.widget-bubble {
  width: 60px;
  height: 60px;
  background: var(--gradient-button);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0 4px 12px rgba(234, 88, 12, 0.3);
  cursor: pointer;
}

.availability-message {
  position: absolute;
  bottom: 90px;
  right: 20px;
}

.message-box {
  background: white;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-size: 0.875rem;
  text-align: center;
}

.status-indicator {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 8px;
  color: var(--accent-primary);
  font-weight: 600;
  font-size: 0.75rem;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.7; transform: scale(1.2); }
}

.mockup-chat {
  background: white;
  border-radius: 12px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  padding: 24px;
  max-width: 400px;
  margin: 0 auto;
}

.chat-messages {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.chat-message {
  display: flex;
}

.chat-message.bot {
  justify-content: flex-start;
}

.chat-message.user {
  justify-content: flex-end;
}

.message-bubble {
  max-width: 80%;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.875rem;
}

.chat-message.bot .message-bubble {
  background: var(--bg-section);
  color: var(--text-body);
}

.chat-message.user .message-bubble {
  background: var(--gradient-button);
  color: white;
}

.chat-form {
  background: var(--bg-section);
  border-radius: 12px;
  padding: 16px;
  margin-top: 8px;
  position: relative;
}

.form-field {
  margin-bottom: 12px;
}

.form-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 6px;
}

.form-input-demo {
  background: white;
  border: 1px solid var(--border-light);
  border-radius: 6px;
  padding: 8px 12px;
  font-size: 0.875rem;
  color: var(--text-body);
  overflow: hidden;
}

.typing-text {
  white-space: nowrap;
}

.check-icon {
  position: absolute;
  top: -12px;
  right: -12px;
  width: 32px;
  height: 32px;
  background: #10b981;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

.proposal-demo {
  padding: 20px;
}

.document-stack {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.pdf-document {
  background: white;
  border: 2px solid var(--border-light);
  border-radius: 12px;
  padding: 24px;
  width: 280px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.pdf-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 2px solid var(--border-light);
}

.pdf-icon {
  font-size: 32px;
}

.pdf-title {
  font-weight: 600;
  color: var(--text-primary);
}

.pdf-content {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.pdf-line {
  height: 8px;
  background: var(--bg-section);
  border-radius: 4px;
  width: 60%;
}

.pdf-line.long {
  width: 100%;
}

.generation-status {
  background: white;
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 16px;
  width: 280px;
}

.status-steps {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.step {
  font-size: 0.875rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.step.completed {
  color: #10b981;
  font-weight: 500;
}

.success-badge {
  background: var(--gradient-button);
  color: white;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 12px rgba(234, 88, 12, 0.3);
}

.badge-icon {
  font-size: 20px;
}

.analytics-demo {
  width: 100%;
  max-width: 500px;
}

.analytics-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}

.stat-card {
  background: white;
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 16px;
  text-align: center;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--text-muted);
  margin-bottom: 8px;
}

.stat-value {
  font-size: 2rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}

.stat-trend {
  font-size: 0.75rem;
  font-weight: 600;
}

.stat-trend.up {
  color: #10b981;
}

.chart-demo {
  background: white;
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 24px;
}

.chart-bars {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
  height: 120px;
  gap: 8px;
}

.chart-bar {
  flex: 1;
  border-radius: 4px 4px 0 0;
  min-height: 20px;
}

@media (max-width: 768px) {
  .animated-carousel-container {
    padding: 20px;
  }

  .analytics-grid {
    grid-template-columns: 1fr;
  }

  .feature-display {
    max-width: 100%;
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
