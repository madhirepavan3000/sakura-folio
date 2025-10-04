import { Mail, Phone, MapPin, Github, Linkedin, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          <span className="text-gradient">Get In Touch</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-16 rounded-full" />

        <div className="max-w-4xl mx-auto">
          <div className="card-sakura mb-8">
            <p className="text-center text-lg text-muted-foreground mb-8">
              I'm always interested in hearing about new opportunities, collaborations, and exciting projects.
              Feel free to reach out!
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <a
                href="mailto:madhirepavan3000@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover-lift"
              >
                <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-lg">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">madhirepavan3000@gmail.com</p>
                </div>
              </a>

              <a
                href="tel:+918341227516"
                className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 transition-all duration-300 hover-lift"
              >
                <div className="p-3 bg-gradient-to-br from-secondary to-accent rounded-lg">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 834 122 7516</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 md:col-span-2">
                <div className="p-3 bg-gradient-to-br from-accent to-primary rounded-lg">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-sakura">
            <h3 className="text-2xl font-bold text-center mb-6">Connect With Me</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="flex-1 min-w-[200px]"
                asChild
              >
                <a
                  href="https://github.com/madhirepavan3000"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="flex-1 min-w-[200px]"
                asChild
              >
                <a
                  href="https://www.linkedin.com/in/madhire-pavan-kumar-reddy-940808219/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="flex-1 min-w-[200px]"
                asChild
              >
                <a
                  href="https://leetcode.com/u/Madhire_Pavan_kumar_reddy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Code className="mr-2 h-5 w-5" />
                  LeetCode
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
