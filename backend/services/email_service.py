import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import logging

logger = logging.getLogger(__name__)

class EmailService:
    def __init__(self):
        self.smtp_host = os.environ.get('SMTP_HOST', 'smtp.gmail.com')
        self.smtp_port = int(os.environ.get('SMTP_PORT', '587'))
        self.smtp_user = os.environ.get('SMTP_USER', '')
        self.smtp_password = os.environ.get('SMTP_PASSWORD', '')
        self.contact_email = os.environ.get('CONTACT_EMAIL', 'askdd@ddconsult.tech')
        
    def send_contact_email(self, name: str, email: str, location: str, website: str = None):
        """
        Send contact form submission email
        """
        try:
            # Create message
            msg = MIMEMultipart('alternative')
            msg['Subject'] = 'New Demo Request from Ask DD Landing Page'
            msg['From'] = self.smtp_user
            msg['To'] = self.contact_email
            
            # Create HTML content
            html_content = f"""
            <html>
                <head>
                    <style>
                        body {{
                            font-family: system-ui, -apple-system, sans-serif;
                            color: #0e0f0c;
                            line-height: 1.6;
                        }}
                        .container {{
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }}
                        .header {{
                            background: linear-gradient(to right, #ea580c, #c2410c);
                            color: white;
                            padding: 30px 20px;
                            border-radius: 8px 8px 0 0;
                            text-align: center;
                        }}
                        .content {{
                            background: #ffffff;
                            padding: 30px 20px;
                            border: 1px solid #e5e7eb;
                            border-top: none;
                        }}
                        .field {{
                            margin-bottom: 20px;
                        }}
                        .field-label {{
                            font-weight: 600;
                            color: #003720;
                            margin-bottom: 5px;
                        }}
                        .field-value {{
                            color: #0e0f0c;
                            padding: 10px;
                            background: #f9fafb;
                            border-radius: 4px;
                        }}
                        .footer {{
                            margin-top: 20px;
                            padding-top: 20px;
                            border-top: 1px solid #e5e7eb;
                            color: #83928c;
                            font-size: 14px;
                        }}
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1 style="margin: 0; font-size: 24px;">New Demo Request</h1>
                            <p style="margin: 10px 0 0 0; opacity: 0.9;">Ask DD Landing Page</p>
                        </div>
                        <div class="content">
                            <p style="font-size: 16px; color: #003720; font-weight: 600;">A potential customer has requested a demo:</p>
                            
                            <div class="field">
                                <div class="field-label">Full Name:</div>
                                <div class="field-value">{name}</div>
                            </div>
                            
                            <div class="field">
                                <div class="field-label">Email Address:</div>
                                <div class="field-value">{email}</div>
                            </div>
                            
                            <div class="field">
                                <div class="field-label">Country / Location:</div>
                                <div class="field-value">{location}</div>
                            </div>
                            
                            {f'<div class="field"><div class="field-label">Website:</div><div class="field-value">{website}</div></div>' if website else '<div class="field"><div class="field-label">Website:</div><div class="field-value" style="font-style: italic; color: #83928c;">Not provided</div></div>'}
                            
                            <div class="footer">
                                <p style="margin: 0;">Please follow up with this lead within 24 hours for best conversion rates.</p>
                            </div>
                        </div>
                    </div>
                </body>
            </html>
            """
            
            # Create plain text version as fallback
            text_content = f"""
            New Demo Request from Ask DD Landing Page
            
            A potential customer has requested a demo:
            
            Full Name: {name}
            Email Address: {email}
            Country / Location: {location}
            Website: {website if website else 'Not provided'}
            
            Please follow up with this lead within 24 hours for best conversion rates.
            """
            
            # Attach both versions
            part1 = MIMEText(text_content, 'plain')
            part2 = MIMEText(html_content, 'html')
            msg.attach(part1)
            msg.attach(part2)
            
            # Send email using SSL (more reliable for Gmail)
            if self.smtp_port == 465:
                with smtplib.SMTP_SSL(self.smtp_host, self.smtp_port) as server:
                    server.login(self.smtp_user, self.smtp_password)
                    server.send_message(msg)
            else:
                with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
                    server.starttls()
                    server.login(self.smtp_user, self.smtp_password)
                    server.send_message(msg)
            
            logger.info(f"Contact email sent successfully to {self.contact_email}")
            return True
            
        except Exception as e:
            logger.error(f"Failed to send contact email: {str(e)}")
            raise Exception(f"Email service error: {str(e)}")

email_service = EmailService()