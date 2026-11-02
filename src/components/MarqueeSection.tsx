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

// Two copies are enough for the moving rows; a third copy only adds network and DOM work.
const ROW_1_IMAGES = [...GIF_URLS.slice(0, 11), ...GIF_URLS.slice(0, 11)];
const ROW_2_IMAGES = [...GIF_URLS.slice(11), ...GIF_URLS.slice(11)];

const FALLBACK_STYLES = [
  'from-violet-950 via-indigo-900 to-slate-950',
  'from-cyan-950 via-blue-900 to-slate-950',
  'from-fuchsia-950 via-purple-900 to-slate-950',
  'from-sky-950 via-indigo-900 to-slate-950',
  'from-emerald-950 via-teal-900 to-slate-950',
  'from-rose-950 via-orange-900 to-slate-950',
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Load each large third-party GIF only shortly before its card enters the viewport.
  useEffect(() => {
    const images = sectionRef.current?.querySelectorAll<HTMLImageElement>('img[data-src]');
    if (!images?.length) return;

    if (!('IntersectionObserver' in window)) {
      images.forEach((img) => {
        img.src = img.dataset.src || '';
        img.removeAttribute('data-src');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const img = entry.target as HTMLImageElement;
          const source = img.dataset.src;
          if (source) img.src = source;
          img.removeAttribute('data-src');
          observer.unobserve(img);
        });
      },
      { rootMargin: '500px 500px', threshold: 0.01 }
    );

    images.forEach((img) => observer.observe(img));
    return () => observer.disconnect();
  }, []);

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

  const renderCard = (url: string, index: number, label: string) => (
    <div
      key={`${label}-${index}`}
      className={`relative w-[min(82vw,420px)] h-[220px] sm:h-[270px] shrink-0 rounded-2xl overflow-hidden bg-gradient-to-br ${FALLBACK_STYLES[index % FALLBACK_STYLES.length]} shadow-lg ring-1 ring-white/10`}
    >
      <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-6">
        <span className="text-xs tracking-[0.28em] uppercase text-white/60">Yash Saxena · Visual Lab</span>
        <div>
          <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">3D / DIGITAL</p>
          <p className="mt-2 text-sm text-white/65">Interactive visual experience</p>
        </div>
      </div>
      <img
        data-src={url}
        alt={`${label} ${(index % 11) + 1}`}
        decoding="async"
        onError={(event) => {
          // Keep the designed gradient card visible if the third-party GIF is unavailable.
          event.currentTarget.style.display = 'none';
        }}
        className="relative z-10 w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-500 ease-out"
      />
    </div>
  );

  return (
    <section
      ref={sectionRef}
      aria-label="3D work and visual projects"
      className="relative bg-[#0C0C0C] pt-20 sm:pt-24 md:pt-28 pb-12 overflow-hidden w-full select-none"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-8 sm:mb-10">
        <p className="text-xs sm:text-sm tracking-[0.3em] uppercase text-white/45 mb-3">Selected visuals</p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white">
          3D Work<span className="text-white/35"> & Experiments</span>
        </h2>
        <p className="mt-3 max-w-xl text-sm sm:text-base text-white/55">
          A collection of digital worlds, motion studies and creative web visuals.
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <div ref={row1Ref} className="flex gap-3 w-max" style={{ willChange: 'transform' }}>
          {ROW_1_IMAGES.map((url, i) => renderCard(url, i, '3D Work'))}
        </div>

        <div ref={row2Ref} className="flex gap-3 w-max" style={{ willChange: 'transform' }}>
          {ROW_2_IMAGES.map((url, i) => renderCard(url, i + 11, '3D Project'))}
        </div>
      </div>
    </section>
  );
};
