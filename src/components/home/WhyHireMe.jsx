import React from 'react';
import { 
  Search, 
  Code2, 
  Megaphone, 
  TrendingUp, 
  Gauge, 
  BarChart3, 
  CornerDownRight 
} from 'lucide-react';

export default function WhyHireMe({ setActiveTab }) {
  const cards = [
    {
      title: 'SEO That Drives Organic Growth',
      description: "Increase your website's visibility on Google and attract high-quality organic traffic that converts into customers.",
      icon: <Search size={22} />,
    },
    {
      title: 'Custom Full-Stack & WordPress Web Development',
      description: 'Engineer ultra-fast React/Node.js web apps and high-converting WordPress sites built for zero downtime, modern UX, and top performance.',
      icon: <Code2 size={22} />,
    },
    {
      title: 'Results-Driven Digital Marketing',
      description: 'Reach the right audience with marketing strategies focused on measurable business growth and lead generation.',
      icon: <Megaphone size={22} />,
    },
    {
      title: 'More Leads with Google Ads',
      description: 'Launch and optimise Google Ads campaigns that maximise qualified conversions while cutting down unnecessary ad spend.',
      icon: <TrendingUp size={22} />,
    },
    {
      title: 'Faster Website & Better Rankings',
      description: 'Improve Core Web Vitals, website speed, indexing, and technical SEO to achieve higher search visibility.',
      icon: <Gauge size={22} />,
    },
    {
      title: 'Data-Driven Business Decisions',
      description: 'Track website performance, visitor behaviour, and conversions using Google Analytics and Search Console.',
      icon: <BarChart3 size={22} />,
    },
  ];

  return (
    <section className="bg-[#0b1322] text-white py-24 px-4 sm:px-6 relative border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/50 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
            <span>Why Hire Me</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            Why Businesses Trust Me to Grow Their Business Online
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I help businesses increase traffic, generate quality leads, and grow revenue through SEO, WordPress, Google Ads, and performance-driven digital marketing.
          </p>
        </div>

        {/* 6 Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group relative bg-[#172235] hover:bg-[#1a273d] border border-slate-800/80 rounded-[20px] min-h-[310px] p-8 sm:p-9 transition-all duration-300 ease-out transform hover:-translate-y-3.5 shadow-xl hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-start cursor-pointer overflow-hidden"
            >
              {/* Circular Icon: Default Cream-White BG with Orange Icon | Hover: Solid Orange BG with Pure White Icon */}
              <div className="w-13 h-13 rounded-full bg-[#ffefe5] group-hover:bg-[#f9570c] text-[#f9570c] group-hover:text-white flex items-center justify-center mb-7 transition-all duration-300 shadow-md">
                {card.icon}
              </div>

              {/* Card Title (Serif Typography) */}
              <h3 className="text-xl sm:text-[22px] font-serif font-bold text-[#f8fafc] leading-snug tracking-tight">
                {card.title}
              </h3>

              {/* Card Description */}
              <p className="mt-4 text-xs sm:text-[13px] text-slate-300 leading-relaxed font-sans">
                {card.description}
              </p>

              {/* Bottom Orange Curved Accent Strip with Border-Radius Match */}
              <div className="absolute bottom-0 left-0 right-0 h-[6px] bg-transparent group-hover:bg-[#f9570c] rounded-b-[20px] transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-20 text-center flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight">
            Ready to Grow Your Business Online?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 max-w-xl">
            Let's discuss your project and create a digital marketing strategy tailored to your business goals.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                setActiveTab?.('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-7 py-3 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/40 transition-all hover:scale-105 active:scale-95"
            >
              <CornerDownRight size={15} />
              <span>Schedule a Free Consultation</span>
            </button>

            <a
              href="https://zahidhussainofficial.com/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-7 py-3 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/40 transition-all hover:scale-105 active:scale-95"
            >
              <CornerDownRight size={15} />
              <span>View My Portfolio</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}