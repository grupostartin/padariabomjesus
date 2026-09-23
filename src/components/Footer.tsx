import React from 'react';
import { Instagram, MessageCircle, MapPin, Phone } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1c140d] text-[#faf8f5] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <ScrollReveal animation="fade-up" delay={50} className="lg:col-span-4 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-white block">
              {BAKERY_INFO.name}
            </span>
            <p className="text-sm text-white/75 leading-relaxed max-w-sm">
              Tradição artesanal, fornadas constantes e o calor do pão quentinho no Bairro Bom Jesus em Belo Horizonte.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <a
                href={BAKERY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                aria-label="Instagram da Padaria Bom Jesus"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BAKERY_INFO.whatsappClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-[#25d366]/20 hover:bg-[#25d366]/30 flex items-center justify-center text-[#25d366] transition-colors"
                aria-label="WhatsApp da Padaria Bom Jesus"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </ScrollReveal>

          {/* Nav Quick Links */}
          <ScrollReveal animation="fade-up" delay={150} className="lg:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block">
              Navegação
            </span>
            <ul className="space-y-2 text-sm text-white/75">
              <li>
                <a href="#sobre" className="hover:text-white transition-colors">
                  Sobre a Padaria
                </a>
              </li>
              <li>
                <a href="#cardapio" className="hover:text-white transition-colors">
                  Vitrine & Quitutes
                </a>
              </li>
              <li>
                <a href="#diferenciais" className="hover:text-white transition-colors">
                  Nossos Diferenciais
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-white transition-colors">
                  Localização & Como Chegar
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-white transition-colors">
                  Fale Conosco & Encomendas
                </a>
              </li>
            </ul>
          </ScrollReveal>

          {/* Contact & Location Col */}
          <ScrollReveal animation="fade-up" delay={250} className="lg:col-span-5 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-amber-300 block">
              Visite a Nossa Loja
            </span>
            <div className="space-y-2.5 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BAKERY_INFO.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{BAKERY_INFO.phone} · WhatsApp: {BAKERY_INFO.whatsapp}</span>
              </div>
              <div className="pt-2 text-xs text-white/60">
                Segunda a Sexta: 06:00 – 20:30 · Sábado: 06:00 – 20:00 · Domingo: 06:30 – 13:30
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Quiet Bottom Copyright */}
        <ScrollReveal animation="fade" delay={300}>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4">
            <div>
              &copy; {new Date().getFullYear()} {BAKERY_INFO.name}. Todos os direitos reservados.
            </div>
            <div className="flex items-center gap-4">
              <span>Rua Paranaíba, 291 — Bom Jesus — Belo Horizonte/MG</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};
