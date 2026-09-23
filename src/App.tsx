import React, { useState, useMemo, lazy, Suspense } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StickyBottomBar } from './components/StickyBottomBar';
import { WEEKLY_SCHEDULE, MenuItem } from './data/bakeryData';

// Lazy loading below-the-fold components for performance & instant initial load
const About = lazy(() => import('./components/About').then(m => ({ default: m.About })));
const Differences = lazy(() => import('./components/Differences').then(m => ({ default: m.Differences })));
const LocationMap = lazy(() => import('./components/LocationMap').then(m => ({ default: m.LocationMap })));
const ContactForm = lazy(() => import('./components/ContactForm').then(m => ({ default: m.ContactForm })));
const Footer = lazy(() => import('./components/Footer').then(m => ({ default: m.Footer })));
const WhatsAppModal = lazy(() => import('./components/WhatsAppModal').then(m => ({ default: m.WhatsAppModal })));

const SectionLoader = () => (
  <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-pulse">
    <div className="h-4 bg-[#e8decb]/40 rounded w-28 mb-3" />
    <div className="h-9 bg-[#e8decb]/50 rounded w-1/2 mb-8" />
    <div className="h-40 bg-[#e8decb]/30 rounded-2xl" />
  </div>
);

interface OrderItem {
  item: MenuItem;
  quantity: number;
}

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  // Compute live open/closed status based on current time
  const { isOpenNow, currentStatusText, currentDayIndex } = useMemo(() => {
    const now = new Date();
    const day = now.getDay(); // 0 is Sunday, 1-6 Mon-Sat
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const currentTotalMinutes = currentHour * 60 + currentMinute;

    const todaySchedule = WEEKLY_SCHEDULE.find((s) => s.dayIndex === day);

    if (!todaySchedule) {
      return {
        isOpenNow: true,
        currentStatusText: 'Aberto hoje',
        currentDayIndex: day,
      };
    }

    const openTotalMinutes = todaySchedule.openHour * 60 + todaySchedule.openMinute;
    const closeTotalMinutes = todaySchedule.closeHour * 60 + todaySchedule.closeMinute;

    const isOpen = currentTotalMinutes >= openTotalMinutes && currentTotalMinutes < closeTotalMinutes;

    let statusText = '';
    if (isOpen) {
      statusText = `Aberto agora · Fechamos às ${todaySchedule.closeTime}`;
    } else if (currentTotalMinutes < openTotalMinutes) {
      statusText = `Abre hoje às ${todaySchedule.openTime}`;
    } else {
      statusText = `Fechado no momento · Abrimos às 06:00`;
    }

    return {
      isOpenNow: isOpen,
      currentStatusText: statusText,
      currentDayIndex: day,
    };
  }, []);

  const handleAddItemForOrder = (item: MenuItem) => {
    setOrderItems((prev) => {
      const existing = prev.find((i) => i.item.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.item.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { item, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId: string, delta: number) => {
    setOrderItems((prev) =>
      prev
        .map((i) => {
          if (i.item.id === itemId) {
            const newQty = i.quantity + delta;
            return newQty > 0 ? { ...i, quantity: newQty } : null;
          }
          return i;
        })
        .filter(Boolean) as OrderItem[]
    );
  };

  const handleRemoveItem = (itemId: string) => {
    setOrderItems((prev) => prev.filter((i) => i.item.id !== itemId));
  };

  const handleClearOrder = () => {
    setOrderItems([]);
  };

  const totalItemsCount = orderItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8f5] text-[#231812] selection:bg-[#d97706]/20 selection:text-[#78350f]">
      {/* Top Navbar */}
      <Navbar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero with Fullscreen Video & Fallback */}
        <Hero
          onOpenOrderModal={() => setIsOrderModalOpen(true)}
          isOpenNow={isOpenNow}
          currentStatusText={currentStatusText}
        />

        <Suspense fallback={<SectionLoader />}>
          {/* 2. Sobre Nós */}
          <About />

          {/* 3. Diferenciais */}
          <Differences />

          {/* 4. Localização & Como Chegar */}
          <LocationMap />

          {/* 5. Contato Direto & Encomendas */}
          <ContactForm onOpenOrderModal={() => setIsOrderModalOpen(true)} />
        </Suspense>
      </main>

      {/* 7. Rodapé */}
      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Sticky Bottom Bar (Mobile/Desktop Quick Action) */}
      <StickyBottomBar
        onOpenOrderModal={() => setIsOrderModalOpen(true)}
        selectedItemsCount={totalItemsCount}
      />

      {/* WhatsApp Order Modal / Drawer (Lazy loaded on demand) */}
      {isOrderModalOpen && (
        <Suspense fallback={null}>
          <WhatsAppModal
            isOpen={isOrderModalOpen}
            onClose={() => setIsOrderModalOpen(false)}
            orderItems={orderItems}
            onUpdateQuantity={handleUpdateQuantity}
            onRemoveItem={handleRemoveItem}
            onClearOrder={handleClearOrder}
            onAddItem={handleAddItemForOrder}
          />
        </Suspense>
      )}
    </div>
  );
}
