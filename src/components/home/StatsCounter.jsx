import React from 'react';
import { Trophy, FolderGit2, Rocket } from 'lucide-react';

export default function StatsCounter() {
  const stats = [
    {
      icon: <Trophy size={28} className="text-[#f9570c]" />,
      value: '5+ Years',
      title: 'Professional Digital Marketing Experience',
      subtitle: 'Helping businesses scale search traffic & revenue online.',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(249,87,12,0.25)]',
      borderGlow: 'group-hover:border-[#f9570c]/50'
    },
    {
      icon: <FolderGit2 size={28} className="text-[#f9570c]" />,
      value: '20+ Projects',
      title: 'Successfully Delivered Deployments',
      subtitle: 'Across Technical SEO, Custom React & WordPress platforms.',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(249,87,12,0.25)]',
      borderGlow: 'group-hover:border-[#f9570c]/50'
    },
    {
      icon: <Rocket size={28} className="text-[#f9570c]" />,
      value: '100% Focus',
      title: 'Measurable Business Growth',
      subtitle: 'Technical SEO • Full-Stack Development • Google Ads',
      glowColor: 'group-hover:shadow-[0_0_30px_rgba(249,87,12,0.25)]',
      borderGlow: 'group-hover:border-[#f9570c]/50'
    }
  ];

  return (
    <section className="relative bg-[#060012] py-20 px-4 sm:px-6 overflow-hidden border-t border-slate-800/80">
      
      {/* Background Soft Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-700/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* 3 Metric Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {stats?.map((stat, idx) => (
            <div
              key={idx}
              className={`group relative bg-[#0f172a]/70 hover:bg-[#131f37]/90 border border-slate-800 rounded-3xl p-8 sm:p-9 text-center flex flex-col items-center justify-between transition-all duration-300 ease-out transform hover:-translate-y-2.5 shadow-xl ${stat.glowColor} ${stat.borderGlow} backdrop-blur-md cursor-pointer`}
            >
              {/* Floating Ambient Border Highlight */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

              {/* Icon Container */}
              <div className="relative w-16 h-16 rounded-2xl bg-[#ffefe5]/10 border border-[#f9570c]/20 group-hover:bg-[#f9570c] text-[#f9570c] group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300 shadow-md group-hover:scale-110">
                <div className="transition-transform duration-300 group-hover:rotate-6">
                  {React.cloneElement(stat.icon, {
                    className: "transition-colors duration-300 group-hover:text-white text-[#f9570c]"
                  })}
                </div>
              </div>

              {/* Stat Value */}
              <h3 className="text-3xl sm:text-4xl font-serif font-black text-white tracking-tight leading-none mb-3">
                {stat.value}
              </h3>

              {/* Primary Label */}
              <p className="text-sm font-semibold text-slate-200 leading-snug mb-2 font-sans">
                {stat.title}
              </p>

              {/* Secondary Detail */}
              <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-[240px]">
                {stat.subtitle}
              </p>

              {/* Bottom Subtle Glowing Line Indicator */}
              <div className="mt-6 w-12 h-1 rounded-full bg-slate-800 group-hover:w-24 group-hover:bg-[#f9570c] transition-all duration-300"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}