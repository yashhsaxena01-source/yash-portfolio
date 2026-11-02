import React from 'react';
import { motion } from 'framer-motion';
import { ContactButton } from './Buttons';
import { DeveloperWorkspace3D } from './DeveloperWorkspace3D';
import { FileDown, Sparkles, Terminal } from 'lucide-react';
import { Magnet } from './Magnet';

interface HeroSectionProps {
  onOpenContact: () => void;
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenContact, onNavigate }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between overflow-x-clip select-none pb-12 sm:pb-16">
      {/* 1. Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0, ease: [0.25, 0.1, 0.25, 1] }}
        className="w-full flex flex-wrap justify-between items-center px-4 sm:px-6 md:px-10 pt-6 md:pt-8 gap-3 sm:gap-4 z-30"
      >
        {/* Left: Open to Opportunities Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium tracking-wide">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          <span>Open to Opportunities</span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex items-center gap-3 sm:gap-6 md:gap-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-base lg:text-[1.15rem]">
          <button
            type="button"
            onClick={() => onNavigate('about')}
            className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => onNavigate('skills')}
            className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            Skills
          </button>
          <button
            type="button"
            onClick={() => onNavigate('tools')}
            className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            Tools
          </button>
          <button
            type="button"
            onClick={() => onNavigate('projects')}
            className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            Projects
          </button>
          <button
            type="button"
            onClick={() => onNavigate('contact')}
            className="hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
          >
            Contact
          </button>
        </div>

        {/* Right: Navbar Download Resume Button */}
        <a
          href="/resume.pdf"
          download="Yash_Saxena_Resume.pdf"
          className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full border border-cyan-400/40 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400 text-cyan-300 hover:text-white text-xs sm:text-sm font-medium uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-[0_0_15px_rgba(0,240,255,0.15)] shrink-0"
        >
          <FileDown className="w-3.5 h-3.5 text-cyan-400" />
          <span className="hidden sm:inline">Download</span>
          <span>Resume</span>
        </a>
      </motion.nav>

      {/* 2. Main Hero Body: Left (Heading & Intro) & Right (3D Developer Workspace) */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-10 py-6 sm:py-8 lg:py-12 flex-1 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 z-20">
        {/* Left Side: Portfolio Heading, Bio Introduction & CTAs */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left z-20">
          {/* Eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-medium tracking-wide mb-4"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span className="uppercase tracking-widest text-[11px] sm:text-xs">
              Software Developer &bull; BCA &apos;27
            </span>
          </motion.div>

          {/* Giant Hero Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="hero-heading font-black uppercase tracking-tight leading-none text-left w-full text-[14vw] sm:text-[12vw] md:text-[9vw] lg:text-[6.8vw] select-none"
          >
            Hi, i&apos;m yash
          </motion.h1>

          {/* Intro paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#D7E2EA] font-light leading-relaxed max-w-xl text-base sm:text-lg md:text-xl mt-4 sm:mt-6 mb-8 text-white/80"
          >
            A third-year BCA student driven by building scalable software, web applications, and data-driven solutions with Python, Java, and modern development tools.
          </motion.p>

          {/* Actions: Contact Button & Download Resume */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex flex-wrap items-center gap-4 sm:gap-5"
          >
            <ContactButton onClick={onOpenContact} />

            <Magnet strength={4}>
              <a
                href="/resume.pdf"
                download="Yash_Saxena_Resume.pdf"
                className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-2 border-[#D7E2EA]/40 hover:border-[#D7E2EA] hover:bg-white/10 text-white text-xs sm:text-sm md:text-base font-medium uppercase tracking-widest flex items-center gap-2.5 transition-all duration-200 cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Resume</span>
              </a>
            </Magnet>
          </motion.div>
        </div>

        {/* Right Side: Futuristic 3D Developer Workspace */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end z-10"
        >
          <DeveloperWorkspace3D />
        </motion.div>
      </div>

      {/* 3. Bottom bar */}
      <div className="w-full max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-end px-6 md:px-10 z-20 gap-4">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-[#D7E2EA]/70 font-light uppercase tracking-wider text-xs sm:text-sm max-w-md flex items-center gap-2"
        >
          <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Focused on Software Architecture, Web Dev &amp; Data Analytics</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-xs uppercase tracking-widest text-[#D7E2EA]/50 font-medium"
        >
          CSJMU &bull; Kanpur, Uttar Pradesh
        </motion.div>
      </div>
    </section>
  );
};
