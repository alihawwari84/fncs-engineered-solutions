import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Building, Target, Eye, Users, Calendar, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-surface-dark to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-slide-up">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              About <span className="text-gradient">FNCS</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Engineering Excellence Since 2018. We are a leading engineering consultancy 
              firm dedicated to delivering innovative solutions with cutting-edge technology.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                FNCS (Engineering Consultancy Services) was established in 2018 with a vision 
                to provide world-class engineering solutions. Located in the heart of Amman, 
                Jordan, we have grown to become a trusted partner for clients across various sectors.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Our team of experienced engineers and consultants brings together decades 
                of expertise in mechanical, electrical, and sustainable engineering practices. 
                We pride ourselves on our commitment to innovation, quality, and client satisfaction.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="engineering-card p-4 rounded-lg">
                  <Calendar className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground">Established</h3>
                  <p className="text-muted-foreground">2018</p>
                </div>
                <div className="engineering-card p-4 rounded-lg">
                  <MapPin className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold text-foreground">Location</h3>
                  <p className="text-muted-foreground">Amman, Jordan</p>
                </div>
              </div>
            </div>
            
            <div className="engineering-card p-8 rounded-lg">
              <Building className="h-16 w-16 text-primary mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-center text-foreground mb-4">
                FNCS at a Glance
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Projects Completed</span>
                  <span className="font-semibold text-foreground">150+</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Happy Clients</span>
                  <span className="font-semibold text-foreground">250+</span>
                </div>
                <div className="flex justify-between border-b border-border pb-2">
                  <span className="text-muted-foreground">Awards Won</span>
                  <span className="font-semibold text-foreground">120+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Client Reviews</span>
                  <span className="font-semibold text-foreground">300+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-surface-dark/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Mission & Vision
            </h2>
            <p className="text-xl text-muted-foreground">
              Guided by our core values and commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="engineering-card p-8 rounded-lg text-center">
              <Target className="h-16 w-16 text-primary mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To retain highest standards of providing engineered solutions, up-to-date 
                technologies and creativity driven by adding values to our customers and 
                environment. To build up the spirit of team, working as one soul, achieving 
                the highest level of coordination, cooperation and efficiency.
              </p>
            </div>

            {/* Vision */}
            <div className="engineering-card p-8 rounded-lg text-center">
              <Eye className="h-16 w-16 text-primary mb-6 mx-auto" />
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                We are guided by engineering excellence values offered to satisfy our 
                customers' needs. We are targeting to go beyond the client's expectation, 
                expecting challenges, providing efficient professional solutions compatible 
                with engineering values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that drive our success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="engineering-card p-6 rounded-lg">
                <Users className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  We strive for the highest standards in every project, ensuring quality 
                  and precision in all our engineering solutions.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="engineering-card p-6 rounded-lg">
                <Building className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We embrace cutting-edge technology and creative solutions to meet 
                  the evolving needs of our clients and industry.
                </p>
              </div>
            </div>

            <div className="text-center">
              <div className="engineering-card p-6 rounded-lg">
                <Target className="h-12 w-12 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold text-foreground mb-3">Integrity</h3>
                <p className="text-muted-foreground">
                  We maintain transparency, honesty, and ethical practices in all 
                  our professional relationships and project deliveries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;