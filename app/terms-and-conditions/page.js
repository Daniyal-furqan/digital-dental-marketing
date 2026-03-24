import Link from 'next/link';
import CTAStrip from '../components/CTAStrip';

export const metadata = {
  title: 'Terms and Conditions',
  description: 'Terms and Conditions for Digital Dental Marketing UK.',
};

export default function TermsAndConditions() {
  return (
    <>
      <section className="section-padding bg-light mt-[70px]">
        <div className="container max-w-4xl mx-auto bg-surface p-12 rounded-xl shadow-lg border">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center border-b pb-6">Terms and Conditions</h1>
          
          <div className="prose text-muted">
            <p className="mb-6"><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            
            <p className="mb-4">
              Welcome to Digital Dental Marketing.
            </p>
            <p className="mb-4">
              These terms and conditions outline the rules and regulations for the use of Digital Dental Marketing's Website, located at digitaldentalmarketing.co.uk.
            </p>
            <p className="mb-4">
              By accessing this website we assume you accept these terms and conditions. Do not continue to use Digital Dental Marketing if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Cookies</h3>
            <p className="mb-4">
              We employ the use of cookies. By accessing Digital Dental Marketing, you agreed to use cookies in agreement with the Digital Dental Marketing's Privacy Policy.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">License</h3>
            <p className="mb-4">
              Unless otherwise stated, Digital Dental Marketing and/or its licensors own the intellectual property rights for all material on Digital Dental Marketing. All intellectual property rights are reserved. You may access this from Digital Dental Marketing for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <ul className="list-disc pl-8 mb-4 flex-col gap-2">
              <li>Republish material from Digital Dental Marketing</li>
              <li>Sell, rent or sub-license material from Digital Dental Marketing</li>
              <li>Reproduce, duplicate or copy material from Digital Dental Marketing</li>
              <li>Redistribute content from Digital Dental Marketing</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Consultation & Services</h3>
            <p className="mb-4">
              All "Free Audits" or "Strategy Sessions" offered via this website are subject to availability and provided at the sole discretion of our team. We reserve the right to decline consultations to entities outside our target service area or scope.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Disclaimer</h3>
            <p className="mb-4">
              To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="list-disc pl-8 mb-4 flex-col gap-2">
              <li>limit or exclude our or your liability for death or personal injury;</li>
              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Contact</h3>
            <p className="mb-4">
              If you have any questions regarding these terms, please contact us at <a href="mailto:info@digitaldentalmarketing.co.uk" className="text-secondary font-bold hover:underline">info@digitaldentalmarketing.co.uk</a>.
            </p>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
