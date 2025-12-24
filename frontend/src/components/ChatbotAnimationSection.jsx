import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, Send, Globe, MessageSquare } from 'lucide-react';

export const ChatbotAnimationSection = () => {
  return (
    <section className="animation-section">
      <div className="animation-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">See Ask DD in Action</h2>
          <p className="body-large" style={{ color: 'var(--text-secondary)' }}>
            Watch how our AI agent engages visitors and converts them into qualified leads
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="animations-grid">
          {/* Animation 1: Chat Conversation */}
          <ChatConversationAnimation />

          {/* Animation 2: Multi-Platform */}
          <MultiPlatformAnimation />
        </div>
      </div>
    </section>
  );
};

// Animation 1: Chatbot Conversation Flow
const ChatConversationAnimation = () => {
  const [messages, setMessages] = useState([]);
  const [showEmail, setShowEmail] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const conversationFlow = [
    { sender: 'user', text: "Hi! I'm interested in pricing for my business", delay: 1000 },
    { sender: 'bot', text: "Hello! I'd love to help you with pricing information. 👋", delay: 2000 },
    { sender: 'bot', text: "Could you tell me about your business size?", delay: 1500 },
    { sender: 'user', text: "We're a small team, around 15 people", delay: 1800 },
    { sender: 'bot', text: "Perfect! Let me send you a detailed quote tailored for your team size.", delay: 2000 },
    { sender: 'email', text: "Email sent successfully! ✉️", delay: 1500 },
  ];

  useEffect(() => {
    let currentIndex = 0;
    let timeoutId;
    
    const showNextMessage = () => {
      if (currentIndex < conversationFlow.length) {
        const currentMessage = conversationFlow[currentIndex];
        
        // Show typing indicator for bot messages
        if (currentMessage.sender === 'bot') {
          setIsTyping(true);
          timeoutId = setTimeout(() => {
            setIsTyping(false);
            setMessages(prev => [...prev, currentMessage]);
            currentIndex++;
            timeoutId = setTimeout(showNextMessage, currentMessage.delay);
          }, 800);
        } else if (currentMessage.sender === 'email') {
          setShowEmail(true);
          timeoutId = setTimeout(() => {
            // Reset and loop
            setTimeout(() => {
              setMessages([]);
              setShowEmail(false);
              setIsTyping(false);
              currentIndex = 0;
              showNextMessage();
            }, 2000);
          }, currentMessage.delay);
        } else {
          setMessages(prev => [...prev, currentMessage]);
          currentIndex++;
          timeoutId = setTimeout(showNextMessage, currentMessage.delay);
        }
      }
    };

    showNextMessage();

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="animation-card">
      <div className="animation-header">
        <MessageCircle className="animation-icon" />
        <h3 className="heading-3">Smart Conversation Flow</h3>
        <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
          AI-powered engagement that converts
        </p>
      </div>

      <div className="chat-window">
        <div className="chat-header">
          <div className="chat-status">
            <span className="status-dot"></span>
            <span className="body-small">Ask DD is online</span>
          </div>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.sender === 'bot' && (
                <div className="bot-avatar">
                  <MessageCircle size={16} />
                </div>
              )}
              <div className="message-bubble">
                {msg.text}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="message bot">
              <div className="bot-avatar">
                <MessageCircle size={16} />
              </div>
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          )}

          {showEmail && (
            <div className="email-notification">
              <Mail className="email-icon" />
              <div>
                <div className="body-medium" style={{ fontWeight: 600 }}>Quote Sent!</div>
                <div className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  customer@business.com
                </div>
              </div>
              <Send size={16} className="send-icon" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// Animation 2: Multi-Platform Deployment
const MultiPlatformAnimation = () => {
  const [activePlatform, setActivePlatform] = useState(0);

  const platforms = [
    { name: 'Website', icon: '🌐', color: '#3b82f6' },
    { name: 'WhatsApp', icon: '💬', color: '#25D366' },
    { name: 'Facebook', icon: '👥', color: '#1877F2' },
    { name: 'Instagram', icon: '📸', color: '#E4405F' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePlatform((prev) => (prev + 1) % platforms.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="animation-card">
      <div className="animation-header">
        <Globe className="animation-icon" />
        <h3 className="heading-3">One AI, All Platforms</h3>
        <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
          Deploy everywhere your customers are
        </p>
      </div>

      <div className="platform-animation">
        {/* Central AI Agent */}
        <div className="central-agent">
          <div className="agent-icon">
            <MessageCircle size={32} />
          </div>
          <div className="body-small" style={{ fontWeight: 600, marginTop: '8px' }}>
            Ask DD Agent
          </div>
        </div>

        {/* Platform Icons */}
        <div className="platform-grid">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className={`platform-item ${activePlatform === index ? 'active' : ''}`}
              style={{
                '--platform-color': platform.color
              }}
            >
              <div className="platform-icon-wrapper">
                <span className="platform-emoji">{platform.icon}</span>
                {activePlatform === index && (
                  <div className="pulse-ring"></div>
                )}
              </div>
              <div className="body-small platform-name">{platform.name}</div>
            </div>
          ))}
        </div>

        {/* Connecting Lines */}
        <svg className="connection-lines" viewBox="0 0 400 400">
          {platforms.map((_, index) => {
            const angle = (index * 90 - 90) * (Math.PI / 180);
            const startX = 200;
            const startY = 200;
            const endX = 200 + Math.cos(angle) * 120;
            const endY = 200 + Math.sin(angle) * 120;
            
            return (
              <line
                key={index}
                x1={startX}
                y1={startY}
                x2={endX}
                y2={endY}
                className={`connection-line ${activePlatform === index ? 'active' : ''}`}
                strokeDasharray="5,5"
              />
            );
          })}
        </svg>
      </div>
    </div>
  );
};

/* Styles */
const styles = `
.animation-section {
  padding: 6rem 1.5rem;
  background: var(--bg-page);
  position: relative;
}

.animation-container {
  max-width: 1200px;
  margin: 0 auto;
}

.animations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  gap: 3rem;
  margin-top: 3rem;
}

.animation-card {
  background: var(--bg-card);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border: 1px solid var(--border-light);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.animation-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
}

.animation-header {
  text-align: center;
  margin-bottom: 2rem;
}

.animation-icon {
  width: 48px;
  height: 48px;
  color: var(--accent-primary);
  margin: 0 auto 1rem;
}

/* Chat Window Styles */
.chat-window {
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  min-height: 400px;
}

.chat-header {
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-strong));
  padding: 1rem 1.5rem;
  color: white;
}

.chat-status {
  display: flex;
  align-items: center;
  gap: 8px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #4ade80;
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.chat-messages {
  padding: 1.5rem;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.message {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  animation: slideIn 0.3s ease-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.message.user {
  flex-direction: row-reverse;
  justify-content: flex-start;
}

.bot-avatar {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-strong));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
}

.message-bubble {
  background: white;
  padding: 0.75rem 1rem;
  border-radius: 16px;
  max-width: 80%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-size: 0.95rem;
  line-height: 1.5;
}

.message.user .message-bubble {
  background: linear-gradient(135deg, var(--accent-blue), var(--accent-blue-light));
  color: white;
  border-bottom-right-radius: 4px;
}

.message.bot .message-bubble {
  border-bottom-left-radius: 4px;
}

.typing-indicator {
  background: white;
  padding: 1rem;
  border-radius: 16px;
  border-bottom-left-radius: 4px;
  display: flex;
  gap: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.typing-indicator span {
  width: 8px;
  height: 8px;
  background: var(--accent-primary);
  border-radius: 50%;
  animation: typing 1.4s ease-in-out infinite;
}

.typing-indicator span:nth-child(2) {
  animation-delay: 0.2s;
}

.typing-indicator span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes typing {
  0%, 60%, 100% { transform: translateY(0); }
  30% { transform: translateY(-10px); }
}

.email-notification {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 1rem;
  animation: emailPop 0.5s ease-out;
  box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
}

@keyframes emailPop {
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}

.email-icon {
  width: 32px;
  height: 32px;
  flex-shrink: 0;
}

.send-icon {
  margin-left: auto;
  animation: sendPulse 1s ease-in-out infinite;
}

@keyframes sendPulse {
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(5px); }
}

/* Multi-Platform Animation Styles */
.platform-animation {
  position: relative;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.central-agent {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 10;
}

.agent-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-strong));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin: 0 auto;
  box-shadow: 0 4px 20px rgba(234, 88, 12, 0.3);
  animation: agentPulse 2s ease-in-out infinite;
}

@keyframes agentPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.platform-grid {
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 2rem;
  padding: 2rem;
}

.platform-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.5s ease;
  opacity: 0.4;
}

.platform-item.active {
  opacity: 1;
  transform: scale(1.1);
}

.platform-icon-wrapper {
  position: relative;
  width: 70px;
  height: 70px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}

.platform-item.active .platform-icon-wrapper {
  background: linear-gradient(135deg, var(--platform-color), var(--platform-color));
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
}

.platform-emoji {
  font-size: 2rem;
  filter: grayscale(100%);
  transition: filter 0.5s ease;
}

.platform-item.active .platform-emoji {
  filter: grayscale(0%);
}

.pulse-ring {
  position: absolute;
  width: 100%;
  height: 100%;
  border: 3px solid var(--platform-color);
  border-radius: 50%;
  animation: pulseRing 1.5s ease-out infinite;
}

@keyframes pulseRing {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}

.platform-name {
  font-weight: 600;
  color: var(--text-secondary);
  transition: color 0.5s ease;
}

.platform-item.active .platform-name {
  color: var(--text-primary);
}

.connection-lines {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.connection-line {
  stroke: var(--border-light);
  stroke-width: 2;
  transition: all 0.5s ease;
}

.connection-line.active {
  stroke: var(--accent-primary);
  stroke-width: 3;
  stroke-dasharray: none;
  animation: flowLine 1s ease-in-out infinite;
}

@keyframes flowLine {
  0% { stroke-dashoffset: 10; }
  100% { stroke-dashoffset: 0; }
}

/* Mobile Responsive */
@media (max-width: 1024px) {
  .animations-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

@media (max-width: 640px) {
  .animation-section {
    padding: 4rem 1rem;
  }

  .animation-card {
    padding: 1.5rem;
  }

  .animations-grid {
    grid-template-columns: 1fr;
  }

  .chat-window {
    min-height: 350px;
  }

  .chat-messages {
    min-height: 300px;
  }

  .message-bubble {
    max-width: 85%;
    font-size: 0.9rem;
  }

  .platform-animation {
    height: 350px;
  }

  .agent-icon {
    width: 60px;
    height: 60px;
  }

  .platform-icon-wrapper {
    width: 55px;
    height: 55px;
  }

  .platform-emoji {
    font-size: 1.5rem;
  }

  .platform-grid {
    padding: 1rem;
    gap: 1rem;
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
