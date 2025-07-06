import { GoogleGenAI } from "@google/genai";

const model = new GoogleGenAI({});

async function createResponse(prompt: string){
    const response = await model.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
        config:{
            thinkingConfig:{
                thinkingBudget: 1
            }
        }
    });
    return response.text;
}
