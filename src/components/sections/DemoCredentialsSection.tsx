'use client';

import { motion } from 'framer-motion';
import { Copy, Check, Mail, KeyRound, Monitor } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export function DemoCredentialsSection({ lang = 'ar' }: { lang?: 'ar' | 'en' }) {
  const [copied, setCopied] = useState<string | null>(null);
  const isAr = lang === 'ar';

  const credentials = [
    {
      label: isAr ? 'البريد الإلكتروني' : 'Email',
      value: 'demo@demo.com',
      icon: Mail,
    },
    {
      label: isAr ? 'كلمة المرور' : 'Password',
      value: 'Oman2026',
      icon: KeyRound,
    },
    {
      label: isAr ? 'النظام' : 'System',
      value: isAr ? 'نظام الديمو (Demo)' : 'Demo System',
      icon: Monitor,
    },
  ];

  const t = {
    heading: isAr ? 'جرّب النظام الآن' : 'Try the System Now',
    subtitle: isAr
      ? 'استخدم بيانات الديمو أدناه لاختبار جميع المميزات بدون التزام'
      : 'Use the demo credentials below to test all features without commitment',
    copyHint: isAr ? 'انقر للنسخ' : 'Click to copy',
    tipsTitle: isAr ? 'نصائح للاختبار' : 'Testing Tips',
    tips: isAr
      ? [
          'اختبر جميع المميزات بحرية',
          'لا توجد قيود على النسخة التجريبية',
          'البيانات آمنة ومعزولة',
          'تحتاج لمساعدة؟ تواصل معنا',
        ]
      : [
          'Test all features freely',
          'No limitations on the demo version',
          'Data is safe and isolated',
          'Need help? Contact us',
        ],
  };

  const copyToClipboard = (value: string, key: string) => {
    navigator.clipboard.writeText(value);
    setCopied(key);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-[#FF7A00]/5 to-[#FF7A00]/10 border-t border-b border-[#FF7A00]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {t.heading}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {credentials.map((cred, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg border-2 border-[#FF7A00]/30 p-6 shadow-md hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FF7A00]/10 text-[#FF7A00]">
                  <cred.icon className="h-5 w-5" />
                </span>
                <button
                  onClick={() => copyToClipboard(cred.value, `cred-${index}`)}
                  className={cn(
                    'p-2 rounded-lg transition-all',
                    copied === `cred-${index}`
                      ? 'bg-emerald-100 text-emerald-600'
                      : 'bg-[#FF7A00]/10 text-[#FF7A00] hover:bg-[#FF7A00]/20'
                  )}
                  title={t.copyHint}
                >
                  {copied === `cred-${index}` ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    <Copy className="h-5 w-5" />
                  )}
                </button>
              </div>

              <p className="text-sm font-semibold text-slate-600 mb-2">
                {cred.label}
              </p>
              <p className="text-lg font-mono font-bold text-slate-900 break-all">
                {cred.value}
              </p>

              <p className="text-xs text-slate-500 mt-3">{t.copyHint}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className={cn(
            'mt-12 p-6 bg-white rounded-lg shadow-md max-w-2xl mx-auto',
            isAr ? 'border-r-4 border-[#FF7A00]' : 'border-l-4 border-[#FF7A00]'
          )}
        >
          <h3 className="font-bold text-slate-900 mb-2">{t.tipsTitle}</h3>
          <ul className="space-y-2 text-sm text-slate-600 list-disc ps-5">
            {t.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
