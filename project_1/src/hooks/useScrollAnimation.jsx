import { useEffect, useRef, useState } from 'react';

export function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [threshold]);

  return [ref, isVisible];
}

export function ScrollReveal({ children, className = '', direction = 'up', delay = 0 }) {
  const [ref, isVisible] = useScrollAnimation();

  const directionClass = {
    up: 'scroll-animate',
    left: 'scroll-animate-left',
    right: 'scroll-animate-right',
    scale: 'scroll-animate-scale',
  }[direction] || 'scroll-animate';

  const delayClass = delay ? `delay-${delay}` : '';

  return (
    <div
      ref={ref}
      className={`${directionClass} ${delayClass} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
