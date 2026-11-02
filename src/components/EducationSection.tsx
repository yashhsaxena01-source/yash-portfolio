import React from 'react';
import { GraduationCap, Landmark, Calendar, BookOpen } from 'lucide-react';
import { FadeIn } from './FadeIn';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28 w-full select-none overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Education
            </h2>
            <p className="mt-4 text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium">
              Academic Background &amp; Qualifications
            </p>
          </div>
        </FadeIn>

        {/* Modern Education Card */}
        <FadeIn delay={0.15} y={30}>
          <div className="relative rounded-[32px] sm:rounded-[44px] md:rounded-[52px] border-2 border-[#D7E2EA]/20 bg-[#121212] p-6 sm:p-10 md:p-12 hover:border-[#D7E2EA]/40 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.85)] overflow-hidden">
            {/* Subtle background ambient glow */}
            <div
              className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-15 pointer-events-none blur-3xl"
              style={{
                background: 'radial-gradient(circle, #B600A8 0%, #7621B0 60%, transparent 100%)',
              }}
            />

            {/* Header row: Degree & Batch */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-[#D7E2EA]/15">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#B600A8] shrink-0">
                  <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-[#B600A8] font-medium">
                      Undergraduate Degree
                    </span>
                  </div>
                  <h3
                    className="font-black uppercase text-white tracking-wide leading-tight"
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 2.2rem)' }}
                  >
                    Bachelor of Computer Applications (BCA)
                  </h3>
                </div>
              </div>

              {/* Batch Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-[#D7E2EA] self-start md:self-auto shrink-0">
                <Calendar className="w-4 h-4 text-[#7621B0]" />
                <span className="tracking-wider">Batch 2024 &ndash; 2027</span>
              </div>
            </div>

            {/* Content row: Institution & University */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Institution */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#D7E2EA] shrink-0 mt-0.5">
                  <BookOpen className="w-5 h-5 text-[#B600A8]" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#D7E2EA]/50 font-medium mb-1">
                    College / Institution
                  </span>
                  <h4 className="text-base sm:text-lg font-medium text-white leading-snug">
                    Dayanand Academy of Management Studies
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/60 mt-1">
                    Kanpur, Uttar Pradesh
                  </p>
                </div>
              </div>

              {/* University */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#D7E2EA] shrink-0 mt-0.5">
                  <Landmark className="w-5 h-5 text-[#7621B0]" />
                </div>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[#D7E2EA]/50 font-medium mb-1">
                    Affiliated University
                  </span>
                  <h4 className="text-base sm:text-lg font-medium text-white leading-snug">
                    Chhatrapati Shahu Ji Maharaj University (CSJMU)
                  </h4>
                  <p className="text-xs sm:text-sm text-[#D7E2EA]/60 mt-1">
                    Kanpur, Uttar Pradesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
