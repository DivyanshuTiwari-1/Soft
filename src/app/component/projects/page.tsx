// "use client";
// import React, { useEffect, useState } from "react";
// import { ArrowLeft, ArrowRight } from "lucide-react";
// import Image from "next/image";

// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";

// const projects = [
//   {
//     id: "1",
//     title: "AI automated calling",
//     description:
//       "Developed a complete lead generatation tool system can do 1000+ ai calls ,agent can do manual calling.",
//     technologies: ["React.js", "Node.js", "postgress", "redis", "talwind"],
//     imageUrl: "/photo/ai-cold.png",
//     liveUrl: "",
//   },
//   {
//     id: "2",
//     title: "Email Finder Tool",
//     description:
//       "A email finder tool , to get the real email of working professtional.",
//     technologies: [ "Next.js", "Node.js", "MongoDB", "talwind"],
//     imageUrl: "/photo/email-finder.png",
//     liveUrl: "https://superclasses.site/",
//   },

//   {
//     id: "3",
//     title: "Flowrise",
//     description:
//       "A productivity-focused website where users learn effective productivity hacks and time management techniques.",
//     technologies: ["Next.js", "TypeScript", "Supabase", "Shadcn/ui"],
//     imageUrl: "/photo/flowrise.png",
//     liveUrl: "https://flowrise-prismic.vercel.app/",
//   },
//   {
//     id: "4",
//     title: "AI Notes App",
//     description:
//       "An intelligent note-taking application that generates notes from audio, YouTube videos, and PDF summaries.",
//     technologies: ["React", "Python", "Supabase", "OpenAI"],
//     imageUrl: "/photo/ai.png",
//     liveUrl: "#",
//   },
//   {
//     id: "5",
//     title: "Superclass",
//     description:
//       "A comprehensive e-learning platform facilitating live interactive classes with intuitive user experience.",
//     technologies: ["React",  "Node.js", "MongoDB", "talwind"],
//     imageUrl: "/photo/super.png",
//     liveUrl: "https://superclasses.site/",
//   },

// ];

// const ProjectShowcase = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     if (projects.length <= 1) return;

//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % projects.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const currentProject = projects[currentIndex];

//   const goToProject = (offset: number) => {
//     setCurrentIndex((prev) => {
//       const nextIndex = (prev + offset + projects.length) % projects.length;
//       return nextIndex;
//     });
//   };

//   return (
//     <section id="projects" className="bg-white py-20">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <p className="text-xs uppercase tracking-[0.4em] text-gray-500">MVPs delivered</p>
//           <h2 className="mt-6 text-4xl font-cal font-semibold tracking-tight text-gray-900 sm:text-5xl">
//             Real products launched in a matter of weeks
//           </h2>
//           <p className="mt-5 text-lg leading-7 text-gray-600 max-w-3xl mx-auto">
//             We run the same four-week sprint for every build—rapid scope, focused execution, launch-ready
//             handoffs. Here’s the stream of MVPs going live right now.
//           </p>
//         </div>

//         <div className="grid gap-16 lg:gap-10 lg:grid-cols-2 items-start rounded-[32px] border border-gray-200/80 bg-white/70 p-8 sm:p-12 shadow-sm">
//           <div className="space-y-12 lg:pr-8">
//             <div className="space-y-5">
//               <Badge className="bg-black text-white px-4 py-1 rounded-full text-sm">
//                 #{currentIndex + 1} MVP shipped
//               </Badge>
//               <p className="text-xs uppercase tracking-[0.4em] text-gray-500">Four-week build</p>
//               <h3 className="text-3xl font-semibold text-gray-900">{currentProject.title}</h3>
//               <p className="text-lg text-gray-600 leading-relaxed">{currentProject.description}</p>
//             </div>

//             <div className="grid gap-6 sm:grid-cols-2">
//               <div className="rounded-[28px] border border-gray-200 bg-white p-6 w-full shadow-xs">
//                 <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.4em]">Stack</p>
//                 <div className="mt-4 flex flex-wrap gap-2">
//                   {currentProject.technologies.map((tech) => (
//                     <Badge
//                       key={tech}
//                       variant="outline"
//                       className="text-xs border-gray-200 bg-gray-50 text-gray-900 px-3 py-1 rounded-full"
//                     >
//                       {tech}
//                     </Badge>
//                   ))}
//                 </div>
//               </div>
//               <div className="rounded-[28px] border border-gray-200 bg-white p-6 w-full shadow-xs">
//                 <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.4em]">Result</p>
//                 <p className="mt-4 text-sm text-gray-700 leading-7">
//                   Launch-ready experience with full hand-off, QA, and growth tooling configured.
//                 </p>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-3">
//               <Button variant="secondary" onClick={() => goToProject(-1)} className="rounded-full">
//                 <ArrowLeft className="w-4 h-4" />
//               </Button>
//               <Button variant="secondary" onClick={() => goToProject(1)} className="rounded-full">
//                 <ArrowRight className="w-4 h-4" />
//               </Button>
//             </div>
//           </div>

//           <div className="relative lg:pl-8">
//             <div className="aspect-[4/3] rounded-[32px] border-2 border-gray-300 bg-white p-2 shadow-lg">
//               <div className="relative h-full w-full overflow-hidden rounded-[24px] bg-gray-50">
//                 <Image
//                   src={currentProject.imageUrl}
//                   alt={currentProject.title}
//                   fill
//                   className="object-cover transition-all duration-700"
//                   sizes="(max-width: 1024px) 100vw, 45vw"
//                 />
//                 <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-1 text-sm font-medium text-gray-800 shadow">
//                   MVP #{currentIndex + 1}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectShowcase;



