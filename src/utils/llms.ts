import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY,
});

const config = {
    temperature: 0.45,
    thinkingConfig: {
        thinkingBudget: 1024
    },
    responseMimeType: "text/plain",
    systemInstruction: [
        {
            text: `Allowed word limit of 60 words.`,
        }
    ],
}

export async function createResponse(prompt: string) {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config
    });
    return response;
}
