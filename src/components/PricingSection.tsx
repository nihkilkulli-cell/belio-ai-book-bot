import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  { 
    plan: "Starter", 
    price: "$199/mo", 
    description: "Up to 200 calls/month. Perfect for small businesses starting with AI.",
    features: [
      "200 calls per month",
      "Basic call answering",
      "Calendar integration",
      "Email support",
      "Standard voice"
    ],
    popular: false
  },
  { 
    plan: "Pro", 
    price: "$1499/mo", 
    description: "Up to 500 calls/month, CRM integration, and custom voice options.",
    features: [
      "500 calls per month",
      "Advanced call handling",
      "CRM integration",
      "Custom voice options",
      "Priority support",
      "Analytics dashboard"
    ],
    popular: true
  },
  { 
    plan: "Premium", 
    price: "$799/mo", 
    description: "Unlimited calls, multi-location support, advanced workflows, and VIP onboarding.",
    features: [
      "Unlimited calls",
      "Multi-location support",
      "Advanced workflows",
      "VIP onboarding",
      "Dedicated account manager",
      "Custom integrations",
      "White-label options"
    ],
    popular: false
  }
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="bg-gradient-secondary bg-clip-text text-transparent">
              Simple Pricing
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the plan that fits your business size. All plans include setup and training.
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
                    {plan.plan}
                  </h3>
                  <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
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
                >
                  Get Started
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