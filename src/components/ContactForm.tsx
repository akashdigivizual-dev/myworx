import React, { useState } from 'react';
import { type ContactFormData, FormStatus } from '../types';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    message: ''
  });

  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    setSuccessMessage(null);

    try {
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccessMessage(`Thanks ${formData.firstName}! We've received your inquiry and will get back to you soon.`);
      setStatus(FormStatus.SUCCESS);
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({ firstName: '', email: '', companyName: '', phoneNumber: '', message: '' });
        setStatus(FormStatus.IDLE);
      }, 3000);
    } catch (error) {
      console.error(error);
      setStatus(FormStatus.ERROR);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden border border-gray-100">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-orange-500 to-orange-600"></div>

      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-3">Contact Us</h2>
        <p className="text-gray-600 text-base">
          Get in touch with us. We combine creative design with innovative technology to build your vision.
        </p>
      </div>

      {status === FormStatus.SUCCESS ? (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="text-green-600 w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
          <p className="text-gray-600 mb-6 max-w-sm mx-auto">
            {successMessage}
          </p>
          <button 
            onClick={() => {
              setStatus(FormStatus.IDLE);
              setSuccessMessage(null);
            }}
            className="mt-4 text-primary font-semibold hover:text-orange-600 underline underline-offset-4"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-gray-50 focus:bg-white outline-none"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-gray-50 focus:bg-white outline-none"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="companyName" className="block text-sm font-semibold text-gray-700 mb-2">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-gray-50 focus:bg-white outline-none"
                placeholder="Your Company"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-gray-50 focus:bg-white outline-none"
                placeholder="+91 9773593037"
              />
            </div>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-gray-50 focus:bg-white outline-none resize-none"
              placeholder="Tell us about your project or inquiry..."
            />
          </div>

          <button
            type="submit"
            disabled={status === FormStatus.SUBMITTING}
            className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none uppercase tracking-widest text-sm"
          >
            {status === FormStatus.SUBMITTING ? (
              <>
                <Loader2 className="animate-spin" size={18} /> Sending...
              </>
            ) : (
              <>
                Submit Message <Send size={18} />
              </>
            )}
          </button>
          
          {status === FormStatus.ERROR && (
            <div className="text-red-500 text-sm flex items-center justify-center gap-2 mt-4 bg-red-50 p-3 rounded-lg">
              <AlertCircle size={16} /> Something went wrong. Please try again.
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
