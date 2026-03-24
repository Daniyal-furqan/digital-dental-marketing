import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import TestimonialSlider from '../../components/TestimonialSlider';
import { Target, TrendingUp, CheckCircle, SearchCode, BarChart, FileSearch, PenTool, MapPin } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Dental SEO Services UK | Rank #1 on Google',
  description: 'Specialized SEO services for UK dentists. Dominate local search results, capture high-intent patients, and scale your clinic with data-driven dental SEO.',
};

export default function SEOService() {
  return (
    <>
      <HeroSection 
        title="Dominate Google with Expert Dental SEO"
        subtitle="When an ideal patient in your city searches for 'Invisalign cost' or 'Dental Implants near me', your clinic must be #1. We engineer SEO campaigns that completely monopolize local search traffic."
        primaryCtaText="Get a Free SEO Audit"
        primaryCtaLink="#contact"
        secondaryCtaText="See All Services"
        secondaryCtaLink="/services"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">The High Cost of Poor SEO</h2>
              <p className="text-muted text-lg mb-4">
                If your clinic is sitting on page 2 of Google, you are invisible to 95% of patients actively searching for dental care. Every single day, hundreds of high-value treatments are being booked in your city—but they are going to your competitors.
              </p>
              <p className="text-muted text-lg mb-4">
                Dental SEO is not just about adding keywords to a page. It is a highly competitive, algorithmic war for digital real estate. Generalist marketing agencies fail because they don't understand patient search intent, medical schema markup, or the stringent EEAT (Experience, Expertise, Authoritativeness, Trustworthiness) requirements Google demands from healthcare sites.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">What Our SEO Delivers</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <TrendingUp className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Unmatched ROI</h4>
                    <p className="text-muted text-sm">Once ranked organically, you acquire patients 24/7 without paying per click like Google Ads.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Target className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">High-Intent Traffic</h4>
                    <p className="text-muted text-sm">We specifically optimize for massive ROI treatments like full-arch implants and clear aligners.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <CheckCircle className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Local Map Pack Dominance</h4>
                    <p className="text-muted text-sm">We ensure you sit in the coveted top 3 spots of the Google Maps local listing.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Want to see exactly why your competitor is outranking you?" 
        subtitle="Claim your free competitor analysis and technical SEO audit today."
        buttonText="Analyze My Competitors"
      />

      <section className="section-padding bg-surface">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Proven Dental SEO Methodology</h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">We do not guess. We let algorithms and data dictate our strategy. This is the 6-pillar framework we use to rank UK clinics #1.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="card text-center items-center">
              <SearchCode size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">1. Technical SEO Foundation</h3>
              <p className="text-muted">We fix indexing errors, optimize core web vitals, implement dental schema markup, and ensure Google’s crawlers can perfectly parse your clinic's data.</p>
            </div>
            <div className="card text-center items-center">
              <FileSearch size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">2. Keyword Trajectory Mapping</h3>
              <p className="text-muted">We identify 'money keywords' in your specific UK region—targeting phrases with high search volume and high commercial intent (e.g., 'Invisalign dentist London').</p>
            </div>
            <div className="card text-center items-center">
              <PenTool size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">3. Medical Content Architecture</h3>
              <p className="text-muted">Google requires medical accuracy. We craft incredibly deep, authoritative service pages that signal extreme expertise to both patients and search engines.</p>
            </div>
            <div className="card text-center items-center">
              <MapPin size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">4. Local SEO & Citation Building</h3>
              <p className="text-muted">We aggressively optimize your Google Business Profile and build hundreds of consistent NAP (Name, Address, Phone) citations across local UK directories.</p>
            </div>
            <div className="card text-center items-center">
              <TrendingUp size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">5. High-Authority Backlinking</h3>
              <p className="text-muted">We secure powerful backlinks from relevant healthcare hubs, local newspapers, and dental associations to rapidly boost your domain authority.</p>
            </div>
            <div className="card text-center items-center">
              <BarChart size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">6. Transparent ROI Reporting</h3>
              <p className="text-muted">No vanity metrics. We provide dashboards tracking exact ranking shifts, organic phone calls generated, and booked consultations directly tied to SEO.</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <section id="contact" className="section-padding bg-light">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Let's Secure the #1 Position in Your City</h2>
              <p className="text-muted text-lg mb-6">SEO is a winner-take-all game. Delaying your SEO campaign means another clinic is taking the Google supremacy in your town. The time to act is right now.</p>
              <ul className="flex-col gap-4">
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Uncover hidden keyword opportunities</li>
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Audit your backlink health</li>
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Dominate the Local Google Maps Listing</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
