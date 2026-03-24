import HeroSection from '../components/HeroSection';
import CTAStrip from '../components/CTAStrip';
import { Target, Heart, Shield, Award, Users, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Digital Dental Marketing, the leading UK agency dedicated exclusively to growing dental practices through expert SEO and digital strategies.',
};

export default function AboutUs() {
  return (
    <>
      <HeroSection 
        title="Our Mission: Growing UK Dental Practices"
        subtitle="We are not a generalist marketing firm. We are a specialized team of digital growth experts dedicated 100% to the success of dentists, orthodontists, and dental groups across the United Kingdom."
        primaryCtaText="Book a Consultation"
        primaryCtaLink="/contact-us"
      />

      <section className="section-padding bg-surface">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div className="about-content">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Brand Story</h2>
              <p className="text-muted text-lg mb-4">
                Digital Dental Marketing was founded on a simple realization: the dental industry in the UK is highly competitive, yet most clinics struggle with outdated websites, poor SEO, and wasted marketing budgets on generic agencies.
              </p>
              <p className="text-muted text-lg mb-4">
                Generalist marketing agencies do not understand the intricate difference between marketing for a routine check-up versus high-value treatments like Invisalign or All-on-4 implants. We saw dentists losing thousands of pounds to agencies that couldn't speak the language of dentistry.
              </p>
              <p className="text-muted text-lg font-semibold">
                That's why we built an agency solely dedicated to one industry: Yours.
              </p>
            </div>
            <div className="about-image bg-light rounded-xl overflow-hidden h-full min-h-[400px] flex items-center justify-center border">
              <span className="text-muted italic">[ Premium Dental Office Team Placeholder Image ]</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Why We Only Focus on Dental Marketing</h2>
            <p className="text-muted max-w-2xl mx-auto text-lg">Focus breeds mastery. By dedicating our entire agency to the dental sector, we have developed proprietary systems that generate predictable patient flow.</p>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="card text-center items-center">
              <Target size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Laser-Targeted Strategies</h3>
              <p className="text-muted">We know exactly what patients are searching for when they need dental care in the UK. No guesswork, just proven data.</p>
            </div>
            <div className="card text-center items-center">
              <Shield size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">GDC Compliance</h3>
              <p className="text-muted">We understand the strict advertising codes and GDC guidelines. Your marketing will always be ethical, compliant, and highly effective.</p>
            </div>
            <div className="card text-center items-center">
              <TrendingUp size={48} className="text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">High-Value Case Focus</h3>
              <p className="text-muted">We engineer campaigns specifically geared toward attracting lucrative cosmetic and restorative dental patients.</p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Stop guessing with your clinic's growth." 
        subtitle="Partner with the agency that already knows what works."
        buttonText="Get a Strategy Session"
      />

      <section className="section-padding bg-surface">
        <div className="container">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex gap-4 items-start">
              <Heart size={36} className="text-secondary shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">Patient-First Philosophy</h4>
                <p className="text-muted">Good marketing isn't just about selling; it's about connecting patients in pain or in need of aesthetic care with the best local professionals.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Award size={36} className="text-secondary shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">Results Over Promises</h4>
                <p className="text-muted">We don't lock clients into long-term contracts built on empty promises. We let our month-over-month ROI and increased bookings speak for themselves.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <Users size={36} className="text-secondary shrink-0" />
              <div>
                <h4 className="text-xl font-bold mb-2">True Partnership</h4>
                <p className="text-muted">When you hire us, we act as an extension of your practice. We collaborate closely with your front desk to ensure leads actually turn into seated patients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
