import React from 'react';
import { CornerDownRight, ArrowUpRight } from 'lucide-react';

export default function FeaturedServices({ setActiveTab }) {
  const services = [
    {
      number: '1.',
      title: 'SEO Services',
      description: 'Improve your Google rankings, increase organic traffic, and attract customers actively searching for your products and services.',
    },
    {
      number: '2.',
      title: 'WordPress & Custom Web Development',
      description: 'Build fast, responsive, and SEO-friendly WordPress websites and modern React apps designed to convert visitors into customers.',
    },
    {
      number: '3.',
      title: 'Google Ads Management',
      description: 'Launch high-performing Google Ads campaigns that generate quality leads while maximizing your advertising budget.',
    },
    {
      number: '4.',
      title: 'Technical SEO & Website Optimization',
      description: 'Improve website speed, Core Web Vitals, mobile usability, and technical performance for better rankings and user experience.',
    },
  ];

  return (
    <section className="bg-[#0b1322] text-white py-24 px-4 sm:px-6 relative border-t border-slate-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        
        {/* Left Column: Heading, Subtext & CTA */}
        <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
          
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/50 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
            <span>Featured Services</span>
          </div>

          {/* Headline (Editorial Serif Style) */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-[1.2]">
            Digital Marketing Services That Grow Your Business
          </h2>

          {/* Description */}
          <p className="mt-6 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            I help businesses increase online visibility, generate qualified leads, and grow revenue through SEO, WordPress development, Google Ads, and data-driven digital marketing strategies.
          </p>

          {/* Explore Button */}
          <div className="mt-9">
            <button
              onClick={() => {
                setActiveTab?.('services');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-7 py-3 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/40 transition-all hover:scale-105 active:scale-95"
            >
              <CornerDownRight size={15} />
              <span>Explore My Services</span>
            </button>
          </div>

        </div>

        {/* Right Column: Interactive Editorial Service List */}
        <div className="lg:col-span-7 flex flex-col">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group py-8 sm:py-9 border-b border-slate-800 hover:border-[#f9570c] transition-colors duration-300 cursor-pointer flex flex-col justify-start"
            >
              {/* Service Title with Number */}
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white group-hover:text-[#f9570c] transition-colors duration-300 tracking-tight flex items-baseline gap-2.5">
                  <span className="text-[#f9570c] group-hover:translate-x-1 transition-transform duration-300">
                    {service.number}
                  </span>
                  <span>{service.title}</span>
                </h3>

                {/* Subtle Interactive Arrow Indicator on Hover */}
                <div className="w-8 h-8 rounded-full border border-slate-700/60 group-hover:border-[#f9570c] group-hover:bg-[#f9570c]/10 text-slate-400 group-hover:text-[#f9570c] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1 shrink-0">
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Service Description */}
              <p className="mt-3.5 text-xs sm:text-sm text-slate-400 font-sans leading-relaxed group-hover:text-slate-200 transition-colors duration-300 max-w-xl">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}