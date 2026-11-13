import React from 'react';

export default function Hero({ setActiveTab }) {
  // Tamam 20 tools sanitized aur balanced orbit distribution me
  const tools = [
    // --- Inner Orbit Band ---
    {
      name: 'React.js',
      pos: { top: '22%', right: '28%' },
      anim: 'anim-orbit-1',
      bg: 'bg-slate-900',
      border: 'border-cyan-400/40',
      shadow: 'shadow-[0_0_12px_rgba(34,211,238,0.45)]',
      svg: (
        <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-4 h-4 fill-cyan-400">
          <circle cx="0" cy="0" r="2.05" />
          <g stroke="currentColor" strokeWidth="1" fill="none" className="stroke-cyan-400">
            <ellipse rx="11" ry="4.2" />
            <ellipse rx="11" ry="4.2" transform="rotate(60)" />
            <ellipse rx="11" ry="4.2" transform="rotate(120)" />
          </g>
        </svg>
      )
    },
    {
      name: 'Node.js',
      pos: { top: '15%', left: '34%' },
      anim: 'anim-orbit-2',
      bg: 'bg-[#102315]',
      border: 'border-emerald-500/50',
      shadow: 'shadow-[0_0_12px_rgba(16,185,129,0.4)]',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-400">
          <path d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2zm0 2.2L5 8.2v7.6l7 4.2 7-4.2V8.2L12 4.2z" />
        </svg>
      )
    },
    {
      name: 'WordPress',
      pos: { top: '33%', left: '26%' },
      anim: 'anim-orbit-3',
      bg: 'bg-[#00749C]',
      border: 'border-sky-300/40',
      shadow: 'shadow-[0_0_12px_rgba(0,116,156,0.5)]',
      svg: (
        <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
          <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18.2a8.2 8.2 0 01-4.7-1.5l3.9-10.7 2.1 6.1 1.2-3.4 1.4 4.1a8.2 8.2 0 01-3.9 5.4z" />
        </svg>
      )
    },
    {
      name: 'Elementor',
      pos: { top: '35%', right: '23%' },
      anim: 'anim-orbit-4',
      bg: 'bg-[#92003B]',
      border: 'border-rose-400/50',
      shadow: 'shadow-[0_0_12px_rgba(225,29,72,0.45)]',
      svg: <span className="text-[10px] font-black text-white">E</span>
    },
    {
      name: 'ChatGPT',
      pos: { top: '8%', left: '46%' },
      anim: 'anim-orbit-1',
      bg: 'bg-[#10A37F]',
      border: 'border-teal-300/50',
      shadow: 'shadow-[0_0_12px_rgba(16,163,127,0.45)]',
      svg: <span className="text-[8px] font-black text-white font-mono">GPT</span>
    },

    // --- Middle Orbit Band ---
    {
      name: 'HTML5',
      pos: { top: '24%', left: '16%' },
      anim: 'anim-orbit-2',
      bg: 'bg-[#E34F26]',
      border: 'border-orange-400/40',
      shadow: 'shadow-[0_0_12px_rgba(227,79,38,0.4)]',
      svg: <span className="text-[10px] font-black text-white font-mono">5</span>
    },
    {
      name: 'CSS3',
      pos: { top: '44%', left: '12%' },
      anim: 'anim-orbit-3',
      bg: 'bg-[#1572B6]',
      border: 'border-blue-400/40',
      shadow: 'shadow-[0_0_12px_rgba(21,114,182,0.4)]',
      svg: <span className="text-[10px] font-black text-white font-mono">3</span>
    },
    {
      name: 'JavaScript',
      pos: { bottom: '26%', left: '18%' },
      anim: 'anim-orbit-4',
      bg: 'bg-[#F7DF1E]',
      border: 'border-yellow-200/50',
      shadow: 'shadow-[0_0_12px_rgba(247,223,30,0.45)]',
      svg: <span className="text-[9px] font-black text-slate-950 font-mono">JS</span>
    },
    {
      name: 'Express.js',
      pos: { top: '20%', right: '18%' },
      anim: 'anim-orbit-1',
      bg: 'bg-black',
      border: 'border-slate-500/50',
      shadow: 'shadow-[0_0_12px_rgba(255,255,255,0.25)]',
      svg: <span className="text-[9px] font-black text-white font-mono">ex</span>
    },
    {
      name: 'MongoDB',
      pos: { top: '42%', right: '16%' },
      anim: 'anim-orbit-2',
      bg: 'bg-[#112318]',
      border: 'border-green-500/40',
      shadow: 'shadow-[0_0_12px_rgba(34,197,94,0.4)]',
      svg: (
        <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-green-400">
          <path d="M12 22s6-4.5 6-11c0-4-3-7-6-9-3 2-6 5-6 9 0 6.5 6 11 6 11z" />
        </svg>
      )
    },
    {
      name: 'MySQL',
      pos: { bottom: '28%', right: '20%' },
      anim: 'anim-orbit-3',
      bg: 'bg-[#00618A]',
      border: 'border-sky-300/40',
      shadow: 'shadow-[0_0_12px_rgba(0,97,138,0.4)]',
      svg: <span className="text-[8px] font-black text-white font-mono">SQL</span>
    },

    // --- Outer Orbit Band (SEO & Modern AI) ---
    {
      name: 'Google Search Console',
      pos: { top: '12%', left: '22%' },
      anim: 'anim-orbit-4',
      bg: 'bg-[#1a237e]',
      border: 'border-blue-400/40',
      shadow: 'shadow-[0_0_12px_rgba(66,133,244,0.4)]',
      svg: <span className="text-[8px] font-black text-white">GSC</span>
    },
    {
      name: 'Google Analytics 4',
      pos: { top: '10%', right: '36%' },
      anim: 'anim-orbit-1',
      bg: 'bg-[#E37400]',
      border: 'border-amber-300/40',
      shadow: 'shadow-[0_0_12px_rgba(245,158,11,0.45)]',
      svg: (
        <div className="flex items-end gap-0.5 h-3">
          <div className="w-0.5 h-1.5 bg-white rounded-t"></div>
          <div className="w-0.5 h-2.5 bg-white rounded-t"></div>
          <div className="w-0.5 h-3 bg-white rounded-t"></div>
        </div>
      )
    },
    {
      name: 'Google Business Profile',
      pos: { bottom: '40%', left: '6%' },
      anim: 'anim-orbit-2',
      bg: 'bg-[#1a73e8]',
      border: 'border-blue-300/40',
      shadow: 'shadow-[0_0_12px_rgba(26,115,232,0.45)]',
      svg: <span className="text-[8px] font-black text-white">GMB</span>
    },
    {
      name: 'Technical SEO',
      pos: { bottom: '22%', right: '11%' },
      anim: 'anim-orbit-3',
      bg: 'bg-[#BE185D]',
      border: 'border-pink-400/40',
      shadow: 'shadow-[0_0_12px_rgba(190,24,93,0.45)]',
      svg: <span className="text-[8px] font-black text-white font-mono">SEO</span>
    },
    {
      name: 'Yoast SEO',
      pos: { bottom: '15%', left: '28%' },
      anim: 'anim-orbit-4',
      bg: 'bg-[#A4286A]',
      border: 'border-purple-300/40',
      shadow: 'shadow-[0_0_12px_rgba(164,40,106,0.4)]',
      svg: <span className="text-[8px] font-black text-white font-mono">Y</span>
    },
    {
      name: 'Rank Math',
      pos: { bottom: '16%', right: '28%' },
      anim: 'anim-orbit-1',
      bg: 'bg-[#185ADB]',
      border: 'border-sky-400/40',
      shadow: 'shadow-[0_0_12px_rgba(24,90,219,0.4)]',
      svg: <span className="text-[8px] font-black text-white font-mono">RM</span>
    },
    {
      name: 'Claude AI',
      pos: { top: '30%', right: '8%' },
      anim: 'anim-orbit-2',
      bg: 'bg-[#D97706]',
      border: 'border-amber-400/40',
      shadow: 'shadow-[0_0_12px_rgba(217,119,6,0.45)]',
      svg: <span className="text-[9px] font-serif font-black text-white">Cl</span>
    },
    {
      name: 'Gemini AI',
      pos: { bottom: '34%', right: '5%' },
      anim: 'anim-orbit-3',
      bg: 'bg-[#1E1B4B]',
      border: 'border-indigo-400/50',
      shadow: 'shadow-[0_0_12px_rgba(99,102,241,0.45)]',
      svg: <span className="text-[10px] text-sky-300 font-bold">✦</span>
    },
    {
      name: 'Canva',
      pos: { bottom: '34%', left: '20%' },
      anim: 'anim-orbit-4',
      bg: 'bg-gradient-to-tr from-[#00C4CC] to-[#7D2AE8]',
      border: 'border-cyan-300/40',
      shadow: 'shadow-[0_0_12px_rgba(0,196,204,0.45)]',
      svg: <span className="text-[9px] font-serif font-black text-white">C</span>
    }
  ];

  return (
    <section className="relative min-h-[760px] lg:min-h-[820px] bg-[#060012] text-white flex flex-col items-center justify-center overflow-hidden pt-20 pb-14 select-none">
      
      {/* Background Radial Glow */}
      <div className="absolute top-[38%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[720px] bg-purple-700/18 rounded-full blur-[160px] pointer-events-none"></div>

      {/* Orbit Stage */}
      <div className="relative w-full max-w-5xl h-[520px] sm:h-[580px] flex items-center justify-center">
        
        {/* Concentric Thin Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[390px] h-[340px] sm:h-[390px] rounded-full border border-purple-500/20 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[510px] sm:w-[580px] h-[510px] sm:h-[580px] rounded-full border border-purple-500/15 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[680px] sm:w-[770px] h-[680px] sm:h-[770px] rounded-full border border-purple-500/10 pointer-events-none"></div>

        {/* Floating Tool Badges */}
        {tools?.map((badge, idx) => (
          <div
            key={idx}
            title={badge?.name || 'Tool'}
            style={badge?.pos}
            className={`absolute z-10 ${badge?.anim} w-8 h-8 sm:w-9 sm:h-9 rounded-full ${badge?.bg} border ${badge?.border} ${badge?.shadow} flex items-center justify-center transition-transform hover:scale-125 cursor-pointer backdrop-blur-sm`}
          >
            {badge?.svg}
          </div>
        ))}

        {/* Center Portrait Cutout (High Resolution, Seamless Bottom Fade & Studio Glow) */}
<div className="relative z-20 w-[300px] sm:w-[350px] md:w-[390px] h-[450px] sm:h-[520px] flex items-end justify-center pointer-events-none">
  {/* Subtle Ambient Backlight Glow */}
  <div className="absolute inset-x-8 bottom-6 top-16 rounded-full bg-gradient-to-tr from-purple-600/25 via-indigo-500/20 to-orange-500/15 blur-2xl -z-10" />

  <img
    src="/images/zahid-profile.webp"
    alt="Zahid Hussain"
    className="w-full h-full object-contain object-bottom drop-shadow-[0_18px_35px_rgba(0,0,0,0.9)] [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
    onError={(e) => {
      if (!e.target.src.includes('.jpg')) {
        e.target.src = '/images/zahid-profile.jpg';
      }
    }}
  />
</div>

      </div>

      {/* Typography Under Portrait */}
      <div className="relative z-30 text-center px-4 -mt-2 flex flex-col items-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white leading-none">
          Hi, I'm Zahid Hussain
        </h1>

        <p className="mt-4 text-base sm:text-xl font-bold text-[#FFE600] tracking-wide">
          Web Developer, Digital Marketer & SEO Specialist
        </p>
      </div>

    </section>
  );
}