import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { Gem, TrendingUp, Search, Layers } from 'lucide-react';

export const metadata = {
  title: 'Marketing For Prosthodontists UK | Dental Implants & Veneers',
  description: 'Digital marketing tailored exclusively for Prosthodontists. Generate extremely high-value full-mouth reconstruction and All-on-4 implant patients.',
};

export default function ProsthodontistsIndustry() {
  return (
    <>
      <HeroSection 
        title="Acquire High-Ticket Restorative Patients"
        subtitle="Prosthodontics represents the most lucrative procedures in density. We build luxurious brands and aggressive acquisition funnels to monopolize the All-on-4 and full-mouth reconstruction market in your city."
        primaryCtaText="Capture Premium Patients"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Marketing for £15,000+ Treatment Plans</h2>
              <p className="text-muted text-lg mb-4">
                Selling a £15,000 implant case requires a fundamentally different psychological marketing approach than selling a £50 check-up. The patient journey is longer, the research phase is deeper, and the demand for visual trust is absolute.
              </p>
              <p className="text-muted text-lg mb-4">
                We position you as the undeniable premier restorative specialist in your area through incredibly high-end website design, authoritative SEO regarding missing teeth, and retargeting ads featuring emotional patient testimonials.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">The Prosthodontic Growth Engine</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Search className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">High-Intent 'All-on-4' Search Campaigns</h4>
                    <p className="text-muted text-sm">Aggressive Google Ads bidding specifically on patients searching for 'teeth in a day' or 'full mouth dental implants'.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Gem className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Luxury Visual Branding</h4>
                    <p className="text-muted text-sm">You cannot sell premium services with a cheap website. We engineer ultra-high-end digital aesthetics.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Layers className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Consultation Tunnels</h4>
                    <p className="text-muted text-sm">Dedicated landing pages optimizing your complex consultation booking process to weed out low-intent leads.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Are you relying solely on general dentist referrals?"
        buttonText="Unlock Direct Marketing"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Dominate Restorative Dentistry</h2>
            <p className="text-muted text-lg mb-6">Build a predictable machine for acquiring full-arch surgical cases and advanced cosmetic veneers, allowing you to focus purely on high-tier clinical execution.</p>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
