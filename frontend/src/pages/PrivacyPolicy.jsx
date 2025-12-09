import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-[var(--primary-600)] hover:text-[var(--primary-700)] transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-4">
          Privacy Policy for AskDD
        </h1>
        <p className="text-lg text-[var(--text-muted)] mb-12">
          Last Updated: 2025-12-03
        </p>

        <div className="prose prose-lg max-w-none">
          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              1. Introduction
            </h2>
            <p className="text-[var(--text-body)] leading-relaxed">
              Welcome to AskDD ("we," "our," or "us"). We are committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information when 
              you use our application, AskDD.
            </p>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              2. Information We Collect
            </h2>
            <p className="text-[var(--text-body)] leading-relaxed mb-4">
              When you choose to log in to AskDD using Facebook, we collect specific information to 
              create your account and provide our services. This information includes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--text-body)]">
              <li>
                <strong>Your Name:</strong> Used to personalize your user profile.
              </li>
              <li>
                <strong>Your Email Address:</strong> Used as your unique account identifier and to 
                send you important service updates.
              </li>
              <li>
                <strong>Profile Picture:</strong> Used to display your avatar within the application 
                interface.
              </li>
            </ul>
            <p className="text-[var(--text-body)] leading-relaxed mt-4">
              We do not collect any additional sensitive data or post to Facebook on your behalf 
              without your explicit permission.
            </p>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-[var(--text-body)] leading-relaxed mb-4">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--text-body)] mb-4">
              <li>
                <strong>Authentication:</strong> To verify your identity and allow you to log in to 
                the AskDD console securely.
              </li>
              <li>
                <strong>User Experience:</strong> To display your name and profile picture within 
                the dashboard.
              </li>
              <li>
                <strong>Communication:</strong> To contact you regarding your account status or 
                critical updates to our service.
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 mt-6">
              AI Chatbot & Message Processing
            </h3>
            <p className="text-[var(--text-body)] leading-relaxed mb-4">
              Beyond account authentication, when you interact with the AskDD chatbot via WhatsApp or 
              other messaging channels, we process:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-[var(--text-body)]">
              <li>
                <strong>Message Content:</strong> The text and media you send to the bot.
              </li>
              <li>
                <strong>Metadata:</strong> Phone numbers, timestamps, and message delivery status.
              </li>
              <li>
                <strong>Purpose:</strong> This data is processed solely to generate conversational 
                responses and facilitate customer support.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              4. Artificial Intelligence and Data Sovereignty
            </h2>
            
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 mt-6">
              4.1 Inference-Only Processing (No Training)
            </h3>
            <p className="text-[var(--text-body)] leading-relaxed mb-4">
              We utilize Amazon Web Services (AWS Bedrock) to process your queries. In accordance with 
              AWS Service Terms, your message data is isolated. It is not shared with foundational model 
              providers (e.g., Anthropic, Cohere, Meta) for model training, nor is it used to improve 
              their public AI models.
            </p>

            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 mt-6">
              4.2 Retrieval-Augmented Generation (RAG)
            </h3>
            <p className="text-[var(--text-body)] leading-relaxed mb-4">
              The AI generates answers by retrieving information from our private, isolated knowledge base. 
              Your specific conversations remain within our secure cloud environment and are not ingested 
              into a public dataset.
            </p>

            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 mt-6">
              4.3 Automated Safety Classification
            </h3>
            <p className="text-[var(--text-body)] leading-relaxed">
              You acknowledge that our infrastructure providers (Meta and AWS) employ automated abuse 
              detection systems to filter harmful content (e.g., hate speech, malware). This processing 
              is transient and automated; human review of your private chats occurs only in the event of 
              a severe legal or safety violation.
            </p>
          </section>

          {/* Section 5 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              5. Data Sharing
            </h2>
            <p className="text-[var(--text-body)] leading-relaxed mb-4">
              We do not sell, trade, or rent your personal identification information to others. 
              We do not share your data with third parties except as necessary to provide the 
              service (e.g., cloud hosting providers) or as required by law.
            </p>

            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 mt-6">
              5.1 International Data Transfers
            </h3>
            <p className="text-[var(--text-body)] leading-relaxed mb-4">
              While our primary database and AI processing are hosted in Australia (AWS Sydney), you 
              acknowledge that using the WhatsApp and Instagram networks requires data to transit through 
              Meta Platforms' servers located in the United States and Ireland. By using the service, you 
              expressly consent to this cross-border transmission necessary for the delivery of messages.
            </p>

            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-3 mt-6">
              5.2 Third-Party Platform Terms (WhatsApp)
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-[var(--text-body)]">
              <li>
                <strong>Consent to Message:</strong> By opting in to the service via our website or 
                initiating a chat, you agree to receive automated AI-driven responses.
              </li>
              <li>
                <strong>Opt-Out:</strong> You may revoke consent at any time by replying "STOP" or 
                "Unsubscribe" to any WhatsApp message. We will immediately cease marketing and 
                non-transactional automation.
              </li>
            </ul>
          </section>

          {/* Section 6 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              6. How to Request Data Deletion
            </h2>
            <p className="text-[var(--text-body)] leading-relaxed mb-4">
              In accordance with Facebook Platform rules, you have the right to request that your 
              data be deleted from our servers.
            </p>
            <p className="text-[var(--text-body)] leading-relaxed mb-4">
              To request the deletion of your data:
            </p>
            <ol className="list-decimal pl-6 space-y-2 text-[var(--text-body)]">
              <li>
                Send an email to{' '}
                <a 
                  href="mailto:askdd@ddconsult.tech" 
                  className="text-[var(--primary-600)] hover:text-[var(--primary-700)] underline"
                >
                  askdd@ddconsult.tech
                </a>.
              </li>
              <li>Please include "Data Deletion Request" in the subject line.</li>
            </ol>
            <p className="text-[var(--text-body)] leading-relaxed mt-4">
              We will remove your data from our records within 30 days and confirm the deletion via email.
            </p>
          </section>

          {/* Section 7 */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-[var(--text-primary)] mb-4">
              7. Contact Us
            </h2>
            <p className="text-[var(--text-body)] leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none space-y-2 text-[var(--text-body)]">
              <li>
                <strong>Email:</strong>{' '}
                <a 
                  href="mailto:askdd@ddconsult.tech" 
                  className="text-[var(--primary-600)] hover:text-[var(--primary-700)] underline"
                >
                  askdd@ddconsult.tech
                </a>
              </li>
              <li>
                <strong>Website:</strong>{' '}
                <a 
                  href="https://askdd.net/" 
                  className="text-[var(--primary-600)] hover:text-[var(--primary-700)] underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://askdd.net/
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-gray-50 mt-20">
        <div className="max-w-4xl mx-auto px-6 py-8 text-center">
          <p className="text-sm text-[var(--text-muted)]">
            © 2025 AskDD. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
