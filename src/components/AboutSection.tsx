import { DollarSign, Clock, Users, Zap } from "lucide-react";

const points = [
  {
    title: "ROI Within 30 Days",
    description: "Most clients recover their investment in the first month through captured bookings.",
    icon: DollarSign,
    stat: "300%",
    statLabel: "Average ROI"
  },
  {
    title: "Never Miss Peak Hours",
    description: "Capture bookings during lunch rush, after hours, and weekends when competitors are closed.",
    icon: Clock,
    stat: "24/7",
    statLabel: "Revenue capture"
  },
  {
    title: "Built for Small Business",
    description: "Created by small business owners who understand your challenges and budget constraints.",
    icon: Users,
    stat: "500+",
    statLabel: "SMBs served"
  },
  {
    title: "Same Day Setup",
    description: "From signup to taking calls - faster than hiring and training a receptionist.",
    icon: Zap,
    stat: "48hrs",
    statLabel: "Go-live time"
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Why Small Businesses Choose <span className="bg-gradient-primary bg-clip-text text-transparent">Belio AI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Built by small business owners, for small business owners who understand every dollar counts
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mt-6">
            Founded in Canada and serving 500+ small businesses across North America. We know the challenges of running a small business - tight budgets, wearing multiple hats, and losing customers to bigger competitors. Our AI receptionist levels the playing field, giving you enterprise-level customer service at a fraction of the cost.
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