import React, { useState } from 'react';
import {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Boxes,
  Sparkles,
} from 'lucide-react';
import { skillCategories } from '../data/skills';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Code2,
  Layout,
  Server,
  Database,
  Cpu,
  Boxes,
};

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filterOptions = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'databases', label: 'Databases' },
    { id: 'tools', label: 'Tools & DevOps' },
    { id: 'concepts', label: 'Architecture' },
  ];

  const displayedCategories =
    selectedFilter === 'all'
      ? skillCategories
      : skillCategories.filter((cat) => cat.id === selectedFilter);

  return (
    <section id="skills" className="py-20 lg:py-28 relative border-t border-[#1f2632]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 font-semibold">
              <span>TECHNICAL EXPERTISE</span>
              <div className="h-px w-8 bg-lime-400/30" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Technologies<span className="text-lime-400">.</span>
            </h2>
            <p className="text-sm sm:text-base text-gray-400 max-w-xl">
              Cleanly categorized stack reflecting hands-on production and application development.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#11151c] border border-[#1f2632] rounded-xl self-start sm:self-auto">
            {filterOptions.map((filter) => (
              <button
                key={filter.id}
                type="button"
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedFilter === filter.id
                    ? 'bg-lime-400 text-black font-semibold shadow-sm'
                    : 'text-gray-400 hover:text-white hover:bg-[#161c24]'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => {
            const Icon = iconMap[category.iconName] || Code2;
            return (
              <div
                key={category.id}
                className="p-6 rounded-2xl bg-[#11151c] border border-[#1f2632] hover:border-[#2b3548] transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/20"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#161c26] border border-[#232b3b] flex items-center justify-center text-lime-400 group-hover:bg-lime-400/10 group-hover:border-lime-400/30 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-lime-300 transition-colors">
                        {category.title}
                      </h3>
                      <span className="text-[11px] text-gray-500 font-mono">
                        {category.skills.length} competencies
                      </span>
                    </div>
                  </div>

                  {/* Card Description */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-5">
                    {category.description}
                  </p>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <div
                        key={index}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                          skill.highlighted
                            ? 'bg-[#151c24] text-gray-100 border border-[#2b3548] hover:border-lime-400/40 hover:text-lime-300'
                            : 'bg-[#121620] text-gray-300 border border-[#1d2432] hover:border-gray-500'
                        }`}
                      >
                        {skill.highlighted && (
                          <Sparkles className="w-2.5 h-2.5 text-lime-400 shrink-0" />
                        )}
                        <span>{skill.name}</span>
                      </div>
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
