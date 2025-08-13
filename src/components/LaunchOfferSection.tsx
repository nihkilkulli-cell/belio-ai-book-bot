import { Button } from "@/components/ui/button";
import { Gift, Clock } from "lucide-react";

const LaunchOfferSection = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="bg-background/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-primary/20">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift className="w-8 h-8 text-primary" />
              <span className="text-primary font-semibold text-lg">Limited Time Offer</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Special Launch Offer
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Sign up this month and get your <strong>first 2 weeks free</strong> + 
              free call script customization (a $250 value).
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border/50">
                <div className="flex items-center gap-3">
                  <Clock className="w-6 h-6 text-secondary" />
                  <div className="text-left">
                    <div className="font-semibold text-foreground">2 Weeks Free</div>
                    <div className="text-sm text-muted-foreground">No commitment required</div>
                  </div>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-primary">+</div>
              
              <div className="bg-card rounded-2xl p-6 shadow-elegant border border-border/50">
                <div className="flex items-center gap-3">
                  <Gift className="w-6 h-6 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Free Setup ($250)</div>
                    <div className="text-sm text-muted-foreground">Custom script included</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <Button variant="cta" size="xl" className="text-lg">
                Claim Your Free Trial
              </Button>
              <p className="text-sm text-muted-foreground mt-3">
                No credit card required • Setup in 48 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchOfferSection;