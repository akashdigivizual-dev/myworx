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

      {/* Modal Container - Compact, no scrolling */}
      <div 
        className="fixed inset-0 z-[99999] flex items-center justify-center p-2 sm:p-3 overflow-hidden"
        style={{ isolation: 'isolate' }}
      >
        <div className="relative w-full flex items-center justify-center overflow-hidden">
          <div 
            className="bg-white rounded-lg sm:rounded-xl shadow-2xl w-full max-w-lg mx-auto 
              transform transition-all duration-400 ease-out animate-modalSlideUp"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            style={{
              maxHeight: '90vh',
              willChange: 'transform, opacity',
              overflowY: 'auto'
            }}
          >
            {/* Modal Header - Compact */}
            <div className="sticky top-0 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 
              px-3 sm:px-5 py-3 sm:py-4 flex items-start justify-between 
              rounded-t-lg sm:rounded-t-xl z-10">
              <div className="flex-1 pr-2 sm:pr-3">
                <h2 
                  id="modal-title"
                  className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight"
                >
                  Book a Visit
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  Let our specialists help you find the perfect space
                </p>
              </div>
              <button
                onClick={onClose}
                className="flex-shrink-0 p-1.5 hover:bg-gray-100 rounded-full 
                  transition-all duration-200 hover:rotate-90 transform group"
                aria-label="Close modal"
                type="button"
              >
                <X size={18} className="text-gray-500 group-hover:text-gray-900 transition-colors" />
              </button>
            </div>

            {/* Modal Body - Compact */}
            <div className="px-3 sm:px-5 py-4 sm:py-5 overflow-hidden">
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
