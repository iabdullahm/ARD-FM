import type { Metadata, Viewport } from 'next';
import { Cairo, Inter } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { LanguageProvider } from '@/contexts/LanguageContext';

const cairo = Cairo({
  subsets: ['arabic', 'latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-cairo',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-inter',
  display: 'swap',
});

const SITE_URL = 'https://www.rafidsystem.com';
const SITE_NAME = 'Rafid | رافد';
const TITLE_AR = 'رافد | نظام إدارة المرافق والعقارات في سلطنة عُمان';
const DESCRIPTION_AR =
  'منصة سحابية متكاملة لإدارة المرافق والعقارات في سلطنة عُمان: إدارة العقود والصيانة والمدفوعات، مسح QR، تتبع GPS للفنيين، وتشفير AES-256 مع مصادقة ثنائية.';
const OG_IMAGE = '/images/og-image.png';

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
  },
  openGraph: {
    type: 'website',
    locale: 'ar_OM',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: TITLE_AR,
    description: DESCRIPTION_AR,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: 'رافد — نظام إدارة المرافق والعقارات' }],
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
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: '/apple-icon.png',
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
      image: `${SITE_URL}/images/og-image.png`,
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
      logo: `${SITE_URL}/images/logo.png`,
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'abdullah.j@creativetechno.net',
        telephone: '+968-9297-5614',
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
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
