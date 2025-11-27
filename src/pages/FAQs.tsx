import React from 'react';
import Hero from '../components/Hero';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What is Myworx?",
    answer: "Myworx is a premium coworking space provider in Noida offering flexible workspace solutions for startups, freelancers, and enterprises. We provide modern facilities, high-speed internet, professional ambiance, and a vibrant community to support your business growth."
  },
  {
    id: 2,
    question: "What are the membership options available?",
    answer: "We offer multiple membership plans including Day Pass (hourly/daily access), Private Cabin (dedicated workspace), and Shared Desk (flexible seating). Each plan is designed to suit different business needs and budgets with no long-term lock-in periods."
  },
  {
    id: 3,
    question: "Do you provide a free trial?",
    answer: "Yes! We offer complimentary trial sessions so you can experience our workspace and facilities firsthand. Contact us to schedule your free trial at any of our Noida locations."
  },
  {
    id: 4,
    question: "What facilities are included in the membership?",
    answer: "Your membership includes high-speed WiFi, ergonomic furniture, meeting rooms, parking (at select locations), complimentary tea/coffee, 24/7 security with CCTV, daily cleaning, and access to community events and networking sessions."
  },
  {
    id: 5,
    question: "What are your operating hours?",
    answer: "Our coworking spaces operate from 9:00 AM to 7:00 PM on weekdays and weekends. Premium members get 24/7 access with key card entry. Contact us for specific timings at your preferred location."
  },
  {
    id: 6,
    question: "Do you offer meeting room facilities?",
    answer: "Yes, all our locations feature fully equipped meeting rooms with video conferencing setup. Meeting rooms are available for members and can be booked through our portal or mobile app."
  },
  {
    id: 7,
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including credit/debit cards, bank transfers, and digital wallets (Google Pay, PhonePe, Paytm). Monthly, quarterly, and annual plans are available with flexible billing options."
  },
  {
    id: 8,
    question: "Is there parking available?",
    answer: "Yes, parking facilities are available at our Sector-2 and Sector-4 locations. Parking is complimentary for Private Cabin members and available at nominal charges for Day Pass and Shared Desk members."
  },
  {
    id: 9,
    question: "Can I upgrade or downgrade my membership?",
    answer: "Absolutely! You can upgrade or downgrade your membership plan anytime without any penalties. Changes take effect from the next billing cycle. Contact our support team for assistance."
  },
  {
    id: 10,
    question: "Do you have corporate packages?",
    answer: "Yes, we offer customized corporate packages for teams and enterprises. Contact our corporate sales team to discuss volume discounts, dedicated team spaces, and corporate event hosting options."
  }
];

const FAQs: React.FC = () => {
  const [expandedId, setExpandedId] = React.useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Hero 
        title="Frequently Asked Questions" 
        backgroundImage="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
        breadcrumbs={
          <>
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span>&gt;</span>
            <span className="text-primary">FAQs</span>
          </>
        }
      />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Have Questions?</h2>
            <p className="text-gray-600 text-lg">Find answers to common questions about our coworking spaces, memberships, and facilities.</p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div 
                key={faq.id} 
                className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 md:py-5 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors text-left focus:outline-none"
                >
                  <h3 className="text-base md:text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={24}
                    className={`flex-shrink-0 text-primary transition-transform duration-300 ${
                      expandedId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedId === faq.id && (
                  <div className="px-6 py-4 md:py-5 bg-gray-50 border-t border-gray-200">
                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-primary/10 rounded-xl border border-primary/20">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Didn't find your answer?</h3>
            <p className="text-gray-600 mb-6">Contact our support team and we'll be happy to help you.</p>
            <a 
              href="/contact"
              className="inline-block bg-primary text-white px-6 md:px-8 py-2 md:py-3 font-semibold rounded-sm hover:bg-orange-600 transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQs;
