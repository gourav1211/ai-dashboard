import React from 'react';

const Header = () => {
  return (
    <header className="bg-custom-surface shadow-md">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-custom-text-primary">
          AI Dashboard
        </h1>
        <p className="text-md text-custom-text-secondary">
          Hello, User! 👋
        </p>
      </div>
    </header>
  );
};

export default Header;
