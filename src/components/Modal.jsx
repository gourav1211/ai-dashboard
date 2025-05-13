import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Modal = ({ onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.95,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 30,
      transition: {
        duration: 0.15,
      },
    },
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={!isSubmitting ? onClose : undefined}
    >
      <motion.div
        className="bg-custom-surface p-6 sm:p-8 rounded-xl shadow-2xl w-full max-w-md transform"
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-semibold text-custom-text-primary mb-6 text-center">Create New Avatar</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-5">
            <label className="block text-sm font-medium text-custom-text-secondary mb-1" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2.5 bg-gray-700 text-custom-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue transition-colors duration-150 disabled:opacity-50"
              placeholder="Enter avatar's name"
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-custom-text-secondary mb-1" htmlFor="image">
              Image URL
            </label>
            <input
              type="text"
              id="image"
              className="w-full px-4 py-2.5 bg-gray-700 text-custom-text-primary rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-blue transition-colors duration-150 disabled:opacity-50"
              placeholder="Enter image URL (e.g., https://example.com/image.png)"
              disabled={isSubmitting}
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 bg-gray-600 text-custom-text-primary rounded-lg hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition-colors duration-150 disabled:opacity-50"
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2.5 bg-custom-blue text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-opacity-50 transition-colors duration-150 disabled:opacity-75 disabled:cursor-not-allowed flex items-center justify-center min-w-[100px]"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                'Create'
              )}
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default Modal;
