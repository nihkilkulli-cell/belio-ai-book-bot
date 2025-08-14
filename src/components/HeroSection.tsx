import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Calendar } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-background via-muted/20 to-secondary/10">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Never Miss
                </span>
                <br />
                <span className="text-foreground">
                  a Booking Again
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Belio AI gives you a 24/7 AI receptionist that answers calls, books appointments, 
                and grows your business while you sleep.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl" className="group">
                Get Started Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live in 48 hours</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>No setup fees</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-card rounded-2xl overflow-hidden shadow-elegant">
              <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
                <iframe 
                  src="https://share.synthesia.io/embeds/videos/0255b7a9-8076-48eb-9c28-036f27b37409" 
                  loading="lazy" 
                  title="Belio AI Demo - See how our AI receptionist works" 
                  allowFullScreen 
                  allow="encrypted-media; fullscreen;" 
                  style={{ 
                    position: 'absolute', 
                    width: '100%', 
                    height: '100%', 
                    top: 0, 
                    left: 0, 
                    border: 'none', 
                    padding: 0, 
                    margin: 0, 
                    overflow: 'hidden' 
                  }}
                />
              </div>
              <div className="p-6">
                <p className="text-center text-sm text-muted-foreground">
                  Watch Belio AI in action - answering calls and booking appointments automatically
                </p>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-secondary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-primary rounded-full opacity-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;