import { Award, ExternalLink, Calendar, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

const certificates = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services (AWS)",
    date: "Jan 2024",
    expiry: "Jan 2027",
    credentialId: "70e25643edd94d0a8d67b11b68bcece7",
    link: "https://drive.google.com/file/d/1xcPUL8A4w7HSwfo70IEMN8CEOJNctXoY/view?usp=drive_link",
    skills: ["Cloud Computing", "AWS", "AWS CloudFormation"],
  },
  {
    title: "MERN Full Stack Internship Program",
    issuer: "ETHNUS",
    date: "Dec 2023",
    duration: "100 Hours",
    certificateId: "28JQN7WN",
    link: "https://drive.google.com/file/d/15atPM7IJdeGB4IPcNoyhgtw0n8EDOU60/view",
    skills: ["MERN Stack", "HTML", "CSS", "JavaScript", "React.js", "Bootstrap"],
  },
  {
    title: "ITT Summer Internship AI ML",
    issuer: "InTrain Tech",
    date: "Apr 2024",
    project: "TCS Stock Price Prediction",
    link: "https://drive.google.com/file/d/1MkH6ku6HFW2EEo6b4W8XLmBhkv_h1CAq/view?usp=drive_link",
    skills: ["Artificial Intelligence", "Machine Learning"],
  },
  {
    title: "Data Science",
    issuer: "1Stop.ai",
    date: "Mar 2024",
    credentialId: "madhirepavan@gmail.com",
    link: "https://drive.google.com/file/d/1-yNBbgnn0gk5QmSYLJ7QOFLmj2_MzaEh/view?usp=sharing",
    skills: ["Data Science", "Python", "Analytics"],
  },
  {
    title: "Multicloud Network Associate",
    issuer: "Aviatrix",
    date: "Jun 2025",
    expiry: "Jun 2028",
    link: "https://drive.google.com/file/d/1RyWC3vtvIrcpWjoJRjzHvu_k4jgsFUsD/view?usp=sharing",
    skills: ["Cloud Networking", "Multicloud"],
  },
  {
    title: "CodeClash – The Battle of Logic & Code",
    issuer: "Let's Code Community",
    date: "Jun 2025",
    achievement: "All India Rank 231 out of 5,700+ participants",
    link: "https://unstop.com/certificate-preview/fe15dc68-eff4-44ef-920e-d5b6eafefd0f",
    skills: ["DSA", "Algorithms", "Problem Solving"],
  },
];

export const Certificates = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    checkScroll();
    scrollContainer.addEventListener('scroll', checkScroll);

    // Duplicate content for seamless loop
    const items = scrollContainer.children;
    const itemsArray = Array.from(items);
    itemsArray.forEach((item) => {
      const clone = item.cloneNode(true);
      scrollContainer.appendChild(clone);
    });

    // Auto-scroll with seamless loop
    const autoScroll = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollBy({ left: 1, behavior: 'auto' });
      }
    }, 30);

    return () => {
      scrollContainer.removeEventListener('scroll', checkScroll);
      clearInterval(autoScroll);
    };
  }, []);

  return (
    <section id="certificates" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">Certifications & Achievements</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />

        <div className="relative group">
          <Button
            variant="outline"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div 
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-4 px-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="card-sakura hover-lift flex flex-col group/card flex-shrink-0 w-96 h-[420px]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-br from-primary to-secondary rounded-lg group-hover/card:scale-110 transition-transform duration-300">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg leading-tight mb-1 group-hover/card:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">{cert.issuer}</p>
                  </div>
                </div>

                <div className="flex-1 space-y-2 mb-4 overflow-y-auto">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                    {cert.expiry && <span className="text-xs">• Expires {cert.expiry}</span>}
                  </div>

                  {cert.credentialId && (
                    <p className="text-xs text-muted-foreground">
                      ID: {cert.credentialId}
                    </p>
                  )}

                  {cert.certificateId && (
                    <p className="text-xs text-muted-foreground">
                      Certificate ID: {cert.certificateId}
                    </p>
                  )}

                  {cert.duration && (
                    <p className="text-xs text-muted-foreground">
                      Duration: {cert.duration}
                    </p>
                  )}

                  {cert.project && (
                    <p className="text-sm text-foreground font-medium">
                      Project: {cert.project}
                    </p>
                  )}

                  {cert.achievement && (
                    <p className="text-sm text-foreground font-medium">
                      🏆 {cert.achievement}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {cert.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs bg-primary/10 text-primary rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {cert.link && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-auto"
                    asChild
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
