import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl lg:text-6xl font-bold">
            Never Miss a Call. Book More Clients. No Upfront Fees.
          </h1>
          
          <p className="text-lg text-muted-foreground">
            Belio AI answers every call 24/7, books appointments instantly, handles reschedules, 
            and sends reminders with zero upfront fees. Get set up in 48 hours and pay only 20¢ per minute during your trial.
          </p>
          
          <Button size="lg" asChild>
            <a href="https://belio.ai/start-trial" target="_blank" rel="noopener noreferrer">
              Start Your 20¢/Minute Free Trial
            </a>
          </Button>
          
          <div className="pt-8">
            <div className="bg-muted rounded-lg overflow-hidden">
              <div style={{ position: 'relative', overflow: 'hidden', paddingTop: '56.25%' }}>
                <iframe 
                  src="https://share.synthesia.io/embeds/videos/0255b7a9-8076-48eb-9c28-036f27b37409" 
                  loading="lazy" 
                  title="Belio AI Demo" 
                  allowFullScreen 
                  allow="encrypted-media; fullscreen;" 
                  style={{ 
                    position: 'absolute', 
                    width: '100%', 
                    height: '100%', 
                    top: 0, 
                    left: 0, 
                    border: 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;