import { Link } from "react-router-dom";
import mechanicalIcon from "@/assets/mechanical.png";
import {
  Cpu,
  Zap,
  Eye,
  TestTube,
  TrendingUp,
  FolderKanban,
  Leaf,
  Building,
} from "lucide-react";

const ServicesSlider = () => {
  const services = [
    {
      icon: Cpu,
      title: "MECHANICAL ENGINEERING",
      description: "Comprehensive mechanical systems design and implementation with cutting-edge technology.",
      useImage: true,
    },
    {
      icon: Zap,
      title: "ELECTRICAL ENGINEERING",
      description: "Advanced electrical solutions for commercial and industrial applications.",
      useImage: false,
    },
    {
      icon: Eye,
      title: "SITE SUPERVISION & QA/QC",
      description: "Professional oversight ensuring quality and compliance throughout project lifecycle.",
      useImage: false,
    },
    {
      icon: TestTube,
      title: "TESTING & COMMISSIONING",
      description: "Thorough testing protocols and commissioning services for optimal system performance.",
      useImage: false,
    },
    {
      icon: TrendingUp,
      title: "VALUE ENGINEERING",
      description: "Cost optimization without compromising quality through innovative engineering solutions.",
      useImage: false,
    },
    {
      icon: FolderKanban,
      title: "PROJECT MANAGEMENT",
      description: "End-to-end project management ensuring timely delivery and budget compliance.",
      useImage: false,
    },
    {
      icon: Leaf,
      title: "SUSTAINABLE BUILDINGS",
      description: "Green building solutions focused on environmental sustainability and energy efficiency.",
      useImage: false,
    },
    {
      icon: Building,
      title: "BIM MODELING",
      description: "Advanced BIM services for enhanced project visualization and coordination.",
      useImage: false,
    },
  ];

  return (
    <section className="bg-background border-t border-border">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <Link
            key={index}
            to="/services"
            className="group p-8 border-r border-b border-border hover:bg-surface-light transition-all duration-300 relative"
          >
            {/* Icon */}
            <div className="mb-6">
              {service.useImage ? (
                <img 
                  src={mechanicalIcon} 
                  alt={service.title} 
                  className="h-10 w-10 opacity-70 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <service.icon className="h-10 w-10 text-muted-foreground group-hover:text-foreground transition-colors" strokeWidth={1} />
              )}
            </div>

            {/* FNCS Label */}
            <p className="text-primary text-xs font-medium tracking-wider mb-2">
              FNCS
            </p>

            {/* Title */}
            <h3 className="text-foreground font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
              {service.title}
            </h3>

            {/* Underline accent */}
            <div className="w-8 h-0.5 bg-primary mb-4 group-hover:w-12 transition-all duration-300" />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesSlider;
