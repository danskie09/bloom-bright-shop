import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const arrangements = [
  {
    name: "Classic Rose Bouquet",
    description: "Elegant red roses with baby's breath and eucalyptus",
    price: "$65",
    image: "🌹"
  },
  {
    name: "Spring Garden Mix",
    description: "Seasonal blooms featuring tulips, daffodils, and greenery", 
    price: "$45",
    image: "🌷"
  },
  {
    name: "Wedding Centerpiece",
    description: "Luxurious white and blush arrangement for special occasions",
    price: "$125",
    image: "💒"
  },
  {
    name: "Sympathy Wreath",
    description: "Thoughtful arrangement with white lilies and peaceful greens",
    price: "$85",
    image: "🕊️"
  },
  {
    name: "Birthday Surprise",
    description: "Vibrant mixed flowers in cheerful colors",
    price: "$55",
    image: "🎂"
  },
  {
    name: "Anniversary Special",
    description: "Romantic arrangement with premium roses and delicate accents",
    price: "$95",
    image: "💕"
  }
];

const Arrangements = () => {
  return (
    <section id="arrangements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Featured Arrangements
          </h2>
          <p className="text-lg font-inter text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collection of floral arrangements, 
            perfect for every occasion and designed to bring joy to your special moments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {arrangements.map((arrangement, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-shadow duration-300 border-border">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {arrangement.image}
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                    {arrangement.name}
                  </h3>
                  <p className="font-inter text-muted-foreground mb-4 leading-relaxed">
                    {arrangement.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-playfair font-bold text-rose-primary">
                      {arrangement.price}
                    </span>
                    <Button 
                      size="sm"
                      className="bg-rose-primary hover:bg-rose-primary/90 text-white font-inter"
                    >
                      Order Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Arrangements;