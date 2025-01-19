"use client"
import React, { useEffect, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, Code2, Users } from "lucide-react";

const ServicesSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50px',
      threshold: 0.15
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          // Add stagger effect class
          entry.target.classList.add('stagger-animate');
        } else {
          // Reset animation when out of view
          entry.target.classList.remove('animate-in');
          entry.target.classList.remove('stagger-animate');
        }
      });
    };
    

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Rocket className="h-10 w-10 text-purple-500 mb-2" />,
      title: "MVP Development",
      description: "Quick market validation with minimal investment",
      delay: "delay-[0ms]"
    },
    {
      icon: <Code2 className="h-10 w-10 text-purple-500 mb-2" />,
      title: "Custom Software",
      description: "Tailored solutions for your business",
      delay: "delay-[200ms]"
    },
    {
      icon: <Users className="h-10 w-10 text-purple-500 mb-2" />,
      title: "Consulting",
      description: "Expert guidance and strategy",
      delay: "delay-[400ms]"
    }
  ];

  return (
    <section id="services" className="py-20 overflow-hidden" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 animate-title">
          Our <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Services</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 md:flex md:flex-row md:space-x-8 sm:grid-cols-1">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card w-full opacity-0 translate-y-8 transition-all duration-700 ease-out ${service.delay}`}
            >
              <Card className="group hover:border-purple-500 transition-all duration-300 hover:scale-105 bg-gray-800/50 backdrop-blur-sm border-gray-700 text-white hover:shadow-lg hover:shadow-purple-500/20">
                <CardHeader>
                  <div className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {service.icon}
                  </div>
                  <CardTitle className="transition-colors duration-300 group-hover:text-purple-400">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-300 transition-opacity duration-300 group-hover:opacity-90">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 transition-all duration-300 group-hover:text-white">
                    Launch your product quickly and efficiently with our proven development process.
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .stagger-animate {
          animation: float 3s ease-in-out infinite;
        }

        .animate-title {
          animation: slideDown 1s ease-out forwards;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-card:nth-child(1) .stagger-animate {
          animation-delay: 0s;
        }

        .service-card:nth-child(2) .stagger-animate {
          animation-delay: 0.2s;
        }

        .service-card:nth-child(3) .stagger-animate {
          animation-delay: 0.4s;
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;