import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { Activity, Camera, PenTool, TrendingUp } from 'lucide-react';

export const metadata = {
  title: 'Orthodontic Marketing Agency UK',
  description: 'Digital marketing tailored exclusively for Orthodontists. Drive massive volume for Invisalign and Braces consultations with targeted Ads and SEO.',
};

export default function OrthodontistsIndustry() {
  return (
    <>
      <HeroSection 
        title="Marketing That Fills Your Invisalign Chairs"
        subtitle="Orthodontic marketing is highly visual and highly competitive. We build brand authority and run aggressive lead-generation funnels to make you the undisputed clear aligner leader in your region."
        primaryCtaText="Scale Your Ortho Clinic"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Visual Demand Meets Search Intent</h2>
              <p className="text-muted text-lg mb-4">
                Orthodontic patients are buying confidence. This requires a two-pronged marketing attack: massive visual demand generation on Meta (Facebook/Instagram/TikTok), combined with aggressive localized SEO to capture adults searching for 'Invisalign cost' on Google.
              </p>
              <p className="text-muted text-lg mb-4">
                We build dedicated funnel pages that skip the generic fluff and focus heavily on Before/After results, flexible financing options, and free scan consultations.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Orthodontic Growth Engine</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Camera className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">High-Converting Social Ads</h4>
                    <p className="text-muted text-sm">Targeting teens and adults with relatable, pain-point driven video ads and interactive lead forms.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <TrendingUp className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Invisalign Open Day Tunnels</h4>
                    <p className="text-muted text-sm">Specialized landing pages designed to fully book your high-conversion open day events.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <PenTool className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Competitor Conquesting</h4>
                    <p className="text-muted text-sm">Bidding on competitor brand names in Google Ads to siphon high-intent search traffic directly to your practice.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Are you losing high-value ortho cases?"
        buttonText="Evaluate Your Marketing"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Capture the Ortho Market</h2>
            <p className="text-muted text-lg mb-6">Orthodontics is the most lucrative niche in density. Do not rely on luck. Rely on our scientifically tested lead-generation frameworks to keep your chairs constantly full.</p>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
