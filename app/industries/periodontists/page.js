import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { Network, Activity, Search, ShieldPlus } from 'lucide-react';

export const metadata = {
  title: 'Periodontist Marketing Agency UK',
  description: 'Digital marketing tailored exclusively for Periodontists. Drive high-value gum disease treatments and foundational implant surgeries through targeted SEO.',
};

export default function PeriodontistsIndustry() {
  return (
    <>
      <HeroSection 
        title="Scalable Growth For UK Periodontists"
        subtitle="Attract complex periodontal cases directly from Google, while simultaneously building robust, automated B2B referral networks with local general dentists."
        primaryCtaText="Grow Your Periodontal Practice"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">The Dual-Acquisition Model</h2>
              <p className="text-muted text-lg mb-4">
                Periodontists require a unique marketing approach. You cannot rely solely on direct-to-patient (B2C) marketing because patients often don't know they need a periodontist until a generalist tells them.
              </p>
              <p className="text-muted text-lg mb-4">
                We build dual-acquisition funnels. We create deep SEO infrastructure for high-intent B2C searches (e.g. 'Gum disease treatment cost'), while configuring professional B2B digital outreach to secure high-volume referrals from general clinics. 
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Periodontal Strategy</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Search className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Advanced SEO Silos</h4>
                    <p className="text-muted text-sm">Highly authoritative pages detailing gingivitis, periodontitis, and soft tissue grafting to satisfy Google's medical algorithms.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Network className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Referral Hub Architecture</h4>
                    <p className="text-muted text-sm">Dedicated portals on your website specifically designed to make it effortless for general dentists to refer complex cases to you.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <ShieldPlus className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Implant Foundation Campaigns</h4>
                    <p className="text-muted text-sm">Targeting patients needing bone grafts and ridge augmentation in preparation for standard implantology.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Are you invisible to direct patient searches?"
        buttonText="Get a Professional SEO Audit"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Command the Periodontal Market</h2>
            <p className="text-muted text-lg mb-6">Stop leaving advanced periodontal and pre-implant surgical revenue on the table. Solidify your authority visually and algorithmically.</p>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
