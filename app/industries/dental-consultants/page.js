import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { Network, TrendingUp, Search, Users } from 'lucide-react';

export const metadata = {
  title: 'Marketing For Dental Consultants UK | B2B Growth',
  description: 'Specialized B2B digital marketing for Dental Consultants and Practice Management Experts. We generate high-tier clinic owner leads for your coaching business.',
};

export default function ConsultantsIndustry() {
  return (
    <>
      <HeroSection 
        title="Scale Your Dental Coaching Business"
        subtitle="You teach dentists how to scale their clinics. We run the B2B marketing systems that scale your consulting business. Acquire high-tier clinic owners across the UK with precision marketing."
        primaryCtaText="Grow Your Client Roster"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Marketing to Clinic Owners</h2>
              <p className="text-muted text-lg mb-4">
                Selling B2B coaching and consulting services to dental practice owners is entirely different from selling B2C dentistry. Practice owners are skeptical, short on time, and bombarded with sales pitches daily.
              </p>
              <p className="text-muted text-lg mb-4">
                To acquire them, you must project absolute, overwhelming industry authority. We build personal brand ecosystems that position you as the definitive thought leader in UK dental practice management.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">The B2B Growth Framework</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Search className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Authority SEO & Content</h4>
                    <p className="text-muted text-sm">Deeply technical articles ranking for 'how to increase case acceptance' and 'dental practice valuation UK'.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Network className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">LinkedIn & B2B Funnels</h4>
                    <p className="text-muted text-sm">Automated webinar funnels and high-converting LinkedIn advertising targeted strictly at registered UK practice owners.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Users className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Personal Branding Design</h4>
                    <p className="text-muted text-sm">Premium website design focusing heavily on your case studies, spoken engagements, and transformative clinical ROIs.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Are you ready to sign higher-ticket clinics?"
        buttonText="Get a Strategic Consultation"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Elevate Your Authority</h2>
            <p className="text-muted text-lg mb-6">Stop grinding through manual outreach. Let us build a scalable inbound machine that delivers qualified, ready-to-invest practice owners directly to your calendar.</p>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
