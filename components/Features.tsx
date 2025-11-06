
import React from 'react';
import type { Feature } from '../types';
import FeatureCard from './FeatureCard';

const BoltIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);

const ShieldCheckIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a12.02 12.02 0 009 3.044a12.02 12.02 0 009-3.044c0-2.42-.4-4.732-1.125-6.864z" />
    </svg>
);

const CodeBracketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
);

const CurrencyDollarIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
    </svg>
);


const features: Feature[] = [
  {
    icon: <CodeBracketIcon />,
    title: 'True Bitcoin Smart Contracts',
    description: 'ICP canisters can directly hold and transact with ckBTC, a trustless 1:1 Bitcoin twin, enabling true on-chain logic for BTC.',
  },
  {
    icon: <BoltIcon />,
    title: 'Lightning-Fast Transactions',
    description: 'Leverage ICP\'s web-speed finality for near-instant Bitcoin transactions, perfect for high-frequency trading and payments.',
  },
  {
    icon: <CurrencyDollarIcon />,
    title: 'Miniscule Gas Fees',
    description: 'Enjoy predictable and extremely low transaction fees, a fraction of the cost of traditional Bitcoin or Ethereum transactions.',
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Enhanced Security',
    description: 'Benefit from the Internet Computer\'s advanced chain-key cryptography, providing a decentralized and secure environment for your Bitcoin.',
  },
];

const Features: React.FC = () => {
  return (
    <section className="py-16 md:py-24 animate-slide-up">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
