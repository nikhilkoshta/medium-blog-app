// src/pages/AboutPage.tsx
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 p-8">
      <div className="container mx-auto max-w-3xl bg-white rounded-lg shadow-md p-6">
        <h1 className="text-4xl font-bold mb-4">Nikhil Koshta</h1>
        <p className="mb-4 text-lg">Mechatronics Engineering Student at Jabalpur Engineering College</p>
        
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <ul className="list-disc list-inside mb-4">
          <li>PayMoney: Built a secure and user-friendly money transfer platform using MongoDB, ExpressJS, ReactJS, NodeJS.</li>
          <li>ChessCourses: Created an interactive online learning platform using HTML, CSS, JavaScript.</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Technical Skills</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Languages: Java, C++, JavaScript, TypeScript</li>
          <li>Libraries/Frameworks: React.js (+Next.js), Tailwind, Express.js</li>
          <li>Developer Tools: Git & GitHub, VS Code, Postman, MongoDB Compass</li>
          <li>Databases: PostgreSQL, MySQL, MongoDB</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Achievements/Hobbies</h2>
        <ul className="list-disc list-inside mb-4">
          <li>Completed a Full Stack Web Development Bootcamp.</li>
          <li>Participated in International Open GM Chess Tournament-2022.</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
