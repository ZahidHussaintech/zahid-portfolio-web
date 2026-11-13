import React, { useState } from 'react';
import { Menu, X, CornerDownRight } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'services', label: 'Services' },
    { id: 'blog', label: 'Blog', isExternal: true, url: 'https://biztools.zahidhussainofficial.com/' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#060012]/85 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
        >
          <div className="w-10 h-10 rounded-xl bg-[#f9570c] text-white flex items-center justify-center font-bold text-lg shadow-md shadow-orange-950/40 group-hover:scale-105 transition-transform">
            Z
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-serif font-black tracking-tight text-white group-hover:text-[#f9570c] transition-colors leading-none">
              ZAHID<span className="text-[#f9570c]">.</span>
            </span>
            <span className="text-[10px] font-sans uppercase font-bold text-slate-400 tracking-wider mt-0.5">
              DEV & SEO
            </span>
          </div>
        </button>

        {/* Desktop Navigation Capsule */}
        <nav className="hidden md:flex items-center bg-[#131d2e]/90 border border-slate-800/90 rounded-full px-3 py-1.5 shadow-inner">
          {navItems.map((item) => {
            if (item.isExternal) {
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-bold text-slate-300 hover:text-white hover:bg-white/5 transition-all duration-200 inline-flex items-center gap-1"
                >
                  <span>{item.label}</span>
                  <span className="text-[10px] text-[#f9570c]">↗</span>
                </a>
              );
            }

            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'text-[#f9570c] bg-white/5 font-extrabold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('contact')}
            className="flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-wide shadow-md shadow-orange-950/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Let's Talk</span>
            <CornerDownRight size={14} />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#09111e] border-b border-slate-800 px-6 py-6 flex flex-col gap-3">
          {navItems.map((item) => {
            if (item.isExternal) {
              return (
                <a
                  key={item.id}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left py-2 text-sm font-semibold text-slate-300 hover:text-white flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-[#f9570c]">↗</span>
                </a>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left py-2 text-sm font-semibold transition-colors cursor-pointer ${
                  activeTab === item.id ? 'text-[#f9570c] font-bold' : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-3 border-t border-slate-800 mt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white py-3 rounded-full text-xs font-bold shadow-md shadow-orange-950/40 cursor-pointer"
            >
              <span>Let's Talk</span>
              <CornerDownRight size={14} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}