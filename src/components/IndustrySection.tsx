import { Utensils, Scissors, Stethoscope, Hammer, Car, Home } from "lucide-react";

const industries = [
  {
    name: "Restaurants & Food Service",
    description: "Take reservations, handle takeout orders, answer menu questions",
    icon: Utensils,
    example: "\"Hi, I'd like to make a reservation for 4 people at 7pm tonight\"",
    color: "text-orange-500"
  },
  {
    name: "Salons & Spas",
    description: "Book appointments, handle cancellations, answer service questions",
    icon: Scissors,
    example: "\"Do you have any openings for a haircut this week?\"",
    color: "text-pink-500"
  },
  {
    name: "Medical & Dental",
    description: "Schedule appointments, verify insurance, handle basic inquiries",
    icon: Stethoscope,
    example: "\"I need to schedule my annual checkup\"",
    color: "text-blue-500"
  },
  {
    name: "Contractors & Trades",
    description: "Book estimates, schedule service calls, answer pricing questions",
    icon: Hammer,
    example: "\"I need a quote for bathroom renovation\"",
    color: "text-yellow-600"
  },
  {
    name: "Auto Services",
    description: "Schedule repairs, book maintenance, handle service inquiries",
    icon: Car,
    example: "\"My car needs an oil change - when's your next opening?\"",
    color: "text-green-500"
  },
  {
    name: "Real Estate",
    description: "Schedule showings, answer property questions, capture leads",
    icon: Home,
    example: "\"I'd like to schedule a viewing for the house on Oak Street\"",
    color: "text-purple-500"
  }
];

const IndustrySection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Perfect for Your Industry
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Belio AI adapts to your business type and handles industry-specific customer requests
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => {
            const IconComponent = industry.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-6 shadow-elegant hover:shadow-primary hover:scale-105 transition-all duration-300 border border-border/50"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-${industry.color}/10 to-${industry.color}/5 flex items-center justify-center`}>
                      <IconComponent className={`w-6 h-6 ${industry.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {industry.name}
                    </h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="bg-muted/50 rounded-lg p-3 border-l-4 border-primary/30">
                    <p className="text-sm text-muted-foreground italic">
                      "{industry.example}"
                    </p>
                    <p className="text-xs text-primary mt-1 font-medium">
                      ✓ Handled automatically by your AI
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-subtle rounded-full border border-border/50">
            <span className="text-sm font-medium text-muted-foreground">
              Don't see your industry? Our AI adapts to any business type.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustrySection;