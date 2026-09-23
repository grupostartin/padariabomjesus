import React, { useState, useEffect } from 'react';
import { MessageCircle, MapPin, ShoppingBag } from 'lucide-react';

interface StickyBottomBarProps {
  onOpenOrderModal: () => void;
  selectedItemsCount: number;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({
  onOpenOrderModal,
  selectedItemsCount,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Ações rápidas da Padaria Bom Jesus"
      className="fixed bottom-0 left-0 right-0 z-30 p-2 sm:p-3 bg-[#1c140d]/95 backdrop-blur-md border-t border-white/10 shadow-2xl transition-all duration-300 max-h-[62px]"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 px-2 sm:px-4">
        {/* Left: Quick bakery indicator */}
        <div className="hidden sm:flex items-center gap-2 text-xs text-white/80">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span className="font-serif font-semibold text-white">Padaria Bom Jesus</span>
          <span className="text-white/40">·</span>
          <span>Rua Paranaíba, 291</span>
        </div>

        {/* Right: Quick CTA buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
          <a
            href="#localizacao"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer"
          >
            <MapPin className="w-3.5 h-3.5 text-amber-300" />
            <span>Como Chegar</span>
          </a>

          <button
            onClick={onOpenOrderModal}
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#25d366] hover:bg-[#20bd5a] text-white text-xs font-bold transition-all shadow-sm whitespace-nowrap cursor-pointer"
          >
            {selectedItemsCount > 0 ? (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Pedido ({selectedItemsCount})</span>
              </>
            ) : (
              <>
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Pedir no WhatsApp</span>
              </>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};
