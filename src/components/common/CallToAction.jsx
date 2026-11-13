import React from 'react';
import { CornerDownRight, ArrowRight, Mail } from 'lucide-react';

export default function CallToAction({ setActiveTab }) {
  const directEmail = 'contact@zahidhussainofficial.com';

  return (
    <section className="bg-[#fbf7f2] py-24 sm:py-28 px-4 sm:px-6 relative border-t border-slate-200/70">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Floating Rounded White Container */}
        <div className="bg-white border border-slate-200/90 rounded-[32px] sm:rounded-[40px] px-6 sm:px-14 py-16 sm:py-20 text-center shadow-2xl shadow-slate-900/5 flex flex-col items-center relative overflow-hidden">
          
          {/* Subtle Ambient Background Highlight */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none"></div>

          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-7 relative z-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
            <span>Have a Project in Mind?</span>
          </div>

          {/* Headline (Editorial Serif Typography) */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1c1917] tracking-tight leading-[1.15] max-w-3xl relative z-10">
            Let’s Turn your Ideas <br className="hidden sm:inline" /> into Results
          </h2>

          {/* Description */}
          <p className="mt-6 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-sans relative z-10">
            Need a custom full-stack web application, high-converting WordPress website, SEO strategy, or digital marketing support? Let's discuss your goals and architect the right solution for your business.
          </p>

          {/* Action Button */}
          <div className="mt-9 relative z-10">
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
          </div>

          {/* Direct Large Email Link */}
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
  );
}