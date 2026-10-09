import React from 'react';
import { ArrowUp, Mail, Code } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

const currentYear = new Date().getFullYear();

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1f2632] bg-[#07090c] py-12 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#161c26]">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2 text-white font-bold text-lg">
              <div className="w-6 h-6 rounded-md bg-[#11151c] border border-[#283244] flex items-center justify-center text-lime-400">
                <Code className="w-3.5 h-3.5" />
              </div>
              <span>
                SAGAR<span className="text-lime-400">.</span>SAM
              </span>
            </div>
            <p className="text-xs text-gray-500 font-mono">
              {personalInfo.title} · {personalInfo.location}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#11151c] border border-[#1f2632] text-gray-400 hover:text-white hover:border-lime-400/40 transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#11151c] border border-[#1f2632] text-gray-400 hover:text-white hover:border-lime-400/40 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg bg-[#11151c] border border-[#1f2632] text-gray-400 hover:text-white hover:border-lime-400/40 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#11151c] border border-[#1f2632] text-xs text-gray-400 hover:text-white hover:border-gray-500 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-lime-400" />
          </button>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-mono">
          <p>© {currentYear} Sagar Sam. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
