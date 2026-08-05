'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TrustSection({ lang = 'ar' }: { lang?: 'ar' | 'en' }) {
  const isAr = lang === 'ar';

  const trustSignals = [
    {
      icon: Shield,
      label: isAr ? 'أمان البيانات' : 'Data Security',
      value: 'AES-256',
      description: isAr
        ? 'تشفير البيانات أثناء النقل والتخزين'
        : 'Encryption in transit and at rest',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      label: isAr ? 'الدعم' : 'Support',
      value: '24/7',
      description: isAr
        ? 'دعم فني ومراقبة مستمرة للنظام'
        : 'Technical support and continuous monitoring',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      label: isAr ? 'خبرة محلية' : 'Local Expertise',
      value: '100%',
      description: isAr
        ? 'شركة عُمانية تفهم السوق المحلي'
        : 'An Omani company that knows the local market',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Star,
      label: isAr ? 'ثنائي اللغة' : 'Bilingual',
      value: 'AR/EN',
      description: isAr
        ? 'واجهة كاملة بالعربية والإنجليزية'
        : 'Full Arabic and English interface',
      color: 'from-green-500 to-green-600',
    },
  ];

  const t = {
    heading: isAr ? 'لماذا تثق الشركات في رافد؟' : 'Why Companies Trust Rafid',
    subtitle: isAr
      ? 'نحن نقدم حلاً آمناً وموثوقاً لإدارة عقاراتك بكل احترافية'
      : 'A secure, reliable and professional platform for managing your properties',
    bottomPrefix: isAr ? 'صُمم رافد وفق' : 'Rafid is built following',
    bottomBold: isAr ? 'أفضل ممارسات الأمان وحماية البيانات' : 'security and data-protection best practices',
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            {t.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Trust Signals Grid */}
        <div className="grid md:grid-cols-4 gap-6 lg:gap-8">
          {trustSignals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 h-full border border-gray-100">
                <div className={cn(
                  'inline-flex items-center justify-center w-16 h-16 rounded-full mb-6',
                  `bg-gradient-to-br ${signal.color}`
                )}>
                  <signal.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {signal.label}
                </h3>
                <p className={cn(
                  'text-3xl font-bold mb-2',
                  `bg-gradient-to-r ${signal.color} bg-clip-text text-transparent`
                )}>
                  {signal.value}
                </p>
                <p className="text-sm text-gray-600">
                  {signal.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-12 border-t border-gray-200"
        >
          <p className="text-gray-700 text-lg">
            {t.bottomPrefix} <span className="font-bold">{t.bottomBold}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
