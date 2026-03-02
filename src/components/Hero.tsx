import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  return (
    <section className="relative w-full aspect-video max-h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
    </section>
  );
};

export default Hero;