import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Users, Music, UtensilsCrossed } from 'lucide-react'
import Dining from '/images/shanvillaresort-140.webp'
import outDoor from '/images/shanvillaresort-153.webp'
import TeamPhoto from '/images/teamPhoto.webp'
import DJNight from '/images/shanvillaresort-153.webp'
import Sunset from '/images/1ct.webp'
import Ginita from '/images/2ct.webp'
import EggTizing from '/images/3ct.webp'
import Spring from '/images/4ct.webp'
import Food from '/images/fd.webp'

const galleryImages = [
  {
    src: '/images/shanvillaresort-137.webp',
    alt: 'Resort exterior view with cars and tropical plants',
    title: 'Tranquil exterier view with tropical plants'
  },
  {
    src: '/images/shanvillaresort-153.webp',
    alt: 'Vibrant lounge with colorful lighting and cozy seating',
    title: 'VIP Section with colorful lighting and cozy seats'
  },
  {
    src: '/images/shanvillaresort-157.webp',
    alt: 'Stylish lounge area with vibrant lighting and modern bar stools',
    title: 'Stylish lounge area with modern bar stools'
  },
  {
    src: '/images/7.webp',
    alt: 'QODE 4 club area with ambient lighting and elegant bar',
    title: 'QODE 4 Club with ambient lighting and elegant bar'
  },
  {
    src: '/images/9.webp',
    alt: 'Garden seating area with comfortable outdoor furniture',
    title: 'Garden Relaxation Area'
  },
  {
    src: '/images/shanvillaresort-104.webp',
    alt: 'Beautiful outdoor terrace with ambient lighting',
    title: 'Beautiful outdoor terrace with vibrant lighting'
  },
  {
    src: '/images/shanvillaresort-153.webp',
    alt: 'Elegant bedroom with carved white bed frame, ambient lighting, and blue accents',
    title: 'Luxury Suite with Artistic Decor'
  },
  {
    src: '/images/6.webp',
    alt: 'Bright dining area with round tables, blue accents, and black wicker chairs',
    title: 'Elegant Dining Space with Natural Light'
  },
  {
    src: '/images/3.webp',
    alt: 'Modern bar interior with wooden counter, neon ShanVille sign, and stocked shelves',
    title: 'QODE 4 Club Counter – Modern bar interior with wooden counter'
  }
]

// ... (keep all your existing imports and galleryImages array)

