import React from 'react';
import { CornerDownRight, ArrowRight } from 'lucide-react';

export default function WhatIDeliver({ setActiveTab }) {
  const deliverables = [
    {
      title: 'Custom Full-Stack Web Apps',
      subTitle: 'React, Node.js & MERN Stack',
      description: 'Engineer ultra-fast, single-page web applications and REST APIs built with React, Tailwind CSS, Node.js, and MongoDB/MySQL for enterprise performance and zero downtime.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-[#f9570c] stroke-2">
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      )
    },
    {
      title: 'High-Converting WordPress Sites',
      subTitle: 'Modern CMS & E-commerce',
      description: 'Design fast, mobile-responsive, and secure WordPress & WooCommerce websites tailored for corporate authority, lead generation, and seamless content management.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-[#f9570c] stroke-2">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      )
    },
    {
      title: 'Technical SEO & Search Dominance',
      subTitle: 'Google Rankings & Core Web Vitals',
      description: 'Optimize on-page keyword architecture, crawlability, mobile responsiveness, and page load speed to secure top rankings on Google Search Console.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-[#f9570c] stroke-2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" x2="16.65" y1="21" y2="16.65" />
        </svg>
      )
    },
    {
      title: 'B2B Growth & Performance Marketing',
      subTitle: 'Google Ads & Global Pipeline',
      description: 'Launch laser-targeted Google Search Ads and B2B digital marketing funnels to reach qualified international buyers, distributors, and corporate clients.',
      icon: (
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-none stroke-[#f9570c] stroke-2">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" x2="22" y1="12" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-slate-50 text-slate-900 py-24 px-4 sm:px-6 relative border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
            <span>What I Deliver</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
            High-Performance Web Engineering & Growth Systems
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
            I deliver full-stack web engineering, custom web applications, search engine dominance, and data-driven marketing systems focused on measurable business outcomes.
          </p>
        </div>

        {/* 4 Cards Strategic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-white border border-slate-200/90 rounded-[22px] p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ease-out transform hover:-translate-y-2.5 hover:shadow-2xl hover:shadow-slate-900/10 cursor-pointer overflow-hidden min-h-[340px]"
            >
              <div>
                {/* Icon Container */}
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f9570c] group-hover:border-[#f9570c]">
                  {React.cloneElement(item.icon, {
                    className: "w-7 h-7 stroke-[#f9570c] group-hover:stroke-white transition-colors duration-300 stroke-2"
                  })}
                </div>

                {/* Title */}
                <h3 className="text-xl font-serif font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#f9570c] transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Subtitle Tag */}
                <span className="text-[11px] font-sans font-bold text-orange-600 uppercase tracking-wider block mt-1.5">
                  {item.subTitle}
                </span>

                {/* Description */}
                <p className="mt-3.5 text-xs text-slate-600 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Orange Strip on Hover */}
              <div className="absolute bottom-0 left-0 right-0 h-[4px] bg-transparent group-hover:bg-[#f9570c] transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 text-center">
          <a
            href="https://zahidhussainofficial.com/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-orange-950/20 transition-all hover:scale-105 active:scale-95"
          >
            <CornerDownRight size={16} />
            <span>Explore My Work</span>
            <ArrowRight size={15} className="ml-1" />
          </a>
        </div>

      </div>
    </section>
  );
}