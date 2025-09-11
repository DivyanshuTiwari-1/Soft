import React from 'react';
import Image from 'next/image';
const teamData= [
  {
    photo: "/photo/Founder.png",
    name: "Divyanshu Tiwari",
    role: "Founder, Team Lead",
  },
  {
    photo: "/photo/kishan.jpg",
    name: "Patell Kishan",
    role: "Team Lead - Expert Mobile App Development (8+ YOE) | Flutter | Java | Android | Kotlin",
  },
  {
    photo: "/photo/bala.jpg",
    name: "Bala Subrahmanyam Reddy",
    role: "Senior Full Stack Developer (4+ YOE) | Node.js | MongoDB | Express.js | React.js | Next.js | TypeScript",
  },
  {
    photo: "/photo/aharsh.jpg",
    name: "Aharsh Singh",
    role: "Full Stack Engineer (3+ YOE) | Node.js | MongoDB | Express.js | React.js | Next.js | TypeScript",
  },
  {
    photo: "/photo/dheerap.jpg",
    name: "Dheerap Singh",
    role: "Frontend Engineer (3+ YOE) | React.js | Next.js | Tailwind | HTML | CSS",
  },
  {
    photo: "/photo/abhay.png",
    name: "Abhay Bairagi",
    role: "Backend Engineer (3+ YOE) | Node.js | MongoDB | Express.js | React.js | Next.js | TypeScript",
  },
  // {
  //   photo: "/photo/ap.jpg",
  //   name: "Akpobasa Victor",
  //   role: "Frontend Developer (3+ YOE) | React.js | Next.js | Tailwind | HTML | CSS",
  // },
];


const TeamSection = () => (
  <section className="py-16 px-4 bg-gray-900">
    <h2 className="text-3xl font-bold text-center mb-16 text-white">Meet Our Team</h2>
    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
      {teamData.map((member, idx) => (
        <div
          key={idx}
          className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300 hover:shadow-2xl"
        >
          <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-indigo-500">
            <Image
              src={member.photo}
              alt={member.name}
              width={128}
              height={128}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-semibold mb-1 text-white">{member.name}</h3>
          <p className="text-indigo-300">{member.role}</p>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection;
