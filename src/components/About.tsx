import { Award, TrendingUp } from "lucide-react";
import vitApLogo from "@/assets/vit-ap-logo.png";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-12 rounded-full" />

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card-sakura hover-lift text-center">
              <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <img src={vitApLogo} alt="VIT-AP University" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-sm text-muted-foreground">B.Tech in CSE</p>
              <p className="text-sm font-semibold text-primary">VIT-AP University</p>
              <p className="text-sm text-muted-foreground">CGPA: 8.64/10.0</p>
              <p className="text-xs text-muted-foreground mt-1">2021 - 2025</p>
            </div>

            <div className="card-sakura hover-lift text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Achievement</h3>
              <p className="text-sm text-muted-foreground">All India Rank</p>
              <p className="text-2xl font-bold text-gradient">231</p>
              <p className="text-xs text-muted-foreground mt-1">CodeClash 2025</p>
              <p className="text-xs text-muted-foreground">5,700+ participants</p>
            </div>

            <div className="card-sakura hover-lift text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experience</h3>
              <p className="text-sm text-muted-foreground">Programmer Analyst</p>
              <p className="text-sm font-semibold text-primary">Cognizant</p>
              <p className="text-xs text-muted-foreground mt-1">SAP HANA Specialist</p>
              <p className="text-xs text-muted-foreground">Jul 2025 - Present</p>
            </div>
          </div>

          <div className="card-sakura">
            <p className="text-lg leading-relaxed text-center text-muted-foreground">
              As a <span className="text-primary font-semibold">Cognizant Programmer Analyst Trainee</span> and 
              B.Tech graduate in Computer Science from VIT-AP University, I bring expertise in{" "}
              <span className="text-primary font-semibold">SAP HANA, PL/SQL, and data structures</span> to 
              support high-performance analytics. With certifications in{" "}
              <span className="text-primary font-semibold">AWS Cloud Practitioner</span> and{" "}
              <span className="text-primary font-semibold">MERN stack development</span>, my technical foundation 
              is complemented by hands-on experience in AI/ML and full-stack development. I'm passionate about 
              leveraging technology to create innovative solutions and drive meaningful results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
