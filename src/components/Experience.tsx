import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Cognizant",
    role: "Programmer Analyst Trainee",
    period: "Jul 2025 - Present",
    location: "Chennai, Tamil Nadu, India",
    description: "SAP HANA (High-Performance Analytic Appliance)",
    achievements: [
      "Mastered Oracle SQL PL/SQL, creating 10+ advanced database triggers and constraints that improved data integrity, ensuring 99.99% accuracy in critical financial reporting systems",
      "Constructed and deployed SAP HANA 2.0 XSA models using HDI containers, calculation views, flow graphs, table functions, and applied security, version control, and migration best practices",
      "Streamlined data provisioning & integration with SLT, SDA, SDI, and SAP Datasphere, enabling real-time analytics and seamless data flow across enterprise systems",
    ],
  },
  {
    company: "Outlier",
    role: "AI Evaluation Specialist",
    period: "Dec 2024 - Apr 2025",
    location: "Remote",
    description: "Freelance Contributor",
    achievements: [
      "Evaluated and engineered prompts for generative AI models across Math, Physics, and English, identifying failure cases and improving model accuracy through detailed analysis and debugging",
      "Developed multi-option scenarios, code debugging in Java/Python/MERN, and image-based reasoning tasks, contributing to enhanced AI robustness",
      "Earned over $1000 through high-quality contributions to AI model development",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block" />
          
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative mb-12 last:mb-0"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background hidden md:block animate-pulse" />
              
              <div className="md:ml-20">
                <div className="card-sakura hover-lift group">
                  <div className="flex items-start justify-between flex-wrap gap-4 mb-6">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full mb-3">
                        <Briefcase className="h-4 w-4 text-primary" />
                        <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-2">
                        {exp.company}
                      </p>
                      <p className="text-sm font-medium text-muted-foreground mb-1">
                        {exp.description}
                      </p>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5" />
                        {exp.location}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {exp.achievements.map((achievement, i) => (
                      <div
                        key={i}
                        className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-muted/50 to-muted/30 border border-border/50 hover:border-primary/50 transition-all duration-300"
                      >
                        <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-br from-primary to-secondary flex-shrink-0 animate-pulse" />
                        <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
