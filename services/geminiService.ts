import { GoogleGenAI } from "@google/genai";
import { ChatMessage, Product, ShopInfo } from "../types";
import { SYSTEM_PROMPT } from "../constants";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY || '' });

export async function getChatResponse(
  messages: ChatMessage[],
  products: Product[],
  shopInfo: ShopInfo
): Promise<string> {
  const model = ai.getGenerativeModel({ 
    model: "gemini-1.5-flash",
    systemInstruction: SYSTEM_PROMPT(products, shopInfo)
  });

  const history = messages.slice(0, -1).map(msg => ({
    role: msg.role === 'assistant' ? 'model' : 'user' as any,
    parts: [{ text: msg.content }]
  }));
  
  const lastMessage = messages[messages.length - 1].content;

  const result = await model.generateContent({
    contents: [...history, { role: 'user', parts: [{ text: lastMessage }] }],
    generationConfig: { temperature: 0.7 }
  });

  const response = await result.response;
  return response.text() || "Dạ em chưa rõ ý chị lắm ạ.";
}