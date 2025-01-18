"use client"
import React from 'react';

import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";


interface TimelineStep {
  title: string;
  description: string;
  gradient: string;
}

const steps: TimelineStep[] = [
  {
    title: "Discovery Phase",
    description: "Initial consultation and project planning",
    gradient: "from-violet-600 to-indigo-600"
  },
  {
    title: "Design Sprint",
    description: "Rapid prototyping and user feedback",
    gradient: "from-blue-600 to-cyan-600"
  },
  {
    title: "Development",
    description: "Agile development process begins",
    gradient: "from-teal-600 to-emerald-600"
  },
  {
    title: "Testing",
    description: "Quality assurance and refinement",
    gradient: "from-green-600 to-lime-600"
  },
  {
    title: "Launch",
    description: "Deployment and monitoring",
    gradient: "from-yellow-600 to-orange-600"
  }
];

const FloatingBall = ({ scrollYProgress }: { scrollYProgress: any}) => {
  // Calculate the vertical position based on scroll progress
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 z-10"
      style={{ top: y }}
    >
      <div className="relative">
        {/* Outer glow */}
        <motion.div 
          className="absolute w-8 h-8 bg-blue-400 rounded-full blur-xl opacity-50"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        {/* Main ball */}
        <div className="relative w-6 h-6 bg-gradient-to-br from-white to-blue-400 rounded-full shadow-lg">
          {/* Inner highlight */}
          <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-70" />
        </div>
      </div>
    </motion.div>
  );
};

const TimelineStep = ({ step, index, isActive }: { 
  step: TimelineStep; 
  index: number; 
  isActive: boolean;
}) => {
  return (
    <div className="flex items-center gap-8 min-h-[120px]">
      <div className="flex-1 text-right">
        <motion.div 
          className="inline-block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className={`text-lg font-semibold mb-1 bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
            {step.title}
          </h3>
          <p className="text-sm text-gray-400">
            {step.description}
          </p>
        </motion.div>
      </div>

      <motion.div 
        className={`w-4 h-4 rounded-full ${isActive ? `bg-gradient-to-r ${step.gradient}` : 'bg-gray-700'}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: index * 0.1 }}
      />

      <div className="flex-1" />
    </div>
  );
};

const Timeline = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });
  
  // Create a smoothed version of the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 20,
    stiffness: 100,
    mass: 0.5
  });

  return (
    <div 
      className="min-h-screen bg-gray-900 flex items-center justify-center p-8 py-32" 
      ref={containerRef}
    >
      <div className="max-w-4xl w-full space-y-16">
        <motion.div 
          className="text-center space-y-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Development Journey
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Watch our process unfold step by step
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-700 to-transparent" />
          
          {/* Animated ball */}
          <FloatingBall scrollYProgress={smoothProgress} />

          {/* Timeline steps */}
          <div className="relative space-y-24">
            {steps.map((step, index) => (
              <TimelineStep 
                key={index}
                step={step}
                index={index}
                isActive={smoothProgress.get() > (index / (steps.length - 1))}
              />
            ))}
          </div>
        </div>

        <motion.div 
          className="text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="max-w-2xl mx-auto">
            Follow the glowing orb as it guides you through each stage of development,
            illuminating our journey from concept to launch.
          </p>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
      </div>
    </div>
  );
};

export default Timeline;