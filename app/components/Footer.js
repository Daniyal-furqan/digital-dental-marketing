import Link from 'next/link';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-primary">
      <div className="container footer-top grid grid-cols-4 gap-8">
        {/* Brand & Mission */}
        <div className="footer-brand flex-col gap-4">
          <Link href="/" className="logo">
            <span className="logo-text text-surface">Digital<span className="logo-accent">Dental</span>Marketing</span>
          </Link>
          <p className="footer-desc text-muted-light">
            Empowering dentists, orthodontists, and dental consultants across the UK with high-converting, premium digital marketing solutions that drive actual booked appointments.
          </p>
          <Link href="/contact-us" className="btn btn-primary footer-cta-btn">
            Get Your Free Audit
          </Link>
        </div>

        {/* Quick Links */}
        <div className="footer-links flex-col gap-4">
          <h4 className="footer-title">Quick Links</h4>
          <ul className="flex-col gap-2">
            <li><Link href="/" className="footer-link">Home</Link></li>
            <li><Link href="/about-us" className="footer-link">About Us</Link></li>
            <li><Link href="/services" className="footer-link">Services</Link></li>
            <li><Link href="/industries" className="footer-link">Industries</Link></li>
            <li><Link href="/contact-us" className="footer-link">Contact Us</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-links flex-col gap-4">
          <h4 className="footer-title">Top Services</h4>
          <ul className="flex-col gap-2">
            <li><Link href="/services/website-development" className="footer-link">Dental Website Dev</Link></li>
            <li><Link href="/services/seo" className="footer-link">Dental SEO</Link></li>
            <li><Link href="/services/local-seo" className="footer-link">Local SEO for UK Clinics</Link></li>
            <li><Link href="/services/content-writing" className="footer-link">Medical Content</Link></li>
            <li><Link href="/services/digital-marketing" className="footer-link">Full Agency Marketing</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="footer-contact flex-col gap-4">
          <h4 className="footer-title">Get in Touch</h4>
          <ul className="flex-col gap-4">
            <li>
              <a href="tel:+447414667968" className="contact-item flex items-center gap-3">
                <Phone size={20} className="text-secondary" />
                <span>+44 7414 667968</span>
              </a>
            </li>
            <li>
              <a href="mailto:info@digitaldentalmarketing.co.uk" className="contact-item flex items-center gap-3">
                <Mail size={20} className="text-secondary" />
                <span>info@digitaldentalmarketing.co.uk</span>
              </a>
            </li>
            <li>
              <a href="https://wa.me/447414667968" target="_blank" rel="noopener noreferrer" className="contact-item flex items-center gap-3 whatsapp-link">
                <MessageCircle size={20} />
                <span>Message on WhatsApp</span>
              </a>
            </li>
            <li>
              <div className="contact-item flex items-center gap-3">
                <MapPin size={24} className="text-secondary" />
                <span>UK Based Marketing Experts</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container flex justify-between items-center footer-bottom-inner">
          <p className="copyright text-muted-light">
            &copy; {new Date().getFullYear()} Digital Dental Marketing. All rights reserved. Target UK Market.
          </p>
          <div className="legal-links flex gap-4">
            <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="footer-link">Terms and Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
