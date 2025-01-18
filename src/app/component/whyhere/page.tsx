"use client"
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, BarChart3, Flag, DollarSign } from "lucide-react";
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const features: Feature[] = [
  {
    icon: <Rocket className="w-12 h-12 text-white" />,
    title: "Swift Development",
    description: "Get your product to market faster with our streamlined development process and fixed-price packages.",
    gradient: "from-purple-600 to-pink-500"
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-white" />,
    title: "Growth Ready",
    description: "Built with scalable architecture and clean code practices that support your business as it expands.",
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    icon: <Flag className="w-12 h-12 text-white" />,
    title: "Best Practices",
    description: "Leverage our proven development frameworks and industry-standard methodologies for robust solutions.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: <DollarSign className="w-12 h-12 text-white" />,
    title: "Cost Effective",
    description: "Optimize your investment with rapid iterations and value-driven development approaches.",
    gradient: "from-green-500 to-emerald-500"
  }
];

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const cardRef = React.useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      className="relative"
    >
      <Card className="bg-gray-900/50 backdrop-blur-xl border-gray-800 h-full overflow-hidden">
        <CardContent className="p-6 relative z-10">
          <div className={`absolute top-0 left-0 w-full h-full opacity-10 bg-gradient-to-br ${feature.gradient}`} />
          <div className="flex flex-col items-center text-center space-y-4">
            <motion.div
              className={`p-4 rounded-full bg-gradient-to-br ${feature.gradient}`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-semibold text-white">
              {feature.title}
            </h3>
            <p className="text-gray-400">
              {feature.description}
            </p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const WhyFeatures = () => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);
  const springScale = useSpring(scale, { mass: 0.5, stiffness: 100, damping: 30 });

  return (
    <div className="bg-black min-h-screen p-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full filter blur-3xl" />
      </div>

      <motion.div
        ref={ref}
        style={{ opacity, scale: springScale }}
        className="max-w-6xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">Our Approach</span>?
          </motion.h1>
          <motion.p 
            className="text-gray-400 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform your ideas into reality with our proven development process
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default WhyFeatures;