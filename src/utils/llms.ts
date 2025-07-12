import { GoogleGenAI, Type } from "@google/genai";
import { getSystemPrompt } from "./prompts";
import env from "./env";

const ai = new GoogleGenAI({
    apiKey: env.GEMINI_API_KEY,
});

const config = {
    temperature: 0.45,
    thinkingConfig: {
        thinkingBudget: 1024
    },
    responseMimeType: "text/plain",
    systemInstruction: [
        {
            text: getSystemPrompt()
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
