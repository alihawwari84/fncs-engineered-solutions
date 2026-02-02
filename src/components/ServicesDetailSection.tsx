import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import servicesImage from "@/assets/services-overview.jpg";

const ServicesDetailSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Engineering Solutions for Tomorrow
          </h2>
          <h3 className="text-xl text-primary font-medium">OUR SERVICES</h3>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">
                Mechanical Engineering Services
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                At FNCS, we deliver comprehensive mechanical engineering solutions that 
                meet the highest industry standards. Our team designs HVAC systems, 
                plumbing networks, and fire protection systems with precision and 
                efficiency. We leverage cutting-edge technology to ensure optimal 
                performance and energy efficiency in every project.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">
                Electrical Engineering Services
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                We offer advanced electrical engineering solutions for commercial, 
                industrial, and residential projects. Our expertise spans power 
                distribution, lighting design, low current systems, and renewable 
                energy integration. Every design prioritizes safety, sustainability, 
                and cost-effectiveness.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-primary mb-3">
                BIM & Project Management
              </h4>
              <p className="text-muted-foreground leading-relaxed">
                FNCS provides end-to-end BIM modeling and project management services. 
                Our digital approach enables clash detection, streamlined scheduling, 
                and accurate cost estimation. We ensure your projects are completed 
                on time, within budget, and to the highest quality standards.
              </p>
            </div>

            <Button 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link to="/services">
                VIEW ALL SERVICES
              </Link>
            </Button>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <img 
              src={servicesImage} 
              alt="FNCS Engineering Services" 
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesDetailSection;
