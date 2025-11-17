import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';

export const ContactModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    
    for (let [key, value] of formData.entries()) {
      data[key] = value;
    }

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact-query", ...data })
    })
      .then(() => {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
          setSubmitted(false);
          form.reset();
        }, 2500);
      })
      .catch(error => {
        alert("There was an error submitting the form. Please try again or email us at askdd@ddconsult.tech");
        console.error(error);
      });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="contact-modal-content" style={{ background: 'white' }}>
        <DialogHeader>
          <DialogTitle className="heading-3">Contact Us</DialogTitle>
        </DialogHeader>
        
        {!submitted ? (
          <form 
            name="contact-query"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            className="space-y-4 mt-4"
          >
            {/* Hidden fields for Netlify Forms */}
            <input type="hidden" name="form-name" value="contact-query" />
            <p hidden>
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>

            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              Have a question? Send us a message and we'll get back to you within 24 hours.
            </p>
            
            <div>
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                name="email"
                className="form-input"
                placeholder="your.email@company.com"
                required
              />
            </div>
            
            <div>
              <label className="form-label">Your Message / Query *</label>
              <textarea
                name="message"
                className="form-textarea"
                placeholder="Tell us what you'd like to know..."
                rows="5"
                required
              />
            </div>
            
            <button 
              type="submit" 
              className="btn-primary w-full"
            >
              Send Message
              <Send size={18} />
            </button>
          </form>
        ) : (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h3 className="heading-3 mb-2">Message Sent!</h3>
            <p className="body-medium" style={{ color: 'var(--text-secondary)' }}>
              Thank you for contacting us. We'll respond to your query shortly!
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

/* Styles */
const styles = `
.contact-modal-content {
  max-width: 500px;
  background: white !important;
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
  background: white !important;
}

.form-textarea {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  font-family: system-ui, sans-serif;
  font-size: 1rem;
  color: var(--text-body);
  transition: all 0.2s ease;
  background: white !important;
  resize: vertical;
  min-height: 120px;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px var(--accent-wash);
}

.form-input::placeholder,
.form-textarea::placeholder {
  color: var(--text-muted);
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
