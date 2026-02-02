import heroVideo from "@/assets/hero-video.mp4";
import fncsLogo from "@/assets/fncs-logo.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Full-screen Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Dark overlay for better readability */}
        <div className="absolute inset-0 bg-background/40" />
      </div>

      {/* Centered Logo */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <img 
          src={fncsLogo} 
          alt="FNCS - First National Consulting Services" 
          className="h-24 md:h-32 w-auto mb-6 animate-fade-in-up"
        />
        <h1 className="text-2xl md:text-4xl font-light text-foreground tracking-widest animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          FIRST NATIONAL CONSULTING SERVICES
        </h1>
        <p className="text-sm md:text-base text-muted-foreground mt-4 tracking-wide animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          www.fncs-jo.com
        </p>
      </div>
    </section>
  );
};

export default Hero;
