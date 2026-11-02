import React from 'react';
import { FadeIn } from './FadeIn';

interface SkillItem {
  number: string;
  name: string;
  category: 'Programming' | 'Data Analytics' | 'AI Tools' | 'Currently Learning';
  level: string;
  description: string;
  isLearning?: boolean;
}

const SKILLS: SkillItem[] = [
  {
    number: '01',
    name: 'Python',
    category: 'Programming',
    level: 'Basic',
    description:
      'Foundational programming, understanding core syntax, writing procedural scripts, and building fundamental problem-solving logic.',
  },
  {
    number: '02',
    name: 'HTML',
    category: 'Programming',
    level: 'Basic',
    description:
      'Structuring web pages with clean semantic markup, page architecture, input forms, and essential layout building blocks.',
  },
  {
    number: '03',
    name: 'Excel',
    category: 'Data Analytics',
    level: 'Data Analytics',
    description:
      'Hands-on data organization, spreadsheet formulas, dataset cleaning, tabular exploration, and building structured analytical reports.',
  },
  {
    number: '04',
    name: 'SQL',
    category: 'Data Analytics',
    level: 'Data Analytics',
    description:
      'Writing relational database queries, table joins, data filtering, aggregation, and querying structured records for data insights.',
  },
  {
    number: '05',
    name: 'Claude AI',
    category: 'AI Tools',
    level: 'Frontend Design & Web',
    description:
      'Leveraging Claude AI to assist in building modern frontend designs, rapid prototyping, user interface ideas, and crafting web layouts.',
  },
  {
    number: '06',
    name: 'Java',
    category: 'Currently Learning',
    level: 'Currently Learning',
    isLearning: true,
    description:
      'Actively learning object-oriented programming, classes, methods, data structures, and computer science problem-solving in Java.',
  },
  {
    number: '07',
    name: 'Software Development',
    category: 'Currently Learning',
    level: 'Currently Learning',
    isLearning: true,
    description:
      'Actively exploring software engineering fundamentals, full-stack principles, clean application architecture, and real-world solutions.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="skills"
      className="relative bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 w-full z-0 select-none"
    >
      {/* Anchor for compatibility with #services */}
      <div id="services" className="absolute -top-12 left-0" />

      <div className="max-w-5xl mx-auto">
        {/* Section Heading */}
        <FadeIn delay={0} y={40}>
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <h2
              className="font-black uppercase text-[#0C0C0C] leading-none tracking-tight"
              style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
            >
              Skills
            </h2>
            <p className="mt-4 text-xs sm:text-sm uppercase tracking-widest text-[#0C0C0C]/60 font-medium">
              Technical Stack &amp; Active Learning Roadmap
            </p>

            {/* Structured Category Badges */}
            <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-6 max-w-4xl mx-auto">
              <span className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/15 text-[#0C0C0C]">
                <span className="text-cyan-700 font-bold uppercase tracking-wider text-[11px] mr-1.5">Programming:</span>
                Python, HTML
              </span>
              <span className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/15 text-[#0C0C0C]">
                <span className="text-purple-700 font-bold uppercase tracking-wider text-[11px] mr-1.5">Data Analytics:</span>
                Excel, SQL
              </span>
              <span className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#0C0C0C]/5 border border-[#0C0C0C]/15 text-[#0C0C0C]">
                <span className="text-cyan-700 font-bold uppercase tracking-wider text-[11px] mr-1.5">AI Tools:</span>
                Claude AI
              </span>
              <span className="text-xs font-medium px-3.5 py-1.5 rounded-full bg-[#7621B0]/10 border border-[#7621B0]/30 text-[#7621B0]">
                <span className="font-bold uppercase tracking-wider text-[11px] mr-1.5">Currently Learning:</span>
                Java, Software Development
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Skills List */}
        <div className="border-t border-[#0C0C0C]/15">
          {SKILLS.map((skill, index) => (
            <FadeIn key={skill.number} delay={index * 0.08} y={30}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between py-8 sm:py-10 md:py-12 border-b border-[#0C0C0C]/15 gap-4 sm:gap-10 transition-colors duration-300 hover:bg-[#0C0C0C]/[0.02] px-2 sm:px-4 rounded-xl">
                {/* Number on left */}
                <span
                  className="font-black text-[#0C0C0C] leading-none shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {skill.number}
                </span>

                {/* Name + level + description stacked vertically on right */}
                <div className="flex flex-col sm:max-w-2xl justify-center gap-2 sm:gap-3">
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                    <h3
                      className="font-medium uppercase text-[#0C0C0C] tracking-wide"
                      style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                    >
                      {skill.name}
                    </h3>
                    <span className="text-[10px] sm:text-xs uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full border border-[#0C0C0C]/20 text-[#0C0C0C]/80 bg-[#0C0C0C]/5">
                      {skill.category}
                    </span>
                    <span
                      className={`text-[10px] sm:text-xs uppercase font-medium tracking-wider px-2.5 py-0.5 rounded-full border ${
                        skill.isLearning
                          ? 'border-[#7621B0] text-[#7621B0] bg-[#7621B0]/5'
                          : 'border-[#0C0C0C]/30 text-[#0C0C0C]/70 bg-[#0C0C0C]/5'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>

                  <p
                    className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl"
                    style={{
                      fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                      opacity: 0.65,
                    }}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
