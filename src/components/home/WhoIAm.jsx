import React from 'react';
import { Code2, Search, LineChart, CornerDownRight, CheckCircle2 } from 'lucide-react';

export default function WhoIAm({ setActiveTab }) {
  const pillars = [
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

  return (
    <section className="bg-slate-50 py-24 sm:py-28 px-4 sm:px-6 relative border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Card Wrapper */}
        <div className="bg-white border border-slate-200/90 rounded-[32px] sm:rounded-[36px] p-8 sm:p-14 lg:p-16 shadow-xl shadow-slate-900/5 relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative z-10">
            
            {/* Left Column: Heading & Value Statement */}
            <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
                <span>Who I Am</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-[1.18]">
                A Business-Minded Web Developer & Digital Strategist
              </h2>

              {/* Authority Highlight Quote Box */}
              <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200/80 border-l-4 border-l-[#f9570c] w-full">
                <p className="text-xs sm:text-sm font-sans font-semibold text-slate-800 leading-relaxed italic">
                  "Most websites look good but never convert. I build web infrastructure engineered to rank, perform, and generate qualified leads."
                </p>
                <div className="mt-3 flex items-center gap-2 text-xs font-bold text-slate-500 font-sans uppercase tracking-wider">
                  <span>— Zahid Hussain</span>
                </div>
              </div>

              {/* Consultation Link */}
              <div className="mt-8">
                <button
                  onClick={() => {
                    setActiveTab?.('contact');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#f9570c] hover:text-[#d44505] transition-colors"
                >
                  <CornerDownRight size={15} />
                  <span>Explore Collaboration Opportunities →</span>
                </button>
              </div>

            </div>

            {/* Right Column: Narrative + 3 Strategic Pillars */}
            <div className="lg:col-span-7 flex flex-col">
              
              {/* Editorial Paragraphs */}
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

              {/* 3 Pillar Feature Cards */}
              <div className="mt-8 space-y-4">
                {pillars.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-slate-50/80 border border-slate-200/70 hover:border-orange-200 hover:bg-orange-50/20 transition-all duration-300 flex items-start gap-4 group"
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

              {/* Standout Bottom Punchline */}
              <div className="mt-9 p-4 sm:p-5 rounded-2xl bg-orange-500/10 border border-[#f9570c]/20 flex items-center gap-3">
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
  );
}