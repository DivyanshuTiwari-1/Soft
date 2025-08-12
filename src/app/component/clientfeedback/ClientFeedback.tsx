import React from 'react';
import Image from 'next/image';

const feedbackData = [
  {
    photo: '/photo/32.jpg',
    name: 'John Doe',
    designation: 'CTO',
    message: 'This team exceeded our expectations and delivered a fantastic product!',
    company: 'TechCorp'
  },
  {
    photo: '/photo/44.jpg',
    name: 'Jane Smith',
    designation: 'Product Manager',
    message: 'Professional, responsive, and creative. Highly recommended!',
    company: 'InnovateX'
  },
  {
    photo: '/photo/65.jpg',
    name: 'Samuel Green',
    designation: 'CEO',
    message: 'Outstanding experience from start to finish.',
    company: 'Green Solutions'
  }
];

const ClientFeedback = () => (
  <section className="py-16 px-4 bg-gray-800">
    <h2 className="text-3xl font-bold text-center mb-10 text-white">What Our Clients Say</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {feedbackData.map((feedback, idx) => (
        <div key={idx} className="bg-gray-900 rounded-xl shadow-lg p-8 flex flex-col items-center text-center">
          <Image
            src={feedback.photo}
            alt={feedback.name}
            width={80}
            height={80}
            className="w-20 h-20 rounded-full mb-4 border-4 border-indigo-500 object-cover"
          />
          <h3 className="text-xl font-semibold mb-1 text-white">{feedback.name}</h3>
          <p className="text-indigo-400 mb-2">{feedback.designation} at <span className="font-medium text-gray-300">{feedback.company}</span></p>
          <p className="text-gray-200 italic">"{feedback.message}"</p>
        </div>
      ))}
    </div>
  </section>
);

export default ClientFeedback;
