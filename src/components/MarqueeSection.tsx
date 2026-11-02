import React, { useEffect, useRef } from 'react';

const GIF_URLS = [
  'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
  'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
  'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
  'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
  'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
  'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
  'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
  'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
  'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
  'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
  'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
  'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
  'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
  'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
  'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
  'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
  'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
  'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
  'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
  'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const ROW_1_IMAGES = [...GIF_URLS.slice(0, 11), ...GIF_URLS.slice(0, 11), ...GIF_URLS.slice(0, 11)];
const ROW_2_IMAGES = [...GIF_URLS.slice(11), ...GIF_URLS.slice(11), ...GIF_URLS.slice(11)];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top + window.scrollY;
      const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

      if (row1Ref.current) {
        row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
      }
      if (row2Ref.current) {
        row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden w-full select-none"
    >
      <div className="flex flex-col gap-3 w-full">
        {/* Row 1 - Moves RIGHT on scroll */}
        <div
          ref={row1Ref}
          className="flex gap-3 w-max"
          style={{ willChange: 'transform' }}
        >
          {ROW_1_IMAGES.map((url, i) => (
            <div
              key={`r1-${i}`}
              className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#181818] shadow-lg"
            >
              <img
                src={url}
                alt={`3D Work ${(i % 11) + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>

        {/* Row 2 - Moves LEFT on scroll */}
        <div
          ref={row2Ref}
          className="flex gap-3 w-max"
          style={{ willChange: 'transform' }}
        >
          {ROW_2_IMAGES.map((url, i) => (
            <div
              key={`r2-${i}`}
              className="w-[420px] h-[270px] shrink-0 rounded-2xl overflow-hidden bg-[#181818] shadow-lg"
            >
              <img
                src={url}
                alt={`3D Project ${(i % 10) + 1}`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
