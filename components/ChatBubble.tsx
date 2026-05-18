import React from 'react';
import ReactMarkdown from 'react-markdown';
import { cn } from '../lib/utils';
import { ChatMessage } from '../types';

export const ChatBubble = ({ message }: { message: ChatMessage }) => {
  const isAssistant = message.role === 'assistant';
  return (
    <div className={cn("flex mb-4", isAssistant ? "justify-start" : "justify-end")}>
      <div className={cn(
        "max-w-[80%] px-4 py-2 rounded-2xl shadow-sm",
        isAssistant ? "bg-white border text-slate-700" : "bg-pink-600 text-white shadow-pink-100"
      )}>
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown>{message.content}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};