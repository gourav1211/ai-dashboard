import React from 'react';
import { motion } from 'framer-motion';

const AvatarCard = ({ avatar, index }) => {
  const placeholderImage = "https://via.placeholder.com/150";
  const fullName = `${avatar.firstName || ''} ${avatar.lastName || ''}`.trim();

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.3,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <motion.div
      className="bg-custom-surface shadow-lg rounded-xl p-6 text-center transform transition-all duration-300 hover:shadow-xl hover:scale-[1.03]"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      custom={index}
      whileHover={{ y: -5 }}
    >
      <img
        src={avatar.image || placeholderImage}
        alt={fullName || 'Avatar'}
        className="w-28 h-28 rounded-full mx-auto mb-5 ring-2 ring-gray-700 shadow-md"
        onError={(e) => { e.target.src = placeholderImage }}
      />
      <h2 className="text-xl font-semibold text-custom-text-primary mb-1">
        {fullName || 'N/A'}
      </h2>
      <p className="text-sm text-custom-text-secondary mb-4">
        {avatar.email || 'No email available'}
      </p>
      <motion.button 
        className="px-5 py-2 bg-custom-blue text-white text-sm font-medium rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-opacity-50 transition-colors duration-150"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Edit
      </motion.button>
    </motion.div>
  );
};

export default AvatarCard;
