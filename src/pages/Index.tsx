import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesSlider from "@/components/ServicesSlider";
import NewsSection from "@/components/NewsSection";
import ServicesDetailSection from "@/components/ServicesDetailSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <ServicesSlider />
      <NewsSection />
      <ServicesDetailSection />
      <Footer />
    </div>
  );
};

export default Index;
