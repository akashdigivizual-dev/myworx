import React from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const locations = [
    {
      name: 'Sector 1, Noida',
      address: 'B-8, Sector-1, Next to Sector-15 Metro Station, Noida',
      phone: '+91 977-359-3037',
      email: 'contact@myworx.in',
      hours: '09:00 AM - 07:00 PM'
    },
    {
      name: 'Sector 2, Noida',
      address: 'A-67, Sector-2, Noida, UP-201301',
      phone: '+91 977-359-3037',
      email: 'contact@myworx.in',
      hours: '09:00 AM - 07:00 PM'
    },
    {
      name: 'Sector 4, Noida',
      address: 'A-57, Sector-4, Noida, UP-201301',
      phone: '+91 977-359-3037',
      email: 'contact@myworx.in',
      hours: '09:00 AM - 07:00 PM'
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero 
        title="Get In Touch" 
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={
          <>
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>&gt;</span>
            <span className="text-primary">Contact</span>
          </>
        }
      />

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {locations.map((location, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{location.name}</h3>
                
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex gap-3">
                    <MapPin size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <p>{location.address}</p>
                  </div>
                  
                  <div className="flex gap-3">
                    <Phone size={20} className="text-primary flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="hover:text-primary transition-colors">
                      {location.phone}
                    </a>
                  </div>
                  
                  <div className="flex gap-3">
                    <Mail size={20} className="text-primary flex-shrink-0" />
                    <a href={`mailto:${location.email}`} className="hover:text-primary transition-colors">
                      {location.email}
                    </a>
                  </div>
                  
                  <div className="flex gap-3">
                    <Clock size={20} className="text-primary flex-shrink-0" />
                    <p>{location.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <ContactForm />
            </div>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Embed - Myworx Sector-2 Location */}
              <div className="w-full h-96 bg-gray-200 rounded-xl overflow-hidden border border-gray-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.834850345627!2d77.30669087352173!3d28.587992692358456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5f1e21fb32f%3A0xc36cbb74fabdc1b0!2sMyworx%20-%20Best%20Coworking%20Space%20in%20Noida%20(Sector%202)%20near%20Sector%2015%20Metro%20Station!5e0!3m2!1sen!2sin!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              {/* FAQ or Additional Information */}
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Quick Response Time</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We typically respond to inquiries within 24 hours. For urgent matters, please call us directly at 
                  <a href="tel:+919773593037" className="font-semibold text-primary ml-1">+91 9773593037</a>
                </p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3">Business Hours</h3>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li><strong>Monday - Saturday:</strong> 09:00 AM - 07:00 PM</li>
                  <li><strong>Sunday:</strong> Closed</li>
                  <li><strong>Public Holidays:</strong> Closed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-orange-600 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Workspace?</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied professionals and businesses at Myworx. Schedule a tour today!
          </p>
          <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 uppercase tracking-widest text-sm">
            Book a Tour Now
          </button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