"use client";
import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Star, Rocket } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const projects = [
  {
    id: "1",
    title: "AI Automated Calling",
    description:
      "Developed a complete lead generation tool system that can do 1000+ AI calls. Agents can do manual calling.",
    technologies: ["React.js", "Node.js", "PostgreSQL", "Redis", "Tailwind"],
    imageUrl: "/photo/ai-cold.png",
    liveUrl: "",
  },
  {
    id: "2",
    title: "Email Finder Tool",
    description:
      "A powerful email finder tool to get the real email of working professionals.",
    technologies: ["Next.js", "Node.js", "MongoDB", "Tailwind"],
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
    technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
    imageUrl: "/photo/super.png",
    liveUrl: "https://superclasses.site/",
  },
];

const ProjectShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (projects.length <= 1) return;

    const interval = setInterval(() => {
      goToProject(1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentIndex];

  const goToProject = (offset: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + offset + projects.length) % projects.length;
        return nextIndex;
      });
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section id="projects"  className="relative py-16 md:py-24 px-4 overflow-hidden bg-gradient-to-b from-secondary/30 to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-float-slow" />
        <Star className="absolute top-32 right-1/4 w-4 h-4 text-primary/30 animate-pulse" />
        <Sparkles className="absolute bottom-40 left-1/4 w-5 h-5 text-accent/40 animate-bounce-soft" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-up">
          <Badge
            variant="outline"
            className="mb-4 border-primary/30 text-primary bg-primary/5 px-4 py-1.5 text-sm animate-pulse"
          >
            <Rocket className="w-3.5 h-3.5 mr-1.5 animate-bounce-soft" />
            MVPs delivered
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real products launched in{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              weeks
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            We run the same four-week sprint for every build—rapid scope, focused execution,
            launch-ready handoffs. Here&apos;s the stream of MVPs going live right now.
          </p>
        </div>

        {/* Project Card */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Content Side */}
          <div
            className={`order-2 lg:order-1 bg-card/80 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-8 border border-border/50 shadow-xl transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
          >
            <div className="space-y-6">
              {/* Project Header */}
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                    #{currentIndex + 1} MVP shipped
                  </Badge>
                  <span className="text-xs text-muted-foreground">Four-week build</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {currentProject.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {currentProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {currentProject.technologies.map((tech, i) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-secondary/80 hover:bg-primary/10 hover:text-primary transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${i * 100}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Result */}
              <div className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl border border-primary/10">
                <h4 className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  Result
                </h4>
                <p className="text-sm text-muted-foreground">
                  Launch-ready experience with full hand-off, QA, and growth tooling configured.
                </p>
              </div>

              {/* Navigation & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-border/50">
                <div className="flex items-center gap-2">
                  {/* <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => goToProject(-1)} 
                    className="rounded-full h-10 w-10 border-primary/20 hover:bg-primary/60 hover:border-primary/40 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => goToProject(1)} 
                    className="rounded-full h-10 w-10 border-primary/20 hover:bg-primary/60 hover:border-primary/40 transition-all"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button> */}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => goToProject(-1)}
                    className="rounded-full h-10 w-10 
             border-primary/20 
             text-black 
             hover:bg-primary/60 
             hover:border-primary/40 
             hover:text-white
             transition-all"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => goToProject(1)}
                    className="rounded-full h-10 w-10 
             border-primary/20 
             text-black 
             hover:bg-primary/60 
             hover:border-primary/40 
             hover:text-white
             transition-all"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  {/* Dots indicator */}
                  <div className="flex gap-1.5 ml-4">
                    {projects.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setIsTransitioning(true);
                          setTimeout(() => {
                            setCurrentIndex(i);
                            setIsTransitioning(false);
                          }, 200);
                        }}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIndex
                            ? 'bg-primary w-6'
                            : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                          }`}
                      />
                    ))}
                  </div>
                </div>
                {/* {currentProject.liveUrl && currentProject.liveUrl !== "#" && (
                  <Button 
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    <a href={currentProject.liveUrl} target="_blank" rel="noopener noreferrer">
                      View Live
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                )} */}
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div
            className={`order-1 lg:order-2 relative transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
              }`}
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />

              {/* Image container */}
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-border/50 shadow-2xl bg-card">
                <div className="aspect-[16/10] bg-gradient-to-br from-muted to-secondary flex items-center justify-center">
                  <Image
                    src={currentProject.imageUrl}
                    alt={currentProject.title}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary/10 to-accent/10">
                    <Rocket className="w-12 h-12 text-primary/50 animate-bounce-soft" />
                    <span className="text-muted-foreground font-medium">MVP #{currentIndex + 1}</span>
                  </div>
                </div>

                Overlay badge
                {/* <div className="absolute top-4 left-4">
                  <Badge className="bg-background/90 backdrop-blur-sm text-foreground border-border/50 shadow-lg">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                    Live Project
                  </Badge>
                </div> */}
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-3 -right-3 w-20 h-20 border-2 border-primary/20 rounded-2xl -z-10" />
              <div className="absolute -top-3 -left-3 w-16 h-16 border-2 border-accent/20 rounded-2xl -z-10" />
            </div>
          </div>
        </div>

        {/* Bottom stats
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { label: "MVPs Shipped", value: "15+" },
            { label: "Avg. Build Time", value: "4 weeks" },
            { label: "Success Rate", value: "100%" },
            { label: "Happy Founders", value: "15+" },
          ].map((stat, i) => (
            <div 
              key={stat.label}
              className="text-center p-4 md:p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300 group"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
};

export default ProjectShowcase;
