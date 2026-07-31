import React from 'react';
import { MessageSquare } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const handleClick = () => {
    const text = encodeURIComponent('Hello HAVEST PROPERTIES, I would like to inquire about luxury property listings & off-plan projects in the UAE.');
    window.open(`https://wa.me/971505002896?text=${text}`, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      id="floating-whatsapp-btn"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl shadow-emerald-950/60 transition-all hover:scale-105 active:scale-95 border border-emerald-400/40"
      aria-label="Chat on WhatsApp"
    >
      <div className="relative">
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-300 rounded-full animate-ping" />
      </div>
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold uppercase tracking-wider pr-1">
        VIP Advisory (+971 50 500 2896)
      </span>
    </button>
  );
};
