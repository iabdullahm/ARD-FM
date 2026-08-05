'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ScreenshotItem {
  id: string;
  titleEn: string;
  titleAr: string;
  descEn: string;
  descAr: string;
  image: string;
  featuresEn: string[];
  featuresAr: string[];
}

interface ScreenshotsSectionProps {
  lang?: 'ar' | 'en';
}

export function ScreenshotsSection({ lang = 'ar' }: ScreenshotsSectionProps) {
  const isArabic = lang === 'ar';

  const screenshots: ScreenshotItem[] = [
    {
      id: 'dashboard',
      titleEn: 'AI-Powered Analytics Dashboard',
      titleAr: 'لوحة التحكم التحليلية بقوة الذكاء الاصطناعي',
      descEn: 'Get instant insights into your entire property portfolio. Real-time KPIs, occupancy rates, maintenance metrics, and financial overviews at a glance.',
      descAr: 'احصل على رؤى فورية حول محفظتك العقارية بأكملها. مؤشرات الأداء الرئيسية، معدلات الإشغال، مقاييس الصيانة، وملخصات مالية في لمحة واحدة.',
      image: '/screenshots/dashboard.webp',
      featuresEn: ['Real-time KPIs', 'Occupancy Tracking', 'Revenue Insights', 'System Intelligence'],
      featuresAr: ['مؤشرات KPI فورية', 'تتبع الإشغال', 'رؤى الإيرادات', 'ذكاء النظام']
    },
    {
      id: 'work-orders',
      titleEn: 'Streamlined Maintenance Management',
      titleAr: 'إدارة الصيانة المبسطة',
      descEn: 'Create, assign, and track work orders instantly. Never miss a maintenance deadline with status tracking and priority management.',
      descAr: 'أنشئ وعيّن وتابع أوامر العمل على الفور. لا تفوت مواعيد الصيانة أبداً مع تتبع الحالة وإدارة الأولويات.',
      image: '/screenshots/work-orders.webp',
      featuresEn: ['Quick Creation', 'Status Tracking', 'Export Reports', 'Priority Management'],
      featuresAr: ['إنشاء سريع', 'تتبع الحالة', 'تصدير التقارير', 'إدارة الأولويات']
    },
    {
      id: 'properties',
      titleEn: 'Master Control of All Properties',
      titleAr: 'السيطرة الكاملة على جميع العقارات',
      descEn: 'Manage multiple properties, buildings, and units from one unified dashboard. Track occupancy, building details, and portfolio health.',
      descAr: 'أدر عقارات وأبنية ووحدات متعددة من لوحة تحكم موحدة. تابع الإشغال وتفاصيل المباني وصحة المحفظة.',
      image: '/screenshots/properties.webp',
      featuresEn: ['Portfolio Overview', 'Occupancy Metrics', 'Unit Tracking', 'Building Management'],
      featuresAr: ['نظرة عامة على المحفظة', 'مقاييس الإشغال', 'تتبع الوحدات', 'إدارة المباني']
    },
    {
      id: 'tenants',
      titleEn: 'Tenant & Resident Management',
      titleAr: 'إدارة المستأجرين والمقيمين',
      descEn: 'Build strong tenant relationships with centralized contact information, lease tracking, and communication tools.',
      descAr: 'بناء علاقات قوية مع المستأجرين من خلال معلومات الاتصال المركزية وتتبع العقود وأدوات الاتصال.',
      image: '/screenshots/tenants.webp',
      featuresEn: ['Contact Management', 'Lease Tracking', 'Active Leases', 'Tenant Profiles'],
      featuresAr: ['إدارة جهات الاتصال', 'تتبع العقود', 'العقود النشطة', 'ملفات المستأجرين']
    },
    {
      id: 'invoices',
      titleEn: 'Financial Management & Billing',
      titleAr: 'إدارة المالية والفواتير',
      descEn: 'Automate invoicing, track receivables, and monitor payment status. Generate invoices with one click.',
      descAr: 'أتمتة الفواتير، تتبع المستحقات، ومراقبة حالة الدفع. أنشئ الفواتير بضغطة واحدة.',
      image: '/screenshots/invoices.webp',
      featuresEn: ['Auto-Invoicing', 'Receivables Tracking', 'Payment Status', 'Financial Reports'],
      featuresAr: ['فواتير تلقائية', 'تتبع المستحقات', 'حالة الدفع', 'التقارير المالية']
    }
  ];

  const features = isArabic
    ? {
        sectionTitle: 'النظام في العمل',
        sectionDesc: 'استكشف كيف يعمل نظام رافد عبر جميع وحدات العمل'
      }
    : {
        sectionTitle: 'Rafid in Action',
        sectionDesc: 'Explore how Rafid works across all business modules'
      };

  return (
    <section id="screenshots" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {features.sectionTitle}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {features.sectionDesc}
          </p>
        </motion.div>

        {/* Screenshots Grid */}
        <div className="space-y-24">
          {screenshots.map((screenshot, index) => {
            const isEven = index % 2 === 0;
            const features_text = isArabic ? screenshot.featuresAr : screenshot.featuresEn;
            const title = isArabic ? screenshot.titleAr : screenshot.titleEn;
            const desc = isArabic ? screenshot.descAr : screenshot.descEn;

            return (
              <motion.div
                key={screenshot.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
              >
                {/* Text Content */}
                <div
                  className={`${
                    !isEven ? 'lg:order-2' : ''
                  } flex flex-col justify-center`}
                >
                  <motion.div
                    initial={{ opacity: 0, x: isArabic ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                      {title}
                    </h3>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                      {desc}
                    </p>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                      {features_text.map((feature, featureIndex) => (
                        <motion.div
                          key={feature}
                          initial={{ opacity: 0, x: isArabic ? 10 : -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1 + featureIndex * 0.05 + 0.3
                          }}
                          viewport={{ once: true }}
                          className="flex items-center gap-3 p-3 rounded-lg bg-orange-50 hover:bg-orange-100 transition-colors"
                        >
                          <div className="flex-shrink-0 w-2 h-2 bg-[#FF7A00] rounded-full" />
                          <span className="text-sm md:text-base font-medium text-slate-700">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Screenshot Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
                  viewport={{ once: true }}
                  className={`${!isEven ? 'lg:order-1' : ''}`}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                    {/* Image Container */}
                    <div className="relative bg-white rounded-xl overflow-hidden">
                      <Image
                        src={screenshot.image}
                        alt={title}
                        width={600}
                        height={400}
                        quality={85}
                        className="w-full h-auto object-cover"
                        priority={index === 0}
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />

                      {/* Overlay for Better Visual */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  {/* Caption Below Image */}
                  <p className="mt-4 text-center text-sm text-slate-500 italic">
                    {isArabic ? 'لقطة شاشة من النظام' : 'System Screenshot'}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-24 text-center p-8 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-100"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-4">
            {isArabic ? 'هل أنت مستعد للبدء؟' : 'Ready to Get Started?'}
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            {isArabic
              ? 'جرب نظام رافد مجاناً الآن واكتشف كيف يمكنك تحسين إدارة عقاراتك'
              : 'Try Rafid for free today and discover how you can improve your property management'}
          </p>
          <a
            href="https://app.rafidsystem.com/c/demo/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#FF7A00] text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            {isArabic ? 'جرب Demo الآن' : 'Try Demo Now'}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
