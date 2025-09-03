"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Sparkles, Shield } from 'lucide-react';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "MVP",
      price: "$2,500",
      description: "Quickly validate your idea within 20 days",
      features: [
        "Focus on core features",
        "Complete Full stack development",
        "Built for validating an idea",
        "Launch ready"
      ],
      popular: false,
      buttonVariant: "outline" as const,
      icon: <Zap className="h-6 w-6 text-purple-500" />
    },
    {
      name: "SaaS",
      price: "$5,000",
      description: "Ideal for building a scalable application",
      features: [
        "Complete end-to-end features",
        "Full stack development",
        "Scalable architecture",
        "Multiple revisions"
      ],
      popular: true,
      buttonVariant: "default" as const,
      icon: <Sparkles className="h-6 w-6 text-pink-500" />
    },
    {
      name: "Framer + SaaS",
      price: "$7,500",
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
      icon: <Shield className="h-6 w-6 text-blue-500" />
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Simple, Transparent <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-lg text-gray-400">
            Choose the perfect plan that fits your business needs. No hidden fees, cancel anytime.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col h-full rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-gray-900 to-gray-800 border border-purple-500/30' 
                  : 'bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-semibold px-4 py-1 rounded-bl-lg">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="p-2 rounded-lg bg-gray-800/50 mr-4">
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                </div>
                
                <div className="mb-8 flex-grow">
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                  </div>
                  <p className="text-gray-400 mb-6">{plan.description}</p>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-purple-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
              
              </div>
            </motion.div>
          ))}
        </div>
       
      </div>
    </section>
  );
};

export default PricingSection;