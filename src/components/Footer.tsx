import React from 'react';
import { ArrowUp, Linkedin, Github, Mail, FileDown } from 'lucide-react';
import { Magnet } from './Magnet';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#0A0A0E] text-[#D7E2EA] px-6 md:px-12 py-16 sm:py-20 border-t border-white/10 select-none overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      <div className="absolute -top-32 left-1/4 w-96 h-96 rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 right-1/4 w-96 h-96 rounded-full bg-purple-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Top Row: Brand & Status on Left, Back to Top on Right */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 pb-10 border-b border-white/5">
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="hero-heading font-black text-2xl sm:text-3xl uppercase tracking-tight">
              Yash Saxena
            </span>
            <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 max-w-md">
              BCA Student &bull; Dayanand Academy of Management Studies (CSJMU)
            </p>

            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-medium tracking-wide mt-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <span>Available for Software &amp; Tech Opportunities</span>
            </div>
          </div>

          {/* Social Channels & Back to Top */}
          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/yash-saxena-a99720383/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#0077B5] hover:bg-[#0077B5]/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <Linkedin className="w-4 h-4 text-[#0077B5]" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                title="GitHub"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <Github className="w-4 h-4 text-cyan-400" />
              </a>

              {/* Email */}
              <a
                href="mailto:yashhsaxena01@gmail.com"
                aria-label="Email Yash"
                title="Email"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 hover:border-purple-400 hover:bg-purple-500/20 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <Mail className="w-4 h-4 text-purple-400" />
              </a>

              {/* Resume */}
              <a
                href="/resume.pdf"
                download="Yash_Saxena_Resume.pdf"
                aria-label="Download Resume"
                title="Download Resume (PDF)"
                className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 hover:border-cyan-400 hover:bg-cyan-500/20 flex items-center justify-center text-cyan-400 hover:text-white transition-all duration-200 cursor-pointer"
              >
                <FileDown className="w-4 h-4" />
              </a>

              {/* Back to top */}
              <Magnet strength={4}>
                <button
                  type="button"
                  onClick={scrollToTop}
                  aria-label="Back to top"
                  title="Scroll to top"
                  className="w-10 h-10 rounded-full border border-cyan-400/40 bg-cyan-500/10 hover:bg-cyan-500/20 hover:border-cyan-400 flex items-center justify-center text-cyan-300 hover:text-white transition-all duration-200 cursor-pointer shadow-[0_0_12px_rgba(0,240,255,0.2)] ml-2"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </Magnet>
            </div>
            <span className="text-[11px] text-[#D7E2EA]/50 font-mono">
              Back to Top
            </span>
          </div>
        </div>

        {/* Middle Row: Quick Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm uppercase tracking-wider font-medium text-[#D7E2EA]/75">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Home
          </button>
          <a
            href="#about"
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Skills
          </a>
          <a
            href="#tools"
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Tools I Use
          </a>
          <a
            href="#projects"
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Projects
          </a>
          <a
            href="#education"
            className="hover:text-cyan-400 transition-colors cursor-pointer"
          >
            Education
          </a>
          <a
            href="#contact"
            className="hover:text-purple-400 transition-colors cursor-pointer"
          >
            Contact
          </a>
        </div>

        {/* Bottom Row: Copyright and Tech Attribution */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D7E2EA]/50">
          <p>&copy; {new Date().getFullYear()} Yash Saxena. All rights reserved.</p>
          <p className="text-center sm:text-right font-light">
            Designed &bull; Built with React, TypeScript, Tailwind &amp; Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};
