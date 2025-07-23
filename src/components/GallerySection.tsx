import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Phone, Users, Music, UtensilsCrossed } from 'lucide-react'
import Dining from '/images/11.webp'
import outDoor from '/images/10.webp'
import TeamPhoto from '/images/teamPhoto.webp'
import DJNight from '/images/dj.webp'
import Sunset from '/images/1ct.webp'
import Ginita from '/images/2ct.webp'
import EggTizing from '/images/3ct.webp'
import Spring from '/images/4ct.webp'
import Food from '/images/fd.webp'

const galleryImages = [
  {
    src: '/images/1.webp',
    alt: 'Resort exterior view with cars and tropical plants',
    title: 'Tranquil exterier view with tropical plants'
  },
  {
    src: '/images/2.webp',
    alt: 'Vibrant lounge with colorful lighting and cozy seating',
    title: 'VIP Section with colorful lighting and cozy seats'
  },
  {
    src: '/images/4.webp',
    alt: 'Stylish lounge area with vibrant lighting and modern bar stools',
    title: 'Stylish lounge area with modern bar stools'
  },
  {
    src: '/images/7.webp',
    alt: 'QODE 4 club area with ambient lighting and elegant bar',
    title: 'QODE 4 Section with ambient lighting and elegant bar'
  },
  {
    src: '/images/9.webp',
    alt: 'Garden seating area with comfortable outdoor furniture',
    title: 'Garden Relaxation Area'
  },
  {
    src: '/images/5.webp',
    alt: 'Beautiful outdoor terrace with ambient lighting',
    title: 'Beautiful outdoor terrace with vibrant lighting'
  },
  {
    src: '/images/8.webp',
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
    title: 'ShanVille Bar – Modern bar interior with wooden counter'
  }
]

// ... (keep all your existing imports and galleryImages array)

