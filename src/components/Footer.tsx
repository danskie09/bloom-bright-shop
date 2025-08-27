const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-rose-primary to-sage-primary rounded-full"></div>
              <h3 className="text-2xl font-playfair font-bold">Bloom & Bright</h3>
            </div>
            <p className="font-inter text-background/80 leading-relaxed">
              Creating beautiful moments with nature's finest flowers. 
              Your trusted florist for over 25 years.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="#home" className="text-background/80 hover:text-rose-light transition-colors">Home</a></li>
              <li><a href="#about" className="text-background/80 hover:text-rose-light transition-colors">About Us</a></li>
              <li><a href="#arrangements" className="text-background/80 hover:text-rose-light transition-colors">Arrangements</a></li>
              <li><a href="#contact" className="text-background/80 hover:text-rose-light transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-playfair font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-background/80 hover:text-rose-light transition-colors text-2xl">📘</a>
              <a href="#" className="text-background/80 hover:text-rose-light transition-colors text-2xl">📷</a>
              <a href="#" className="text-background/80 hover:text-rose-light transition-colors text-2xl">🐦</a>
            </div>
            <p className="font-inter text-background/80 mt-4 text-sm">
              Follow us for daily flower inspiration and special offers!
            </p>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="font-inter text-background/80 text-sm">
            © 2024 Bloom & Bright. All rights reserved. Made with love and flowers.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;