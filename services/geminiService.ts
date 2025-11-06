import { GoogleGenAI } from "@google/genai";

// Fix: Initialize GoogleGenAI with process.env.API_KEY directly per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateUseCaseDescription = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Briefly describe a DeFi use case for "${topic}" built on the Internet Computer using ckBTC (Chain-Key Bitcoin). Highlight the key benefits for users. Keep it under 60 words, in a professional but exciting tone.`
    });
    return response.text;
  } catch (error) {
    console.error(`Error generating description for ${topic}:`, error);
    return `Failed to generate a description for ${topic}. This powerful DeFi primitive on ICP leverages native Bitcoin liquidity for new financial products.`;
  }
};

export const generateMarketInsight = async (from: string, to: string): Promise<string> => {
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `Provide a very short, bullish crypto market insight for someone who just swapped ${from} for ${to}. Mention the potential of the ${to} ecosystem. Maximum 2 sentences.`
        });
        return response.text;
    } catch (error) {
        console.error('Error generating market insight:', error);
        return `Swapping into the ${to} ecosystem opens up new possibilities in a rapidly growing and innovative DeFi landscape.`;
    }
};

export const generateCapabilityDescription = async (topic: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Describe the concept of a "${topic}" built on the Internet Computer. Focus on the unique advantages ICP's technology (like ckBTC, vetKeys, or Chain-Key signatures) brings to this idea. Keep it concise (around 60 words) and sound innovative.`
    });
    return response.text;
  } catch (error) {
    console.error(`Error generating description for ${topic}:`, error);
    return `Failed to generate a description. This concept represents a frontier in DeFi, leveraging ICP's unique architecture to unlock new possibilities for Bitcoin.`;
  }
};
