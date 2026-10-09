import React, { useState } from 'react';
import { Copy, Check, Terminal, FileCode, Sliders } from 'lucide-react';
import { useToast } from './Toast';

type ActiveTab = 'profile' | 'config' | 'terminal';

export const InteractiveTerminal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('profile');
  const [copied, setCopied] = useState(false);
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'sagar@portfolio:~$ dev-environment --status',
    '✔ Runtime: Node.js + Vite [ready]',
    '✔ Database connections: MongoDB & PostgreSQL [active]',
    '✔ Socket server: Socket.io [listening on port 4000]',
    'sagar@portfolio:~$ whoami',
    'Full Stack Developer — React, Node, Express, MongoDB',
  ]);
  const [terminalInput, setTerminalInput] = useState('');
  const { showToast } = useToast();

  const profileCode = `interface Developer {
  name: string;
  role: string;
  location: string;
  stack: {
    frontend: string[];
    backend: string[];
    database: string[];
  };
  focus: string[];
  available: boolean;
}

export const sagarSam: Developer = {
  name: "Sagar Sam",
  role: "Full Stack Developer",
  location: "Kerala, India",
  stack: {
    frontend: ["React.js", "Redux", "TypeScript", "Tailwind"],
    backend:  ["Node.js", "Express.js", "REST APIs", "Socket.io"],
    database: ["MongoDB", "PostgreSQL"]
  },
  focus: [
    "Scalable Web Architecture",
    "High-Performance APIs",
    "Clean & Maintainable Code"
  ],
  available: true
};`;

  const configJson = `{
  "developer": "Sagar Sam",
  "specialization": "Full Stack Web Engineering",
  "architecturalPatterns": [
    "Clean Architecture",
    "MVC",
    "SOLID Principles"
  ],
  "communicationProtocols": [
    "RESTful HTTP/HTTPS",
    "WebSocket (Socket.io)",
    "WebRTC (Peer-to-Peer)"
  ],
  "authMethods": [
    "JWT Authentication",
    "Role-Based Access Control (RBAC)"
  ],
  "performanceFocus": {
    "latencyReduction": "up to 35%",
    "stateConsistency": "99% real-time accuracy"
  }
}`;

  const handleCopy = () => {
    const textToCopy = activeTab === 'profile' ? profileCode : configJson;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    showToast('Code copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    const newLines = [`sagar@portfolio:~$ ${terminalInput}`];

    if (cmd === 'help') {
      newLines.push('Available commands: skills, projects, contact, clear, resume, about');
    } else if (cmd === 'skills') {
      newLines.push('React.js, Node.js, Express.js, MongoDB, TypeScript, Socket.io, PostgreSQL');
    } else if (cmd === 'projects') {
      newLines.push('1. Chess Web App (Socket.io) | 2. B2B E-Commerce | 3. Real Estate | 4. Wedring Matrimony');
    } else if (cmd === 'contact') {
      newLines.push('Email: sagarsam606@gmail.com | Phone: +91 9656629064');
    } else if (cmd === 'about') {
      newLines.push('Full Stack Developer focused on scalable web applications and clean code.');
    } else if (cmd === 'resume') {
      newLines.push('Resume available for download at /Sagar-Sam-Resume.pdf');
    } else if (cmd === 'clear') {
      setTerminalHistory(['sagar@portfolio:~$']);
      setTerminalInput('');
      return;
    } else {
      newLines.push(`command not found: ${cmd}. Type 'help' for available commands.`);
    }

    setTerminalHistory((prev) => [...prev, ...newLines]);
    setTerminalInput('');
  };

  return (
    <div className="w-full rounded-2xl bg-[#0c1017] border border-[#1f2632] shadow-2xl shadow-black/60 overflow-hidden font-mono text-xs sm:text-sm">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#11151c] border-b border-[#1f2632]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
        </div>

        {/* Tab selection */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setActiveTab('profile')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs transition-colors ${
              activeTab === 'profile'
                ? 'bg-[#1a212e] text-lime-400 font-medium border border-lime-400/20'
                : 'text-gray-400 hover:text-gray-200 hover:bg-[#161c26]'
            }`}
          >
            <FileCode className="w-3.5 h-3.5" />
            <span>SagarSam.ts</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('config')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs transition-colors ${
              activeTab === 'config'
                ? 'bg-[#1a212e] text-lime-400 font-medium border border-lime-400/20'
                : 'text-gray-400 hover:text-gray-200 hover:bg-[#161c26]'
            }`}
          >
            <Sliders className="w-3.5 h-3.5" />
            <span>stack.config.json</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('terminal')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs transition-colors ${
              activeTab === 'terminal'
                ? 'bg-[#1a212e] text-lime-400 font-medium border border-lime-400/20'
                : 'text-gray-400 hover:text-gray-200 hover:bg-[#161c26]'
            }`}
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>bash</span>
          </button>
        </div>

        {/* Copy action */}
        {activeTab !== 'terminal' ? (
          <button
            type="button"
            onClick={handleCopy}
            className="p-1.5 rounded-md text-gray-400 hover:text-white hover:bg-[#1a212e] transition-colors"
            title="Copy snippet"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-lime-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        ) : (
          <div className="w-7" />
        )}
      </div>

      {/* Content Area */}
      <div className="p-4 sm:p-5 max-h-[380px] overflow-y-auto font-mono text-[11px] sm:text-xs leading-relaxed select-text">
        {activeTab === 'profile' && (
          <pre className="text-gray-300 overflow-x-auto whitespace-pre">
            <code>
              <span className="text-purple-400">interface</span> <span className="text-yellow-300">Developer</span> {'{\n'}
              {'  '}name: <span className="text-sky-300">string</span>;{'\n'}
              {'  '}role: <span className="text-sky-300">string</span>;{'\n'}
              {'  '}location: <span className="text-sky-300">string</span>;{'\n'}
              {'  '}stack: {'{\n'}
              {'    '}frontend: <span className="text-sky-300">string</span>[];{'\n'}
              {'    '}backend: <span className="text-sky-300">string</span>[];{'\n'}
              {'    '}database: <span className="text-sky-300">string</span>[];{'\n'}
              {'  '}{'}'};{'\n'}
              {'  '}focus: <span className="text-sky-300">string</span>[];{'\n'}
              {'  '}available: <span className="text-sky-300">boolean</span>;{'\n'}
              {'}'}{'\n\n'}
              <span className="text-purple-400">export const</span> <span className="text-blue-400">sagarSam</span>: <span className="text-yellow-300">Developer</span> = {'{\n'}
              {'  '}name: <span className="text-lime-300">"Sagar Sam"</span>,{'\n'}
              {'  '}role: <span className="text-lime-300">"Full Stack Developer"</span>,{'\n'}
              {'  '}location: <span className="text-lime-300">"Kerala, India"</span>,{'\n'}
              {'  '}stack: {'{\n'}
              {'    '}frontend: [<span className="text-lime-300">"React.js"</span>, <span className="text-lime-300">"Redux"</span>, <span className="text-lime-300">"TypeScript"</span>],{'\n'}
              {'    '}backend:  [<span className="text-lime-300">"Node.js"</span>, <span className="text-lime-300">"Express.js"</span>, <span className="text-lime-300">"Socket.io"</span>],{'\n'}
              {'    '}database: [<span className="text-lime-300">"MongoDB"</span>, <span className="text-lime-300">"PostgreSQL"</span>]{'\n'}
              {'  '}{'}'},{'\n'}
              {'  '}focus: [{'\n'}
              {'    '}<span className="text-lime-300">"Scalable Web Architecture"</span>,{'\n'}
              {'    '}<span className="text-lime-300">"High-Performance APIs"</span>,{'\n'}
              {'    '}<span className="text-lime-300">"Clean & Maintainable Code"</span>{'\n'}
              {'  '}],{'\n'}
              {'  '}available: <span className="text-amber-400">true</span>{'\n'}
              {'}'};
            </code>
          </pre>
        )}

        {activeTab === 'config' && (
          <pre className="text-gray-300 overflow-x-auto whitespace-pre">
            <code>
              {configJson}
            </code>
          </pre>
        )}

        {activeTab === 'terminal' && (
          <div className="flex flex-col gap-2">
            <div className="text-gray-400">
              {terminalHistory.map((line, idx) => (
                <div
                  key={idx}
                  className={`leading-relaxed ${
                    line.startsWith('sagar@')
                      ? 'text-lime-400 font-semibold'
                      : line.startsWith('✔')
                      ? 'text-emerald-400'
                      : 'text-gray-300'
                  }`}
                >
                  {line}
                </div>
              ))}
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#1f2632]">
              <span className="text-[10px] text-gray-500 self-center mr-1">Try:</span>
              {['skills', 'projects', 'contact', 'about', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  type="button"
                  onClick={() => {
                    setTerminalInput(cmd);
                  }}
                  className="px-2 py-0.5 rounded bg-[#161c26] text-gray-300 hover:text-lime-300 hover:bg-[#1a212e] text-[10px] transition-colors"
                >
                  {cmd}
                </button>
              ))}
            </div>

            <form onSubmit={handleTerminalSubmit} className="flex items-center gap-2 mt-1">
              <span className="text-lime-400 shrink-0 font-bold">sagar@portfolio:~$</span>
              <input
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'help' or click buttons above..."
                className="flex-1 bg-transparent border-none text-white focus:outline-none placeholder-gray-600 text-xs"
              />
            </form>
          </div>
        )}
      </div>

      {/* Terminal Footer Status Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#090c10] border-t border-[#1f2632] text-[10px] text-gray-500">
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          <span>TypeScript · UTF-8 · Ready</span>
        </div>
        <div className="flex items-center gap-3">
          <span>LF</span>
          <span>4 spaces</span>
          <span className="text-gray-400">master</span>
        </div>
      </div>
    </div>
  );
};
