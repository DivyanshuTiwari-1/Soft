



import React from "react";
import { Sparkles, Rocket, Code2, CheckCircle2, FileText, ListChecks, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TimelineItem {
  label: string;
  detail: string;
}

const RoadToLaunch = () => {
  const timelineItems: TimelineItem[] = [
    { label: "Week 1", detail: "Scope sprint & high-fidelity UX" },
    { label: "Weeks 2-3", detail: "Core build, integrations, QA" },
    { label: "Week 4", detail: "Polish, launch assets & support" },
  ];

  const badges = [
    { icon: Code2, label: "Tech stack included" },
    { icon: FileText, label: "Hand-off + docs" },
    { icon: ListChecks, label: "Launch checklist" },
  ];

  return (

    <div className="min-h-screen bg-gradient-to-b from-secondary/30 via-background to-background py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12 opacity-0 animate-fade-up">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
          Your MVP Journey
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          From idea to launch in just 4 weeks
        </p>
      </div>
    <div className=" relative w-full max-w-2xl mx-auto">
      {/* Floating decorative elements */}
      <div className="absolute -top-8 -left-8 w-16 h-16 opacity-20 animate-float-slow">
        <Star className="w-full h-full text-primary" />
      </div>
      <div className="absolute -bottom-6 -right-6 w-12 h-12 opacity-15 animate-float" style={{ animationDelay: "1s" }}>
        <Sparkles className="w-full h-full text-accent" />
      </div>
      
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-3xl blur-3xl animate-glow-pulse" />
      
      {/* Animated ring */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Main card */}
      <div 
        className="group relative bg-white bg-card/80 backdrop-blur-xl border border-border/50 rounded-3xl p-8 md:p-10 shadow-[var(--shadow-elevated)] overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_hsl(var(--primary)/0.15)] hover:border-primary/30"
        style={{ animationDelay: "0.1s" }}
      >
        {/* Shimmer effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer bg-[length:200%_100%] pointer-events-none" />
        
        {/* Decorative gradient orbs */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary/30 to-accent/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-gradient-to-tr from-accent/20 to-primary/10 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Spinning decorative ring */}
        <div className="absolute top-4 right-4 w-20 h-20 border border-primary/10 rounded-full animate-spin-slow opacity-30" />
        <div className="absolute top-6 right-6 w-16 h-16 border border-dashed border-accent/20 rounded-full animate-spin-slow opacity-20" style={{ animationDirection: "reverse" }} />
        
        {/* Header */}
        <div className="relative opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Rocket className="w-6 h-6 text-primary-foreground animate-bounce-soft" />
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-xl bg-primary/50 animate-ripple" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
              Road to Launch
            </h3>
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          </div>
          
          <p className="text-muted-foreground font-medium mb-2 transition-colors duration-300 group-hover:text-foreground">
            Designed for founders who need momentum—not maintenance.
          </p>
          <p className="text-muted-foreground/80 text-sm leading-relaxed">
            We run a tight, battle-tested process focused on the essentials: rapid workshops,
            weekly demos, and a launch-ready handoff so you can start getting users immediately.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-10 mb-8">
          {/* Vertical line with gradient */}
          <div className="absolute left-[23px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-border via-border to-transparent overflow-hidden">
            <div 
              className="absolute inset-0 bg-gradient-to-b from-primary via-primary to-accent animate-timeline-draw"
              style={{ animationDelay: "0.5s" }}
            />
            {/* Glowing dot traveling down the line */}
            <div className="absolute w-2 h-2 -left-[3px] bg-primary rounded-full shadow-[0_0_10px_hsl(var(--primary))] animate-[timeline-draw_2s_ease-out_infinite]" />
          </div>
          
          <div className="space-y-6">
            {timelineItems.map((item, index) => (
              <div 
                key={index}
                className="relative flex items-start gap-5 opacity-0 animate-slide-in-left group/item"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                {/* Timeline dot with pulse */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg ring-4 ring-background group-hover/item:scale-110 group-hover/item:ring-primary/20 transition-all duration-300">
                    <CheckCircle2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  {/* Pulse ring */}
                  <div className="absolute inset-0 rounded-full bg-primary/30 animate-ripple" style={{ animationDelay: `${index * 0.3}s` }} />
                </div>
                
                {/* Content with hover effect */}
                <div className="flex-1 pt-2 p-3 -ml-1 rounded-xl transition-all duration-300 group-hover/item:bg-primary/5 group-hover/item:translate-x-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="text-sm font-bold text-primary uppercase tracking-wider group-hover/item:text-primary transition-colors">
                      {item.label}
                    </span>
                    <span className="hidden sm:block text-muted-foreground/30">•</span>
                    <span className="text-foreground font-medium group-hover/item:text-foreground/90">
                      {item.detail}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Badges with staggered animation */}
        <div 
          className="flex flex-wrap gap-3 opacity-0 animate-fade-up"
          style={{ animationDelay: "1.2s" }}
        >
          {badges.map((badge, index) => (
            <Badge 
              key={index}
              variant="secondary"
              className="px-4 py-2.5 text-sm font-medium bg-secondary/80 hover:bg-primary/10 hover:text-primary hover:border-primary/30 border border-transparent transition-all duration-300 hover:scale-110 hover:shadow-[0_0_20px_hsl(var(--primary)/0.2)] cursor-default flex items-center gap-2 animate-bounce-soft"
              style={{ animationDelay: `${1.3 + index * 0.1}s` }}
            >
              <badge.icon className="w-4 h-4 text-primary animate-pulse" style={{ animationDelay: `${index * 0.2}s` }} />
              {badge.label}
            </Badge>
          ))}
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default RoadToLaunch;

