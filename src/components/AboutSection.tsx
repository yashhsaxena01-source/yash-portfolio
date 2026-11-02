import React from 'react';
import { FadeIn } from './FadeIn';
import { ContactButton } from './Buttons';
import { GraduationCap, Code2, Sparkles, FileDown, Target } from 'lucide-react';
import { Magnet } from './Magnet';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section
      id="about"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 lg:px-12 py-20 sm:py-24 md:py-28 w-full select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Two-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <FadeIn delay={0} y={20}>
              {/* Small Eyebrow Heading */}
              <div className="flex items-center gap-2 mb-3">
                <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  ABOUT ME
                </span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight text-white leading-tight mb-6">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-purple-500">Yash Saxena</span>
              </h2>
            </FadeIn>

            {/* Introduction in Readable Paragraphs with Cyan and Purple Accents */}
            <FadeIn delay={0.1} y={25} className="space-y-4 text-sm sm:text-base leading-relaxed text-[#D7E2EA]/85">
              <p>
                I am a <span className="text-cyan-400 font-semibold">BCA student</span> passionate about technology,{' '}
                <span className="text-purple-400 font-semibold">software development</span>, and exploring new digital solutions.
              </p>

              <p>
                I have foundational knowledge of{' '}
                <span className="text-cyan-300 font-medium">Python</span> and{' '}
                <span className="text-cyan-300 font-medium">HTML</span>. I also have practical data analytics experience working with{' '}
                <span className="text-purple-300 font-medium">Excel</span> and{' '}
                <span className="text-purple-300 font-medium">SQL</span>.
              </p>

              <p>
                I enjoy creating creative website interfaces using{' '}
                <span className="text-purple-300 font-medium">Claude AI</span> and learning how real-world applications work. I have worked on projects like{' '}
                <span className="text-cyan-300 font-medium">GreenLeaf Organic Cafe</span> and{' '}
                <span className="text-cyan-300 font-medium">Clean City</span>.
              </p>
            </FadeIn>

            {/* Career Goal Box */}
            <FadeIn delay={0.2} y={25} className="w-full mt-6">
              <div className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-cyan-500/20 hover:border-cyan-500/40 transition-colors duration-300 flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-purple-400 font-bold mb-0.5">
                    My Career Goal
                  </span>
                  <p className="text-xs sm:text-sm font-medium text-white/90 leading-snug">
                    My goal is to become a skilled <span className="text-cyan-300 font-semibold">software developer</span>, gain practical industry experience, and build useful technology solutions.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Working Action Buttons: Contact Me & Download Resume */}
            <FadeIn delay={0.3} y={20} className="mt-8 flex flex-wrap items-center gap-4 sm:gap-5">
              <ContactButton onClick={onOpenContact} />

              <Magnet strength={4}>
                <a
                  href="/resume.pdf"
                  download="Yash_Saxena_Resume.pdf"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full border-2 border-[#D7E2EA]/40 hover:border-[#D7E2EA] hover:bg-white/10 text-white text-xs sm:text-sm font-medium uppercase tracking-widest flex items-center gap-2 transition-all duration-200 cursor-pointer"
                >
                  <FileDown className="w-4 h-4 text-cyan-400" />
                  <span>Download Resume</span>
                </a>
              </Magnet>
            </FadeIn>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 w-full">
            {/* Card 1: EDUCATION */}
            <FadeIn delay={0.15} y={20}>
              <div className="group p-5 sm:p-6 rounded-2xl bg-[#121216] border border-white/10 hover:border-cyan-500/40 hover:bg-[#14151c] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400">
                    01 / Education
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-white tracking-wide">
                  BCA Student &ndash; 2027
                </h4>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 leading-snug">
                  Dayanand Academy of Management Studies, Kanpur
                </p>
                <p className="text-xs text-purple-300/80 mt-0.5 font-medium">
                  Affiliated with CSJMU
                </p>
              </div>
            </FadeIn>

            {/* Card 2: TECHNICAL BACKGROUND */}
            <FadeIn delay={0.25} y={20}>
              <div className="group p-5 sm:p-6 rounded-2xl bg-[#121216] border border-white/10 hover:border-purple-500/40 hover:bg-[#14151c] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-purple-400">
                    02 / Technical Background
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-105 transition-transform">
                    <Code2 className="w-4 h-4" />
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Programming */}
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-semibold block mb-1">
                      Programming
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Python', 'HTML'].map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Data Analytics */}
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-purple-400 font-semibold block mb-1">
                      Data Analytics
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Excel', 'SQL'].map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* AI Tools */}
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-cyan-300 font-semibold block mb-1">
                      AI Tools
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {['Claude AI'].map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-medium px-2.5 py-0.5 rounded-md bg-white/[0.05] border border-white/10 text-white"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Card 3: CURRENTLY LEARNING */}
            <FadeIn delay={0.35} y={20}>
              <div className="group p-5 sm:p-6 rounded-2xl bg-[#121216] border border-white/10 hover:border-cyan-500/40 hover:bg-[#14151c] transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-300">
                    03 / Currently Learning
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-2">
                  {['Java', 'Software Development'].map((item) => (
                    <span
                      key={item}
                      className="text-xs sm:text-sm font-semibold px-3 py-1 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/75 mt-1 leading-snug">
                  Object-Oriented Programming &amp; Building Real-World Solutions
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};
