import { Button } from "@/components/ui/button";
import { Gift, Clock } from "lucide-react";

const LaunchOfferSection = () => {
  return (
    <section id="launch-offer" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="bg-background/95 backdrop-blur-sm rounded-3xl p-12 shadow-2xl border border-primary/20">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Gift className="w-8 h-8 text-primary" />
              <span className="text-primary font-semibold text-lg">Limited Time Offer</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold">
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Try Belio AI Risk-Free for 14 Days!
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Experience the power of AI booking and answering, and see the value in action.
            </p>
            
            <div className="bg-card rounded-2xl p-8 shadow-elegant border border-border/50 max-w-2xl mx-auto">
              <ul className="space-y-4 text-left">
                <li className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">100 Free Minutes included in the trial</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Pay only $0.25 per minute after the free minutes</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">No setup fee required</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">Complimentary Onboarding Call with our specialist</span>
                </li>
                <li className="flex items-start gap-3">
                  <Gift className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">After the trial, enjoy Discounted Premium Support for $599/month for the first 3 months (regular $799/month)</span>
                </li>
              </ul>
            </div>
            
            <div className="pt-6">
              <Button variant="cta" size="xl" className="text-lg">
                Book Your Free Demo Today
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