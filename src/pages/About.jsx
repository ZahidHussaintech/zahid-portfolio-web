import React from 'react';
import { 
  CornerDownRight, 
  Check, 
  FileDown, 
  Code2, 
  Search, 
  Database, 
  TrendingUp,
  LineChart,
  CheckCircle2,
  Mail,
  ArrowRight,
  Briefcase,
  Users2,
  Binary,
  Target,
  ExternalLink,
  Laptop,
  Layers,
  Sparkles
} from 'lucide-react';

export default function About({ setActiveTab }) {
  const directEmail = 'contact@zahidhussainofficial.com';

  const highlights = [
    'Custom Full-Stack Web Development (React, Node.js, MERN & MySQL)',
    'Technical & On-Page SEO (Search Console Indexation & Core Web Vitals)',
    'High-Converting WordPress & WooCommerce Engineering',
    'Google Search Ads Management & Performance PPC',
    'Cisco-Certified Data Analytics & Cybersecurity Standards'
  ];

  const whoIAmPillars = [
    {
      title: 'Full-Stack Web Engineering',
      desc: 'Developing high-speed, zero-vulnerability React & Node.js web applications alongside clean, custom WordPress platforms.',
      icon: <Code2 size={20} className="text-[#f9570c]" />
    },
    {
      title: 'Data-Driven Search Strategy',
      desc: 'Executing technical SEO, keyword mapping, Core Web Vitals optimization, and Google Search Console indexation.',
      icon: <Search size={20} className="text-[#f9570c]" />
    },
    {
      title: 'Commercial Business Acumen',
      desc: 'Bridging technical code with B2B lead generation, FOB export inquiry funnels, and measurable revenue growth.',
      icon: <LineChart size={20} className="text-[#f9570c]" />
    }
  ];

  // My Journey 4-Stage Evolution
  const journeyMilestones = [
    {
      step: '01',
      title: 'Business Operations & Planning',
      desc: 'Hands-on operational management and commodity supply chain coordination developed structured problem-solving and commercial execution discipline.',
      icon: <Briefcase size={24} className="text-[#f9570c]" />
    },
    {
      step: '02',
      title: 'B2B Business Development',
      desc: 'Managing corporate client communications, trade inquiries, and export catalogs for agricultural ventures honed relationship building and global enterprise conversion.',
      icon: <Users2 size={24} className="text-[#f9570c]" />
    },
    {
      step: '03',
      title: 'Full-Stack Web Engineering',
      desc: 'Engineered custom MERN applications, high-performance React user interfaces, RESTful Express APIs, and scalable WordPress solutions with clean architecture.',
      icon: <Binary size={24} className="text-[#f9570c]" />
    },
    {
      step: '04',
      title: 'Technical SEO & Data Growth',
      desc: 'Combined Cisco Data Analytics with technical Core Web Vitals, Google Ads PPC, and Google Search Console strategies to systematically drive organic traffic.',
      icon: <Target size={24} className="text-[#f9570c]" />
    }
  ];

  // 1. What I Bring
  const whatIBring = [
    {
      title: 'Business & Commercial Understanding',
      desc: 'Deep familiarity with commodity exports, client inquiry pipelines, and ROI-driven marketing so technical solutions match business objectives.'
    },
    {
      title: 'Custom Full-Stack Engineering',
      desc: 'Clean, secure code built on React, Tailwind CSS, Node.js, and MongoDB/MySQL for lightning-fast speeds and zero vulnerability.'
    },
    {
      title: 'Technical SEO & Search Dominance',
      desc: 'Semantic structure, Core Web Vitals, JSON-LD schema, and Google Search Console optimization for top organic rankings.'
    },
    {
      title: 'Measurable B2B Growth Strategy',
      desc: 'Targeted Google Ads funnels and high-converting UX layouts engineered to capture international enterprise inquiries.'
    }
  ];

  // 2. Core Skills
  const coreSkillColumns = [
    {
      title: 'Full-Stack Web Engineering',
      skills: [
        'React.js & Tailwind CSS',
        'Node.js & Express.js APIs',
        'MongoDB & MySQL Databases',
        'JavaScript (ES6+) & Modern Architecture',
        'Netlify Edge CDN Deployment',
        'Clean Code & Component Scalability'
      ]
    },
    {
      title: 'Technical SEO & Analytics',
      skills: [
        'Google Search Console Indexing',
        'Core Web Vitals & PageSpeed 95+',
        'High-Intent Keyword Architecture',
        'Google Analytics 4 & Conversion Setup',
        'On-Page Schema & Metadata Strategy',
        'Competitor Organic Traffic Audits'
      ]
    },
    {
      title: 'CMS & Paid Marketing',
      skills: [
        'WordPress & Custom Theme Development',
        'Elementor Pro Speed Optimization',
        'WooCommerce B2B Store Architecture',
        'Google Search Ads (PPC) Management',
        'Meta Ads Campaign Structuring',
        'B2B Export Quotation Funnels'
      ]
    }
  ];

  // 3. My Approach
  const approachSteps = [
    {
      num: '01',
      title: 'Understand',
      desc: 'Analyze target audience, competitor organic footprints, search intent, and commercial business objectives.'
    },
    {
      num: '02',
      title: 'Plan & Architect',
      desc: 'Structure conversion funnels, determine tech stack (React vs WordPress), and define technical SEO roadmaps.'
    },
    {
      num: '03',
      title: 'Engineer & Build',
      desc: 'Develop responsive, secure UI components, integrate databases/APIs, and configure Core Web Vitals compliance.'
    },
    {
      num: '04',
      title: 'Optimize & Scale',
      desc: 'Monitor Google Search Console, review GA4 user flow, refine ad campaigns, and drive sustainable growth.'
    }
  ];

  // 4. Tools I Work With
  const toolsList = [
    { name: 'React.js', tag: 'Frontend Library', icon: '⚛️' },
    { name: 'Node.js', tag: 'Backend Runtime', icon: '🟢' },
    { name: 'Express.js', tag: 'RESTful APIs', icon: '⚡' },
    { name: 'MongoDB', tag: 'NoSQL Database', icon: '🍃' },
    { name: 'MySQL', tag: 'Relational Database', icon: '🐬' },
    { name: 'Google Ads', tag: 'PPC Management', icon: '🎯' },
    { name: 'Search Console', tag: 'Search Indexing', icon: '📈' },
    { name: 'Google Analytics 4', tag: 'Traffic Telemetry', icon: '📊' },
    { name: 'WordPress', tag: 'Enterprise CMS', icon: '🌐' },
    { name: 'WooCommerce', tag: 'E-commerce Architecture', icon: '🛒' }
  ];

  // 5. Selected Work
  const selectedProjects = [
    {
      num: 'Project 1',
      title: 'Rose Garden Group',
      label: 'CLIENT PROJECT • B2B EXPORTER',
      desc: 'Official corporate B2B platform for a leading agricultural commodity exporter. Engineered for global buyer trust, international SEO, and direct quotation leads.',
      link: 'https://rosegardengroup.pk/'
    },
    {
      num: 'Project 2',
      title: 'Sindhuparas Agro',
      label: 'PRODUCTION • B2B COMMODITY PORTAL',
      desc: 'Ultra-fast React & Netlify B2B showcase for machine-cleaned sesame seeds, flaxseed, and organic dates with high-speed inquiry funnels.',
      link: 'https://sindhuparas.netlify.app/'
    },
    {
      num: 'Project 3',
      title: 'Zahid Hussain Portfolio',
      label: 'PERSONAL BRAND • FULL-STACK & DATA',
      desc: 'High-performance engineering platform demonstrating full-stack MERN architecture, Cisco Data Analytics telemetry, and enterprise cybersecurity standards.',
      link: 'https://zahidhussainofficial.com/portfolio/'
    }
  ];

  // 6. Why Work With Me Pillars
  const whyWorkCards = [
    {
      title: 'Business-Focused Strategy',
      desc: 'I connect technical code with real commercial goals, buyer acquisition, and long-term sustainable ROI.',
      icon: <Briefcase size={22} className="text-[#f9570c]" />
    },
    {
      title: 'Detail & Performance Oriented',
      desc: 'Obsessed with clean code architecture, 95+ Core Web Vitals, semantic SEO structure, and zero downtime.',
      icon: <Search size={22} className="text-[#f9570c]" />
    },
    {
      title: 'Continuous Innovation',
      desc: 'Constantly advancing in Cisco Data Analytics, modern MERN frameworks, and evolving search engine ranking algorithms.',
      icon: <TrendingUp size={22} className="text-[#f9570c]" />
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20">
      
      {/* HEADER BANNER */}
      <section className="bg-[#0b1322] text-white py-16 sm:py-20 px-4 sm:px-6 border-b border-slate-800 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#f9570c]/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/50 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
            <span>About Zahid Hussain</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white leading-tight">
            Engineering Code & Driving Growth
          </h1>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-xl mx-auto font-sans leading-relaxed">
            Bridging the gap between robust full-stack software development, high-intent technical SEO, and conversion-oriented digital marketing.
          </p>
        </div>
      </section>

      {/* PROFILE STORY */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] rounded-[32px] overflow-hidden bg-slate-50 border border-slate-200/90 shadow-2xl p-2.5 sm:p-3 group">
              <div className="w-full h-[470px] sm:h-[530px] rounded-[26px] overflow-hidden bg-white flex items-end justify-center">
                <img 
                  src="/images/about/zahid-hussain-seo-full-stack-web-developer.webp" 
                  alt="Zahid Hussain - Full-Stack Web Developer and Technical SEO Specialist" 
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  onError={(e) => {
                    if (e.target.src.indexOf('about-zahid') === -1) {
                      e.target.src = '/images/about-zahid.webp';
                    }
                  }}
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Professional Profile</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-[1.2]">
              Digital Marketing & Full-Stack Web Engineering
            </h2>

            <p className="mt-6 text-sm text-slate-700 font-sans leading-relaxed">
              Hi, I’m <strong className="text-slate-900 font-bold">Zahid Hussain</strong>, a Remote Web Developer, Technical SEO Specialist, and Digital Marketing Consultant from Karachi, Pakistan.
            </p>

            <p className="mt-3.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              I specialize in architecting fast, secure custom web applications using modern full-stack workflows (React, Node.js, Express, MongoDB, and MySQL), as well as scalable WordPress solutions. I combine technical software engineering with rigorous on-page/technical SEO, Core Web Vitals optimization, and Google Ads management to help businesses rank organically and convert international visitors into paying clients.
            </p>

            <p className="mt-3.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              With hands-on experience managing business development for large-scale agricultural commodity export platforms and international trade portals, I build digital infrastructure designed for measurable business outcomes.
            </p>

            <div className="mt-6 space-y-2.5 w-full">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-xs sm:text-sm text-slate-800 font-sans">
                  <div className="w-5 h-5 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
                    <Check size={13} className="text-[#f9570c] stroke-[3]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-7 py-3 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/20 transition-all hover:scale-105 active:scale-95"
              >
                <FileDown size={15} />
                <span>Download My Resume</span>
              </a>

              <button
                onClick={() => {
                  setActiveTab?.('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-7 py-3 rounded-full text-xs font-bold tracking-wide shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <CornerDownRight size={15} />
                <span>Let's Discuss a Project</span>
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* WHO I AM */}
      <section className="bg-slate-50 py-20 px-4 sm:px-6 relative border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-slate-200/90 rounded-[32px] sm:rounded-[36px] p-8 sm:p-12 lg:p-14 shadow-xl shadow-slate-900/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start relative z-10">
              
              <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
                  <span>Who I Am</span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1c1917] tracking-tight leading-[1.2]">
                  A Business-Minded Web Developer & Digital Strategist
                </h2>

                <div className="mt-7 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 border-l-4 border-l-[#f9570c] w-full">
                  <p className="text-xs sm:text-sm font-sans font-semibold text-slate-800 leading-relaxed italic">
                    "Most websites look good but never convert. I build web infrastructure engineered to rank, perform, and generate qualified leads."
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs font-bold text-slate-500 font-sans uppercase tracking-wider">
                    <span>— Zahid Hussain</span>
                  </div>
                </div>

                <div className="mt-7">
                  <button
                    onClick={() => {
                      setActiveTab?.('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#f9570c] hover:text-[#d44505] transition-colors cursor-pointer"
                  >
                    <CornerDownRight size={15} />
                    <span>Explore Collaboration Opportunities →</span>
                  </button>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col">
                <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  <p className="text-slate-800 text-sm sm:text-base font-medium">
                    I operate at the convergence of full-stack web software, organic search engineering, and commercial business operations.
                  </p>
                  <p>
                    My focus extends beyond aesthetic layouts. I examine what a business actually requires to dominate search results, maintain enterprise-grade security, and establish qualified customer inquiry channels worldwide.
                  </p>
                  <p>
                    Having managed business development, export catalog deployments, and digital communications for large-scale agricultural commodity enterprises, I leverage practical corporate experience across custom React engineering, WordPress development, and targeted Google Ads funnels.
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  {whoIAmPillars.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-orange-200 hover:bg-orange-50/20 transition-all duration-300 flex items-start gap-4 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200/80 group-hover:border-[#f9570c]/40 flex items-center justify-center shrink-0 shadow-sm transition-transform group-hover:scale-105">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-sm sm:text-base font-serif font-bold text-slate-900 tracking-tight group-hover:text-[#f9570c] transition-colors">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-xs text-slate-500 font-sans leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-orange-500/10 border border-[#f9570c]/20 flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-[#f9570c] shrink-0" />
                  <p className="text-xs sm:text-sm font-sans font-bold text-[#f9570c] tracking-tight">
                    Good web development and SEO should support a measurable business goal.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* MY JOURNEY */}
      <section className="py-24 px-4 sm:px-6 bg-white relative border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>My Journey</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              From Business Operations to Full-Stack Engineering & Growth
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
              Practical grounding in commercial operations, client relationships, and supply chain execution paved the foundation for engineering high-performance software, modern web platforms, and data-driven organic search visibility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {journeyMilestones.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white border border-slate-200/90 rounded-[24px] p-7 flex flex-col justify-between transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-900/10 cursor-pointer overflow-hidden min-h-[310px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#f9570c] group-hover:border-[#f9570c]">
                      {React.cloneElement(item.icon, {
                        className: "w-6 h-6 stroke-[#f9570c] group-hover:stroke-white transition-colors duration-300 stroke-2"
                      })}
                    </div>
                    <span className="text-xs font-mono font-black text-slate-300 group-hover:text-[#f9570c] transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#f9570c] transition-colors duration-200">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs text-slate-600 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#f9570c] transition-all duration-300"></div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 1. WHAT I BRING */}
      <section className="bg-[#fcf8f2] py-24 px-4 sm:px-6 relative border-t border-orange-100/70">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>What I Bring</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              More Than Just Digital Marketing Skills
            </h2>

            <p className="mt-6 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              I bridge commercial business acumen with full-stack engineering rigour and technical SEO precision, delivering platforms that dominate search results and convert visitors into enterprise inquiries.
            </p>
          </div>

          <div className="lg:col-span-7 flex flex-col divide-y divide-slate-200/90">
            {whatIBring.map((item, idx) => (
              <div key={idx} className="py-7 first:pt-0 last:pb-0 group">
                <h3 className="text-xl font-serif font-bold text-slate-900 group-hover:text-[#f9570c] transition-colors tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2.5 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 2. CORE SKILLS */}
      <section className="py-24 px-4 sm:px-6 bg-white relative border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Core Skills</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              Skills I Use to Build Better Digital Presence
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
              Comprehensive capabilities spanning modern full-stack web applications, search engine prominence, and conversion-focused architectures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreSkillColumns.map((col, idx) => (
              <div 
                key={idx}
                className="bg-slate-50/70 border border-slate-200/90 rounded-[28px] p-8 flex flex-col justify-between hover:shadow-xl hover:border-orange-200 transition-all duration-300"
              >
                <div>
                  <h3 className="text-xl font-serif font-bold text-slate-900 tracking-tight pb-4 border-b border-slate-200 mb-6">
                    {col.title}
                  </h3>
                  <ul className="space-y-3.5">
                    {col.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-sans">
                        <CheckCircle2 size={16} className="text-[#f9570c] shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. MY APPROACH */}
      <section className="py-24 px-4 sm:px-6 bg-[#f8fafc] relative border-t border-slate-200/80">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>My Approach</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              A Simple, Practical Process
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
              Every project starts with understanding the objective. From there, I plan the right solution, engineer or optimize digital assets, and continuously refine performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/90 rounded-[24px] p-7 text-center flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl transition-all duration-300 min-h-[260px] cursor-pointer"
              >
                <div>
                  <div className="text-2xl font-serif font-bold text-slate-900 tracking-tight flex items-baseline justify-center gap-1 mb-4">
                    <span className="text-[#f9570c] font-sans font-black">{step.num}—</span>
                    <span>{step.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. TOOLS I WORK WITH */}
      <section className="py-24 px-4 sm:px-6 bg-white relative border-t border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Tools I Work With</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              The Tools Behind My Work
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
              A balanced combination of modern full-stack development technologies, enterprise analytics platforms, and search visibility tools.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {toolsList.map((tool, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200 rounded-2xl p-6 flex flex-col items-center text-center justify-between hover:shadow-lg hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">
                  {tool.icon}
                </div>
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#f9570c] transition-colors">
                  {tool.name}
                </h3>
                <span className="text-[10px] text-slate-400 font-sans uppercase tracking-wider mt-1 font-semibold">
                  {tool.tag}
                </span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. SELECTED WORK */}
      <section className="py-24 px-4 sm:px-6 bg-[#fbf8f5] relative border-t border-orange-100/60">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Selected Work</span>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              A Few Projects I’m Proud Of
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
              Real websites and digital projects demonstrating clean architecture, SEO dominance, and commercial lead generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {selectedProjects.map((proj, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/90 rounded-[28px] p-8 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#f9570c] uppercase tracking-wider">
                    {proj.num}
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-slate-900 mt-2 tracking-tight group-hover:text-[#f9570c] transition-colors">
                    {proj.title}
                  </h3>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mt-1 mb-4">
                    {proj.label}
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 font-sans leading-relaxed mb-8">
                    {proj.desc}
                  </p>
                </div>

                <a 
                  href={proj.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white py-3 px-6 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/20 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <CornerDownRight size={14} />
                  <span>View Live Website</span>
                  <ExternalLink size={13} className="ml-0.5" />
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. WHY WORK WITH ME (Dark Luxury Contrast) */}
      <section className="py-24 px-4 sm:px-6 bg-[#0b1322] text-white relative border-t border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#f9570c]/50 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
                <span>Why Work With Me</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
                A Practical Approach to Digital Growth
              </h2>
            </div>

            <div className="lg:col-span-7 flex flex-col">
              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed mb-6">
                Effective web engineering and digital marketing is not simply about adopting tools. It is about understanding the commercial business model, reaching high-intent buyers, guaranteeing technical performance, and generating measurable results.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Business-Focused Commercial Strategy',
                  'User-Centered High-Converting UX',
                  'Continuous Learning & Tech Adaptation',
                  'Transparent Milestone Communication'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 size={16} className="text-[#f9570c] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyWorkCards.map((card, idx) => (
              <div 
                key={idx}
                className="bg-[#121c2e] border border-slate-800 rounded-2xl p-7 flex flex-col justify-between hover:border-[#f9570c]/40 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#f9570c]/10 border border-[#f9570c]/20 flex items-center justify-center mb-5">
                    {card.icon}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 7. HAVE A PROJECT IN MIND? (Final Floating CTA) */}
      <section className="bg-[#fbf7f2] py-24 sm:py-28 px-4 sm:px-6 relative border-t border-slate-200/70">
        <div className="max-w-5xl mx-auto">
          
          <div className="bg-white border border-slate-200/90 rounded-[32px] sm:rounded-[40px] px-6 sm:px-14 py-16 sm:py-20 text-center shadow-2xl shadow-slate-900/5 flex flex-col items-center relative overflow-hidden">
            
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-7 relative z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Have a Project in Mind?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1c1917] tracking-tight leading-[1.15] max-w-3xl relative z-10">
              Let’s Build Something <br className="hidden sm:inline" /> That Works
            </h2>

            <p className="mt-6 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-sans relative z-10">
              Have a custom web application, WordPress website, or SEO growth project in mind? Let's discuss your business goals and architect a practical, high-performance solution.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 relative z-10">
              <button
                onClick={() => {
                  setActiveTab?.('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-orange-950/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <CornerDownRight size={16} />
                <span>Start a Conversation</span>
                <ArrowRight size={15} className="ml-0.5" />
              </button>

              <button
                onClick={() => {
                  setActiveTab?.('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Laptop size={16} />
                <span>View My Portfolio</span>
              </button>
            </div>

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