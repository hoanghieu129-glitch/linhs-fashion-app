export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  materials: string[];
  colors: string[];
  sizes: string[];
  sizeGuide: string;
  stylingTips: string;
  imageUrl?: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
}

export interface ShopInfo {
  name: string;
  policies: {
    exchange: string;
    shipping: string;
    freeShipThreshold: number;
  };
}