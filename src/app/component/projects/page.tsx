"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const projects = [
  {
    id: '1',
    title: 'CRM Dashboard',
    description: 'A comprehensive CRM platform for analytical study of customer accounts with real-time data visualization.',
    technologies: ['Next.js', 'FastAPI', 'MongoDB', 'JavaScript'],
    imageUrl: '/photo/crm.png',
    liveUrl: 'https://crm-dashboard-snowy.vercel.app/',
    category: 'Dashboard'
  },
  {
    id: '2',
    title: 'Flowrise',
    description: 'A productivity-focused website where users learn effective productivity hacks and time management techniques.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Shadcn/ui'],
    imageUrl: '/photo/flowrise.png',
    liveUrl: 'https://flowrise-prismic.vercel.app/',
    category: 'Web App'
  },
  {
    id: '3',
    title: 'Custom Stripe Integration',
    description: 'Customized Stripe payment gateway with popup-style checkout that keeps users on the same URL.',
    technologies: ['Next.js', 'TypeScript', 'Supabase', 'Stripe'],
    imageUrl: '/photo/stripe.png',
    liveUrl: 'https://strip-omega.vercel.app/',
    category: 'E-commerce'
  },
  {
    id: '4',
    title: 'AI Notes App',
    description: 'An intelligent note-taking application that generates notes from audio, YouTube videos, and PDF summaries.',
    technologies: ['React', 'Python', 'Supabase', 'OpenAI'],
    imageUrl: '/photo/ai.png',
    liveUrl: '#',
    category: 'AI/ML'
  },
  {
    id: '5',
    title: 'Anonymous Messaging Platform',
    description: 'A web application similar to Instagram\'s NGL feature for sending anonymous messages via public profiles.',
    technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Node.js'],
    imageUrl: '/photo/ngl.png',
    liveUrl: '#',
    category: 'Social'
  },
  {
    id: '6',
    title: 'Superclass',
    description: 'A comprehensive e-learning platform facilitating live interactive classes with intuitive user experience.',
    technologies: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    imageUrl: '/photo/super.png',
    liveUrl: 'https://superclasses.site/',
    category: 'Education'
  }
];

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isPlaying, setIsPlaying] = useState(true);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const currentProject = filteredProjects[currentIndex] || filteredProjects[0];

  // Auto-scroll function
  const nextProject = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredProjects.length - 1 ? 0 : prevIndex + 1
    );
  }, [filteredProjects.length]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
  };

  // Auto-scroll effect
  useEffect(() => {
    if (isPlaying && filteredProjects.length > 1) {
      const id = setInterval(() => {
        nextProject();
      }, 2000); // Changed from 4000 to 2000 - Change project every 2 seconds
      setIntervalId(id);

      return () => {
        if (id) clearInterval(id);
      };
    } else {
      if (intervalId) {
        clearInterval(intervalId);
        setIntervalId(null);
      }
    }
  }, [isPlaying, filteredProjects.length]);

  // Reset auto-scroll when category changes
  useEffect(() => {
    if (intervalId) {
      clearInterval(intervalId);
    }
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [intervalId]);

  if (!currentProject) return null;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-cal font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects and see how we transform ideas into reality
          </p>
        </div>

        {/* Category Filter and Controls */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryChange(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`text-sm ${
                  selectedCategory === category 
                    ? 'bg-gray-900 text-white hover:bg-gray-800' 
                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>

        
          
        </div>

        {/* Project Display */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Project Image */}
            <div className="relative">
              <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 border border-gray-200">
                <Image
                  src={currentProject.imageUrl}
                  alt={currentProject.title}
                  fill
                  className="object-cover transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Project Info */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="text-xs">
                    {currentProject.category}
                  </Badge>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {currentProject.title}
                </h3>
                <p className="text-gray-600 leading-6">
                  {currentProject.description}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-medium text-gray-900 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-gray-300 text-gray-700"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

         
            </div>
          </div>

       
        </div>

        {/* Navigation Dots with Progress */}
        {filteredProjects.length > 1 && (
          <div className="flex justify-center mt-12 gap-2">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(false); // Pause auto-scroll when manually selecting
                }}
                className={`relative h-2 rounded-full transition-all duration-100 ${
                  currentIndex === index 
                    ? 'bg-gray-900 w-8' 
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to project ${index + 1}`}
              >
                {/* Progress bar for current dot */}
                {currentIndex === index && isPlaying && (
                  <div 
                    className="absolute top-0 left-0 h-full bg-gray-600 rounded-full animate-progress"
                    style={{
                      animation: 'progress 2s linear infinite'
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Custom CSS for progress animation */}
      <style jsx>{`
        @keyframes progress {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        
        .animate-progress {
          animation: progress 1s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectShowcase;