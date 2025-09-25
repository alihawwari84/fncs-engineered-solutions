import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold text-foreground hover:text-primary transition-colors"
          >
            <span className="text-gradient">FNCS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-all duration-200 hover:text-primary relative ${
                isActive("/") 
                  ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`text-sm font-medium transition-all duration-200 hover:text-primary relative ${
                isActive("/about") 
                  ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              to="/services"
              className={`text-sm font-medium transition-all duration-200 hover:text-primary relative ${
                isActive("/services") 
                  ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Services
            </Link>
            <Link
              to="/projects"
              className={`text-sm font-medium transition-all duration-200 hover:text-primary relative ${
                isActive("/projects") 
                  ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Projects
            </Link>
            
            {/* Contact Info */}
            <div className="flex items-center space-x-4 ml-6 pl-6 border-l border-border">
              <a 
                href="tel:0795647614" 
                className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-3 w-3" />
                <span>079 564 7614</span>
              </a>
              <a 
                href="mailto:info@fncs-jo.com"
                className="flex items-center space-x-1 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-3 w-3" />
                <span>info@fncs-jo.com</span>
              </a>
            </div>
            
            <Button 
              asChild 
              size="sm" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground engineering-glow"
            >
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary p-2 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden animate-fade-in-up">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-surface-dark/95 backdrop-blur-md border-t border-border rounded-b-lg">
              <Link
                to="/"
                onClick={toggleMenu}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive("/")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-surface-light"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={toggleMenu}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive("/about")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-surface-light"
                }`}
              >
                About
              </Link>
              <Link
                to="/services"
                onClick={toggleMenu}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive("/services")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-surface-light"
                }`}
              >
                Services
              </Link>
              <Link
                to="/projects"
                onClick={toggleMenu}
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive("/projects")
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-surface-light"
                }`}
              >
                Projects
              </Link>
              
              {/* Mobile Contact Info */}
              <div className="px-3 py-2 border-t border-border mt-4">
                <div className="flex flex-col space-y-2">
                  <a 
                    href="tel:0795647614" 
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    <span>079 564 7614</span>
                  </a>
                  <a 
                    href="mailto:info@fncs-jo.com"
                    className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    <span>info@fncs-jo.com</span>
                  </a>
                </div>
              </div>
              
              <div className="px-3 pt-4">
                <Button 
                  asChild 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={toggleMenu}
                >
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;