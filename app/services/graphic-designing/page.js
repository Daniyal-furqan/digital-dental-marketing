import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { Palette, Layers, PenTool, Search } from 'lucide-react';

export const metadata = {
  title: 'Premium Dental Branding & Graphic Design UK',
  description: 'High-end branding, logo design, and clinic brochures for UK dentists. Look like a premium private clinic so you can charge premium prices.',
};

export default function GraphicDesignService() {
  return (
    <>
      <HeroSection 
        title="Dental Branding That Commands Premium Prices"
        subtitle="If your clinic's visual identity looks cheap, patients will expect cheap prices. We build luxurious, high-end branding that positions your practice as the premier choice in your city."
        primaryCtaText="View Our Design Portfolio"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Visual Trust is Immediate</h2>
              <p className="text-muted text-lg mb-4">
                Patients subconsciously judge the quality of your clinical care based on the quality of your branding. A beautiful, cohesive aesthetic across your website, social media, and physical signage tells them you are a modern, high-tier professional.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Premium Design Services</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Palette className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Identity & Logo Design</h4>
                    <p className="text-muted text-sm">Timeless logos that avoid cliché tooth graphics in favor of modern, sophisticated medical aesthetics.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Layers className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Clinic Brochures & Print</h4>
                    <p className="text-muted text-sm">High-end consultation materials for expensive treatments like Invisalign and implants.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <PenTool className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Social Media Assets</h4>
                    <p className="text-muted text-sm">Cohesive instagram grid designs and facebook ad creatives that stop patients from scrolling.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Does your logo reflect the quality of your dentistry?"
        buttonText="Request a Branding Audit"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Upgrade Your Image</h2>
            <p className="text-muted text-lg mb-6">Stop letting an outdated brand cost you high-value case acceptance. Our graphic designers will elevate your entire visual identity.</p>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
