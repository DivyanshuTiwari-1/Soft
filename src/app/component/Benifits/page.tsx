"use client"
import React from 'react';
import { IconType } from 'react-icons';
import { FaRocket, FaChartLine, FaCogs, FaMoneyBillWave } from 'react-icons/fa';

const benefits = [
  {
    icon: FaRocket,
    title: 'Quick Launch',
    description: 'Get your MVP off the ground swiftly with our guaranteed timelines.'
  },
  {
    icon: FaChartLine,
    title: 'Seamless Scalability',
    description: 'Develop your MVP with full code and IP ownership for a smooth journey.'
  },
  {
    icon: FaCogs,
    title: 'Utilize Resources',
    description: 'Adhering to best practices, our setup provides a solid growth foundation.'
  },
  {
    icon: FaMoneyBillWave,
    title: 'Boost ROI',
    description: 'Reduce costs and accelerate learning with our rapid iterations.'
  },
];

const Benefits: React.FC = () => {
  return (<section id="benifit">
    <div className="flex flex-col overflow-y-scroll max-h-screen p-4 gap-5">
      {benefits.map((benefit, index) => {
        const Icon: IconType = benefit.icon;
        return (
          <div key={index} className="p-6 bg-gray-100 rounded-lg transition-transform duration-300 hover:transform hover:-translate-y-1 hover:bg-gray-200">
            <Icon size={40} className="text-blue-500 mb-3" />
            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
            <p className="text-gray-600">{benefit.description}</p>
          </div>
        );
      })}
    </div>
    </section>
  );
};

export default Benefits;
