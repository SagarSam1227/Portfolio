import React from 'react';
import { ExternalLink, Info } from 'lucide-react';
import type { Project } from '../types';
import { isConfiguredUrl } from '../data/projects';
import { ProjectMockup } from './ProjectMockup';
import { GithubIcon } from './SocialIcons';

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewDetails }) => {
  const hasLiveUrl = isConfiguredUrl(project.liveUrl);
  const hasGithubUrl = isConfiguredUrl(project.githubUrl);

  return (
    <div className="flex flex-col rounded-2xl bg-[#11151c] border border-[#1f2632] hover:border-[#2f3b4e] transition-all duration-300 overflow-hidden group shadow-xl shadow-black/20">
      {/* Visual Mockup Preview */}
      <div className="p-4 sm:p-5 pb-0">
        <ProjectMockup project={project} />
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between gap-5">
        <div>
          {/* Category & Client Tag */}
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-[#161c26] text-gray-400 border border-[#232b3b]">
              {project.category}
            </span>
            {project.isClientWork && (
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-purple-500/10 text-purple-300 border border-purple-500/20">
                Freelance Work
              </span>
            )}
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-lime-300 transition-colors">
            {project.title}
          </h3>

          {/* Brief Description */}
          <p className="text-sm text-gray-400 mt-2 leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Key Metric Highlight */}
          {project.highlights.length > 0 && (
            <div className="mt-3.5 p-2.5 rounded-xl bg-[#141a24] border border-[#202937] text-xs text-gray-300 flex items-start gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mt-1.5 shrink-0" />
              <span className="leading-snug">
                <span className="font-semibold text-white">Impact: </span>
                {project.highlights[0]}
              </span>
            </div>
          )}
        </div>

        <div>
          {/* Tech stack badges */}
          <div className="flex flex-wrap gap-1.5 mb-5 pt-3 border-t border-[#1a2230]">
            {project.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-0.5 rounded-md bg-[#161c26] text-xs font-mono text-gray-300 border border-[#232b3b]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between gap-2 pt-2">
            <div className="flex items-center gap-2">
              {/* Live Demo button */}
              {hasLiveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-lime-400 text-black font-semibold text-xs hover:bg-lime-300 transition-colors shadow-sm"
                  title="Open live deployment"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}

              {/* GitHub Button */}
              {hasGithubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161c26] text-gray-200 hover:text-white font-medium text-xs border border-[#243042] hover:bg-[#202937] transition-colors"
                  title="View GitHub repository"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-gray-400" />
                  <span>Code</span>
                </a>
              )}
            </div>

            {/* View Details Button */}
            <button
              type="button"
              onClick={() => onViewDetails(project)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium text-gray-400 hover:text-lime-300 hover:bg-[#161d28] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-lime-400 ml-auto"
            >
              <Info className="w-3.5 h-3.5" />
              <span>Details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
