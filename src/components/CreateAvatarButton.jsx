import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from './Modal';

const CreateAvatarButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-custom-cyan text-gray-900 px-6 py-3 rounded-full shadow-xl hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-custom-cyan focus:ring-opacity-75 transition-all duration-150 ease-in-out transform hover:scale-105 active:scale-95"
      >
        Create New Avatar
      </button>
      <AnimatePresence>
        {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}
      </AnimatePresence>
    </>
  );
};

export default CreateAvatarButton;
