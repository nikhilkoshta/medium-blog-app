// src/components/HomepageAppbar.tsx
import React, { useState } from 'react';
import SignupPopup from './SignupPopup';

const HomepageAppbar: React.FC = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupHeading, setPopupHeading] = useState('');

  const handleOpenPopup = (heading: string) => {
    setPopupHeading(heading);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">Medium</h1>
          </div>
          <div className="flex items-center space-x-4">
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <button onClick={() => handleOpenPopup('Create an account to start writing')} className="text-gray-600 hover:text-gray-900">Write</button>
            <a href="/signin" className="text-gray-600 hover:text-gray-900">Sign in</a>
            <button onClick={() => handleOpenPopup('Join Medium')} className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800">
              Get started
            </button>
          </div>
        </div>
      </div>
      <SignupPopup open={popupOpen} onClose={handleClosePopup} heading={popupHeading} />
    </div>
  );
};

export default HomepageAppbar;
