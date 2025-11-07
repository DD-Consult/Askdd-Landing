import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How does Ask DD work?',
      answer: 'Ask DD is an AI-powered sales agent that integrates seamlessly with your website. It engages visitors in natural conversations, answers questions about your products or services, qualifies leads based on your criteria, and can even generate personalized proposals. The AI learns from your business information and continuously improves its responses.'
    },
    {
      question: 'How long does it take to set up Ask DD?',
      answer: 'Setup is quick and straightforward! Most businesses are up and running within 24-48 hours. Our team handles the initial configuration, customizes the AI to your business needs, and provides training. You will receive a simple code snippet to add to your website, and we will guide you through the entire process.'
    },
    {
      question: 'Can I customize Ask DD to match my brand?',
      answer: 'Absolutely! Ask DD is fully customizable to align with your brand identity. You can customize the appearance (colors, logo, positioning), conversation style and tone, qualification questions, automated responses, and even the types of proposals it generates. Our Agent Builder Portal makes customization easy without any coding required.'
    },
    {
      question: 'What kind of businesses can benefit from Ask DD?',
      answer: 'Ask DD works for a wide range of industries including SaaS companies, real estate agencies, e-commerce stores, consulting firms, B2B service providers, educational institutions, and healthcare practices. Any business that needs to capture, qualify, and convert leads can benefit from 24/7 AI-powered sales assistance.'
    },
    {
      question: 'How does pricing work?',
      answer: 'We offer transparent, usage-based pricing with three tiers: Starter ($497/month for up to 1,000 conversations), Professional ($1,297/month for up to 5,000 conversations), and Enterprise (custom pricing for unlimited conversations). All plans include core features, with advanced capabilities like custom integrations and dedicated support available at higher tiers. There's a one-time setup fee of $500-2,000 depending on your plan.'
    },
    {
      question: 'Is my data secure with Ask DD?',
      answer: 'Security is our top priority. We use enterprise-grade encryption (AES-256) for all data in transit and at rest, comply with GDPR and CCPA regulations, undergo regular security audits, and never share your data with third parties. All conversations are stored securely and you have complete control over your data with the ability to export or delete it at any time.'
    },
    {
      question: 'Can Ask DD integrate with my existing CRM?',
      answer: 'Yes! Ask DD integrates with popular CRM systems including Salesforce, HubSpot, Pipedrive, Zoho CRM, and Microsoft Dynamics. Lead data, conversations, and qualification scores automatically sync to your CRM in real-time. We also offer custom integrations for enterprise clients with proprietary systems.'
    },
    {
      question: 'What happens when Ask DD can't answer a question?',
      answer: 'Ask DD is designed to handle this gracefully. When it encounters a question beyond its knowledge, it will either escalate to a human team member with a notification, collect the visitor's contact information to follow up later, or provide relevant resources or documentation. You can configure these fallback behaviors to match your business process.'
    },
    {
      question: 'Do I need technical expertise to use Ask DD?',
      answer: 'No technical expertise required! Our platform is designed for business users, not developers. The Agent Builder Portal features an intuitive drag-and-drop interface, pre-built templates for common scenarios, and a plain-English conversation designer. Our support team is always available to help with any questions or customizations.'
    },
    {
      question: 'What kind of support do you offer?',
      answer: 'We provide comprehensive support including email support (response within 24 hours), live chat support during business hours, detailed documentation and video tutorials, dedicated account manager for Professional and Enterprise plans, and regular check-ins to optimize performance. Enterprise customers receive 24/7 priority support with guaranteed response times.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[var(--text-muted)]">
            Everything you need to know about Ask DD
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-[var(--primary-400)] transition-all duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-[var(--text-primary)] pr-8">
                  {faq.question}
                </span>
                <ChevronDown 
                  size={24} 
                  className={`text-[var(--primary-600)] flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 text-[var(--text-muted)] leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border border-blue-200">
          <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-2">
            Still have questions?
          </h3>
          <p className="text-[var(--text-muted)] mb-4">
            Our team is here to help you get started
          </p>
          <a 
            href="#footer" 
            className="inline-block px-6 py-3 bg-[var(--primary-600)] text-white font-semibold rounded-lg hover:bg-[var(--primary-700)] transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};
