import { Shield, Users, Globe } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Storage",
      description: "Your files are protected with military-grade encryption. Privacy and security are our top priorities."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Share files and collaborate seamlessly with your team. Real-time editing and commenting included."
    },
    {
      icon: Globe,
      title: "Access Anywhere",
      description: "Sync your files across all devices. Access your data from anywhere in the world, anytime."
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose CloudSync?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to store, sync, and collaborate on your files in one powerful platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 transform hover:-translate-y-2 animate-slide-up"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl mb-6">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-semibold text-card-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;