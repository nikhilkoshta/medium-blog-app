// src/components/SignupPopup.tsx
import React, { useEffect, useRef } from 'react';

interface SignupPopupProps {
  open: boolean;
  onClose: () => void;
  heading: string;
}

const SignupPopup: React.FC<SignupPopupProps> = ({ open, onClose, heading }) => {
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open, onClose]);

  if (!open) return null;

  const handleSignUpWithGoogle = () => {
    // Redirect to Google sign-up URL (replace with your actual URL)
    window.location.href = '/signin';
  };

  const handleSignUpWithTwitter = () => {
    // Redirect to Twitter sign-up URL (replace with your actual URL)
    window.location.href = '/signup';
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-60">
      <div
        ref={popupRef}
        className="bg-white dark:bg-gray-100 p-6 rounded-lg shadow-lg w-11/12 max-w-md"
        >
          <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-800">{heading}</h2>
          <button
            onClick={handleSignUpWithGoogle}
            className="bg-blue-500 text-white px-4 py-2 rounded w-full mb-2 hover:bg-blue-600 transition-colors"
          >
            Sign Up with Google
          </button>
          <button
            onClick={handleSignUpWithTwitter}
            className="bg-blue-400 text-white px-4 py-2 rounded w-full mb-4 hover:bg-blue-500 transition-colors"
          >
            Sign Up with Twitter
          </button>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-600 dark:hover:text-gray-400"
          >
            Close
          </button>
        </div>
      </div>
    );
  };
  
  export default SignupPopup;
  
