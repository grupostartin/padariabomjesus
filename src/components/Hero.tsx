import React, { useRef, useState, useEffect } from 'react';
import { MessageCircle, MapPin, Volume2, VolumeX, Play, Pause, Clock, Sparkles } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';
import heroBg from '../assets/images/hero_bakery_fallback_1790180421752.jpg';
import { ScrollReveal } from './ScrollReveal';

interface HeroProps {
  onOpenOrderModal: () => void;
  isOpenNow: boolean;
  currentStatusText: string;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal, isOpenNow, currentStatusText }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Verified royalty-free artisanal bread dough kneading video
  const BREAD_DOUGH_VIDEO = 'https://assets.mixkit.co/videos/42467/42467-720.mp4';

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section id="hero" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-[#1c140d]">
      {/* Background Poster / Fallback Image with Bread Focus */}
      <img
        src={heroBg}
        alt="Pães artesanais recém-saídos do forno na Padaria Bom Jesus"
        referrerPolicy="no-referrer"
        className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${
          videoLoaded ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* Fullscreen Background Video (Massa Artesanal) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        poster={heroBg}
        onLoadedData={() => setVideoLoaded(true)}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      >
        <source src={BREAD_DOUGH_VIDEO} type="video/mp4" />
      </video>

      {/* Atmospheric Scrim: completely clear at the very top for the transparent navbar */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1c140d]/55 to-[#1c140d] pointer-events-none" />
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Content Container with Scroll Reveal */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Subtle Live Status Indicator */}
        <ScrollReveal animation="fade-down" delay={100}>
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-[#fbf5ee] tracking-wide mb-6">
            <span className={`inline-block w-2 h-2 rounded-full ${isOpenNow ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
            <span className="text-amber-200/95 uppercase tracking-wider text-xs font-semibold">Belo Horizonte</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span>{currentStatusText}</span>
            <span aria-hidden="true" className="text-white/40">·</span>
            <span className="hidden sm:inline text-white/80">Fornadas quentinhas o dia todo</span>
          </div>
        </ScrollReveal>

        {/* Marquee Headline */}
        <ScrollReveal animation="fade-up" delay={200}>
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6 max-w-4xl mx-auto" style={{ textWrap: 'balance' }}>
            A tradição do pão artesanal no coração do Bom Jesus
          </h1>
        </ScrollReveal>

        {/* Narrative Prose */}
        <ScrollReveal animation="fade-up" delay={300}>
          <p className="text-base sm:text-xl text-white/90 font-normal leading-relaxed max-w-2xl mx-auto mb-10" style={{ textWrap: 'balance' }}>
            Pão francês estaladiço com fornadas constantes, quitutes frescos, bolo caseiro quentinho e o melhor café coado de Minas.
          </p>
        </ScrollReveal>

        {/* Primary Action Zone */}
        <ScrollReveal animation="fade-up" delay={400}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <button
              onClick={onOpenOrderModal}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-[#d97706] hover:bg-[#b45309] text-white text-sm font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Fazer Pedido via WhatsApp</span>
            </button>

            <a
              href="#localizacao"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/15 hover:bg-white/25 backdrop-blur-md text-white text-sm font-semibold rounded-lg border border-white/20 transition-all cursor-pointer whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 text-amber-300" />
              <span>Como Chegar</span>
            </a>
          </div>
        </ScrollReveal>

        {/* Address Kicker */}
        <ScrollReveal animation="fade-up" delay={500}>
          <div className="mt-8 flex items-center justify-center gap-2 text-xs sm:text-sm text-white/70">
            <MapPin className="w-3.5 h-3.5 text-amber-300 shrink-0" />
            <span>Rua Paranaíba, 291 — Bairro Bom Jesus, Belo Horizonte/MG</span>
          </div>
        </ScrollReveal>
      </div>

      {/* Minimal Playback Controls */}
      <div className="absolute bottom-16 right-4 sm:right-6 z-20 flex items-center gap-1.5 bg-black/50 backdrop-blur-md border border-white/15 rounded-lg p-1.5 text-white/90 text-xs shadow-lg">
        <button
          onClick={togglePlay}
          className="p-1 hover:text-white rounded transition-colors cursor-pointer"
          title={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
          aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>
        <button
          onClick={toggleMute}
          className="p-1 hover:text-white rounded transition-colors cursor-pointer"
          title={isMuted ? 'Ativar som' : 'Silenciar'}
          aria-label={isMuted ? 'Ativar som' : 'Silenciar'}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
        </button>
      </div>

      {/* Quick Trust Strip at bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/10 bg-black/40 backdrop-blur-sm hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-medium text-white/80 text-center">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Fornadas constantes</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>Abre às 06:00 todos os dias</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
              <span>Pão de queijo quentinho</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
              <span>Estacionamento fácil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
