import type { Metadata } from 'next';
import DemoPageClient from './client';

export const metadata: Metadata = {
  title: 'تجربة النظام | Live Demo',
  description:
    'جرّب لوحة تحكم رافد مباشرة في متصفحك: إدارة العقارات والمستأجرين والعقود وطلبات الصيانة ببيانات تجريبية.',
  alternates: { canonical: 'https://www.rafidsystem.com/demo' },
};

export default function DemoPage() {
  return <DemoPageClient />;
}
