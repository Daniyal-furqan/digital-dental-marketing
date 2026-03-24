import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { HeartPulse, Search, TrendingUp, ShieldPlus } from 'lucide-react';

export const metadata = {
  title: 'Endodontist Marketing Agency UK',
  description: 'Specialized digital marketing for UK Endodontists. Attract high-intent patients needing emergency root canals and complex microscopic endodontics.',
};

export default function EndodontistsIndustry() {
  return (
    <>
      <HeroSection 
        title="Immediate Growth For UK Endodontists"
        subtitle="When a patient is in severe dental pain and searching for a root canal specialist, they do not want to browse. They want immediate relief. We build the marketing systems to ensure you are the clinic they call first."
        primaryCtaText="Grow Your Endodontic Referrals"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Marketing Built For Urgency</h2>
              <p className="text-muted text-lg mb-4">
                Endodontic marketing requires a fundamental understanding of pain urgency. A patient searching for an implant takes weeks to decide. A patient searching for an emergency root canal takes minutes.
              </p>
              <p className="text-muted text-lg mb-4">
                Your website must load instantly, your click-to-call buttons must be prominent, and your Google Ads must be aggressively bidding on hyper-specific emergency keywords in your local UK area.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Endodontic Growth Strategy</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Search className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">High-Intent PPC Campaigns</h4>
                    <p className="text-muted text-sm">Aggressive Google Ads targeting 'emergency root canal' and 'tooth nerve pain' in your exact postal codes.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <ShieldPlus className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">B2B Referral SEO</h4>
                    <p className="text-muted text-sm">We don't just target patients; we build content silos that position your clinic as the premier referral destination for local general dentists.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <HeartPulse className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Trust & Authority Branding</h4>
                    <p className="text-muted text-sm">Highlighting your microscopic capabilities and pain-free ethos to alleviate extreme patient anxiety.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Are you relying entirely on referrals?"
        buttonText="Unlock Direct-To-Patient Growth"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Scale Your Surgical Schedule</h2>
            <p className="text-muted text-lg mb-6">We provide dedicated endodontists with the digital infrastructure to break free from pure B2B reliance and capture highly lucrative B2C direct acquisitions.</p>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
