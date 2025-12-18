"use client";
import React from 'react';
import Image from 'next/image';

const ServicesScroll = () => {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 2,
      title: "App Development",
      imageUrl: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop&crop=center"
    },
    {
      id: 3,
      title: "MVP Development",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center"
    },
    // {
    //   id: 4,
    //   title: "SaaS Development",
    //   imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop&crop=center"
    // },
  
  ];

  // Duplicate services for seamless infinite scroll
  const duplicatedServices = [...services, ...services];

  return (
    <section id="services" className="bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center">
          <h2 className="text-2xl font-cal font-semibold tracking-tight text-gray-900 sm:text-3xl">
            Our Services
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Comprehensive development solutions for your business needs
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex animate-scroll space-x-8">
          {duplicatedServices.map((service, index) => (
            <div
              key={`${service.id}-${index}`}
              className="flex-shrink-0 w-80 group cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-300">
                <div className="aspect-video relative bg-gray-100">
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="320px"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-center">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 5s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default ServicesScroll;