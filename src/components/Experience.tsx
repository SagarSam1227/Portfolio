import React from 'react';
import { Calendar, Check, ExternalLink } from 'lucide-react';
import { experienceData } from '../data/experience';
import { isConfiguredUrl } from '../data/projects';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 lg:py-28 relative border-t border-[#1f2632]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 font-semibold">
            <span>CAREER TIMELINE</span>
            <div className="h-px w-8 bg-lime-400/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Professional Experience<span className="text-lime-400">.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl">
            Demonstrated engineering across full-stack product development, client collaboration, and production infrastructure.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-[#1f2632] ml-4 sm:ml-6 pl-6 sm:pl-8 flex flex-col gap-12">
          {experienceData.map((item) => {
            const hasProjectLink = isConfiguredUrl(item.projectUrl);

            return (
              <div key={item.id} className="relative group">
                {/* Timeline node icon */}
                <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-[#11151c] border-2 border-lime-400 flex items-center justify-center text-lime-400 group-hover:scale-110 transition-transform shadow-md shadow-lime-400/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-lime-400" />
                </div>

                {/* Experience Card */}
                <div className="p-6 sm:p-7 rounded-2xl bg-[#11151c] border border-[#1f2632] hover:border-[#2b3548] transition-all duration-300 shadow-xl shadow-black/30">
                  {/* Top Bar: Role, Company, Period, Type Badge */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#1c2330]">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-lime-300 transition-colors">
                          {item.role}
                        </h3>
                        <span className="text-gray-400 text-sm font-medium">@</span>
                        <span className="text-sm sm:text-base font-semibold text-lime-400">
                          {item.company}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-3 mt-1.5 text-xs text-gray-400 font-mono">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-gray-500" />
                          {item.period}
                        </span>
                        <span>•</span>
                        <span className="capitalize px-2 py-0.5 rounded bg-[#161c26] text-gray-300 text-[11px] font-sans font-medium border border-[#232b3b]">
                          {item.type === 'freelance'
                            ? 'Client / Freelance'
                            : item.type === 'fulltime'
                            ? 'Full-time'
                            : 'Internship'}
                        </span>
                      </div>
                    </div>

                    {/* Optional Project Link (if configured) */}
                    {hasProjectLink ? (
                      <a
                        href={item.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#161c24] text-xs font-medium text-gray-300 hover:text-white hover:bg-[#1d2532] border border-[#232b3b] transition-colors self-start md:self-center"
                      >
                        <span>View Project</span>
                        <ExternalLink className="w-3.5 h-3.5 text-lime-400" />
                      </a>
                    ) : item.type === 'freelance' ? (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-lime-400/10 text-lime-400 text-xs font-mono font-medium border border-lime-400/20 self-start md:self-center">
                        Active Production
                      </span>
                    ) : null}
                  </div>

                  {/* Bullet Points */}
                  <ul className="flex flex-col gap-2.5 mb-5">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-gray-300 leading-relaxed">
                        <div className="w-4 h-4 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Stack Tags */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[#18202d]">
                    <span className="text-xs text-gray-500 font-mono mr-1">Stack:</span>
                    {item.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2.5 py-1 rounded-md bg-[#161c26] text-xs font-mono text-gray-300 border border-[#232b3b]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
