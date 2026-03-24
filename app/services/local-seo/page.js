import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { MapPin, Navigation, Star, PhoneForwarded } from 'lucide-react';

export const metadata = {
  title: 'Local SEO for UK Dentists',
  description: 'Dominate the Google Map Pack in your specific city. We drive massive local call volume for UK dental practices through targeted Google Business Profile optimization.',
};

export default function LocalSEOService() {
  return (
    <>
      <HeroSection 
        title="Dominate The Google Map Pack"
        subtitle="When someone types 'Dentist near me' into their phone, 80% of them book with one of the top 3 clinics on the Google Map. If you are not in the top 3, you are losing patients daily."
        primaryCtaText="Get Your Free Local SEO Audit"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">Local SEO is The Ultimate Growth Lever</h2>
              <p className="text-muted text-lg mb-4">
                You do not need to rank #1 across the entire UK. You only need to rank #1 in a 5-mile radius around your clinic. That is where local SEO changes the game.
              </p>
              <p className="text-muted text-lg mb-4">
                We optimize your Google Business Profile (GBP), build localized citations, and implement Hyper-Local schema on your site so Google views your clinic as the undeniable authority in your specific postcode.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">The Local SEO Impact</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Navigation className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Map Pack Supremacy</h4>
                    <p className="text-muted text-sm">Securing one of the 3 coveted map slots that display natively at the top of Google search results.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Star className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Review Generation Systems</h4>
                    <p className="text-muted text-sm">Automated processes to legally and ethically farm 5-star reviews from satisfied patients.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <PhoneForwarded className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Direct Call Volume</h4>
                    <p className="text-muted text-sm">The majority of Map Pack clicks result in immediate phone calls to your front desk. We track every one.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Check your local rankings instantly."
        buttonText="Get a Local Rank Report"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Capture Local Demand</h2>
            <p className="text-muted text-lg mb-6">Local SEO is a zero-sum game. Only three clinics fit in the map pack. We will engineer your profile to ensure you are one of them.</p>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
