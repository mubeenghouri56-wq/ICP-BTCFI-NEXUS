
import React from 'react';

const Step: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-brand-light-blue border-2 border-brand-accent text-brand-accent font-bold text-xl">
            {number}
        </div>
        <div>
            <h4 className="text-xl font-semibold text-white">{title}</h4>
            <p className="text-gray-400 mt-1">{description}</p>
        </div>
    </div>
);


const HowItWorks: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-brand-blue rounded-xl px-6 md:px-10 animate-slide-up">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How <span className="text-btc-orange">ckBTC</span> Works
        </h2>
        <div className="space-y-10">
            <Step 
                number={1}
                title="Deposit Bitcoin"
                description="A user sends native BTC to a specific Bitcoin address controlled by the ckBTC canister on the Internet Computer."
            />
            <Step 
                number={2}
                title="Mint ckBTC"
                description="After confirmations on the Bitcoin network, the ckBTC canister mints an equivalent amount of ckBTC tokens for the user on ICP."
            />
             <Step 
                number={3}
                title="Transact at Web Speed"
                description="The user can now use their ckBTC in any DeFi application on ICP with 1-2 second finality and negligible fees."
            />
            <Step 
                number={4}
                title="Withdraw to Bitcoin"
                description="To withdraw, the user sends ckBTC back to the canister, which then burns the tokens and sends native BTC to the user's Bitcoin address."
            />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
