import { blogPosts, getBlogPost } from '@/lib/blog-posts';
import BlogPostClient from './client';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return blogPosts.flatMap((post) => [
    { slug: post.slugEn },
    { slug: post.slugAr },
  ]);
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const lang = blogPosts.some((p) => p.slugAr === slug) ? 'ar' : 'en';
  const post = getBlogPost(slug, lang);
  if (!post) return { title: 'المدونة | Blog' };
  return {
    title: lang === 'ar' ? post.titleAr : post.titleEn,
    description: lang === 'ar' ? post.excerptAr : post.excerptEn,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  return <BlogPostClient slug={slug} />;
}
