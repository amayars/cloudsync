import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Free Plan",
      price: "$0",
      period: "/month",
      description: "Perfect for individuals getting started",
      storage: "5GB storage",
      features: [
        "5GB secure storage",
        "Basic file sharing",
        "2 device sync",
        "Email support",
        "Basic encryption"
      ],
      buttonText: "Choose Plan",
      popular: false
    },
    {
      name: "Pro Plan",
      price: "$9",
      period: "/month",
      description: "Ideal for professionals and small teams",
      storage: "1TB storage",
      features: [
        "1TB secure storage",
        "Advanced sharing controls",
        "Unlimited device sync",
        "Priority support",
        "Advanced encryption",
        "Team collaboration tools",
        "Version history"
      ],
      buttonText: "Choose Plan",
      popular: true
    },
    {
      name: "Business Plan",
      price: "$29",
      period: "/month",
      description: "Built for growing businesses and teams",
      storage: "Unlimited storage",
      features: [
        "Unlimited secure storage",
        "Enterprise-grade security",
        "Advanced admin controls",
        "24/7 phone support",
        "SSO integration",
        "Advanced analytics",
        "Custom branding",
        "API access"
      ],
      buttonText: "Choose Plan",
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your needs. All plans include our core security features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card p-8 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border ${
                plan.popular ? 'border-primary ring-2 ring-primary/20' : 'border-border'
              }`}
              style={{animationDelay: `${index * 200}ms`}}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-card-foreground mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-card-foreground">{plan.price}</span>
                  <span className="text-muted-foreground text-lg">{plan.period}</span>
                </div>
                <p className="text-primary font-semibold">{plan.storage}</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-card-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button 
                variant={plan.popular ? "hero" : "outline"} 
                size="lg" 
                className="w-full"
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 30-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;