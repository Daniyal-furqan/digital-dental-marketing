import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { Heart, Search, Video, Star } from 'lucide-react';

export const metadata = {
  title: 'Marketing For Pediatric Dentists UK',
  description: 'Attract local parents searching for a safe, trustworthy pediatric dentist in the UK. Specialized Local SEO and Social Media ad campaigns.',
};

export default function PediatricIndustry() {
  return (
    <>
      <HeroSection 
        title="Connect With Local Parents Searching For Care"
        subtitle="Pediatric dental marketing is all about earning a mother or father's trust before they ever walk through the door. We build emotional, reassurance-driven marketing campaigns that fill your schedules."
        primaryCtaText="Grow Your Pediatric Practice"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Marketing to Anxious Parents</h2>
              <p className="text-muted text-lg mb-4">
                Parents do not choose a pediatric dentist based solely on location. They choose based on perceived safety, friendliness, and the clinic environment. 
              </p>
              <p className="text-muted text-lg mb-4">
                Your online presence must radiate warmth. A sterile, clinical website will scare parents away. We build digital identities that utilize vibrant imagery, video walkthroughs, and overwhelming social proof to capture the family demographic.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">Pediatric Growth Systems</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Heart className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Emotional Web Design</h4>
                    <p className="text-muted text-sm">Bright, welcoming user experiences that showcase your play areas and gentle staff.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Star className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Review Dominance</h4>
                    <p className="text-muted text-sm">Parents trust other parents. We implement systems to hyper-accelerate your 5-star Google review generation.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Video className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Community Social Ads</h4>
                    <p className="text-muted text-sm">Targeted Facebook and Instagram campaigns running locally to mothers in your immediate postal code.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Are you securing the family demographic in your city?"
        buttonText="Get Your Free Marketing Audit"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Become the Go-To Clinic</h2>
            <p className="text-muted text-lg mb-6">Securing a pediatric patient often means securing a family of patients for the next 15 years. This is the highest lifetime-value demographic in dentistry.</p>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
