
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const model = "gemini-2.5-flash-preview-04-17";

export const generateTitleFromImage = async (base64Image: string): Promise<string> => {
    try {
        if (!base64Image.startsWith('data:image/')) {
            throw new Error("Invalid base64 image format.");
        }

        const [mimeTypePart, base64Data] = base64Image.split(',');
        const mimeType = mimeTypePart.split(':')[1].split(';')[0];
        
        if (!mimeType || !base64Data) {
             throw new Error("Could not parse base64 image.");
        }

        const imagePart = {
            inlineData: {
                mimeType,
                data: base64Data,
            },
        };

        const textPart = {
            text: "Analyze this image and suggest a concise, catchy, and professional title for a marketing slide. The title should be between 4 and 8 words. Return only the title text, without any quotes or extra formatting."
        };

        const response: GenerateContentResponse = await ai.models.generateContent({
            model: model, 
            contents: { parts: [imagePart, textPart] },
        });

        return response.text.trim().replace(/["']/g, "");

    } catch (error) {
        console.error("Error generating title from Gemini API:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to generate title: ${error.message}`);
        }
        throw new Error("An unexpected error occurred while communicating with the AI.");
    }
};
