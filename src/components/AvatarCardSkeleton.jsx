import React from 'react';

const AvatarCardSkeleton = () => {
  return (
    <div className="bg-custom-surface shadow-lg rounded-xl p-6 animate-pulse">
      <div className="w-24 h-24 rounded-full bg-gray-700 mx-auto mb-5"></div>
      <div className="h-5 bg-gray-700 rounded w-3/4 mx-auto mb-3"></div>
      <div className="h-4 bg-gray-700 rounded w-1/2 mx-auto mb-6"></div>
      <div className="h-10 bg-gray-600 rounded-lg w-28 mx-auto"></div>
    </div>
  );
};

export default AvatarCardSkeleton; 