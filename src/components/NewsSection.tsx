import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const NewsSection = () => {
  return (
    <section className="py-20 bg-surface-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Featured News */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Engineering Excellence Since 2018
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              We are proud to announce that FNCS has been recognized as one of the leading 
              engineering consultancy firms in Jordan. Our commitment to innovation and 
              quality has driven both personal and professional growth within our team.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our expertise in mechanical and electrical engineering, combined with our 
              dedication to sustainable building solutions, has positioned us at the 
              forefront of the industry.
            </p>
            <Button 
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/about">
                LEARN MORE ABOUT US
              </Link>
            </Button>
          </div>

          {/* Right Column - Stats/Info */}
          <div className="bg-background border border-border rounded-lg p-8">
            <h4 className="text-xl font-semibold text-foreground mb-6">
              Why Choose FNCS?
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h5 className="font-medium text-foreground">150+ Projects Completed</h5>
                  <p className="text-sm text-muted-foreground">Across Jordan and the Middle East</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h5 className="font-medium text-foreground">250+ Satisfied Clients</h5>
                  <p className="text-sm text-muted-foreground">Trust our engineering expertise</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                <div>
                  <h5 className="font-medium text-foreground">Award-Winning Team</h5>
                  <p className="text-sm text-muted-foreground">Industry recognition for excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
