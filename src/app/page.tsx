"use client"
import React from 'react';

// Extend the Window interface to include the calendar property

import Navbar from './component/Navbar/page';

import HeroSection from './component/Herosection/page';
import ServicesSection from './component/servicesection/page';
import CTASection from './component/cta/page';
import Footer from './component/footer/page';
import FeaturesSection from './component/feature section/page';
import WhyFeatures from './component/whyhere/page';
import Timeline from './component/ball/page';
import PricingSection from './component/pricing/page';
import ProjectShowcase from './component/projects/page';

const MVPWebsite = () => {
 



  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
   
   <Navbar/>

      {/* Hero Section */}
      <HeroSection />
      <WhyFeatures/>
     

     <ServicesSection/>
     <ProjectShowcase/>
     <PricingSection/>
     <FeaturesSection />
     
     
      <CTASection/>
      <Footer/>
     

   
    </div>
  );
};

export default MVPWebsite;     

   
