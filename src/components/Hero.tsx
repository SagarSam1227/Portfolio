import React from 'react';
import { ArrowDown, Download, Mail, MapPin, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { InteractiveTerminal } from './InteractiveTerminal';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center pt-24 pb-16 lg:py-28 overflow-hidden"
    >
      {/* Background glow effects - tasteful and subtle */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-lime-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-10 right-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline and introduction */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {/* Availability / Status Badge */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#11151c] border border-[#232b3b] text-xs font-mono text-gray-300">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400"></span>
                </span>
                <span className="text-gray-300">{personalInfo.statusText}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-gray-500 font-medium">
                <MapPin className="w-3.5 h-3.5 text-gray-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Small introduction */}
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-lime-400 font-semibold">
                {personalInfo.smallIntro}
              </span>
              <div className="h-px w-10 bg-lime-400/30" />
            </div>

            {/* Main headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Building digital{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-lime-300">
                experiences
              </span>{' '}
              that work{' '}
              <span className="relative inline-block text-lime-400">
                beautifully
                <span className="absolute left-0 bottom-1 w-full h-[3px] bg-lime-400/40 rounded-full" />
              </span>
              .
            </h1>

            {/* Professional title */}
            <div className="text-base sm:text-lg font-medium text-gray-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-lime-400 shrink-0" />
              <span>{personalInfo.subtitle}</span>
            </div>

            {/* Supporting text */}
            <p className="text-base sm:text-lg text-gray-400 max-w-2xl leading-relaxed">
              {personalInfo.summary}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-lime-400 text-black font-semibold text-sm hover:bg-lime-300 transition-all duration-200 shadow-lg shadow-lime-400/20 hover:shadow-lime-400/30 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumeUrl}
                download={personalInfo.resumeFileName}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#11151c] text-white font-medium text-sm border border-[#232b3b] hover:border-gray-500 hover:bg-[#161c24] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
              >
                <Download className="w-4 h-4 text-lime-400" />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-4 border-t border-[#1f2632]/80">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-mono">Connect</span>
              
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#11151c] border border-[#1f2632] text-gray-400 hover:text-white hover:border-lime-400/40 hover:bg-[#161c24] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-[#11151c] border border-[#1f2632] text-gray-400 hover:text-white hover:border-lime-400/40 hover:bg-[#161c24] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2.5 rounded-lg bg-[#11151c] border border-[#1f2632] text-gray-400 hover:text-white hover:border-lime-400/40 hover:bg-[#161c24] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Developer Panel */}
          <div className="lg:col-span-5 w-full">
            <InteractiveTerminal />
          </div>
        </div>
      </div>
    </section>
  );
};
