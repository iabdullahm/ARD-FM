import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

const SITE_URL = 'https://www.rafidsystem.com';
const SITE_NAME = 'Rafid | رافد';
const TITLE_AR = 'رافد | نظام إدارة المرافق والعقارات في سلطنة عُمان';
const DESCRIPTION_AR =
  'منصة سحابية متكاملة لإدارة المرافق والعقارات: تقليل زمن الإصلاح بنسبة 30%، توفر 99.99%، توسعة لـ50+ منشأة في الساعة، مع تشفير AES-256 ومصادقة ثنائية.';
const OG_IMAGE =
  '/images/screenshots/hero.svg';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FF7A00',
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE_AR,
    template: '%s | رافد Rafid',
  },
  description: DESCRIPTION_AR,
  keywords: [
    'رافد', 'Rafid', 'إدارة المرافق', 'إدارة العقارات',
    'Facility Management', 'Property Management', 'FM software',
    'سلطنة عُمان', 'Oman', 'مسقط', 'CAFM',
  ],
  authors: [{ name: 'Creative Techno LLC' }],
  creator: 'Creative Techno LLC',
  publisher: 'Creative Techno LLC',
  alternates: {
    canonical: SITE_URL,
    languages: { 'ar-OM': SITE_URL, 'en-OM': SITE_URL + '/en' },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_OM',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE_AR,
    description: DESCRIPTION_AR,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'لوحة تحكم رافد' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE_AR,
    description: DESCRIPTION_AR,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  icons: {
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '1024x1024' }],
    apple: '/icon.png',
  },
  category: 'business',
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      name: 'Rafid Facility Management System',
      alternateName: 'رافد',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Web, iOS, Android',
      description: DESCRIPTION_AR,
      url: SITE_URL,
      image: OG_IMAGE,
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'OMR',
        lowPrice: '39',
        highPrice: '79',
        offerCount: 3,
      },
      featureList: [
        'إدارة العقارات والوحدات',
        'إدارة العقود والمستأجرين',
        'متابعة الصيانة وأوامر العمل',
        'مسح QR للأصول',
        'تتبع GPS للفنيين',
        'مؤقتات SLA تلقائية',
        'تشفير AES-256 ومصادقة ثنائية',
        'العمل بدون إنترنت',
      ],
    },
    {
      '@type': 'Organization',
      name: 'Creative Techno LLC',
      url: SITE_URL,
      logo: '/images/logo.png',
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        availableLanguage: ['Arabic', 'English'],
        areaServed: 'OM',
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'OM',
        addressLocality: 'Muscat',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;700;800&family=Inter:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
