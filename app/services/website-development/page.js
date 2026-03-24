import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import TestimonialSlider from '../../components/TestimonialSlider';
import { Target, Shield, CheckCircle, MonitorSmartphone, Clock, Users } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Dental Website Development & Design UK',
  description: 'Premium dental website development designed to convert visitors into booked patients. Get a high-end, fast, and SEO-optimized website for your UK clinic.',
};

export default function WebsiteDevelopment() {
  return (
    <>
      <HeroSection 
        title="High-Converting Dental Website Development"
        subtitle="Your website is the digital front door to your practice. We build premium, blazing-fast, and patient-focused websites that convert traffic into high-value consultations across the UK."
        primaryCtaText="Get a Free Website Audit"
        primaryCtaLink="#contact"
        secondaryCtaText="View Our Services"
        secondaryCtaLink="/services"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Why Most Dental Websites Fail</h2>
              <p className="text-muted text-lg mb-4">
                In the highly competitive UK dental market, a cheap template website is a liability. Your potential patients are comparing you to five other local clinics before making a decision. If your website looks outdated, loads slowly, or is difficult to navigate on a mobile phone, they will immediately leave and book with your competitor.
              </p>
              <p className="text-muted text-lg mb-4">
                Furthermore, generic web designers do not understand dental patient psychology. They do not know how to structure a landing page for an 'Invisalign cost' search versus an 'emergency tooth extraction' search.
              </p>
              <ul className="flex-col gap-3 mt-6">
                <li className="flex items-center gap-2"><CheckCircle className="text-secondary" /> Failed Mobile Responsiveness</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-secondary" /> Lack of High-Intent Call to Actions</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-secondary" /> Slow Loading Speeds Damaging Google Rank</li>
                <li className="flex items-center gap-2"><CheckCircle className="text-secondary" /> Non-GDC Compliant Copywriting</li>
              </ul>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">The Solution: Conversion-First Design</h3>
              <p className="text-muted mb-6">
                We engineer our websites precisely for patient acquisition. Every button placement, color choice, and headline is mathematically designed to build immense trust and push the user towards a consultation.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-light rounded text-center">
                  <MonitorSmartphone size={32} className="text-accent mx-auto mb-2" />
                  <span className="font-semibold block">Mobile First</span>
                </div>
                <div className="p-4 bg-light rounded text-center">
                  <Clock size={32} className="text-accent mx-auto mb-2" />
                  <span className="font-semibold block">Lightning Fast</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Is your current website losing you patients?" 
        subtitle="Let our UX experts analyze your clinic's site for free and show you exactly where leads are dropping off."
        buttonText="Request Free Audit"
      />

      <section className="section-padding bg-surface">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Web Development Process</h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">We do not just hand you a theme. We custom-build digital ecosystems. Here is our proven architectural framework for UK dentists.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div className="card">
              <span className="text-5xl font-extrabold text-[#E2E8F0] absolute top-4 right-4">01</span>
              <h3 className="text-xl font-bold text-primary mb-2">Discovery & Strategy</h3>
              <p className="text-muted">We analyze your ideal patient demographic, top competitor sites in your local UK area, and determine the exact site structure needed for maximum SEO impact.</p>
            </div>
            <div className="card">
              <span className="text-5xl font-extrabold text-[#E2E8F0] absolute top-4 right-4">02</span>
              <h3 className="text-xl font-bold text-primary mb-2">UX & Wireframing</h3>
              <p className="text-muted">We map out the user journey. Patient logic dictates our wireframing - creating seamless paths from the homepage directly to treatment consultations.</p>
            </div>
            <div className="card">
              <span className="text-5xl font-extrabold text-[#E2E8F0] absolute top-4 right-4">03</span>
              <h3 className="text-xl font-bold text-primary mb-2">High-End UI Design</h3>
              <p className="text-muted">We apply premium typography, tailored color theory, and modern aesthetics to ensure your clinic immediately feels like the most professional and trustworthy option.</p>
            </div>
            <div className="card">
              <span className="text-5xl font-extrabold text-[#E2E8F0] absolute top-4 right-4">04</span>
              <h3 className="text-xl font-bold text-primary mb-2">SEO-Centric Development</h3>
              <p className="text-muted">Built on ultra-fast React frameworks. We construct clean code, Schema markups tailored for local dentists, and fully optimized Core Web Vitals.</p>
            </div>
            <div className="card">
              <span className="text-5xl font-extrabold text-[#E2E8F0] absolute top-4 right-4">05</span>
              <h3 className="text-xl font-bold text-primary mb-2">Content Integration</h3>
              <p className="text-muted">GDC compliant, medically accurate copywriting integrated naturally to persuade readers and satisfy Google's EEAT algorithms.</p>
            </div>
            <div className="card">
              <span className="text-5xl font-extrabold text-[#E2E8F0] absolute top-4 right-4">06</span>
              <h3 className="text-xl font-bold text-primary mb-2">Launch & Scale</h3>
              <p className="text-muted">Rigorous testing across all devices. Once live, the site acts as the foundation for aggressive Local SEO and ad campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialSlider />

      <section id="contact" className="section-padding bg-light">
        <div className="container max-w-5xl mx-auto">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Ready for a Premium Clinic Website?</h2>
              <p className="text-muted text-lg mb-6">Your competitors are investing in their digital presence. Don't be left behind in the map rankings because of an outdated 5-year-old template site.</p>
              <ul className="flex-col gap-4">
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Free Competitor Site Analysis</li>
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Actionable Wireframe Proposal</li>
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Dedicated UK Account Manager</li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
