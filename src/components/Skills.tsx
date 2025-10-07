import { Code2, Database, Wrench, Laptop, GraduationCap, ChevronLeft, ChevronRight, Github, FileCode, Terminal, Cloud, BookOpen, Braces, FileJson, Server, Globe, Cog, Box, Binary, GitBranch, Layers } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: [
      { name: "Java", icon: FileCode },
      { name: "Python", icon: Code2 }
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "SAP HANA (XSA, HDI)", icon: Database },
      { name: "Calculation Views", icon: Layers },
      { name: "Flow Graphs", icon: GitBranch },
      { name: "Oracle SQL", icon: Database },
      { name: "PL/SQL", icon: FileCode },
      { name: "MongoDB", icon: Database },
      { name: "MySQL", icon: Database },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "GitHub", icon: Github },
      { name: "VS Code", icon: FileCode },
      { name: "Linux (Ubuntu)", icon: Terminal },
      { name: "Google Colab", icon: Cloud },
      { name: "Jupyter Notebook", icon: BookOpen },
      { name: "Streamlit", icon: Braces },
    ],
  },
  {
    title: "Development",
    icon: Laptop,
    skills: [
      { name: "HTML", icon: FileCode },
      { name: "CSS", icon: FileJson },
      { name: "JavaScript", icon: Braces },
      { name: "React.js", icon: Globe },
      { name: "Node.js", icon: Server },
      { name: "Express.js", icon: Server },
      { name: "Flask", icon: Server },
      { name: "Django", icon: Server },
    ],
  },
  {
    title: "CS Fundamentals",
    icon: GraduationCap,
    skills: [
      { name: "DBMS", icon: Database },
      { name: "OOP", icon: Box },
      { name: "Data Structures", icon: Binary },
      { name: "Algorithms", icon: Cog }
    ],
  },
];

export const Skills = () => {
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
      const scrollAmount = 350;
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
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">Technical Skills</span>
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
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="card-sakura hover-lift group/card flex-shrink-0 w-80"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl group-hover/card:scale-110 transition-transform duration-300">
                    <category.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => {
                    const SkillIcon = skill.icon;
                    return (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-muted text-sm rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200 flex items-center gap-2"
                      >
                        <SkillIcon className="h-4 w-4 text-primary" />
                        {skill.name}
                      </span>
                    );
                  })}
                </div>
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
