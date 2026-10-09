import React, { useState } from 'react';
import type { Project } from '../types';
import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { FolderGit2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'fullstack' | 'client'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'client') return project.isClientWork;
    if (activeFilter === 'fullstack') return project.category === 'Full Stack';
    return true;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative border-t border-[#1f2632]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 font-semibold">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>PORTFOLIO SHOWCASE</span>
              <div className="h-px w-8 bg-lime-400/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects<span className="text-lime-400">.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              Architected for real-time responsiveness, concurrency, scalable data models, and clean UX.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#11151c] border border-[#1f2632] rounded-xl self-start md:self-auto">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-lime-400 text-black font-semibold'
                  : 'text-gray-400 hover:text-white hover:bg-[#161c24]'
              }`}
            >
              All Projects ({projects.length})
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('fullstack')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'fullstack'
                  ? 'bg-lime-400 text-black font-semibold'
                  : 'text-gray-400 hover:text-white hover:bg-[#161c24]'
              }`}
            >
              Full Stack
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('client')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'client'
                  ? 'bg-lime-400 text-black font-semibold'
                  : 'text-gray-400 hover:text-white hover:bg-[#161c24]'
              }`}
            >
              Client Work
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>
      </div>

      {/* Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
