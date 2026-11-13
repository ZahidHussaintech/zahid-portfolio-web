import React from 'react';
import { Check, CornerDownRight, ArrowUpRight } from 'lucide-react';

export default function WorkProcess({ setActiveTab }) {
  const steps = [
    {
      num: '01',
      title: 'Discovery & Strategy',
      description: 'Understanding your business model, customer target audience, competitors, and technical requirements to formulate an organic SEO and development roadmap.',
    },
    {
      num: '02',
      title: 'Architecture & Execution',
      description: 'Engineering ultra-fast custom React web apps, secure WordPress websites, and conversion funnels coupled with targeted Google Ads campaigns.',
    },
    {
      num: '03',
      title: 'Testing & Optimization',
      description: 'Auditing Core Web Vitals, page speed, technical SEO indexability, and conversion tracking via Google Analytics 4 for peak reliability.',
    },
    {
      num: '04',
      title: 'Growth & Support',
      description: 'Delivering continuous technical maintenance, keyword rank tracking, and ongoing digital marketing optimization to scale measurable revenue.',
    },
  ];

  const highlights = [
    'Free Initial Consultation & Audit',
    'Transparent Milestone Communication',
    'Results-Driven Full-Stack & SEO Strategy',
  ];

  return (
    <section className="bg-[#0b1322] text-white py-24 px-4 sm:px-6 relative border-t border-slate-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/50 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
            <span>My Process</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
            A Simple Process That Delivers Results
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans">
            Every successful project starts with a clear strategy. My step-by-step process ensures transparency, engineering efficiency, and measurable results from planning to project delivery.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Proposition, Highlights & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight leading-snug">
              Your Growth Starts With The Right Strategy
            </h3>

            <p className="mt-6 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              Whether you need a high-converting WordPress website, a custom full-stack web application, or higher Google rankings, I work closely with you at every stage.
            </p>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed">
              Every project is engineered with clean code, modern UX principles, high-performance security, and a strict focus on generating verified business leads.
            </p>

            {/* Checklist */}
            <div className="mt-6 space-y-3">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-xs sm:text-sm text-slate-200">
                  <Check size={16} className="text-[#f9570c] shrink-0 stroke-[3]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-9">
              <button
                onClick={() => {
                  setActiveTab?.('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-7 py-3 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/40 transition-all hover:scale-105 active:scale-95"
              >
                <CornerDownRight size={15} />
                <span>Book a Free Consultation</span>
              </button>
            </div>
          </div>

          {/* Right Column: 4-Step Process List with Top Orange Line on Hover */}
          <div className="lg:col-span-7 flex flex-col">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="group relative pt-8 pb-9 border-t border-slate-800 transition-all duration-300 cursor-pointer"
              >
                {/* Active Orange Line on Top (Hover Effect) */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#f9570c] transition-colors duration-300"></div>

                {/* Step Header */}
                <div className="flex items-center justify-between gap-4">
                  <h4 className="text-2xl sm:text-[26px] font-serif font-bold text-white group-hover:text-white transition-colors duration-200 tracking-tight flex items-baseline gap-3">
                    <span className="text-[#f9570c] font-sans font-black text-xl sm:text-2xl">
                      {step.num}
                    </span>
                    <span>{step.title}</span>
                  </h4>

                  {/* Subtle Interactive Hover Icon */}
                  <div className="w-7 h-7 rounded-full border border-slate-800 group-hover:border-[#f9570c] group-hover:bg-[#f9570c]/10 text-slate-500 group-hover:text-[#f9570c] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 shrink-0">
                    <ArrowUpRight size={15} />
                  </div>
                </div>

                {/* Step Details */}
                <p className="mt-3.5 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed group-hover:text-slate-300 transition-colors duration-300 max-w-xl">
                  {step.description}
                </p>
              </div>
            ))}
            
            {/* Final Bottom Border */}
            <div className="border-t border-slate-800/80"></div>
          </div>

        </div>

      </div>
    </section>
  );
}