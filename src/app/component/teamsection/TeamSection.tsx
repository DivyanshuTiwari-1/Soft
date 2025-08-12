import React from 'react';

const teamData = [
  {
    photo: '/photo/Founder.png',
    name: 'Divyanshu Tiwari',
    role: 'Founder,Full stack engineer',
  },
  {
    photo: '/photo/dheerap.jpg',
    name: 'Dheerap Singh',
    role: 'Frontend engineer',
  },
 
];

const TeamSection = () => (
  <section className="py-16 px-4 bg-gray-900">
    <h2 className="text-3xl font-bold text-center mb-10 text-white">Meet Our Team</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {teamData.map((member, idx) => (
        <div
          key={idx}
          className="bg-gray-800 rounded-xl shadow-lg p-8 flex flex-col items-center text-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={member.photo}
            alt={member.name}
            className="w-24 h-24 rounded-full mb-4 border-4 border-indigo-500 object-cover shadow-md"
          />
          <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
          <p className="text-indigo-300">{member.role}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
