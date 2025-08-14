import { Button } from "@/components/ui/button";

const LaunchOfferSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-muted rounded-lg p-8 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4">
            Special Launch Offer
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6">
            Sign up this month and get your first 2 weeks free plus free setup (a $250 value).
          </p>
          
          <Button size="lg">
            Claim Your Free Trial
          </Button>
          
          <p className="text-sm text-muted-foreground mt-3">
            No credit card required • Setup in 48 hours
          </p>
        </div>
      </div>
    </section>
  );
};

export default LaunchOfferSection;