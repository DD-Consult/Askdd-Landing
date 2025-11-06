from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, EmailStr, Field, validator
from services.email_service import email_service
import logging
import re

logger = logging.getLogger(__name__)

router = APIRouter()

class ContactRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    email: EmailStr
    location: str = Field(..., min_length=2, max_length=100)
    website: str = Field(None, max_length=200)
    
    @validator('name')
    def validate_name(cls, v):
        if not v or not v.strip():
            raise ValueError('Name is required')
        return v.strip()
    
    @validator('location')
    def validate_location(cls, v):
        if not v or not v.strip():
            raise ValueError('Location is required')
        return v.strip()
    
    @validator('website')
    def validate_website(cls, v):
        if v and v.strip():
            return v.strip()
        return None

class ContactResponse(BaseModel):
    success: bool
    message: str

@router.post('/contact', response_model=ContactResponse)
async def submit_contact(request: ContactRequest):
    """
    Handle contact form submissions and send email notifications
    """
    try:
        logger.info(f"Received contact request from {request.email}")
        
        # Send email notification
        email_service.send_contact_email(
            name=request.name,
            email=request.email,
            location=request.location,
            website=request.website
        )
        
        return ContactResponse(
            success=True,
            message="Contact request received. Our team will get back to you shortly!"
        )
        
    except ValueError as e:
        logger.warning(f"Validation error: {str(e)}")
        raise HTTPException(status_code=400, detail=str(e))
    
    except Exception as e:
        logger.error(f"Error processing contact request: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="We're having trouble processing your request. Please try again or email us directly at askdd@ddconsult.tech"
        )