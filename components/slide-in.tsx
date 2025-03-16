"use client";

import React, { useRef, useEffect, useState } from 'react';

interface SlideInProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'left' | 'right' | 'up' | 'down';
  delay?: number;
}

const SlideIn: React.FC<SlideInProps> = ({ children, className, direction = 'left', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            observer.disconnect();
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getTransform = () => {
    switch (direction) {
      case 'left':
        return 'translateX(-100%)';
      case 'right':
        return 'translateX(100%)';
      case 'up':
        return 'translateY(-100%)';
      case 'down':
        return 'translateY(100%)';
      default:
        return 'translateX(0)';
    }
  };

  return (
    <div
      ref={ref}
      className={`${className} transition duration-1000 ${isVisible ? 'transform translate-x-0 translate-y-0' : ''}`}
      style={{ transform: isVisible ? 'translateX(0)' : getTransform() }}
    >
      {children}
    </div>
  );
};

export default SlideIn;
