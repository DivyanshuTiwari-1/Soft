"use client";
import React from 'react';
import { Rocket, Code2, Users } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Rocket className="h-8 w-8 text-gray-900" />,
      title: "MVP Development",
      description: "Quick market validation with minimal investment. Get your product to market in weeks, not months.",
    },
    {
      icon: <Code2 className="h-8 w-8 text-gray-900" />,
      title: "Custom Software",
      description: "Tailored solutions built specifically for your business needs and requirements.",
    },
    {
      icon: <Users className="h-8 w-8 text-gray-900" />,
      title: "Technical Consulting",
      description: "Expert guidance on technology decisions, architecture, and development strategy.",
    }
  ];

  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-cal font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 max-w-2xl mx-auto">
            Comprehensive development solutions designed to transform your ideas into successful products
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-8 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;