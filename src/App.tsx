/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ToolsSection } from './components/ToolsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';
import type { Project } from './components/ProjectsSection';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main
      className="bg-[#0C0C0C] text-[#D7E2EA] font-['Kanit',sans-serif] min-h-screen w-full relative"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section with Interactive Living Portrait */}
      <HeroSection
        onOpenContact={() => setIsContactOpen(true)}
        onNavigate={handleNavigate}
      />

      {/* 2. Marquee Section with Dual Direction Scroll-Driven Motion Sites GIFs */}
      <MarqueeSection />

      {/* 3. About Section with 3D Floating Objects and Animated Text Reveal */}
      <AboutSection onOpenContact={() => setIsContactOpen(true)} />

      {/* 4. Services Section with White Card & Staggered Offerings */}
      <ServicesSection />

      {/* 5. Tools I Use Section */}
      <ToolsSection />

      {/* 6. Projects Section with Sticky Stacking Cards and CloudFront Showcases */}
      <ProjectsSection
        onOpenProjectModal={(project) => setSelectedProject(project)}
      />

      {/* 6. Education Section with Clean Modern Academic Card */}
      <EducationSection />

      {/* 7. Contact Section with Phone, Email, LinkedIn, Form & Resume Download */}
      <ContactSection />

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Modals */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </main>
  );
}
