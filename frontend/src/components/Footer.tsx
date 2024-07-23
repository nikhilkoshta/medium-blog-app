// src/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm">&copy; 2024 Medium. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://twitter.com/yourusername" className="text-gray-400 hover:text-white" aria-label="Twitter">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.93 4.93 0 002.165-2.724 9.865 9.865 0 01-3.127 1.195 4.92 4.92 0 00-8.38 4.482A13.971 13.971 0 011.671 3.149a4.92 4.92 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.08 1.44 4.038 3.579 4.475a4.922 4.922 0 01-2.224.084 4.92 4.92 0 004.598 3.417 9.874 9.874 0 01-6.102 2.102c-.396 0-.787-.023-1.175-.069a13.945 13.945 0 007.557 2.213c9.054 0 14.002-7.498 14.002-13.986 0-.213-.005-.425-.014-.637A10.025 10.025 0 0024 4.557z"/>
            </svg>
          </a>
          <a href="https://github.com/yourusername" className="text-gray-400 hover:text-white" aria-label="GitHub">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577 0-.285-.011-1.041-.017-2.044-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.493.997.108-.775.419-1.304.762-1.604-2.665-.303-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.237-3.221-.124-.303-.536-1.522.118-3.176 0 0 1.008-.322 3.301 1.23a11.49 11.49 0 013.007-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.298-1.23 3.298-1.23.656 1.654.244 2.873.12 3.176.77.84 1.237 1.911 1.237 3.221 0 4.609-2.803 5.624-5.474 5.921.43.372.823 1.104.823 2.222 0 1.604-.015 2.896-.015 3.293 0 .319.192.693.799.576C20.565 21.796 24 17.303 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://linkedin.com/in/yourusername" className="text-gray-400 hover:text-white" aria-label="LinkedIn">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 20h-3v-11h3v11zm-1.5-12.32c-1.05 0-1.89-.86-1.89-1.92s.84-1.92 1.89-1.92 1.89.86 1.89 1.92-.84 1.92-1.89 1.92zm13.5 12.32h-3v-5.5c0-1.3-.03-2.96-1.8-2.96-1.81 0-2.09 1.41-2.09 2.87v5.59h-3v-11h2.88v1.51h.04c.4-.75 1.38-1.53 2.83-1.53 3.03 0 3.59 2 3.59 4.59v6.43z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
