import { Phone, Calendar, MessageSquare, Clock, Shield } from "lucide-react";

const features = [
  { 
    title: "Instant Call Answering", 
    description: "Your AI answers every call in seconds with a professional, friendly voice.",
    icon: Phone,
    color: "text-primary"
  },
  { 
    title: "Seamless Booking", 
    description: "Integrates with Google, Outlook, or Calendly to book and confirm appointments instantly.",
    icon: Calendar,
    color: "text-secondary"
  },
  { 
    title: "Rescheduling & Reminders", 
    description: "Handles cancellations and reschedules, and sends automated reminders to reduce no-shows.",
    icon: Clock,
    color: "text-accent"
  },
  { 
    title: "FAQ Handling", 
    description: "Answers customer questions like hours, location, pricing, and services.",
    icon: MessageSquare,
    color: "text-primary"
  },
  { 
    title: "24/7 Availability", 
    description: "Works after hours, weekends, and holidays — never lose a lead to voicemail again.",
    icon: Shield,
    color: "text-secondary"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Powerful Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to never miss a booking and delight your customers
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-primary hover:scale-105 transition-all duration-300 border border-border/50"
              >
                <div className="space-y-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${feature.color}/10 to-${feature.color}/5 flex items-center justify-center`}>
                    <IconComponent className={`w-7 h-7 ${feature.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
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

export default FeaturesSection;