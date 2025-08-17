import { Phone, Calendar, MessageSquare, Clock, Shield, FileText, Users, Bell } from "lucide-react";

const features = [
  { 
    title: "Never Lose Another Customer to Voicemail", 
    description: "Your AI answers every call instantly, even when you're busy with other customers or closed for the day.",
    icon: Phone,
    color: "text-primary"
  },
  { 
    title: "Turn Every Call Into Revenue - Even at 2AM", 
    description: "Books appointments automatically into your existing system. Works with Google Calendar, Outlook, Square, and 50+ booking platforms.",
    icon: Calendar,
    color: "text-secondary"
  },
  { 
    title: "Handle Changes Without Lifting a Finger", 
    description: "Customers can reschedule or cancel on their own. Your AI updates everything automatically, no staff time wasted.",
    icon: Clock,
    color: "text-accent"
  },
  { 
    title: "Answer Common Questions So You Don't Have To", 
    description: "\"What are your prices?\" \"Are you open Sunday?\" \"Do you take insurance?\" Your AI handles it all with your custom responses.",
    icon: MessageSquare,
    color: "text-primary"
  },
  { 
    title: "Know Exactly What Each Customer Wants", 
    description: "Get detailed summaries of every call with customer intent, contact info, and follow-up actions needed.",
    icon: FileText,
    color: "text-secondary"
  },
  { 
    title: "Reduce No-Shows by 60%", 
    description: "Automatic SMS and email reminders keep your schedule full and your revenue predictable.",
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
              Stop Leaving Money on the Table
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every feature designed to capture more customers and grow your small business revenue
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