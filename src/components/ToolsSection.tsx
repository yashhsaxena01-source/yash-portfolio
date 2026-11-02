import React from 'react';
import { FadeIn } from './FadeIn';
import {
  Code2,
  FileCode,
  FileSpreadsheet,
  Database,
  Bot,
  Laptop,
  Github,
  Cpu,
  ArrowUpRight,
} from 'lucide-react';

interface ToolItem {
  name: string;
  category: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  accent: string;
  borderAccent: string;
  glowAccent: string;
}

const TOOLS: ToolItem[] = [
  {
    name: 'Python',
    category: 'Programming',
    tag: 'Language',
    description:
      'Writing procedural scripts, problem-solving algorithms, data manipulation, and automation.',
    icon: Code2,
    accent: 'text-cyan-400',
    borderAccent: 'hover:border-cyan-500/40',
    glowAccent: 'group-hover:bg-cyan-500/10',
  },
  {
    name: 'HTML',
    category: 'Web Architecture',
    tag: 'Frontend',
    description:
      'Crafting clean, accessible, semantic page structures, input forms, and layout fundamentals.',
    icon: FileCode,
    accent: 'text-purple-400',
    borderAccent: 'hover:border-purple-500/40',
    glowAccent: 'group-hover:bg-purple-500/10',
  },
  {
    name: 'Excel',
    category: 'Data Analytics',
    tag: 'Spreadsheet',
    description:
      'Dataset organization, arithmetic formulas, data cleaning, tabular exploration, and summary reports.',
    icon: FileSpreadsheet,
    accent: 'text-emerald-400',
    borderAccent: 'hover:border-emerald-500/40',
    glowAccent: 'group-hover:bg-emerald-500/10',
  },
  {
    name: 'SQL',
    category: 'Databases',
    tag: 'Data Query',
    description:
      'Writing structured queries, filtering, aggregation, and relational table joins for database insights.',
    icon: Database,
    accent: 'text-cyan-300',
    borderAccent: 'hover:border-cyan-500/40',
    glowAccent: 'group-hover:bg-cyan-500/10',
  },
  {
    name: 'Claude AI',
    category: 'AI Assistant',
    tag: 'Prototyping',
    description:
      'Accelerating user interface ideation, responsive web patterns, prototyping, and layout experiments.',
    icon: Bot,
    accent: 'text-purple-300',
    borderAccent: 'hover:border-purple-500/40',
    glowAccent: 'group-hover:bg-purple-500/10',
  },
  {
    name: 'VS Code',
    category: 'Development Environment',
    tag: 'Editor',
    description:
      'Primary workspace for coding, syntax highlighting, debugging, extensions, and repository navigation.',
    icon: Laptop,
    accent: 'text-blue-400',
    borderAccent: 'hover:border-blue-500/40',
    glowAccent: 'group-hover:bg-blue-500/10',
  },
  {
    name: 'GitHub',
    category: 'Version Control',
    tag: 'Collaboration',
    description:
      'Git repository hosting, tracking code revisions, project versioning, and open collaboration.',
    icon: Github,
    accent: 'text-cyan-400',
    borderAccent: 'hover:border-cyan-500/40',
    glowAccent: 'group-hover:bg-cyan-500/10',
  },
  {
    name: 'Google AI Studio',
    category: 'AI Platform',
    tag: 'GenAI Tools',
    description:
      'Fast experimentation with modern AI models, system prompts, API testing, and web applet workflows.',
    icon: Cpu,
    accent: 'text-purple-400',
    borderAccent: 'hover:border-purple-500/40',
    glowAccent: 'group-hover:bg-purple-500/10',
  },
];

export const ToolsSection: React.FC = () => {
  return (
    <section
      id="tools"
      className="relative bg-[#0C0C0C] text-[#D7E2EA] px-5 sm:px-8 md:px-10 lg:px-12 py-20 sm:py-24 md:py-28 w-full select-none overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Heading */}
        <FadeIn delay={0} y={30}>
          <div className="text-center mb-14 sm:mb-18 md:mb-20">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-400">
                Workflow &amp; Stack
              </span>
              <span className="w-8 h-[2px] bg-gradient-to-l from-cyan-400 to-purple-500 rounded-full" />
            </div>

            <h2
              className="hero-heading font-black uppercase text-center leading-none tracking-tight"
              style={{ fontSize: 'clamp(2.75rem, 8vw, 120px)' }}
            >
              Tools I Use
            </h2>
            <p className="mt-4 text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-medium max-w-xl mx-auto">
              Essential technologies, tools, and platforms powering my everyday development and analytics
            </p>
          </div>
        </FadeIn>

        {/* 8-Card Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
          {TOOLS.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <FadeIn key={tool.name} delay={index * 0.06} y={25}>
                <div
                  className={`group relative h-full p-5 sm:p-6 rounded-2xl bg-[#121216] border border-white/10 ${tool.borderAccent} transition-all duration-300 flex flex-col justify-between shadow-[0_10px_25px_rgba(0,0,0,0.6)] hover:-translate-y-1`}
                >
                  {/* Top card row: Icon + Tag */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-11 h-11 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center ${tool.accent} ${tool.glowAccent} transition-all duration-300 group-hover:scale-105`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[#D7E2EA]/60">
                        {tool.tag}
                      </span>
                    </div>

                    {/* Tool Name & Category */}
                    <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide flex items-center justify-between">
                      <span>{tool.name}</span>
                      <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-white transition-colors" />
                    </h3>

                    <span className="block text-[11px] uppercase tracking-wider text-purple-300/80 font-medium mt-0.5 mb-2.5">
                      {tool.category}
                    </span>

                    {/* Tool Description */}
                    <p className="text-xs text-[#D7E2EA]/70 leading-relaxed">
                      {tool.description}
                    </p>
                  </div>

                  {/* Card bottom indicator line */}
                  <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-[#D7E2EA]/40">
                    <span className="font-mono">Active Tool</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:animate-ping" />
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