const GallerySection = () => {
  return (
    <section className='py-16 md:py-20 bg-gradient-warm'>
  <div className='container mx-auto px-4 lg:px-8'>
    {/* Header */}
    <div className='text-center mb-16 animate-fade-in'>
      <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
        Experience Shanvilla Resort
      </h2>

      <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
        Discover luxury accommodation, exceptional dining, signature
        cocktails, unforgettable events and vibrant entertainment at
        Shanvilla Resort, Maragua.
      </p>
    </div>

    {/* Hero Showcase */}
    <Card className='overflow-hidden border-0 shadow-2xl mb-16'>
      <div className='relative h-[550px]'>
        <img
          src={HeroResort}
          alt='Shanvilla Resort'
          className='w-full h-full object-cover'
        />

        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent' />

        <div className='absolute inset-0 flex items-center'>
          <div className='max-w-2xl px-8 lg:px-16 text-white'>
            <span className='bg-primary px-4 py-2 rounded-full text-sm font-semibold'>
              Welcome to Shanvilla Resort
            </span>

            <h2 className='text-4xl md:text-6xl font-bold mt-6 mb-6'>
              Where Comfort Meets
              <br />
              Memorable Experiences
            </h2>

            <p className='text-lg md:text-xl text-white/90 mb-8'>
              Whether you're travelling, dining, celebrating or
              simply relaxing, Shanvilla Resort offers the perfect
              atmosphere for every occasion.
            </p>

            <div className='flex flex-wrap gap-4'>
              <Button
                variant='hero'
                size='lg'
                onClick={() =>
                  (window.location.href =
                    'mailto:reception@shanvillaresortkenya.co.ke')
                }
              >
                Book Your Stay
              </Button>

              <Button
                variant='outline'
                size='lg'
                className='bg-white/10 border-white text-white hover:bg-white hover:text-black'
                onClick={() =>
                  window.open('tel:+254111427894', '_self')
                }
              >
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Card>

    {/* Resort Experiences */}
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20'>
      {[
        {
          image: Accommodation,
          title: 'Luxury Accommodation',
          badge: 'Stay',
          description:
            'Enjoy Standard, Deluxe and VIP rooms designed for comfort and relaxation.'
        },
        {
          image: Restaurant,
          title: 'Fine Dining',
          badge: 'Dine',
          description:
            'Delicious local and international cuisine prepared by experienced chefs.'
        },
        {
          image: Cocktails,
          title: 'Signature Cocktails',
          badge: 'Bar',
          description:
            'Handcrafted cocktails, mocktails and premium beverages served daily.'
        },
        {
          image: Conference,
          title: 'Meetings & Conferences',
          badge: 'Business',
          description:
            'Professional facilities ideal for corporate meetings and workshops.'
        },
        {
          image: Events,
          title: 'Events & Celebrations',
          badge: 'Events',
          description:
            'Perfect venue for weddings, graduations, birthdays and private parties.'
        },
        {
          image: DJNight,
          title: 'Weekend Entertainment',
          badge: 'Lifestyle',
          description:
            'Live DJs, themed nights and vibrant weekend experiences every week.'
        }
      ].map((item, index) => (
        <Card
          key={index}
          className='group overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500'
        >
          <div className='relative h-80 overflow-hidden'>
            <img
              src={item.image}
              alt={item.title}
              className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
            />

            <div className='absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent' />

            <div className='absolute top-4 left-4'>
              <span className='bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold'>
                {item.badge}
              </span>
            </div>

            <div className='absolute bottom-0 p-6 text-white'>
              <h3 className='text-2xl font-bold mb-2'>
                {item.title}
              </h3>

              <p className='text-white/90'>
                {item.description}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </div>

    {/* Entertainment Section */}
    <Card className='overflow-hidden shadow-warm hover:shadow-glow transition-all duration-500 bg-gradient-warm border-border/50'>
      <div className='flex flex-col md:flex-row'>
        <div className='relative w-full md:w-1/2'>
          <img
            src={DJNight}
            alt='Weekend Entertainment'
            className='w-full h-full object-cover min-h-[400px]'
          />

          <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />
        </div>

        <CardContent className='p-8 flex flex-col justify-center'>
          <div className='flex items-center gap-3 mb-4'>
            <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
              <Music className='w-6 h-6 text-primary' />
            </div>

            <h3 className='text-3xl font-bold text-foreground'>
              Shanvilla Nightlife Experience
            </h3>
          </div>

          <p className='text-muted-foreground mb-6 leading-relaxed text-lg'>
            Experience vibrant evenings with live DJs, themed nights,
            great food, premium cocktails and unforgettable
            entertainment every weekend.
          </p>

          <div className='space-y-4'>
            <div className='flex items-center gap-3'>
              <span className='w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold'>
                F
              </span>
              <span>Friday Party Nights</span>
            </div>

            <div className='flex items-center gap-3'>
              <span className='w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold'>
                S
              </span>
              <span>Saturday DJ Experience</span>
            </div>

            <div className='flex items-center gap-3'>
              <span className='w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold'>
                S
              </span>
              <span>Sunday Chill Sessions</span>
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  </div>
</section>
        {/* Hall Section */}
        {/* Conference Hall Section */}
        <div className='mt-20'>
          <div className='container mx-auto px-4'>
            <Card className='overflow-hidden shadow-warm hover:shadow-glow transition-all duration-500 bg-gradient-warm border-border/50'>
              <div className='grid md:grid-cols-2 gap-0'>
                {/* Conference Hall Image */}
                <div className='relative overflow-hidden h-80 md:h-auto'>
                  <img
                    src='/images/shanvillaresort-140.webp'
                    alt='Elegant conference hall at ShanVilla Resort'
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>
                </div>

                {/* Conference Hall Description */}
                <CardContent className='py-8 md:p-10 flex flex-col justify-center'>
                  <div className='mb-6'>
                    <h3 className='text-3xl font-bold text-foreground mb-4'>
                      Premium Event Space
                    </h3>
                    <p className='text-lg text-muted-foreground leading-relaxed'>
                      A tastefully curated event space where comfort meets
                      class—plush blue seating, natural light, and a refined
                      buffet setup create the perfect ambiance for memorable
                      gatherings.
                    </p>
                  </div>

                  <div className='space-y-4'>
                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center'>
                        <Users className='w-5 h-5 text-primary' />
                      </div>
                      <span className='text-foreground'>Capacity: 100 pax</span>
                    </div>

                    <div className='flex items-center gap-3'>
                      <div className='w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center'>
                        <UtensilsCrossed className='w-5 h-5 text-primary' />
                      </div>
                      <span className='text-foreground'>
                        Custom catering available
                      </span>
                    </div>
                  </div>

                  <Button
                    variant='elegant'
                    size='lg'
                    className='mt-8 w-full md:w-auto'
                    onClick={() => window.open('tel:0111427894', '_self')}
                  >
                    <Phone className='w-5 h-5 mr-2' />
                    Book Your Event
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
        {/* Food Section */}
        {/* Choma Platter Promo Section */}
        <div className='mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl overflow-hidden border border-border/30'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
            {/* Image Side - Replace with your actual choma platter image */}
            <div className='relative h-64 md:h-auto'>
              <img
                src={Food} // Replace with your image path
                alt='Delicious Choma Platter Mix'
                className='w-full h-full object-cover'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>
            </div>

            {/* Content Side */}
            <div className='p-8 flex flex-col justify-center items-center text-center'>
              <div className='mb-4'>
                <span className='text-sm font-semibold text-primary tracking-widest'>
                  SUPER
                </span>
                <h3 className='text-3xl font-bold text-foreground mt-2'>
                  ShanVilla RESORT
                </h3>
              </div>

              <div className='my-4'>
                <p className='text-xl font-medium text-foreground'>
                  Delicious Choma Platter Mix
                </p>
                <p className='text-2xl font-bold text-primary mt-2'>
                  KSh 2,500
                </p>
              </div>

              <Button
                variant='hero'
                size='lg'
                onClick={() => window.open('tel:0111427894', '_self')}
                className='mt-4 w-full max-w-xs'
              >
                <Phone className='w-5 h-5 mr-2' />
                ORDER NOW
              </Button>

              <p className='mt-4 text-muted-foreground'>Call: 0111427894</p>
            </div>
          </div>
        </div>

        {/* Then follow with your Cocktails Section */}
        {/* Cocktails Section */}
        import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'

const cocktails = [
  {
    image: Ginita,
    name: 'Ginita Cocktail',
    description:
      'Refreshing gin-based cocktail infused with tropical fruit flavors.',
    tag: 'Customer Favorite'
  },
  {
    image: EggTizing,
    name: 'Eggziting Cocktail',
    description:
      'A rich creamy cocktail blended with exotic spices and smooth textures.',
    tag: 'New Arrival'
  },
  {
    image: Spring,
    name: 'Spring Fever Cocktail',
    description:
      'A floral citrus masterpiece crafted for unforgettable evenings.',
    tag: 'Signature Drink'
  },
  {
    image: Sunset,
    name: 'Virgin Mary',
    description:
      'A refreshing alcohol-free delight bursting with bold flavors.',
    tag: 'Mocktail Special'
  }
]

<div className='my-20'>
  <div className='text-center mb-10'>
    <h3 className='text-4xl font-bold text-foreground mb-4'>
      Signature Cocktails
    </h3>

    <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
      Discover handcrafted cocktails, mocktails and premium beverages
      prepared by our expert mixologists at Shanvilla Resort.
    </p>
  </div>

  <Carousel
    opts={{
      loop: true
    }}
    plugins={[
      Autoplay({
        delay: 4000
      })
    ]}
    className='w-full'
  >
    <CarouselContent>
      {cocktails.map((cocktail, index) => (
        <CarouselItem key={index}>
          <Card className='overflow-hidden border-0 shadow-xl'>
            <div className='relative h-[550px]'>
              <img
                src={cocktail.image}
                alt={cocktail.name}
                className='w-full h-full object-cover'
              />

              {/* Dark Overlay */}
              <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent' />

              {/* Content */}
              <div className='absolute inset-0 flex items-center'>
                <div className='max-w-xl px-8 lg:px-16 text-white'>
                  <span className='inline-block bg-primary px-4 py-2 rounded-full text-sm font-semibold mb-4'>
                    {cocktail.tag}
                  </span>

                  <h3 className='text-4xl md:text-6xl font-bold mb-4'>
                    {cocktail.name}
                  </h3>

                  <p className='text-lg md:text-xl mb-8 text-white/90'>
                    {cocktail.description}
                  </p>

                  <div className='flex flex-wrap gap-4'>
                    <Button
                      size='lg'
                      variant='hero'
                      onClick={() =>
                        window.open('tel:+254111427894', '_self')
                      }
                    >
                      Order Now
                    </Button>

                    <Button
                      size='lg'
                      variant='outline'
                      className='bg-white/10 text-white border-white hover:bg-white hover:text-black'
                    >
                      Visit Our Bar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </CarouselItem>
      ))}
    </CarouselContent>

    <CarouselPrevious className='left-4' />
    <CarouselNext className='right-4' />
  </Carousel>
</div>

          {/* Cocktail CTA */}
          <div className='text-center mt-12'>
            <Button
              variant='elegant'
              size='lg'
              onClick={() => window.open('tel:0111427894', '_self')}
            >
              <Phone className='w-5 h-5 mr-2' />
              Call to Reserve Your Favorite Cocktail
            </Button>
          </div>
        </div>
        {/* Featured Facilities - Updated for mobile */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          {/* Dining Experience - now full width on mobile */}
          <Card className='overflow-hidden shadow-warm hover:shadow-glow transition-all duration-500 bg-gradient-warm border-border/50'>
            <div className='flex flex-col md:flex-row'>
              <div className='relative w-full md:w-1/2 h-64 md:h-auto'>
                <img
                  src={Dining}
                  alt='Dining area'
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                />
              </div>
              <CardContent className='w-full md:w-1/2 p-6 flex flex-col justify-center'>
                <h3 className='text-2xl font-bold text-foreground mb-4'>
                  Exquisite Dining
                </h3>
                <p className='text-muted-foreground mb-6 leading-relaxed'>
                  Enjoy fine dining in our elegant restaurant with modern
                  ambiance and exceptional service.
                </p>
                <Button
                  variant='elegant'
                  size='sm'
                  onClick={() => window.open('tel:0111427894', '_self')}
                >
                  <Phone className='w-4 h-4' />
                  Reserve Table
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Outdoor Experience - now full width on mobile */}
          <Card className='overflow-hidden shadow-warm hover:shadow-glow transition-all duration-500 bg-gradient-warm border-border/50'>
            <div className='flex flex-col md:flex-row'>
              <div className='relative w-full md:w-1/2 h-64 md:h-auto'>
                <img
                  src={outDoor}
                  alt='Outdoor terrace'
                  className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                />
              </div>
              <CardContent className='w-full md:w-1/2 p-6 flex flex-col justify-center'>
                <h3 className='text-2xl font-bold text-foreground mb-4'>
                  Outdoor Paradise
                </h3>
                <p className='text-muted-foreground mb-6 leading-relaxed'>
                  Relax under the stars in our beautiful outdoor terrace with
                  ambient lighting and comfortable seating.
                </p>
                <Button
                  variant='elegant'
                  size='sm'
                  onClick={() => window.open('tel:0111427894', '_self')}
                >
                  <Phone className='w-4 h-4' />
                  Book Experience
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Team Section - Updated for mobile */}
        <div className='mt-6 md:mt-20 bg-card rounded-2xl overflow-hidden border border-border/30'>
          <div className='flex flex-col md:flex-row'>
            <div className='relative w-full md:w-1/2 h-64 md:h-auto min-h-[300px]'>
              <img
                src={TeamPhoto}
                alt='Shanvilla Resort professional team'
                className='w-full h-full object-cover object-center'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>
            </div>
            <div className='w-full md:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                  <Users className='w-5 h-5 md:w-6 md:h-6 text-primary' />
                </div>
                <h3 className='text-xl md:text-2xl font-bold text-foreground'>
                  Our Dedicated Team
                </h3>
              </div>
              <p className='text-muted-foreground mb-4 md:mb-6 leading-relaxed'>
                At Shanvilla Resort, our greatest asset is our team of
                hospitality professionals committed to providing exceptional
                service with a warm Kenyan welcome.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action - unchanged */}
        <div className='text-center mt-16'>
          <div className='bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto border border-primary/10'>
            <h3 className='text-2xl font-bold text-foreground mb-4'>
              Ready to Experience Our Hospitality?
            </h3>
            <p className='text-muted-foreground mb-6'>
              Our team is ready to welcome you to an unforgettable stay at
              Shanvilla Resort.
            </p>
            <Button
              variant='hero'
              size='lg'
              onClick={() => window.open('tel:0111427894', '_self')}
            >
              <Phone className='w-5 h-5' />
              Call 0111427894 to Book
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GallerySection
