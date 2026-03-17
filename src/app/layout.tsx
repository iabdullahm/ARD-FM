import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Rafid Estate | إدارة عقاراتك بذكاء',
  description: 'نظام متكامل لإدارة العقارات والمرافق بسهولة واحترافية',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;700;800&family=Inter:wght@400;500;600;700;800&family=Tajawal:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
