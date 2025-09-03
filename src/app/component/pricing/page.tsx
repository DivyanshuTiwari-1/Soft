"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Sparkles, Shield } from 'lucide-react';


const PricingSection = () => {
  const pricingPlans = [
    {
      name: "MVP",
      price: "$2,500",
      period: "/month",
      description: "Quickly validate your idea within 20 days",
      features: [
        "Focus on core features",
        "Complete Full stack development",
        "Built for validating an idea",
        "Launch ready"
      ],
      popular: false,
      buttonVariant: "outline" as const,
      icon: <Zap className="h-6 w-6 text-blue-500" />
    },
    {
      name: "SaaS",
      price: "$5,000",
      period: "/month",
      description: "Ideal for building a scalable application",
      features: [
        "Complete end-to-end features",
        "Full stack development",
        "Scalable architecture",
        "Multiple revisions"
      ],
      popular: true,
      buttonVariant: "default" as const,
      icon: <Sparkles className="h-6 w-6 text-indigo-500" />
    },
    {
      name: "Framer + SaaS",
      price: "$7,500",
      period: "/month",
      description: "Complete solution with Framer design integration",
      features: [
        "Framer development",
        "Full stack development",
        "Scalable architecture",
        "Multiple revisions",
        "Premium support"
      ],
      popular: false,
      buttonVariant: "outline" as const,
      icon: <Shield className="h-6 w-6 text-emerald-500" />
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-600">
            Choose the perfect plan that fits your business needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col h-full rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg ${
                plan.popular ? 'ring-2 ring-indigo-500' : 'hover:border-gray-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-semibold px-3 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-lg bg-indigo-50 mr-3">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>
                
                <div className="mt-6 mb-8">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                    <span className="ml-2 text-gray-500">{plan.period}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{plan.description}</p>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
               
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Need a custom solution?{' '}
            <a href="#contact" className="text-indigo-600 font-medium hover:text-indigo-500 hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;