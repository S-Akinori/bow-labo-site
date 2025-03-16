"use client";

import React, { useRef, useEffect, useState } from 'react';

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Added delay property
}

const FadeIn: React.FC<FadeInProps> = ({ children, className, delay = 0 }) => { // Default delay to 0
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => { // Add delay before setting visibility
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
  }, [delay]); // Include delay in dependency array

  return (
    <div
      ref={ref}
      className={`${className} transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
