import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ammanComplexImage from "@/assets/project-amman-complex.jpg";
import medicalCenterImage from "@/assets/project-medical-center.jpg";
import sustainableOfficeImage from "@/assets/project-sustainable-office.jpg";
import manufacturingImage from "@/assets/project-manufacturing.jpg";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Mechanical", "Electrical", "BIM", "Sustainable", "Management"];

  const projects = [
    {
      id: 1,
      title: "Amman Business Complex",
      category: "Mechanical",
      location: "Amman, Jordan",
      year: "2023",
      client: "Real Estate Development Co.",
      description: "Complete HVAC system design and implementation for a 25-story commercial building with advanced climate control and energy-efficient solutions. Featured advanced air distribution systems and smart building integration.",
      services: ["HVAC Design", "Energy Modeling", "System Commissioning"],
      status: "Completed",
      image: ammanComplexImage,
      challenges: "Complex multi-zone climate control for mixed-use development",
      solution: "Implemented VAV system with smart controls and energy recovery"
    },
    {
      id: 2,
      title: "Jordan Medical Center",
      category: "Electrical",
      location: "Irbid, Jordan",
      year: "2023",
      client: "Healthcare Authority",
      description: "Comprehensive electrical systems including power distribution, emergency backup, medical equipment power, and advanced building automation. Critical healthcare infrastructure with 99.99% uptime requirements.",
      services: ["Power Systems", "Emergency Power", "Building Automation"],
      status: "Completed",
      image: medicalCenterImage,
      challenges: "Critical power systems for life-support equipment",
      solution: "Redundant power architecture with seamless transfer systems"
    },
    {
      id: 3,
      title: "Sustainable Office Park",
      category: "Sustainable",
      location: "Amman, Jordan", 
      year: "2024",
      client: "Green Development Ltd.",
      description: "LEED-certified office complex with renewable energy integration, rainwater harvesting, and advanced sustainability features. Targeting LEED Platinum certification with innovative green technologies.",
      services: ["Green Building Design", "LEED Certification", "Energy Systems"],
      status: "In Progress",
      image: sustainableOfficeImage,
      challenges: "Achieving net-zero energy consumption in desert climate",
      solution: "Integrated solar, geothermal, and smart building management systems"
    },
    {
      id: 4,
      title: "Industrial Manufacturing Facility",
      category: "Management",
      location: "Zarqa, Jordan",
      year: "2022",
      client: "Manufacturing Industries Co.",
      description: "End-to-end project management for large-scale manufacturing facility including MEP systems coordination and quality control. Managed $50M industrial development project with complex technical requirements.",
      services: ["Project Management", "MEP Coordination", "Quality Control"],
      status: "Completed",
      image: manufacturingImage,
      challenges: "Coordinating multiple engineering disciplines on fast-track schedule",
      solution: "Advanced BIM coordination and integrated project delivery approach"
    },
    {
      id: 5,
      title: "Smart Residential Complex",
      category: "BIM",
      location: "Amman, Jordan",
      year: "2024",
      client: "Smart Living Developments",
      description: "Advanced BIM implementation for residential complex with 3D modeling, clash detection, and lifecycle management solutions. Pioneering smart home integration with building systems.",
      services: ["BIM Modeling", "Clash Detection", "Facility Management"],
      status: "In Progress",
      image: sustainableOfficeImage,
      challenges: "Complex MEP coordination in high-density residential development",
      solution: "5D BIM modeling with automated clash detection and resolution"
    },
    {
      id: 6,
      title: "University Campus Expansion",
      category: "Electrical",
      location: "Amman, Jordan",
      year: "2023",
      client: "Jordan University",
      description: "Campus-wide electrical infrastructure upgrade including smart lighting systems, renewable energy integration, and grid modernization. Modernizing 40-year-old electrical infrastructure while maintaining operations.",
      services: ["Infrastructure Design", "Smart Systems", "Grid Integration"],
      status: "Completed",
      image: medicalCenterImage,
      challenges: "Upgrading live electrical systems without operational disruption",
      solution: "Phased implementation with temporary power systems and smart grid technology"
    }
  ];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-surface-dark to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Showcasing our engineering excellence through successful projects across 
              Jordan and the region. Each project represents our commitment to innovation 
              and quality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="px-4 py-2">150+ Projects Completed</Badge>
              <Badge variant="secondary" className="px-4 py-2">250+ Happy Clients</Badge>
              <Badge variant="secondary" className="px-4 py-2">120+ Awards Won</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === filter
                    ? "bg-primary text-primary-foreground"
                    : "bg-surface-light text-muted-foreground hover:bg-primary/20 hover:text-foreground"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group engineering-card rounded-lg overflow-hidden hover:engineering-glow transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className="backdrop-blur-sm"
                    >
                      {project.status}
                    </Badge>
                    <Badge variant="outline" className="backdrop-blur-sm border-white/30 text-white">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Button size="sm" variant="outline" className="backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Project Header */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Challenge & Solution */}
                  <div className="mb-4 p-3 bg-surface-light rounded-lg">
                    <div className="text-xs font-semibold text-primary mb-1">Challenge:</div>
                    <p className="text-xs text-muted-foreground mb-2">{project.challenges}</p>
                    <div className="text-xs font-semibold text-primary mb-1">Solution:</div>
                    <p className="text-xs text-muted-foreground">{project.solution}</p>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="truncate">{project.location}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span>{project.year}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      <span className="truncate">{project.client}</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Services Provided:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="outline" className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-muted-foreground">
                No projects found for the selected category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-surface-dark/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Have a Project in Mind?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let us help you bring your vision to life with our proven expertise 
            and innovative engineering solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground engineering-glow"
            >
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/services">View Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;