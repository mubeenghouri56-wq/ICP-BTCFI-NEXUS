
import React, { useState, useCallback } from 'react';
import { generateMarketInsight } from '../services/geminiService';
import { BtcIcon } from './icons/BtcIcon';
import { IcpIcon } from './icons/IcpIcon';
import { ArrowPathIcon } from './icons/ArrowPathIcon';


const SwapDemo: React.FC = () => {
  const [btcAmount, setBtcAmount] = useState('0.1');
  const [icpAmount, setIcpAmount] = useState('215.5');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [txHash, setTxHash] = useState('');
  const [insight, setInsight] = useState('');

  const handleBtcChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBtcAmount(value);
    // Dummy conversion rate
    setIcpAmount((parseFloat(value) * 2155).toFixed(2).toString());
  };

  const handleSwap = useCallback(async () => {
    if (!btcAmount || parseFloat(btcAmount) <= 0) return;
    
    setIsLoading(true);
    setIsSuccess(false);
    setInsight('');
    
    // Simulate API call and transaction
    await new Promise(resolve => setTimeout(resolve, 2000));
    const fakeTxHash = `0x${[...Array(64)].map(() => Math.floor(Math.random() * 16).toString(16)).join('')}`;
    setTxHash(fakeTxHash);
    setIsSuccess(true);
    
    const generatedInsight = await generateMarketInsight('BTC', 'ICP');
    setInsight(generatedInsight);

    setIsLoading(false);

  }, [btcAmount]);

  return (
    <section id="demo" className="py-16 md:py-24 animate-slide-up">
      <div className="max-w-lg mx-auto bg-brand-blue p-6 md:p-8 rounded-2xl border border-brand-light-blue shadow-2xl shadow-black/30">
        <h2 className="text-2xl font-bold text-center text-white mb-6">Simulate a Swap</h2>

        <div className="space-y-4">
          <div className="bg-brand-dark p-4 rounded-lg">
            <label className="text-xs text-gray-400">You send</label>
            <div className="flex items-center mt-1">
              <input 
                type="number"
                value={btcAmount}
                onChange={handleBtcChange}
                className="w-full bg-transparent text-2xl font-semibold text-white focus:outline-none"
                placeholder="0.0"
              />
              <div className="flex items-center bg-brand-light-blue px-3 py-1 rounded-full">
                <BtcIcon />
                <span className="ml-2 font-bold">BTC</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center my-2">
            <ArrowPathIcon />
          </div>

          <div className="bg-brand-dark p-4 rounded-lg">
            <label className="text-xs text-gray-400">You receive</label>
            <div className="flex items-center mt-1">
              <input 
                type="text"
                value={icpAmount}
                readOnly
                className="w-full bg-transparent text-2xl font-semibold text-white focus:outline-none"
                placeholder="0.0"
              />
              <div className="flex items-center bg-brand-light-blue px-3 py-1 rounded-full">
                <IcpIcon />
                <span className="ml-2 font-bold">ICP</span>
              </div>
            </div>
          </div>
        </div>
        
        <button
          onClick={handleSwap}
          disabled={isLoading || !btcAmount || parseFloat(btcAmount) <= 0}
          className="w-full mt-6 bg-brand-accent hover:bg-teal-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isLoading ? (
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : 'Swap'}
        </button>

        {isSuccess && (
            <div className="mt-6 p-4 bg-green-900/50 border border-green-500 rounded-lg animate-fade-in">
                <h4 className="font-bold text-green-300">Swap Successful!</h4>
                <p className="text-xs text-gray-300 mt-1">
                    Transaction Hash: <a href="#" className="underline truncate block text-green-400 hover:text-green-200">{txHash}</a>
                </p>
                {insight && (
                    <div className="mt-3 pt-3 border-t border-green-500/50">
                        <p className="text-sm text-gray-200 italic">
                           <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Gemini Insight:</span> {insight}
                        </p>
                    </div>
                )}
            </div>
        )}
      </div>
    </section>
  );
};

export default SwapDemo;
