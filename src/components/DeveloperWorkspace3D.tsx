import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Terminal, Cpu, Database, Code2, Sparkles, Activity, Layers, Braces } from 'lucide-react';

export const DeveloperWorkspace3D: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  // Mouse tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for cursor parallax
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  const rotateY = useTransform(springX, [-300, 300], [-26, -10]);
  const rotateX = useTransform(springY, [-300, 300], [20, 8]);
  const floatZ = useTransform(springY, [-300, 300], [10, -10]);

  useEffect(() => {
    setMounted(true);
    const handlePointerMove = (e: MouseEvent) => {
      const centerX = window.innerWidth * 0.65;
      const centerY = window.innerHeight * 0.45;
      mouseX.set(e.clientX - centerX);
      mouseY.set(e.clientY - centerY);
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full max-w-[620px] lg:max-w-[700px] xl:max-w-[760px] h-[460px] sm:h-[520px] md:h-[560px] flex items-center justify-center select-none perspective-[1400px]">
      {/* Ambient background glows: Cyan, Blue, Purple */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="absolute w-80 h-80 rounded-full bg-cyan-500/15 blur-[100px] animate-pulse" />
        <div className="absolute -top-10 -right-10 w-96 h-96 rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute -bottom-10 -left-10 w-72 h-72 rounded-full bg-blue-600/15 blur-[90px]" />
      </div>

      {/* Floating 3D Workspace Root */}
      <motion.div
        style={{
          rotateX: mounted ? rotateX : 14,
          rotateY: mounted ? rotateY : -18,
          transformStyle: 'preserve-3d',
        }}
        animate={{
          y: [-10, 10, -10],
          rotateZ: [-1, 1.5, -1],
        }}
        transition={{
          y: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
          rotateZ: { repeat: Infinity, duration: 8, ease: 'easeInOut' },
        }}
        className="relative w-full flex items-center justify-center"
      >
        {/* ================= LAPTOP BASE & SCREEN ================= */}
        <div className="relative w-[340px] sm:w-[460px] md:w-[520px] lg:w-[560px] transform-style-3d">
          {/* Laptop Screen (Top Lid) */}
          <div
            className="relative rounded-2xl sm:rounded-3xl p-2.5 sm:p-3 bg-[#0d0e12] border-2 border-cyan-500/30 shadow-[0_20px_60px_rgba(0,240,255,0.2),0_0_80px_rgba(139,92,246,0.15)] backdrop-blur-xl"
            style={{
              transform: 'rotateX(-12deg) translateZ(10px)',
              boxShadow:
                '0 0 0 1px rgba(255,255,255,0.08), 0 25px 50px -12px rgba(0,0,0,0.9), 0 0 45px rgba(0, 240, 255, 0.18)',
            }}
          >
            {/* Glossy bezel reflection line */}
            <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

            {/* Screen inner housing */}
            <div className="relative rounded-xl sm:rounded-2xl bg-[#090A0F] border border-white/10 overflow-hidden text-left font-mono text-[11px] sm:text-xs">
              {/* Window Titlebar */}
              <div className="flex items-center justify-between px-3.5 py-2.5 bg-[#12131A] border-b border-white/10">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-[0_0_6px_rgba(255,95,86,0.6)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-[0_0_6px_rgba(255,189,46,0.6)]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-[0_0_6px_rgba(39,201,63,0.6)]" />
                </div>
                <div className="flex items-center gap-2 text-[10px] text-white/50 tracking-wider">
                  <span className="px-2 py-0.5 rounded bg-white/5 text-cyan-400 font-medium border border-cyan-500/20">
                    yash_workspace.py
                  </span>
                  <span className="hidden sm:inline text-white/30">Analytics.java</span>
                  <span className="hidden sm:inline text-white/30">App.tsx</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-400 text-[10px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span className="font-semibold">LIVE</span>
                </div>
              </div>

              {/* Colorful Code Editor Content */}
              <div className="p-3.5 sm:p-5 text-[#D7E2EA] leading-relaxed space-y-1 sm:space-y-1.5 bg-[#090A0F]/95">
                <div className="flex gap-3 text-white/30">
                  <span className="select-none w-5 text-right">1</span>
                  <span>
                    <span className="text-purple-400">class</span>{' '}
                    <span className="text-yellow-400 font-bold">DeveloperProfile</span>:
                  </span>
                </div>
                <div className="flex gap-3 text-white/30">
                  <span className="select-none w-5 text-right">2</span>
                  <span className="pl-4">
                    <span className="text-cyan-400">def</span>{' '}
                    <span className="text-blue-400">__init__</span>(
                    <span className="text-pink-400">self</span>):
                  </span>
                </div>
                <div className="flex gap-3 text-white/30">
                  <span className="select-none w-5 text-right">3</span>
                  <span className="pl-8 text-white/80">
                    <span className="text-pink-400">self</span>.developer ={' '}
                    <span className="text-emerald-400">&quot;Yash Saxena&quot;</span>
                  </span>
                </div>
                <div className="flex gap-3 text-white/30">
                  <span className="select-none w-5 text-right">4</span>
                  <span className="pl-8 text-white/80">
                    <span className="text-pink-400">self</span>.education ={' '}
                    <span className="text-emerald-400">&quot;BCA &bull; CSJMU Kanpur&quot;</span>
                  </span>
                </div>
                <div className="flex gap-3 text-white/30">
                  <span className="select-none w-5 text-right">5</span>
                  <span className="pl-8 text-white/80">
                    <span className="text-pink-400">self</span>.skills = [
                    <span className="text-yellow-300">&quot;Python&quot;</span>,{' '}
                    <span className="text-yellow-300">&quot;SQL&quot;</span>,{' '}
                    <span className="text-yellow-300">&quot;Excel&quot;</span>,{' '}
                    <span className="text-yellow-300">&quot;Claude AI&quot;</span>]
                  </span>
                </div>
                <div className="flex gap-3 text-white/30">
                  <span className="select-none w-5 text-right">6</span>
                  <span className="pl-4">
                    <span className="text-cyan-400">def</span>{' '}
                    <span className="text-blue-400">build_future</span>(
                    <span className="text-pink-400">self</span>):
                  </span>
                </div>
                <div className="flex gap-3 text-white/30">
                  <span className="select-none w-5 text-right">7</span>
                  <span className="pl-8 text-white/80">
                    <span className="text-purple-400">return</span>{' '}
                    <span className="text-cyan-300 font-semibold">&quot;Scalable &bull; Data-Driven &bull; Impactful&quot;</span>
                  </span>
                </div>
              </div>

              {/* Bottom Integrated Mini-Terminal */}
              <div className="px-3.5 sm:px-4 py-2 sm:py-2.5 bg-[#0e1017] border-t border-white/10 flex items-center justify-between text-[10px] sm:text-[11px]">
                <div className="flex items-center gap-2 text-emerald-400 font-mono">
                  <Terminal className="w-3.5 h-3.5" />
                  <span>yash@workstation:~$ python run_pipeline.py</span>
                </div>
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="font-sans font-medium text-[9px] uppercase tracking-wider text-cyan-300">
                    Ready
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Laptop Lower Chassis (Keyboard Base & Trackpad) */}
          <div
            className="relative -mt-2.5 sm:-mt-3 mx-auto w-[98%] h-14 sm:h-20 bg-gradient-to-b from-[#181a22] to-[#0c0d12] rounded-b-2xl border-x-2 border-b-2 border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.95)]"
            style={{
              transform: 'rotateX(68deg) translateZ(-8px)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.9), inset 0 2px 4px rgba(255,255,255,0.1)',
            }}
          >
            {/* Backlit Keyboard illumination strip */}
            <div className="absolute inset-x-8 top-2 h-7 sm:h-10 rounded-lg bg-[#12131a] border border-cyan-500/20 flex flex-col justify-between p-1 shadow-[inset_0_0_12px_rgba(0,240,255,0.2)]">
              <div className="grid grid-cols-12 gap-1 h-2 opacity-50">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="h-full bg-cyan-400/20 rounded-[2px]" />
                ))}
              </div>
              <div className="grid grid-cols-10 gap-1 h-2 opacity-50">
                {Array.from({ length: 10 }).map((_, i) => (
                  <div key={i} className="h-full bg-purple-400/20 rounded-[2px]" />
                ))}
              </div>
            </div>

            {/* Trackpad */}
            <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-16 sm:w-24 h-4 sm:h-6 rounded-md bg-white/[0.04] border border-white/10" />
          </div>

          {/* Cybernetic Desk Reflection Platform */}
          <div
            className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[85%] h-14 rounded-full bg-cyan-500/10 blur-xl pointer-events-none"
            style={{ transform: 'rotateX(80deg)' }}
          />
        </div>

        {/* ================= FLOATING HOLOGRAPHIC 3D UI PANELS ================= */}

        {/* 1. Top-Left Holographic Card: Dev Stack */}
        <motion.div
          animate={{
            y: [-6, 6, -6],
            x: [-3, 3, -3],
            rotateZ: [-2, 1, -2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-10 sm:-top-8 -left-4 sm:-left-10 z-20 p-3 sm:p-4 rounded-2xl bg-[#12131c]/90 border border-cyan-400/40 backdrop-blur-md shadow-[0_10px_30px_rgba(0,240,255,0.25)] flex items-center gap-3"
          style={{ transform: 'translateZ(60px)' }}
        >
          <div className="w-9 h-9 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400">
                Core Stack
              </span>
            </div>
            <div className="text-xs font-semibold text-white tracking-wide flex items-center gap-1.5 mt-0.5">
              <span>Python</span>
              <span className="text-white/30">&bull;</span>
              <span>SQL</span>
              <span className="text-white/30">&bull;</span>
              <span>Excel</span>
              <span className="text-white/30">&bull;</span>
              <span>Claude AI</span>
            </div>
          </div>
        </motion.div>

        {/* 2. Top-Right Holographic Card: Data Analytics Sparkline */}
        <motion.div
          animate={{
            y: [6, -6, 6],
            x: [3, -3, 3],
            rotateZ: [2, -1, 2],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.5,
          }}
          className="absolute -top-12 sm:-top-10 -right-4 sm:-right-8 z-20 p-3 sm:p-4 rounded-2xl bg-[#14101e]/90 border border-purple-500/40 backdrop-blur-md shadow-[0_10px_30px_rgba(168,85,247,0.25)] flex items-center gap-3.5"
          style={{ transform: 'translateZ(70px)' }}
        >
          <div className="w-9 h-9 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-[10px] uppercase font-bold tracking-widest text-purple-300">
                Data Analytics
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">+98.2%</span>
            </div>
            {/* Mini SVG Sparkline */}
            <svg className="w-24 h-5 mt-1 stroke-purple-400 fill-none" viewBox="0 0 100 20">
              <path
                d="M 0 16 Q 15 18, 30 10 T 60 12 T 85 4 L 100 2"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </motion.div>

        {/* 3. Bottom-Left Holographic Badge: Clean Code & Architecture */}
        <motion.div
          animate={{
            y: [-5, 7, -5],
            rotateZ: [1, -2, 1],
          }}
          transition={{
            duration: 6.2,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute -bottom-6 sm:-bottom-8 -left-2 sm:-left-6 z-20 px-3.5 py-2 rounded-xl bg-[#0f111a]/90 border border-blue-400/30 backdrop-blur-md shadow-[0_10px_25px_rgba(59,130,246,0.2)] flex items-center gap-2 text-xs font-mono text-blue-300"
          style={{ transform: 'translateZ(50px)' }}
        >
          <Braces className="w-4 h-4 text-cyan-400" />
          <span className="font-medium text-[11px] tracking-wide text-white/90">
            clean_code = True
          </span>
        </motion.div>

        {/* 4. Bottom-Right Holographic Badge: BCA Student / CSJMU */}
        <motion.div
          animate={{
            y: [5, -7, 5],
            rotateZ: [-1, 2, -1],
          }}
          transition={{
            duration: 6.8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1.4,
          }}
          className="absolute -bottom-8 sm:-bottom-10 -right-2 sm:-right-6 z-20 px-3.5 py-2 rounded-xl bg-[#15111d]/90 border border-pink-500/30 backdrop-blur-md shadow-[0_10px_25px_rgba(236,72,153,0.2)] flex items-center gap-2 text-xs text-pink-300"
          style={{ transform: 'translateZ(55px)' }}
        >
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span className="font-sans font-medium text-[11px] uppercase tracking-wider text-white">
            BCA Student &bull; 2024–27
          </span>
        </motion.div>

        {/* Floating Glowing Particles */}
        <div className="absolute -top-16 left-1/4 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_12px_#00F0FF] animate-ping" />
        <div className="absolute top-1/2 -right-8 w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_12px_#A855F7] animate-pulse" />
        <div className="absolute -bottom-12 left-1/3 w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_#3B82F6] animate-pulse" />
      </motion.div>
    </div>
  );
};
