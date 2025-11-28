"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: "1",
    title: "AI automated calling",
    description:
      "Developed a complete lead generatation tool system can do 1000+ ai calls ,agent can do manual calling.",
    technologies: ["React.js", "Node.js", "postgress", "redis", "talwind"],
    imageUrl: "/photo/ai-cold.png",
    liveUrl: "",
  },
  {
    id: "2",
    title: "Email Finder Tool",
    description:
      "A email finder tool , to get the real email of working professtional.",
    technologies: [ "Next.js", "Node.js", "MongoDB", "talwind"],
    imageUrl: "/photo/email-finder.png",
    liveUrl: "https://superclasses.site/",
  },
  
  {
    id: "3",
    title: "Flowrise",
    description:
      "A productivity-focused website where users learn effective productivity hacks and time management techniques.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Shadcn/ui"],
    imageUrl: "/photo/flowrise.png",
    liveUrl: "https://flowrise-prismic.vercel.app/",
  },
  {
    id: "4",
    title: "AI Notes App",
    description:
      "An intelligent note-taking application that generates notes from audio, YouTube videos, and PDF summaries.",
    technologies: ["React", "Python", "Supabase", "OpenAI"],
    imageUrl: "/photo/ai.png",
    liveUrl: "#",
  },
  {
    id: "5",
    title: "Superclass",
    description:
      "A comprehensive e-learning platform facilitating live interactive classes with intuitive user experience.",
    technologies: ["React",  "Node.js", "MongoDB", "talwind"],
    imageUrl: "/photo/super.png",
    liveUrl: "https://superclasses.site/",
  },
 
];

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (projects.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentIndex];

  const goToProject = (offset: number) => {
    setCurrentIndex((prev) => {
      const nextIndex = (prev + offset + projects.length) % projects.length;
      return nextIndex;
    });
  };

  return (
    <section id="projects" className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-gray-500">MVPs delivered</p>
          <h2 className="mt-6 text-4xl font-cal font-semibold tracking-tight text-gray-900 sm:text-5xl">
            Real products launched in a matter of weeks
          </h2>
          <p className="mt-5 text-lg leading-7 text-gray-600 max-w-3xl mx-auto">
            We run the same four-week sprint for every build—rapid scope, focused execution, launch-ready
            handoffs. Here’s the stream of MVPs going live right now.
          </p>
        </div>

        <div className="grid gap-16 lg:gap-10 lg:grid-cols-2 items-start rounded-[32px] border border-gray-200/80 bg-white/70 p-8 sm:p-12 shadow-sm">
          <div className="space-y-12 lg:pr-8">
            <div className="space-y-5">
              <Badge className="bg-black text-white px-4 py-1 rounded-full text-sm">
                #{currentIndex + 1} MVP shipped
              </Badge>
              <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Four-week build</p>
              <h3 className="text-3xl font-semibold text-gray-900">{currentProject.title}</h3>
              <p className="text-lg text-gray-600 leading-relaxed">{currentProject.description}</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-[28px] border border-gray-200 bg-white p-6 w-full shadow-xs">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.4em]">Stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-gray-200 bg-gray-50 text-gray-900 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="rounded-[28px] border border-gray-200 bg-white p-6 w-full shadow-xs">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.4em]">Result</p>
                <p className="mt-4 text-sm text-gray-700 leading-7">
                  Launch-ready experience with full hand-off, QA, and growth tooling configured.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" onClick={() => goToProject(-1)} className="rounded-full">
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <Button variant="secondary" onClick={() => goToProject(1)} className="rounded-full">
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="aspect-[4/3] rounded-[32px] border-2 border-gray-300 bg-white p-2 shadow-lg">
              <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-gray-50">
                <Image
                  src={currentProject.imageUrl}
                  alt={currentProject.title}
                  fill
                  className="object-cover transition-all duration-700"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1 text-sm font-medium text-gray-800 shadow">
                  MVP #{currentIndex + 1}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectShowcase;