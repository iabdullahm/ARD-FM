'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TrustSection() {
  const trustSignals = [
    {
      icon: Shield,
      label: 'الأمان العالي',
      value: 'AES-256',
      description: 'تشفير عسكري للبيانات',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: Award,
      label: 'الموثوقية',
      value: '99.99%',
      description: 'ضمان توفر الخدمة',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: Users,
      label: 'الثقة',
      value: '500+',
      description: 'شركة تستخدمنا',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: Star,
      label: 'الرضا',
      value: '4.8/5',
      description: 'تقييم العملاء',
      color: 'from-green-500 to-green-600',
    },
  ];

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
            موثوق بواسطة أفضل الشركات 🌟
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            نحن نقدم حلاً آمناً وموثوقاً لإدارة عقاراتك بكل احترافية
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
                {/* Icon Container */}
                <div className={cn(
                  'inline-flex items-center justify-center w-16 h-16 rounded-full mb-6',
                  `bg-gradient-to-br ${signal.color}`
                )}>
                  <signal.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
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
            نحن متوافقون مع <span className="font-bold">أعلى معايير الأمان والخصوصية</span> العالمية
          </p>
        </motion.div>
      </div>
    </section>
  );
}