const GallerySection = () => {
  return (
    <section className='py-16 md:py-20 bg-gradient-warm'>
      <div className='container mx-auto px-4 lg:px-4'>
        {/* Header - unchanged */}
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Experience Shanvilla
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Discover our beautifully designed spaces, from elegant dining areas
            to comfortable lounges and serene outdoor terraces. Every corner of
            Shanvilla Resort tells a story of comfort and style.
          </p>
        </div>
        {/* Gallery Grid - unchanged */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16'>
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className='group overflow-hidden hover:shadow-warm transition-all duration-500 bg-card/80 backdrop-blur-sm border-border/50'
            >
              <div className='relative overflow-hidden'>
                <img
                  src={image.src}
                  alt={image.alt}
                  className='w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                <div className='absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100'>
                  <h3 className='text-lg font-semibold'>{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
        {/* DJ night */}
        <div className='mb-16 mt-12'>
          <Card className='overflow-hidden shadow-warm hover:shadow-glow transition-all duration-500 bg-gradient-warm border-border/50'>
            <div className='flex flex-col md:flex-row'>
              <div className='relative w-full md:w-1/2 flex justify-center bg-gray-100 dark:bg-gray-800'>
                <div className='w-full max-w-lg'>
                  {' '}
                  {/* Constrains maximum width */}
                  <img
                    src={DJNight}
                    alt='Weekend DJ entertainment at Shanvilla Resort'
                    className='w-full h-auto max-h-[400px] object-contain md:object-cover'
                  />
                </div>
                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>
              </div>
              <CardContent className='p-6 md:p-8 flex flex-col justify-center'>
                <div className='flex items-center gap-3 mb-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                    <Music className='w-6 h-6 text-primary' />
                  </div>
                  <h3 className='text-2xl font-bold text-foreground'>
                    Weekend Vibes
                  </h3>
                </div>
                <p className='text-muted-foreground mb-6 leading-relaxed'>
                  Experience unforgettable nights with our weekend DJ
                  entertainment:
                </p>
                <ul className='space-y-3 mb-8'>
                  <li className='flex items-start gap-3'>
                    <span className='inline-flex items-center justify-center w-6 h-6 bg-primary/10 text-primary rounded-full text-sm font-medium'>
                      F
                    </span>
                    <span className='text-foreground'>
                      <strong>Friday</strong>
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='inline-flex items-center justify-center w-6 h-6 bg-primary/10 text-primary rounded-full text-sm font-medium'>
                      S
                    </span>
                    <span className='text-foreground'>
                      <strong>Saturday</strong>
                    </span>
                  </li>
                  <li className='flex items-start gap-3'>
                    <span className='inline-flex items-center justify-center w-6 h-6 bg-primary/10 text-primary rounded-full text-sm font-medium'>
                      S
                    </span>
                    <span className='text-foreground'>
                      <strong>Sunday</strong>
                    </span>
                  </li>
                </ul>
              </CardContent>
            </div>
          </Card>
        </div>
        {/* Hall Section */}
        {/* Conference Hall Section */}
        <div className='mt-20'>
          <div className='container mx-auto px-4'>
            <Card className='overflow-hidden shadow-warm hover:shadow-glow transition-all duration-500 bg-gradient-warm border-border/50'>
              <div className='grid md:grid-cols-2 gap-0'>
                {/* Conference Hall Image */}
                <div className='relative overflow-hidden h-80 md:h-auto'>
                  <img
                    src='/images/hall.webp'
                    alt='Elegant conference hall at ShanVill Resort'
                    className='w-full h-full object-cover hover:scale-105 transition-transform duration-700'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>
                </div>

                {/* Conference Hall Description */}
                <CardContent className='p-8 md:p-10 flex flex-col justify-center'>
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
                      <span className='text-foreground'>
                        Capacity: 70 guests
                      </span>
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
                  ShanVill RESORT
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
        <div className='my-16'>
          <div className='text-center mb-12'>
            <h3 className='text-3xl font-bold text-foreground mb-4'>
              Signature Cocktails
            </h3>
            <p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
              Crafted to perfection by our expert mixologists
            </p>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {/* Ginita Cocktail */}
            <Card className='overflow-hidden group hover:shadow-glow transition-all duration-300'>
              <div className='relative h-64'>
                <img
                  src={Ginita}
                  alt='Ginita Cocktail'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4'>
                  <h4 className='text-xl font-bold text-white'>
                    Ginita Cocktail
                  </h4>
                </div>
              </div>
              <CardContent className='p-4 text-center'>
                <p className='text-muted-foreground'>
                  Refreshing gin-based cocktail with tropical fruit notes
                </p>
              </CardContent>
            </Card>

            {/* Eggziting Cocktail */}
            <Card className='overflow-hidden group hover:shadow-glow transition-all duration-300'>
              <div className='relative h-64'>
                <img
                  src={EggTizing}
                  alt='Eggziting Cocktail'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4'>
                  <h4 className='text-xl font-bold text-white'>
                    Eggziting Cocktail
                  </h4>
                </div>
              </div>
              <CardContent className='p-4 text-center'>
                <p className='text-muted-foreground'>
                  Creamy egg-based cocktail with a hint of spice
                </p>
              </CardContent>
            </Card>

            {/* Spring Fever Cocktail */}
            <Card className='overflow-hidden group hover:shadow-glow transition-all duration-300'>
              <div className='relative h-64'>
                <img
                  src={Spring}
                  alt='Spring Fever Cocktail'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4'>
                  <h4 className='text-xl font-bold text-white'>
                    Spring Fever Cocktail
                  </h4>
                </div>
              </div>
              <CardContent className='p-4 text-center'>
                <p className='text-muted-foreground'>
                  Floral and citrusy blend perfect for warm evenings
                </p>
              </CardContent>
            </Card>

            {/* Virgin Mary Cocktail */}
            <Card className='overflow-hidden group hover:shadow-glow transition-all duration-300'>
              <div className='relative h-64'>
                <img
                  src={Sunset}
                  alt='Virgin Mary Cocktail'
                  className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                />
                <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4'>
                  <h4 className='text-xl font-bold text-white'>
                    Virgin Mary Cocktail
                  </h4>
                </div>
              </div>
              <CardContent className='p-4 text-center'>
                <p className='text-muted-foreground'>
                  Spicy non-alcoholic twist on the classic
                </p>
              </CardContent>
            </Card>
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
