import { Star } from "lucide-react";
import sarahAvatar from "@/assets/testimonial-sarah.jpg";
import mikeAvatar from "@/assets/testimonial-mike.jpg";
import lisaAvatar from "@/assets/testimonial-lisa.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "CloudSync transformed how our team collaborates. The seamless file sharing and real-time editing features are game-changers for our productivity.",
      name: "Sarah M.",
      role: "Product Manager",
      avatar: sarahAvatar
    },
    {
      quote: "Finally, a cloud storage solution that prioritizes security without sacrificing usability. Our sensitive client data has never been safer.",
      name: "Mike R.",
      role: "Tech Lead",
      avatar: mikeAvatar
    },
    {
      quote: "The best investment we've made for our remote team. CloudSync keeps everyone connected and our files perfectly synchronized across all devices.",
      name: "Lisa K.",
      role: "CEO",
      avatar: lisaAvatar
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Trusted by Teams Worldwide
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their workflow with CloudSync.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-soft transition-all duration-300 transform hover:-translate-y-2 animate-slide-up border border-border"
              style={{animationDelay: `${index * 200}ms`}}
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-card-foreground leading-relaxed mb-6 text-lg">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={`${testimonial.name} profile picture`}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-muted-foreground text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;