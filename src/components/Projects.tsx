import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Online Library Management System",
    description:
      "A robust MERN Stack application that streamlines library operations with an intuitive interface, advanced JWT authentication, and real-time resource management.",
    tech: ["MongoDB", "Express.js", "React", "Node.js", "JWT"],
    highlights: [
      "Interactive book search and filter system",
      "Admin dashboard for real-time management",
      "Secure authentication with JWT",
      "Enhanced system performance for increased user transactions",
    ],
    link: "https://drive.google.com/file/d/15atPM7IJdeGB4IPcNoyhgtw0n8EDOU60/view?usp=drive_link",
  },
  {
    title: "Road Crack Detection System",
    description:
      "An automated system using CNNs and Vision Transformers (ViTs) for detecting road cracks with up to 99.7% accuracy on a 40,000+ image dataset.",
    tech: ["Python", "TensorFlow", "OpenCV", "Streamlit", "Deep Learning"],
    highlights: [
      "98.5% accuracy with CNN, 99.7% with ViT",
      "Real-time predictions via Streamlit web app",
      "Advanced preprocessing and augmentation",
      "Multiple architecture comparison",
    ],
    github: "https://github.com/madhirepavan3000/Road_crack_detection_system",
  },
  {
    title: "Coffee Leaf Disease Detection System",
    description:
      "A deep learning system using ResNet-50 achieving 94% classification accuracy on 53,000 coffee leaf images across multiple disease categories.",
    tech: ["Python", "TensorFlow", "ResNet-50", "SMOTETomek", "OpenCV"],
    highlights: [
      "94% classification accuracy",
      "F1 score of 0.91",
      "Balanced dataset using SMOTETomek",
      "20% improvement in model reliability",
    ],
    github: "https://github.com/madhirepavan3000/Coffee-Leaf-Disease-Detection-System",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-sakura hover-lift flex flex-col h-full group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-md border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                {project.github && (
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.link && (
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </a>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
