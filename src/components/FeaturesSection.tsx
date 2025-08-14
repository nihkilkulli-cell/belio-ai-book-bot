import { Phone, Calendar, MessageSquare, Clock, Shield } from "lucide-react";

const features = [
  { 
    title: "Instant Call Answering", 
    description: "Your AI answers every call in seconds with a professional, friendly voice.",
    icon: Phone
  },
  { 
    title: "Seamless Booking", 
    description: "Integrates with Google, Outlook, or Calendly to book and confirm appointments instantly.",
    icon: Calendar
  },
  { 
    title: "Rescheduling & Reminders", 
    description: "Handles cancellations and reschedules, and sends automated reminders to reduce no-shows.",
    icon: Clock
  },
  { 
    title: "FAQ Handling", 
    description: "Answers customer questions like hours, location, pricing, and services.",
    icon: MessageSquare
  },
  { 
    title: "24/7 Availability", 
    description: "Works after hours, weekends, and holidays — never lose a lead to voicemail again.",
    icon: Shield
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Features</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to never miss a booking
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div key={index} className="bg-background rounded-lg p-6 border">
                <div className="space-y-4">
                  <IconComponent className="w-8 h-8 text-primary" />
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
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