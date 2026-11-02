import React, { useRef, useState, useCallback } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  strength?: number;
  padding?: number;
  className?: string;
  disabled?: boolean;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  strength = 3.5,
  padding = 45,
  className = '',
  disabled = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (disabled || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    const widthRadius = rect.width / 2 + padding;
    const heightRadius = rect.height / 2 + padding;

    if (Math.abs(distanceX) < widthRadius && Math.abs(distanceY) < heightRadius) {
      setIsHovered(true);
      setOffset({
        x: distanceX / strength,
        y: distanceY / strength,
      });
    } else {
      setIsHovered(false);
      setOffset({ x: 0, y: 0 });
    }
  }, [disabled, strength, padding]);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    setOffset({ x: 0, y: 0 });
  }, []);

  return (
    <div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0px)`,
        transition: isHovered
          ? 'transform 0.3s ease-out'
          : 'transform 0.6s ease-in-out',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
