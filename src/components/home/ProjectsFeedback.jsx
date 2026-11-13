import React from 'react';
import { CornerDownRight, Star } from 'lucide-react';

export default function ProjectsFeedback() {
  const reviews = [
    {
      id: 'rose-garden',
      theme: 'bg-[#fff8f0] border-orange-150 text-slate-900',
      starsColor: 'text-[#f9570c]',
      quote: 'Corporate B2B website for an agricultural exporter, focused on professional branding, international SEO, fast Core Web Vitals, and verified global buyer engagement.',
      clientName: 'Rose Garden Group',
      clientRole: 'CLIENT PROJECT • B2B EXPORTER',
      siteUrl: 'https://rosegardengroup.pk/',
      logo: (
        <div className="w-12 h-12 rounded-full bg-white shadow-md border border-orange-100 flex flex-col items-center justify-center font-bold">
          <span className="text-[13px] text-emerald-800 leading-none tracking-tight">RG</span>
          <span className="text-[7px] text-slate-400 font-sans tracking-widest mt-0.5">GROUP</span>
        </div>
      )
    },
    {
      id: 'sindhuparas',
      // Center Card Standout (Dark Premium Contrast)
      theme: 'bg-[#0f172a] border-slate-700/80 text-white shadow-2xl',
      starsColor: 'text-[#f9570c]',
      quote: 'B2B agricultural commodity export showcase engineered on React & Netlify. Optimized for machine-cleaned sesame seeds, flaxseeds, and organic dates with high-conversion FOB inquiry funnels.',
      clientName: 'Sindhuparas Agro',
      clientRole: 'LIVE PRODUCTION • B2B SHOWCASE',
      siteUrl: 'https://sindhuparas.netlify.app/',
      logo: (
        <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-bold text-amber-400">
          <span className="text-sm font-serif">S</span>
          <span className="text-xs font-serif text-[#f9570c]">P</span>
        </div>
      )
    },
    {
      id: 'zahid-portfolio',
      theme: 'bg-[#f8fafc] border-slate-200 text-slate-900',
      starsColor: 'text-[#f9570c]',
      quote: 'My personal portfolio platform engineered to showcase custom full-stack MERN web applications, Cisco data analytics pipelines, enterprise cybersecurity standards, and organic search visibility.',
      clientName: 'Zahid Hussain',
      clientRole: 'PERSONAL BRAND • FULL-STACK & SEO',
      siteUrl: 'https://zahidhussainofficial.com/portfolio/',
      logo: (
        <div className="w-12 h-12 rounded-full bg-white shadow-md border border-slate-200 flex items-center justify-center font-bold text-[#f9570c]">
          <span className="text-xs font-mono font-black">&lt;ZH/&gt;</span>
        </div>
      )
    }
  ];

  return (
    <section className="bg-white text-slate-900 py-24 px-4 sm:px-6 relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
            <span>Projects & Feedback</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
            Real Projects. Real Feedback.
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
            I believe the best way to demonstrate my work is through real websites, high-speed custom code, and genuine business outcomes. Explore selected projects and see the live work in action.
          </p>
        </div>

        {/* 3 Feedback Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
          {reviews.map((card, idx) => (
            <div
              key={idx}
              className={`rounded-[26px] p-8 sm:p-9 flex flex-col justify-between border transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${card.theme}`}
            >
              <div>
                {/* 5 Rating Stars */}
                <div className="flex items-center gap-1.5 mb-7">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={17}
                      className={`fill-current ${card.starsColor}`}
                    />
                  ))}
                </div>

                {/* Project Feedback Description */}
                <p className="text-xs sm:text-[13px] leading-relaxed font-sans opacity-90 min-h-[96px]">
                  {card.quote}
                </p>

                {/* Divider Line */}
                <div className="my-6 border-b border-black/10 dark:border-white/10"></div>

                {/* Client / Project Identity */}
                <div className="flex items-center gap-3.5 mb-8">
                  {card.logo}
                  <div>
                    <h3 className="text-sm font-bold font-serif tracking-tight leading-snug">
                      {card.clientName}
                    </h3>
                    <p className="text-[10px] font-sans uppercase font-bold tracking-wider opacity-60 mt-0.5">
                      {card.clientRole}
                    </p>
                  </div>
                </div>
              </div>

              {/* View Live Website Button */}
              <a
                href={card.siteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white py-3 px-6 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/20 transition-all hover:scale-[1.02] active:scale-95"
              >
                <CornerDownRight size={14} />
                <span>View Live Website</span>
                <span className="ml-0.5">→</span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}