import type { Metadata } from 'next';
import BlogPageClient from './client';

export const metadata: Metadata = {
  title: 'المدونة | Blog',
  description:
    'مقالات وتحديثات من فريق رافد حول إدارة العقارات والمرافق، أفضل الممارسات، وآخر مستجدات المنصة.',
  alternates: { canonical: 'https://www.rafidsystem.com/blog' },
};

export default function BlogPage() {
  return <BlogPageClient />;
}
