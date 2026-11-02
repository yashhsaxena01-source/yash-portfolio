import React from 'react';
import { Magnet } from './Magnet';

interface ContactButtonProps {
  onClick?: () => void;
  className?: string;
  withMagnet?: boolean;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  onClick,
  className = '',
  withMagnet = true,
}) => {
  const button = (
    <button
      type="button"
      onClick={onClick}
      className={`contact-btn contact-btn-style cursor-pointer rounded-full text-white font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base inline-flex items-center justify-center select-none ${className}`}
      style={{
        background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outline: '2px solid white',
        outlineOffset: '-3px',
      }}
    >
      Contact Me
    </button>
  );

  if (withMagnet) {
    return <Magnet strength={4}>{button}</Magnet>;
  }

  return button;
};

interface LiveProjectButtonProps {
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const LiveProjectButton: React.FC<LiveProjectButtonProps> = ({
  onClick,
  href,
  className = '',
}) => {
  const content = (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 select-none inline-flex items-center justify-center ${className}`}
    >
      Live Project
    </button>
  );

  return (
    <Magnet strength={4.5}>
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className="inline-block">
          {content}
        </a>
      ) : (
        content
      )}
    </Magnet>
  );
};
