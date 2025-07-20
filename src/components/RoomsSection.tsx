import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bed, Wifi, UtensilsCrossed, Bath, Car, Phone } from 'lucide-react'
import modernRoom from '/lovable-uploads/1.jpg'

const roomFeatures = [
  { icon: Bed, label: 'King Size Bed' },
  { icon: Bath, label: 'Private Bathroom' },
  { icon: Wifi, label: 'Free WiFi' },
  { icon: UtensilsCrossed, label: 'Room Service' },
  { icon: Car, label: 'Parking' }
]

const RoomsSection = () => {
  return (
    <section className='py-20 bg-background'>
      <div className='container mx-auto px-4 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Modern Comfort Rooms
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Our thoughtfully designed rooms blend contemporary style with
            comfort, ensuring every guest enjoys a peaceful and luxurious stay.
          </p>
        </div>

        {/* Main Room Showcase */}
        <div className='max-w-6xl mx-auto'>
          <Card className='overflow-hidden shadow-warm hover:shadow-glow transition-all duration-500 bg-gradient-warm border-border/50'>
            <div className='grid lg:grid-cols-2 gap-0'>
              {/* Image */}
              <div className='relative overflow-hidden'>
                <img
                  src={modernRoom}
                  alt='Shanvilla Hotel bar area with wooden design and modern stools'
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
              </div>

              {/* Content */}
              <CardContent className='p-8 lg:p-12 flex flex-col justify-center'>
                <h3 className='text-3xl font-bold text-foreground mb-6'>
                  Deluxe Modern Room
                </h3>

                <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                  Experience the perfect blend of style and comfort in our
                  modern rooms. Each space is meticulously designed with
                  contemporary furnishings, premium amenities, and thoughtful
                  touches that make your stay memorable.
                </p>

                {/* Features Grid */}
                <div className='grid grid-cols-2 gap-4 mb-8'>
                  {roomFeatures.map((feature, index) => (
                    <div key={index} className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center'>
                        <feature.icon className='w-5 h-5 text-primary' />
                      </div>
                      <span className='text-foreground font-medium'>
                        {feature.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className='flex flex-col sm:flex-row gap-4'>
                  <Button
                    variant='elegant'
                    onClick={() => window.open('tel:0111427894', '_self')}
                    size='lg'
                    className='w-full sm:flex-1 min-w-[140px]'
                  >
                    <Phone className='w-5 h-5' />
                    Call for Rates
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Additional Benefits */}
        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div className='text-center p-6 bg-card/50 rounded-xl border border-border/30'>
            <h4 className='text-xl font-semibold text-foreground mb-3'>
              Free Room Service
            </h4>
            <p className='text-muted-foreground'>
              Enjoy complimentary 24/7 room service for all our guests
            </p>
          </div>
          <div className='text-center p-6 bg-card/50 rounded-xl border border-border/30'>
            <h4 className='text-xl font-semibold text-foreground mb-3'>
              Late Checkout
            </h4>
            <p className='text-muted-foreground'>
              Flexible checkout times to suit your travel schedule
            </p>
          </div>
          <div className='text-center p-6 bg-card/50 rounded-xl border border-border/30'>
            <h4 className='text-xl font-semibold text-foreground mb-3'>
              High-Speed WiFi
            </h4>
            <p className='text-muted-foreground'>
              Free fast internet connectivity throughout the property
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomsSection
