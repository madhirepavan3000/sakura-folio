import { Code2, Database, Wrench, Laptop, GraduationCap, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Java", "Python"],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      "SAP HANA (XSA, HDI)",
      "Calculation Views",
      "Flow Graphs",
      "Oracle SQL",
      "PL/SQL",
      "MongoDB",
      "MySQL",
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      "GitHub",
      "VS Code",
      "Linux (Ubuntu)",
      "Google Colab",
      "Jupyter Notebook",
      "Streamlit",
    ],
  },
  {
    title: "Development",
    icon: Laptop,
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "Flask",
      "Django",
    ],
  },
  {
    title: "CS Fundamentals",
    icon: GraduationCap,
    skills: ["DBMS", "OOP", "Data Structures", "Algorithms"],
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

    // Auto-scroll
    const autoScroll = setInterval(() => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth - 10) {
        scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
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
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-muted text-sm rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
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
