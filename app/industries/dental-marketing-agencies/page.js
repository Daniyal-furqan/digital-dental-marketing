import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { Briefcase, Code, PenTool, Database } from 'lucide-react';

export const metadata = {
  title: 'White Label Dental Marketing For Agencies UK',
  description: 'White-label web development, SEO, and copywriting for general marketing agencies handling dental clients in the UK. Scale your agency with our technical execution.',
};

export default function DentalMarketingAgenciesIndustry() {
  return (
    <>
      <HeroSection 
        title="White-Label Execution For Marketing Agencies"
        subtitle="You manage the client relationship. We execute the high-end medical marketing. Partner with us for premium, white-label dental Web Dev, SEO, and Copywriting."
        primaryCtaText="Discuss Agency Partnerships"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Scale Your Agency Without Expanding Headcount</h2>
              <p className="text-muted text-lg mb-4">
                If you are a general marketing agency that has landed a lucrative dental client but lacks the specific medical copywriting expertise or high-end dental web development skills required, we are your back-room execution team.
              </p>
              <p className="text-muted text-lg mb-4">
                We act strictly under Non-Disclosure Agreements (NDAs). Your clients never know we exist. You markup our wholesale prices, deliver premium results, and keep the recurring relationship.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">What We Can White-Label</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Code className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Web Development</h4>
                    <p className="text-muted text-sm">Blazing fast, React-based or Wordpress dental frameworks designed for maximum conversion.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <PenTool className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">GDC-Compliant Copywriting</h4>
                    <p className="text-muted text-sm">Protect your agency from liability. Our writers understand exactly what can and cannot be said in UK dentistry.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Database className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Technical Medical SEO</h4>
                    <p className="text-muted text-sm">Advanced Schema markups, Local Map dominance, and deep authority link building for the health sector.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Need a trusted technical partner for your dental clients?"
        buttonText="Sign Under NDA"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Protect Your Margins</h2>
            <p className="text-muted text-lg mb-6">Don't lose a dental client or risk legal issues with poor medical copy because you don't have the specialized in-house team. Use ours.</p>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
