import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import ServicesOverview from "@/components/ServicesOverview";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Stats />
      <ServicesOverview />
      
      {/* Why Choose FNCS Section */}
      <section className="py-20 bg-surface-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient">FNCS</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence and innovation makes us the preferred 
              engineering consultancy partner in Jordan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="engineering-card p-8 rounded-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Proven Track Record
                </h3>
                <p className="text-muted-foreground mb-4">
                  With 150+ successful projects and 250+ satisfied clients, 
                  we've established ourselves as a trusted engineering partner.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 6+ Years of Experience</li>
                  <li>• ISO Certified Processes</li>
                  <li>• 120+ Industry Awards</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="engineering-card p-8 rounded-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Innovation & Technology
                </h3>
                <p className="text-muted-foreground mb-4">
                  We leverage cutting-edge technology and innovative approaches 
                  to deliver superior engineering solutions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Advanced BIM Technology</li>
                  <li>• Sustainable Design Focus</li>
                  <li>• Digital Twin Solutions</li>
                </ul>
              </div>
            </div>

            <div className="text-center">
              <div className="engineering-card p-8 rounded-lg">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <ArrowRight className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Client-Focused Approach
                </h3>
                <p className="text-muted-foreground mb-4">
                  We prioritize our clients' success by exceeding expectations 
                  and delivering projects on time and within budget.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• 24/7 Client Support</li>
                  <li>• Transparent Communication</li>
                  <li>• Quality Guarantee</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Vision into Reality?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Partner with FNCS for innovative engineering solutions that exceed expectations. 
            Let's discuss your project requirements and create something exceptional together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 engineering-glow"
            >
              <Link to="/contact">
                Start Your Project <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;