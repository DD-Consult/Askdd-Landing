# Email Configuration Guide

## Overview
The contact form on your Ask DD landing page sends email notifications to `askdd@ddconsult.tech` whenever someone requests a demo.

## Setup Instructions

### Option 1: Using Gmail (Recommended for Testing)

1. **Enable 2-Factor Authentication** on your Gmail account
   - Go to: https://myaccount.google.com/security
   - Enable 2-Step Verification

2. **Create an App Password**
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Ask DD Landing Page"
   - Copy the 16-character password (no spaces)

3. **Update Backend Environment Variables**
   Edit `/app/backend/.env`:
   ```
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-gmail-address@gmail.com
   SMTP_PASSWORD=your-16-char-app-password
   CONTACT_EMAIL=askdd@ddconsult.tech
   ```

4. **Restart Backend**
   ```bash
   sudo supervisorctl restart backend
   ```

### Option 2: Using Other Email Services

#### Office 365 / Outlook
```
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
```

#### SendGrid (Production Recommended)
```
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

#### Custom SMTP Server
```
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587 (or 465 for SSL)
SMTP_USER=your-username
SMTP_PASSWORD=your-password
```

## Testing the Email Functionality

1. Fill out the contact form on your landing page
2. Check the backend logs: `tail -f /var/log/supervisor/backend.err.log`
3. Verify email arrives at askdd@ddconsult.tech

## Email Template

The email sent includes:
- Subject: "New Demo Request from Ask DD Landing Page"
- Professional HTML formatting with your brand colors
- All contact details: Name, Email, Location, Website
- Reminder to follow up within 24 hours

## Troubleshooting

### "Authentication failed" error
- Double-check SMTP username and password
- For Gmail, ensure you're using App Password (not regular password)
- Verify 2FA is enabled for Gmail

### "Connection refused" error
- Check SMTP_HOST and SMTP_PORT are correct
- Verify firewall isn't blocking outbound SMTP connections

### Emails not arriving
- Check spam/junk folder
- Verify CONTACT_EMAIL is correct in .env
- Check backend logs for errors

## Security Notes

- Never commit your `.env` file to version control
- Use App Passwords instead of real passwords when possible
- For production, consider using a dedicated email service like SendGrid or AWS SES
- The current implementation uses STARTTLS for secure email transmission
