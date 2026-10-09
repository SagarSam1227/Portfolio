import React from 'react';
import { GraduationCap, Award, Calendar, School } from 'lucide-react';
import { educationData } from '../data/education';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 lg:py-24 relative border-t border-[#1f2632]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
            <div className="h-px w-8 bg-lime-400/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Training<span className="text-lime-400">.</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl">
            Formal engineering foundations coupled with rigorous full-stack specialization.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educationData.map((item, idx) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#11151c] border border-[#1f2632] hover:border-[#2b3548] transition-all duration-300 flex flex-col justify-between gap-5 group shadow-lg shadow-black/20"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#161c26] border border-[#232b3b] flex items-center justify-center text-lime-400 group-hover:bg-lime-400/10 group-hover:border-lime-400/30 transition-all">
                    {idx === 0 ? <Award className="w-5 h-5" /> : <School className="w-5 h-5" />}
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#161c26] border border-[#232b3b] text-xs font-mono text-gray-400">
                    <Calendar className="w-3.5 h-3.5 text-gray-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-lime-300 transition-colors">
                  {item.degree}
                </h3>
                <div className="text-sm font-semibold text-lime-400 mt-1">
                  {item.institution}
                </div>

                <p className="text-sm text-gray-400 mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#1a2230] flex items-center justify-between text-xs text-gray-500 font-mono">
                <span>Verified Credential</span>
                <span className="text-gray-400">Engineering</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
