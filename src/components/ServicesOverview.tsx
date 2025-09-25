import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  Cpu,
  Zap,
  Eye,
  TestTube,
  TrendingUp,
  FolderKanban,
  Leaf,
  Building,
  FileText,
  Calculator
} from "lucide-react";

const ServicesOverview = () => {
  const services = [
    {
      icon: Cpu,
      title: "Mechanical Engineering",
      description: "Comprehensive mechanical systems design and implementation with cutting-edge technology.",
    },
    {
      icon: Zap,
      title: "Electrical Engineering",
      description: "Advanced electrical solutions for commercial and industrial applications.",
    },
    {
      icon: Eye,
      title: "Site Supervision & QA/QC",
      description: "Professional oversight ensuring quality and compliance throughout project lifecycle.",
    },
    {
      icon: TestTube,
      title: "Testing & Commissioning",
      description: "Thorough testing protocols and commissioning services for optimal system performance.",
    },
    {
      icon: TrendingUp,
      title: "Value Engineering",
      description: "Cost optimization without compromising quality through innovative engineering solutions.",
    },
    {
      icon: FolderKanban,
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery and budget compliance.",
    },
    {
      icon: Leaf,
      title: "Sustainable Buildings",
      description: "Green building solutions focused on environmental sustainability and energy efficiency.",
    },
    {
      icon: Building,
      title: "Building Information Modeling",
      description: "Advanced BIM services for enhanced project visualization and coordination.",
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Engineering Solutions for Every Challenge
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide comprehensive engineering consultancy services with innovative approaches 
            and cutting-edge technology to meet your project requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="engineering-card p-6 rounded-lg hover:engineering-glow transition-all duration-300 group"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 text-center">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm text-center leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground engineering-glow"
          >
            <Link to="/services">
              View All Services <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;