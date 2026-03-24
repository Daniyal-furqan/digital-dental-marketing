import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { Video, Camera, Scissors, CheckCircle } from 'lucide-react';

export const metadata = {
  title: 'Dental Video Editing & Production UK',
  description: 'Professional video editing for dental clinics. We create high-converting patient testimonials, clinic tours, and social media reels that build trust instantly.',
};

export default function VideoEditingService() {
  return (
    <>
      <HeroSection 
        title="Video Editing That Builds Direct Patient Trust"
        subtitle="In dentistry, trust is everything. Our video production and editing team creates compelling clinic tours, doctor introductions, and patient testimonials that convert hesitant website visitors into booked patients."
        primaryCtaText="See Video Packages"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Why Healthcare Video is Non-Negotiable</h2>
              <p className="text-muted text-lg mb-4">
                Dental phobia affects over 36% of the population. Before a patient ever calls your clinic, they want to know: Is the clinic clean? Does the dentist look friendly? Did other patients have a painless experience?
              </p>
              <p className="text-muted text-lg mb-4">
                High-quality video is the only medium that can answer all these questions emotionally within 60 seconds. A beautifully edited testimonial video can increase your landing page conversion rate by over 80%.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">What We Edit For Dentists</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Camera className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Clinic Tours & Meet The Team</h4>
                    <p className="text-muted text-sm">Showcasing your state-of-the-art equipment and welcoming staff to alleviate patient anxiety.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Video className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Patient Testimonials</h4>
                    <p className="text-muted text-sm">Crisp, emotional edits of real patients discussing their life-changing Smile Makeover or Implant success.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Scissors className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Social Media Reels / TikToks</h4>
                    <p className="text-muted text-sm">Short-form, engaging, and fast-paced edits designed to go viral locally and build massive brand awareness.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Have raw footage you need professionally polished?"
        buttonText="Get An Editing Quote"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Elevate Your Dental Brand</h2>
            <p className="text-muted text-lg mb-6">We don't just 'cut' videos. We understand dental marketing narrative. We know exactly which soundbites will trigger a patient to book.</p>
            <ul className="flex-col gap-4">
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Advanced Color Correction</li>
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Dynamic Captions and B-Roll Integration</li>
                <li className="flex gap-2 items-center"><CheckCircle className="text-secondary" /> Audio Cleaning for Clinical Environments</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
