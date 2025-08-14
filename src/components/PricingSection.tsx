import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  { 
    plan: "Starter", 
    price: "$199/mo", 
    description: "Up to 200 calls/month",
    features: [
      "200 calls per month",
      "Basic call answering",
      "Calendar integration",
      "Email support"
    ]
  },
  { 
    plan: "Pro", 
    price: "$499/mo", 
    description: "Up to 500 calls/month",
    features: [
      "500 calls per month",
      "Advanced call handling",
      "CRM integration",
      "Priority support",
      "Analytics dashboard"
    ],
    popular: true
  },
  { 
    plan: "Premium", 
    price: "$799/mo", 
    description: "Unlimited calls",
    features: [
      "Unlimited calls",
      "Multi-location support",
      "Dedicated account manager",
      "Custom integrations"
    ]
  }
];

const PricingSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Pricing</h2>
          <p className="text-lg text-muted-foreground">
            Choose the plan that fits your business
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-background rounded-lg p-6 border-2 ${
                plan.popular ? 'border-primary' : 'border-border'
              }`}
            >
              {plan.popular && (
                <div className="text-center mb-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    Popular
                  </span>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">{plan.plan}</h3>
                  <div className="text-3xl font-bold mb-2">{plan.price}</div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant={plan.popular ? "default" : "outline"} 
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