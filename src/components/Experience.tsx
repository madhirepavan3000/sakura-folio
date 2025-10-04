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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">Experience</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="card-sakura hover-lift relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-l-2xl" />
              
              <div className="pl-6">
                <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{exp.role}</h3>
                    <p className="text-lg font-semibold text-primary mb-2">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-1">{exp.description}</p>
                    <p className="text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-3">
                      <div className="mt-2 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <p className="text-muted-foreground leading-relaxed">{achievement}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
