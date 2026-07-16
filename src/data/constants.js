export const APP_STORE_URL = 'https://apps.apple.com/app/constant-delivery'
export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.constant.delivery'

export const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'Features', href: '#features' },
  { label: 'How it Works', href: '#how-it-works' },
  { label: 'For Business', href: '#for-business' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  eyebrow: 'Delivery, done right.',
  headline: 'Your delivery. Tracked, on time, every time.',
  subheadline:
    'Constant connects you with trusted riders for on-demand and scheduled deliveries — with live GPS tracking, in-app chat, and pay-your-way convenience. No guessing where your package is. No waiting on hold.',
  microcopy: 'Available on Android \u00B7 iOS coming soon',
}

export const FEATURES = [
  {
    icon: '📍',
    title: 'Real-Time Tracking',
    headline: 'Watch it move, not just wonder.',
    description:
      'Track your rider on a live map from pickup to drop-off. No more "where\'s my order" messages \u2014 just open the app and see for yourself.',
  },
  {
    icon: '💬',
    title: 'In-App Chat',
    headline: 'Talk directly to your rider.',
    description:
      'Give directions, confirm details, or just say "I\'m at the gate" \u2014 all without sharing your phone number.',
  },
  {
    icon: '💳',
    title: 'Flexible Payments',
    headline: 'Pay however works for you.',
    description:
      'M-Pesa or cash \u2014 Constant fits into your routine, not the other way around.',
  },
  {
    icon: '📅',
    title: 'Schedule or Go Now',
    headline: 'Plan ahead, or go right now.',
    description:
      'Need something delivered next Tuesday at 9am? Or in the next 20 minutes? Constant handles both.',
  },
  {
    icon: '🔔',
    title: 'Instant Notifications',
    headline: 'Stay in the loop, automatically.',
    description:
      'From "rider assigned" to "delivered," you\u2019ll know the moment something changes \u2014 no need to keep checking.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Request',
    description:
      'Tell us what you need delivered and where it\u2019s going. Pick now or schedule for later.',
  },
  {
    step: 2,
    title: 'Track',
    description:
      'We match you with a nearby rider. Watch them move toward you in real time.',
  },
  {
    step: 3,
    title: 'Receive',
    description:
      'Your delivery arrives. Rate your experience, and you\u2019re done.',
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
    name: 'Amina',
    role: 'Small Business Owner',
    avatar: 'A',
    quote:
      'I run a small bakery and Constant has become part of how I operate. My customers get real-time updates without me lifting a finger.',
    rating: 5,
  },
  {
    name: 'Brian',
    role: 'Regular Customer',
    avatar: 'B',
    quote:
      'The tracking map is the whole reason I switched. I actually know when my parcel is arriving instead of guessing.',
    rating: 5,
  },
  {
    name: 'Faith',
    role: 'Merchant Partner',
    avatar: 'F',
    quote:
      'Simple to use, and M-Pesa built in makes it painless. It just works.',
    rating: 5,
  },
]

export const FAQS = [
  {
    q: 'Is Constant available in my area?',
    a: 'We\u2019re actively expanding coverage zone by zone, starting in Nairobi. Download the app to check availability at your location.',
  },
  {
    q: 'How do I pay?',
    a: 'Choose M-Pesa or cash at the point of delivery \u2014 whichever works best for you.',
  },
  {
    q: 'Can I schedule a delivery for later?',
    a: 'Yes. Choose a date and time when you request your delivery, and we\u2019ll take care of the rest.',
  },
  {
    q: 'What if I need to contact my rider?',
    a: 'Use the in-app chat to message your rider directly \u2014 no phone numbers exchanged, no hassle.',
  },
  {
    q: 'Is my package tracked the whole way?',
    a: 'From the moment a rider is assigned to the moment it\u2019s delivered, you\u2019ll see it live on the map.',
  },
  {
    q: 'I run a business \u2014 how is this different from personal delivery?',
    a: 'Merchant accounts get a dashboard for managing multiple deliveries, tracking riders, and reviewing performance \u2014 built for volume, not just one-off orders.',
  },
  {
    q: 'Is my package insured?',
    a: 'Every package is covered up to KES 30,000. For higher-value items, contact support before dispatch.',
  },
]

export const DISPATCH_HUB_URL =
  import.meta.env?.VITE_DISPATCH_HUB_URL || 'http://localhost:8080'

export const APK_URL = '/constant.apk'

export const CONTACT = {
  phone: '0799200020',
  email: 'lesitez@live.com',
  social: [
    { label: 'X', href: 'https://x.com/constantdelivery' },
    { label: 'IG', href: 'https://instagram.com/constantdelivery' },
    { label: 'FB', href: 'https://facebook.com/constantdelivery' },
    { label: 'LK', href: 'https://linkedin.com/company/constantdelivery' },
  ],
}

export const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'How It Works', href: '#how-it-works' },
      { label: 'For Business', href: '#for-business' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: `${DISPATCH_HUB_URL}/about` },
      { label: 'Careers', href: `${DISPATCH_HUB_URL}/careers` },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: `${DISPATCH_HUB_URL}/privacy` },
      { label: 'Terms of Service', href: `${DISPATCH_HUB_URL}/terms` },
    ],
  },
  {
    title: 'Get the App',
    links: [
      { label: 'Google Play', href: APK_URL },
      { label: 'App Store (coming soon)', href: APP_STORE_URL },
    ],
  },
]
