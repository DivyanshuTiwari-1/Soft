"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

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
    description: 'A web app like Instagrams NGL feature, where anyone can send anonymous messages to a user by visiting their public profile',
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
    <div className="min-h-screen bg-black py-12 px-4 relative overflow-hidden">
      {/* Graphical background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
          Featured Projects
        </h1>
        <div className="relative">
          {/* Navigation Buttons */}
          <button 
            onClick={previousProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 btn-white z-10 shadow-xl"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 btn-white z-10 shadow-xl"
            aria-label="Next project"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          {/* Project Cards Container */}
          <div className=" overflow-x-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              <AnimatePresence initial={false} mode="wait">
                {projects.map((project, idx) => (
                (
                    <motion.div 
                      key={project.id}
                      className="w-full flex-shrink-0 px-4"
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -40 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Card className="bg-zinc-900 border border-zinc-800 text-white shadow-lg rounded-xl overflow-hidden transform transition-all duration-500">
                        <CardHeader className="p-0">
                          <div className="relative w-full aspect-video overflow-hidden rounded-t-xl">
                            <Image
                              src={project.imageUrl}
                              alt={project.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 700px"
                              className="object-cover"
                              priority={idx === 0}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
                          </div>
                        </CardHeader>
                        <CardContent className="p-6">
                          <CardTitle className="text-2xl mb-3 text-white">
                            {project.title}
                          </CardTitle>
                          <p className="text-gray-300 mb-4">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {(project.technologies ?? []).map((tech) => (
                              <Badge
                                key={tech}
                                variant="secondary"
                                className="bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex gap-4 mt-4">
                            <Button asChild variant="outline" className="bg-white text-black border-black hover:bg-black hover:text-white hover:border-white">
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                            </Button>
                            <Button asChild variant="outline" className="bg-white text-black border-black hover:bg-black hover:text-white hover:border-white">
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  )
                ))}
              </AnimatePresence>
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
                    ? 'bg-white w-4' 
                    : 'bg-gray-700 hover:bg-gray-500'
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