"use client"
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Cloud, Shield, Sparkles } from "lucide-react";

const ServiceCard = ({ title, description, icon, gradient }: {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative group"
    >
      {/* Animated border */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy"></div>
      
      <Card className="relative bg-black/60 backdrop-blur-sm border-0">
        <CardContent className="p-6 h-full">
          <div className={`w-12 h-12 rounded-full ${gradient} flex items-center justify-center mb-4`}>
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesShowcase = () => {
  const services = [
    {
      icon: <Cloud className="w-6 h-6 text-white" />,
      title: "Infrastructure & Deployment",
      description: "Robust cloud hosting solutions with automated scaling, ensuring your application performs flawlessly 24/7 with enterprise-grade security.",
      gradient: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      icon: <Shield className="w-6 h-6 text-white" />,
      title: "Technical Support & Maintenance",
      description: "Proactive monitoring and rapid issue resolution. We handle everything from bug fixes to performance optimizations, keeping your MVP running smoothly.",
      gradient: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      icon: <Sparkles className="w-6 h-6 text-white" />,
      title: "Growth & Enhancement",
      description: "Strategic consultation for scaling your MVP. We help plan and implement new features that align with your user feedback and business goals.",
      gradient: "bg-gradient-to-br from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-white">Post-Launch</span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Excellence Package
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Transform your MVP into a scalable powerhouse. Our comprehensive maintenance and growth package ensures your product evolves with your success story.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full filter blur-3xl" />
      </div>
    </div>
  );
};

export default ServicesShowcase;