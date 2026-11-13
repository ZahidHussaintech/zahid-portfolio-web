import React from 'react';
import { Check, CornerDownRight, Mail, FileDown } from 'lucide-react';

export default function AboutMe({ setActiveTab }) {
  // Tamam verified social links inline SVGs ke sath
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/ZahidHussainPro',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/zahidhussainmarketer/',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/ZahidHussaintech',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
          <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
        </svg>
      )
    },
    {
      name: 'Email',
      url: 'mailto:contact@zahidhussainofficial.com',
      icon: <Mail size={20} />
    }
  ];

  const highlights = [
    'Search Engine Optimization (SEO) & Indexing',
    'Custom React & Full-Stack Node.js Applications',
    'WordPress & WooCommerce Architecture',
    'B2B Commodity Export Lead Pipelines',
    'Core Web Vitals & PageSpeed 95+ Optimization'
  ];

  return (
    <section className="bg-[#0b1322] text-white py-24 px-4 sm:px-6 relative border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Portrait Card with Rounded Soft Corners */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[420px] rounded-[36px] overflow-hidden bg-white shadow-2xl p-2 sm:p-3">
            <div className="w-full h-[460px] sm:h-[520px] rounded-[30px] overflow-hidden bg-slate-100 flex items-end justify-center">
              <img 
                src="/images/about-zahid.webp" 
                alt="Zahid Hussain - Digital Marketer & Developer" 
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  if (!e.target.src.includes('.png') && !e.target.src.includes('.jpg')) {
                    e.target.src = '/images/about-zahid.png';
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Right Column: Bio, Capabilities & Social Links */}
        <div className="lg:col-span-7 flex flex-col items-start">
          
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/50 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
            <span>About Me</span>
          </div>

          {/* Headline (Editorial Serif Style) */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.2]">
            Helping Businesses Grow Through SEO & Web Engineering
          </h2>

          {/* Short Bio Paragraphs */}
          <p className="mt-6 text-sm text-slate-300 font-sans leading-relaxed">
            Hi, I’m <strong className="text-white font-semibold">Zahid Hussain</strong>, a Remote Full-Stack Web Developer, SEO Specialist, and Digital Marketing Consultant from Pakistan.
          </p>

          <p className="mt-4 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            I help startups, local businesses, and international brands improve their online visibility through technical SEO, WordPress engineering, modern full-stack development, Google Ads, and conversion-focused digital strategies.
          </p>

          <p className="mt-4 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
            My goal is simple: build websites that rank, generate qualified leads, and turn visitors into customers.
          </p>

          {/* Checklist */}
          <div className="mt-6 space-y-2.5">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                <Check size={16} className="text-[#f9570c] shrink-0 stroke-[3]" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Social Icons (Normal: Cream BG + Dark Icon | Hover: Solid Orange BG + Pure White Icon) */}
          <div className="mt-8 flex items-center gap-3.5">
            {socialLinks.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.name}
                aria-label={item.name}
                className="w-12 h-12 rounded-full bg-[#faf5ee] hover:bg-[#f9570c] text-slate-900 hover:text-white flex items-center justify-center transition-all duration-300 shadow-md hover:scale-110 active:scale-95 cursor-pointer"
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => {
                setActiveTab?.('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-7 py-3 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <CornerDownRight size={15} />
              <span>Hire Me</span>
            </button>

            <a
              href="/zahid-hussain-resume.pdf"
              download="Zahid-Hussain-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 px-7 py-3 rounded-full text-xs font-bold tracking-wide shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <FileDown size={15} />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}