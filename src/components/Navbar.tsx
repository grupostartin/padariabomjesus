import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { BAKERY_INFO } from '../data/bakeryData';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf8f5]/95 backdrop-blur-md border-b border-[#231812]/10 shadow-xs py-3.5'
          : 'bg-transparent py-5 sm:py-6 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className={`font-serif text-xl sm:text-2xl font-bold tracking-tight transition-colors ${
              isScrolled ? 'text-[#1c140d]' : 'text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]'
            }`}
          >
            {BAKERY_INFO.name}
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`transition-colors relative py-1 hover:opacity-100 ${
                  isScrolled
                    ? 'text-[#524338] hover:text-[#1c140d]'
                    : 'text-white/95 hover:text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenOrderModal}
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-md transition-all whitespace-nowrap shadow-sm cursor-pointer ${
                isScrolled
                  ? 'bg-[#1c140d] text-[#faf8f5] hover:bg-[#2d2116]'
                  : 'bg-[#d97706] hover:bg-[#b45309] text-white shadow-md hover:shadow-lg'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Pedir no WhatsApp</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-[#d97706] ${
                isScrolled
                  ? 'text-[#1c140d] hover:bg-[#ece4d8]'
                  : 'text-white hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
              }`}
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#faf8f5] border-b border-[#231812]/10 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#231812] hover:bg-[#f2ece2] rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 border-t border-[#231812]/10">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#d97706] text-white text-sm font-semibold rounded-md hover:bg-[#b45309] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Fazer Pedido via WhatsApp</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
