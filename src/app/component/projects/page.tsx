"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight} from 'lucide-react';

const projects = [
  {
    id: '1',
    title: 'AI Ranking app',
    description: 'A website where user can generate rankings base on real time data',
    technologies: ['Next.js', 'TypeScript', 'supabase', 'JavaScript'],
    imageUrl: '/photo/ima.webp',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  
  {
    id: '2',
    title: 'AI notes taking app',
    description: 'A website where user can generate notes from audio,youtube video,by summarizing pdf',
    technologies: ['Next.js', 'TypeScript', 'supabase', 'JavaScript'],
    imageUrl: '/photo/ai.png',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '3',
    title: 'Framer design',
    description: '',
    technologies: ['Next.js', 'TypeScript', 'supabase', 'JavaScript'],
    imageUrl: '/photo/im2.avif',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '4',
    title: 'Quit Porn Mvp',
    description: 'A website where user can signup and get daily excersize does to get ride of porn',
    technologies: ['Next.js', 'TypeScript', 'supabase', 'JavaScript'],
    imageUrl: '/photo/qp.png',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '5',
    title: ' AI Notes taking app',
    description: 'A website where user can generate notes from audio,youtube video,by summarizing pdf',
    technologies: ['Next.js', 'TypeScript', 'supabase', 'JavaScript'],
    imageUrl: '/photo/ai.png',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '6',
    title: ' Ngl web app',
    description: 'A web app like Instagram’s NGL feature, where anyone can send anonymous messages to a user by visiting their public profile',
    technologies: ['Next.js', 'TypeScript', 'NoSQL', 'JavaScript'],
    imageUrl: '/photo/ngl.png',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '7',
    title: 'Superclass',
    description: 'Founded A comprehensive e-learning platform that facilitates live interactive classes and offers an intuitive user experience',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    imageUrl: '/photo/super.png',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  },
  {
    id: '8',
    title: 'chat app',
    description: 'A chat application where users can connect and start a quick conversation',
    technologies: ['React', 'socket.io', 'Firebase', 'node'],
    imageUrl: '/photo/chat.png',
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com'
  }
];

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const previousProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Featured Projects
        </h1>

        <div className="relative">
         {/* Navigation Buttons */}
<button 
  onClick={previousProject}
  className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all z-10"
  aria-label="Previous project"
>
  <ChevronLeft className="w-6 h-6" />
</button>

<button 
  onClick={nextProject}
  className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full text-gray-300 hover:text-white hover:bg-gray-700 transition-all z-10"
  aria-label="Next project"
>
  <ChevronRight className="w-6 h-6" />
</button>


          {/* Project Cards Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div 
                  key={project.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <Card className="bg-gray-800 border-gray-700 overflow-hidden transform transition-all duration-500">
                    <CardHeader className="p-0">
                      <div className="relative overflow-hidden">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-100 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-transparent opacity-60" />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <CardTitle className="text-2xl mb-3 text-purple-300">
                        {project.title}
                      </CardTitle>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-gray-700 hover:bg-gray-600 text-purple-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                     
                      
                     
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === index 
                    ? 'bg-purple-400 w-4' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;