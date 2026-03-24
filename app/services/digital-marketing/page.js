import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { Target, Search, BarChart, CheckCircle, Smartphone } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Full-Service Digital Marketing For UK Dentists',
  description: 'Scalable digital marketing campaigns designed to generate high-intent patient leads for dental clinics across the UK. Google Ads, Meta Ads, and comprehensive growth.',
};

export default function DigitalMarketingService() {
  return (
    <>
      <HeroSection 
        title="Predictable Patient Acquisition with Dental Marketing"
        subtitle="Stop relying strictly on word-of-mouth. We build multi-channel digital marketing campaigns that ensure your UK dental practice has a consistent, controllable flow of high-value appointments."
        primaryCtaText="Get a Custom Marketing Plan"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Why Dentists Need Specialized Marketing</h2>
              <p className="text-muted text-lg mb-4">
                The healthcare consumer journey is highly emotional. A patient choosing someone to drill into their jaw for an implant needs absolute trust. They do not click a generic Google Ad and book immediately.
              </p>
              <p className="text-muted text-lg mb-4">
                They view your ad, check your reviews, visit your website, watch your video testimonials, and retargeted on Instagram before finally calling. Our full-service digital marketing handles this entire ecosystem for you.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Multi-Channel Approach</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Search className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Google PPC Campaigns</h4>
                    <p className="text-muted text-sm">Capture immediate demand. When someone searches 'Emergency dentist near me', your ad is the first thing they see.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Smartphone className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Meta (Facebook/IG) Advertising</h4>
                    <p className="text-muted text-sm">Generate visual demand for cosmetic procedures like Invisalign and Veneers through highly targeted social ads.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Target className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Advanced Retargeting</h4>
                    <p className="text-muted text-sm">Keep your clinic top-of-mind for users who visited your site but haven't booked yet.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Ready to turn clicks into seated patients?"
        buttonText="Request Advertising Audit"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container max-w-5xl mx-auto grid grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Start Scaling With Confidence</h2>
            <p className="text-muted text-lg mb-6">We provide full transparency. You will know exactly how much you spent and exactly how many gross-revenue generating patients walked through your doors as a result.</p>
            <ul className="flex-col gap-4">
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Data-driven Google Ad Management</li>
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Highly Converting Social Media Lead Forms</li>
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> CRM and Front-Desk Integration</li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
