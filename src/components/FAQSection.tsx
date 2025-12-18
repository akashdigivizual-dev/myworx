import React from 'react';
import { ExternalLink } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'Can I choose how many people work out my chosen workspace?',
    answer: 'The coworking space you choose at MyWorx—one of the best coworking space in Noida—comes with a fixed price and a set number of memberships. For example, if you select a small private office for up to four people, four team members can comfortably work in that space. Need additional room or memberships? Our team will gladly guide you to the best solution for your business needs.'
  },
  {
    question: 'Would I have to pay any additional charges?',
    answer: 'No, all our charges are inclusive of taxes — you just need to make a one-time payment, and that\'s it. At MyWorx, one of the best coworking space in Noida, we maintain complete transparency at every stage of the process. If you request any customization, applicable charges will be clearly communicated in advance.'
  },
  {
    question: 'How do I make an appointment for visit?',
    answer: 'Simply click on the \'BOOK A VISIT\' button, fill in your details, and our team at MyWorx, one of the best coworking space in Noida, will assist you with the next steps. You can also reach us directly at 977-359-3034 for quick support and personalized guidance.'
  },
  {
    question: 'Do you provide customization options?',
    answer: 'Yes, all our coworking spaces at MyWorx—recognized among the best coworking space in Noida—offer customization options to match your unique business needs. Depending on your requirements, customization charges will be applied accordingly. Get in touch with our team to create a workspace tailored just for you!'
  },
  {
    question: 'Do you offer free trials?',
    answer: 'We do not offer free trials, but you\'re always welcome to visit MyWorx, one of the best coworking space in Noida, and take a guided tour of our premises. Experience the workspace firsthand before making your decision!'
  }
];

const FAQSection: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(0);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Become a Member of Myworx Coworking Community.</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            At <strong>MyWorx</strong>, we take pride in offering one of the <strong>best coworking space in Noida</strong>, thoughtfully designed to meet the diverse needs of modern professionals. Our workspace provides a vibrant and collaborative environment for startups, freelancers, entrepreneurs, and small business owners to grow and thrive. Every corner is designed to inspire creativity, encourage meaningful connections, and enhance productivity.
          </p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
              >
                <h3 className="text-left font-semibold text-gray-900 text-lg">{faq.question}</h3>
                <span className="text-primary text-2xl font-bold ml-4">
                  {expandedIndex === index ? '−' : '+'}
                </span>
              </button>
              
              {expandedIndex === index && (
                <div className="px-6 py-4 bg-white border-t border-gray-200">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
