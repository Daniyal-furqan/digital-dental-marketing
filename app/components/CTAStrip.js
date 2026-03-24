import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import './CTAStrip.css';

export default function CTAStrip({ 
  title = "Ready to Get More Dental Leads?",
  subtitle = "Contact us today for a free evaluation and strategy session.",
  buttonText = "Speak with an Expert",
  buttonLink = "/contact-us"
}) {
  return (
    <section className="cta-strip section-padding">
      <div className="container cta-strip-container flex justify-between items-center gap-6">
        <div className="cta-strip-content">
          <h2 className="cta-title">{title}</h2>
          <p className="cta-subtitle">{subtitle}</p>
        </div>
        <div className="cta-strip-action">
          <Link href={buttonLink} className="btn cta-btn">
            {buttonText} <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}
