"use client"
import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PricingSection = () => {
  const services = [
     
    {
      title: "Mvp/SaaS Products",
      price: "1500",
      description: "Enterprise-grade SaaS solutions with cloud infrastructure, scalable architecture, and comprehensive features. Perfect for businesses seeking digital transformation.",
      badge: "Popular",
      className: "md:col-span-1"
    },
   {
      title: "Mobile & Web Apps",
      price: "2000",
      description: "Full-stack web and mobile applications with responsive design, cross-platform compatibility, and seamless user experience across all devices.",
      badge: "Featured",
      className: "md:col-span-1"
    },
    {
      title: "AI Apps",
      price: "2500",
      description: "Smart applications powered by machine learning, featuring data analytics, predictive modeling, and intelligent automation for next-gen solutions.",
      badge: "New",
      className: "md:col-span-1"
    },
    {
      title: "Maintenance",
      price: "1000",
      description: "Comprehensive maintenance including 24/7 monitoring, security patches, performance optimization, and regular updates to keep your application running smoothly.",
      badge: "Essential",
      className: "md:col-span-3"
    }
  ];

  return (
    <section className="py-20 min-h-screen bg-gradient-to-b from-background/80 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Pricing & {" "}
            <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h1>
          <p className="text-muted-foreground">Choose the perfect plan for your needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`group relative ${service.className} transform transition-all duration-500 hover:-translate-y-1`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 rounded-xl blur opacity-30 group-hover:opacity-20 transition duration-500" />
              <Card className="relative h-full border-2 border-purple-500/20 bg-background/60 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex justify-between items-center mb-4">
                    <Badge variant="secondary" className="bg-purple-500/10 text-purple-400 hover:bg-purple-500/20">
                      {service.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                  <CardDescription className="min-h-[80px] text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl text-muted-foreground">$</span>
                    <span className="text-4xl font-bold">{service.price}</span>
                    <span className="text-muted-foreground ml-2">starting at</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes border-flow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default PricingSection;