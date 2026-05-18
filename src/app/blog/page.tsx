'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { blogPosts, type BlogPost } from '@/lib/blog-posts';

type Lang = 'ar' | 'en';

const STRINGS = {
  ar: {
    title: 'مدونة رافد',
    subtitle: 'آخر الأخبار والمقالات حول إدارة العقارات والمرافق',
    categories: {
      'product-updates': 'تحديثات المنتج',
      'case-studies': 'دراسات الحالة',
      'industry-insights': 'رؤى الصناعة',
      'best-practices': 'أفضل الممارسات',
      'company-news': 'أخبار الشركة',
    },
    allPosts: 'جميع المقالات',
    readMore: 'اقرأ المزيد',
    minutes: 'دقائق قراءة',
    noPosts: 'لا توجد مقالات في هذه الفئة',
  },
  en: {
    title: 'Rafid Blog',
    subtitle: 'Latest news and articles about property and facilities management',
    categories: {
      'product-updates': 'Product Updates',
      'case-studies': 'Case Studies',
      'industry-insights': 'Industry Insights',
      'best-practices': 'Best Practices',
      'company-news': 'Company News',
    },
    allPosts: 'All Posts',
    readMore: 'Read More',
    minutes: 'min read',
    noPosts: 'No posts in this category',
  },
};

export default function BlogPage() {
  const [lang, setLang] = useState<Lang>('ar');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const isRtl = lang === 'ar';
  const t = STRINGS[lang];

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)));

  // Filter posts
  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory)
    : blogPosts;

  // Get correct fields based on language
  const getPostData = (post: BlogPost) => ({
    title: lang === 'ar' ? post.titleAr : post.titleEn,
    excerpt: lang === 'ar' ? post.excerptAr : post.excerptEn,
    slug: lang === 'ar' ? post.slugAr : post.slugEn,
    readTime: lang === 'ar' ? post.readTimeAr : post.readTimeEn,
    category: lang === 'ar' ? post.categoryAr : post.categoryEn,
  });

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="fixed top-0 right-0 left-0 z-50 bg-white border-b border-slate-200 px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-[#FF7A00]">
            رافد
          </Link>
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="px-4 py-2 bg-[#FF7A00] text-white rounded-lg font-semibold hover:bg-orange-600 transition"
          >
            {lang === 'ar' ? 'EN' : 'AR'}
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-slate-50 to-white px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black text-slate-900 mb-4"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 px-4 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === null
                  ? 'bg-[#FF7A00] text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {t.allPosts}
            </motion.button>

            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  selectedCategory === category
                    ? 'bg-[#FF7A00] text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {lang === 'ar'
                  ? STRINGS.ar.categories[category as keyof typeof STRINGS.ar.categories]
                  : STRINGS.en.categories[category as keyof typeof STRINGS.en.categories]}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-xl text-slate-600">{t.noPosts}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, idx) => {
                const data = getPostData(post);
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="group flex flex-col bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-[#FF7A00]/50 hover:shadow-lg transition-all"
                  >
                    {/* Featured Image */}
                    <div className="relative h-48 overflow-hidden bg-slate-100">
                      <Image
                        src={post.featuredImage}
                        alt={data.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 left-auto">
                        <span className="inline-block px-3 py-1 bg-[#FF7A00] text-white text-sm font-semibold rounded-full">
                          {data.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[#FF7A00] transition">
                        {data.title}
                      </h3>

                      <p className="text-slate-600 mb-4 flex-1 line-clamp-3">{data.excerpt}</p>

                      {/* Meta Info */}
                      <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 pb-4 border-b border-slate-200">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.publishedDate).toLocaleDateString(
                            lang === 'ar' ? 'ar-SA' : 'en-US',
                            { month: 'short', day: 'numeric', year: 'numeric' },
                          )}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {data.readTime} {t.minutes}
                        </div>
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-3 mb-4">
                        <Image
                          src={post.authorImage}
                          alt={post.author}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full"
                        />
                        <div className="text-sm">
                          <p className="font-semibold text-slate-900">{post.author}</p>
                          <p className="text-slate-500 text-xs">{post.authorRole}</p>
                        </div>
                      </div>

                      {/* Read More Link */}
                      <Link
                        href={`/blog/${data.slug}`}
                        className="inline-flex items-center gap-2 text-[#FF7A00] font-semibold hover:gap-3 transition-all group/link"
                      >
                        {t.readMore}
                        <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#FF7A00]/10 to-orange-50">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-black text-slate-900 mb-4"
          >
            {lang === 'ar'
              ? 'ابق على اطلاع على آخر الأخبار'
              : 'Stay Updated With Our Latest News'}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-slate-600 mb-6"
          >
            {lang === 'ar'
              ? 'اشترك في نشرتنا الإخبارية للحصول على أفكار وتحديثات جديدة مباشرة إلى بريدك الإلكتروني'
              : 'Subscribe to our newsletter for fresh insights and updates delivered to your inbox'}
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-2 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder={lang === 'ar' ? 'بريدك الإلكتروني' : 'Your email'}
              className="flex-1 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:border-[#FF7A00]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#FF7A00] text-white font-semibold rounded-lg hover:bg-orange-600 transition"
            >
              {lang === 'ar' ? 'اشترك' : 'Subscribe'}
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}
