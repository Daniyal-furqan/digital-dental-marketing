import HeroSection from '../components/HeroSection';
import CTAStrip from '../components/CTAStrip';
import FeatureCard from '../components/FeatureCard';
import { Globe, Search, TrendingUp, Video, PenTool, MapPin, Palette } from 'lucide-react';

export const metadata = {
  title: 'Our Dental Marketing Services',
  description: 'Explore our comprehensive digital growth services exclusively for UK dental clinics. We offer specialized SEO, Web Design, and PPC campaigns to drive booked appointments.',
};

export default function ServicesHub() {
  return (
    <>
      <HeroSection 
        title="Predictable Growth For Your Dental Practice"
        subtitle="We build high-converting digital marketing ecosystems tailored specifically to dentists, orthodontists, and specialists in the UK market."
        primaryCtaText="Get a Custom Proposal"
        primaryCtaLink="/contact-us"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Core Services Engineered For Dentistry</h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Our strategies are not templates. Whether you need an elite web presence, to dominate your local region in Google Search, or run high-yielding patient acquisition campaigns, we have the exact framework required.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <FeatureCard 
              icon={Globe} title="High-Converting Website Development" linkHref="/services/website-development"
              description="Your website is your digital waiting room. We build blazing fast, ultra-premium websites that establish immediate trust, showcase your high-value treatments, and funnel patients directly to your booking system."
            />
            <FeatureCard 
              icon={Search} title="Advanced Dental SEO" linkHref="/services/seo"
              description="Be the clinic patients find when they search for 'Invisalign cost', 'dental implants', or 'emergency dentist' in your area. We secure top organic rankings for the most lucrative keywords."
            />
            <FeatureCard 
              icon={MapPin} title="Local SEO & GBP Optimization" linkHref="/services/local-seo"
              description="80% of new patients come from the Google Map Pack. We optimize your Google Business Profile to ensure you own the local search space, driving hundreds of direct phone calls a month."
            />
            <FeatureCard 
              icon={TrendingUp} title="Digital Marketing & Ads" linkHref="/services/digital-marketing"
              description="Scale predictably. Through data-driven PPC campaigns on Google and targeted Meta Ads, we present your high-ROI services precisely when prospective patients are ready to commit."
            />
            <FeatureCard 
              icon={PenTool} title="Medical Content Writing" linkHref="/services/content-writing"
              description="Authoritative, GDC-compliant content writing. We build out deep service pages and educational blogs that build trust and satisfy Google's strict E-E-A-T guidelines."
            />
            <FeatureCard 
              icon={Palette} title="Graphic Designing & Branding" linkHref="/services/graphic-designing"
              description="A clinic charging premium prices must look premium. We design comprehensive branding packages, social media assets, and digital brochures that separate you from budget competitors."
            />
            <FeatureCard 
              icon={Video} title="Video Editing & Production" linkHref="/services/video-editing"
              description="Video is the most powerful tool for case acceptance. We edit patient testimonials, clinic tours, and TikTok/Instagram Reels designed to humanize your team and display your expertise visually."
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-6">Not Sure Where To Start?</h2>
          <p className="text-lg text-muted mb-8">
            Every clinic is in a different phase of growth. Some need a completely new brand identity, while others just need an aggressive SEO injection to their existing setup. Contact our strategy team for a free, comprehensive website and market audit.
          </p>
          <a href="/contact-us" className="btn btn-primary text-lg px-8 py-3">Book Your Free Audit Now</a>
        </div>
      </section>
      
      <CTAStrip />
    </>
  );
}
