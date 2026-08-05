import type { MetadataRoute } from 'next';
import { blogPosts } from '@/lib/blog-posts';

const SITE_URL = 'https://www.rafidsystem.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/team`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/demo`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/privacy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.flatMap((post) => [
    {
      url: `${SITE_URL}/blog/${encodeURIComponent(post.slugEn)}`,
      lastModified: new Date(post.publishedDate),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    {
      url: `${SITE_URL}/blog/${encodeURIComponent(post.slugAr)}`,
      lastModified: new Date(post.publishedDate),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
  ]);

  return [...staticPages, ...blogPages];
}
