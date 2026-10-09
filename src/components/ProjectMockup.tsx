import React from 'react';
import type { Project } from '../types';
import { ShieldCheck, Zap, Activity, Clock, ShoppingCart, Home, Users, CheckCircle2 } from 'lucide-react';

interface ProjectMockupProps {
  project: Project;
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ project }) => {
  if (project.image && project.image.trim() !== '') {
    return (
      <div className="w-full h-48 sm:h-56 overflow-hidden rounded-xl bg-[#0d1117] border border-[#1f2632]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
        />
      </div>
    );
  }

  // Fallback to custom crafted UI mockups per project
  if (project.mockupType === 'chess') {
    return (
      <div className="w-full h-52 sm:h-60 rounded-xl bg-[#0a0e14] border border-[#1c2433] p-4 flex flex-col justify-between overflow-hidden relative group">
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

        {/* Top Status Bar */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#1c2433] pb-2 text-[11px] font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-gray-300">Live Match #4829</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-lime-400/10 text-lime-400 border border-lime-400/20 text-[10px]">
              Latency: 18ms (-35%)
            </span>
          </div>
        </div>

        {/* Center Chessboard Visual Simulation */}
        <div className="relative z-10 flex items-center justify-center gap-5 my-auto">
          {/* Mini 4x4 sample board preview */}
          <div className="grid grid-cols-4 w-28 h-28 rounded-lg overflow-hidden border border-[#2d3748] shadow-lg shadow-black/60">
            {Array.from({ length: 16 }).map((_, i) => {
              const row = Math.floor(i / 4);
              const col = i % 4;
              const isDark = (row + col) % 2 === 1;
              const hasWhitePiece = i === 14 || i === 15;
              const hasBlackPiece = i === 0 || i === 2;
              const isMoved = i === 10;
              return (
                <div
                  key={i}
                  className={`flex items-center justify-center text-xs font-bold ${
                    isMoved
                      ? 'bg-lime-400/30 text-lime-300 ring-1 ring-lime-400'
                      : isDark
                      ? 'bg-[#1a2130]'
                      : 'bg-[#283347]'
                  }`}
                >
                  {hasWhitePiece && <span className="text-white drop-shadow">♟</span>}
                  {hasBlackPiece && <span className="text-amber-400 drop-shadow">♞</span>}
                  {isMoved && <span className="text-lime-300 drop-shadow">♝</span>}
                </div>
              );
            })}
          </div>

          {/* Real-time Game Feed */}
          <div className="flex flex-col gap-1.5 text-xs font-mono">
            <div className="flex items-center gap-2 text-gray-400 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-gray-500" />
              <span className="text-white font-semibold">04:42</span> vs{' '}
              <span className="text-gray-400">04:18</span>
            </div>
            <div className="p-2 rounded bg-[#111722] border border-[#1e2838] text-[10px] text-gray-300 space-y-0.5">
              <div className="text-gray-500">Move Log:</div>
              <div className="text-lime-400">14. ... Nf6+ (synced)</div>
              <div className="text-gray-400">15. Kh1 Bb4</div>
            </div>
            <div className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
              <Activity className="w-3 h-3" />
              <span>99% State Consistency</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#1c2433] text-[10px] text-gray-500 font-mono">
          <span>Socket.io WebSocket</span>
          <span className="text-gray-400">Touch & Responsive UI</span>
        </div>
      </div>
    );
  }

  if (project.mockupType === 'ecommerce') {
    return (
      <div className="w-full h-52 sm:h-60 rounded-xl bg-[#0a0e14] border border-[#1c2433] p-4 flex flex-col justify-between overflow-hidden relative group">
        <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#1c2433] pb-2 text-[11px]">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-3.5 h-3.5 text-lime-400" />
            <span className="text-white font-medium">B2B Wholesale Portal</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 text-[10px] font-mono">
            Role: Wholesaler
          </span>
        </div>

        {/* Center Mock Data Cards */}
        <div className="relative z-10 grid grid-cols-2 gap-3 my-auto">
          <div className="p-2.5 rounded-lg bg-[#111722] border border-[#1f293b]">
            <div className="text-[10px] text-gray-400 mb-0.5">Bulk Order #491</div>
            <div className="text-sm font-bold text-white mb-1">$4,850.00</div>
            <div className="text-[10px] text-lime-400 font-mono flex items-center gap-1">
              <Zap className="w-3 h-3" />
              <span>Workflow +40% faster</span>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-[#111722] border border-[#1f293b]">
            <div className="text-[10px] text-gray-400 mb-0.5">Cart Optimization</div>
            <div className="text-sm font-bold text-white mb-1">Tier-3 Pricing</div>
            <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Checkout +25% efficient</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#1c2433] text-[10px] text-gray-500 font-mono">
          <span>React.js · Django · PostgreSQL</span>
          <span className="text-gray-400">Hostinger & Git Deployment</span>
        </div>
      </div>
    );
  }

  if (project.mockupType === 'realestate') {
    return (
      <div className="w-full h-52 sm:h-60 rounded-xl bg-[#0a0e14] border border-[#1c2433] p-4 flex flex-col justify-between overflow-hidden relative group">
        <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

        {/* Top Header */}
        <div className="relative z-10 flex items-center justify-between border-b border-[#1c2433] pb-2 text-[11px]">
          <div className="flex items-center gap-2">
            <Home className="w-3.5 h-3.5 text-lime-400" />
            <span className="text-white font-medium">Property Discovery Hub</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-lime-400/10 text-lime-400 border border-lime-400/20 text-[10px] font-mono">
            Query: 28ms fast
          </span>
        </div>

        {/* Center Mock Property Card */}
        <div className="relative z-10 p-3 rounded-lg bg-[#111722] border border-[#1f293b] flex items-center gap-3 my-auto">
          <div className="w-16 h-16 rounded-md bg-[#1a2333] border border-[#2b374d] flex items-center justify-center text-lime-400 shrink-0">
            <Home className="w-7 h-7 opacity-80" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white truncate">Waterfront Luxury Villa</span>
              <span className="text-xs font-bold text-lime-400">$420,000</span>
            </div>
            <div className="text-[11px] text-gray-400 mt-0.5">4 Beds · 3 Baths · 2,800 sqft</div>
            <div className="flex items-center gap-2 mt-1.5 text-[10px] text-gray-500 font-mono">
              <span className="text-emerald-400 font-medium">Inquiries +30%</span>
              <span>·</span>
              <span>REST APIs & MongoDB</span>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#1c2433] text-[10px] text-gray-500 font-mono">
          <span>Favorites & Saved Inquiries</span>
          <span className="text-gray-400">Navigation +35% fast</span>
        </div>
      </div>
    );
  }

  // Matrimony
  return (
    <div className="w-full h-52 sm:h-60 rounded-xl bg-[#0a0e14] border border-[#1c2433] p-4 flex flex-col justify-between overflow-hidden relative group">
      <div className="absolute inset-0 bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-[#1c2433] pb-2 text-[11px]">
        <div className="flex items-center gap-2">
          <Users className="w-3.5 h-3.5 text-lime-400" />
          <span className="text-white font-medium">Wedring Platform Suite</span>
        </div>
        <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-300 border border-purple-500/20 text-[10px] font-mono">
          Freelance / Client Work
        </span>
      </div>

      {/* Center Details */}
      <div className="relative z-10 grid grid-cols-2 gap-3 my-auto">
        <div className="p-2.5 rounded-lg bg-[#111722] border border-[#1f293b]">
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mb-1">
            <ShieldCheck className="w-3.5 h-3.5 text-lime-400" />
            <span>Admin Control Panel</span>
          </div>
          <div className="text-xs font-semibold text-white">Profile Verification Suite</div>
          <div className="text-[10px] text-gray-400 mt-1 font-mono">React.js Web Dashboard</div>
        </div>

        <div className="p-2.5 rounded-lg bg-[#111722] border border-[#1f293b]">
          <div className="flex items-center gap-1.5 text-[10px] text-gray-400 mb-1">
            <Activity className="w-3.5 h-3.5 text-emerald-400" />
            <span>Mobile Client & APIs</span>
          </div>
          <div className="text-xs font-semibold text-white">Cross-Platform App</div>
          <div className="text-[10px] text-gray-400 mt-1 font-mono">Node.js · Express · Mongo</div>
        </div>
      </div>

      {/* Bottom Banner */}
      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[#1c2433] text-[10px] text-gray-500 font-mono">
        <span>Production Matchmaking System</span>
        <span className="text-lime-400">Live Client Project</span>
      </div>
    </div>
  );
};
