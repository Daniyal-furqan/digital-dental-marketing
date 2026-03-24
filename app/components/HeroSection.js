import Link from 'next/link';
import { Star, ArrowRight, Activity, TrendingUp, Users } from 'lucide-react';
import './HeroSection.css';

export default function HeroSection({
  title,
  subtitle,
  primaryCtaText,
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaLink,
}) {
  return (
    <section className="hero-section bg-surface">
      <div className="container">
        <div className="hero-grid grid grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="hero-content animate-fade-in-up">
            <span className="tag mb-6">#1 Dental Marketing Agency in the UK</span>
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle text-muted text-lg mb-8 max-w-lg">{subtitle}</p>
            
            <div className="hero-actions flex gap-4 mb-10">
              {primaryCtaText && primaryCtaLink && (
                <Link href={primaryCtaLink} className="btn btn-primary">
                  {primaryCtaText} <ArrowRight size={18} />
                </Link>
              )}
              {secondaryCtaText && secondaryCtaLink && (
                <Link href={secondaryCtaLink} className="btn btn-secondary">
                  {secondaryCtaText}
                </Link>
              )}
            </div>

            <div className="trust-signals flex items-center gap-4">
              <div className="avatars flex -space-x-3">
                <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=Felix`} alt="User 1" className="avatar rounded-full border-2 border-white w-10 h-10 bg-white" />
                <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=Aneka`} alt="User 2" className="avatar rounded-full border-2 border-white w-10 h-10 bg-white" />
                <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=Jude`} alt="User 3" className="avatar rounded-full border-2 border-white w-10 h-10 bg-white" />
                <div className="empty-avatar rounded-full border-2 border-white w-10 h-10 bg-light-blue flex items-center justify-center text-xs font-bold text-secondary">+5k</div>
              </div>
              <div className="flex flex-col">
                <div className="stars flex text-yellow-500 text-sm">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <span className="text-xs font-semibold text-text-main">Trusted by 500+ UK Clinics</span>
              </div>
            </div>
          </div>

          {/* Right Visual / Graphic */}
          <div className="hero-visual animate-float relative hidden md:flex justify-center items-center">
            {/* Abstract UI Elements to simulate a dashboard/growth chart */}
            <div className="glass-card main-card w-full max-w-sm p-6 rounded-2xl bg-white shadow-xl relative z-20 border border-border">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h4 className="font-bold text-primary text-sm">Monthly Patient Leads</h4>
                  <p className="text-xs text-muted">+145% vs last month</p>
                </div>
                <div className="bg-accent-light text-accent p-2 rounded-lg">
                  <TrendingUp size={20} />
                </div>
              </div>
              
              <div className="chart-bars flex items-end gap-2 h-32 mb-4">
                <div className="bar bg-surface-hover w-full rounded-t-md" style={{ height: '30%' }}></div>
                <div className="bar bg-surface-hover w-full rounded-t-md" style={{ height: '50%' }}></div>
                <div className="bar bg-surface-hover w-full rounded-t-md" style={{ height: '40%' }}></div>
                <div className="bar bg-surface-hover w-full rounded-t-md" style={{ height: '70%' }}></div>
                <div className="bar bg-secondary w-full rounded-t-md" style={{ height: '100%' }}></div>
              </div>
              
              <div className="flex justify-between text-xs font-semibold text-primary">
                <span>Total MQLs: 412</span>
                <span className="text-accent">+89 booking requests</span>
              </div>
            </div>

            {/* Floating smaller cards */}
            <div className="glass-card float-card-1 absolute -left-10 top-10 p-4 rounded-xl bg-white shadow-lg z-30 border border-border flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
               <div className="bg-blue-100 text-secondary p-2 rounded-full">
                  <Activity size={18} />
               </div>
               <div>
                 <p className="text-xs font-bold text-primary">SEO Traffic</p>
                 <p className="text-sm font-black">+24,050</p>
               </div>
            </div>

            <div className="glass-card float-card-2 absolute -right-8 bottom-10 p-4 rounded-xl bg-white shadow-lg z-30 border border-border flex items-center gap-3 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
               <div className="bg-green-100 text-accent p-2 rounded-full">
                  <Users size={18} />
               </div>
               <div>
                 <p className="text-xs font-bold text-primary">New Cases</p>
                 <p className="text-sm font-black">45 Seats Booked</p>
               </div>
            </div>
            
            {/* Background decorative blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-50 rounded-full blur-3xl z-10 opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
