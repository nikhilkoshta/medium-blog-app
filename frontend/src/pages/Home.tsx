// src/pages/Homepage.tsx
import React, { useState } from 'react';
import Footer from '../components/Footer';

import SignupPopup from '../components/SignupPopup';
import HomepageAppbar from '../components/HomeAppbar';

const Homepage: React.FC = () => {
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
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col">
      <HomepageAppbar />
      <div className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 leading-tight">
          Human stories & ideas
        </h1>
        <p className="mt-4 text-xl text-gray-700 max-w-2xl">
          A place to read, write, and deepen your understanding
        </p>
        <button
          onClick={() => handleOpenPopup('Join Medium')}
          className="mt-8 px-6 py-3 bg-black text-white text-lg rounded-full hover:bg-gray-800 transition-colors"
        >
          Start reading
        </button>
      </div>
      <Footer />
      <SignupPopup open={popupOpen} onClose={handleClosePopup} heading={popupHeading} />
    </div>
  );
};

export default Homepage;
