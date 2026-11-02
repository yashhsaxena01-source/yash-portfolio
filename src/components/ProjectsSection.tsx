import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { LiveProjectButton } from './Buttons';
import { FadeIn } from './FadeIn';

import analyticsVisualImg from '../assets/images/analytics_visual_1793613900532.jpg';
import excelAnalyticsImg from '../assets/images/excel_analytics_1793613915133.jpg';
import pythonCalcImg from '../assets/images/python_calculator_1793614386640.jpg';
import greenLeafImg from '../assets/images/greenleaf_cafe_1793614400345.jpg';
import cleanCityImg from '../assets/images/clean_city_1793614414102.jpg';

export interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  technologies: string[];
  thumbnail: string;
  status?: string;
  link?: string;
  githubUrl?: string;
  liveUrl?: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    name: 'Sales Performance Analysis Dashboard',
    category: 'Data Analytics',
    description:
      'A Data Analytics project focused on analyzing sales performance and presenting information through a dashboard.',
    technologies: ['Microsoft Excel', 'SQL', 'Data Analytics'],
    thumbnail: analyticsVisualImg,
    col1Img1: excelAnalyticsImg,
    col1Img2: analyticsVisualImg,
    col2Img: analyticsVisualImg,
  },
  {
    number: '02',
    name: 'Python Calculator',
    category: 'Python / Software',
    description:
      'Developed a calculator using Python to perform basic arithmetic operations. Implemented addition, subtraction, multiplication and division.',
    technologies: ['Python'],
    thumbnail: pythonCalcImg,
    col1Img1: pythonCalcImg,
    col1Img2: pythonCalcImg,
    col2Img: pythonCalcImg,
  },
  {
    number: '03',
    name: 'GreenLeaf Organic Cafe',
    category: 'Full-Stack Web Development',
    description:
      'A full-stack organic cafe website with menu, table booking, user authentication, contact features and admin dashboard.',
    technologies: ['React', 'JavaScript', 'Express.js', 'MongoDB'],
    status: 'In Progress',
    thumbnail: greenLeafImg,
    col1Img1: greenLeafImg,
    col1Img2: greenLeafImg,
    col2Img: greenLeafImg,
  },
  {
    number: '04',
    name: 'Clean City',
    category: 'Web Development',
    description:
      'An environmental awareness and civic technology project concept focused on community cleanliness, civic reporting, and sustainable practices.',
    technologies: ['HTML', 'Web Development'],
    status: 'In Progress',
    thumbnail: cleanCityImg,
    col1Img1: cleanCityImg,
    col1Img2: cleanCityImg,
    col2Img: cleanCityImg,
  },
];

interface CardProps {
  project: Project;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
  onOpenProjectModal: (project: Project) => void;
}

const ProjectCard: React.FC<CardProps> = ({
  project,
  index,
  totalCards: _totalCards,
  progress,
  range,
  targetScale,
  onOpenProjectModal,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-center justify-center sticky top-24 md:top-32"
      style={{
        top: `calc(${index * 28}px + 6rem)`,
      }}
    >
      <motion.div
        style={{
          scale,
          top: `${index * 28}px`,
        }}
        className="w-full max-w-6xl mx-auto rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.95)]"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-4 sm:pb-6 border-b border-[#D7E2EA]/15">
          <div className="flex items-baseline gap-4 sm:gap-6">
            <span
              className="font-black text-[#D7E2EA] leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xs sm:text-sm font-light uppercase tracking-widest text-[#D7E2EA]/60">
                  {project.category}
                </span>
                {project.status && (
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-purple-500/25 border border-purple-400/35 text-purple-200">
                    {project.status}
                  </span>
                )}
              </div>
              <h3
                className="font-medium uppercase text-[#D7E2EA] tracking-wide"
                style={{ fontSize: 'clamp(1.1rem, 2.2vw, 2rem)' }}
              >
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton onClick={() => onOpenProjectModal(project)} />
        </div>

        {/* Bottom row: Content and Showcase */}
        <div className="mt-4 sm:mt-6 grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6 items-stretch">
          {/* Left column (40% width on md+): Project Overview, Tech Tags & Detail Thumbnail */}
          <div className="md:col-span-5 flex flex-col justify-between gap-4">
            <div className="rounded-[28px] sm:rounded-[36px] bg-[#141418] border border-white/10 p-5 sm:p-6 flex flex-col justify-between flex-1">
              <div>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-cyan-400 font-bold block mb-2">
                  Project Overview
                </span>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/90 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/10">
                <span className="text-[10px] uppercase tracking-wider text-[#D7E2EA]/60 font-semibold block mb-2">
                  Technologies
                </span>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/10 text-cyan-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional detail thumbnail image */}
            <div
              className="w-full overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#161616] border border-white/10"
              style={{ height: 'clamp(110px, 13vw, 160px)' }}
            >
              <img
                src={project.col1Img1 || project.thumbnail}
                alt={`${project.name} detail`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-[28px] sm:rounded-[36px] hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>

          {/* Right column (60% width on md+): 1 tall showcase image */}
          <div className="md:col-span-7 w-full overflow-hidden rounded-[28px] sm:rounded-[36px] md:rounded-[44px] bg-[#161616] min-h-[260px] md:min-h-full border border-white/10 relative group">
            <img
              src={project.col2Img || project.thumbnail}
              alt={`${project.name} main showcase`}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-[28px] sm:rounded-[36px] md:rounded-[44px] hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between pointer-events-none">
              <span className="text-xs sm:text-sm font-medium text-white tracking-wide">
                {project.name}
              </span>
              <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 font-mono">
                {project.technologies[0]}
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

interface ProjectsSectionProps {
  onOpenProjectModal: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProjectModal }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const totalCards = PROJECTS.length;

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32 w-full select-none"
    >
      <div className="max-w-6xl mx-auto mb-12 sm:mb-16 md:mb-20 text-center">
        {/* Section Heading: "Project" */}
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Project
          </h2>
        </FadeIn>
      </div>

      {/* Sticky stacking cards */}
      <div className="relative w-full">
        {PROJECTS.map((project, i) => {
          const targetScale = 1 - (totalCards - 1 - i) * 0.03;
          return (
            <ProjectCard
              key={project.number}
              project={project}
              index={i}
              totalCards={totalCards}
              progress={scrollYProgress}
              range={[i * 0.2, 1]}
              targetScale={targetScale}
              onOpenProjectModal={onOpenProjectModal}
            />
          );
        })}
      </div>
    </section>
  );
};
