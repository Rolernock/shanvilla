import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Bed, Wifi, UtensilsCrossed, Bath, Car, Phone } from 'lucide-react'
import modernRoom from '/images/vip.webp'
import bathroom from '/images/bathroom.webp'

const roomFeatures = [
  { icon: Bed, label: 'King Size Bed' },
  { icon: Bath, label: 'Luxury Bathroom' },
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
            Luxury Accommodations
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Experience unparalleled comfort in our meticulously designed rooms,
            featuring premium amenities and elegant finishes for a memorable
            stay.
          </p>
        </div>

        {/* Main Room Showcase */}
        <div className='max-w-6xl mx-auto'>
          <Card className='overflow-hidden shadow-warm hover:shadow-glow transition-all duration-500 bg-gradient-warm border-border/50'>
            <div className='grid lg:grid-cols-2 gap-0'>
              {/* Image Gallery */}
              <div className='relative'>
                <div className='h-[400px] overflow-hidden'>
                  <img
                    src={modernRoom}
                    alt='Modern luxury room at Shanvilla Resort'
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                  />
                </div>
                <div className='grid grid-cols-2 gap-0 h-[200px]'>
                  <div className='relative overflow-hidden'>
                    <img
                      src={bathroom}
                      alt='Luxury bathroom with modern fixtures'
                      className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-black/10 to-transparent'></div>
                  </div>
                  <div className='bg-foreground/5 flex items-center justify-center'>
                    <div className='text-center p-4'>
                      <Bath className='w-10 h-10 mx-auto text-primary mb-2' />
                      <h4 className='font-semibold'>Spa-like Bathrooms</h4>
                      <p className='text-sm text-muted-foreground'>
                        Premium fixtures & amenities
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <CardContent className='p-8 lg:p-12 flex flex-col justify-center'>
                <h3 className='text-3xl font-bold text-foreground mb-6'>
                  Executive Suite
                </h3>

                <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                  Our signature rooms blend contemporary elegance with
                  exceptional comfort. Featuring a king-size bed, spacious work
                  area, and luxury bathroom with premium toiletries.
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
                    variant='hero'
                    size='lg'
                    className='w-full sm:flex-1 min-w-[140px]'
                    onClick={() =>
                      (window.location.href =
                        'mailto:reception@shanvillaresortkenya.co.ke?subject=Room Booking Inquiry')
                    }
                  >
                    Book Now
                  </Button>
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
      </div>
    </section>
  )
}

export default RoomsSection
