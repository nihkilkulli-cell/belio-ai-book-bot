import { DollarSign, Clock, Users, Zap } from "lucide-react";

const points = [
  {
    title: "Cheaper than a receptionist",
    description: "Save thousands per month.",
    icon: DollarSign,
    stat: "$5,000+",
    statLabel: "Monthly savings"
  },
  {
    title: "Always available",
    description: "No lunch breaks, no sick days.",
    icon: Clock,
    stat: "24/7",
    statLabel: "Availability"
  },
  {
    title: "Custom to your business",
    description: "Sounds like you, follows your process.",
    icon: Users,
    stat: "100%",
    statLabel: "Customized"
  },
  {
    title: "Fast setup",
    description: "AI answering calls in under 48 hours.",
    icon: Zap,
    stat: "48hrs",
    statLabel: "Setup time"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Why Choose <span className="bg-gradient-hero bg-clip-text text-transparent">Belio AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The smartest investment you'll make for your business growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div 
                key={index}
                className="text-center space-y-4 group"
              >
                <div className="relative mx-auto w-20 h-20 bg-gradient-card rounded-2xl flex items-center justify-center shadow-elegant group-hover:shadow-primary transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-primary" />
                  <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300"></div>
                </div>
                
                <div className="space-y-2">
                  <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                    {point.stat}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {point.statLabel}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {point.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;