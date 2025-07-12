import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const galleryImages = [
  {
    src: "/lovable-uploads/988b58fb-e8e9-47f2-a7f4-abe986e660a7.png",
    alt: "Elegant dining area with modern tables and chairs",
    title: "Fine Dining Experience"
  },
  {
    src: "/lovable-uploads/bb9ad27c-0875-4798-a6b2-e28005f62e2d.png", 
    alt: "Modern bar area with wooden design and premium seating",
    title: "Premium Bar & Lounge"
  },
  {
    src: "/lovable-uploads/0a58bde5-9c41-4dc4-b1b9-1553bad6c5d1.png",
    alt: "Beautiful outdoor terrace with ambient lighting",
    title: "Outdoor Terrace"
  },
  {
    src: "/lovable-uploads/9dbb8cb3-4d1d-467c-a551-b53f97933268.png",
    alt: "Garden seating area with comfortable outdoor furniture", 
    title: "Garden Relaxation Area"
  },
  {
    src: "/lovable-uploads/426a2cb3-aba3-47b1-9c32-2a72a55f1471.png",
    alt: "Simonzi Restaurant outdoor dining space",
    title: "Restaurant Terrace"
  },
  {
    src: "/lovable-uploads/194fc820-f5e2-46cb-afb3-41bb1b3dd4f0.png",
    alt: "Hotel exterior view at night with beautiful lighting",
    title: "Evening Ambiance"
  }
];

const GallerySection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience Shanvilla
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our beautifully designed spaces, from elegant dining areas to comfortable lounges 
            and serene outdoor terraces. Every corner of Shanvilla Hotel tells a story of comfort and style.
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {galleryImages.map((image, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden hover:shadow-warm transition-all duration-500 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Featured Facilities */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dining Experience */}
          <Card className="overflow-hidden shadow-warm hover:shadow-glow transition-all duration-500 bg-gradient-warm border-border/50">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src="/lovable-uploads/988b58fb-e8e9-47f2-a7f4-abe986e660a7.png"
                  alt="Dining area"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Exquisite Dining
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Enjoy fine dining in our elegant restaurant with modern ambiance and exceptional service.
                </p>
                <Button variant="elegant" size="sm">
                  <Phone className="w-4 h-4" />
                  Reserve Table
                </Button>
              </CardContent>
            </div>
          </Card>
          
          {/* Outdoor Experience */}
          <Card className="overflow-hidden shadow-warm hover:shadow-glow transition-all duration-500 bg-gradient-warm border-border/50">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative overflow-hidden">
                <img 
                  src="/lovable-uploads/0a58bde5-9c41-4dc4-b1b9-1553bad6c5d1.png"
                  alt="Outdoor terrace"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <CardContent className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Outdoor Paradise
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Relax under the stars in our beautiful outdoor terrace with ambient lighting and comfortable seating.
                </p>
                <Button variant="elegant" size="sm">
                  <Phone className="w-4 h-4" />
                  Book Experience
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience These Beautiful Spaces?
            </h3>
            <p className="text-muted-foreground mb-6">
              Book your stay today and enjoy all the amenities Shanvilla Hotel has to offer.
            </p>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.open('tel:0111427894', '_self')}
            >
              <Phone className="w-5 h-5" />
              Call 0111427894 to Book
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;