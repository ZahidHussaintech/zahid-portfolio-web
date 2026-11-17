import React, { useState, useEffect } from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ErrorBoundary from './components/common/ErrorBoundary';

// Explicit .jsx Extensions for Vite
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import Blog from './pages/Blog.jsx';

const VALID_TABS = ['about', 'projects', 'services', 'contact', 'blog'];

function getTabFromPath(pathname) {
  const clean = pathname.replace(/^\/+|\/+$/g, '').toLowerCase();
  return VALID_TABS.includes(clean) ? clean : 'home';
}

export default function App() {
  const [activeTab, setActiveTabState] = useState(() =>
    getTabFromPath(window.location.pathname)
  );

  // Sync browser URL whenever tab changes (supports Navbar, Footer & internal buttons)
  const setActiveTab = (tab) => {
    const normalized = VALID_TABS.includes(tab) ? tab : 'home';
    setActiveTabState(normalized);
    const targetPath = normalized === 'home' ? '/' : `/${normalized}`;
    if (window.location.pathname !== targetPath) {
      window.history.pushState({ tab: normalized }, '', targetPath);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Support Browser Back / Forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setActiveTabState(getTabFromPath(window.location.pathname));
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Dynamic SEO Titles, Meta Descriptions & Canonical URLs for Each Page
  useEffect(() => {
    const seoData = {
      home: {
        path: '/',
        title: "Zahid Hussain | Full-Stack Web Developer & Technical SEO",
        desc: "Full-Stack Web Developer & Technical SEO Specialist. Engineering custom React, Node.js applications, fast WordPress platforms & B2B export funnels.",
        keywords: "Full-Stack Web Developer, Technical SEO Specialist, MERN Stack Developer, React Developer, WordPress Speed Optimization"
      },
      about: {
        path: '/about',
        title: "About Zahid Hussain | Full-Stack Engineer & SEO Consultant",
        desc: "Meet Zahid Hussain, Remote Full-Stack Web Developer and Technical SEO Specialist bridging software engineering, Cisco analytics & B2B growth.",
        keywords: "Remote Web Developer, Full-Stack Engineer, SEO Consultant, MERN Developer Karachi, Cisco Data Analytics"
      },
      projects: {
        path: '/projects',
        title: "Web Development & SEO Case Studies | Zahid Hussain",
        desc: "Explore verified Full-Stack React web apps, B2B commodity export portals & technical SEO case studies delivering 95+ Core Web Vitals and leads.",
        keywords: "Web Development Portfolio, B2B Case Studies, React Projects, Technical SEO Case Studies, Rose Garden Group"
      },
      services: {
        path: '/services',
        title: "Full-Stack Web Development & Technical SEO Services | Zahid",
        desc: "Custom React/Node.js web applications, enterprise WordPress, technical SEO audits, and B2B export lead funnels for global US/UK/Gulf businesses.",
        keywords: "Full-Stack Development Services, Technical SEO Services, WordPress Development, Core Web Vitals Optimization, Google Ads Management"
      },
      contact: {
        path: '/contact',
        title: "Contact Zahid Hussain | Hire Full-Stack & SEO Engineer",
        desc: "Hire Zahid Hussain for custom full-stack web development, Core Web Vitals optimization, and B2B growth. Let's discuss your project today.",
        keywords: "Hire Full-Stack Developer, Hire Technical SEO Specialist, Freelance Web Developer, Contact Zahid Hussain"
      },
      blog: {
        path: '/blog',
        title: "Tech, SEO & Digital Growth Articles | Zahid Hussain",
        desc: "Practical insights on technical search engine optimization, full-stack web architecture, and digital marketing tools hosted on BizTools.",
        keywords: "Tech Blog, SEO Articles, Web Development Tutorials, BizTools Zahid Hussain"
      }
    };

    const currentSeo = seoData[activeTab] || seoData.home;
    const fullUrl = `https://zahidhussainofficial.com${currentSeo.path}`;

    // Update Browser Document Title
    document.title = currentSeo.title;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentSeo.desc);
    }

    // Update Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', currentSeo.keywords);
    }

    // Update Canonical & OpenGraph URL dynamically per page
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', fullUrl);
    }
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', fullUrl);
    }
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', currentSeo.title);
    }
  }, [activeTab]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#060012] text-slate-100 flex flex-col font-sans selection:bg-[#f9570c] selection:text-white">
        
        {/* Navigation Bar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dynamic Page Views */}
        <main className="flex-grow">
          {activeTab === 'home' && <Home setActiveTab={setActiveTab} />}
          {activeTab === 'about' && <About setActiveTab={setActiveTab} />}
          {activeTab === 'projects' && <Projects setActiveTab={setActiveTab} />}
          {activeTab === 'services' && <Services setActiveTab={setActiveTab} />}
          {activeTab === 'contact' && <Contact setActiveTab={setActiveTab} />}
          {activeTab === 'blog' && <Blog setActiveTab={setActiveTab} />}
        </main>

        {/* Footer */}
        <Footer setActiveTab={setActiveTab} />
        
      </div>
    </ErrorBoundary>
  );
}