'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Zap, Users } from 'lucide-react';

interface Product {
  id: string;
  nameEn: string;
  nameAr: string;
  descEn: string;
  descAr: string;
  shortDescEn: string;
  shortDescAr: string;
  image: string;
  logo: string;
  url: string;
  ctaEn: string;
  ctaAr: string;
  featuresEn: string[];
  featuresAr: string[];
  color: {
    bg: string;
    accent: string;
    text: string;
  };
}

interface ProductsSectionProps {
  lang?: 'ar' | 'en';
}

export function ProductsSection({ lang = 'ar' }: ProductsSectionProps) {
  const isArabic = lang === 'ar';

  const products: Product[] = [
    {
      id: 'rafid',
      nameEn: 'Rafid',
      nameAr: 'رافد',
      descEn: 'Professional property and facilities management platform built for Oman. Manage properties, maintenance, tenants, and finances from one unified dashboard with AI-powered insights.',
      descAr: 'منصة احترافية لإدارة العقارات والمرافق في سلطنة عُمان. أدر العقارات والصيانة والمستأجرين والمالية من لوحة تحكم موحدة مع رؤى مدعومة بالذكاء الاصطناعي.',
      shortDescEn: 'Property & Facilities Management Platform',
      shortDescAr: 'منصة إدارة العقارات والمرافق',
      image: '/products/rafid-screenshot.webp',
      logo: '/products/rafid-logo.svg',
      url: 'https://www.rafidsystem.com/',
      ctaEn: 'Explore Rafid',
      ctaAr: 'اكتشف رافد',
      featuresEn: [
        'Property Management',
        'Maintenance Tracking',
        'Tenant Management',
        'Financial Reports',
        'AI Insights',
        'Mobile App'
      ],
      featuresAr: [
        'إدارة العقارات',
        'تتبع الصيانة',
        'إدارة المستأجرين',
        'التقارير المالية',
        'رؤى الذكاء الاصطناعي',
        'تطبيق الهاتف'
      ],
      color: {
        bg: 'from-blue-50 to-blue-100',
        accent: 'bg-blue-600',
        text: 'text-blue-900'
      }
    },
    {
      id: 'cafe-qr',
      nameEn: 'CafeQR',
      nameAr: 'CafeQR',
      descEn: 'Modern QR-based ordering and management system for cafes and restaurants. Enable customers to order and pay directly from their phones using QR codes, streamline operations, and reduce costs.',
      descAr: 'نظام حديث للطلب والإدارة بناءً على رموز QR للمقاهي والمطاعم. مكّن العملاء من الطلب والدفع مباشرة من هواتفهم باستخدام رموز QR، وبسّط العمليات، وقلل التكاليف.',
      shortDescEn: 'QR Ordering System for Cafes',
      shortDescAr: 'نظام الطلب عبر QR للمقاهي',
      image: '/products/cafe-qr-screenshot.webp',
      logo: '/products/cafe-qr-logo.svg',
      url: 'https://www.cafe-qr.com/',
      ctaEn: 'Explore CafeQR',
      ctaAr: 'اكتشف CafeQR',
      featuresEn: [
        'QR Code Ordering',
        'Online Payments',
        'Kitchen Display',
        'Analytics',
        'Multi-Location',
        'Customer Loyalty'
      ],
      featuresAr: [
        'الطلب عبر QR',
        'الدفع الإلكتروني',
        'شاشة المطبخ',
        'التحليلات',
        'عدة فروع',
        'برنامج الولاء'
      ],
      color: {
        bg: 'from-orange-50 to-orange-100',
        accent: 'bg-orange-600',
        text: 'text-orange-900'
      }
    }
  ];

  const sectionTitle = isArabic ? 'منتجاتنا' : 'Our Products';
  const sectionDesc = isArabic
    ? 'حلول متكاملة تم تطويرها بواسطة فريقنا المتخصص. أنظمة احترافية لمختلف القطاعات والصناعات'
    : 'Integrated solutions developed by our specialized team. Professional systems for various sectors and industries';

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-blue-100 to-orange-100 rounded-full">
            <span className="text-sm font-semibold text-slate-700">
              {isArabic ? '🚀 محفظة المنتجات' : '🚀 Product Portfolio'}
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            {sectionDesc}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Product Card */}
              <div className={`bg-gradient-to-br ${product.color.bg} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white`}>
                {/* Top Section with Image */}
                <div className="relative h-80 bg-gradient-to-br from-slate-200 to-slate-300 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.nameEn}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Section */}
                <div className="p-8">
                  {/* Logo and Name */}
                  <div className="mb-6">
                    {product.logo && (
                      <div className="mb-4 h-12 w-12 bg-white rounded-lg p-2 flex items-center justify-center">
                        <Image
                          src={product.logo}
                          alt={product.nameEn}
                          width={40}
                          height={40}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <h3 className={`text-3xl font-bold ${product.color.text} mb-2`}>
                      {isArabic ? product.nameAr : product.nameEn}
                    </h3>
                    <p className="text-sm text-slate-600 font-medium">
                      {isArabic ? product.shortDescAr : product.shortDescEn}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-700 mb-8 leading-relaxed">
                    {isArabic ? product.descAr : product.descEn}
                  </p>

                  {/* Features Grid */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-slate-700 mb-4 uppercase tracking-wide">
                      {isArabic ? 'المميزات الرئيسية' : 'Key Features'}
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {(isArabic ? product.featuresAr : product.featuresEn).map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className={`w-2 h-2 ${product.color.accent} rounded-full flex-shrink-0`} />
                          <span className="text-sm text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={product.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center justify-center gap-2 w-full px-6 py-3 ${product.color.accent} text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 group/btn`}
                  >
                    {isArabic ? product.ctaAr : product.ctaEn}
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>

                  {/* Visit Live Badge */}
                  <div className="mt-4 text-center">
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-slate-600 hover:text-slate-900 font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      <Globe className="w-4 h-4" />
                      {isArabic ? 'زيارة الموقع الحي' : 'Visit Live Site'}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-12 text-white"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2 text-blue-400">2</div>
              <p className="text-slate-300">{isArabic ? 'منتجات متقدمة' : 'Advanced Products'}</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-orange-400">500+</div>
              <p className="text-slate-300">{isArabic ? 'عملاء نشطين' : 'Active Customers'}</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2 text-green-400">99%</div>
              <p className="text-slate-300">{isArabic ? 'رضا العملاء' : 'Customer Satisfaction'}</p>
            </div>
          </div>
        </motion.div>

        {/* CTA for Rafid Website Development */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center p-8 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200"
        >
          <h3 className="text-2xl font-bold text-slate-900 mb-3">
            {isArabic ? 'هل تريد نظام مثل رافد؟' : 'Need a System Like Rafid?'}
          </h3>
          <p className="text-lg text-slate-600 mb-6">
            {isArabic
              ? 'اتصل بنا اليوم لاستكشاف كيف يمكننا بناء الحل المثالي لعملك'
              : 'Contact us today to explore how we can build the perfect solution for your business'}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 transform hover:scale-105 shadow-lg"
          >
            {isArabic ? '📞 تواصل معنا الآن' : '📞 Contact Us Now'}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
