import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Facebook,
  Instagram,
  Globe,
  Video
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-foreground text-background py-12'>
      <div className='container mx-auto px-4 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Resort Info */}
          <div>
            <h3 className='text-2xl font-bold text-primary-glow mb-4'>
              Shanvilla Resort
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
                <Mail className='w-4 h-4 text-primary-glow' />
                <span className='text-background/80 text-sm'>
                  reception@shanvillaresortkenya.co.ke
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <Clock className='w-4 h-4 text-primary-glow' />
                <span className='text-background/80 text-sm'>
                  24/7 Front Desk Service
                </span>
              </div>
            </div>
          </div>

          {/* Services & Social Media */}
          <div>
            <h4 className='text-lg font-semibold mb-4 text-primary-glow'>
              Our Services
            </h4>
            <ul className='space-y-2 text-background/80 text-sm mb-6'>
              <li>• Modern Style Rooms</li>
              <li>• Late Checkout</li>
              <li>• Free Fast WiFi</li>
              <li>• 24/7 Reception</li>
              <li>• Secure Parking</li>
            </ul>

            <h4 className='text-lg font-semibold mb-4 text-primary-glow'>
              Connect With Us
            </h4>
            <div className='flex flex-wrap gap-3'>
              <a
                href='https://www.facebook.com/shanvillaresort.ke/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-background/80 hover:text-primary-glow transition-colors text-sm'
              >
                <Facebook className='w-4 h-4' />
                Facebook
              </a>
              <a
                href='https://www.instagram.com/shanvillaresort/'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-background/80 hover:text-primary-glow transition-colors text-sm'
              >
                <Instagram className='w-4 h-4' />
                Instagram
              </a>
              <a
                href='https://www.tiktok.com/discover/shanvillaresort1'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-background/80 hover:text-primary-glow transition-colors text-sm'
              >
                <Video className='w-4 h-4' />
                TikTok
              </a>
              <a
                href='https://www.booking.com/hotel/ke/shanvilla-resort-ltd.html?aid=2425903&label=bra115jc-1FCAsodkIUc2hhbnZpbGxhLXJlc29ydC1sdGRIM1gDaHaIAQGYATG4ARfIAQzYAQHoAQH4AQKIAgGoAgO4AvyH_sMGwAIB0gIkY2UzNmM0ZjMtMzg0MC00ZDZmLThlYjktYmNmNTRiNzBiNmU02AIF4AIB&sid=12db012d5cdb67caf9a89c3626370c2b&dest_id=-2257236&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1753187343&srpvid=1c0757becc3f04c3&type=total&ucfs=1&'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-background/80 hover:text-primary-glow transition-colors text-sm'
              >
                <Globe className='w-4 h-4' />
                Booking.com
              </a>
              <a
                href='https://www.expedia.com/Shanvilla-Resort-Ltd.h116277960.Hotel-Information?chkin=2025-07-23&chkout=2025-07-28&x_pwa=1&rfrr=HSR&pwa_ts=1753188284253&referrerUrl=aHR0cHM6Ly93d3cuZXhwZWRpYS5jb20vSG90ZWwtU2VhcmNo&useRewards=false&rm1=a2&regionId=951749128114061312&destination=Maragua%2C+Murang%27a+County%2C+Kenya&destType=MARKET&selected=116277960&latLong=-0.794563%2C37.131592&sort=RECOMMENDED&top_dp=236&top_cur=USD&userIntent=&selectedRoomType=326648967&selectedRatePlan=402256487&searchId=895c4861-ccb2-4b56-a05e-9fe2e470c356'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 text-background/80 hover:text-primary-glow transition-colors text-sm'
              >
                <Globe className='w-4 h-4' />
                Expedia
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-background/20 mt-8 pt-6'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-background/60 text-sm'>
              © {currentYear} Shanvilla Resort. All rights reserved.
            </p>
            <div className='flex items-center gap-4 text-sm text-background/60'>
              <span>Call for reservations: 0111427894</span>
              <span>•</span>
              <a
                href='tel:0791483839'
                className='text-primary-glow hover:text-primary transition-colors duration-200'
              >
                Contact Developer
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
