import React, { useState } from 'react';
import { CornerDownRight, CheckCircle2 } from 'lucide-react';

export default function SkillsAndTools({ setActiveTab }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const toolsList = [
    // Web & Full-Stack Development
    {
      name: 'React.js',
      category: 'dev',
      role: 'Frontend UI Architecture',
      color: 'text-cyan-400',
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 fill-cyan-400">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="currentColor" strokeWidth="1" fill="none" className="stroke-cyan-400">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: 'Node.js',
      category: 'dev',
      role: 'Backend Runtime',
      color: 'text-emerald-500',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-emerald-500">
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.2L5 8.2v7.6l7 4.2 7-4.2V8.2L12 4.2z" />
        </svg>
      )
    },
    {
      name: 'Express.js',
      category: 'dev',
      role: 'RESTful API Services',
      color: 'text-slate-800',
      icon: (
        <span className="text-xl font-mono font-black text-slate-800 tracking-tighter">ex.</span>
      )
    },
    {
      name: 'MongoDB',
      category: 'dev',
      role: 'NoSQL Database',
      color: 'text-emerald-600',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-emerald-600">
          <path d="M12 22s6-4.5 6-11c0-4-3-7-6-9-3 2-6 5-6 9 0 6.5 6 11 6 11z" />
        </svg>
      )
    },
    {
      name: 'MySQL',
      category: 'dev',
      role: 'Relational Database',
      color: 'text-sky-700',
      icon: (
        <span className="text-lg font-mono font-black text-sky-700">SQL</span>
      )
    },
    {
      name: 'JavaScript (ES6+)',
      category: 'dev',
      role: 'Modern Dynamic Logic',
      color: 'text-yellow-500',
      icon: (
        <span className="w-8 h-8 rounded bg-[#F7DF1E] text-slate-950 font-black text-xs font-mono flex items-center justify-center shadow-sm">JS</span>
      )
    },
    {
      name: 'HTML5 & CSS3',
      category: 'dev',
      role: 'Semantic Web Structure',
      color: 'text-orange-600',
      icon: (
        <div className="flex gap-1 items-center">
          <span className="w-6 h-7 rounded bg-[#E34F26] text-white text-[10px] font-black font-mono flex items-center justify-center">5</span>
          <span className="w-6 h-7 rounded bg-[#1572B6] text-white text-[10px] font-black font-mono flex items-center justify-center">3</span>
        </div>
      )
    },
    {
      name: 'WordPress',
      category: 'dev',
      role: 'CMS & Custom Solutions',
      color: 'text-[#00749C]',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#00749C]">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18.2a8.2 8.2 0 01-4.7-1.5l3.9-10.7 2.1 6.1 1.2-3.4 1.4 4.1a8.2 8.2 0 01-3.9 5.4z" />
        </svg>
      )
    },
    {
      name: 'Elementor Pro',
      category: 'dev',
      role: 'Visual Page Builder',
      color: 'text-[#92003B]',
      icon: (
        <div className="w-8 h-8 rounded-full bg-[#92003B] text-white font-black flex items-center justify-center text-sm shadow-sm">E</div>
      )
    },
    {
      name: 'WooCommerce',
      category: 'dev',
      role: 'E-commerce Architecture',
      color: 'text-[#7F54B3]',
      icon: (
        <div className="w-9 h-6 rounded bg-[#7F54B3] text-white font-black text-[9px] flex items-center justify-center shadow-sm">WOO</div>
      )
    },

    // SEO & Analytics
    {
      name: 'Google Analytics 4',
      category: 'seo',
      role: 'Web Traffic Analytics',
      color: 'text-amber-500',
      icon: (
        <div className="flex items-end gap-1 h-7">
          <div className="w-1.5 h-3 bg-amber-500 rounded-t"></div>
          <div className="w-1.5 h-5 bg-amber-500 rounded-t"></div>
          <div className="w-1.5 h-7 bg-amber-500 rounded-t"></div>
        </div>
      )
    },
    {
      name: 'Google Search Console',
      category: 'seo',
      role: 'Search Indexing & Audits',
      color: 'text-blue-600',
      icon: (
        <div className="w-8 h-8 rounded-lg bg-blue-600 text-white font-black text-[9px] flex items-center justify-center shadow-sm">GSC</div>
      )
    },
    {
      name: 'Google Tag Manager',
      category: 'seo',
      role: 'Event & Conversion Tracking',
      color: 'text-blue-500',
      icon: (
        <div className="w-7 h-7 rotate-45 border-2 border-blue-500 rounded flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-blue-500 -rotate-45"></div>
        </div>
      )
    },
    {
      name: 'Yoast & Rank Math',
      category: 'seo',
      role: 'Technical & On-Page SEO',
      color: 'text-purple-600',
      icon: (
        <div className="w-8 h-8 rounded bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-[10px] flex items-center justify-center shadow-sm">SEO</div>
      )
    },

    // Marketing & Advertising
    {
      name: 'Google Ads',
      category: 'marketing',
      role: 'Search & Display Ads',
      color: 'text-amber-500',
      icon: (
        <div className="flex items-center gap-0.5">
          <div className="w-3.5 h-7 bg-[#4285F4] rounded-full rotate-[24deg]"></div>
          <div className="w-3.5 h-7 bg-[#FBBC05] rounded-full -rotate-[24deg]"></div>
          <div className="w-3 h-3 bg-[#34A853] rounded-full self-end -ml-1.5"></div>
        </div>
      )
    },
    {
      name: 'Meta Ads Manager',
      category: 'marketing',
      role: 'Social Media Advertising',
      color: 'text-blue-600',
      icon: (
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white font-black text-xs flex items-center justify-center shadow-sm">M</div>
      )
    },
    {
      name: 'Canva Pro',
      category: 'marketing',
      role: 'Visual Identity & Branding',
      color: 'text-teal-500',
      icon: (
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8] text-white font-serif font-black text-xs flex items-center justify-center shadow-sm">C</div>
      )
    }
  ];

  const filteredTools = activeFilter === 'all' 
    ? toolsList 
    : toolsList.filter(t => t.category === activeFilter);

  return (
    <section className="bg-white text-slate-900 py-24 px-4 sm:px-6 relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
            <span>Certifications & Tools</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
            Trusted Skills & Professional Tools
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
            I engineer modern websites and lead-generating campaigns using full-stack development technologies, enterprise analytics, and search-optimized architectures.
          </p>
        </div>

        {/* Layout Grid: Left Sticky Column + Right Tools Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Highlights & Verification CTA */}
          <div className="lg:col-span-4 flex flex-col items-start lg:sticky lg:top-28">
            <h3 className="text-2xl font-serif font-bold text-[#1c1917] tracking-tight mb-4">
              Core Competencies & Stack Standards
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-6">
              Certified across enterprise Google Ads, Cisco Data Analytics, and Full-Stack MERN workflows to ensure your website is secure, fast, and conversion-optimized.
            </p>

            <div className="space-y-3 mb-8 w-full">
              {[
                'Full-Stack MERN (React, Node, Express, MongoDB)',
                'Relational MySQL & Scalable RESTful APIs',
                'Advanced WordPress & Custom Theme Engineering',
                'Google Certified Search & Conversion Tracking',
                'Technical Core Web Vitals & Speed Optimization'
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans">
                  <CheckCircle2 size={16} className="text-[#f9570c] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <a
              href="https://zahidhussainofficial.com/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-7 py-3 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/20 transition-all hover:scale-105 active:scale-95"
            >
              <CornerDownRight size={14} />
              <span>View My Credentials</span>
            </a>
          </div>

          {/* Right Column: Filter Tabs + Balanced Cards Grid */}
          <div className="lg:col-span-8 flex flex-col">
            
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-8">
              {[
                { id: 'all', label: 'All Tools & Tech' },
                { id: 'dev', label: 'Web & Full-Stack' },
                { id: 'seo', label: 'SEO & Analytics' },
                { id: 'marketing', label: 'Ads & Marketing' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-[#f9570c] text-white shadow-md shadow-orange-950/20'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Balanced Cards Grid (Proper Width & Height with Zero Stretching) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-5">
              {filteredTools.map((tool, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white border border-slate-200/90 hover:border-slate-300 rounded-2xl p-5 sm:p-6 flex flex-col items-center text-center justify-between transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-900/10 cursor-pointer overflow-hidden min-h-[160px]"
                >
                  {/* Tool Icon */}
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110">
                    {tool.icon}
                  </div>

                  {/* Tool Name */}
                  <div className="w-full">
                    <h4 className="text-sm font-bold text-slate-900 tracking-tight leading-tight group-hover:text-[#f9570c] transition-colors duration-200">
                      {tool.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-sans mt-1 leading-snug">
                      {tool.role}
                    </p>
                  </div>

                  {/* Bottom Orange Accent Strip on Hover */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#f9570c] transition-all duration-300"></div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}