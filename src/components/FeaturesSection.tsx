import { Phone, Calendar, MessageSquare, Clock, Shield, FileText, Users, Bell } from "lucide-react";

const features = [
  { 
    title: "24/7 Call Answering", 
    description: "Never miss a client inquiry, day or night.",
    icon: Phone,
    color: "text-primary"
  },
  { 
    title: "Live Appointment Booking", 
    description: "Instantly books into your existing calendar or booking system like Google Calendar, Outlook, Calendly, or any platform you use.",
    icon: Calendar,
    color: "text-secondary"
  },
  { 
    title: "Rescheduling & Cancellations", 
    description: "Handles changes automatically without human intervention.",
    icon: Clock,
    color: "text-accent"
  },
  { 
    title: "Customer Query Handling", 
    description: "Answers common questions about your services, pricing, and availability automatically.",
    icon: MessageSquare,
    color: "text-primary"
  },
  { 
    title: "Call Summaries", 
    description: "Receive detailed call summaries including caller intent and follow-ups.",
    icon: FileText,
    color: "text-secondary"
  },
  { 
    title: "Multi-Location & Team Routing", 
    description: "Automatically routes calls to the right team member or location for fast, accurate service.",
    icon: Users,
    color: "text-accent"
  },
  { 
    title: "Automated Reminders", 
    description: "Sends SMS/email reminders to reduce no-shows and keep your schedule full.",
    icon: Bell,
    color: "text-primary"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Top Features
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