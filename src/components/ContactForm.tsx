import React, { useState } from 'react';
import { MessageCircle, Phone, Instagram, Send, Mail, CheckCircle2 } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';
import { ScrollReveal } from './ScrollReveal';

interface ContactFormProps {
  onOpenOrderModal: () => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ onOpenOrderModal }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [interest, setInterest] = useState('encomenda');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    // Build pre-filled WhatsApp message
    const interestLabelMap: Record<string, string> = {
      encomenda: 'Encomenda de Pães/Bolos/Quitutes',
      coffeebreak: 'Coffee Break / Evento Corporativo',
      festas: 'Kit Festa & Salgados',
      duvidas: 'Dúvidas Gerais / Outros',
    };

    const text = `Olá, Padaria Bom Jesus! Meu nome é ${name}.
Gostaria de falar sobre: ${interestLabelMap[interest] || interest}.
${phone ? `Meu WhatsApp: ${phone}` : ''}
${message ? `Mensagem: ${message}` : ''}`.trim();

    const encoded = encodeURIComponent(text);
    const waUrl = `https://wa.me/${BAKERY_INFO.whatsappClean}?text=${encoded}`;

    setSubmitted(true);

    // Open WhatsApp in new window
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" className="py-20 lg:py-28 bg-[#f4eee5] border-t border-[#231812]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Contact Direct Info */}
          <ScrollReveal animation="fade-right" className="lg:col-span-6 space-y-8">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b45309] mb-3">
                <span>Fale Conosco</span>
                <span aria-hidden="true">·</span>
                <span>Atendimento Rápido</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c140d] leading-tight" style={{ textWrap: 'balance' }}>
                Pronto para saborear o verdadeiro pão artesanal?
              </h2>
              <p className="mt-4 text-base sm:text-lg text-[#5a483c] leading-relaxed">
                Entre em contato conosco pelo WhatsApp para tirar dúvidas, saber o que está saindo do forno agora ou agendar encomendas especiais para sua casa ou empresa.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              {/* WhatsApp Highlight */}
              <a
                href={`https://wa.me/${BAKERY_INFO.whatsappClean}?text=${encodeURIComponent('Olá! Gostaria de saber as novidades e fazer um pedido na Padaria Bom Jesus.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-5 bg-[#1c140d] text-[#faf8f5] rounded-xl hover:bg-[#2d2116] transition-colors shadow-xs group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#25d366] text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-amber-200/90 font-medium">Atendimento Rápido</div>
                    <div className="text-base font-semibold">{BAKERY_INFO.whatsapp}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-white/75 group-hover:text-white group-hover:translate-x-1 transition-all">
                  Conversar agora &rarr;
                </span>
              </a>

              {/* Telephone */}
              <a
                href={`tel:${BAKERY_INFO.phoneClean}`}
                className="flex items-center justify-between p-4 bg-[#faf8f5] rounded-xl border border-[#231812]/10 hover:border-[#231812]/20 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#f4eee5] text-[#1c140d] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#715d50]">Telefone Fixo Balcão</div>
                    <div className="text-sm font-semibold text-[#1c140d]">{BAKERY_INFO.phone}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#b45309] group-hover:underline">
                  Ligar
                </span>
              </a>

              {/* Instagram */}
              <a
                href={BAKERY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 bg-[#faf8f5] rounded-xl border border-[#231812]/10 hover:border-[#231812]/20 transition-colors group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-[#f4eee5] text-[#e1306c] flex items-center justify-center shrink-0">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-[#715d50]">Instagram Oficial</div>
                    <div className="text-sm font-semibold text-[#1c140d]">{BAKERY_INFO.instagram}</div>
                  </div>
                </div>
                <span className="text-xs font-semibold text-[#b45309] group-hover:underline">
                  Seguir
                </span>
              </a>
            </div>
          </ScrollReveal>

          {/* Quick Inquiry Form */}
          <ScrollReveal animation="fade-left" delay={150} className="lg:col-span-6 bg-[#faf8f5] rounded-2xl p-6 sm:p-8 border border-[#231812]/10 shadow-xs">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1c140d] mb-2">
              Envie uma Mensagem Direta
            </h3>
            <p className="text-xs sm:text-sm text-[#5a483c] mb-6">
              Preencha os dados e entraremos em contato diretamente com você pelo WhatsApp.
            </p>

            {submitted ? (
              <div className="p-6 bg-[#f4eee5] rounded-xl border border-[#231812]/10 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-serif text-lg font-bold text-[#1c140d]">
                  Mensagem encaminhada ao WhatsApp!
                </h4>
                <p className="text-xs text-[#5a483c] leading-relaxed">
                  Caso a janela não tenha aberto automaticamente, clique no botão abaixo para iniciar a conversa.
                </p>
                <button
                  onClick={onOpenOrderModal}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#d97706] text-white text-xs font-semibold rounded-lg hover:bg-[#b45309] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Abrir no WhatsApp</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-[#1c140d] mb-1">
                    Seu Nome *
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Como podemos te chamar?"
                    className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-[#231812]/15 text-sm text-[#1c140d] placeholder:text-[#a8998c] focus:border-[#d97706] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-[#1c140d] mb-1">
                    Seu WhatsApp / Telefone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(31) 99999-9999"
                    className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-[#231812]/15 text-sm text-[#1c140d] placeholder:text-[#a8998c] focus:border-[#d97706] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label htmlFor="interest" className="block text-xs font-semibold text-[#1c140d] mb-1">
                    Assunto de Interesse
                  </label>
                  <select
                    id="interest"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-[#231812]/15 text-sm text-[#1c140d] focus:border-[#d97706] focus:outline-hidden"
                  >
                    <option value="encomenda">Encomenda de Pães e Bolos</option>
                    <option value="coffeebreak">Coffee Break & Empresas</option>
                    <option value="festas">Kit Festa & Salgados</option>
                    <option value="duvidas">Dúvidas sobre Cardápio e Horários</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-[#1c140d] mb-1">
                    Mensagem ou Detalhes
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Conte para a gente o que você procura..."
                    className="w-full px-3.5 py-2.5 bg-white rounded-lg border border-[#231812]/15 text-sm text-[#1c140d] placeholder:text-[#a8998c] focus:border-[#d97706] focus:outline-hidden resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#d97706] hover:bg-[#b45309] text-white text-sm font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensagem pelo WhatsApp</span>
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
