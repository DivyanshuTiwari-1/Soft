"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: "MVP",
      price: "$2500",
      period: "/month",
      description: "Quaickly vaidate your idea within 20 days",
      features: [
        "Focus on core fetures",
        "Complete FUll stack development",
        "Build for vaildating a idea",
        "launch ready"
      ],
      popular: false,
      buttonVariant: "outline"
    },
    {
      name: "SaaS",
      price: "$5000",
      period: "/month",
      description: "Best for building a scalable app ",
      features: [
        "Complete end to end features",
        "Complete FUll stack developments",
        "Scalable architecture",
        "Multiple revision",
       
      ],
      popular: true,
      buttonVariant: "default"
    },
    {
      name: "Framer+ SaaS",
      price: "$7500",
      period: "/month",
      description: "Best for building a scalable app  along with framer design ",
      features: [
        "Framer devlopment",
        "Full stack development ",
        "Scalable architecture",
        "Multiple revision",
        
      ],
      popular: false,
      buttonVariant: "outline"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple, transparent pricing</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-md ${
                plan.popular ? 'ring-2 ring-primary' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.description}</p>
              </div>
              
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
           
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>Need a custom solution? <a href="#contact" className="text-primary hover:underline">Contact our sales team</a></p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;