import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';
import CTAStrip from './components/CTAStrip';
import TestimonialSlider from './components/TestimonialSlider';
import ContactForm from './components/ContactForm';
import { 
  Globe, Search, TrendingUp, Video, PenTool, MapPin, Palette,
  Stethoscope, Smile, Activity, ShieldPlus, Users, Briefcase, Award,
  Filter, Target, ArrowRight, CheckCircle2, Zap, Plus, Phone
} from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection 
        title="Your Revenue Growth Partner in the Dental Sector"
        subtitle="Stop relying on unpredictable word-of-mouth. We build scalable patient acquisition systems that generate high-quality leads, booked appointments, and sustainable growth for UK dental practices."
        primaryCtaText="Get a Custom Proposal"
        primaryCtaLink="#contact"
        secondaryCtaText="View Case Studies"
        secondaryCtaLink="#results"
      />

      {/* Modern Trust Banner */}
      <section className="bg-white border-b border-border py-12 relative z-20">
        <div className="container text-center">
          <p className="text-muted font-bold mb-8 uppercase tracking-widest text-xs">Trusted By Industry Leading UK Practices & DSOs</p>
          <div className="flex justify-center flex-wrap gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Replace with actual SVGs when available */}
            <h3 className="text-xl font-bold flex items-center gap-2"><Stethoscope size={24} /> LondonSmile</h3>
            <h3 className="text-xl font-bold flex items-center gap-2"><Palette size={24} /> Aesthetic Dental</h3>
            <h3 className="text-xl font-bold flex items-center gap-2"><Plus className="w-5 h-5"/> EliteOrtho</h3>
            <h3 className="text-xl font-bold flex items-center gap-2"><ShieldPlus size={24}/> UK Endo</h3>
          </div>
        </div>
      </section>

      {/* The Funnel / Process Section (Inspired by Screenshot) */}
      <section className="section-padding bg-surface relative">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="tag">Our Methodology</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">A Marketing Funnel That Actually Fills Your Chairs.</h2>
            <p className="text-lg text-muted">
              Most agencies focus on vanity metrics like 'impressions' and 'clicks'. We build complete end-to-end funnels designed specifically to capture high-intent patients searching for premium dental treatments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left side text/steps */}
            <div className="flex flex-col gap-8">
              <div className="flex gap-4 items-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-secondary shrink-0 border border-border">
                  <Target size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">1. Precision Targeting</h4>
                  <p className="text-muted">We use hyper-local SEO and data-driven PPC to place your practice in front of patients actively searching for Implants, Invisalign, and Cosmetic care.</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-secondary shrink-0 border border-border">
                  <Filter size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">2. Frictionless Conversion</h4>
                  <p className="text-muted">High-converting landing pages and intuitive mobile-first designs turn curious local searchers into booked consultations seamlessly.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm text-secondary shrink-0 border border-border">
                  <Zap size={28} />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">3. Automated Cultivation</h4>
                  <p className="text-muted">We integrate follow-up sequences and retargeting ads so no lead ever falls through the cracks, maximizing your ROI.</p>
                </div>
              </div>
            </div>

            {/* Right side Funnel Graphic */}
            <div className="relative flex justify-center items-center h-[500px]">
              {/* Simulated CSS 3D Funnel */}
              <div className="w-full max-w-md relative flex flex-col items-center">
                <div className="w-80 h-24 bg-blue-500 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white font-bold text-lg mb-[-12px] z-40">Traffic Generation</div>
                <div className="w-64 h-24 bg-blue-600 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white font-bold text-lg mb-[-12px] z-30">Lead Capture</div>
                <div className="w-48 h-24 bg-blue-700 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-white font-bold text-lg mb-[-12px] z-20">Consultations</div>
                <div className="w-32 h-24 bg-blue-800 rounded-full border-4 border-white shadow-lg flex items-center justify-center text-white font-bold text-lg z-10">New Patients</div>
                
                {/* Decorative particles */}
                <div className="absolute -top-10 -right-10 text-secondary opacity-50"><TrendingUp size={40} /></div>
                <div className="absolute bottom-10 -left-10 text-accent opacity-50"><Users size={40} /></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding bg-white relative">
        <div className="container">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <span className="tag">Full-Stack Services</span>
            <h2 className="text-4xl font-extrabold mb-4">Dedicated Strategies for Dental Domination</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
              icon={TrendingUp} title="Digital Ads (PPC)" linkHref="/services/digital-marketing"
              description="Data-driven Google and Meta ad campaigns tailored to bring high-intent dental patients through your doors reliably."
            />
            <FeatureCard 
              icon={PenTool} title="Content & Medical Writing" linkHref="/services/content-writing"
              description="Authoritative, medically accurate, and SEO-optimized blog posts and service pages that educate patients and boost rankings."
            />
            <FeatureCard 
              icon={Video} title="Video Production" linkHref="/services/video-editing"
              description="Engaging patient testimonials, clinic tours, and TikTok/Reels content edited perfectly to build your brand authority."
            />
          </div>
        </div>
      </section>

      {/* Deep Dive / Results Section (Screenshot Style Cards) */}
      <section id="results" className="section-padding bg-light-blue relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <span className="tag bg-white text-secondary">Proven Track Record</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Real Growth, Quantified.</h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">We don't guess. We execute proven playbooks that have scaled dozens of UK dental practices from stagnant to fully-booked.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Metric Card 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-border relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <TrendingUp size={80} />
              </div>
              <div className="text-accent bg-accent-light w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-5xl font-black text-primary mb-2">320%</h3>
              <p className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Increase in Implant Leads</p>
              <p className="text-sm text-text-main line-clamp-3">For a premier central London clinic within the first 6 months of launching our targeted Meta Ads funnel.</p>
            </div>

            {/* Metric Card 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-border relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <MapPin size={80} />
              </div>
              <div className="text-secondary bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-5xl font-black text-primary mb-2">#1</h3>
              <p className="text-sm font-bold text-muted uppercase tracking-wider mb-2">Local Map Rankings</p>
              <p className="text-sm text-text-main line-clamp-3">Secured top 3 map pack positions for 15+ high-volume commercial keywords for a Manchester practice.</p>
            </div>

            {/* Metric Card 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-border relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Users size={80} />
              </div>
              <div className="text-purple-600 bg-purple-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Users size={24} />
              </div>
              <h3 className="text-5xl font-black text-primary mb-2">45+</h3>
              <p className="text-sm font-bold text-muted uppercase tracking-wider mb-2">New Patients / Mo</p>
              <p className="text-sm text-text-main line-clamp-3">Consistent volume of high-ticket patients via our combined SEO and Google Ads strategy.</p>
            </div>

            {/* Metric Card 4 */}
            <div className="bg-primary p-8 rounded-3xl shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col justify-between">
               <div>
                  <h3 className="text-3xl font-extrabold text-white mb-4">Ready to be our next success story?</h3>
                  <p className="text-blue-200 mb-8 text-sm">Get a complimentary audit of your current digital footprint to see exactly how much money you're leaving on the table.</p>
               </div>
               <Link href="#contact" className="btn btn-secondary w-full">Claim Free Audit <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>

      {/* Industries / Who we serve */}
      <section className="section-padding bg-surface border-t border-border">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="tag">Niche Specialists</span>
              <h2 className="text-4xl font-extrabold mb-6">Nuanced Marketing For Specialized Dentistry</h2>
              <p className="text-muted text-lg mb-6">
                Generic marketing strategies fail in dentistry. A campaign for pediatric check-ups requires entirely different messaging and targeting than a full-arch implant campaign.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 font-semibold"><CheckCircle2 className="text-secondary" /> GDC Compliant Advertising</li>
                <li className="flex items-center gap-3 font-semibold"><CheckCircle2 className="text-secondary" /> Treatment-Specific Landing Pages</li>
                <li className="flex items-center gap-3 font-semibold"><CheckCircle2 className="text-secondary" /> Patient Psychology Driven Copy</li>
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Link href="/industries/dentists" className="flex flex-col items-center text-center gap-3 p-6 bg-white rounded-2xl shadow-sm border border-border hover:border-secondary hover:shadow-md transition-all group">
                <div className="p-3 bg-surface rounded-full group-hover:bg-blue-50 transition-colors"><Smile className="text-secondary" size={32} /></div>
                <span className="font-bold">General Dentists</span>
              </Link>
              <Link href="/industries/orthodontists" className="flex flex-col items-center text-center gap-3 p-6 bg-white rounded-2xl shadow-sm border border-border hover:border-secondary hover:shadow-md transition-all group">
                <div className="p-3 bg-surface rounded-full group-hover:bg-blue-50 transition-colors"><Activity className="text-secondary" size={32} /></div>
                <span className="font-bold">Orthodontists</span>
              </Link>
              <Link href="/industries/oral-surgeons" className="flex flex-col items-center text-center gap-3 p-6 bg-white rounded-2xl shadow-sm border border-border hover:border-secondary hover:shadow-md transition-all group">
                <div className="p-3 bg-surface rounded-full group-hover:bg-blue-50 transition-colors"><ShieldPlus className="text-secondary" size={32} /></div>
                <span className="font-bold">Oral Surgeons</span>
              </Link>
              <Link href="/industries/dsos-groups" className="flex flex-col items-center text-center gap-3 p-6 bg-white rounded-2xl shadow-sm border border-border hover:border-secondary hover:shadow-md transition-all group">
                <div className="p-3 bg-surface rounded-full group-hover:bg-blue-50 transition-colors"><Briefcase className="text-secondary" size={32} /></div>
                <span className="font-bold">DSOs & Groups</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Stop losing local patients to inferior clinics." 
        subtitle="It's time to dominate your local market. Speak with our growth exports today."
        buttonText="Book Strategic Call"
      />

      <TestimonialSlider />

      {/* Contact / Lead Form Section */}
      <section id="contact" className="section-padding bg-white relative">
        <div className="absolute inset-0 bg-blue-50/50 -skew-y-3 transform origin-top-left z-0"></div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="tag">Let's Talk</span>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Get A Custom Growth Blueprint.</h2>
              <p className="text-muted text-lg mb-8">
                Fill out the form to request a comprehensive analysis of your current digital presence. We'll show you exactly where your competitors are winning and how to take those patients back.
              </p>
              
              <div className="bg-white p-8 rounded-3xl shadow-lg border border-border">
                <h4 className="font-bold text-xl mb-6 flex items-center gap-2"><Phone className="text-secondary"/> Direct Access</h4>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-bold text-muted uppercase">Call Us</p>
                    <a href="tel:+447414667968" className="text-xl font-bold text-primary hover:text-secondary">+44 7414 667968</a>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted uppercase">Email Us</p>
                    <a href="mailto:info@digitaldentalmarketing.co.uk" className="text-lg font-bold text-primary hover:text-secondary">info@digitaldentalmarketing.co.uk</a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
               {/* Decorative background behind form */}
               <div className="absolute inset-0 bg-gradient-to-tr from-secondary to-blue-300 rounded-3xl blur-2xl opacity-20 transform scale-105"></div>
               <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-border">
                 <ContactForm />
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
