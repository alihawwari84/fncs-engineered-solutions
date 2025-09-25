import { Building2, Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    "Mechanical Engineering",
    "Electrical Engineering", 
    "Project Management",
    "BIM Services",
    "Sustainable Buildings",
    "Value Engineering"
  ];

  return (
    <footer className="bg-surface-darker border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Building2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">FNCS</span>
            </div>
            <p className="text-muted-foreground">
              Engineering Consultancy Services delivering excellence since 2018. 
              We provide innovative solutions with cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              <div className="p-2 bg-surface-light rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="p-2 bg-surface-light rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
              <div className="p-2 bg-surface-light rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="text-muted-foreground text-sm">
                    Makkah Street<br />
                    Amman, Jordan
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground text-sm">07 9564 7614</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-muted-foreground text-sm">info@fncs-jo.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 FNCS Engineering Consultancy. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-2 md:mt-0">
              Established 2018 | Excellence in Engineering
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;