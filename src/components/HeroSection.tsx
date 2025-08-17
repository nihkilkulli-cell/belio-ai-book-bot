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
      <section className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-background via-muted/20 to-secondary/10">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  Stop Losing Customers
                </span>
                <br />
                <span className="text-foreground">
                  After Hours
                </span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                Your AI receptionist never sleeps. Perfect for restaurants, salons, clinics, contractors, and service businesses.
                <span className="block mt-2 text-primary font-semibold">Capture 40% more bookings with zero additional staff costs.</span>
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="cta" 
                size="xl" 
                className="group" 
                onClick={() => setIsTrialFormOpen(true)}
              >
                Get My AI Receptionist
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Live in 48 hours</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>14-day money-back guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-accent">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className="font-medium">Every missed call = money lost</span>
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