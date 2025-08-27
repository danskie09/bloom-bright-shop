import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-rose-primary to-sage-primary rounded-full"></div>
          <h1 className="text-2xl font-playfair font-bold text-foreground">
            Bloom & Bright
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-rose-primary transition-colors font-inter">
            Home
          </a>
          <a href="#about" className="text-foreground hover:text-rose-primary transition-colors font-inter">
            About
          </a>
          <a href="#arrangements" className="text-foreground hover:text-rose-primary transition-colors font-inter">
            Arrangements
          </a>
          <a href="#contact" className="text-foreground hover:text-rose-primary transition-colors font-inter">
            Contact
          </a>
        </nav>
        
        <Button className="bg-rose-primary hover:bg-rose-primary/90 text-white font-inter">
          Order Now
        </Button>
      </div>
    </header>
  );
};

export default Header;