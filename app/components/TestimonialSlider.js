"use client";
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import './TestimonialSlider.css';

const MOCK_TESTIMONIALS = [
  {
    id: 1,
    quote: "Digital Dental Marketing completely transformed our orthodontic practice. Within 3 months of their local SEO strategies, we saw a 140% increase in Invisalign consultations.",
    author: "Dr. Sarah Jenkins",
    role: "Lead Orthodontist, BrightSmiles UK",
    rating: 5
  },
  {
    id: 2,
    quote: "We were struggling to get our new clinic noticed in London. Their web development and targeted ads brought us to full capacity faster than we ever expected.",
    author: "Dr. Michael Davies",
    role: "Founder, London Dental Excellence",
    rating: 5
  },
  {
    id: 3,
    quote: "As a DSO managing 15 practices, finding an agency that understands the nuances of the dental market was critical. These guys are the real deal.",
    author: "James Harrison",
    role: "Operations Director, Premier Dental Group",
    rating: 5
  }
];

export default function TestimonialSlider({ testimonials = MOCK_TESTIMONIALS }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section section-padding bg-light">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Success Stories Across the UK</h2>
          <p className="section-subtitle text-muted">Don't just take our word for it. See the results we've delivered.</p>
        </div>

        <div className="testimonial-slider">
          <button onClick={prevSlide} className="slider-btn prev-btn" aria-label="Previous Testimonial">
            <ChevronLeft size={24} />
          </button>
          
          <div className="testimonial-card">
            <Quote size={48} className="quote-icon text-secondary" />
            <div className="stars">
              {"★".repeat(testimonials[currentIndex].rating)}
            </div>
            <p className="testimonial-quote">"{testimonials[currentIndex].quote}"</p>
            <div className="testimonial-author">
              <h4 className="author-name">{testimonials[currentIndex].author}</h4>
              <p className="author-role text-muted">{testimonials[currentIndex].role}</p>
            </div>
          </div>

          <button onClick={nextSlide} className="slider-btn next-btn" aria-label="Next Testimonial">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="slider-dots flex justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
