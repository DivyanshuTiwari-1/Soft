// components/FeaturesSection.tsx
"use client"
import { Zap, CheckCircle, Users } from "lucide-react";
import { motion } from 'framer-motion';

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-black/50 backdrop-blur-sm py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent"> Us</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { icon: <Zap className="h-6 w-6 text-white" />, title: "Fast Delivery", description: "Get your MVP to market quickly" },
            { icon: <CheckCircle className="h-6 w-6 text-white" />, title: "Quality Assured", description: "High-quality code and robust testing" },
            { icon: <Users className="h-6 w-6 text-white" />, title: "Expert Team", description: "Experienced developers and designers" }
          ].map((feature, index) => (
            <motion.div key={index} className="flex items-start space-x-4 p-6 card-dark shadow-lg border border-white" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              {feature.icon}
              <div>
                <h3 className="font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
