import React from 'react';
import { CornerDownRight, ExternalLink } from 'lucide-react';

export default function FeaturedPortfolio({ setActiveTab }) {
  const projects = [
    {
      id: 'PROJECT 1',
      title: 'Rose Garden Group — B2B Agricultural Export Platform',
      category: 'Corporate B2B Website • Technical SEO • UI/UX • Global Export Growth',
      description: 'Designed and optimized the official B2B export platform for Rose Garden Group, a leading Pakistan-based exporter of natural sesame seeds, organic dates, and agricultural commodities. Engineered for international buyer trust, fast Core Web Vitals, and organic global inquiry generation.',
      image: '/portfolio/rose-garden-b2b-export-website-seo.webp',
      fallback: '/images/portfolio/rose-garden-b2b-export-website-seo.webp',
      liveUrl: 'https://rosegardengroup.pk/',
      details: [
        {
          label: 'Industry',
          value: 'Agricultural Export & B2B Manufacturing',
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#f9570c] stroke-2">
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
              <path d="M10 6h4" />
              <path d="M10 10h4" />
              <path d="M10 14h4" />
              <path d="M10 18h4" />
            </svg>
          )
        },
        {
          label: 'Services Provided',
          value: 'WordPress, Elementor, Speed Optimization, B2B SEO & Digital Marketing',
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#f9570c] stroke-2">
              <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.9a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
              <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
              <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
            </svg>
          )
        },
        {
          label: 'Target Markets',
          value: 'USA, UK, Europe, Middle East & Global B2B Buyers',
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#f9570c] stroke-2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
              <path d="M2 12h20" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'PROJECT 2',
      title: 'Sindhuparas — Agro Commodities Export Showcase',
      category: 'Custom React Web • B2B Export Line • Machine-Cleaned Seeds & Organic Dates',
      description: 'Engineered a modern, high-speed B2B commodity export showcase portal for machine-cleaned 99/1 & 99.5% purity natural white sesame seeds, omega-rich flaxseed, and premium Pakistani organic dates. Built on React and Tailwind CSS with edge hosting on Netlify for 100/100 performance, high-speed FOB/CIF quotation funnels, and verified buyer conversion.',
      image: '/portfolio/sindhuparas-b2b-sesame-seeds-dates-export.webp',
      fallback: '/images/portfolio/sindhuparas-b2b-sesame-seeds-dates-export.webp',
      liveUrl: 'https://sindhuparas.netlify.app/',
      details: [
        {
          label: 'Commodities Line',
          value: 'Natural White Sesame Seeds (99.5% Cleaned), Flaxseed & Organic Dates',
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#f9570c] stroke-2">
              <path d="M2 22 16 8" />
              <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
              <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
              <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
              <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
              <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
              <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
            </svg>
          )
        },
        {
          label: 'Tech Stack & Security',
          value: 'Vite, React, Tailwind CSS, Netlify Edge CDN & Zero-Vulnerability Architecture',
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#f9570c] stroke-2">
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>
          )
        },
        {
          label: 'Primary Objective',
          value: 'Direct FOB/CIF International Inquiries, Global B2B Trust & Blazing Fast UX',
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#f9570c] stroke-2">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          )
        }
      ]
    },
    {
      id: 'PROJECT 3',
      title: 'Zahid Hussain — Scalable Systems & Secure Data Intelligence',
      category: 'Full-Stack MERN Architecture • Cisco Data Analytics • Cisco Cybersecurity',
      description: 'Engineered an enterprise-grade dark telemetry digital showcase highlighting full-stack MERN engineering, Cisco-certified data analytics pipelines, and mission-critical network security standards. Designed to demonstrate scalable backend services, RESTful APIs, and technical consulting authority.',
      image: '/portfolio/zahid-hussain-full-stack-mern-cisco-portfolio.webp',
      fallback: '/images/portfolio/zahid-hussain-full-stack-mern-cisco-portfolio.webp',
      liveUrl: 'https://zahidhussainofficial.com/portfolio/',
      details: [
        {
          label: 'Core Pillars',
          value: 'Full-Stack MERN Development, Cisco Data Analytics & Network Cybersecurity',
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#f9570c] stroke-2">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
              <path d="m9 12 2 2 4-4" />
            </svg>
          )
        },
        {
          label: 'System Capabilities',
          value: 'Real-Time Telemetry UI, High-Throughput REST APIs, Node.js & React Dashboards',
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#f9570c] stroke-2">
              <rect width="16" height="16" x="4" y="4" rx="2" />
              <rect width="6" height="6" x="9" y="9" rx="1" />
              <path d="M15 2v2" />
              <path d="M15 20v2" />
              <path d="M2 15h2" />
              <path d="M2 9h2" />
              <path d="M20 15h2" />
              <path d="M20 9h2" />
              <path d="M9 2v2" />
              <path d="M9 20v2" />
            </svg>
          )
        },
        {
          label: 'Measurable Focus',
          value: 'Enterprise-Grade Security, 100% Data Integrity & Global Technical Consulting',
          icon: (
            <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-[#f9570c] stroke-2">
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
          )
        }
      ]
    }
  ];

  return (
    <section className="bg-white text-slate-900 py-24 px-4 sm:px-6 relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
            <span>Featured Portfolio</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
            Projects That Delivered Real Business Growth
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
            Real websites, custom full-stack web applications, technical SEO, and data-driven systems engineered for measurable business results.
          </p>

          <div className="mt-6">
            <a
              href="https://zahidhussainofficial.com/portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-7 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/20 transition-all hover:scale-105 active:scale-95"
            >
              <CornerDownRight size={14} />
              <span>View All Projects</span>
            </a>
          </div>
        </div>

        {/* Projects Loop */}
        <div className="space-y-28 mt-16">
          {projects.map((project, index) => (
            <article key={index} className="flex flex-col items-center">
              
              {/* Project Image Mockup Card */}
              <div className="w-full max-w-4xl rounded-[28px] overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xl group cursor-pointer relative">
                <img
                  src={project.image}
                  alt={`${project.title} by Zahid Hussain`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  onError={(e) => {
                    if (e.target.src.indexOf(project.fallback) === -1) {
                      e.target.src = project.fallback;
                    }
                  }}
                />
              </div>

              {/* View Live Project Button */}
              <div className="mt-7">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-7 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/20 transition-all hover:scale-105 active:scale-95"
                >
                  <CornerDownRight size={14} />
                  <span>View Live Website</span>
                  <ExternalLink size={13} className="ml-0.5" />
                </a>
              </div>

              {/* Project Title & Category Info */}
              <div className="text-center max-w-3xl mx-auto mt-9">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#1c1917] tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm font-sans font-bold text-[#f9570c] uppercase tracking-wide">
                  {project.category}
                </p>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto">
                  {project.description}
                </p>

                {/* Project Overview Badge */}
                <div className="mt-7 inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[10px] font-bold uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
                  <span>Project Overview</span>
                </div>
              </div>

              {/* 3 Overview Micro-Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-9">
                {project.details.map((detail, dIdx) => (
                  <div
                    key={dIdx}
                    className="bg-white border border-slate-200/90 rounded-2xl p-7 text-center flex flex-col items-center justify-start transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/15 cursor-pointer shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-4 transition-transform duration-300 hover:scale-110">
                      {detail.icon}
                    </div>

                    <h4 className="text-lg sm:text-xl font-serif font-bold text-[#1c1917] tracking-tight mb-2">
                      {detail.label}
                    </h4>

                    <p className="text-xs sm:text-[13px] text-slate-600 font-sans leading-relaxed">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>

            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-24 text-center">
          <a
            href="https://zahidhussainofficial.com/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-orange-950/20 transition-all hover:scale-105 active:scale-95"
          >
            <CornerDownRight size={16} />
            <span>View Complete Portfolio</span>
            <ExternalLink size={15} className="ml-1" />
          </a>
        </div>

      </div>
    </section>
  );
}