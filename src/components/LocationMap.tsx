import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, ExternalLink, Car } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';
import { ScrollReveal } from './ScrollReveal';

export const LocationMap: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BAKERY_INFO.fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Google Maps embed URL centered on Rua Paranaíba 291, Bom Jesus, Belo Horizonte
  const mapEmbedUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3751.464765365516!2d-43.95551982400037!3d-19.89736808148281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa69055eb7c0e53%3A0x6e9f592186835158!2sR.+Parana%C3%ADba%2C+291+-+Bom+Jesus%2C+Belo+Horizonte+-+MG%2C+31230-150!5e0!3m2!1spt-BR!2sbr!4v1710000000000!5m2!1spt-BR!2sbr`;

  return (
    <section id="localizacao" className="py-20 lg:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b45309] mb-3">
              <span>Localização & Acesso</span>
              <span aria-hidden="true">·</span>
              <span>Venha nos Visitar</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c140d] leading-tight" style={{ textWrap: 'balance' }}>
              Fácil de chegar, no coração do Bairro Bom Jesus em BH
            </h2>
            <p className="mt-3 text-base text-[#5a483c] leading-relaxed">
              Localizada em uma rua tranquila e acessível, com facilidade para estacionar e parada rápida para levar o pão quentinho.
            </p>
          </div>
        </ScrollReveal>

        {/* Location & Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Address Details Card */}
          <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-5 bg-[#f4eee5] rounded-2xl p-6 sm:p-8 border border-[#231812]/10 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#1c140d] text-white flex items-center justify-center mb-6">
                <MapPin className="w-5 h-5 text-amber-400" />
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#1c140d] mb-3">
                Padaria Bom Jesus
              </h3>

              <div className="space-y-2 text-sm sm:text-base text-[#4a3b32] mb-6">
                <p className="font-semibold text-[#1c140d]">
                  {BAKERY_INFO.shortAddress}
                </p>
                <p>{BAKERY_INFO.cityState} — CEP {BAKERY_INFO.cep}</p>
                <p className="text-xs text-[#715d50]">Região Noroeste de Belo Horizonte</p>
              </div>

              {/* Reference Points */}
              <div className="p-4 bg-[#faf8f5] rounded-xl border border-[#231812]/8 text-xs text-[#5a483c] space-y-2 mb-8">
                <div className="flex items-center gap-2 text-[#1c140d] font-semibold">
                  <Car className="w-4 h-4 text-[#b45309]" />
                  <span>Pontos de Referência & Acesso</span>
                </div>
                <p>
                  • A poucos minutos da <strong>Av. Américo Vespúcio</strong> e da <strong>Av. Presidente Carlos Luz</strong> (Catalão).
                </p>
                <p>
                  • Fácil acesso a partir da região da UFMG, Caiçara e Bonfim.
                </p>
                <p>
                  • Estacionamento rápido em frente e nas vias laterais tranquilas.
                </p>
              </div>
            </div>

            {/* Navigation CTAs */}
            <div className="space-y-3 pt-6 border-t border-[#231812]/10">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={BAKERY_INFO.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1c140d] text-white text-xs font-semibold rounded-lg hover:bg-[#2d2116] transition-colors whitespace-nowrap"
                >
                  <Navigation className="w-3.5 h-3.5 text-amber-400" />
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={BAKERY_INFO.wazeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-white text-[#1c140d] border border-[#231812]/15 text-xs font-semibold rounded-lg hover:bg-[#faf8f5] transition-colors whitespace-nowrap"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#0284c7]" />
                  <span>Waze</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>

              <button
                onClick={handleCopyAddress}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-[#5a483c] hover:text-[#1c140d] bg-transparent hover:bg-white/60 rounded-md transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-semibold">Endereço copiado para a área de transferência!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copiar endereço completo</span>
                  </>
                )}
              </button>
            </div>
          </ScrollReveal>

          {/* Interactive Google Maps Embed with Lazy Loading */}
          <ScrollReveal animation="fade-left" delay={200} className="lg:col-span-7 rounded-2xl overflow-hidden border border-[#231812]/10 shadow-xs min-h-[380px] lg:min-h-[460px] bg-[#e8decb] relative">
            <iframe
              title="Mapa de localização da Padaria Bom Jesus em Belo Horizonte"
              src={mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full min-h-[380px] lg:min-h-[460px]"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
