import React, { useState } from 'react';
import { 
  CornerDownRight, 
  ArrowRight, 
  Mail, 
  MapPin, 
  Send, 
  MessageSquare,
  Briefcase,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';

export default function Contact({ setActiveTab }) {
  const directEmail = 'contact@zahidhussainofficial.com';
  const whatsappNumber = '+92 337 9814592';
  const whatsappUrl = 'https://wa.me/923379814592';

  // Social Links
  const linkedinUrl = 'https://www.linkedin.com/in/zahidhussainmarketer/';
  const githubUrl =   'https://github.com/ZahidHussaintech';
  const facebookUrl = 'https://www.facebook.com/ZahidHussainPro';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: 'fullstack',
    message: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false, message: '' });

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          // Yahan Web3Forms se mili hui unique Access Key paste karein
          access_key: '061fac3d-2f13-4fbc-9772-5bdffe7408d9',
          name: formData.name,
          company: formData.company,
          email: formData.email,
          service: formData.service,
          message: formData.message,
          subject: `Project Inquiry from ${formData.name} (${formData.company || 'Direct'})`,
          from_name: 'Zahid Hussain Portfolio Contact Desk'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          submitting: false,
          success: true,
          error: false,
          message: 'Thank you! Your project inquiry has been received. I will review the specifications and reply within 24 business hours.'
        });
        setFormData({
          name: '',
          company: '',
          email: '',
          service: 'fullstack',
          message: ''
        });
      } else {
        throw new Error(result.message || 'Submission failed');
      }
    } catch (err) {
      setStatus({
        submitting: false,
        success: false,
        error: true,
        message: 'Unable to deliver message right now. Please reach out directly via WhatsApp or email.'
      });
    }
  };

  return (
    <div className="bg-white text-slate-900 min-h-screen pt-20">
      
      {/* 1. HERO SECTION */}
      <section className="bg-[#070e1b] text-white py-20 sm:py-28 px-4 sm:px-6 relative border-b border-slate-800 overflow-hidden">
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-[#f9570c]/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center relative z-10">
          
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/50 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Initiate Direct Consultation</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-black tracking-tight text-white leading-[1.12]">
              Let’s Talk About Your Next Digital Project
            </h1>

            <p className="mt-6 text-sm sm:text-base text-slate-300 font-sans leading-relaxed max-w-xl">
              Looking to engineer a custom full-stack web application, dominate Google Search Console with technical SEO, or expand B2B international export pipelines? Let’s evaluate your technical objectives and architect a measurable way forward.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => {
                  const formElement = document.getElementById('inquiry-form-section');
                  if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-8 py-3.5 rounded-full text-xs font-bold tracking-wide shadow-lg shadow-orange-950/40 transition-all hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <span>Send a Message</span>
                <ArrowRight size={14} />
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab?.('services');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-800 text-white border border-slate-700/80 px-8 py-3.5 rounded-full text-xs font-bold tracking-wide transition-all hover:scale-105 active:scale-95 cursor-pointer w-full sm:w-auto"
              >
                <Briefcase size={14} />
                <span>View My Services</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hero Graphic / Illustration Container */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[420px] rounded-3xl p-3 bg-gradient-to-tr from-slate-900/80 to-slate-800/30 border border-slate-800 shadow-2xl flex items-center justify-center overflow-hidden group">
              <img 
                src="/images/contact/zahid-hussain-contact-consultation.webp" 
                alt="Zahid Hussain - Professional Web Developer and SEO Consultant"
                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  if (e.target.src.indexOf('/images/contact/') !== -1) {
                    e.target.src = '/images/zahid-hussain-contact-consultation.webp';
                  } else if (e.target.src.indexOf('/portfolio/') === -1) {
                    e.target.src = '/portfolio/rose-garden-b2b-export-website-seo.webp';
                  }
                }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* 2. GET IN TOUCH (Direct Cards) */}
      <section className="bg-white py-24 px-4 sm:px-6 relative border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Get in Touch</span>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              Let’s Start a Conversation
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              Whether you need technical software engineering, SEO consultation, or B2B export funnels, reach me directly through any preferred channel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Email Card */}
            <a
              href={`mailto:${directEmail}`}
              className="bg-[#fcf8f3] border border-orange-100/90 rounded-[28px] p-8 text-center flex flex-col items-center justify-between hover:-translate-y-2 hover:shadow-xl hover:border-orange-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-orange-100 flex items-center justify-center text-[#f9570c] mb-6 group-hover:scale-110 group-hover:bg-[#f9570c] group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#f9570c] block mb-2">
                  Email Me
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 tracking-tight break-all">
                  {directEmail}
                </h3>
                <p className="mt-2 text-xs text-slate-500 font-sans leading-relaxed">
                  Best for technical requirements, RFP specifications, and detailed project proposals.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-[#f9570c] flex items-center gap-1 group-hover:underline">
                <span>Write an Email</span>
                <span>→</span>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#fcf8f3] border border-orange-100/90 rounded-[28px] p-8 text-center flex flex-col items-center justify-between hover:-translate-y-2 hover:shadow-xl hover:border-orange-200 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-orange-100 flex items-center justify-center text-[#f9570c] mb-6 group-hover:scale-110 group-hover:bg-[#f9570c] group-hover:text-white transition-all">
                <MessageSquare size={24} />
              </div>
              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#f9570c] block mb-2">
                  WhatsApp Direct
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 tracking-tight">
                  {whatsappNumber}
                </h3>
                <p className="mt-2 text-xs text-slate-500 font-sans leading-relaxed">
                  Quick inquiries, async messaging, initial feasibility discussions, and urgent syncs.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-[#f9570c] flex items-center gap-1 group-hover:underline">
                <span>Open WhatsApp Chat</span>
                <span>→</span>
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-[#fcf8f3] border border-orange-100/90 rounded-[28px] p-8 text-center flex flex-col items-center justify-between hover:-translate-y-2 hover:shadow-xl hover:border-orange-200 transition-all duration-300 group">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-orange-100 flex items-center justify-center text-[#f9570c] mb-6 group-hover:scale-110 group-hover:bg-[#f9570c] group-hover:text-white transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-[#f9570c] block mb-2">
                  Work Location
                </span>
                <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 tracking-tight">
                  Karachi, Pakistan
                </h3>
                <p className="mt-2 text-xs text-slate-500 font-sans leading-relaxed">
                  Available for full-time remote contracts & consultation across US, UK, Gulf & Australia timezones.
                </p>
              </div>
              <div className="mt-6 text-xs font-bold text-slate-600 flex items-center gap-1">
                <span>Global Remote Delivery</span>
                <span>✦</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PROJECT INQUIRY FORM & FULL SOCIAL ICONS */}
      <section id="inquiry-form-section" className="py-24 px-4 sm:px-6 bg-[#fbf7f2] border-b border-orange-100/70">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Narrative Column & Pure SVGs Social Network Buttons */}
            <div className="lg:col-span-5 flex flex-col items-start lg:sticky lg:top-28">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
                <span>Project Inquiry</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-[1.18]">
                Tell Me About Your Project
              </h2>

              <p className="mt-6 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
                Share a few details regarding your scope, timeline, and current pain points. I personally review every inquiry and reply with structured recommendations within 24 business hours.
              </p>

              {/* Complete Social Channels Bar with Guaranteed Inline SVGs */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 w-full">
                <h4 className="text-xs font-mono font-bold uppercase text-slate-500 tracking-widest mb-4">
                  Professional Channels:
                </h4>
                
                <div className="flex items-center gap-3.5">
                  
                  {/* LinkedIn Icon */}
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-[#f9570c] hover:bg-[#e04a05] text-white flex items-center justify-center shadow-md shadow-orange-950/20 transition-transform hover:scale-110 active:scale-95"
                    aria-label="LinkedIn Profile"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>

                  {/* GitHub Icon */}
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-[#f9570c] hover:bg-[#e04a05] text-white flex items-center justify-center shadow-md shadow-orange-950/20 transition-transform hover:scale-110 active:scale-95"
                    aria-label="GitHub Profile"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>

                  {/* Facebook Icon */}
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-[#f9570c] hover:bg-[#e04a05] text-white flex items-center justify-center shadow-md shadow-orange-950/20 transition-transform hover:scale-110 active:scale-95"
                    aria-label="Facebook Profile"
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>

                  {/* Mail Icon */}
                  <a
                    href={`mailto:${directEmail}`}
                    className="w-11 h-11 rounded-full bg-[#f9570c] hover:bg-[#e04a05] text-white flex items-center justify-center shadow-md shadow-orange-950/20 transition-transform hover:scale-110 active:scale-95"
                    aria-label="Send Direct Email"
                  >
                    <Mail size={18} />
                  </a>

                  {/* WhatsApp Direct Icon */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-full bg-[#f9570c] hover:bg-[#e04a05] text-white flex items-center justify-center shadow-md shadow-orange-950/20 transition-transform hover:scale-110 active:scale-95"
                    aria-label="Direct WhatsApp Sync"
                  >
                    <MessageSquare size={18} />
                  </a>

                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-7 bg-white border border-slate-200/90 rounded-[32px] p-8 sm:p-12 shadow-xl shadow-slate-900/5">
              
              {/* Feedback Notifications */}
              {status.success && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              {status.error && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs sm:text-sm flex items-center gap-3">
                  <AlertCircle size={18} className="text-rose-600 shrink-0" />
                  <span>{status.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Your Name <span className="text-[#f9570c]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#f9570c] focus:ring-2 focus:ring-[#f9570c]/20 outline-none text-xs sm:text-sm text-slate-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Business / Company Name <span className="text-[#f9570c]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Nexus Global Trading Ltd."
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#f9570c] focus:ring-2 focus:ring-[#f9570c]/20 outline-none text-xs sm:text-sm text-slate-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Email Address <span className="text-[#f9570c]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#f9570c] focus:ring-2 focus:ring-[#f9570c]/20 outline-none text-xs sm:text-sm text-slate-800 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Primary Service Required <span className="text-[#f9570c]">*</span>
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({...formData, service: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#f9570c] focus:ring-2 focus:ring-[#f9570c]/20 outline-none text-xs sm:text-sm text-slate-800 transition-all bg-white cursor-pointer"
                  >
                    <option value="fullstack">Custom Full-Stack Web Development (React / Node.js / MERN)</option>
                    <option value="seo">Technical SEO & Google Search Console Dominance</option>
                    <option value="wordpress">Enterprise WordPress / WooCommerce Engineering</option>
                    <option value="b2b-export">B2B Commodity Export Portal & Inquiry Funnels</option>
                    <option value="google-ads">Google Ads & Conversion Telemetry (PPC / GA4)</option>
                    <option value="consulting">End-to-End Digital Engineering Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-800 mb-2">
                    Project Overview / Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about your goals, current web challenges, desired features, or expected timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-5 py-3.5 rounded-xl border border-slate-200 focus:border-[#f9570c] focus:ring-2 focus:ring-[#f9570c]/20 outline-none text-xs sm:text-sm text-slate-800 transition-all resize-y"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full flex items-center justify-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white py-4 px-8 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-orange-950/20 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status.submitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      <span>Send My Inquiry</span>
                      <span className="ml-0.5">→</span>
                    </>
                  )}
                </button>
              </form>

            </div>

          </div>

        </div>
      </section>

      {/* 4. HOW I CAN HELP */}
      <section className="py-24 px-4 sm:px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>How I Can Help</span>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#1c1917] tracking-tight leading-tight">
              What Would You Like to Work On?
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-slate-600 font-sans leading-relaxed">
              Targeted capabilities built to solve real commercial problems without bloated retainers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Custom Full-Stack Web Apps',
                desc: 'Single-page React and Node.js architectures engineered for speed, secure APIs, and responsive enterprise UX.'
              },
              {
                title: 'Technical SEO & Visibility',
                desc: 'On-page schema, keyword indexing, crawl budget optimization, and Core Web Vitals to outrank competitors.'
              },
              {
                title: 'High-Converting WordPress',
                desc: 'Clean WordPress and WooCommerce development built for high uptime, easy publishing, and zero plugin bloat.'
              },
              {
                title: 'B2B Export Growth Funnels',
                desc: 'Targeted commodity catalogs, FOB quote systems, and verified international buyer inquiry channels.'
              }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50/80 border border-slate-200/90 rounded-[24px] p-7 flex flex-col justify-between hover:shadow-xl hover:border-orange-200 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <h3 className="text-lg font-serif font-bold text-slate-900 tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-sans leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. WHY WORK WITH ME */}
      <section className="py-24 px-4 sm:px-6 bg-[#080e1a] text-white border-b border-slate-800">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/50 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Why Work With Me</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight leading-tight">
              Practical, Clear, and Business-Focused
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed font-sans">
              I deliver direct engineering precision without agency overhead. My approach combines robust coding standards, search ranking mechanics, and commercial accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Commercial Business Alignment',
                desc: 'I connect technical code with real sales goals, buyer acquisition, and long-term sustainable ROI.'
              },
              {
                title: 'Detail & Performance Driven',
                desc: 'Obsessed with clean code architecture, 95+ Core Web Vitals, semantic SEO structure, and zero downtime.'
              },
              {
                title: 'Continuous Tech Adaptation',
                desc: 'Constantly advancing across modern MERN frameworks, Cisco Data Analytics, and evolving Google ranking algorithms.'
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className="bg-[#0f172a] border border-slate-800 rounded-[24px] p-8 flex flex-col justify-between hover:border-[#f9570c]/50 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#f9570c]/15 text-[#f9570c] flex items-center justify-center font-bold text-base mb-5">
                    ✦
                  </div>
                  <h3 className="text-lg font-serif font-bold text-white tracking-tight mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. FINAL CONVERSION BANNER */}
      <section className="bg-[#fcf8f3] py-24 sm:py-28 px-4 sm:px-6 relative border-t border-slate-200/70">
        <div className="max-w-5xl mx-auto">
          
          <div className="bg-white border border-slate-200/90 rounded-[32px] sm:rounded-[40px] px-6 sm:px-14 py-16 sm:py-20 text-center shadow-2xl shadow-slate-900/5 flex flex-col items-center relative overflow-hidden">
            
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl pointer-events-none"></div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f9570c]/40 bg-[#f9570c]/10 text-[#f9570c] text-[11px] font-bold uppercase tracking-widest mb-7 relative z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f9570c]"></span>
              <span>Have a Project in Mind?</span>
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#1c1917] tracking-tight leading-[1.15] max-w-3xl relative z-10">
              Let’s Turn Your Digital Goals <br className="hidden sm:inline" /> Into Action
            </h2>

            <p className="mt-6 text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed font-sans relative z-10">
              Have a web application idea, enterprise WordPress project, or technical SEO challenge? Let's discuss your commercial goals and build a practical, high-performance solution.
            </p>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 relative z-10">
              <button
                type="button"
                onClick={() => {
                  const formElement = document.getElementById('inquiry-form-section');
                  if (formElement) formElement.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-[#f9570c] hover:bg-[#e04a05] text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-lg shadow-orange-950/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <CornerDownRight size={16} />
                <span>Start a Conversation</span>
                <ArrowRight size={15} className="ml-0.5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab?.('projects');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-black text-white px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-wide shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Briefcase size={15} />
                <span>View My Work</span>
              </button>
            </div>

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

    </div>
  );
}