
import { GoogleGenAI } from "@google/genai";
import { AIResponse } from "../types";

export const getAIInsights = async (prompt: string): Promise<AIResponse> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }],
        temperature: 0.7,
        systemInstruction: "You are an expert AI consultancy analyst. Provide professional, concise, and accurate market insights based on current trends. Always maintain a professional business tone."
      },
    });

    const text = response.text || "I couldn't generate an analysis at this time.";
    const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    // Extract web sources from grounding chunks
    const sources = chunks
      .filter(chunk => chunk.web)
      .map(chunk => ({
        web: {
          uri: chunk.web?.uri || '',
          title: chunk.web?.title || 'Source'
        }
      }));

    return { text, sources };
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to fetch AI insights. Please try again later.");
  }
};
