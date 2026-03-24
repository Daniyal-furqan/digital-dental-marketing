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
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Services', href: '/services' },
    { name: 'Industries', href: '/industries' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link href="/" className="logo">
          <span className="logo-text">Digital<span className="logo-accent">Dental</span>Marketing</span>
        </Link>
        
        {/* Desktop Nav */}
        <nav className="desktop-nav gap-6">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="nav-link">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="desktop-cta gap-4">
          <a href="tel:+447414667968" className="phone-cta flex items-center gap-2">
            <Phone size={18} />
            <span>+44 7414 667968</span>
          </a>
          <Link href="/contact-us" className="btn btn-primary">
            Get a Proposal
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="mobile-nav-overlay animate-fade-in">
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
            <div className="mobile-cta flex-col gap-4">
              <a href="tel:+447414667968" className="btn btn-outline flex items-center justify-center gap-2">
                <Phone size={18} />
                +44 7414 667968
              </a>
              <Link 
                href="/contact-us" 
                className="btn btn-primary text-center"
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
