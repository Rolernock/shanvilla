import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Bed,
  Wifi,
  UtensilsCrossed,
  Bath,
  Car,
  Phone,
  Users,
  MessageCircle
} from 'lucide-react'

/* ===============================
   STANDARD ROOM IMAGES
================================= */
import standardRoom1 from '/images/shanvillaresort-86.webp'
import standardRoom2 from '/images/shanvillaresort-84.webp'
import standardBathroom from '/images/bathroom.webp'
import standardAmenities from '/images/standard-amenities.webp'
import standardDesk from '/images/standard-desk.webp'
import standardView from '/images/standard-view.webp'

/* ===============================
   DELUXE ROOM IMAGES
================================= */
import deluxeRoom1 from '/images/shanvillaresort-86.webp'
import deluxeRoom2 from '/images/shanvillaresort-84.webp'
import deluxeBathroom from '/images/bathroom.webp'
import deluxeAmenities from '/images/deluxe-amenities.webp'
import deluxeDesk from '/images/deluxe-desk.webp'
import deluxeView from '/images/deluxe-view.webp'

/* ===============================
   VIP ROOM IMAGES
================================= */
import vipRoom1 from '/images/shanvillaresort-86.webp'
import vipRoom2 from '/images/shanvillaresort-84.webp'
import vipBathroom from '/images/bathroom.webp'
import vipAmenities from '/images/vip-amenities.webp'
import vipLounge from '/images/vip-lounge.webp'
import vipView from '/images/vip-view.webp'

const rooms = [
  {
    title: 'Standard Room',
    price: 'Ksh 4,500',
    featured: false,

    images: [
      standardRoom1,
      standardRoom2,
      standardBathroom,
      standardAmenities,
      standardDesk,
      standardView
    ],

    description:
      'Relax in our stylish Standard Room featuring a comfortable queen-size bed, modern private bathroom, complimentary high-speed WiFi, room service, and secure parking. Perfect for business travelers, couples, and guests seeking exceptional value.',

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
    price: 'Ksh 5,800',
    featured: true,

    images: [
      deluxeRoom1,
      deluxeRoom2,
      deluxeBathroom,
      deluxeAmenities,
      deluxeDesk,
      deluxeView
    ],

    description:
      'Experience superior comfort in our Deluxe Room with spacious interiors, a luxurious king-size bed, elegant décor, premium bathroom amenities, and personalized service designed for a truly relaxing stay.',

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
    price: 'Ksh 7,500',
    featured: false,

    images: [
      vipRoom1,
      vipRoom2,
      vipBathroom,
      vipAmenities,
      vipLounge,
      vipView
    ],

    description:
      'Indulge in the finest accommodation at Shanvilla Resort. Our VIP Room offers spacious luxury, executive furnishings, enhanced privacy, premium amenities, and exclusive services for guests who expect the very best.',

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

  const handleWhatsApp = () => {
    window.open(
      'https://wa.me/254111427894?text=Hello%20Shanvilla%20Resort,%20I%20would%20like%20to%20book%20a%20room.',
      '_blank'
    )
  }

  return (
    <section className='py-20 bg-background'>
      <div className='container mx-auto px-4 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Luxury Accommodation at Shanvilla Resort
          </h2>

          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Discover comfort, elegance and exceptional hospitality in our
            thoughtfully designed rooms. Whether you're travelling for business
            or leisure, Shanvilla offers the perfect stay.
          </p>
        </div>

        <div className='max-w-7xl mx-auto space-y-12'>
          {rooms.map((room, index) => (
            <Card
              key={index}
              className='overflow-hidden border-border/50 shadow-lg hover:shadow-xl transition-all duration-500'
            >
              <div
                className={`grid lg:grid-cols-2 ${
                  index % 2 !== 0
                    ? 'lg:[&>*:first-child]:order-2'
                    : ''
                }`}
              >
                {/* ==========================================
                    HOTEL STYLE 6 IMAGE GALLERY
                =========================================== */}
                <div className='p-3 bg-muted/20'>
                  <div className='grid grid-cols-3 gap-2 h-[650px]'>

                    {/* Main Hero Image */}
                    <div className='col-span-2 row-span-2 overflow-hidden rounded-xl'>
                      <img
                        src={room.images[0]}
                        alt={room.title}
                        className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                      />
                    </div>

                    {/* Small Gallery Images */}
                    {room.images.slice(1, 5).map((image, idx) => (
                      <div
                        key={idx}
                        className='overflow-hidden rounded-xl'
                      >
                        <img
                          src={image}
                          alt={`${room.title}-${idx}`}
                          className='w-full h-full object-cover hover:scale-110 transition-transform duration-500'
                        />
                      </div>
                    ))}

                    {/* Last Tile */}
                    <div className='bg-primary text-primary-foreground rounded-xl flex flex-col items-center justify-center p-4 text-center'>
                      <Bed className='w-10 h-10 mb-3' />

                      <h4 className='font-bold text-lg'>
                        Luxury Stay
                      </h4>

                      <p className='text-sm opacity-90'>
                        Comfort • Elegance • Value
                      </p>
                    </div>
                  </div>
                </div>

                {/* ==========================================
                    CONTENT
                =========================================== */}
                <CardContent className='p-8 lg:p-12 flex flex-col justify-center'>

                  {room.featured && (
                    <div className='mb-4'>
                      <span className='bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold'>
                        ⭐ Most Popular Choice
                      </span>
                    </div>
                  )}

                  <h3 className='text-3xl font-bold mb-3'>
                    {room.title}
                  </h3>

                  <div className='flex items-center gap-3 mb-4'>
                    <span className='text-3xl font-bold text-primary'>
                      {room.price}
                    </span>

                    <span className='text-muted-foreground'>
                      / night
                    </span>
                  </div>

                  <div className='inline-flex items-center bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-6 w-fit'>
                    🔥 Popular Accommodation at Shanvilla Resort
                  </div>

                  <p className='text-lg text-muted-foreground mb-8 leading-relaxed'>
                    {room.description}
                  </p>

                  {/* Included */}
                  <div className='bg-primary/5 border border-primary/10 rounded-xl p-5 mb-8'>
                    <h4 className='font-bold text-lg mb-4'>
                      Included In Your Stay
                    </h4>

                    <div className='grid grid-cols-2 gap-3 text-sm'>
                      <div>✓ Complimentary Breakfast</div>
                      <div>✓ Free High-Speed WiFi</div>
                      <div>✓ Secure Parking</div>
                      <div>✓ Daily Housekeeping</div>
                      <div>✓ Room Service</div>
                      <div>✓ 24/7 Reception Support</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className='grid grid-cols-2 gap-4 mb-8'>
                    {room.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className='flex items-center gap-3'
                      >
                        <div className='w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
                          <feature.icon className='w-5 h-5 text-primary' />
                        </div>

                        <span className='font-medium'>
                          {feature.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className='grid sm:grid-cols-3 gap-3'>
                    <Button
                      variant='hero'
                      size='lg'
                      onClick={handleBooking}
                    >
                      Reserve Your Stay
                    </Button>

                    <Button
                      variant='outline'
                      size='lg'
                      onClick={handleWhatsApp}
                    >
                      <MessageCircle className='w-5 h-5 mr-2' />
                      WhatsApp
                    </Button>

                    <Button
                      variant='elegant'
                      size='lg'
                      onClick={handleCall}
                    >
                      <Phone className='w-5 h-5 mr-2' />
                      Call Reception
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
```
