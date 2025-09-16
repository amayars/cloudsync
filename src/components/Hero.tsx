import { Button } from "@/components/ui/button";
import heroIllustration from "@/assets/hero-illustration.jpg"; // you can replace this with your actual background image
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: `url(${heroIllustration})` }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70"></div>

      {/* Content */}
      <div className="relative container mx-auto px-6 text-center text-white z-10">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in">
          Play as Big as Your Dream
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/90 max-w-3xl mx-auto animate-slide-up">
          Collaborate with your team and access your files from anywhere in the world.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
          <Button
            variant="hero"
            size="lg"
            className= "bg-blue-500 text-white hover:bg-blue-600"
            onClick={() => navigate("/signup")}
          >
            Start Free Trial
          </Button>

          <Button
            variant="outline-hero"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-black"
            onClick={() => navigate("/demo")}
          >
            Book a Demo
          </Button>
        </div>
      </div>

      {/* Optional floating decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse delay-300"></div>
      <div className="absolute top-1/3 right-20 w-16 h-16 bg-purple-500/20 rounded-full animate-pulse delay-700"></div>
    </section>
  );
};

export default Hero;
