import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ServicesSlider from "@/components/ServicesSlider";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
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

const Services = () => {
  const services = [
    {
      icon: Cpu,
      title: "Mechanical Engineering",
      description: "Comprehensive mechanical systems design, HVAC solutions, plumbing systems, and fire protection systems for commercial and residential buildings.",
      features: [
        "HVAC System Design & Analysis",
        "Plumbing & Drainage Systems",
        "Fire Protection & Safety Systems",
        "Energy-Efficient Solutions"
      ]
    },
    {
      icon: Zap,
      title: "Electrical Engineering",
      description: "Advanced electrical solutions including power distribution, lighting design, automation systems, and renewable energy integration.",
      features: [
        "Power Distribution Systems",
        "Lighting Design & Control",
        "Building Automation",
        "Renewable Energy Solutions"
      ]
    },
    {
      icon: Eye,
      title: "Site Supervision, QA/QC, Cost and Quantity Survey",
      description: "Professional oversight ensuring quality control, compliance monitoring, and accurate cost management throughout project lifecycle.",
      features: [
        "Quality Assurance & Control",
        "Construction Supervision",
        "Cost Management",
        "Compliance Monitoring"
      ]
    },
    {
      icon: TestTube,
      title: "Projects Testing and Commissioning",
      description: "Comprehensive testing protocols and commissioning services ensuring optimal system performance and reliability.",
      features: [
        "System Performance Testing",
        "Equipment Commissioning",
        "Performance Validation",
        "Operational Training"
      ]
    },
    {
      icon: TrendingUp,
      title: "Value Engineering, Design Audit & Peer Review",
      description: "Cost optimization and design validation services to enhance project value while maintaining quality standards.",
      features: [
        "Design Optimization",
        "Cost-Benefit Analysis",
        "Peer Review Services",
        "Risk Assessment"
      ]
    },
    {
      icon: FolderKanban,
      title: "Project Management",
      description: "End-to-end project management services ensuring timely delivery, budget compliance, and stakeholder coordination.",
      features: [
        "Project Planning & Scheduling",
        "Resource Management",
        "Risk Management",
        "Stakeholder Coordination"
      ]
    },
    {
      icon: Leaf,
      title: "Sustainable Buildings",
      description: "Green building solutions focused on environmental sustainability, energy efficiency, and LEED certification support.",
      features: [
        "Green Building Design",
        "Energy Modeling",
        "LEED Certification Support",
        "Environmental Impact Assessment"
      ]
    },
    {
      icon: Building,
      title: "Building Information Modeling (BIM)",
      description: "Advanced BIM services for enhanced project visualization, coordination, and lifecycle management.",
      features: [
        "3D Modeling & Visualization",
        "Clash Detection & Resolution",
        "4D/5D BIM Implementation",
        "Facility Management Support"
      ]
    },
    {
      icon: FileText,
      title: "Shop Drawings",
      description: "Detailed technical drawings and documentation for fabrication, installation, and construction processes.",
      features: [
        "Technical Drawing Services",
        "As-Built Documentation",
        "Installation Details",
        "Fabrication Drawings"
      ]
    },
    {
      icon: Calculator,
      title: "Quantity Surveying",
      description: "Accurate cost estimation, budget planning, and financial management services throughout project lifecycle.",
      features: [
        "Cost Estimation",
        "Budget Planning",
        "Tender Documentation",
        "Contract Administration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-surface-dark to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Comprehensive engineering consultancy services delivering innovative solutions 
              with cutting-edge technology and professional excellence.
            </p>
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground engineering-glow"
            >
              <Link to="/contact">Get a Quote <ArrowRight className="ml-2 h-5 w-5" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Slider */}
      <ServicesSlider />

      {/* Detailed Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Detailed <span className="text-gradient">Service Overview</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of engineering services with detailed features and capabilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="engineering-card p-8 rounded-lg hover:engineering-glow transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-surface-dark/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let our experienced team help you achieve your engineering goals with 
            innovative solutions and professional excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground engineering-glow"
            >
              <Link to="/contact">Contact Us Today</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/projects">View Our Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;