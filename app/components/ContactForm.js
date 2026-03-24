"use client";
import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });
  
  const [status, setStatus] = useState({ submitting: false, success: false, error: null });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: null });
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (!res.ok) throw new Error('Submission failed');
      
      setStatus({ submitting: false, success: true, error: null });
      setFormData({ name: '', email: '', phone: '', businessType: '', message: '' });
    } catch (error) {
      setStatus({ submitting: false, success: false, error: error.message || 'Something went wrong. Please try again or email us directly.' });
    }
  };

  return (
    <div className="contact-form-wrapper">
      <h3 className="form-title">Get Your Free Strategy Session</h3>
      <p className="form-subtitle">Grow your UK dental practice starting today.</p>
      
      {status.success && (
        <div className="alert success-alert">
          Thank you! We have received your details and will be in touch shortly.
        </div>
      )}
      
      {status.error && (
        <div className="alert error-alert">
          {status.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group grid grid-cols-2 gap-4">
          <div className="input-group">
            <label htmlFor="name">Full Name *</label>
            <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} placeholder="Dr. John Smith" />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email Address *</label>
            <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} placeholder="info@clinic.co.uk" />
          </div>
        </div>

        <div className="form-group grid grid-cols-2 gap-4">
          <div className="input-group">
            <label htmlFor="phone">Phone Number *</label>
            <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} placeholder="+44 7123 456789" />
          </div>
          <div className="input-group">
            <label htmlFor="businessType">Business Type *</label>
            <select id="businessType" name="businessType" required value={formData.businessType} onChange={handleChange}>
              <option value="" disabled>Select Practice Type</option>
              <option value="Dentist">General Dentist</option>
              <option value="Orthodontist">Orthodontist</option>
              <option value="Specialist">Other Specialist</option>
              <option value="DSO">DSO / Group Practice</option>
              <option value="Consultant">Dental Consultant</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="message">How can we help you grow? *</label>
          <textarea id="message" name="message" rows="4" required value={formData.message} onChange={handleChange} placeholder="I want more Invisalign patients..."></textarea>
        </div>

        <button type="submit" className="btn btn-primary submit-btn" disabled={status.submitting}>
          {status.submitting ? 'Sending...' : 'Request My Free Audit'}
        </button>
        <p className="privacy-note text-muted text-center" style={{ fontSize: '0.85rem', marginTop: '1rem' }}>
          By submitting this form, you agree to our <a href="/privacy-policy" style={{ textDecoration: 'underline' }}>Privacy Policy</a>.
        </p>
      </form>
    </div>
  );
}
