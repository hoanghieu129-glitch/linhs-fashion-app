import React, { useState } from 'react';
import { MOCK_PRODUCTS, SHOP_INFO } from './constants';
import { ProductCard } from './components/ProductCard';
import { ChatInterface } from './components/ChatInterface';
import { PolicyViewer } from './components/PolicyViewer';
import { ShoppingBag, MessageSquare, LayoutGrid, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<'chat' | 'catalog'>('catalog');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductAdvice = (product: Product) => {
    setSelectedProduct(product);
    setActiveTab('chat');
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans">
      <div className="relative max-w-6xl mx-auto px-4 py-8 md:py-12">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase italic">
              Linh's <span className="text-pink-600">Fashion</span>
            </h1>
            <p className="text-slate-500 mt-2 font-medium">Hệ thống chăm sóc khách hàng thông minh 24/7</p>
          </div>

          <div className="flex bg-white/50 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200">
            <button
              onClick={() => setActiveTab('chat')}
              className={`px-6 py-2 rounded-xl text-sm font-bold ${activeTab === 'chat' ? 'bg-pink-600 text-white' : 'text-slate-500'}`}
            >
              Chat Tư Vấn
            </button>
            <button
              onClick={() => setActiveTab('catalog')}
              className={`px-6 py-2 rounded-xl text-sm font-bold ${activeTab === 'catalog' ? 'bg-pink-600 text-white' : 'text-slate-500'}`}
            >
              Danh Mục
            </button>
          </div>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {activeTab === 'chat' ? (
                <ChatInterface products={MOCK_PRODUCTS} shopInfo={SHOP_INFO} initialProduct={selectedProduct} />
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {MOCK_PRODUCTS.map(p => <ProductCard key={p.id} product={p} onSelect={handleProductAdvice} />)}
                </div>
              )}
            </AnimatePresence>
          </div>
          <div className="lg:col-span-4 space-y-8">
            <PolicyViewer shopInfo={SHOP_INFO} />
          </div>
        </main>
      </div>
    </div>
  );
}