
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-20 md:py-32 animate-fade-in">
      <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-4">
        Unleash the Next Era of <span className="text-transparent bg-clip-text bg-gradient-to-r from-btc-orange to-yellow-400">Bitcoin DeFi</span>
      </h2>
      <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-8">
        Experience the power of native Bitcoin on the Internet Computer. Build and use decentralized financial applications with unparalleled speed, security, and low fees.
      </p>
      <a
        href="#demo"
        className="inline-block bg-brand-accent hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-full transition-transform transform hover:scale-105 duration-300 shadow-lg shadow-brand-accent/30"
      >
        Try the Demo
      </a>
    </section>
  );
};

export default Hero;
