import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-flowers.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/20"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
          Bloom & Bright
        </h1>
        <p className="text-xl md:text-2xl font-inter font-light mb-8 max-w-2xl mx-auto leading-relaxed">
          Creating unforgettable moments with nature's most beautiful flowers. 
          From elegant bouquets to stunning arrangements.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-rose-primary hover:bg-rose-primary/90 text-white font-inter font-medium px-8 py-4 text-lg"
          >
            Shop Arrangements
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-rose-primary font-inter font-medium px-8 py-4 text-lg"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;