import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { blogPosts, getBlogPost } from '@/lib/blog-posts';

type Lang = 'ar' | 'en';

const STRINGS = {
  ar: {
    back: 'العودة للمدونة',
    relatedPosts: 'مقالات ذات صلة',
    share: 'شارك المقالة',
    minutes: 'دقائق قراءة',
  },
  en: {
    back: 'Back to Blog',
    relatedPosts: 'Related Posts',
    share: 'Share Article',
    minutes: 'min read',
  },
};

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Determine language from slug
  let lang: Lang = 'en';
  for (const post of blogPosts) {
    if (post.slugAr === params.slug) {
      lang = 'ar';
      break;
    } else if (post.slugEn === params.slug) {
      lang = 'en';
      break;
    }
  }

  const isRtl = lang === 'ar';
  const t = STRINGS[lang];

  const post = getBlogPost(params.slug, lang);

  if (!post) {
    return (
      <div dir={isRtl ? 'rtl' : 'ltr'} className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            {lang === 'ar' ? 'المقالة غير موجودة' : 'Post not found'}
          </h1>
          <Link href="/blog" className="text-[#FF7A00] font-semibold hover:underline">
            {t.back}
          </Link>
        </div>
      </div>
    );
  }

  // Get post data based on language
  const postData = {
    title: lang === 'ar' ? post.titleAr : post.titleEn,
    content: lang === 'ar' ? post.contentAr : post.contentEn,
    category: lang === 'ar' ? post.categoryAr : post.categoryEn,
    readTime: lang === 'ar' ? post.readTimeAr : post.readTimeEn,
  };

  // Get related posts (same category, different post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="fixed top-0 right-0 left-0 z-50 bg-white border-b border-slate-200 px-4 py-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#FF7A00]">
            رافد
          </Link>
          <Link
            href={`/blog/${lang === 'ar' ? 'rafid-mobile-app-launch' : 'تطبيق-رافد-موبايل'}`}
            className="px-4 py-2 bg-[#FF7A00] text-white rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            {lang === 'ar' ? 'EN' : 'AR'}
          </Link>
        </div>
      </div>

      {/* Back Link */}
      <div className="pt-32 pb-6 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-[#FF7A00] font-semibold hover:gap-3 transition-all">
            <ArrowLeft className="h-4 w-4" />
            {t.back}
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-block px-4 py-1.5 bg-[#FF7A00]/10 text-[#FF7A00] font-semibold rounded-full text-sm">
                {postData.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">{postData.title}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-slate-600 pb-6 border-b border-slate-200">
              {/* Author */}
              <div className="flex items-center gap-3">
                <Image
                  src={post.authorImage}
                  alt={post.author}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold text-slate-900">{post.author}</p>
                  <p className="text-sm text-slate-500">{post.authorRole}</p>
                </div>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>
                  {new Date(post.publishedDate).toLocaleDateString(lang === 'ar' ? 'ar-SA' : 'en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </span>
              </div>

              {/* Read Time */}
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>
                  {postData.readTime} {t.minutes}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <Image src={post.featuredImage} alt={postData.title} fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{
              __html: postData.content
                .replace(/^## (.*?)$/gm, '<h2 class="text-3xl font-bold text-slate-900 mt-8 mb-4">$1</h2>')
                .replace(/^### (.*?)$/gm, '<h3 class="text-2xl font-bold text-slate-900 mt-6 mb-3">$1</h3>')
                .replace(/^\- (.*?)$/gm, '<li class="ml-6 text-slate-600 mb-2">$1</li>')
                .replace(/<li/g, '<ul class="list-disc pl-6 mb-4"><li class="text-slate-600 mb-2"')
                .replace(/(<\/li>)(?!.*<li)/g, '$1</ul>')
                .replace(/^(?!<[^>]*>)(.*?)$/gm, '<p class="text-slate-600 leading-relaxed mb-4">$1</p>')
                .replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>')
                .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                .split('\n')
                .join(''),
            }}
          />
        </div>
      </section>

      {/* Share Section */}
      <section className="py-12 px-4 bg-slate-50 border-t border-b border-slate-200">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{t.share}</h3>
            <p className="text-slate-600">
              {lang === 'ar' ? 'شارك هذه المقالة مع فريقك' : 'Share this article with your team'}
            </p>
          </div>
          <div className="flex gap-3">
            {[
              { name: 'Facebook', color: 'hover:bg-blue-500' },
              { name: 'Twitter', color: 'hover:bg-blue-400' },
              { name: 'LinkedIn', color: 'hover:bg-blue-600' },
            ].map((social) => (
              <button
                key={social.name}
                className={`p-3 rounded-lg bg-white border border-slate-200 transition ${social.color}`}
              >
                <Share2 className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-black text-slate-900 mb-12"
            >
              {t.relatedPosts}
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relPost, idx) => {
                const relData = {
                  title: lang === 'ar' ? relPost.titleAr : relPost.titleEn,
                  excerpt: lang === 'ar' ? relPost.excerptAr : relPost.excerptEn,
                  slug: lang === 'ar' ? relPost.slugAr : relPost.slugEn,
                };
                return (
                  <motion.div
                    key={relPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link href={`/blog/${relData.slug}`}>
                      <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                        <Image
                          src={relPost.featuredImage}
                          alt={relData.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#FF7A00] transition line-clamp-2 mb-2">
                        {relData.title}
                      </h3>
                      <p className="text-slate-600 text-sm line-clamp-2">{relData.excerpt}</p>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#FF7A00] to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-white mb-4"
          >
            {lang === 'ar' ? 'هل أنت مستعد لتحسين إدارتك للعقارات؟' : 'Ready to transform your property management?'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-white/90 mb-8 text-lg"
          >
            {lang === 'ar'
              ? 'اكتشف كيف يمكن لرافد أن تساعدك'
              : 'Discover how Rafid can help you'}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/#contact"
              className="inline-block px-8 py-3 bg-white text-[#FF7A00] font-bold rounded-xl hover:bg-slate-100 transition"
            >
              {lang === 'ar' ? 'احجز عرضاً توضيحياً' : 'Book a Demo'}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

// Generate static params for dynamic routes
export function generateStaticParams() {
  return blogPosts.flatMap((post) => [
    { slug: post.slugEn },
    { slug: post.slugAr },
  ]);
}
