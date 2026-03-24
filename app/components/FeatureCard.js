export default function FeatureCard({ icon: Icon, title, description, linkText = "Learn More", linkHref }) {
  return (
    <div className="card feature-card">
      {Icon && (
        <div className="feature-icon-wrapper">
          <Icon size={32} className="feature-icon text-secondary" />
        </div>
      )}
      <h3 className="feature-title">{title}</h3>
      <p className="feature-desc text-muted">{description}</p>
      {linkHref && (
        <div className="feature-link-wrapper mt-auto pt-4">
          <a href={linkHref} className="text-accent font-semibold flex flex-row items-center gap-2 hover:translate-x-1 transition-transform">
            {linkText} &rarr;
          </a>
        </div>
      )}
    </div>
  );
}
