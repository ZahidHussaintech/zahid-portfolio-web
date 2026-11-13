import React from 'react';
import { Mail, MessageSquare, ArrowUp, ExternalLink } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const directEmail = 'contact@zahidhussainofficial.com';
  const whatsappUrl = 'https://wa.me/923379814592';
  const githubUrl = 'https://github.com/ZahidHussaintech';
  const linkedinUrl = 'https://www.linkedin.com/in/zahidhussainmarketer/';
  const facebookUrl = 'https://www.facebook.com/ZahidHussainPro';
  const blogUrl = 'https://biztools.zahidhussainofficial.com/';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (id) => {
    setActiveTab?.(id);
    scrollToTop();
  };

  return (
    <footer className="bg-[#050914] text-slate-300 border-t border-slate-800/80 pt-16 pb-12 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 flex flex-col items-start">
            <button 
              onClick={() => handleNav('home')} 
              className="flex items-center gap-2.5 text-left mb-4 cursor-pointer focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f9570c] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-orange-950/40">
                Z
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-black tracking-tight text-white leading-none">
                  ZAHID<span className="text-[#f9570c]">.</span>
                </span>
                <span className="text-[10px] font-sans uppercase font-bold text-slate-400 tracking-wider mt-0.5">
                  Full-Stack & Technical SEO
                </span>
              </div>
            </button>

            <p className="text-xs sm:text-sm text-slate-400 font-sans leading-relaxed max-w-sm mb-6">
              Engineering high-speed custom React/Node.js web applications, Google Search Console indexing strategies, and international B2B export pipelines.
            </p>

            {/* Social Icons Bar */}
            <div className="flex items-center gap-3">
              {/* LinkedIn */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-[#f9570c] hover:bg-[#f9570c] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="LinkedIn"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              {/* GitHub */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-[#f9570c] hover:bg-[#f9570c] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="GitHub"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-[#f9570c] hover:bg-[#f9570c] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 hover:border-[#f9570c] hover:bg-[#f9570c] text-slate-300 hover:text-white flex items-center justify-center transition-all hover:scale-105"
                aria-label="WhatsApp"
              >
                <MessageSquare size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#f9570c] mb-4">
              Explore Pages
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm font-sans">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-white transition-colors cursor-pointer">
                  Home Overview
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-white transition-colors cursor-pointer">
                  About & Background
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-white transition-colors cursor-pointer">
                  Selected Work & Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-white transition-colors cursor-pointer">
                  Capabilities & Pricing
                </button>
              </li>
              <li>
                <a 
                  href={blogUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#f9570c] transition-colors inline-flex items-center gap-1"
                >
                  <span>BizTools Blog</span>
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors cursor-pointer">
                  Contact & Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Inquiry Info */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-[#f9570c] mb-4">
                Direct Contact
              </h4>
              <p className="text-xs text-slate-400 font-sans leading-relaxed mb-3">
                Have an active RFP, contract role, or technical audit request?
              </p>
              <a 
                href={`mailto:${directEmail}`}
                className="text-xs sm:text-sm font-mono font-bold text-white hover:text-[#f9570c] transition-colors block break-all mb-2"
              >
                {directEmail}
              </a>
              <span className="text-xs text-slate-400 font-sans block">
                Karachi, Pakistan (Remote Global Availability)
              </span>
            </div>

            <div className="mt-6">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <ArrowUp size={14} className="text-[#f9570c]" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 font-sans gap-4">
          <p>© 2026 Zahid Hussain. All rights reserved.</p>
          <p className="text-slate-400">
            Engineered with React, Node.js & Technical SEO
          </p>
        </div>

      </div>
    </footer>
  );
}