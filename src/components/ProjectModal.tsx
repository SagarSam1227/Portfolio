import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle } from 'lucide-react';
import type { Project } from '../types';
import { isConfiguredUrl } from '../data/projects';
import { ProjectMockup } from './ProjectMockup';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const hasLiveUrl = isConfiguredUrl(project.liveUrl);
  const hasGithubUrl = isConfiguredUrl(project.githubUrl);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0e131b] border border-[#222d3d] shadow-2xl p-6 sm:p-8 flex flex-col gap-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-[#161d27] text-gray-400 hover:text-white hover:bg-[#202b3a] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
          aria-label="Close details modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-lime-400/10 text-lime-400 border border-lime-400/20">
              {project.category}
            </span>
            {project.isClientWork && (
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Client / Freelance
              </span>
            )}
          </div>
          <h3 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white">
            {project.title}
          </h3>
          <p className="text-sm text-gray-400 mt-1">{project.tagline}</p>
        </div>

        {/* Visual Mockup Preview */}
        <div>
          <ProjectMockup project={project} />
        </div>

        {/* Overview */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
            Overview & Purpose
          </h4>
          <p className="text-sm text-gray-300 leading-relaxed font-normal">
            {project.description}
          </p>
        </div>

        {/* Highlights & Quantitative Impact */}
        <div className="flex flex-col gap-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
            Key Architecture & Achievements
          </h4>
          <ul className="flex flex-col gap-2.5">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-300 leading-relaxed">
                <CheckCircle className="w-4 h-4 text-lime-400 shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Stack */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-lg bg-[#151c27] border border-[#232f42] text-xs font-mono text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-[#1f293b]">
          <div className="flex items-center gap-3">
            {hasLiveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-lime-400 text-black font-semibold text-xs hover:bg-lime-300 transition-colors shadow-sm"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {hasGithubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#161d27] text-white font-medium text-xs border border-[#243042] hover:bg-[#202937] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs text-gray-400 hover:text-white transition-colors ml-auto"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
