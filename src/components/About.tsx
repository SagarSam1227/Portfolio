import React from 'react';
import { Download, CheckCircle, Layers, Server, ShieldCheck, Cpu } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export const About: React.FC = () => {
  const verifiedStats = [
    {
      label: 'Core Focus',
      value: 'MERN Stack',
      detail: 'React.js, Node.js, Express, MongoDB',
      icon: Layers,
    },
    {
      label: 'Backend & APIs',
      value: 'REST & Sockets',
      detail: 'Real-time sync, WebSockets, JWT Auth',
      icon: Server,
    },
    {
      label: 'Architecture',
      value: 'Clean & SOLID',
      detail: 'MVC, maintainable component design',
      icon: ShieldCheck,
    },
    {
      label: 'Deployment',
      value: 'Cloud & Linux',
      detail: 'AWS, Nginx, Git-based workflows',
      icon: Cpu,
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative border-t border-[#1f2632]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 font-semibold">
            <span>ABOUT ME</span>
            <div className="h-px w-8 bg-lime-400/30" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            A little about me<span className="text-lime-400">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main narrative */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
              {personalInfo.aboutBio}
            </p>

            {/* Core Competency Highlights */}
            <div className="flex flex-col gap-3 pt-2">
              <h3 className="text-xs uppercase tracking-widest text-gray-400 font-mono font-semibold">
                Core Engineering Strengths
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {personalInfo.coreHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#11151c] border border-[#1f2632] hover:border-lime-400/30 hover:bg-[#151a24] transition-colors"
                  >
                    <div className="w-5 h-5 rounded-full bg-lime-400/10 flex items-center justify-center text-lime-400 shrink-0">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-medium text-gray-200">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resume Download Action */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime-400 text-black font-semibold text-sm hover:bg-lime-300 transition-all duration-200 shadow-md shadow-lime-400/20 hover:shadow-lime-400/30 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>
              <span className="text-xs text-gray-500 font-mono">
                PDF format · Direct download
              </span>
            </div>
          </div>

          {/* Verified Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {verifiedStats.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#11151c] border border-[#1f2632] hover:border-[#283244] transition-all flex flex-col justify-between gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#161c26] border border-[#232b3b] flex items-center justify-center text-lime-400 group-hover:bg-lime-400/10 group-hover:border-lime-400/30 transition-all">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-gray-500 font-mono mb-1">
                      {item.label}
                    </div>
                    <div className="text-lg font-bold text-white mb-1 group-hover:text-lime-300 transition-colors">
                      {item.value}
                    </div>
                    <div className="text-xs text-gray-400 leading-snug">
                      {item.detail}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
