
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

    // Handle Safety Moderation blocks
    if (response.candidates?.[0]?.finishReason === 'SAFETY') {
      throw new Error("ERROR_SAFETY_BLOCKED");
    }

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
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    
    // Check for specific error signatures in the message or status
    const msg = error.message?.toLowerCase() || "";
    
    if (msg.includes("429") || msg.includes("quota")) {
      throw new Error("ERROR_QUOTA_EXCEEDED");
    }
    if (msg.includes("401") || msg.includes("403") || msg.includes("api key")) {
      throw new Error("ERROR_AUTH_INVALID");
    }
    if (msg === "ERROR_SAFETY_BLOCKED") {
      throw error;
    }
    
    throw new Error("ERROR_GENERIC");
  }
};
