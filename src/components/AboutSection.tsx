import { Card, CardContent } from "@/components/ui/card";
import { Wifi, UtensilsCrossed, Clock, Bed, Car, Shield } from "lucide-react";

const features = [
  {
    icon: Bed,
    title: "Modern Style Rooms",
    description: "Elegantly designed rooms with contemporary furnishings and comfort amenities"
  },
  {
    icon: UtensilsCrossed,
    title: "Free Room Service",
    description: "24/7 complimentary room service to cater to all your dining needs"
  },
  {
    icon: Clock,
    title: "Late Checkout",
    description: "Flexible checkout times to accommodate your travel schedule"
  },
  {
    icon: Wifi,
    title: "Free Fast WiFi",
    description: "High-speed internet connectivity throughout the property"
  },
  {
    icon: Car,
    title: "Convenient Location",
    description: "Strategically located on Murang'a - Kenol Road for easy access"
  },
  {
    icon: Shield,
    title: "Safe & Secure",
    description: "Located next to Maragua Police Station for your peace of mind"
  }
];

const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Experience Excellence
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            At Shanvilla Hotel, we pride ourselves on providing exceptional hospitality 
            with modern amenities and personalized service that exceeds your expectations.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto border border-primary/10">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience Shanvilla?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied guests who have made Shanvilla their home away from home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="text-lg font-semibold text-primary">Call us at: 0111427894</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;