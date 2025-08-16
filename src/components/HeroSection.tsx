import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Clock, Calendar } from "lucide-react";
import { TrialSignUpForm } from "./TrialSignUpForm";
const HeroSection = () => {
  const [isTrialFormOpen, setIsTrialFormOpen] = useState(false);

  return (
    <>
      <TrialSignUpForm 
        open={isTrialFormOpen} 
        onOpenChange={setIsTrialFormOpen} 
      />
      <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-background via-muted/20 to-secondary/10 overflow-hidden">
        {/* Voice AI Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Sound wave pattern */}
          <div className="absolute top-1/4 left-10 w-32 h-1 bg-gradient-primary/20 rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 left-14 w-24 h-1 bg-gradient-primary/30 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-1/4 left-16 w-40 h-1 bg-gradient-primary/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* AI nodes/connections */}
          <div className="absolute top-1/3 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 right-32 w-2 h-2 bg-primary/60 rounded-full animate-pulse" style={{animationDelay: '0.7s'}}></div>
          <div className="absolute top-2/3 right-24 w-4 h-4 bg-accent/40 rounded-full animate-pulse" style={{animationDelay: '1.2s'}}></div>
          
          {/* Connection lines */}
          <svg className="absolute top-1/3 right-16 w-32 h-32 opacity-10" viewBox="0 0 100 100">
            <path d="M20,20 Q50,10 80,40 Q70,70 40,80 Q10,50 20,20" stroke="url(#voiceGradient)" strokeWidth="1" fill="none" strokeDasharray="2,2">
              <animate attributeName="stroke-dashoffset" values="0;4" dur="2s" repeatCount="indefinite"/>
            </path>
            <defs>
              <linearGradient id="voiceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="hsl(263 85% 55%)" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="hsl(197 85% 65%)" stopOpacity="0.3"/>
              </linearGradient>
            </defs>
          </svg>
          
          {/* Floating voice indicators */}
          <div className="absolute bottom-1/4 left-1/4 w-6 h-6 bg-gradient-primary/20 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-gradient-secondary/25 rounded-full animate-bounce" style={{animationDelay: '0.8s'}}></div>
          
          {/* Microphone wave pattern */}
          <div className="absolute bottom-20 right-1/4 flex items-end gap-1">
            <div className="w-1 h-4 bg-primary/30 rounded animate-pulse"></div>
            <div className="w-1 h-8 bg-primary/40 rounded animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-1 h-6 bg-primary/35 rounded animate-pulse" style={{animationDelay: '0.4s'}}></div>
            <div className="w-1 h-10 bg-primary/45 rounded animate-pulse" style={{animationDelay: '0.6s'}}></div>
            <div className="w-1 h-5 bg-primary/30 rounded animate-pulse" style={{animationDelay: '0.8s'}}></div>
          </div>
        </div>
        
      <div className="container mx-auto px-6 py-20 relative z-10">
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
              <Button 
                variant="cta" 
                size="xl" 
                className="group" 
                onClick={() => setIsTrialFormOpen(true)}
              >
                Start Your 14-Day Free Trial Today
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
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
            <div className="bg-gradient-card rounded-2xl p-8 shadow-elegant">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold">Incoming Call</p>
                    <p className="text-sm text-muted-foreground">Customer booking appointment</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>Response time: 2 seconds</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span>Appointment booked automatically</span>
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-700 font-medium">
                    ✓ Appointment confirmed for Tuesday 2pm
                  </p>
                  <p className="text-sm text-green-600">
                    Calendar updated, confirmation sent
                  </p>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-secondary rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-primary rounded-full opacity-10 animate-pulse"></div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};
export default HeroSection;