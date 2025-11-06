
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue border-t border-brand-light-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ICP BTCFi Nexus. A project for the ICP Bitcoin DeFi Hackathon.</p>
          <p className="text-sm mt-2">
            Built with React, Tailwind CSS, and the Gemini API.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
