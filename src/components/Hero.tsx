import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20"></div>
      
      {/* Content */}
      <div className="relative container mx-auto px-6 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Simple, Secure, Smart Cloud Storage
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-slide-up">
            Collaborate with your team and access your files from anywhere in the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
            <Button variant="hero" size="lg" className="bg-white text-primary hover:bg-white/90">
              Start Free Trial
            </Button>
            <Button variant="outline-hero" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Book a Demo
            </Button>
          </div>
          
          {/* Hero Illustration */}
          <div className="relative max-w-3xl mx-auto animate-fade-in">
            <div className="absolute inset-0 bg-white/10 rounded-3xl backdrop-blur-sm"></div>
            <img 
              src={heroIllustration} 
              alt="CloudSync Dashboard - Modern cloud storage interface"
              className="relative w-full h-auto rounded-3xl shadow-soft"
            />
          </div>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-12 h-12 bg-white/10 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/3 right-20 w-8 h-8 bg-white/10 rounded-full animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;