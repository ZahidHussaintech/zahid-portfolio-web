import React, { useState } from 'react';
import { 
  CornerDownRight, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  Search, 
  TrendingUp, 
  Layers, 
  ShieldCheck, 
  Database, 
  Globe2, 
  Laptop, 
  Plus, 
  Minus, 
  ExternalLink,
  Cpu,
  Target,
  BarChart3,
  Briefcase
} from 'lucide-react';

export default function Services({ setActiveTab }) {
  const [openFaq, setOpenFaq] = useState(0);
  const directEmail = 'contact@zahidhussainofficial.com';

  // 1. What I Can Help With (4 Strategic Pillars)
  const helpPillars = [
    {
      title: 'Full-Stack Software & Web Apps',
      desc: 'Building bespoke, zero-vulnerability React.js & Node.js web applications, dynamic admin dashboards, and high-throughput REST APIs designed for 99.9% uptime.'
    },
    {
      title: 'Technical SEO & Search Dominance',
      desc: 'Engineering keyword-mapped semantic structures, JSON-LD schemas, and PageSpeed 95+ Core Web Vitals to systematically rank for high-intent queries on Google.'
    },
    {
      title: 'B2B Global Trade & Export Portals',
      desc: 'Developing specialized product showcases and FOB/CIF inquiry funnels tailored for international commodity buyers, food importers, and global distributors.'
    },
    {
      title: 'Enterprise CMS & E-commerce',
      desc: 'Crafting responsive, speed-optimized WordPress, WooCommerce, and Elementor architectures customized for clean content workflows and seamless checkouts.'
    }
  ];

  // 2. Core Services (6 Balanced Cards)
  const coreServices = [
    {
      icon: <Code2 size={26} className="text-[#f9570c]" />,
      title: 'Custom Full-Stack Development',
      desc: 'Engineer fast, scalable single-page web applications and backend microservices using the modern MERN stack.',
      checklist: [
        'React.js & Tailwind CSS UI',
        'Node.js & Express.js APIs',
        'MongoDB & MySQL Schemas',
        'Netlify Edge CDN Deployment'
      ],
      actionText: 'Discuss Web App'
    },
    {
      icon: <Search size={26} className="text-[#f9570c]" />,
      title: 'Technical & On-Page SEO',
      desc: 'Elevate organic search visibility, fix indexing bottlenecks, and outrank competitors on Google Search Console.',
      checklist: [
        'Search Console & Crawl Audits',
        'Core Web Vitals Speed (95+)',
        'High-Intent Keyword Architecture',
        'Rich Structured Data (Schema)'
      ],
      actionText: 'Request SEO Audit'
    },
    {
      icon: <Layers size={26} className="text-[#f9570c]" />,
      title: 'Enterprise WordPress & CMS',
      desc: 'Bespoke WordPress engineering tailored for corporate identity, authority content, and lightning-fast loading.',
      checklist: [
        'Custom Theme Development',
        'Elementor Pro Speed Optimization',
        'Advanced Security Hardening',
        'Seamless Content Management'
      ],
      actionText: 'Build WordPress Site'
    },
    {
      icon: <Target size={26} className="text-[#f9570c]" />,
      title: 'Google Ads & Paid Search (PPC)',
      desc: 'Drive ready-to-buy commercial traffic through laser-focused Google Search campaigns optimized for low CPA.',
      checklist: [
        'Google Search & Display Ads',
        'Negative Keyword Filtration',
        'GA4 & GTM Conversion Tracking',
        'Continuous Landing Page Split Testing'
      ],
      actionText: 'Launch Campaigns'
    },
    {
      icon: <Globe2 size={26} className="text-[#f9570c]" />,
      title: 'B2B Export Growth & Funnels',
      desc: 'Position commodity exporters and B2B manufacturers in front of international commercial buyers in US, UK, and Gulf markets.',
      checklist: [
        'FOB/CIF Quote Desk Funnels',
        'Multilingual Commodity Catalogs',
        'B2B Email Outreach Infrastructure',
        'Buyer Trust & Spec Sheet Portals'
      ],
      actionText: 'Get B2B Pipeline'
    },
    {
      icon: <BarChart3 size={26} className="text-[#f9570c]" />,
      title: 'Data Analytics & Cisco Audits',
      desc: 'Cisco-certified data analytics telemetry to measure every user click, funnel drop-off, and customer lifecycle event.',
      checklist: [
        'Google Analytics 4 (GA4) Architecture',
        'Google Tag Manager Custom Events',
        'Network & Application Security',
        'Executive Conversion Dashboards'
      ],
      actionText: 'Setup Telemetry'
    }
  ];

  // 3. Complete Tools & Technologies Stack (16 Items)
  const toolsStack = [
    { name: 'React.js', role: 'Frontend Architecture', icon: '⚛️' },
    { name: 'Node.js', role: 'Backend Runtime', icon: '🟢' },
    { name: 'Express.js', role: 'RESTful API Services', icon: '⚡' },
    { name: 'MongoDB', role: 'NoSQL Database', icon: '🍃' },
    { name: 'MySQL', role: 'Relational Database', icon: '🐬' },
    { name: 'Tailwind CSS', role: 'Responsive Styling', icon: '🎨' },
    { name: 'JavaScript (ES6+)', role: 'Core Logic Engine', icon: '📜' },
    { name: 'Search Console', role: 'SEO Indexing Health', icon: '📈' },
    { name: 'Google Analytics 4', role: 'Conversion Telemetry', icon: '📊' },
    { name: 'Tag Manager', role: 'Event Tracking', icon: '🏷️' },
    { name: 'Google Ads', role: 'Search Engine PPC', icon: '🎯' },
    { name: 'WordPress', role: 'CMS Architecture', icon: '🌐' },
    { name: 'WooCommerce', role: 'E-commerce Checkout', icon: '🛒' },
    { name: 'Elementor Pro', role: 'Page Layouts', icon: '📐' },
    { name: 'Meta Ads', role: 'Paid Social Funnels', icon: '📱' },
    { name: 'Netlify', role: 'Global Edge CDN', icon: '☁️' }
  ];

  // 4. Target Audiences (Who I Work With)
  const targetClients = [
    {
      title: 'Global Startups',
      desc: 'Rapidly architecting MVP web apps, fast landing pages, and initial SEO foundations to acquire early adopters.'
    },
    {
      title: 'Small & Mid Businesses',
      desc: 'Upgrading dated corporate websites into high-converting lead engines with dominant local and regional Google rankings.'
    },
    {
      title: 'B2B Exporters & Manufacturers',
      desc: 'Engineering international commodity catalogs and buyer inquiry funnels across US, UK, Europe, and GCC markets.'
    },
    {
      title: 'E-commerce Brands',
      desc: 'Optimizing product schema, category search architecture, and Core Web Vitals to increase checkout conversions.'
    },
    {
      title: 'Executive Personal Brands',
      desc: 'Crafting authoritative developer, consultant, and founder portfolio platforms that command premium client trust.'
    },
    {
      title: 'Enterprise Service Providers',
      desc: 'Automating customer inquiry pipelines through targeted Google Ads, GA4 conversion attribution, and fast web design.'
    }
  ];

  // 5. Frequently Asked Questions
  const faqs = [
    {
      q: 'Do you work with international clients across US, UK, Gulf, and Australia timezones?',
      a: 'Yes, extensively. I regularly collaborate with founders and commercial directors across the United States, United Kingdom, GCC/Middle East, Australia, and New Zealand. Work is coordinated with milestone-based schedules, asynchronous communication, and dedicated overlap hours.'
    },
    {
      q: 'Should I choose a Custom Full-Stack Web Application (MERN) or a WordPress Website?',
      a: 'It depends on your business model. If you require dynamic interactive workflows, custom member dashboards, high-throughput database interactions, or ultra-fast SaaS performance, a custom React + Node.js MERN build on edge hosting is best. If your primary focus is content marketing, blogging, ease of internal staff publishing, or WooCommerce retail, an enterprise-hardened WordPress build is ideal.'
    },
    {
      q: 'How long does a typical web development or technical SEO project take?',
      a: 'A focused landing page or technical SEO audit typically takes 5 to 10 business days. Full custom MERN applications or corporate WordPress platforms require between 3 to 6 weeks, structured across clear milestone approvals.'
    },
    {
      q: 'Do you provide end-to-end maintenance and SEO monitoring post-launch?',
      a: 'Yes. I offer continuous retainer partnerships covering server uptime, Core Web Vitals performance, Google Search Console indexing, security audits, and continuous conversion rate optimization.'
    },
    {
      q: 'Can we begin with a single specific service, such as an SEO audit or a single landing page?',
      a: 'Certainly. Many international clients start with an initial technical audit or high-impact landing page sprint before expanding into complete web infrastructure engineering.'
    }
  ];

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#070e1b] text-white py-20 sm:py-28 px-4 sm:px-6 relative border-b border-slate-800 overflow-hidden">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[550px] bg-[#f9570c]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/50 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Web Development & Digital Growth</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-white leading-[1.18]">
              Full-Stack Web Engineering & Search Marketing Solutions
            </h1>

            <p className="mt-5 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed max-w-xl">
              I architect high-speed custom web applications, robust WordPress platforms, and data-backed technical SEO funnels engineered to capture organic rankings and drive qualified business inquiries worldwide.
            </p>

            <div className="mt-6 space-y-2.5 w-full">
              {[
                'Custom Full-Stack Web Development (React, Node.js, MongoDB/MySQL)',
                'Technical SEO & Core Web Vitals (Google Search Console Indexing)',
                'Enterprise WordPress & WooCommerce Architecture',
                'B2B Growth & High-Intent Google Search Ads'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-300 font-sans">
                  <CheckCircle2 size={16} className="text-[#f9570c] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  const section = document.getElementById('core-services-section');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-7 py-3.5 rounded-full text-xs font-bold tracking-wide shadow-lg shadow-orange-950/40 transition-all hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <span>Explore My Services</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={() => {
                  setActiveTab?.('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 px-7 py-3.5 rounded-full text-xs font-bold tracking-wide transition-all hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <CornerDownRight size={14} />
                <span>Let's Talk</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[440px] rounded-3xl p-4 bg-gradient-to-tr from-slate-900/60 to-slate-800/20 border border-slate-800/80 shadow-2xl flex items-center justify-center group">
              <img 
                src="/images/services/full-stack-web-development-seo-services.webp" 
                alt="Full-Stack Web Development and Technical SEO Services by Zahid Hussain"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="py-16 px-6 text-center w-full flex flex-col items-center">
                      <div class="w-16 h-16 rounded-2xl bg-[#f9570c]/10 border border-[#f9570c]/30 flex items-center justify-center text-[#f9570c] mb-4">
                        <svg viewBox="0 0 24 24" class="w-8 h-8 stroke-current stroke-2 fill-none"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                      </div>
                      <h4 class="text-lg font-serif font-bold text-white mb-2">High-Performance Delivery</h4>
                      <p class="text-xs text-slate-400 font-sans max-w-xs">Custom MERN development, SEO auditing, and enterprise lead generation.</p>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT I CAN HELP WITH (Enhanced Luxury Layout) */}
      <section className="bg-[#fbf8f4] py-24 px-4 sm:px-6 relative border-b border-orange-100/70">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>What I Can Help With</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              Engineering Practical Solutions for Tangible Commercial Growth
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 font-sans max-w-2xl mx-auto leading-relaxed">
              From building high-speed digital architectures to capturing qualified organic search queries and executing B2B buyer pipelines, my services are designed around measurable commercial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpPillars.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/90 rounded-[24px] p-7 flex flex-col justify-between hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-orange-50 border border-orange-100 flex items-center justify-center text-[#f9570c] font-black text-xs font-mono mb-5 group-hover:bg-[#f9570c] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-serif font-bold text-slate-900 tracking-tight leading-snug group-hover:text-[#f9570c] transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs text-slate-600 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE SERVICES (Compact & Balanced High-End Grid) */}
      <section id="core-services-section" className="py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Core Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              Comprehensive Web Engineering & Growth Capabilities
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
              Flexible, senior-level web engineering and search optimization for international businesses, emerging startups, and global export enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/90 rounded-[26px] p-7 sm:p-8 flex flex-col justify-between hover:shadow-2xl hover:border-orange-200 transition-all duration-300 group shadow-sm min-h-[380px]"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-serif font-bold text-slate-900 tracking-tight group-hover:text-[#f9570c] transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-xs text-slate-600 font-sans leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="my-5 border-t border-slate-100"></div>

                  <ul className="space-y-2.5">
                    {service.checklist.map((cItem, cIdx) => (
                      <li key={cIdx} className="flex items-center gap-2 text-xs text-slate-700 font-sans">
                        <CheckCircle2 size={14} className="text-[#f9570c] shrink-0" />
                        <span>{cItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={() => {
                      setActiveTab?.('contact');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="w-full flex items-center justify-center gap-1.5 bg-[#f9570c] hover:bg-[#e04a05] text-white py-2.5 px-6 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
                  >
                    <span>{service.actionText}</span>
                    <span className="ml-0.5">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. HOW I CAN HELP YOUR BUSINESS (Consultative Clarity) */}
      <section className="py-24 px-4 sm:px-6 bg-[#fcf9f5] border-b border-orange-100/70">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Consultative Direction</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-[1.18]">
              Not Sure Which Service You Need?
            </h2>

            <p className="mt-6 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              You do not need a bloated agency checklist. I audit your business footprint to identify the exact technical and marketing activities that will drive the highest ROI for your budget and current growth stage.
            </p>

            <div className="mt-8">
              <button
                onClick={() => {
                  setActiveTab?.('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <CornerDownRight size={15} />
                <span>Let's Discuss Your Goals</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {[
              { num: '01', title: 'Increase Organic Search Visibility', desc: 'Secure prominent top rankings on Google Search Console for keywords your customers actively search for.' },
              { num: '02', title: 'Generate Qualified Inbound Leads', desc: 'Build clear inquiry channels, FOB quote desks, and high-converting landing pages that transform traffic into sales.' },
              { num: '03', title: 'Modernize Web Presence & UX', desc: 'Replace slow, outdated websites with ultra-fast, mobile-responsive custom React or secure WordPress platforms.' },
              { num: '04', title: 'Build Long-Term Sustainable Growth', desc: 'Implement Cisco-certified data analytics tracking to continuously test, measure, and scale what works.' }
            ].map((step, sIdx) => (
              <div 
                key={sIdx}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-lg font-serif font-black text-[#f9570c] shrink-0 mt-0.5">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-base font-serif font-bold text-slate-900 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-xs text-slate-600 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MY APPROACH (4-Step Execution Roadmap) */}
      <section className="py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>My Approach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              A Structured, Milestone-Driven Process
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
              Transparent execution with zero guesswork. Every engagement follows a proven 4-stage engineering and optimization cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Discover & Audit', desc: 'Analyze commercial objectives, existing technical debt, competitor organic footprint, and audience intent.' },
              { num: '02', title: 'Plan & Architect', desc: 'Define tech stack (Custom MERN vs WordPress), UI design wireframes, keyword schema, and conversion funnels.' },
              { num: '03', title: 'Engineer & Launch', desc: 'Develop clean, scalable code, optimize Core Web Vitals to 95+, configure database/APIs, and execute QA testing.' },
              { num: '04', title: 'Measure & Scale', desc: 'Track telemetry in GA4, monitor Search Console indexing, adjust PPC campaign bidding, and drive continuous ROI.' }
            ].map((pStep, pIdx) => (
              <div 
                key={pIdx}
                className="bg-slate-50 border border-slate-200/90 rounded-[24px] p-7 flex flex-col justify-between hover:-translate-y-2 hover:shadow-xl transition-all duration-300 min-h-[250px]"
              >
                <div>
                  <span className="text-xl font-mono font-black text-[#f9570c] block mb-3">
                    {pStep.num}—
                  </span>
                  <h3 className="text-lg font-serif font-bold text-slate-900 tracking-tight mb-2">
                    {pStep.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {pStep.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => {
                setActiveTab?.('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <CornerDownRight size={15} />
              <span>Let's Discuss Your Goals</span>
            </button>
          </div>
        </div>
      </section>

      {/* 6. TOOLS & PLATFORMS (Enriched Full-Stack Stack) */}
      <section className="py-24 px-4 sm:px-6 bg-[#080e1a] text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/50 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Tools & Platforms</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Tools & Platforms I Work With
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans">
              I leverage an enterprise arsenal of full-stack programming technologies, search indexing platforms, and marketing suites.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {toolsStack.map((tool, idx) => (
              <div 
                key={idx}
                className="bg-[#0f172a] border border-slate-800 rounded-2xl p-4 flex flex-col items-center text-center justify-between hover:border-[#f9570c]/60 hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer"
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform">{tool.icon}</span>
                <div>
                  <h4 className="text-xs font-bold text-white group-hover:text-[#f9570c] transition-colors">{tool.name}</h4>
                  <p className="text-[9px] text-slate-400 font-sans mt-0.5">{tool.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROJECT EXPERIENCE (Dark Luxury Container) */}
      <section className="py-24 px-4 sm:px-6 bg-[#060a12] text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/50 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Project Experience</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0d1525] border border-slate-800 rounded-[32px] p-6 sm:p-10 shadow-2xl">
            <div className="lg:col-span-5 flex flex-col items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-[10px] font-bold uppercase tracking-widest mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400"></span>
                <span>Selected Experience</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight leading-tight">
                Digital Engineering in Practice
              </h3>

              <p className="mt-4 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                I deploy custom full-stack web applications, technical SEO, social media strategies, and international B2B buyer pipelines for active corporate enterprises like Rose Garden Group and Sindhuparas Agro.
              </p>

              <div className="mt-8">
                <button
                  onClick={() => {
                    setActiveTab?.('projects');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-7 py-3 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <span>View My Work</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 flex flex-col items-center">
              <div className="w-full rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                <img 
                  src="/portfolio/rose-garden-b2b-export-website-seo.webp" 
                  alt="Rose Garden Group B2B Export Platform by Zahid Hussain"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.src = '/images/portfolio/rose-garden-b2b-export-website-seo.webp';
                  }}
                />
              </div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-4">
                B2B | Export | Food & Agriculture
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. WHO I WORK WITH (Target Audiences) */}
      <section className="py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Who I Work With</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              Who My Services Are For
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
              Tailored digital solutions engineered for growth-focused founders, commercial directors, and enterprises worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetClients.map((client, idx) => (
              <div 
                key={idx}
                className="bg-[#12161f] text-white border border-slate-800 rounded-[24px] p-8 flex flex-col justify-between hover:border-[#f9570c]/60 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#f9570c]/15 text-[#f9570c] flex items-center justify-center font-bold text-base mb-6">
                    ✦
                  </div>
                  <h3 className="text-xl font-serif font-bold text-white tracking-tight mb-2">
                    {client.title}
                  </h3>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {client.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 px-4 sm:px-6 bg-[#fcf9f5] border-b border-orange-100/70">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>FAQ</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 font-sans">
              Transparent answers regarding international collaboration, deliverables, and tech stack choices.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, fIdx) => {
              const isOpen = openFaq === fIdx;
              return (
                <div 
                  key={fIdx}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                    isOpen ? 'border-[#f9570c] bg-orange-50/30 shadow-md' : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : fIdx)}
                    className="w-full py-5 px-6 sm:px-7 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span className={`text-base font-serif font-bold ${isOpen ? 'text-[#f9570c]' : 'text-slate-900'}`}>
                      {faq.q}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform ${
                      isOpen ? 'bg-[#f9570c] text-white rotate-180' : 'bg-slate-100 text-slate-600'
                    }`}>
                      {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed border-t border-orange-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10. FINAL CONVERSION BANNER (Floating White Card on Warm Cream) */}
      <section className="bg-[#fcf8f3] py-24 sm:py-28 px-4 sm:px-6 relative border-t border-slate-200/70">
        <div className="max-w-5xl mx-auto">
          
          <div className="bg-white border border-slate-200/90 rounded-[32px] sm:rounded-[40px] px-6 sm:px-14 py-16 sm:py-20 text-center shadow-2xl shadow-slate-900/5 flex flex-col items-center relative overflow-hidden">
            
            {/* Soft Ambient Glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none"></div>

            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-7 relative z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Have a Project in Mind?</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1c1917] tracking-tight leading-[1.15] max-w-3xl relative z-10">
              Ready to Build a Stronger <br className="hidden sm:inline" /> Digital Presence?
            </h2>

            {/* Subtitle */}
            <p className="mt-6 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-sans relative z-10">
              Tell me about your business, your commercial goals, and where you need technical support. Let’s identify the right digital priorities for your next stage of growth.
            </p>

            {/* Dual Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 relative z-10">
              <button
                type="button"
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
                type="button"
                onClick={() => {
                  setActiveTab?.('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Briefcase size={15} />
                <span>View My Work</span>
              </button>
            </div>

            {/* Direct Email Link */}
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