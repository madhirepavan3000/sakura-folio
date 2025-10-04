import { Github, Linkedin, Mail, Code, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";
import profileImg from "@/assets/profile.jpg";

export const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      
      {/* Floating Petals */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          >
            <div className="w-8 h-8 bg-primary/20 rounded-full blur-sm" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Text Content */}
          <div className="space-y-8 animate-fade-in-up">
            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="text-gradient">M. Pavan Kumar Reddy</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-light">
                Programmer Analyst Trainee @ Cognizant
              </p>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Specializing in SAP HANA, Data Analytics, AI/ML & Full Stack Development
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-glow transition-all duration-300"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 hover:bg-primary/10"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/madhirepavan3000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover-lift"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/madhire-pavan-kumar-reddy-940808219/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover-lift"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://leetcode.com/u/Madhire_Pavan_kumar_reddy/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover-lift"
              >
                <Code className="h-6 w-6" />
              </a>
              <a
                href="mailto:madhirepavan3000@gmail.com"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover-lift"
              >
                <Mail className="h-6 w-6" />
              </a>
              <a
                href="tel:+918341227516"
                className="p-3 rounded-full bg-card hover:bg-primary/10 transition-all duration-300 hover-lift"
              >
                <Phone className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition duration-500" />
              <div className="relative">
                <img
                  src={profileImg}
                  alt="M. Pavan Kumar Reddy"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl object-cover border-4 border-background shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
