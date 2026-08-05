import type { Metadata } from 'next';
import AboutPageClient from './client';

export const metadata: Metadata = {
  title: 'عن رافد | About Rafid',
  description:
    'تعرّف على قصة رافد: منصة عُمانية تأسست عام 2023 لتحويل إدارة العقارات والمرافق في سلطنة عُمان — رؤيتنا، قيمنا، وفريقنا.',
  alternates: { canonical: 'https://www.rafidsystem.com/about' },
};

export default function AboutPage() {
  return <AboutPageClient />;
}
