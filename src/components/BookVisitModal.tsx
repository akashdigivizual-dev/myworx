import React from 'react';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookVisitModal: React.FC<BookVisitModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8">
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transform transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className="sticky top-0 bg-white border-b border-gray-100 px-8 py-6 flex items-center justify-between rounded-t-2xl">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">Schedule a Visit</h2>
              <p className="text-gray-600 text-sm mt-1">
                Book a private viewing and let our specialists design a plan based on your lifestyle needs!
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 ml-4 p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              aria-label="Close modal"
            >
              <X size={24} className="text-gray-500 hover:text-gray-700" />
            </button>
          </div>

          {/* Modal Body - Contact Form */}
          <div className="px-8 py-6">
            <ContactForm onSuccess={onClose} />
          </div>
        </div>
      </div>
    </>
  );
};

export default BookVisitModal;
