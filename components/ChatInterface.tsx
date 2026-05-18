import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { ChatBubble } from './ChatBubble';
import { getChatResponse } from '../services/geminiService';
import { Product, ShopInfo, ChatMessage } from '../types';

export const ChatInterface = ({ products, shopInfo, initialProduct }: { products: Product[], shopInfo: ShopInfo, initialProduct: Product | null }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length === 0) {
      let welcome = "Dạ em chào chị ạ! Em là Linh, chị cần em tư vấn mẫu nào không ạ?";
      if (initialProduct) welcome = `Dạ em thấy chị đang quan tâm mẫu ${initialProduct.name}, chị cần em tư vấn size hay màu ạ?`;
      setMessages([{ id: "welcome", role: "assistant", content: welcome, timestamp: Date.now() }]);
    }
  }, [initialProduct]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMsg: ChatMessage = { id: Date.now().toString(), role: "user", content: input, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);
    try {
      const resp = await getChatResponse([...messages, userMsg], products, shopInfo);
      setMessages(prev => [...prev, { id: Date.now().toString(), role: "assistant", content: resp, timestamp: Date.now() }]);
    } catch (e) {
      setMessages(prev => [...prev, { id: Date.now().toString(), role: "assistant", content: "Dạ em xin lỗi, hệ thống đang bận xíu ạ.", timestamp: Date.now() }]);
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[600px] bg-slate-50/50 rounded-3xl overflow-hidden border border-slate-200">
      <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
        {messages.map(m => <ChatBubble key={m.id} message={m} />)}
        <div ref={chatEndRef} />
      </div>
      <div className="p-4 bg-white border-t flex gap-2">
        <input 
          value={input} 
          onChange={e => setInput(e.target.value)} 
          onKeyPress={e => e.key === "Enter" && handleSend()} 
          className="flex-1 border-none focus:ring-0 px-4 text-sm" 
          placeholder="Hỏi em gì đi chị..." 
        />
        <button 
          onClick={handleSend} 
          disabled={isLoading}
          className="bg-pink-600 text-white p-3 rounded-2xl hover:bg-pink-700 transition-all shadow-lg shadow-pink-100 disabled:opacity-50"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};