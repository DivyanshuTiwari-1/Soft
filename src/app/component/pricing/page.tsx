"use client";
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "MVP",
      price: "$2,500",
      description: "Perfect for validating your idea quickly",
      features: [
        "Core features development",
        "Full-stack implementation",
        "20-day delivery",
        "Launch-ready product",
        "Basic support"
      ],
      popular: false,
      cta: "Get Started"
    },
    {
      name: "SaaS",
      price: "$5,000",
      description: "Comprehensive solution for scalable applications",
      features: [
        "End-to-end feature development",
        "Full-stack implementation",
        "Scalable architecture",
        "Multiple revision rounds",
        "Priority support",
        "Performance optimization"
      ],
      popular: true,
      cta: "Start Building"
    },
    {
      name: "Framer + SaaS",
      price: "$7,500",
      description: "Complete solution with premium design integration",
      features: [
        "Custom Framer design",
        "Full-stack development",
        "Advanced scalability",
        "Unlimited revisions",
        "Premium support",
        "SEO optimization",
        "Analytics integration"
      ],
      popular: false,
      cta: "Go Premium"
    }
  ];

  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-cal font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 max-w-2xl mx-auto">
            Choose the perfect plan for your project. Fixed prices, no hidden fees.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-sm border ${
                plan.popular 
                  ? 'border-gray-900 ring-1 ring-gray-900' 
                  : 'border-gray-200'
              } p-8 hover:shadow-lg transition-shadow`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gray-900 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-gray-900 hover:bg-gray-800 text-white'
                    : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300'
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Need something custom?{' '}
            <a href="#contact" className="font-medium text-gray-900 underline">
              Let&apos;s talk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;