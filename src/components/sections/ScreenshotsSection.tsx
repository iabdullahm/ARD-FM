'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, BarChart3, Home, Wrench, TrendingUp } from 'lucide-react';

interface Screenshot {
  id: number;
  titleEn: string;
  titleAr: string;
  descriptionEn: string;
  descriptionAr: string;
  image: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  featuresAr: string[];
}

const screenshots: Screenshot[] = [
  {
    id: 1,
    titleEn: 'Property Intelligence Dashboard',
    titleAr: 'لوحة ذكاء العقارات',
    descriptionEn: 'Real-time dashboard showcasing property performance metrics, occupancy rates, and key operational indicators.',
    descriptionAr: 'لوحة تحكم في الوقت الفعلي تعرض مقاييس أداء العقارات ومعدلات الإشغال والمؤشرات التشغيلية الرئيسية.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&q=80',
    icon: BarChart3,
    features: ['Real-time metrics', 'Property overview', 'Performance KPIs', 'Alert system'],
    featuresAr: ['المقاييس الحية', 'نظرة عامة على العقارات', 'مؤشرات الأداء الرئيسية', 'نظام التنبيهات'],
  },
  {
    id: 2,
    titleEn: 'Financial Performance Hub',
    titleAr: 'مركز الأداء المالي',
    descriptionEn: 'Comprehensive financial analytics including revenue streams, expense tracking, and profitability analysis.',
    descriptionAr: 'تحليلات مالية شاملة تشمل تدفقات الإيرادات وتتبع النفقات وتحليل الربحية.',
    image: 'https://images.unsplash.com/photo-1551530820-6786e6b00d47?w=900&h=600&fit=crop&q=80',
    icon: TrendingUp,
    features: ['Revenue analytics', 'Expense management', 'Financial reports', 'Trend analysis'],
    featuresAr: ['تحليل الإيرادات', 'إدارة النفقات', 'التقارير المالية', 'تحليل الاتجاهات'],
  },
  {
    id: 3,
    titleEn: 'Property Management Module',
    titleAr: 'وحدة إدارة العقارات',
    descriptionEn: 'Centralized management of all properties, units, lease agreements, and tenant information.',
    descriptionAr: 'إدارة مركزية لجميع العقارات والوحدات واتفاقيات الإيجار ومعلومات المستأجرين.',
    image: 'https://images.unsplash.com/photo-1579621970563-430f63602022?w=900&h=600&fit=crop&q=80',
    icon: Home,
    features: ['Unit management', 'Lease tracking', 'Document storage', 'Tenant info'],
    featuresAr: ['إدارة الوحدات', 'تتبع الإيجارات', 'تخزين المستندات', 'معلومات المستأجرين'],
  },
  {
    id: 4,
    titleEn: 'Maintenance Work Orders',
    titleAr: 'أوامر العمل الصيانية',
    descriptionEn: 'Efficient work order management with scheduling, assignment, and completion tracking.',
    descriptionAr: 'إدارة فعالة لأوامر العمل مع الجدولة والتعيين وتتبع الإنجاز.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop&q=80',
    icon: Wrench,
    features: ['Work order creation', 'Service scheduling', 'Technician assignment', 'Progress tracking'],
    featuresAr: ['إنشاء أوامر العمل', 'جدولة الخدمات', 'تعيين الفنيين', 'تتبع التقدم'],
  },
];

export function ScreenshotsSection({ lang = 'ar' }: { lang?: 'ar' | 'en' }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isRtl = lang === 'ar';

  const current = screenshots[activeIndex];
  const Icon = current.icon;

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="screenshots" className="py-24 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-[#FF7A00]">
            {isRtl ? 'استكشف النظام' : 'Explore the System'}
          </span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            {isRtl ? 'الميزات الأساسية لرافد' : 'Core Features of Rafid'}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {isRtl
              ? 'استكشف أقوى أدوات إدارة العقارات والمنشآت المتاحة اليوم'
              : 'Discover the most powerful property and facilities management tools available today'}
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Image */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-200">
              <Image
                src={current.image}
                alt={isRtl ? current.titleAr : current.titleEn}
                width={600}
                height={400}
                quality={85}
                priority
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className={`absolute ${isRtl ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg`}
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6 text-slate-900" />
            </button>
            <button
              onClick={handleNext}
              className={`absolute ${isRtl ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-lg`}
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6 text-slate-900" />
            </button>
          </motion.div>

          {/* Content */}
          <motion.div
            key={`content-${activeIndex}`}
            initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FF7A00]/10 text-[#FF7A00]">
                  <Icon className="h-6 w-6" />
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-slate-900">
                  {isRtl ? current.titleAr : current.titleEn}
                </h3>
              </div>
            </div>

            <p className="text-lg text-slate-600 mb-8">
              {isRtl ? current.descriptionAr : current.descriptionEn}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h4 className="font-semibold text-slate-900 mb-4">
                {isRtl ? 'المميزات الرئيسية:' : 'Key Features:'}
              </h4>
              <ul className="space-y-3">
                {(isRtl ? current.featuresAr : current.features).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#FF7A00] font-bold mt-1">✓</span>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Indicators */}
            <div className="flex gap-2">
              {screenshots.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeIndex ? 'bg-[#FF7A00] w-8' : 'bg-slate-300 w-2'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
