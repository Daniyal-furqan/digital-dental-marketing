import Link from 'next/link';
import CTAStrip from '../components/CTAStrip';

export const metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Digital Dental Marketing UK.',
};

export default function PrivacyPolicy() {
  return (
    <>
      <section className="section-padding bg-light mt-[70px]">
        <div className="container max-w-4xl mx-auto bg-surface p-12 rounded-xl shadow-lg border">
          <h1 className="text-4xl font-bold text-primary mb-8 text-center border-b pb-6">Privacy Policy</h1>
          
          <div className="prose text-muted">
            <p className="mb-6"><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
            
            <p className="mb-4">
              At Digital Dental Marketing, accessible from digitaldentalmarketing.co.uk, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Digital Dental Marketing and how we use it.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Information We Collect</h3>
            <p className="mb-4">
              The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
            </p>
            <p className="mb-4">
              If you contact us directly (via our Lead Forms, phone support, or emails to info@digitaldentalmarketing.co.uk or digidaniyal@gmail.com), we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">How We Use Your Information</h3>
            <ul className="list-disc pl-8 mb-4 flex-col gap-2">
              <li>Provide, operate, and maintain our website.</li>
              <li>Improve, personalize, and expand our website and marketing services.</li>
              <li>Understand and analyze how you use our website.</li>
              <li>Develop new dental marketing products, services, features, and functionality.</li>
              <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.</li>
              <li>Send you emails regarding your dental practice's marketing strategy.</li>
              <li>Find and prevent fraud.</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Log Files</h3>
            <p className="mb-4">
              Digital Dental Marketing follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks.
            </p>

            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">GDPR Data Protection Rights</h3>
            <p className="mb-4">
              We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:
            </p>
            <ul className="list-disc pl-8 mb-4 flex-col gap-2">
              <li><strong>The right to access</strong> – You have the right to request copies of your personal data.</li>
              <li><strong>The right to rectification</strong> – You have the right to request that we correct any information you believe is inaccurate.</li>
              <li><strong>The right to erasure</strong> – You have the right to request that we erase your personal data, under certain conditions.</li>
              <li><strong>The right to restrict processing</strong> – You have the right to request that we restrict the processing of your personal data, under certain conditions.</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Contact Information</h3>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us via email at <a href="mailto:info@digitaldentalmarketing.co.uk" className="text-secondary font-bold hover:underline">info@digitaldentalmarketing.co.uk</a>.
            </p>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
}
