
import { GoogleGenAI } from "@google/genai";

// Per coding guidelines, the API key is expected to be set in the environment,
// and we should assume it is pre-configured, valid, and accessible.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const model = 'gemini-2.5-flash';

export async function generateResponse(prompt: string): Promise<string> {
  // The original code had a check for the API key, but guidelines state to assume it's present.
  // If the key is missing, the API call will fail, and the catch block will handle it.
  try {
    const result = await ai.models.generateContent({
        model: model,
        contents: `You are a helpful assistant for Indian farmers. Your name is 'Gram Sevak AI'. Your goal is to provide concise, easy-to-understand, and actionable information about government schemes, modern farming techniques, and agricultural tools relevant to India. Keep your answers brief and to the point. User prompt: "${prompt}"`,
        config: {
            temperature: 0.5,
            topP: 0.95,
            topK: 64,
        }
    });

    return result.text;
  } catch (error) {
    console.error("Error generating content:", error);
    return "There was an error processing your request. Please try again.";
  }
}
