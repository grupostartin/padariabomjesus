import React, { useState } from 'react';
import { X, MessageCircle, Plus, Minus, Trash2, Send, ShoppingBag } from 'lucide-react';
import { BAKERY_INFO, MENU_HIGHLIGHTS, MenuItem } from '../data/bakeryData';

interface OrderItem {
  item: MenuItem;
  quantity: number;
}

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  orderItems: OrderItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemoveItem: (itemId: string) => void;
  onClearOrder: () => void;
  onAddItem: (item: MenuItem) => void;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({
  isOpen,
  onClose,
  orderItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearOrder,
  onAddItem,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [orderType, setOrderType] = useState<'balcao' | 'encomenda'>('balcao');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleSendToWhatsApp = () => {
    let message = `Olá, Padaria Bom Jesus! Gostaria de fazer um pedido.\n`;

    if (customerName.trim()) {
      message += `Nome: ${customerName.trim()}\n`;
    }

    message += `Tipo: ${orderType === 'balcao' ? 'Retirada rápida no balcão' : 'Encomenda agendada'}\n\n`;

    if (orderItems.length > 0) {
      message += `*Itens selecionados:*\n`;
      orderItems.forEach(({ item, quantity }) => {
        message += `• ${quantity}x ${item.name} (${item.highlights || 'Artesanal'})\n`;
      });
      message += `\n`;
    }

    if (notes.trim()) {
      message += `Observações: ${notes.trim()}\n`;
    }

    message += `Poderiam confirmar a disponibilidade e o valor total? Obrigado!`;

    const encoded = encodeURIComponent(message);
    const waUrl = `https://wa.me/${BAKERY_INFO.whatsappClean}?text=${encoded}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-[#faf8f5] rounded-2xl border border-[#231812]/15 shadow-2xl max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden text-[#1c140d]"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="p-5 border-b border-[#231812]/10 flex items-center justify-between bg-[#f4eee5]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#25d366] text-white flex items-center justify-center">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-[#1c140d]">
                Pedido via WhatsApp
              </h3>
              <p className="text-xs text-[#715d50]">Padaria Bom Jesus — Atendimento Direto</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-black/5 text-[#5a483c] transition-colors"
            aria-label="Fechar janela"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-5 overflow-y-auto space-y-5 flex-1">
          {/* Customer Name & Option */}
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-semibold text-[#1c140d] mb-1">
                Seu Nome (opcional)
              </label>
              <input
                type="text"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Ex: Ana Clara"
                className="w-full px-3.5 py-2 bg-white rounded-lg border border-[#231812]/15 text-sm text-[#1c140d] focus:border-[#d97706] focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#1c140d] mb-1">
                Modalidade de Retirada
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setOrderType('balcao')}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                    orderType === 'balcao'
                      ? 'bg-[#1c140d] text-white border-[#1c140d]'
                      : 'bg-white text-[#5a483c] border-[#231812]/15 hover:bg-[#faf8f5]'
                  }`}
                >
                  Retirada no Balcão
                </button>
                <button
                  type="button"
                  onClick={() => setOrderType('encomenda')}
                  className={`px-3 py-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                    orderType === 'encomenda'
                      ? 'bg-[#1c140d] text-white border-[#1c140d]'
                      : 'bg-white text-[#5a483c] border-[#231812]/15 hover:bg-[#faf8f5]'
                  }`}
                >
                  Encomenda / Agendamento
                </button>
              </div>
            </div>
          </div>

          {/* Selected Items List */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-[#1c140d] uppercase tracking-wider">
                Itens no Pedido ({orderItems.reduce((acc, curr) => acc + curr.quantity, 0)})
              </span>
              {orderItems.length > 0 && (
                <button
                  onClick={onClearOrder}
                  className="text-xs text-[#b45309] hover:underline"
                >
                  Limpar lista
                </button>
              )}
            </div>

            {orderItems.length === 0 ? (
              <div className="p-4 bg-white rounded-xl border border-dashed border-[#231812]/20 text-center text-xs text-[#715d50] space-y-2">
                <ShoppingBag className="w-5 h-5 mx-auto text-[#a8998c]" />
                <p>Nenhum item adicionado ainda. Você pode escolher itens rápidos abaixo ou enviar uma mensagem livre!</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                {orderItems.map(({ item, quantity }) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between p-2.5 bg-white rounded-lg border border-[#231812]/10 text-xs"
                  >
                    <div className="flex-1 pr-2 min-w-0">
                      <div className="font-semibold text-[#1c140d] truncate">{item.name}</div>
                      <div className="text-[11px] text-[#715d50]">{item.highlights}</div>
                    </div>

                    <div className="flex items-center gap-1.5 shrink-0">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded bg-[#f4eee5] hover:bg-[#e8decb] flex items-center justify-center text-[#1c140d]"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center font-mono font-semibold tabular-nums">
                        {quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded bg-[#f4eee5] hover:bg-[#e8decb] flex items-center justify-center text-[#1c140d]"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1 text-red-600 hover:text-red-700 ml-1"
                        title="Remover"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Quick Item Picker shortcuts */}
          <div>
            <span className="block text-xs font-semibold text-[#715d50] mb-2">
              Adicionar sugestões rápidas da padaria:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {MENU_HIGHLIGHTS.slice(0, 6).map((item) => (
                <button
                  key={item.id}
                  onClick={() => onAddItem(item)}
                  className="px-2.5 py-1 bg-white hover:bg-[#f4eee5] border border-[#231812]/10 rounded-md text-[11px] text-[#4a3b32] font-medium transition-colors cursor-pointer"
                >
                  + {item.name.split(' ')[0]} {item.name.split(' ')[1] || ''}
                </button>
              ))}
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="block text-xs font-semibold text-[#1c140d] mb-1">
              Observações ou dúvidas
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Ex: Quero 1kg de pão de queijo congelado / saber se o bolo de cenoura ainda está quente..."
              className="w-full px-3.5 py-2 bg-white rounded-lg border border-[#231812]/15 text-xs text-[#1c140d] focus:border-[#d97706] focus:outline-hidden resize-none"
            />
          </div>
        </div>

        {/* Footer CTA */}
        <div className="p-4 bg-[#f4eee5] border-t border-[#231812]/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-[11px] text-[#715d50] text-center sm:text-left">
            O WhatsApp abrirá com o texto pronto para enviar.
          </div>

          <button
            onClick={handleSendToWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#25d366] hover:bg-[#20bd5a] text-white text-xs font-bold rounded-lg shadow-sm transition-colors cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Enviar pelo WhatsApp</span>
          </button>
        </div>
      </div>
    </div>
  );
};
