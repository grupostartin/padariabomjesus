import React, { useEffect, useRef, useState } from 'react';

type AnimationType = 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'zoom-in' | 'fade';

interface ScrollRevealProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 650,
  threshold = 0.15,
  once = true,
  className = '',
  style = {},
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If user prefers reduced motion, show immediately
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setIsVisible(true);
      return;
    }

    const currentRef = elementRef.current;
    if (!currentRef) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.disconnect();
    };
  }, [threshold, once]);

  // Compute transform styles based on animation type
  const getTransform = () => {
    if (isVisible) return 'none';

    switch (animation) {
      case 'fade-up':
        return 'translate3d(0, 36px, 0)';
      case 'fade-down':
        return 'translate3d(0, -36px, 0)';
      case 'fade-left':
        return 'translate3d(36px, 0, 0)';
      case 'fade-right':
        return 'translate3d(-36px, 0, 0)';
      case 'zoom-in':
        return 'scale3d(0.94, 0.94, 1)';
      case 'fade':
      default:
        return 'none';
    }
  };

  const transitionStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transitionProperty: 'opacity, transform',
    transitionDuration: `${duration}ms`,
    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    transitionDelay: `${delay}ms`,
    willChange: 'opacity, transform',
    ...style,
  };

  return (
    <div ref={elementRef} className={className} style={transitionStyle}>
      {children}
    </div>
  );
};
