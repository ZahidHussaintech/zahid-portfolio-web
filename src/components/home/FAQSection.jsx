import React, { useState } from 'react';
import { CornerDownRight, Plus, Minus } from 'lucide-react';

export default function FAQSection({ setActiveTab }) {
  const [openIndex, setOpenIndex] = useState(0); // Pehla question open by default

  const faqs = [
    {
      q: 'Do you build custom full-stack web applications as well as WordPress sites?',
      a: 'Yes, absolutely. I develop high-performance custom web applications using the MERN stack (React, Node.js, Express, MongoDB/MySQL) for clients requiring custom workflows, dynamic dashboards, and zero-vulnerability speed. For content-focused business sites and e-commerce, I engineer optimized, secure, and fast WordPress & WooCommerce architectures.'
    },
    {
      q: 'What full-stack digital marketing and web engineering services do you provide?',
      a: 'I provide end-to-end digital solutions: Custom React/Node.js web development, WordPress CMS engineering, Technical & On-Page SEO (improving Google Search Console visibility), Core Web Vitals optimization, Google Ads PPC management, and GA4 conversion tracking setup.'
    },
    {
      q: 'How do you ensure websites are ultra-fast, secure, and protected against crashes?',
      a: 'Every custom React build is compiled using modern bundlers, deployed on edge CDN architectures (such as Netlify) with automated CI/CD, and safeguarded with client-side Error Boundaries. This ensures instantaneous page loads, zero attack surface for database injection, and 99.9% uptime.'
    },
    {
      q: 'Do you work with international B2B clients and exporters?',
      a: 'Yes, a significant portion of my portfolio involves international B2B businesses, commodity exporters (such as agricultural commodities, organic dates, and sesame seeds), and global service providers across the USA, UK, Europe, and the Middle East. I implement international SEO and multi-market lead generation funnels.'
    },
    {
      q: 'Do you provide ongoing technical SEO and performance maintenance after launch?',
      a: 'Yes. Beyond initial deployment, I offer continuous monitoring for Core Web Vitals, keyword ranking progression, Google Search Console indexing health, and ongoing speed optimization to ensure sustainable search growth.'
    },
    {
      q: 'How can we get started and discuss a project?',
      a: 'You can easily schedule a consultation or reach out via direct email or the contact section. We will discuss your technical requirements, target audience, conversion goals, and lay out an actionable roadmap for your business.'
    }
  ];

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="bg-white text-slate-900 py-24 px-4 sm:px-6 relative border-t border-slate-100">
      <div className="max-w-4xl mx-auto">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
            <span>FAQ</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
            Have questions about full-stack web development, SEO strategies, or digital marketing solutions? Here are transparent answers to help you get started.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden cursor-pointer ${
                  isOpen
                    ? 'border-[#f9570c] bg-orange-50/20 shadow-md shadow-orange-950/5'
                    : 'border-slate-200/90 bg-white hover:border-slate-300'
                }`}
              >
                {/* Question Header Button */}
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between gap-4 text-left cursor-pointer"
                >
                  <span className={`text-base sm:text-lg font-serif font-bold tracking-tight transition-colors duration-200 ${
                    isOpen ? 'text-[#f9570c]' : 'text-[#1c1917]'
                  }`}>
                    {faq.q}
                  </span>

                  {/* Plus / Minus Indicator */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? 'bg-[#f9570c] text-white rotate-180' 
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}>
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <div className="px-6 sm:px-7 pb-6 pt-1 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed border-t border-orange-100/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Callout Block */}
        <div className="mt-20 text-center flex flex-col items-center">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1c1917] tracking-tight">
            Still Have Questions?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-md leading-relaxed font-sans">
            Let's discuss your project and architect the optimal custom web and digital growth strategy for your business.
          </p>

          <div className="mt-7">
            <button
              onClick={() => {
                setActiveTab?.('contact');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-8 py-3 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/20 transition-all hover:scale-105 active:scale-95"
            >
              <CornerDownRight size={15} />
              <span>Let's Talk</span>
              <span className="ml-0.5">→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}