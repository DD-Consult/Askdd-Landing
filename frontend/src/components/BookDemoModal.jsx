import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { submitContactForm } from '../utils/mockApi';

export const BookDemoModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    location: '',
    website: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.location) {
      setError('Please fill in all required fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
          setFormData({ name: '', email: '', location: '', website: '' });
        }, 2500);
      } else {
        setError(result.message || 'Failed to submit form. Please try again.');
      }
    } catch (err) {
      setError(err.message || 'Failed to submit form. Please try again or email us directly at askdd@ddconsult.tech');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="modal-content">
        <DialogHeader>
          <DialogTitle className="heading-3">Start Your Free Trial</DialogTitle>
        </DialogHeader>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              Leave your details and our team will get back to you within 24 hours to set up your free 30-day trial.
            </p>
            
            {error && (
              <div className="error-message">
                {error}
              </div>
            )}
            
            <div>
              <label className="form-label">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                placeholder="John Smith"
                required
              />
            </div>
            
            <div>
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                placeholder="john@company.com"
                required
              />
            </div>
            
            <div>
              <label className="form-label">Country / Location *</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="form-input"
                placeholder="Australia"
                required
              />
            </div>
            
            <div>
              <label className="form-label">Website (Optional)</label>
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                className="form-input"
                placeholder="https://yourwebsite.com"
              />
            </div>
            
            <button 
              type="submit" 
              className="btn-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
              {!isSubmitting && <Send size={18} />}
            </button>
          </form>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3 className="heading-3 mb-2">Thank You!</h3>
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              We've received your request. Our team will contact you shortly!
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

/* Styles */
const styles = `
.modal-content {
  max-width: 500px;
  background: var(--bg-card);
  border-radius: 16px;
  padding: 32px;
}

.form-label {
  display: block;
  font-family: system-ui, sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  color: var(--text-primary);
  margin-bottom: 8px;
}

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  color: var(--text-body);
  transition: all 0.2s ease;
  background: var(--bg-card);
}

.form-input:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px var(--accent-wash);
}

.form-input::placeholder {
  color: var(--text-muted);
}

.error-message {
  padding: 12px 16px;
  background: rgba(239, 68, 68, 0.1);
  border: 1px solid rgba(239, 68, 68, 0.3);
  border-radius: 8px;
  color: rgb(185, 28, 28);
  font-size: 0.875rem;
}

.success-message {
  text-align: center;
  padding: 32px 16px;
}

.success-icon {
  width: 64px;
  height: 64px;
  background: var(--gradient-button);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: bold;
  margin: 0 auto 16px;
  box-shadow: 0 4px 12px rgba(234, 88, 12, 0.3);
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);