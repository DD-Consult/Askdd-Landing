import React from 'react';
import { Mail, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="footer" className="py-16 px-6" style={{ background: 'var(--text-primary)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_servai-demo/artifacts/4xi5nw05_Options%205-transparent%20background%20landscape%20copy%20%282%29.png" 
              alt="DD Consulting" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="body-medium" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              Ask DD by DD Consulting
            </p>
            <p className="body-small mt-2" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              Your 24/7 Digital Sales Agent
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="heading-3 mb-4" style={{ color: 'white' }}>Quick Links</h3>
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('features')} 
                className="footer-link"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('pricing')} 
                className="footer-link"
              >
                Pricing
              </button>
              <a 
                href="https://serv-ai.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-link flex items-center gap-2"
              >
                About Us
                <ExternalLink size={14} />
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="heading-3 mb-4" style={{ color: 'white' }}>Contact Us</h3>
            <a 
              href="mailto:askdd@ddconsult.tech" 
              className="footer-link flex items-center gap-2"
            >
              <Mail size={18} />
              askdd@ddconsult.tech
            </a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-white/20 text-center">
          <p className="body-small" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
            Copyright © 2025 DD Consulting Pty Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

/* Styles */
const styles = `
.footer-link {
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 400;
  transition: color 0.2s ease;
  display: block;
  background: transparent;
  border: none;
  cursor: pointer;
  text-align: left;
  padding: 0;
}

.footer-link:hover {
  color: var(--accent-primary);
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);