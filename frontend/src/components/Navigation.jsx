import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navigation = ({ onBookDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-6 mt-6 bg-white/60 backdrop-blur-[16px] border border-[var(--border-light)] rounded-full shadow-sm">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_servai-demo/artifacts/4xi5nw05_Options%205-transparent%20background%20landscape%20copy%20%282%29.png" 
              alt="DD Consulting" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
            <button onClick={() => scrollToSection('footer')} className="nav-link">Contact</button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button onClick={onBookDemo} className="btn-primary">
              Start Your Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-black/5 rounded-full transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border-light)] px-6 py-4 space-y-3">
            <button onClick={() => scrollToSection('features')} className="block w-full text-left py-2 nav-link">Features</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 nav-link">Pricing</button>
            <button onClick={() => scrollToSection('footer')} className="block w-full text-left py-2 nav-link">Contact</button>
            <button onClick={onBookDemo} className="btn-primary w-full mt-4">
              Start Your Free Trial
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

/* Styles */
const styles = `
.nav-link {
  color: var(--text-muted);
  text-decoration: none;
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 9999px;
  transition: all 0.2s ease;
  background: transparent;
  border: none;
  cursor: pointer;
}

.nav-link:hover {
  background: rgba(0, 0, 0, 0.05);
  color: var(--text-primary);
}

.nav-link:active {
  background: rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  nav > div {
    margin: 0.5rem;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid var(--border-light);
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);