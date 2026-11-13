import React from 'react';
import { CornerDownRight } from 'lucide-react';

export default function WhoIHelp({ setActiveTab }) {
  const categories = [
    {
      title: 'Startups',
      subTitle: 'Modern Web Apps & MVPs',
      description: 'Helping emerging startups engineer ultra-fast React MVPs, custom full-stack web applications, and search-optimized architectures from day one.',
      buttonText: 'Build Startup MVP',
      image: '/images/custom-web-development-startups.webp',
      fallback: '/images/startup.webp',
      alt: 'Custom Full-Stack Web Development and SEO for Startups by Zahid Hussain'
    },
    {
      title: 'Small Businesses',
      subTitle: 'High-Converting Websites',
      description: 'Helping local businesses capture qualified customers through Google Business Profile, local SEO, and secure WordPress & custom development.',
      buttonText: 'Grow My Business',
      image: '/images/local-seo-small-business-websites.webp',
      fallback: '/images/small-business.webp',
      alt: 'Local SEO and WordPress Website Development for Small Businesses'
    },
    {
      title: 'E-commerce Brands',
      subTitle: 'Scalable Online Stores',
      description: 'Optimizing product indexing, Core Web Vitals, and checkout funnels using WooCommerce, Shopify, and headless React store architectures.',
      buttonText: 'Scale Online Store',
      image: '/images/ecommerce-wordpress-react-development.webp',
      fallback: '/images/ecommerce.webp',
      alt: 'Scalable E-commerce Store Development and Performance Marketing'
    },
    {
      title: 'B2B Companies',
      subTitle: 'Enterprise Lead Generation',
      description: 'Engineering robust corporate platforms and high-intent organic B2B search strategies to consistently generate high-value sales pipeline.',
      buttonText: 'Get B2B Pipeline',
      image: '/images/b2b-corporate-custom-web-solutions.webp',
      fallback: '/images/b2b.webp',
      alt: 'B2B Corporate Website Engineering and Lead Generation SEO'
    },
    {
      title: 'Personal Brands',
      subTitle: 'Executive Authority Sites',
      description: 'Positioning consultants, founders, and industry experts with bespoke high-authority portfolios that build trust and convert organic audience.',
      buttonText: 'Build My Brand',
      image: '/images/personal-branding-high-performance-websites.webp',
      fallback: '/images/personal-brand.webp',
      alt: 'Executive Personal Branding and Fast Custom Website Development'
    },
    {
      title: 'Export Businesses',
      subTitle: 'Global Trade Portals',
      description: 'Developing high-speed international catalog portals and multilingual B2B SEO strategies to connect exporters with verified global buyers.',
      buttonText: 'Expand Global Exports',
      image: '/images/export-business-b2b-international-seo.webp',
      fallback: '/images/export.webp',
      alt: 'International SEO and Global Trade Portal Development for Exporters'
    }
  ];

  return (
    <section className="bg-white text-slate-900 py-24 px-4 sm:px-6 relative border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
            <span>Target Industries & Solutions</span>
          </div>
        </div>

        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
            Who I Help Grow Online
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed font-sans">
            Specialized in scaling brands through <strong className="text-slate-900 font-semibold">Technical SEO</strong>, <strong className="text-slate-900 font-semibold">Custom Full-Stack Web Development</strong>, and <strong className="text-slate-900 font-semibold">High-Converting WordPress Architecture</strong>.
          </p>
        </div>

        {/* 6 Cards Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {categories.map((card, idx) => (
            <article
              key={idx}
              className="group relative h-[390px] sm:h-[420px] rounded-[22px] overflow-hidden border-[3px] border-transparent hover:border-[#f9570c] transition-all duration-300 shadow-lg cursor-pointer bg-slate-900"
            >
              {/* Image with Direct public/images path & fallback */}
              <img
                src={card.image}
                alt={card.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                onError={(e) => {
                  if (e.target.src.indexOf(card.fallback) === -1) {
                    e.target.src = card.fallback;
                  }
                }}
              />

              {/* 1. Default State: Compact Dark Glass Strip */}
              <div className="absolute inset-x-0 bottom-0 py-4 px-6 bg-slate-950/75 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-0 group-hover:pointer-events-none flex flex-col items-center justify-center text-center">
                <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                  {card.title}
                </h3>
                <span className="text-[11px] uppercase tracking-wider text-orange-400 font-sans font-semibold mt-0.5">
                  {card.subTitle}
                </span>
              </div>

              {/* 2. Hover State: Half Card Light Transparent Blur Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-[64%] bg-black/70 backdrop-blur-[6px] px-6 py-6 flex flex-col items-center justify-between text-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out">
                <div>
                  <h3 className="text-2xl font-serif font-bold text-white tracking-tight">
                    {card.title}
                  </h3>
                  <span className="text-[11px] uppercase tracking-wider text-orange-400 font-sans font-semibold block mt-1">
                    {card.subTitle}
                  </span>
                </div>

                <p className="text-xs sm:text-[13px] text-slate-200 font-sans leading-relaxed max-w-[270px]">
                  {card.description}
                </p>

                <button
                  onClick={() => {
                    setActiveTab?.('services');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 bg-[#f9570c] hover:bg-[#e04a05] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wide transition-all duration-200 shadow-md shadow-orange-950/40 transform hover:scale-105 active:scale-95"
                >
                  <CornerDownRight size={14} />
                  <span>{card.buttonText}</span>
                  <span className="ml-0.5">→</span>
                </button>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}