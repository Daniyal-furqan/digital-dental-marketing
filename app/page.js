import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';
import CTAStrip from './components/CTAStrip';
import TestimonialSlider from './components/TestimonialSlider';
import ContactForm from './components/ContactForm';
import { 
  Globe, Search, TrendingUp, Video, PenTool, MapPin, Palette,
  Stethoscope, Smile, Activity, ShieldPlus, Users, Briefcase, Award
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <HeroSection 
        title="We Grow UK Dental Practices Through Premium Digital Marketing"
        subtitle="Stop losing patients to your competitors. We generate high-quality leads, booked appointments, and scalable growth for dentists, orthodontists, and specialists across the United Kingdom."
        primaryCtaText="Get Your Free Audit"
        primaryCtaLink="#contact"
        secondaryCtaText="Explore Our Services"
        secondaryCtaLink="/services"
      />

      {/* Trust Banner */}
      <section className="trust-banner bg-surface border-b pb-8 pt-8">
        <div className="container text-center">
          <p className="text-muted font-semibold mb-4 uppercase tracking-widest text-sm">Trusted by Forward-Thinking UK Dental Professionals</p>
          <div className="flex justify-center gap-8 flex-wrap opacity-50 grayscale">
            {/* Logos would go here. For now, text placeholders */}
            <span className="font-bold text-xl">London Dental</span>
            <span className="font-bold text-xl">SmileTech Ortho</span>
            <span className="font-bold text-xl">Premier DSOs</span>
            <span className="font-bold text-xl">UK Endo Clinics</span>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-primary text-4xl font-bold mb-4">Comprehensive Dental Marketing Services</h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              We do not believe in one-size-fits-all. Our marketing strategies are custom-engineered for the UK dental sector to maximize your ROI, increase visibility, and dominate your local area.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <FeatureCard 
              icon={Globe} title="Website Development" linkHref="/services/website-development"
              description="High-end, mobile-first websites designed exclusively for dental clinics to build trust and convert visitors into booked patients instantly."
            />
            <FeatureCard 
              icon={Search} title="Dental SEO" linkHref="/services/seo"
              description="Dominate Google rankings for high-value treatments like Invisalign, Implants, and Cosmetic Dentistry in your target region."
            />
            <FeatureCard 
              icon={MapPin} title="Local SEO" linkHref="/services/local-seo"
              description="Capture the '#1 Dentist Near Me' spot. We optimize your Google Business Profile to drive calls directly to your front desk."
            />
            <FeatureCard 
              icon={TrendingUp} title="Digital Marketing" linkHref="/services/digital-marketing"
              description="Data-driven PPC and social media ad campaigns tailored to bring high-intent dental patients through your doors."
            />
            <FeatureCard 
              icon={PenTool} title="Content Writing" linkHref="/services/content-writing"
              description="Authoritative, medically accurate, and SEO-optimized blog posts and service pages that educate patients and boost rankings."
            />
            <FeatureCard 
              icon={Video} title="Video Editing" linkHref="/services/video-editing"
              description="Engaging patient testimonials, clinic tours, and TikTok/Reels content edited perfectly to build your brand authority."
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Need a predictable flow of new patients?" 
        subtitle="Let our dental marketing experts evaluate your current strategy for free."
        buttonText="Book Strategy Session"
      />

      {/* Industries / Who we serve */}
      <section className="section-padding bg-surface">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-primary text-4xl font-bold mb-6">Specialized Marketing For Every Dental Niche</h2>
              <p className="text-muted text-lg mb-6">
                Generic marketing agencies do not understand the difference between a general check-up lead and a full-arch implant consultation. We do. 
              </p>
              <p className="text-muted text-lg">
                We have dedicated strategies engineered for specific specialties—ensuring you attract the exact type of cases you want.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/industries/dentists" className="flex items-center gap-3 p-4 border rounded-lg hover:border-secondary transition-all">
                <Smile className="text-secondary" /> <span className="font-semibold text-primary">General Dentists</span>
              </Link>
              <Link href="/industries/orthodontists" className="flex items-center gap-3 p-4 border rounded-lg hover:border-secondary transition-all">
                <Activity className="text-secondary" /> <span className="font-semibold text-primary">Orthodontists</span>
              </Link>
              <Link href="/industries/oral-surgeons" className="flex items-center gap-3 p-4 border rounded-lg hover:border-secondary transition-all">
                <ShieldPlus className="text-secondary" /> <span className="font-semibold text-primary">Oral Surgeons</span>
              </Link>
              <Link href="/industries/periodontists" className="flex items-center gap-3 p-4 border rounded-lg hover:border-secondary transition-all">
                <Stethoscope className="text-secondary" /> <span className="font-semibold text-primary">Periodontists</span>
              </Link>
              <Link href="/industries/dsos-groups" className="flex items-center gap-3 p-4 border rounded-lg hover:border-secondary transition-all">
                <Briefcase className="text-secondary" /> <span className="font-semibold text-primary">DSOs & Groups</span>
              </Link>
              <Link href="/industries" className="flex items-center gap-3 p-4 bg-primary text-surface rounded-lg hover:bg-opacity-90 transition-all font-semibold justify-center">
                View All Niches &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Proof / Results Section */}
      <section className="section-padding bg-primary text-surface">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-12 text-surface">Real Results For UK Clinics</h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="result-card">
              <h3 className="text-5xl font-extrabold text-secondary mb-2">300%</h3>
              <p className="font-semibold">Increase in Implant Leads</p>
            </div>
            <div className="result-card">
              <h3 className="text-5xl font-extrabold text-secondary mb-2">#1</h3>
              <p className="font-semibold">Local SEO Map Pack Rankings</p>
            </div>
            <div className="result-card">
              <h3 className="text-5xl font-extrabold text-secondary mb-2">45+</h3>
              <p className="font-semibold">New Patients Monthly</p>
            </div>
            <div className="result-card">
              <h3 className="text-5xl font-extrabold text-secondary mb-2">120%</h3>
              <p className="font-semibold">ROI on Digital Ads</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-primary text-4xl font-bold mb-4">Why UK Dental Professionals Choose Us</h2>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="card text-center items-center">
              <Award size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Dental Niche Experts</h3>
              <p className="text-muted">We only work in the dental sector. We know your terminology, your treatments, and patient psychology better than anyone else.</p>
            </div>
            <div className="card text-center items-center">
              <TrendingUp size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Conversion Focused</h3>
              <p className="text-muted">We don't just care about 'traffic'. We care about high-converting patients sitting in your dental chairs paying for premium treatments.</p>
            </div>
            <div className="card text-center items-center">
              <Users size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">UK Market Exclusivity</h3>
              <p className="text-muted">Understanding the UK dental compliance, GDC guidelines, and local search behaviors allows us to market you safely and effectively.</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      {/* Contact / Lead Form Section */}
      <section id="contact" className="section-padding bg-surface">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-primary text-4xl font-bold mb-6">Stop Waiting For Referrals. Start Scaling Today.</h2>
              <p className="text-muted text-lg mb-6">
                Whether you need a complete website overhaul, aggressive local SEO, or a comprehensive digital marketing strategy, our team is ready to map out your practice's growth plan.
              </p>
              <ul className="flex-col gap-4 mb-8">
                <li className="flex items-center gap-3 text-lg font-medium text-primary"><ShieldPlus className="text-secondary" /> Free Initial Practice Audit</li>
                <li className="flex items-center gap-3 text-lg font-medium text-primary"><ShieldPlus className="text-secondary" /> Honest Competitor Analysis</li>
                <li className="flex items-center gap-3 text-lg font-medium text-primary"><ShieldPlus className="text-secondary" /> Clear ROI Projections</li>
              </ul>
              <div className="contact-info-block bg-light p-6 rounded-lg border">
                <h4 className="font-bold text-xl mb-4 text-primary">Direct Contact</h4>
                <p className="mb-2"><strong>Phone:</strong> +44 7414 667968</p>
                <p className="mb-2"><strong>Email:</strong> info@digitaldentalmarketing.co.uk</p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
