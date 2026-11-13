import React, { useState } from 'react';
import { 
  CornerDownRight, 
  ExternalLink, 
  Layers, 
  Code2, 
  Globe2, 
  CheckCircle2, 
  ShieldCheck,
  Building2,
  Cpu,
  ArrowRight,
  Database,
  Search,
  Sparkles,
  Mail,
  Briefcase
} from 'lucide-react';

export default function Projects({ setActiveTab }) {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [toolsFilter, setToolsFilter] = useState('all');
  const directEmail = 'contact@zahidhussainofficial.com';

  const filterTabs = [
    { id: 'all', label: 'All Projects' },
    { id: 'b2b-export', label: 'B2B Commodity Export' },
    { id: 'fullstack', label: 'Full-Stack MERN & React' },
    { id: 'wordpress-seo', label: 'WordPress & Technical SEO' }
  ];

  // 1. Top 3 Recent Production Deployments
  const projectCards = [
    {
      id: 'rose-garden',
      categoryType: 'b2b-export',
      categoryBadge: 'Category: B2B Digital Marketing',
      title: 'Rose Garden Group',
      description: 'Digital marketing, SEO indexing, and online presence development for a premier sesame seeds and food commodities exporter.',
      stack: 'WordPress • SEO • B2B Marketing',
      image: '/images/projects/rose-garden-b2b-export-card.webp',
      fallback: '/portfolio/rose-garden-b2b-export-website-seo.webp',
      link: 'https://rosegardengroup.pk/'
    },
    {
      id: 'sindhuparas',
      categoryType: 'b2b-export',
      categoryBadge: 'Category: Custom React & Export Portal',
      title: 'Sindhuparas Agro Export',
      description: 'High-speed B2B commodity portal engineered for machine-cleaned sesame seeds, flaxseed, and organic Pakistani dates with FOB inquiry funnels.',
      stack: 'React • Tailwind CSS • Netlify • B2B SEO',
      image: '/images/projects/sindhuparas-dates-seeds-export-card.webp',
      fallback: '/portfolio/sindhuparas-b2b-sesame-seeds-dates-export.webp',
      link: 'https://sindhuparas.netlify.app/'
    },
    {
      id: 'zahid-portfolio',
      categoryType: 'fullstack',
      categoryBadge: 'Category: Personal Brand & Systems',
      title: 'Zahid Hussain Portfolio',
      description: 'Enterprise telemetry showcase highlighting full-stack MERN engineering, Cisco Data Analytics pipelines, and technical network security standards.',
      stack: 'React • Node.js • Cisco Analytics • SEO',
      image: '/images/projects/zahid-hussain-mern-seo-card.webp',
      fallback: '/portfolio/zahid-hussain-full-stack-mern-cisco-portfolio.webp',
      link: 'https://zahidhussainofficial.com/portfolio/'
    }
  ];

  // 2. 6 Practice & Deep-Dive Prototype Screenshots (Hover Slow Scroll)
  const detailScreenshots = [
    {
      title: 'PakAgro Exports Landing Page',
      category: 'B2B Agro Commodities Export • FOB/CIF Funnel',
      stack: 'React • Tailwind CSS • High-Intent Conversion',
      image: '/images/projects/pakagro-export-b2b-landing-page.webp',
      badge: 'B2B COMMODITY LANDING PAGE'
    },
    {
      title: 'Financial Services & SaaS Website',
      category: 'Fintech Solutions • Global Business Banking',
      stack: 'WordPress • UI/UX • Responsive Corporate Design',
      image: '/images/projects/paygobel-financial-services-web-app.webp',
      badge: 'FINTECH WEB ARCHITECTURE'
    },
    {
      title: 'Gym & Athletics Fitness Portal',
      category: 'Sports & Wellness • Membership Funnel',
      stack: 'WordPress • Elementor • Interactive Classes UI',
      image: '/images/projects/gym-fitness-wellness-website-design.webp',
      badge: 'FITNESS PORTAL'
    },
    {
      title: 'Green Home Plant Store',
      category: 'Botanical Nursery • E-commerce Platform',
      stack: 'WordPress • WooCommerce • Store UX',
      image: '/images/projects/green-home-plants-ecommerce-store.webp',
      badge: 'WOOCOMMERCE STORE'
    },
    {
      title: 'Ribelli Custom Apparel Store',
      category: 'Print-on-Demand Fashion • Online Retail',
      stack: 'WooCommerce • Product Catalog • Speed Optimized',
      image: '/images/projects/ribelli-print-fashion-ecommerce-store.webp',
      badge: 'FASHION E-COMMERCE'
    },
    {
      title: 'EcoSip Sustainable Brand Website',
      category: 'Eco-Friendly Consumer Goods • Modern Brand',
      stack: 'Modern Web Design • UI/UX • Clean Typography',
      image: '/images/projects/ecosip-sustainable-brand-website.webp',
      badge: 'BRAND IDENTITY'
    }
  ];

  // 3. Complete Tools & Technologies Stack (Full-Stack + Marketing)
  const fullStackTools = [
    // Web & Full-Stack Development
    {
      name: 'React.js',
      useCase: 'Modern Single Page Applications & UI',
      category: 'dev',
      icon: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 fill-[#f9570c]">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="currentColor" strokeWidth="1" fill="none" className="stroke-[#f9570c]">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: 'Node.js',
      useCase: 'High-Throughput Backend Runtime',
      category: 'dev',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-[#f9570c] stroke-2">
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z" />
          <circle cx="12" cy="12" r="3" className="fill-[#f9570c]" />
        </svg>
      )
    },
    {
      name: 'Express.js',
      useCase: 'RESTful API Services & Routing',
      category: 'dev',
      icon: (
        <span className="text-xl font-mono font-black text-[#f9570c] tracking-tighter">ex.</span>
      )
    },
    {
      name: 'MongoDB',
      useCase: 'Scalable NoSQL Document Database',
      category: 'dev',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#f9570c]">
          <path d="M12 22s6-4.5 6-11c0-4-3-7-6-9-3 2-6 5-6 9 0 6.5 6 11 6 11z" />
        </svg>
      )
    },
    {
      name: 'MySQL',
      useCase: 'Relational Database Management',
      category: 'dev',
      icon: (
        <span className="text-sm font-mono font-black text-[#f9570c] px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20">SQL</span>
      )
    },
    {
      name: 'Tailwind CSS',
      useCase: 'Utility-First Responsive UI Styling',
      category: 'dev',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#f9570c]">
          <path d="M12 6c-2.4 0-3.9 1.2-4.5 3.6 0.9-1.2 2-1.6 3.3-1.2 0.7 0.2 1.2 0.7 1.8 1.3 0.9 0.9 2 2.1 4.4 2.1 2.4 0 3.9-1.2 4.5-3.6-0.9 1.2-2 1.6-3.3 1.2-0.7-0.2-1.2-0.7-1.8-1.3C15.5 7.2 14.4 6 12 6zm-8 6c-2.4 0-3.9 1.2-4.5 3.6 0.9-1.2 2-1.6 3.3-1.2 0.7 0.2 1.2 0.7 1.8 1.3 0.9 0.9 2 2.1 4.4 2.1 2.4 0 3.9-1.2 4.5-3.6-0.9 1.2-2 1.6-3.3 1.2-0.7-0.2-1.2-0.7-1.8-1.3C7.5 13.2 6.4 12 4 12z" />
        </svg>
      )
    },

    // Search Engine & Analytics
    {
      name: 'Google Search Console',
      useCase: 'Technical SEO & Search Indexing',
      category: 'seo',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-[#f9570c] stroke-2">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    },
    {
      name: 'Google Analytics 4',
      useCase: 'User Behavior & Traffic Analytics',
      category: 'seo',
      icon: (
        <div className="flex items-end gap-1 h-7">
          <div className="w-1.5 h-3 bg-[#f9570c] rounded-t"></div>
          <div className="w-1.5 h-5 bg-[#f9570c] rounded-t"></div>
          <div className="w-1.5 h-7 bg-[#f9570c] rounded-t"></div>
        </div>
      )
    },
    {
      name: 'Google Tag Manager',
      useCase: 'Event Tracking & Data Layer Management',
      category: 'seo',
      icon: (
        <div className="w-7 h-7 rotate-45 border-2 border-[#f9570c] rounded flex items-center justify-center">
          <div className="w-2.5 h-2.5 bg-[#f9570c] -rotate-45"></div>
        </div>
      )
    },
    {
      name: 'Yoast & Rank Math',
      useCase: 'On-Page SEO & Schema Architecture',
      category: 'seo',
      icon: (
        <span className="text-xs font-mono font-black text-[#f9570c] px-2 py-1 rounded bg-orange-500/10 border border-orange-500/20">SEO</span>
      )
    },

    // CMS & Paid Performance
    {
      name: 'WordPress',
      useCase: 'CMS Engineering & Core Customization',
      category: 'cms',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#f9570c]">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18.2a8.2 8.2 0 01-4.7-1.5l3.9-10.7 2.1 6.1 1.2-3.4 1.4 4.1a8.2 8.2 0 01-3.9 5.4z" />
        </svg>
      )
    },
    {
      name: 'Elementor Pro',
      useCase: 'Visual Architecture & High-Speed Layouts',
      category: 'cms',
      icon: (
        <div className="w-8 h-8 rounded-full bg-[#f9570c] text-white font-black flex items-center justify-center text-sm shadow-sm">
          E
        </div>
      )
    },
    {
      name: 'WooCommerce',
      useCase: 'E-commerce Checkout Funnels & Stores',
      category: 'cms',
      icon: (
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-[#f9570c] stroke-2">
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>
      )
    },
    {
      name: 'Google Ads',
      useCase: 'Targeted Search PPC & B2B Buyer Funnels',
      category: 'cms',
      icon: (
        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f9570c] to-amber-500 text-white font-black flex items-center justify-center text-xs">
          Ads
        </div>
      )
    },
    {
      name: 'Meta Ads Manager',
      useCase: 'Social Pipeline & Brand Retargeting',
      category: 'cms',
      icon: (
        <div className="w-8 h-8 rounded-full bg-[#f9570c] text-white font-black flex items-center justify-center text-xs">
          M
        </div>
      )
    },
    {
      name: 'Canva Pro',
      useCase: 'B2B Brochures & Specification Sheets',
      category: 'cms',
      icon: (
        <div className="w-8 h-8 rounded-full border border-[#f9570c] text-[#f9570c] font-serif font-black flex items-center justify-center text-xs">
          C
        </div>
      )
    }
  ];

  const filteredCards = selectedFilter === 'all' 
    ? projectCards 
    : projectCards.filter(p => p.categoryType === selectedFilter || (selectedFilter === 'wordpress-seo' && p.id === 'rose-garden'));

  const filteredTools = toolsFilter === 'all'
    ? fullStackTools
    : fullStackTools.filter(t => t.category === toolsFilter);

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20">
      
      {/* 1. Projects Intro Header */}
      <section className="bg-[#fcf9f5] py-20 sm:py-24 px-4 sm:px-6 relative border-b border-orange-100/70 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-orange-200/20 via-orange-100/10 to-transparent rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
            <span>My Selected Work</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black text-[#1c1917] tracking-tight leading-[1.12]">
            Digital Projects Built With Purpose
          </h1>

          <p className="mt-6 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-sans leading-relaxed">
            Explore my digital marketing and engineering portfolio featuring verified B2B growth and SEO case studies—a selection of high-performance websites, marketing campaigns, and practical solutions built to improve online visibility and business opportunities.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-sans font-bold text-[#f9570c]">
            <span>Websites</span>
            <span className="text-slate-300">•</span>
            <span>SEO</span>
            <span className="text-slate-300">•</span>
            <span>Digital Marketing</span>
            <span className="text-slate-300">•</span>
            <span>B2B Growth</span>
          </div>

          {/* Interactive Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-2.5 pt-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedFilter(tab.id)}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  selectedFilter === tab.id
                    ? 'bg-[#f9570c] text-white shadow-md shadow-orange-950/20 scale-105'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300 hover:text-slate-900 shadow-sm'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Top 3 Recent Work Grid Cards */}
      <section className="py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Featured Projects</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              A Look at My Recent Work
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
              Explore selected projects where I have applied website development, SEO, digital marketing, and business-focused strategies to solve practical problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredCards.map((card, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-[28px] overflow-hidden flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group shadow-sm"
              >
                <div className="w-full h-64 sm:h-72 overflow-hidden bg-slate-100 relative">
                  <img 
                    src={card.image} 
                    alt={`${card.title} project by Zahid Hussain`}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    onError={(e) => {
                      if (e.target.src.indexOf(card.fallback) === -1) {
                        e.target.src = card.fallback;
                      }
                    }}
                  />
                </div>

                <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between text-center">
                  <div>
                    <span className="text-[11px] font-sans font-semibold text-slate-500 uppercase tracking-wider block mb-2">
                      {card.categoryBadge}
                    </span>

                    <h3 className="text-2xl font-serif font-bold text-slate-900 tracking-tight group-hover:text-[#f9570c] transition-colors leading-snug">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-xs sm:text-[13px] text-slate-600 font-sans leading-relaxed">
                      {card.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col items-center">
                    <p className="text-xs font-sans font-bold text-slate-800 tracking-wide mb-6">
                      {card.stack}
                    </p>

                    <a 
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white py-3 px-8 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/20 transition-all hover:scale-105 active:scale-95 w-full sm:w-auto"
                    >
                      <span>View Project</span>
                      <span>→</span>
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Detailed Case Study: PROJECT 01 - Rose Garden Group */}
      <section className="py-24 px-4 sm:px-6 bg-[#fcf9f5] border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Project 01</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              Rose Garden Group
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-sans">
              Building a stronger digital presence and verified inquiry pipeline for an international B2B exporter.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200/90 shadow-xl bg-white p-2">
              <img 
                src="/images/projects/rose-garden-full-website-wireframe-seo.webp" 
                alt="Rose Garden Group Full Website Architecture by Zahid Hussain"
                className="w-full h-auto object-cover rounded-xl"
                onError={(e) => {
                  e.target.src = '/portfolio/rose-garden-b2b-export-website-seo.webp';
                }}
              />
            </div>

            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              
              <div className="border-b border-slate-200 pb-5">
                <h3 className="text-xl font-serif font-bold text-slate-900 tracking-tight">
                  My Role
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 font-sans">
                  Digital Marketing & Business Development Manager
                </p>
              </div>

              <div className="border-b border-slate-200 pb-5">
                <h3 className="text-xl font-serif font-bold text-slate-900 tracking-tight">
                  Services
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 font-sans">
                  Website Development • Technical SEO • Social Media • B2B Buyer Outreach
                </p>
              </div>

              <div className="border-b border-slate-200 pb-5">
                <h3 className="text-xl font-serif font-bold text-slate-900 tracking-tight">
                  Platform
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 font-sans">
                  WordPress & Elementor Pro (Speed Optimized)
                </p>
              </div>

              <div className="border-b border-slate-200 pb-5">
                <h3 className="text-xl font-serif font-bold text-slate-900 tracking-tight">
                  Focus
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 font-sans">
                  International B2B Buyers & Commodity Importers
                </p>
              </div>

              <div className="pb-2">
                <h3 className="text-xl font-serif font-bold text-slate-900 tracking-tight">
                  Tools
                </h3>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 font-sans">
                  WordPress • Elementor • Google Analytics 4 • Search Console • Canva Pro
                </p>
              </div>

              <div className="pt-4">
                <a 
                  href="https://rosegardengroup.pk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white py-3.5 px-8 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/20 transition-all hover:scale-105 active:scale-95"
                >
                  <CornerDownRight size={15} />
                  <span>View Project</span>
                  <ExternalLink size={13} className="ml-1" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. Interactive Vertical Scroll Mockups: "See the Work in Detail" */}
      <section className="py-24 px-4 sm:px-6 bg-white border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Project Screenshots</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              See the Work in Detail
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
              A closer look at selected website layouts, custom landing pages, and responsive UI components created during client projects and specialized practice work.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailScreenshots.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/90 rounded-[26px] p-4 flex flex-col justify-between hover:shadow-2xl hover:border-orange-200 transition-all duration-300 group"
              >
                <div className="w-full h-[360px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 relative cursor-pointer">
                  <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-black/75 backdrop-blur-sm text-[9px] font-bold uppercase tracking-widest text-white shadow-sm pointer-events-none">
                    Hover to Scroll
                  </div>

                  <img
                    src={item.image}
                    alt={`${item.title} Screenshot by Zahid Hussain`}
                    className="w-full h-auto object-cover object-top absolute top-0 left-0 transition-transform duration-700 ease-out group-hover:-translate-y-[calc(100%-360px)] group-hover:transition-transform group-hover:duration-[6500ms] group-hover:ease-linear"
                    onError={(e) => {
                      e.target.src = '/portfolio/rose-garden-b2b-export-website-seo.webp';
                    }}
                  />
                </div>

                <div className="p-4 sm:p-5 text-center flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-slate-900 tracking-tight group-hover:text-[#f9570c] transition-colors leading-snug">
                      {item.title}
                    </h3>
                    
                    <p className="mt-2 text-xs text-slate-500 font-sans leading-relaxed">
                      {item.category}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex flex-col items-center">
                    <span className="text-[11px] font-mono font-bold text-slate-800 mb-4 block">
                      {item.stack}
                    </span>

                    <button
                      onClick={() => {
                        setActiveTab?.('contact');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="inline-flex items-center gap-1.5 bg-[#f9570c] hover:bg-[#e04a05] text-white px-7 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    >
                      <CornerDownRight size={13} />
                      <span>Discuss Project</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. TOOLS & TECHNOLOGIES: "Built With the Right Tools" (Dark Full-Stack Section) */}
      <section className="py-24 sm:py-28 px-4 sm:px-6 bg-[#080e1a] text-white relative border-t border-slate-800 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/50 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Tools & Technologies</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Built With the Right Tools
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans">
              I combine robust full-stack engineering frameworks, enterprise analytics intelligence, and search optimization platforms to build, scale, and manage high-converting digital solutions.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {[
                { id: 'all', label: 'All Technologies' },
                { id: 'dev', label: 'Full-Stack & React' },
                { id: 'seo', label: 'SEO & Analytics' },
                { id: 'cms', label: 'CMS & Paid Ads' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setToolsFilter(tab.id)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                    toolsFilter === tab.id
                      ? 'bg-[#f9570c] text-white shadow-md shadow-orange-950/40'
                      : 'bg-slate-800/80 text-slate-400 hover:text-white hover:bg-slate-700/80 border border-slate-700/60'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filteredTools.map((tool, idx) => (
              <div
                key={idx}
                className="group relative bg-[#0f172a]/90 border border-slate-800 hover:border-[#f9570c]/50 rounded-[22px] p-6 flex flex-col items-center text-center justify-between transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-950/20 cursor-pointer overflow-hidden min-h-[175px]"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 shadow-inner">
                  {tool.icon}
                </div>

                <div className="w-full">
                  <h3 className="text-base font-serif font-bold text-white tracking-tight leading-snug group-hover:text-[#f9570c] transition-colors duration-200">
                    {tool.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 font-sans mt-1.5 leading-snug">
                    {tool.useCase}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#f9570c] transition-all duration-300"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FINAL CONVERSION BANNER: "Let's Build Something That Works" */}
      <section className="bg-[#fcf8f3] py-24 sm:py-28 px-4 sm:px-6 relative border-t border-slate-200/70">
        <div className="max-w-5xl mx-auto">
          
          <div className="bg-white border border-slate-200/90 rounded-[32px] sm:rounded-[40px] px-6 sm:px-14 py-16 sm:py-20 text-center shadow-2xl shadow-slate-900/5 flex flex-col items-center relative overflow-hidden">
            
            {/* Subtle Ambient Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none"></div>

            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-7 relative z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Have a Project in Mind?</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1c1917] tracking-tight leading-[1.15] max-w-3xl relative z-10">
              Let’s Build Something <br className="hidden sm:inline" /> That Works
            </h2>

            {/* Enhanced SEO & Growth Description */}
            <p className="mt-6 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-sans relative z-10">
              Looking for a custom full-stack web application, high-converting WordPress website, or aggressive technical SEO growth? Let’s discuss your goals and architect a practical, measurable solution for your business.
            </p>

            {/* Action Buttons with Proper Visual Hierarchy */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 relative z-10">
              {/* Primary Action Button (Solid Brand Orange) */}
              <button
                onClick={() => {
                  setActiveTab?.('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-orange-950/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <CornerDownRight size={16} />
                <span>Let's Talk</span>
                <ArrowRight size={15} className="ml-0.5" />
              </button>

              {/* Secondary Action Button (Clean Charcoal Bordered) */}
              <button
                onClick={() => {
                  setActiveTab?.('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Briefcase size={15} />
                <span>View My Services</span>
              </button>
            </div>

            {/* Direct Large Underlined Email Link */}
            <div className="mt-10 pt-4 relative z-10">
              <a
                href={`mailto:${directEmail}`}
                className="group inline-flex items-baseline gap-2 text-base sm:text-2xl font-serif text-[#1c1917] hover:text-[#f9570c] border-b-2 border-slate-300 hover:border-[#f9570c] pb-1 transition-all duration-200"
              >
                <span className="text-[#f9570c] text-lg sm:text-2xl font-sans font-bold select-none group-hover:translate-x-0.5 transition-transform">
                  ↳
                </span>
                <span className="tracking-tight">{directEmail}</span>
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}