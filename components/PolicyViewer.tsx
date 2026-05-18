import React from 'react';
import { Truck, RotateCcw } from 'lucide-react';
import { ShopInfo } from '../types';

export const PolicyViewer = ({ shopInfo }: { shopInfo: ShopInfo }) => (
  <div className="space-y-3">
    <div className="p-4 bg-white rounded-2xl border flex gap-4">
      <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 shrink-0">
        <Truck size={20} />
      </div>
      <div>
        <p className="text-[10px] uppercase font-bold text-slate-400">Vận chuyển</p>
        <p className="text-xs font-semibold text-slate-700">{shopInfo.policies.shipping}</p>
      </div>
    </div>
    <div className="p-4 bg-white rounded-2xl border flex gap-4">
      <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 shrink-0">
        <RotateCcw size={20} />
      </div>
      <div>
        <p className="text-[10px] uppercase font-bold text-slate-400">Đổi trả</p>
        <p className="text-xs font-semibold text-slate-700">{shopInfo.policies.exchange}</p>
      </div>
    </div>
  </div>
);