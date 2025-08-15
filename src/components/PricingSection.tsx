import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    setup_fee: "$0",
    monthly_fee: "$199",
    included_minutes: 200,
    extra_minute_cost: "$0.85/min",
    features: [
      "24/7 Booking & Answering",
      "Rescheduling & Cancellations",
      "Answer FAQs about your services",
      "Integration with Google Calendar, Outlook, or Calendly",
      "Custom Dashboard",
      "Custom Call Script"
    ],
    cta: { label: "Get Started", href: "/start" },
    popular: false
  },
  {
    name: "Pro",
    setup_fee: "$500",
    monthly_fee: "$399",
    included_minutes: 500,
    extra_minute_cost: "$0.60/min",
    features: [
      "Everything in Starter",
      "Call Transcripts & Recordings",
      "Automated Reminders (SMS/Email)",
      "CRM Integrations (HubSpot, GoHighLevel, Pipedrive)"
    ],
    cta: { label: "Get Started", href: "/start" },
    popular: false
  },
  {
    name: "Premium",
    setup_fee: "$1600",
    monthly_fee: "$799",
    included_minutes: 0,
    extra_minute_cost: "$0.25/min",
    features: [
      "Everything in Starter & Pro",
      "Custom Workflows & Automations",
      "Advanced FAQ & Lead Qualification",
      "Dedicated Onboarding & SLA Support"
    ],
    cta: { label: "Get Started", href: "/book-demo" },
    popular: true
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Simple, Transparent Pricing for Your Business
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No upfront fees for Starter. Predictable monthly costs. Start getting value immediately.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-primary shadow-primary' 
                  : 'border-border/50 shadow-elegant hover:border-primary/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="space-y-1 mb-4">
                    <div className="text-sm text-muted-foreground">
                      Setup: {plan.setup_fee}
                    </div>
                    <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {plan.monthly_fee}/mo
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.included_minutes > 0 
                        ? `${plan.included_minutes} minutes included`
                        : 'Pay per minute'
                      }
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.extra_minute_cost}
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "cta" : "outline"} 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.location.href = plan.cta.href}
                >
                  {plan.cta.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;