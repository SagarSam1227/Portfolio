import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Send, Check } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { useToast } from './Toast';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const { showToast } = useToast();
  const [copiedField, setCopiedField] = useState<'email' | 'phone' | null>(null);

  // Form states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    showToast(`${type === 'email' ? 'Email' : 'Phone'} copied to clipboard!`);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare direct mailto URL
    const mailSubject = encodeURIComponent(
      subject.trim() || `Portfolio Inquiry from ${name.trim() || 'Client'}`
    );
    const mailBody = encodeURIComponent(
      `Hi Sagar,\n\n${message}\n\nFrom: ${name} (${email})`
    );

    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;
    window.location.href = mailtoUrl;

    showToast('Opening your default email client...');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative border-t border-[#1f2632]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-lime-400 font-semibold">
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Have a project in mind?<br className="hidden sm:inline" /> Let's build something{' '}
            <span className="text-lime-400">great</span>.
          </h2>
          <p className="text-base text-gray-400 leading-relaxed">
            I'm open to discussing software development opportunities, interesting projects, and collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#11151c] border border-[#1f2632] hover:border-[#2b3548] transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#161c26] border border-[#232b3b] flex items-center justify-center text-lime-400 group-hover:bg-lime-400/10 group-hover:border-lime-400/30 transition-all shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 font-mono">
                    Email Address
                  </div>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-lime-300 transition-colors break-all"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.email, 'email')}
                className="p-2 rounded-lg bg-[#161c26] text-gray-400 hover:text-white hover:bg-[#1f2736] border border-[#232b3b] transition-colors ml-2 shrink-0"
                title="Copy email address"
              >
                {copiedField === 'email' ? (
                  <Check className="w-4 h-4 text-lime-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-[#11151c] border border-[#1f2632] hover:border-[#2b3548] transition-all flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#161c26] border border-[#232b3b] flex items-center justify-center text-lime-400 group-hover:bg-lime-400/10 group-hover:border-lime-400/30 transition-all shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-gray-500 font-mono">
                    Phone & WhatsApp
                  </div>
                  <a
                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                    className="text-sm sm:text-base font-semibold text-white hover:text-lime-300 transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                className="p-2 rounded-lg bg-[#161c26] text-gray-400 hover:text-white hover:bg-[#1f2736] border border-[#232b3b] transition-colors ml-2 shrink-0"
                title="Copy phone number"
              >
                {copiedField === 'phone' ? (
                  <Check className="w-4 h-4 text-lime-400" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="p-5 rounded-2xl bg-[#11151c] border border-[#1f2632] flex items-center gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#161c26] border border-[#232b3b] flex items-center justify-center text-lime-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-mono">
                  Location
                </div>
                <div className="text-sm sm:text-base font-semibold text-white">
                  {personalInfo.location}
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-5 rounded-2xl bg-[#11151c] border border-[#1f2632] flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500 font-mono mb-1">
                  Online Profiles
                </div>
                <div className="text-sm font-semibold text-white">GitHub & LinkedIn</div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#161c26] border border-[#232b3b] text-gray-300 hover:text-white hover:border-lime-400/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-[#161c26] border border-[#232b3b] text-gray-300 hover:text-white hover:border-lime-400/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Email Flow Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#11151c] border border-[#1f2632] shadow-xl shadow-black/20">
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#1f2632]">
              <div>
                <h3 className="text-lg font-bold text-white">Direct Message Generator</h3>
                <p className="text-xs text-gray-400 mt-0.5">
                  Pre-fills your message into your email client.
                </p>
              </div>
              <span className="px-2.5 py-1 rounded bg-[#161c26] text-[11px] font-mono text-gray-400 border border-[#232b3b]">
                mailto protocol
              </span>
            </div>

            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Smith"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#151c26] border border-[#232b3b] text-white text-sm focus:outline-none focus:border-lime-400 transition-colors placeholder-gray-500"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#151c26] border border-[#232b3b] text-white text-sm focus:outline-none focus:border-lime-400 transition-colors placeholder-gray-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Full Stack Developer Opportunity / Project Inquiry"
                  className="w-full px-4 py-2.5 rounded-xl bg-[#151c26] border border-[#232b3b] text-white text-sm focus:outline-none focus:border-lime-400 transition-colors placeholder-gray-500"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-gray-400 mb-1.5">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hello Sagar, I came across your portfolio and would like to discuss..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#151c26] border border-[#232b3b] text-white text-sm focus:outline-none focus:border-lime-400 transition-colors placeholder-gray-500 resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-lime-400 text-black font-semibold text-sm hover:bg-lime-300 transition-all duration-200 shadow-md shadow-lime-400/20 hover:shadow-lime-400/30 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-lime-400"
                >
                  <Send className="w-4 h-4" />
                  <span>Open In Email Client</span>
                </button>

                <p className="text-[11px] text-gray-500 font-mono">
                  No server storage needed · Direct email launch
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
