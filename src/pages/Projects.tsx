import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

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
      description: "Complete HVAC system design and implementation for a 25-story commercial building with advanced climate control and energy-efficient solutions.",
      services: ["HVAC Design", "Energy Modeling", "System Commissioning"],
      status: "Completed"
    },
    {
      id: 2,
      title: "Jordan Medical Center",
      category: "Electrical",
      location: "Irbid, Jordan",
      year: "2023",
      client: "Healthcare Authority",
      description: "Comprehensive electrical systems including power distribution, emergency backup, medical equipment power, and advanced building automation.",
      services: ["Power Systems", "Emergency Power", "Building Automation"],
      status: "Completed"
    },
    {
      id: 3,
      title: "Sustainable Office Park",
      category: "Sustainable",
      location: "Amman, Jordan", 
      year: "2024",
      client: "Green Development Ltd.",
      description: "LEED-certified office complex with renewable energy integration, rainwater harvesting, and advanced sustainability features.",
      services: ["Green Building Design", "LEED Certification", "Energy Systems"],
      status: "In Progress"
    },
    {
      id: 4,
      title: "Industrial Manufacturing Facility",
      category: "Management",
      location: "Zarqa, Jordan",
      year: "2022",
      client: "Manufacturing Industries Co.",
      description: "End-to-end project management for large-scale manufacturing facility including MEP systems coordination and quality control.",
      services: ["Project Management", "MEP Coordination", "Quality Control"],
      status: "Completed"
    },
    {
      id: 5,
      title: "Smart Residential Complex",
      category: "BIM",
      location: "Amman, Jordan",
      year: "2024",
      client: "Smart Living Developments",
      description: "Advanced BIM implementation for residential complex with 3D modeling, clash detection, and lifecycle management solutions.",
      services: ["BIM Modeling", "Clash Detection", "Facility Management"],
      status: "In Progress"
    },
    {
      id: 6,
      title: "University Campus Expansion",
      category: "Electrical",
      location: "Amman, Jordan",
      year: "2023",
      client: "Jordan University",
      description: "Campus-wide electrical infrastructure upgrade including smart lighting systems, renewable energy integration, and grid modernization.",
      services: ["Infrastructure Design", "Smart Systems", "Grid Integration"],
      status: "Completed"
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
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="engineering-card rounded-lg overflow-hidden hover:engineering-glow transition-all duration-300"
              >
                {/* Project Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <Badge 
                      variant={project.status === "Completed" ? "default" : "secondary"}
                      className="mb-2"
                    >
                      {project.status}
                    </Badge>
                    <Badge variant="outline">{project.category}</Badge>
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Project Details */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {project.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      {project.year}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="h-4 w-4 mr-2 text-primary" />
                      {project.client}
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-4">
                    <p className="text-xs font-medium text-muted-foreground mb-2">Services Provided:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
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