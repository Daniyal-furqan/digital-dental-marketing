import Link from 'next/link';
import './HeroSection.css';

export default function HeroSection({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
  bgClass = 'hero-default-bg'
}) {
  return (
    <section className={`hero-section ${bgClass}`}>
      <div className="container hero-container">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">{title}</h1>
          <p className="hero-subtitle">{subtitle}</p>
          <div className="hero-actions flex gap-4">
            {primaryCtaText && primaryCtaLink && (
              <Link href={primaryCtaLink} className="btn btn-primary hero-btn">
                {primaryCtaText}
              </Link>
            )}
            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink} className="btn btn-secondary hero-btn">
                {secondaryCtaText}
              </Link>
            )}
          </div>
          <div className="trust-signals flex items-center gap-4">
            <div className="trust-stars">★★★★★</div>
            <span className="trust-text text-muted-light">Trusted by Clinics Across the UK</span>
          </div>
        </div>
      </div>
    </section>
  );
}
