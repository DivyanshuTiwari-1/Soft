"use client";
import { Zap, CheckCircle, Users } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="h-6 w-6 text-gray-900" />,
      title: "Fast Delivery",
      description: "Get your MVP to market quickly with our streamlined development process"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-gray-900" />,
      title: "Quality Assured",
      description: "High-quality code with comprehensive testing and best practices"
    },
    {
      icon: <Users className="h-6 w-6 text-gray-900" />,
      title: "Expert Team",
      description: "Work with experienced developers and designers who understand your vision"
    }
  ];

  return (
    <section id="features" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-cal font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 max-w-2xl mx-auto">
            We combine technical expertise with business understanding to deliver exceptional results
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start">
                <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg mb-4">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-6">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
