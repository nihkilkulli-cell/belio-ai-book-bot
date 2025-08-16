import { Users, Settings, Rocket } from "lucide-react";

const steps = [
  {
    step_number: 1,
    title: "Book a Call with Our Onboarding Specialist",
    description: "Schedule a 20–30 minute setup call so we can understand your business, booking rules, and call handling preferences.",
    icon: Users,
    color: "text-primary"
  },
  {
    step_number: 2,
    title: "We Configure Belio AI for Your Business",
    description: "Our team sets up your AI receptionist, including call scripts, booking workflows, and calendar integration — all done for you.",
    icon: Settings,
    color: "text-secondary"
  },
  {
    step_number: 3,
    title: "Go Live in 48 Hours",
    description: "Your personal AI receptionist is ready to answer calls, book clients, handle reschedules, and send reminders automatically.",
    icon: Rocket,
    color: "text-accent"
  }
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-secondary/5 via-background to-primary/5">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get your AI receptionist up and running in just 3 simple steps
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isLastStep = index === steps.length - 1;
            
            return (
              <div key={index} className="relative">
                {/* Connector line for desktop */}
                {!isLastStep && (
                  <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-border via-border/50 to-transparent z-0" />
                )}
                
                <div className="relative z-10 bg-card rounded-3xl p-8 shadow-elegant hover:shadow-primary hover:scale-105 transition-all duration-300 border border-border/50">
                  <div className="space-y-6">
                    {/* Step number and icon */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${step.color}/20 to-${step.color}/10 flex items-center justify-center`}>
                          <IconComponent className={`w-8 h-8 ${step.color}`} />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                          {step.step_number}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-foreground leading-tight">
                        {step.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Connector arrow for mobile */}
                {!isLastStep && (
                  <div className="lg:hidden flex justify-center py-4">
                    <div className="w-0.5 h-8 bg-gradient-to-b from-border to-transparent" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-subtle rounded-full border border-border/50">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-muted-foreground">
              Ready to get started? Book your onboarding call today!
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;