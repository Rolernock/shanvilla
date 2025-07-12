import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Mail, Clock, Car, Shield } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-primary/5"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Ready to experience the finest hospitality at Shanvilla Hotel? 
            Contact us today to make your reservation.
          </p>
        </div>
        
        {/* Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-warm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                    <p className="text-muted-foreground">0111427894</p>
                    <p className="text-sm text-muted-foreground">Available 24/7 for reservations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">Murang'a - Kenol Road</p>
                    <p className="text-sm text-muted-foreground">
                      Next to Maragua Police Station<br />
                      Opposite Murang'a County Creameries
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Reception Hours</h4>
                    <p className="text-muted-foreground">24/7 Front Desk Service</p>
                    <p className="text-sm text-muted-foreground">Always here to assist you</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-border">
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={() => window.open('tel:0111427894', '_self')}
                >
                  <Phone className="w-5 h-5" />
                  Call Now to Book
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Why Choose Us */}
          <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-warm">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-8">Why Choose Shanvilla?</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Safe & Secure Location</h4>
                    <p className="text-sm text-muted-foreground">Next to police station</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Car className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Convenient Access</h4>
                    <p className="text-sm text-muted-foreground">Easy to find location</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">24/7 Service</h4>
                    <p className="text-sm text-muted-foreground">Round-the-clock assistance</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">Modern Amenities</h4>
                    <p className="text-sm text-muted-foreground">All comforts you need</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-gradient-warm rounded-xl border border-primary/20">
                <h4 className="font-semibold text-foreground mb-2">Special Offer</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Call today and mention this website for exclusive rates and complimentary upgrades!
                </p>
                <Button variant="elegant" className="w-full">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Book Your Perfect Stay Today
            </h3>
            <p className="text-white/90 mb-8 text-lg">
              Experience the warmth of Kenyan hospitality at its finest
            </p>
            <Button 
              variant="elegant" 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => window.open('tel:0111427894', '_self')}
            >
              <Phone className="w-5 h-5" />
              Call 0111427894 Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;