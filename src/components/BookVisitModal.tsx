import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import ContactForm from './ContactForm';

interface BookVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookVisitModal: React.FC<BookVisitModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollBarWidth}px`;
      
      // Prevent scroll on touch devices
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  // Handle Escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Render modal using Portal directly to body
  return createPortal(
    <div className="modal-portal">
      {/* Backdrop with smooth fade-in animation */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[99998] animate-fadeIn"
        onClick={onClose}
        aria-hidden="true"
        style={{ 
          isolation: 'isolate',
          willChange: 'opacity'
        }}
      />

      {/* Modal Container - Always centered, scrollable */}
      <div 
        className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 overflow-hidden"
        style={{ isolation: 'isolate' }}
      >
        <div className="relative w-full h-full max-h-screen flex items-center justify-center py-4 sm:py-8 overflow-y-auto">
          <div 
            className="bg-white rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-2xl mx-auto 
              transform transition-all duration-400 ease-out animate-modalSlideUp my-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            style={{
              maxHeight: 'calc(100vh - 2rem)',
              willChange: 'transform, opacity'
            }}
          >
            {/* Modal Header - Sticky */}
            <div className="sticky top-0 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 
              px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-start justify-between 
              rounded-t-xl sm:rounded-t-2xl z-10">
              <div className="flex-1 pr-3 sm:pr-4">
                <h2 
                  id="modal-title"
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight"
                >
                  Schedule a Visit
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1.5 sm:mt-2 leading-relaxed">
                  Book a private viewing and let our specialists design a plan based on your lifestyle needs!
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 p-2 sm:p-2.5 hover:bg-gray-100 rounded-full 
                  transition-all duration-200 hover:rotate-90 transform group"
                aria-label="Close modal"
                type="button"
              >
                <X size={20} className="sm:w-[22px] sm:h-[22px] text-gray-500 group-hover:text-gray-900 transition-colors" />
              </button>
            </div>

            {/* Modal Body - Scrollable */}
            <div className="px-4 sm:px-6 md:px-8 py-5 sm:py-6 md:py-8 overflow-y-auto"
              style={{ maxHeight: 'calc(100vh - 12rem)' }}
            >
              <ContactForm onSuccess={onClose} />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default BookVisitModal;
