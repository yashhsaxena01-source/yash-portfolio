import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Layers, Palette, Github } from 'lucide-react';
import type { Project } from './ProjectsSection';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  const isDataAnalytics = project.category.includes('Data Analytics');

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 25 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative w-full max-w-4xl bg-[#121216] border-2 border-[#D7E2EA]/30 rounded-[32px] sm:rounded-[40px] p-6 sm:p-10 shadow-2xl z-10 my-auto max-h-[90vh] overflow-y-auto no-scrollbar"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-[#D7E2EA]/60 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close project preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Header */}
          <div className="flex flex-wrap items-baseline gap-4 mb-6">
            <span className="font-black text-4xl sm:text-5xl text-[#D7E2EA] leading-none">
              {project.number}
            </span>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs uppercase font-semibold tracking-widest text-cyan-400">
                  {project.category}
                </span>
                {project.status && (
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-purple-500/25 border border-purple-400/40 text-purple-200 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
                    {project.status}
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-4xl font-black uppercase text-white tracking-wide">
                {project.name}
              </h3>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 mb-8 p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
            <div className="flex flex-col items-center gap-1">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-[11px] sm:text-xs text-[#D7E2EA]/60 uppercase tracking-wider">
                Category
              </span>
              <span className="text-xs sm:text-sm font-medium text-white">
                {isDataAnalytics ? 'Data Analytics' : 'Software & Web'}
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Layers className="w-4 h-4 text-purple-400" />
              <span className="text-[11px] sm:text-xs text-[#D7E2EA]/60 uppercase tracking-wider">
                Technologies
              </span>
              <span className="text-xs sm:text-sm font-medium text-white truncate max-w-[200px]">
                {project.technologies.join(', ')}
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Palette className="w-4 h-4 text-cyan-300" />
              <span className="text-[11px] sm:text-xs text-[#D7E2EA]/60 uppercase tracking-wider">
                Status
              </span>
              <span className="text-xs sm:text-sm font-medium text-white">
                {project.status || 'Active Project'}
              </span>
            </div>
          </div>

          {/* Project Description */}
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400 block mb-1.5">
                About the Project
              </span>
              <p className="text-sm sm:text-base text-[#D7E2EA]/90 leading-relaxed font-light">
                {project.description}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-[#D7E2EA]/60 mr-2">
                Technologies:
              </span>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Thumbnail preview */}
          <div className="space-y-4 mb-8">
            <div className="w-full rounded-2xl overflow-hidden bg-black/40 border border-white/10 max-h-[460px]">
              <img
                src={project.thumbnail || project.col2Img}
                alt={`${project.name} preview`}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Footer action */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-medium bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              ) : (
                <span className="px-3.5 py-2 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-white/40 flex items-center gap-1.5 select-none">
                  <Github className="w-3.5 h-3.5 text-white/30" />
                  <span>GitHub: Coming Soon</span>
                </span>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-medium bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span className="px-3.5 py-2 rounded-full text-xs font-medium bg-white/[0.04] border border-white/10 text-white/40 flex items-center gap-1.5 select-none">
                  <ExternalLink className="w-3.5 h-3.5 text-white/30" />
                  <span>Live Demo: Coming Soon</span>
                </span>
              )}
            </div>

            <a
              href="https://www.linkedin.com/in/yash-saxena-a99720383/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA] hover:bg-[#D7E2EA]/10 uppercase tracking-widest text-xs font-medium flex items-center gap-2 cursor-pointer transition-colors"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
