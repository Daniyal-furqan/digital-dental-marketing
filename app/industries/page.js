import HeroSection from '../components/HeroSection';
import CTAStrip from '../components/CTAStrip';
import FeatureCard from '../components/FeatureCard';
import { 
  Smile, Activity, ShieldPlus, Stethoscope, Briefcase, 
  Award, HeartPulse, Building, Gem, Network 
} from 'lucide-react';

export const metadata = {
  title: 'Dental Industries We Serve',
  description: 'Specialized digital marketing strategies for UK Dentists, Orthodontists, Endodontists, DSOs, and Dental Consultants. We understand your unique specialty.',
};

export default function IndustriesHub() {
  return (
    <>
      <HeroSection 
        title="Marketing Engineered For Your Specific Dental Niche"
        subtitle="A general dentist needs volume. An implantologist needs high-intent case acceptance. A DSO needs scalable acquisition frameworks. We build tailored growth campaigns for exactly who you are."
        primaryCtaText="See How We Can Help Your Niche"
        primaryCtaLink="#niches"
        bgClass="hero-default-bg"
      />

      <section id="niches" className="section-padding bg-light">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Who We Serve In The UK</h2>
            <p className="text-muted text-lg max-w-3xl mx-auto">
              Our data points, SEO structures, and conversion copy are heavily specialized for these 10 core health-care sectors. Select your specialty to see how our targeted strategies operate.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            <FeatureCard 
              icon={Smile} title="General Dentists" linkHref="/industries/dentists"
              description="Drive consistent new patient examinations, check-ups, and hygiene appointments to maintain a full, healthy clinic schedule year-round."
            />
            <FeatureCard 
              icon={Activity} title="Orthodontists" linkHref="/industries/orthodontists"
              description="Capture high-ticket clear aligner and traditional brace cases. Establish your authority as the leading smile correction specialist in your region."
            />
            <FeatureCard 
              icon={ShieldPlus} title="Oral Surgeons" linkHref="/industries/oral-surgeons"
              description="Target patients actively searching for wisdom teeth extractions, complex maxillofacial procedures, and emergency surgical interventions."
            />
            <FeatureCard 
              icon={Gem} title="Prosthodontists" linkHref="/industries/prosthodontists"
              description="Attract high-intent 'All-on-4', full mouth reconstruction, and dental implant patients willing to invest in premium restorative care."
            />
            <FeatureCard 
              icon={HeartPulse} title="Endodontists" linkHref="/industries/endodontists"
              description="Ensure rapid visibility for patients searching for root canals or emergency microscopic endodontics when they are in pain and need immediate relief."
            />
            <FeatureCard 
              icon={Stethoscope} title="Periodontists" linkHref="/industries/periodontists"
              description="Educate and attract patients needing complex gum disease treatments, soft tissue grafts, and foundational implant placements."
            />
            <FeatureCard 
              icon={Award} title="Pediatric Dentists" linkHref="/industries/pediatric-dentists"
              description="Connect with local parents looking for safe, comfortable, and highly reviewed dental care for their children's developing smiles."
            />
            <FeatureCard 
              icon={Network} title="Dental Consultants" linkHref="/industries/dental-consultants"
              description="Position yourself as the premier voice in practice management. Marketing systems designed to acquire high-tier clinic owners as clients."
            />
            <FeatureCard 
              icon={Building} title="DSOs & Groups" linkHref="/industries/dsos-groups"
              description="Scalable enterprise SEO and localized acquisition campaigns designed to effortlessly handle multi-location dental operations across the UK."
            />
            <FeatureCard 
              icon={Briefcase} title="Dental Marketing Agencies" linkHref="/industries/dental-marketing-agencies"
              description="White-label our premium technical execution. Partner with us for robust back-end SEO, Ads, and Web Dev support for your own dental clients."
            />
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Don't see your specific medical niche?" 
        subtitle="Contact us to discuss custom digital marketing for your unique healthcare practice."
        buttonText="Contact Our Team"
      />
    </>
  );
}
