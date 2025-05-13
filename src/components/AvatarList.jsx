import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AvatarCard from './AvatarCard';
import AvatarCardSkeleton from './AvatarCardSkeleton'; 

const AvatarList = () => {
  const [avatars, setAvatars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://dummyjson.com/users')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch avatars. Please try again later.');
          }
          return response.json();
        })
        .then((data) => {
          setAvatars(data.users || []);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 1500);
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(8)].map((_, index) => (
          <AvatarCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-red-400 mb-2">Oops! Something went wrong.</p>
        <p className="text-custom-text-secondary">{error}</p>
      </div>
    );
  }

  if (avatars.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-custom-text-secondary">No avatars found.</p>
        <p className="text-custom-text-secondary">Why not create one?</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <AnimatePresence>
        {avatars.map((avatar, index) => (
          <AvatarCard key={avatar.id} avatar={avatar} index={index} />
        ))}
      </AnimatePresence>
    </div>
  );
};

export default AvatarList;
