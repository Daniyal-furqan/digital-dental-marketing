import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { Smile, Activity, Search, PhoneForwarded } from 'lucide-react';

export const metadata = {
  title: 'Digital Marketing For General Dentists UK',
  description: 'We generate high-quality patient leads for general dental practices in the UK. Specialized SEO, PPC, and Website Design to keep your chairs full.',
};

export default function DentistsIndustry() {
  return (
    <>
      <HeroSection 
        title="Predictable Growth for General Dental Practices"
        subtitle="Keep your hygiene schedules full and consistently attract high-value restorative cases. Our comprehensive marketing system provides UK dentists with scalable, month-over-month growth."
        primaryCtaText="Get a Free Practice Audit"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">The General Dentist's Marketing Problem</h2>
              <p className="text-muted text-lg mb-4">
                General dentists face the highest level of local competition. When a patient needs a check-up, they often pick whoever is closest or ranking highest on Google Maps. If your SEO is weak, you lose them forever.
              </p>
              <p className="text-muted text-lg mb-4">
                We utilize aggressive Local SEO and hyper-targeted Google PPC campaigns to ensure that when a patient searches for a 'dentist near me', your clinic is the undeniably best option they see.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">How We Keep Your Chairs Full</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Search className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Map Pack Dominance</h4>
                    <p className="text-muted text-sm">We put your clinic at the absolute top of the local map listings to intercept local demand.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <PhoneForwarded className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">High-Intent Ads</h4>
                    <p className="text-muted text-sm">We run Google Ads targeting emergency dental terms for immediate, same-day chair filling.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Smile className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Cosmetic Upsell Funnels</h4>
                    <p className="text-muted text-sm">We build funnels that attract general patients and naturally educate them on high-margin cosmetic upgrades.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Ready to dominate your local dental market?"
        buttonText="Book Your Strategy Session"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Grow Your Patient Base</h2>
            <p className="text-muted text-lg mb-6">Whether you are a start-up squat practice or an established 5-chair clinic, we have the precise marketing blueprint to scale your revenue securely and predictably.</p>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
