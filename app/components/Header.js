"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import './Header.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'About Us', href: '/about-us' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link href="/" className="logo">
          <span className="logo-text text-primary">Digital<span className="text-secondary">Dental</span></span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav gap-8">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="nav-link font-medium">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="desktop-cta gap-5">
          <a href="tel:+447414667968" className="phone-cta flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors">
            <Phone size={16} />
            +44 7414 667968
          </a>
          <Link href="/contact-us" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>
            Get a Proposal
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay animate-fade-in-up">
          <nav className="mobile-nav flex-col">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                className="mobile-nav-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mobile-cta flex-col gap-4 mt-6">
              <a href="tel:+447414667968" className="btn btn-outline flex items-center justify-center gap-2">
                <Phone size={18} />
                +44 7414 667968
              </a>
              <Link 
                href="/contact-us" 
                className="btn btn-primary text-center w-full"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get a Proposal
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
