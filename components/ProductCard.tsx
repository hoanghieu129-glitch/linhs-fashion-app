import React from 'react';
import { Product } from '../types';
import { MessageCircle } from 'lucide-react';

export const ProductCard = ({ product, onSelect }: { product: Product, onSelect: (p: Product) => void }) => (
  <div className="bg-white border rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
    <img src={product.imageUrl} alt={product.name} className="w-full aspect-[4/5] object-cover" />
    <div className="p-4">
      <h3 className="font-bold text-sm uppercase italic">{product.name}</h3>
      <p className="text-pink-600 font-bold">{product.price.toLocaleString("vi-VN")}đ</p>
      <button 
        onClick={() => onSelect(product)}
        className="mt-4 w-full bg-pink-600 text-white py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-pink-700 transition-colors"
      >
        <MessageCircle size={16} /> Tư vấn ngay
      </button>
    </div>
  </div>
);