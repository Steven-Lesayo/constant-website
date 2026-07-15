export const APP_STORE_URL = 'https://apps.apple.com/app/constant-delivery'
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.constant.delivery'

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  headline: 'Constant Delivery – Your World, Delivered Faster',
  subheadline:
    'Real-time tracking, reliable couriers, and seamless experience — just like our mobile app.',
  stats: '10k+ deliveries today',
  rating: '4.9',
}

export const FEATURES = [
  {
    icon: '📍',
    title: 'Real-time GPS Tracking',
    description:
      'Track your package every step of the way with live Google Maps integration, just like ride-hailing.',
  },
  {
    icon: '⚡',
    title: 'Instant Pickup & Delivery',
    description:
      'Request a pickup and get a rider at your location in minutes. On-demand or scheduled, your choice.',
  },
  {
    icon: '🔒',
    title: 'Secure Payments & Chat',
    description:
      'Pay via M-Pesa or cash on delivery. Chat directly with your rider through our in-app messaging.',
  },
  {
    icon: '📅',
    title: 'Schedule or On-Demand',
    description:
      'Book now or plan ahead with scheduled deliveries. Flexible options for businesses and individuals.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Place Your Order',
    description:
      'Tell us pickup and dropoff locations, package details, and choose on-demand or scheduled delivery.',
  },
  {
    step: 2,
    title: 'Track in Real Time',
    description:
      'Watch your rider approach on a live map. Get notified at every milestone — from pickup to delivery.',
  },
  {
    step: 3,
    title: 'Delivered Safely',
    description:
      'Pay securely via M-Pesa or cash. Rate your experience and reorder with one tap.',
  },
]

export const STATS = [
  { value: '25k+', label: 'small businesses served' },
  { value: '100k+', label: 'online shoppers served' },
  { value: '1M+', label: 'packages delivered' },
  { value: '500M+', label: 'gross merchandise value' },
]

export const TESTIMONIALS = [
  {
    name: 'Sarah Wanjiku',
    role: 'Small Business Owner',
    avatar: 'SW',
    quote:
      'Constant has completely transformed how I deliver orders to my customers. Real-time tracking gives us all peace of mind.',
    rating: 5,
  },
  {
    name: 'James Ochieng',
    role: 'Online Store Manager',
    avatar: 'JO',
    quote:
      'The scheduled delivery feature is a game-changer. I can plan my logistics days in advance.',
    rating: 5,
  },
  {
    name: 'Grace Muthoni',
    role: 'Freelancer',
    quote:
      'Affordable, fast, and reliable. I use Constant for all my courier needs across Nairobi.',
    rating: 5,
    avatar: 'GM',
  },
  {
    name: 'Peter Kamau',
    role: 'E-commerce Entrepreneur',
    quote:
      'The M-Pesa integration makes payments seamless. My customers love the pay-on-delivery option.',
    rating: 5,
    avatar: 'PK',
  },
]

export const FAQS = [
  {
    q: 'How does Constant work?',
    a: 'Download the app, create an account, and request a delivery. A nearby rider picks up your package and delivers it to the destination. Track everything in real time.',
  },
  {
    q: 'What happens if a parcel exceeds the 3-day collection period?',
    a: 'If a package is not collected within 3 days, our support team will reach out to arrange redelivery or storage at a nearby hub.',
  },
  {
    q: 'What are your delivery schedules?',
    a: 'We operate 24/7. You can choose on-demand delivery for immediate pickup or schedule for a future date and time.',
  },
  {
    q: 'What if my package is damaged?',
    a: 'We handle every package with care. In the rare event of damage, contact our support team within 24 hours and we will initiate a claims process.',
  },
  {
    q: 'Where are your offices located?',
    a: 'Our headquarters is in Nairobi, with pickup points across major towns in Kenya. Check the app for the nearest location.',
  },
  {
    q: 'What is your refund policy?',
    a: 'If a delivery fails due to reasons on our end, you receive a full refund. Cancellations made before pickup are also fully refunded.',
  },
  {
    q: 'What do you deliver?',
    a: 'Documents, parcels, groceries, food, electronics, and more. If it fits within our size and weight limits, we deliver it.',
  },
]

export const DISPATCH_HUB_URL =
  import.meta.env?.VITE_DISPATCH_HUB_URL || 'http://localhost:8080'

export const APK_URL = '/constant.apk'

export const CONTACT = {
  phone: '+254 712 345678',
  email: 'hello@constantdelivery.co.ke',
  social: [
    { label: 'X', href: 'https://x.com/constantdelivery' },
    { label: 'IG', href: 'https://instagram.com/constantdelivery' },
    { label: 'FB', href: 'https://facebook.com/constantdelivery' },
    { label: 'LK', href: 'https://linkedin.com/company/constantdelivery' },
  ],
}

export const FOOTER_LINKS = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#hero' },
      { label: 'Features', href: '#features' },
      { label: 'How it Works', href: '#how-it-works' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Contact Us', href: '#contact' },
      { label: 'Privacy Policy', href: `${DISPATCH_HUB_URL}/privacy` },
      { label: 'Terms & Conditions', href: `${DISPATCH_HUB_URL}/terms` },
    ],
  },
  {
    title: 'Download',
    links: [
      { label: 'iOS App', href: APP_STORE_URL },
      { label: 'Android App', href: APK_URL },
    ],
  },
]
