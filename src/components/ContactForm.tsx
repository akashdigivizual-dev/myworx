import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { type ContactFormData, FormStatus } from '../types';
import { Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_87femn6';
const EMAILJS_TEMPLATE_ID = 'template_9up01pi';
const EMAILJS_PUBLIC_KEY = '_DvdbQQ5tbj7Lh15A';

// main details

// const EMAILJS_SERVICE_ID = 'service_u0dl1hi';
// const EMAILJS_TEMPLATE_ID = 'template_gjn34mg';
// const EMAILJS_PUBLIC_KEY = '7XF5sAY2pr23n4EFA';

interface ContactFormProps {
  onSuccess?: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    message: '',
    seatsRequired: '', // 👈 new field
    interestedIn: '' // 👈 new field for workspace type
  });

  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY !== '_DvdbQQ5tbj7Lh15A') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const templateParams = {
        from_name: formData.firstName,
        from_email: formData.email,
        company_name: formData.companyName || 'Not provided',
        phone_number: formData.phoneNumber || 'Not provided',
        message: formData.message,
        seatsrequired: formData.seatsRequired || 'Not provided', // 👈 changed // 👈 send to EmailJS
        interested_in: formData.interestedIn || 'Not provided', // 👈 new field
        to_email: 'contact@myworx.in',
        reply_to: formData.email,
      };

      console.log('Sending templateParams:', templateParams); 

      const res = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (res.status === 200) {
        setSuccessMessage(`Thanks ${formData.firstName}! We received your inquiry.`);
        setStatus(FormStatus.SUCCESS);

        setTimeout(() => {
          setFormData({
            firstName: '',
            email: '',
            companyName: '',
            phoneNumber: '',
            message: '',
            seatsRequired: '',
            interestedIn: '' // 👈 reset new field
          });
          setStatus(FormStatus.IDLE);
          // Call onSuccess callback if provided (e.g., to close modal)
          if (onSuccess) {
            onSuccess();
          }
        }, 3000);
      }
    } catch (error) {
      console.log("EmailJS Error:", error);
      setStatus(FormStatus.ERROR);
      setErrorMessage("Failed to send email. Check EmailJS variables.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden border border-gray-100">
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

          {/* Seats Required Dropdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="seatsRequired" className="block text-sm font-semibold text-gray-700 mb-2">
                How many seats required?
              </label>
              <select
                id="seatsRequired"
                name="seatsRequired"
                value={formData.seatsRequired}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-gray-50 focus:bg-white outline-none text-sm"
              >
                <option value="">Select seats</option>
                <option value="1-5">1 - 5</option>
                <option value="5-10">5 - 10</option>
                <option value="10-15">10 - 15</option>
                <option value="15-20">15 - 20</option>
                <option value="25-plus">More than 25+</option>
              </select>
            </div>

            <div>
              <label htmlFor="interestedIn" className="block text-sm font-semibold text-gray-700 mb-2">
                I'm interested in *
              </label>
              <select
                id="interestedIn"
                name="interestedIn"
                value={formData.interestedIn}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 bg-gray-50 focus:bg-white outline-none text-sm"
              >
                <option value="">Select workspace type</option>
                <option value="Private Cabin">Private Cabin</option>
                <option value="Open Desk">Virtual Office</option>
                <option value="Meeting Room">Meeting Room</option>
                <option value="Meeting Room">Managed Office</option>
              </select>
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
               ● Submit Message ● <Send size={18} />
              </>
            )}
          </button>

          {status === FormStatus.ERROR && (
            <div className="text-red-500 text-sm flex items-start gap-2 mt-4 bg-red-50 p-3 rounded-lg">
              <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold">Error sending message</p>
                <p>{errorMessage}</p>
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
};

export default ContactForm;
