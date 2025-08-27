import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-rose-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
              Visit Our Shop
            </h2>
            <p className="text-lg font-inter text-muted-foreground">
              Come see our beautiful selection in person or get in touch to discuss 
              your floral needs. We're here to make your vision bloom.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-foreground mb-6">
                  Store Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-rose-primary text-xl">📍</span>
                    <div>
                      <p className="font-inter font-medium text-foreground">Address</p>
                      <p className="font-inter text-muted-foreground">
                        123 Garden Street<br />
                        Bloom City, BC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-rose-primary text-xl">📞</span>
                    <div>
                      <p className="font-inter font-medium text-foreground">Phone</p>
                      <p className="font-inter text-muted-foreground">(555) 123-BLOOM</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-rose-primary text-xl">✉️</span>
                    <div>
                      <p className="font-inter font-medium text-foreground">Email</p>
                      <p className="font-inter text-muted-foreground">hello@bloombright.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-rose-primary text-xl">🕐</span>
                    <div>
                      <p className="font-inter font-medium text-foreground">Hours</p>
                      <p className="font-inter text-muted-foreground">
                        Mon-Fri: 8:00 AM - 7:00 PM<br />
                        Sat: 9:00 AM - 6:00 PM<br />
                        Sun: 10:00 AM - 4:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-border">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-semibold text-foreground mb-6">
                  Get In Touch
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block font-inter font-medium text-foreground mb-2">
                      Name
                    </label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-rose-primary focus:border-transparent font-inter"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-inter font-medium text-foreground mb-2">
                      Email
                    </label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-rose-primary focus:border-transparent font-inter"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block font-inter font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-rose-primary focus:border-transparent font-inter resize-none"
                      placeholder="Tell us about your floral needs..."
                    ></textarea>
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-rose-primary hover:bg-rose-primary/90 text-white font-inter font-medium py-3"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;