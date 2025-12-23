


"use client";
import React from 'react';
import { Rocket, Code, Puzzle} from 'lucide-react';

const ServicesScroll = () => {
  const services = [
    {
      id: 1,
      title: "MVP Development",
      description: "Launch fast with validated products",
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop&crop=center",
      icon: Rocket,
      gradient: "from-primary to-secondary",
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Pixel-perfect user interfaces",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center",
      icon: Code,
      gradient: "from-secondary to-accent",
    },
    {
      id: 3,
      title: "Custom Solutions",
      description: "Tailored to your unique needs",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center",
      icon: Puzzle,
      gradient: "from-accent to-primary",
    },
   
  ];

  const duplicatedServices = [...services, ...services];

  return (
    <section id="services"   className="relative py-24 overflow-hidden bg-background">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/3 rounded-full blur-3xl" />
      </div>

      {/* Header */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            Our <span className="">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive development solutions crafted to transform your ideas into exceptional digital experiences
          </p>
        </div>
      </div>

      {/* Scrolling cards */}
      <div className="relative w-max">
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex animate-scroll space-x-6 py-4">
          {duplicatedServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={`${service.id}-${index}`}
                className="flex-shrink-0 w-80 group cursor-pointer"
              >
                <div className="glass-card rounded-2xl overflow-hidden hover-lift">
                  {/* Image container */}
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
                    
                    {/* Icon badge */}
                    <div className="absolute top-4 right-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6`}>
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {service.description}
                    </p>

                  </div>

                  {/* Bottom accent bar */}
                  <div className={`h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};

export default ServicesScroll;
