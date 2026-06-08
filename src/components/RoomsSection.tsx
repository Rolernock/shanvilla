import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Bed,
  Wifi,
  UtensilsCrossed,
  Bath,
  Car,
  Phone,
  Users
} from 'lucide-react'

import standardRoom from '/images/shanvillaresort-92.webp'
import deluxeRoom from '/images/shanvillaresort-104.webp'
import vipRoom from '/images/vip.webp'
import bathroom from '/images/bathroom.webp'

const rooms = [
  {
    title: 'Standard Room',
    price: 'Ksh 3,500',
    image: standardRoom,
    featured: false,
    description:
      'Our Standard Room offers comfort and convenience at an affordable rate. Ideal for solo travelers and couples seeking a relaxing stay.',

    features: [
      { icon: Users, label: '2 Guests' },
      { icon: Bed, label: 'Queen Size Bed' },
      { icon: Bath, label: 'Private Bathroom' },
      { icon: Wifi, label: 'Free WiFi' },
      { icon: UtensilsCrossed, label: 'Room Service' },
      { icon: Car, label: 'Free Parking' }
    ]
  },

  {
    title: 'Deluxe Room',
    price: 'Ksh 5,000',
    image: deluxeRoom,
    featured: true,
    description:
      'Experience elevated comfort in our Deluxe Room featuring spacious interiors, elegant furnishings, and premium amenities.',

    features: [
      { icon: Users, label: '3 Guests' },
      { icon: Bed, label: 'King Size Bed' },
      { icon: Bath, label: 'Luxury Bathroom' },
      { icon: Wifi, label: 'Free WiFi' },
      { icon: UtensilsCrossed, label: 'Room Service' },
      { icon: Car, label: 'Free Parking' }
    ]
  },

  {
    title: 'V.I.P Room',
    price: 'Ksh 8,000',
    image: vipRoom,
    featured: false,
    description:
      'Our VIP Room offers the ultimate luxury experience with spacious accommodation, premium furnishings, and exclusive amenities.',

    features: [
      { icon: Users, label: '4 Guests' },
      { icon: Bed, label: 'Executive King Bed' },
      { icon: Bath, label: 'Premium Bathroom' },
      { icon: Wifi, label: 'High-Speed WiFi' },
      { icon: UtensilsCrossed, label: 'VIP Room Service' },
      { icon: Car, label: 'Reserved Parking' }
    ]
  }
]

const RoomsSection = () => {
  const handleBooking = () => {
    window.location.href =
      'mailto:reception@shanvillaresortkenya.co.ke?subject=Room Booking Inquiry'
  }

  const handleCall = () => {
    window.open('tel:+254111427894', '_self')
  }

  return (
    <section className='py-20 bg-background'>
      <div className='container mx-auto px-4 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Affordable Accommodations
          </h2>

          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Experience unparalleled comfort in our meticulously designed rooms,
            featuring premium amenities and elegant finishes for a memorable
            stay at Shanvilla Resort.
          </p>
        </div>

        {/* Rooms */}
        <div className='max-w-6xl mx-auto space-y-12'>
          {rooms.map((room, index) => (
            <Card
              key={index}
              className='overflow-hidden shadow-warm hover:shadow-glow transition-all duration-500 bg-gradient-warm border-border/50'
            >
              <div
                className={`grid lg:grid-cols-2 gap-0 ${
                  index % 2 !== 0
                    ? 'lg:[&>*:first-child]:order-2'
                    : ''
                }`}
              >
                {/* Image Section */}
                <div className='relative'>
                  <div className='h-[400px] overflow-hidden'>
                    <img
                      src={room.image}
                      alt={room.title}
                      className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                    />
                  </div>

                  <div className='grid grid-cols-2 h-[200px]'>
                    <div className='relative overflow-hidden'>
                      <img
                        src={bathroom}
                        alt='Luxury Bathroom'
                        className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                      />
                      <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent'></div>
                    </div>

                    <div className='bg-primary/5 flex items-center justify-center'>
                      <div className='text-center p-4'>
                        <Bath className='w-10 h-10 mx-auto text-primary mb-2' />

                        <h4 className='font-semibold'>
                          Premium Bathrooms
                        </h4>

                        <p className='text-sm text-muted-foreground'>
                          Luxury fixtures & amenities
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <CardContent className='p-8 lg:p-12 flex flex-col justify-center'>
                  {room.featured && (
                    <div className='mb-4'>
                      <span className='bg-amber-500 text-white px-4 py-1 rounded-full text-sm font-semibold'>
                        ⭐ Most Popular
                      </span>
                    </div>
                  )}

                  <h3 className='text-3xl font-bold text-foreground mb-2'>
                    {room.title}
                  </h3>

                  <div className='flex items-center gap-2 mb-6'>
                    <span className='text-3xl font-bold text-primary'>
                      {room.price}
                    </span>

                    <span className='text-muted-foreground'>
                      / night
                    </span>
                  </div>

                  <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                    {room.description}
                  </p>

                  {/* Features */}
                  <div className='grid grid-cols-2 gap-4 mb-8'>
                    {room.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-3'
                      >
                        <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center'>
                          <feature.icon className='w-5 h-5 text-primary' />
                        </div>

                        <span className='text-foreground font-medium'>
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className='flex flex-col sm:flex-row gap-4'>
                    <Button
                      variant='hero'
                      size='lg'
                      className='w-full sm:flex-1'
                      onClick={handleBooking}
                    >
                      Book Now
                    </Button>

                    <Button
                      variant='elegant'
                      size='lg'
                      className='w-full sm:flex-1'
                      onClick={handleCall}
                    >
                      <Phone className='w-5 h-5 mr-2' />
                      Call for Rates
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RoomsSection
