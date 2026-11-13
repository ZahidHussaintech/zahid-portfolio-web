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

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Dynamic SEO Titles & Meta Descriptions for Each Page
  useEffect(() => {
    const seoData = {
      home: {
        title: "Zahid Hussain | Full-Stack Web Developer & Technical SEO",
        desc: "Full-Stack Web Developer & Technical SEO Specialist. Engineering custom React, Node.js applications, fast WordPress platforms & B2B export funnels.",
        keywords: "Full-Stack Web Developer, Technical SEO Specialist, MERN Stack Developer, React Developer, WordPress Speed Optimization"
      },
      about: {
        title: "About Zahid Hussain | Full-Stack Engineer & SEO Consultant",
        desc: "Meet Zahid Hussain, Remote Full-Stack Web Developer and Technical SEO Specialist bridging software engineering, Cisco analytics & B2B growth.",
        keywords: "Remote Web Developer, Full-Stack Engineer, SEO Consultant, MERN Developer Karachi, Cisco Data Analytics"
      },
      projects: {
        title: "Web Development & SEO Case Studies | Zahid Hussain",
        desc: "Explore verified Full-Stack React web apps, B2B commodity export portals & technical SEO case studies delivering 95+ Core Web Vitals and leads.",
        keywords: "Web Development Portfolio, B2B Case Studies, React Projects, Technical SEO Case Studies, Rose Garden Group"
      },
      services: {
        title: "Full-Stack Web Development & Technical SEO Services | Zahid",
        desc: "Custom React/Node.js web applications, enterprise WordPress, technical SEO audits, and B2B export lead funnels for global US/UK/Gulf businesses.",
        keywords: "Full-Stack Development Services, Technical SEO Services, WordPress Development, Core Web Vitals Optimization, Google Ads Management"
      },
      contact: {
        title: "Contact Zahid Hussain | Hire Full-Stack & SEO Engineer",
        desc: "Hire Zahid Hussain for custom full-stack web development, Core Web Vitals optimization, and B2B growth. Let's discuss your project today.",
        keywords: "Hire Full-Stack Developer, Hire Technical SEO Specialist, Freelance Web Developer, Contact Zahid Hussain"
      },
      blog: {
        title: "Tech, SEO & Digital Growth Articles | Zahid Hussain",
        desc: "Practical insights on technical search engine optimization, full-stack web architecture, and digital marketing tools hosted on BizTools.",
        keywords: "Tech Blog, SEO Articles, Web Development Tutorials, BizTools Zahid Hussain"
      }
    };

    const currentSeo = seoData[activeTab] || seoData.home;

    // Update Browser Document Title
    document.title = currentSeo.title;

    // Update Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', currentSeo.desc);
    }

    // Update Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', currentSeo.keywords);
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