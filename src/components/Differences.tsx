import React from 'react';
import { Flame, Clock, HeartHandshake, Wheat } from 'lucide-react';
import { DIFFERENTIALS } from '../data/bakeryData';
import { ScrollReveal } from './ScrollReveal';

export const Differences: React.FC = () => {
  const icons = [Flame, Clock, Wheat, HeartHandshake];

  return (
    <section id="diferenciais" className="py-20 lg:py-28 bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal animation="fade-up">
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#b45309] mb-3">
              <span>Nossa Filosofia</span>
              <span aria-hidden="true">·</span>
              <span>Por que a Bom Jesus é Especial</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1c140d] leading-tight" style={{ textWrap: 'balance' }}>
              O segredo não é pressa: é respeito ao ponto da massa e aos ingredientes
            </h2>
          </div>
        </ScrollReveal>

        {/* Asymmetric Bento-Grid Layout with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {DIFFERENTIALS.map((diff, index) => {
            const Icon = icons[index % icons.length];

            return (
              <ScrollReveal
                key={diff.title}
                animation="fade-up"
                delay={index * 130}
                className={`rounded-2xl flex flex-col ${
                  index === 0
                    ? 'lg:col-span-7'
                    : index === 1
                    ? 'lg:col-span-5'
                    : index === 2
                    ? 'lg:col-span-5'
                    : 'lg:col-span-7'
                }`}
              >
                <div
                  className={`p-8 rounded-2xl border transition-all duration-300 flex flex-col justify-between h-full ${
                    index === 0
                      ? 'bg-[#1c140d] text-[#faf8f5] border-[#1c140d] shadow-sm'
                      : index === 1
                      ? 'bg-[#f4eee5] text-[#231812] border-[#231812]/10'
                      : index === 2
                      ? 'bg-[#f4eee5] text-[#231812] border-[#231812]/10'
                      : 'bg-[#fbf5ee] text-[#231812] border-[#231812]/10'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-8">
                      <div
                        className={`w-11 h-11 rounded-lg flex items-center justify-center ${
                          index === 0
                            ? 'bg-[#d97706] text-white'
                            : 'bg-[#1c140d] text-[#faf8f5]'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`text-xs font-semibold tracking-wider uppercase ${
                          index === 0 ? 'text-amber-300/80' : 'text-[#856b59]'
                        }`}
                      >
                        0{index + 1}. {diff.label}
                      </span>
                    </div>

                    <h3
                      className={`font-serif text-xl sm:text-2xl font-bold tracking-tight mb-3 ${
                        index === 0 ? 'text-white' : 'text-[#1c140d]'
                      }`}
                    >
                      {diff.title}
                    </h3>

                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        index === 0 ? 'text-white/80' : 'text-[#5a483c]'
                      }`}
                    >
                      {diff.description}
                    </p>
                  </div>

                  <div
                    className={`mt-8 pt-4 border-t text-xs font-medium ${
                      index === 0
                        ? 'border-white/15 text-amber-200/90'
                        : 'border-[#231812]/10 text-[#715d50]'
                    }`}
                  >
                    Garantia diária da Padaria Bom Jesus
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
