import HeroSection from '../../components/HeroSection';
import CTAStrip from '../../components/CTAStrip';
import ContactForm from '../../components/ContactForm';
import { Building, Map, Activity, BarChart } from 'lucide-react';

export const metadata = {
  title: 'Marketing For DSOs & Dental Groups UK | Enterprise SEO',
  description: 'Scalable enterprise digital marketing for Dental Service Organizations (DSOs) and multi-location groups in the UK. Unify your brand and dominate local search across all locations.',
};

export default function DSOsGroupsIndustry() {
  return (
    <>
      <HeroSection 
        title="Enterprise Marketing For Multi-Location UK Dental Groups"
        subtitle="Managing marketing for 10, 50, or 100+ clinics requires enterprise-level architecture. We provide highly scalable SEO, Ads, and Web Development frameworks for DSOs and Private Dental Groups."
        primaryCtaText="Contact Enterprise Team"
        primaryCtaLink="#contact"
        bgClass="hero-default-bg"
      />

      <section className="section-padding bg-light">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">The Multi-Location SEO Challenge</h2>
              <p className="text-muted text-lg mb-4">
                Dental Service Organizations (DSOs) often suffer from cannibalized SEO, fragmented brand identities, and chaotic local map listings. An enterprise approach is required to ensure every single clinic dominates its respective 5-mile radius without competing against sister clinics.
              </p>
              <p className="text-muted text-lg mb-4">
                We build centralized web infrastructure that allows for rapid deployment of new clinic locations, uniform brand control, and hyper-localized SEO architecture.
              </p>
            </div>
            <div className="bg-surface p-8 rounded-xl shadow-md border">
              <h3 className="text-2xl font-bold text-primary mb-4">Enterprise Growth Systems</h3>
              <ul className="flex-col gap-4">
                <li className="flex gap-3 items-start">
                  <Map className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Scalable Local Map SEO</h4>
                    <p className="text-muted text-sm">Systematic management of 50+ Google Business Profiles ensuring perfect NAP consistency across all UK directories.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <Building className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Centralized Web Architecture</h4>
                    <p className="text-muted text-sm">One powerful central domain utilizing intelligent sub-folder architecture (`/locations/london/`) to share massive domain authority.</p>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <BarChart className="text-secondary shrink-0 mt-1" /> 
                  <div>
                    <h4 className="font-bold text-primary">Advanced Patient Routing</h4>
                    <p className="text-muted text-sm">Dynamic geo-routing in Google Ads to ensure patients clicking 'dentist near me' are funneled exactly to the correct clinic location call center.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip 
        title="Do you have chaotic, disjointed marketing across your clinics?"
        buttonText="Consolidate Your Growth"
      />

      <section id="contact" className="section-padding bg-surface">
        <div className="container flex flex-col md:flex-row gap-12 items-center justify-center max-w-5xl mx-auto">
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-primary mb-6">Unify Your DSO Brand</h2>
            <p className="text-muted text-lg mb-6">Drive down patient acquisition costs through economies of scale. We provide the unified digital infrastructure that makes rapid clinic acquisition and integration seamless.</p>
          </div>
          <div className="w-full md:w-1/2">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
