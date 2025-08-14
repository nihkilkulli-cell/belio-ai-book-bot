import { DollarSign, Clock, Users, Zap } from "lucide-react";

const points = [
  {
    title: "Cost Effective",
    description: "Cheaper than hiring a receptionist",
    icon: DollarSign,
    stat: "$5,000+",
    statLabel: "Monthly savings"
  },
  {
    title: "Always Available",
    description: "24/7 coverage with no breaks",
    icon: Clock,
    stat: "24/7",
    statLabel: "Availability"
  },
  {
    title: "Customized",
    description: "Tailored to your business needs",
    icon: Users,
    stat: "100%",
    statLabel: "Custom"
  },
  {
    title: "Quick Setup",
    description: "Live in under 48 hours",
    icon: Zap,
    stat: "48hrs",
    statLabel: "Setup"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Belio AI</h2>
          <p className="text-lg text-muted-foreground">
            The smart choice for business growth
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <div key={index} className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
                
                <div className="space-y-1">
                  <div className="text-2xl font-bold">{point.stat}</div>
                  <div className="text-sm text-muted-foreground">{point.statLabel}</div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="font-semibold">{point.title}</h3>
                  <p className="text-sm text-muted-foreground">{point.description}</p>
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