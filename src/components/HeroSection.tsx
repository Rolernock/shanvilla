import { Button } from '@/components/ui/button'
import { Phone, MapPin, Wifi, Clock, UtensilsCrossed } from 'lucide-react'
import heroImage from '/images/bg.webp'

const HeroSection = () => {
  return (
    <section className='relative min-h-screen flex items-center bg-gradient-hero overflow-hidden'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0'>
        <img
          src={heroImage}
          alt='Shanvilla Hotel elegant lounge with modern seating'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 container mx-auto px-4 lg:px-8'>
        <div className='max-w-2xl animate-fade-in'>
          <h1 className='text-5xl md:text-7xl font-bold text-white mb-6 leading-tight'>
            Welcome to
            <span className='block text-primary-glow'>Shanvilla Resort</span>
          </h1>

          <p className='text-xl md:text-2xl text-white/90 mb-8 leading-relaxed'>
            Experience modern luxury and comfort in Murang'a. Where every stay
            becomes an unforgettable memory.
          </p>

          {/* Quick Features */}
          <div className='flex flex-wrap gap-4 mb-8'>
            <div className='flex items-center gap-2 text-white/80'>
              <Wifi className='w-5 h-5 text-primary-glow' />
              <span className='text-sm font-medium'>Free WiFi</span>
            </div>
            <div className='flex items-center gap-2 text-white/80'>
              <UtensilsCrossed className='w-5 h-5 text-primary-glow' />
              <span className='text-sm font-medium'>Room Service</span>
            </div>
            <div className='flex items-center gap-2 text-white/80'>
              <Clock className='w-5 h-5 text-primary-glow' />
              <span className='text-sm font-medium'>Late Checkout</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 mb-8'>
            <Button
              variant='elegant'
              onClick={() => window.open('tel:0111427894', '_self')}
              size='lg'
              className='text-lg'
            >
              <Phone className='w-5 h-5' />
              Call 0111427894
            </Button>
          </div>

          {/* Location */}
          <div className='flex items-start gap-3 text-white/80'>
            <MapPin className='w-5 h-5 text-primary-glow mt-1 flex-shrink-0' />
            <div>
              <p className='font-medium'>Murang'a - Kenol Road</p>
              <p className='text-sm'>
                Next to Maragua Police Station, opposite Murang'a County
                Creameries
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce'>
        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex justify-center'>
          <div className='w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse'></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
