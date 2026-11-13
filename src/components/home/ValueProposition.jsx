import React from 'react';
import { CornerDownRight } from 'lucide-react';

export default function ValueProposition({ setActiveTab }) {
  return (
    <section className="bg-white text-slate-900 py-20 px-4 sm:px-6 border-b border-slate-100">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        
        {/* Main Headline */}
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-[1.25] max-w-3xl">
          Helping Businesses Build, Rank & Grow Online
        </h2>

        {/* Lead Hook */}
        <p className="mt-6 text-base sm:text-lg font-serif font-medium text-[#292524] max-w-2xl leading-relaxed">
          I help businesses improve Google rankings, build high-converting WordPress websites, and generate qualified leads through SEO and digital marketing.
        </p>

        {/* Introduction Text */}
        <p className="mt-5 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed font-sans">
          Hi, I’m <strong className="text-slate-900 font-bold">Zahid Hussain</strong>, a Freelance Digital Marketing Consultant, WordPress Developer, and SEO Specialist with practical experience in B2B marketing and website optimization. My goal is to help businesses increase their online visibility, attract more customers, and achieve sustainable growth.
        </p>

        {/* Action Buttons */}
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              setActiveTab?.('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 bg-[#d9480f] hover:bg-[#c93f0b] text-white px-7 py-3 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-700/20 transition-all hover:scale-105 active:scale-95"
          >
            <CornerDownRight size={15} />
            <span>Hire Me</span>
          </button>

          <a
            href="https://zahidhussainofficial.com/portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#d9480f] hover:bg-[#c93f0b] text-white px-7 py-3 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-700/20 transition-all hover:scale-105 active:scale-95"
          >
            <CornerDownRight size={15} />
            <span>View Portfolio</span>
          </a>
        </div>

      </div>
    </section>
  );
}