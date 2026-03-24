import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Digital Dental Marketing to scale your UK dental practice. Book a free consultation today to get started with high-converting digital strategies.',
};

export default function ContactUs() {
  return (
    <>
      <section className="section-padding bg-primary text-surface mt-[70px]">
        <div className="container text-center">
          <h1 className="text-5xl font-bold mb-6 text-surface">Let's Grow Your Practice</h1>
          <p className="text-xl max-w-2xl mx-auto text-muted-light">
            Ready to stop losing patients to local competitors? Reach out today for a complimentary website audit and marketing strategy session. No obligations.
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container">
          <div className="grid grid-cols-2 gap-12 items-start">
            
            {/* Contact Information Side */}
            <div className="contact-info flex-col gap-8">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Get In Touch Directly</h2>
                <p className="text-muted text-lg">
                  Expect a response within 24 hours. Our UK-based team of dental marketing experts is ready to analyze your local market and provide actionable growth steps immediately.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <a href="tel:+447414667968" className="card flex items-center gap-4 hover:border-secondary transition-all">
                  <div className="p-4 bg-light rounded-full text-secondary">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">Call Us</h4>
                    <p className="text-muted text-xl">+44 7414 667968</p>
                  </div>
                </a>

                <a href="mailto:info@digitaldentalmarketing.co.uk" className="card flex items-center gap-4 hover:border-secondary transition-all">
                  <div className="p-4 bg-light rounded-full text-secondary">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">Email Us</h4>
                    <p className="text-muted text-lg">info@digitaldentalmarketing.co.uk</p>
                  </div>
                </a>

                <a href="https://wa.me/447414667968" target="_blank" rel="noopener noreferrer" className="card flex items-center gap-4 hover:border-[#25D366] transition-all">
                  <div className="p-4 bg-light rounded-full" style={{ color: '#25D366' }}>
                    <MessageCircle size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">WhatsApp Us</h4>
                    <p className="text-muted text-lg">Fast response for quick inquiries</p>
                  </div>
                </a>

                <div className="card flex items-center gap-4">
                  <div className="p-4 bg-light rounded-full text-secondary">
                    <MapPin size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary">Headquarters</h4>
                    <p className="text-muted text-lg">United Kingdom</p>
                    <p className="text-sm text-muted">Serving Dentists Nationwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="form-side sticky top-24">
              <ContactForm />
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
