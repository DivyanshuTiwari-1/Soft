"use client"
import React, { useState } from 'react';

// Extend the Window interface to include the calendar property

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Rocket, Users, Zap, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import Navbar from './component/Navbar/page';
import Benefits from './component/Navbar/page';
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  // Animation classes for buttons
  const buttonAnimation = "transition-all duration-300 transform hover:scale-105 hover:shadow-lg active:scale-95";
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100">
   
   <Navbar/>

      {/* Hero Section */}
      <HeroSection />
      <WhyFeatures/>
      <Timeline/>

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

   
