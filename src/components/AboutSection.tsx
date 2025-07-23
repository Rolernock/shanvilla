import { Card, CardContent } from '@/components/ui/card'
import { Bed, UtensilsCrossed, Wifi, Calendar, Gift, Music } from 'lucide-react'

const serviceCategories = [
  {
    title: 'Accommodation',
    icon: Bed,
    services: [
      'Executive Rooms',
      'VIP Suites',
      'Free Room Service for VIP & Excecutive Rooms',
      'Late Checkout'
    ]
  },
  {
    title: 'Dining & Catering',
    icon: UtensilsCrossed,
    services: ['Outside Catering', 'Custom Menus']
  },
  {
    title: 'Events & Conferences',
    icon: Calendar,
    services: [
      'Corporate Conferences',
      'Business Meetings',
      'Audio-Visual Equipment',
      'Event Planning'
    ]
  },
  {
    title: 'Celebrations',
    icon: Gift,
    services: [
      'Graduation Parties',
      'Birthday Parties',
      'Mbuzi (Goat) Parties',
      'After Dowry Celebrations'
    ]
  },
  {
    title: 'Entertainment',
    icon: Music,
    services: [
      'Resident DJ (Fri-Sun)',
      'Live Music Nights',
      'Themed Parties',
      'Dance Floors'
    ]
  },
  {
    title: 'Amenities',
    icon: Wifi,
    services: [
      'Free High-Speed WiFi',
      'Secure Parking',
      '24/7 Security',
      'Convenient Location'
    ]
  }
]

const AboutSection = () => {
  return (
    <section className='py-20 bg-gradient-warm'>
      <div className='container mx-auto px-4 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-16 animate-fade-in'>
          <h2 className='text-4xl md:text-5xl font-bold text-foreground mb-6'>
            Our Comprehensive Services
          </h2>
          <p className='text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed'>
            Shanvilla Hotel offers premium hospitality services tailored for
            both leisure and business needs in the heart of Murang'a.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
          {serviceCategories.map((category, index) => (
            <Card
              key={index}
              className='group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/50'
            >
              <CardContent className='p-6'>
                <div className='flex items-center gap-4 mb-4'>
                  <div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center'>
                    <category.icon className='w-6 h-6 text-primary' />
                  </div>
                  <h3 className='text-xl font-semibold text-foreground'>
                    {category.title}
                  </h3>
                </div>
                <ul className='space-y-2'>
                  {category.services.map((service, i) => (
                    <li key={i} className='flex items-start gap-3'>
                      <span className='inline-flex items-center justify-center w-5 h-5 bg-primary/10 text-primary rounded-full mt-0.5'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='12'
                          height='12'
                          viewBox='0 0 24 24'
                          fill='none'
                          stroke='currentColor'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        >
                          <polyline points='20 6 9 17 4 12'></polyline>
                        </svg>
                      </span>
                      <span className='text-muted-foreground'>{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
