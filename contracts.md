# Ask DD Landing Page - Backend Integration Contracts

## API Endpoints

### POST /api/contact
**Purpose**: Handle contact form submissions and send email notifications

**Request Body**:
```json
{
  "name": "string (required)",
  "email": "string (required, valid email)",
  "location": "string (required)",
  "website": "string (optional)"
}
```

**Response**:
- Success (200): `{ "success": true, "message": "Contact request received" }`
- Validation Error (400): `{ "success": false, "message": "error details" }`
- Server Error (500): `{ "success": false, "message": "Server error" }`

## Email Configuration

**Recipient**: askdd@ddconsult.tech

**Email Template**:
- Subject: "New Demo Request from Ask DD Landing Page"
- Body includes: name, email, location, website (if provided)
- Professional HTML formatting

## Frontend Integration

**File to Update**: `/app/frontend/src/utils/mockApi.js`
- Change from mock setTimeout to actual axios POST call
- Endpoint: `${REACT_APP_BACKEND_URL}/api/contact`
- Handle real error responses

**Component**: `/app/frontend/src/components/BookDemoModal.jsx`
- No changes needed (already handles async submission)
- Error states properly configured

## Environment Variables

**Backend (.env)**:
- `SMTP_HOST`: SMTP server host
- `SMTP_PORT`: SMTP server port
- `SMTP_USER`: Email account for sending
- `SMTP_PASSWORD`: Email account password
- `CONTACT_EMAIL`: Recipient email (askdd@ddconsult.tech)

## Implementation Notes

1. Email validation happens on both frontend and backend
2. Backend uses Python's smtplib for email sending
3. All form fields are included in the email notification
4. Professional email template with proper formatting
