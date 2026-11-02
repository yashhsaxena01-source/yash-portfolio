import React, { useRef } from 'react';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const Character: React.FC<CharacterProps> = ({ char, index, total, progress }) => {
  const start = index / total;
  const end = Math.min(1, (index + 1) / total + 0.05);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      {/* Invisible placeholder for natural text wrapping */}
      <span className="opacity-0">{char === ' ' ? '\u00A0' : char}</span>
      {/* Absolute positioned animated character */}
      <motion.span
        style={{ opacity }}
        className="absolute inset-0 select-none"
      >
        {char === ' ' ? '\u00A0' : char}
      </motion.span>
    </span>
  );
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = Array.from(text);
  const total = chars.length;

  return (
    <p
      ref={containerRef}
      className={`relative inline-block text-center leading-relaxed ${className}`}
    >
      {chars.map((char, i) => (
        <Character
          key={i}
          char={char}
          index={i}
          total={total}
          progress={scrollYProgress}
        />
      ))}
    </p>
  );
};
