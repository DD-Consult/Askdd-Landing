import React, { useState, useEffect } from 'react';
import { Menu, X, CheckCircle2 } from 'lucide-react';

export const Navigation = ({ onBookDemo }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 backdrop-blur-md border-b border-[var(--border-light)] shadow-lg' 
          : 'bg-white border-b border-[var(--border-light)] shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}>
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img 
              src="https://customer-assets.emergentagent.com/job_servai-demo/artifacts/4xi5nw05_Options%205-transparent%20background%20landscape%20copy%20%282%29.png" 
              alt="DD Consulting" 
              className={`w-auto transition-all duration-300 ${scrolled ? 'h-9' : 'h-12'}`}
            />
            {/* Trust Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-50 to-blue-100 rounded-full border border-blue-200">
              <CheckCircle2 size={16} className="text-blue-600" />
              <span className="text-xs font-medium text-blue-700">Trusted by 50+ Businesses</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('features')} className="nav-link">Features</button>
            <button onClick={() => scrollToSection('case-studies')} className="nav-link">Success Stories</button>
            <button onClick={() => scrollToSection('pricing')} className="nav-link">Pricing</button>
            <button onClick={() => scrollToSection('faq')} className="nav-link">FAQ</button>
            <button onClick={() => scrollToSection('footer')} className="nav-link">Contact</button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button onClick={onBookDemo} className="btn-primary-glow">
              Start Your Free Trial
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-black/5 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border-light)] py-4 space-y-3">
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
  border-radius: 8px;
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
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);