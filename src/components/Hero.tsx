import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-engineering.jpg";

const Hero = () => {
  const highlights = [
    "150+ Successful Projects",
    "Engineering Excellence",
    "Innovative Solutions"
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Engineering Excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            WE WORK FOR YOUR{" "}
            <span className="text-gradient">SUCCESS</span>{" "}
            IN REAL
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            FNCS Engineering Consultancy delivers innovative engineering solutions 
            with excellence, creativity, and cutting-edge technology since 2018.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="flex items-center space-x-2 text-foreground animate-engineering-pulse"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{highlight}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 engineering-glow"
            >
              <Link to="/services">
                Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              <Link to="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;