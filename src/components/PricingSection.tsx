import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    tagline: "Essentials",
    setup_fee: "$0",
    monthly_fee: "$199/mo",
    included_minutes: "200 minutes",
    extra_minute_cost: "$0.85/min",
    features: [
      "24/7 Call Answering & Booking",
      "Calendar Integration",
      "Answer FAQs about your services"
    ],
    cta: { label: "Get Started", href: "/signup/starter" },
    popular: false
  },
  {
    name: "Pro",
    tagline: "For Growing Teams",
    setup_fee: "$500",
    monthly_fee: "$399/mo",
    included_minutes: "500 minutes",
    extra_minute_cost: "$0.60/min",
    features: [
      "Everything in Starter",
      "Custom Dashboard",
      "SMS/Email Reminders",
      "Call Transcripts & Recordings"
    ],
    cta: { label: "Get Started", href: "/signup/pro" },
    popular: false
  },
  {
    name: "Premium",
    tagline: "Best Value — Built for Scaling",
    setup_fee: "$1600",
    monthly_fee: "$799/mo",
    included_minutes: "Pay-as-you-go",
    extra_minute_cost: "$0.25/min",
    features: [
      "Everything in Pro",
      "Rescheduling & Cancellations",
      "CRM Integrations (HubSpot, GoHighLevel, ServiceTitan etc)",
      "Dedicated Account Manager & SLA Support"
    ],
    cta: { label: "Get Premium", href: "/signup/premium" },
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
                  <h3 className="text-2xl font-bold text-foreground mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {plan.tagline}
                  </p>
                  <div className="space-y-1 mb-4">
                    <div className="text-sm text-muted-foreground">
                      Setup: {plan.setup_fee}
                    </div>
                    <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                      {plan.monthly_fee}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {plan.included_minutes}
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