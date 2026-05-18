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
    titleEn: 'Property Intelligence Command Center',
    titleAr: 'مركز التحكم بذكاء العقارات',
    descriptionEn: 'Unified dashboard combining all property metrics, revenue insights, occupancy rates, and operational KPIs in real-time. Monitor your entire property portfolio from a single screen.',
    descriptionAr: 'لوحة تحكم موحدة تجمع جميع مقاييس العقارات والرؤى المالية ومعدلات الإشغال وأداء العمليات في الوقت الفعلي. راقب محفظة عقارك بالكامل من شاشة واحدة.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&h=600&fit=crop&q=80',
    icon: BarChart3,
    features: ['Real-time KPI metrics', 'Revenue & income tracking', 'Occupancy analysis', 'System intelligence alerts'],
    featuresAr: ['مقاييس الأداء الحية', 'تتبع الإيرادات والدخل', 'تحليل الإشغال', 'تنبيهات ذكاء النظام'],
  },
  {
    id: 2,
    titleEn: 'Intelligence Hub - Advanced Analytics',
    titleAr: 'مركز الذكاء - التحليلات المتقدمة',
    descriptionEn: 'Comprehensive analytics platform with Operations & Maintenance monitoring, Financial Performance tracking, and Owner Portfolio Intelligence. AI-powered insights for informed decision-making.',
    descriptionAr: 'منصة تحليلات شاملة مع مراقبة العمليات والصيانة وتتبع الأداء المالي وذكاء محفظة المالك. رؤى مدعومة بالذكاء الاصطناعي لاتخاذ قرارات مستنيرة.',
    image: 'https://images.unsplash.com/photo-1551530820-6786e6b00d47?w=900&h=600&fit=crop&q=80',
    icon: TrendingUp,
    features: ['Operations & Maintenance insights', 'Financial Performance analytics', 'Owner Portfolio Intelligence', 'AI-powered predictions'],
    featuresAr: ['رؤى العمليات والصيانة', 'تحليلات الأداء المالي', 'ذكاء محفظة المالك', 'تنبؤات مدعومة بالذكاء الاصطناعي'],
  },
  {
    id: 3,
    titleEn: 'Smart Property Management System',
    titleAr: 'نظام إدارة العقارات الذكي',
    descriptionEn: 'Complete centralized management of properties, units, tenants, and leases. Digital document storage, automated workflows, and tenant communication all in one platform.',
    descriptionAr: 'إدارة مركزية شاملة للعقارات والوحدات والمستأجرين واتفاقيات الإيجار. تخزين المستندات الرقمي وسير العمل الآلي والتواصل مع المستأجرين في منصة واحدة.',
    image: 'https://images.unsplash.com/photo-1579621970563-430f63602022?w=900&h=600&fit=crop&q=80',
    icon: Home,
    features: ['Unit & tenant management', 'Lease agreement tracking', 'Digital document storage', 'Automated workflows'],
    featuresAr: ['إدارة الوحدات والمستأجرين', 'تتبع اتفاقيات الإيجار', 'تخزين المستندات الرقمي', 'سير العمل الآلي'],
  },
  {
    id: 4,
    titleEn: 'Work Order & Maintenance Tracking',
    titleAr: 'تتبع أوامر العمل والصيانة',
    descriptionEn: 'Streamlined maintenance operations with intelligent work order creation, automatic scheduling, technician assignment, and real-time progress tracking. Reduce downtime with predictive maintenance.',
    descriptionAr: 'عمليات صيانة مبسطة مع إنشاء أوامر عمل ذكية والجدولة التلقائية وتعيين الفنيين وتتبع التقدم في الوقت الفعلي. قلل وقت التوقف عن طريق الصيانة التنبؤية.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&h=600&fit=crop&q=80',
    icon: Wrench,
    features: ['Intelligent work order creation', 'Automatic scheduling & routing', 'Technician assignment & tracking', 'Predictive maintenance'],
    featuresAr: ['إنشاء أوامر عمل ذكية', 'الجدولة والتوجيه التلقائي', 'تعيين الفنيين والتتبع', 'الصيانة التنبؤية'],
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
