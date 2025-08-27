const About = () => {
  return (
    <section id="about" className="py-20 bg-rose-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Crafting Beauty Since 1995
          </h2>
          <p className="text-lg font-inter text-muted-foreground mb-8 leading-relaxed">
            At Bloom & Bright, we believe every flower tells a story. Our passionate team of floral 
            designers creates stunning arrangements that capture life's most precious moments. From 
            intimate bouquets to grand celebrations, we pour our heart into every creation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🌸</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                Fresh Daily
              </h3>
              <p className="font-inter text-muted-foreground">
                Hand-selected flowers delivered fresh from local growers every morning
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-sage-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">🎨</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                Custom Design
              </h3>
              <p className="font-inter text-muted-foreground">
                Personalized arrangements tailored to your unique style and occasion
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-white">💐</span>
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                Expert Care
              </h3>
              <p className="font-inter text-muted-foreground">
                Professional handling and care tips to keep your flowers beautiful longer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;