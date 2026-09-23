import React, { useState } from 'react';
import { Plus, Check, MessageCircle, ArrowRight } from 'lucide-react';
import { MENU_HIGHLIGHTS, MenuItem } from '../data/bakeryData';
import { ScrollReveal } from './ScrollReveal';

interface MenuHighlightsProps {
  onSelectItemForOrder: (item: MenuItem) => void;
  onOpenOrderModal: () => void;
  selectedItemsCount: number;
}

export const MenuHighlights: React.FC<MenuHighlightsProps> = ({
  onSelectItemForOrder,
  onOpenOrderModal,
  selectedItemsCount,
}) => {
  const [activeCategory, setActiveCategory] = useState<'todos' | 'paes' | 'confeitaria' | 'salgados' | 'cafes'>('todos');
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const categories = [
    { id: 'todos', label: 'Todos os Destaques' },
    { id: 'paes', label: 'Pães Tradicionais' },
    { id: 'confeitaria', label: 'Bolos & Doces' },
    { id: 'salgados', label: 'Salgados & Quiches' },
    { id: 'cafes', label: 'Cafés Especiais' },
  ] as const;

  const filteredItems = activeCategory === 'todos'
    ? MENU_HIGHLIGHTS
    : MENU_HIGHLIGHTS.filter((item) => item.category === activeCategory);

  const handleAddItem = (item: MenuItem) => {
    onSelectItemForOrder(item);
    setAddedItemIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1500);
  };

  return (
    <section id="cardapio" className="py-20 lg:py-28 bg-[#f4eee5] border-y border-[#231812]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b45309] mb-3">
                <span>Produção Diária & Quitutes</span>
                <span aria-hidden="true">·</span>
                <span>Artesanal</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c140d]" style={{ textWrap: 'balance' }}>
                Destaques frescos da nossa vitrine
              </h2>
              <p className="mt-3 text-base text-[#5a483c] leading-relaxed">
                Produzidos todos os dias com ingredientes nobres, forno sempre ativo e receitas de família.
              </p>
            </div>

            {/* Quick WhatsApp Order Floating Button when items selected */}
            {selectedItemsCount > 0 ? (
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#1c140d] text-white text-xs font-semibold rounded-lg shadow-md hover:bg-[#2e2015] transition-colors cursor-pointer self-start md:self-auto shrink-0"
              >
                <MessageCircle className="w-4 h-4 text-amber-400" />
                <span>Ver Pedido WhatsApp ({selectedItemsCount})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                onClick={onOpenOrderModal}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#1c140d] border border-[#231812]/15 text-xs font-semibold rounded-lg hover:bg-[#faf8f5] transition-colors cursor-pointer self-start md:self-auto shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#d97706]" />
                <span>Montar Pedido no WhatsApp</span>
              </button>
            )}
          </div>
        </ScrollReveal>

        {/* Category Filters */}
        <ScrollReveal animation="fade-up" delay={100}>
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#1c140d] text-[#faf8f5] shadow-xs'
                    : 'bg-white/80 text-[#5a483c] hover:text-[#1c140d] hover:bg-white border border-[#231812]/5'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Menu Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => {
            const isJustAdded = addedItemIds[item.id];

            return (
              <ScrollReveal animation="fade-up" delay={Math.min(index * 70, 250)} key={item.id}>
                <div
                  className="group flex flex-col bg-[#faf8f5] rounded-xl overflow-hidden border border-[#231812]/10 shadow-xs hover:shadow-md transition-all duration-300 h-full"
                >
                  {/* Image Container with Fallback */}
                  <div className="relative aspect-4/3 overflow-hidden bg-[#e8decb]">
                    <img
                      src={item.image}
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                    />
                    {item.highlights && (
                      <div className="absolute top-3 left-3 bg-[#1c140d]/85 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                        {item.highlights}
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1c140d] tracking-tight mb-2">
                        {item.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#5a483c] leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#231812]/8 flex items-center justify-between gap-3">
                      <span className="text-xs text-[#715d50] font-medium truncate">
                        {item.estimatedPriceNote || 'Sob consulta'}
                      </span>

                      <button
                        onClick={() => handleAddItem(item)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                          isJustAdded
                            ? 'bg-emerald-700 text-white'
                            : 'bg-[#f4eee5] hover:bg-[#1c140d] text-[#1c140d] hover:text-[#faf8f5] border border-[#231812]/10'
                        }`}
                        title="Adicionar ao pedido pré-preenchido do WhatsApp"
                      >
                        {isJustAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Adicionado!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Pedir no WhatsApp</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Menu Note */}
        <ScrollReveal animation="fade-up" delay={200}>
          <div className="mt-12 text-center p-6 bg-[#faf8f5] rounded-xl border border-[#231812]/10 max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-[#5a483c] leading-relaxed">
              <strong className="text-[#1c140d] font-semibold">Vai fazer encomenda para coffee break ou festa em família?</strong> Aceitamos encomendas de bolos inteiros, tortas, kits de salgados e pães artesanais para retirada ou entrega sob agendamento.
            </p>
            <button
              onClick={onOpenOrderModal}
              className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#b45309] hover:text-[#78350f] underline underline-offset-4 cursor-pointer"
            >
              <span>Conversar sobre encomenda personalizada no WhatsApp</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
