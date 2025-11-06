
import React from 'react';
import type { Feature } from '../types';

interface FeatureCardProps {
  feature: Feature;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => {
  return (
    <div className="bg-brand-blue p-6 rounded-lg border border-brand-light-blue shadow-lg hover:border-brand-accent transition-colors duration-300">
      <div className="mb-4">{feature.icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
      <p className="text-gray-400">{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
