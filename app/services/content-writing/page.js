import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { PenTool, CheckCircle, ShieldAlert } from 'lucide-react';

export const metadata = {
  title: 'Dental Content Writing & Copywriting UK',
  description: 'GDC compliant, medically accurate, and SEO-optimized dental copywriting. We write high-converting service pages and engaging blog posts for UK dentists.',
};

export default function ContentWritingService() {
  return (
    <>
      <HeroSection 
        title="Authoritative Dental Content That Converts"
        subtitle="Your website copy must do two impossible things simultaneously: Persuade an anxious patient to book a consultation, whilst satisfying Google's extremely strict medical 'E-E-A-T' algorithms."
        primaryCtaText="Request Content Samples"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">The Danger of Generic Copywriters</h2>
              <p className="text-muted text-lg mb-4">
                Hiring a cheap, generalist copywriter can literally get your UK dental clinic into legal trouble. The General Dental Council (GDC) has very strict guidelines on what terminology can and cannot be used in dental advertising.
              </p>
              <p className="text-muted text-lg mb-4">
                You cannot legally promise "pain-free treatments" or claim to be a "specialist" if you only have a special interest. We know the rules. We write persuasive, highly converting copy that keeps you 100% compliant and protects your license.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border border-accent">
              <div className="flex items-center gap-4 mb-4">
                <ShieldAlert size={40} className="text-accent" />
                <h3 className="text-2xl font-bold text-primary">GDC Compliance Guaranteed</h3>
              </div>
              <p className="text-muted mb-4">
                All copy written by our agency is vetted against UK dental advertising standards. We ensure your marketing is safe, ethical, and incredibly powerful.
              </p>
              <ul className="flex-col gap-2">
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Medically Accurate Terminology</li>
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Proper Specialist Distinctions</li>
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Ethical Claims & Result Frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Do you need a full website copy overhaul?"
        buttonText="Get a Copywriting Estimate"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">SEO-Optimized Medical Writing</h2>
            <p className="text-muted text-lg mb-6">Google treats medical content differently. "Your Money or Your Life" (YMYL) pages require immense authority. Our copywriters structure deep, 2000+ word service pages that Google loves to rank #1.</p>
            <ul className="flex-col gap-4">
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Comprehensive Treatment Pages (Invisalign, Implants)</li>
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> High-Ranking Educational SEO Blog Posts</li>
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Persuasive Email Nurture Campaigns for Leads</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
