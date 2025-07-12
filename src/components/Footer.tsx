import { Phone, MapPin, Clock, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-foreground text-background py-12'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Hotel Info */}
          <div>
            <h3 className='text-2xl font-bold text-primary-glow mb-4'>
              Shanvilla Hotel
            </h3>
            <p className='text-background/80 mb-4 leading-relaxed'>
              Experience modern luxury and comfort in Murang'a. Where every stay
              becomes an unforgettable memory.
            </p>
            <p className='text-background/60 text-sm'>
              Your premier destination for hospitality excellence.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className='text-lg font-semibold mb-4 text-primary-glow'>
              Contact Information
            </h4>
            <div className='space-y-3'>
              <div className='flex items-center gap-3'>
                <Phone className='w-4 h-4 text-primary-glow' />
                <span className='text-background/80'>0111427894</span>
              </div>
              <div className='flex items-start gap-3'>
                <MapPin className='w-4 h-4 text-primary-glow mt-0.5' />
                <div className='text-background/80 text-sm'>
                  <p>Murang'a - Kenol Road</p>
                  <p>Next to Maragua Police Station</p>
                  <p>Opposite Murang'a County Creameries</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <Clock className='w-4 h-4 text-primary-glow' />
                <span className='text-background/80 text-sm'>
                  24/7 Front Desk Service
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className='text-lg font-semibold mb-4 text-primary-glow'>
              Our Services
            </h4>
            <ul className='space-y-2 text-background/80 text-sm'>
              <li>• Modern Style Rooms</li>
              <li>• Free Room Service</li>
              <li>• Late Checkout</li>
              <li>• Free Fast WiFi</li>
              <li>• 24/7 Reception</li>
              <li>• Secure Parking</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-background/20 mt-8 pt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-background/60 text-sm'>
              © {currentYear} Shanvilla Hotel. All rights reserved.
            </p>
            <div className='flex items-center gap-4 text-sm text-background/60'>
              <span>Call for reservations: 0111427894</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
