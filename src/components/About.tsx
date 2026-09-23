import React from 'react';
import artisanBreadImg from '../assets/images/artisan_bread_selection_1790180435201.jpg';
import coffeeImg from '../assets/images/specialty_coffee_barista_1790180470120.jpg';
import { ScrollReveal } from './ScrollReveal';
import { LazyImage } from './LazyImage';

export const About: React.FC = () => {
  return (
    <section id="sobre" className="py-20 lg:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b45309] mb-3">
              <span>História & Identidade</span>
              <span aria-hidden="true">·</span>
              <span>Desde o Coração de BH</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c140d] leading-tight" style={{ textWrap: 'balance' }}>
              Onde o tempo do pão respeita a memória e o calor da vizinhança
            </h2>
          </div>
        </ScrollReveal>

        {/* 2-Column Story Grid with Photography */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <ScrollReveal animation="fade-right" delay={100} className="lg:col-span-6 space-y-6 text-[#4a3b32] text-base sm:text-lg leading-relaxed">
            <p>
              A <strong className="text-[#1c140d] font-semibold">Padaria Bom Jesus</strong> nasceu com uma missão simples e generosa: resgatar a essência da verdadeira padaria de bairro. Um lugar onde o padeiro conhece cada cliente pelo nome e o aroma de massa assando anuncia o início de um novo dia na <strong className="text-[#1c140d] font-semibold">Rua Paranaíba</strong>.
            </p>
            <p>
              Aqui não existem atalhos industriais. Nossos pães artesanais são preparados diariamente com cuidado e dedicação, garantindo sabor autêntico, miolo macio e casca dourada estaladiça. Com fornadas constantes ao longo do dia, você encontra o pão sempre quentinho e estalando.
            </p>
            <p>
              E porque estamos em Belo Horizonte, o afeto mineiro dita cada receita: o autêntico pão de queijo quentinho da casa, o café especial coado na hora e o bolo de cenoura ainda morno com farta calda de chocolate.
            </p>
          </ScrollReveal>

          {/* Photographic Narrative */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <ScrollReveal animation="fade-up" delay={200} className="space-y-4">
              <div className="overflow-hidden rounded-xl border border-[#231812]/10 bg-[#f4eee5] shadow-sm aspect-4/3">
                <LazyImage
                  src={artisanBreadImg}
                  alt="Pães artesanais e pão francês fresquinho na Padaria Bom Jesus"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
                />
              </div>
              <div className="p-4 bg-[#f4eee5] rounded-xl border border-[#231812]/10 text-xs text-[#5a483c] leading-relaxed">
                <strong className="block text-[#1c140d] font-semibold mb-1">Fornadas Constantes</strong>
                Pães saindo quentinhos do forno durante todo o dia, com aroma irresistível e casca crocante.
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={350} className="space-y-4 pt-6">
              <div className="p-4 bg-[#1c140d] text-[#faf8f5] rounded-xl text-xs leading-relaxed">
                <strong className="block text-[#fbf5ee] font-serif text-sm mb-1">Café & Afeto Mineiro</strong>
                Grãos selecionados do sul de Minas Gerais, moídos na hora e coados no pano na sua mesa.
              </div>
              <div className="overflow-hidden rounded-xl border border-[#231812]/10 bg-[#f4eee5] shadow-sm aspect-4/3">
                <LazyImage
                  src={coffeeImg}
                  alt="Café coado de Minas e pão de queijo quentinho recém assado"
                  className="w-full h-full object-cover object-center hover:scale-103 transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
