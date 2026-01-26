import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Calendar } from 'lucide-react';

export const BookSessionModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="book-session-modal-content" style={{ background: 'white' }}>
        <DialogHeader>
          <DialogTitle className="heading-3 flex items-center gap-2">
            <Calendar className="text-orange-600" size={28} />
            Book a Session
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <p className="body-medium mb-4" style={{ color: 'var(--text-secondary)' }}>
            Choose a convenient time to schedule your session with our team.
          </p>
          
          {/* Google Calendar Embed */}
          <div className="calendar-container">
            <iframe 
              src="https://calendar.app.google/JuPi1gS8r2TGJqdo6"
              className="calendar-iframe"
              frameBorder="0"
              title="Book a Session - Google Calendar"
            />
          </div>
          
          <p className="body-small mt-4 text-center" style={{ color: 'var(--text-muted)' }}>
            You'll receive a confirmation email after booking
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

/* Styles */
const styles = `
.book-session-modal-content {
  max-width: 700px;
  background: white !important;
  border-radius: 16px;
  padding: 32px;
  max-height: 90vh;
  overflow-y: auto;
}

.calendar-container {
  width: 100%;
  height: 600px;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--border-light);
  background: white;
}

.calendar-iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .book-session-modal-content {
    max-width: 95vw;
    padding: 24px;
  }
  
  .calendar-container {
    height: 500px;
  }
}

@media (max-width: 480px) {
  .calendar-container {
    height: 450px;
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);
