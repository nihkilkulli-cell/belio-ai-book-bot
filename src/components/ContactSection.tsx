import { Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
const ContactSection = () => {
  return <section id="contact" className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Contact Us
          </h2>
          <p className="text-xl text-muted-foreground">
            We'd love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-4 p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-smooth">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Email Us</h3>
              <a href="mailto:abishai@belio.ai" className="text-primary hover:text-primary/80 transition-smooth font-medium">
                abishai@belio.ai
              </a>
            </div>
            
            <div className="flex flex-col items-center space-y-4 p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-smooth">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Our Location</h3>
              <p className="text-muted-foreground font-medium">
                Toronto, Canada
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <Button variant="cta" size="lg" asChild>
              
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;