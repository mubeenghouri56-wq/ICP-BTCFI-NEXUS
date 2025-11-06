
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-brand-blue/50 backdrop-blur-sm sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl md:text-2xl font-bold text-white tracking-wider">
              ICP <span className="text-btc-orange">BTCFi</span> Nexus
            </h1>
          </div>
          <div className="flex items-center">
             <span className="bg-brand-purple text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">Hackathon Project</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
