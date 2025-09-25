import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi
} from "@/components/ui/carousel";
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

const ServicesSlider = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      icon: Cpu,
      title: "Mechanical Engineering",
      description: "Comprehensive mechanical systems design, HVAC solutions, and fire protection systems for commercial buildings."
    },
    {
      icon: Zap,
      title: "Electrical Engineering",
      description: "Advanced electrical solutions including power distribution, lighting design, and automation systems."
    },
    {
      icon: Eye,
      title: "Site Supervision & QA/QC",
      description: "Professional oversight ensuring quality control and compliance monitoring throughout project lifecycle."
    },
    {
      icon: TestTube,
      title: "Testing & Commissioning",
      description: "Comprehensive testing protocols and commissioning services ensuring optimal system performance."
    },
    {
      icon: TrendingUp,
      title: "Value Engineering",
      description: "Cost optimization and design validation services to enhance project value while maintaining quality."
    },
    {
      icon: FolderKanban,
      title: "Project Management",
      description: "End-to-end project management ensuring timely delivery, budget compliance, and coordination."
    },
    {
      icon: Leaf,
      title: "Sustainable Buildings",
      description: "Green building solutions focused on environmental sustainability and LEED certification support."
    },
    {
      icon: Building,
      title: "Building Information Modeling",
      description: "Advanced BIM services for enhanced project visualization, coordination, and lifecycle management."
    },
    {
      icon: FileText,
      title: "Shop Drawings",
      description: "Detailed technical drawings and documentation for fabrication and construction processes."
    },
    {
      icon: Calculator,
      title: "Quantity Surveying",
      description: "Accurate cost estimation, budget planning, and financial management throughout project lifecycle."
    }
  ];

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  // Auto-play functionality
  useEffect(() => {
    if (!api || isHovered) return;

    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [api, isHovered]);

  const scrollToPrevious = () => {
    api?.scrollPrev();
  };

  const scrollToNext = () => {
    api?.scrollNext();
  };

  const scrollToSlide = (index: number) => {
    api?.scrollTo(index);
  };

  return (
    <section className="py-16 bg-surface-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive engineering consultancy services delivering innovative solutions 
            with cutting-edge technology and professional excellence.
          </p>
        </div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {services.map((service, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                  <div className="h-full">
                    <div className="engineering-card p-8 rounded-xl h-full flex flex-col items-center text-center shadow-card hover:shadow-fncs transition-all duration-300 group">
                      <div className="p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                        <service.icon className="h-12 w-12 text-primary" />
                      </div>
                      
                      <h3 className="text-2xl font-bold text-foreground mb-4 leading-tight">
                        {service.title}
                      </h3>
                      
                      <p className="text-muted-foreground leading-relaxed flex-grow">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
            onClick={scrollToPrevious}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full border-primary/20 bg-background/80 backdrop-blur-sm hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all duration-300"
            onClick={scrollToNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: count }, (_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current - 1 
                  ? "bg-primary shadow-glow scale-125" 
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              onClick={() => scrollToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;