import React from 'react';
import Hero from '../components/home/Hero';
import ValueProposition from '../components/home/ValueProposition';
import WhyHireMe from '../components/home/WhyHireMe';
import AboutMe from '../components/home/AboutMe';
import StatsCounter from '../components/home/StatsCounter';
import FeaturedServices from '../components/home/FeaturedServices';
import WhoIHelp from '../components/home/WhoIHelp';
import WorkProcess from '../components/home/WorkProcess';
import FeaturedPortfolio from '../components/home/FeaturedPortfolio';
import SkillsAndTools from '../components/home/SkillsAndTools';
import WhatIDeliver from '../components/home/WhatIDeliver';
import FAQSection from '../components/home/FAQSection';
import ProjectsFeedback from '../components/home/ProjectsFeedback';
import CallToAction from '../components/common/CallToAction';

export default function Home({ setActiveTab }) {
  return (
    <>
      <Hero setActiveTab={setActiveTab} />
      <ValueProposition setActiveTab={setActiveTab} />
      <WhyHireMe setActiveTab={setActiveTab} />
      <AboutMe setActiveTab={setActiveTab} />
      <StatsCounter />
      <FeaturedServices setActiveTab={setActiveTab} />
      <WhoIHelp setActiveTab={setActiveTab} />
      <WorkProcess setActiveTab={setActiveTab} />
      <FeaturedPortfolio setActiveTab={setActiveTab} />
      <SkillsAndTools setActiveTab={setActiveTab} />
      <WhatIDeliver setActiveTab={setActiveTab} />
      <FAQSection setActiveTab={setActiveTab} />
      <ProjectsFeedback />
      <CallToAction setActiveTab={setActiveTab} />
    </>
  );
}