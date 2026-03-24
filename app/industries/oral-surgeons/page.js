import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { ShieldPlus, Activity, Search, Stethoscope } from 'lucide-react';

export const metadata = {
  title: 'Digital Marketing For Oral Surgeons UK',
  description: 'Specialized digital marketing and SEO campaigns designed to acquire high-value oral surgery patients across the UK for Wisdom Teeth, Implants, and Jaw Surgery.',
};

export default function OralSurgeonsIndustry() {
  return (
    <>
      <HeroSection 
        title="Predictable Acquisition For Oral Surgeons"
        subtitle="Attract complex, high-value cases. We deploy highly targeted marketing strategies for Oral and Maxillofacial surgeons looking to scale direct-to-patient lead generation."
        primaryCtaText="Get a Custom Strategy"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">High-Value Case Attraction</h2>
              <p className="text-muted text-lg mb-4">
                Oral surgery patients are undertaking significant emotional and financial investments. A generic website simply will not convert them. They need to perceive immense authority, profound medical competence, and unwavering safety.
              </p>
              <p className="text-muted text-lg mb-4">
                We design clinical websites and aggressive SEO campaigns that target lucrative keywords such as 'Full Arch Implants', 'Impacted Wisdom Teeth Extraction', and 'Bone Grafting Specialists' in your region.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">Oral Surgery Marketing Pillars</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Search className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Complex Treatment SEO</h4>
                    <p className="text-muted text-sm">Deeply educational service pages designed to satisfy YMYL Google algorithms for complex surgical procedures.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Stethoscope className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Medical Authority Branding</h4>
                    <p className="text-muted text-sm">Professional video and web design that prominently features your hospital affiliations, qualifications, and safety protocols.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <ShieldPlus className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Anxiety-Reducing Copywriting</h4>
                    <p className="text-muted text-sm">Ethical content designed to ease patient fears safely, strictly adhering to UK GDC regulations on advertising.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Ready to dominate the surgical market in your city?"
        buttonText="Book Free Consultation"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Drive Surgical Lead Volume</h2>
            <p className="text-muted text-lg mb-6">We don't waste budget on generic dental terms. We focus purely on aggressive ROI surgical campaigns that generate highly profitable consultations.</p>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
