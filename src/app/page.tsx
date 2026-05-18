'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  FileText,
  Wallet,
  Wrench,
  BarChart3,
  Globe,
  Menu,
  X,
  CheckCircle2,
  ShieldCheck,
  Zap,
  TrendingUp,
  Clock,
  Target,
  Award,
} from 'lucide-react';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { RichFooter } from '@/components/sections/RichFooter';
import { TrustSection } from '@/components/sections/TrustSection';
import { DemoCredentialsSection } from '@/components/sections/DemoCredentialsSection';
import { ScreenshotsSection } from '@/components/sections/ScreenshotsSection';

type Lang = 'ar' | 'en';

const STRINGS = {
  ar: {
    dir: 'rtl',
    nav: {
      features: 'الخصائص',
      howItWorks: 'كيف يعمل؟',
      whoFor: 'لمن رافد؟',
      pricing: 'الأسعار',
      faq: 'الأسئلة الشائعة',
      contact: 'تواصل معنا',
      switchLabel: 'EN',
      demo: 'جرب النظام الآن (Demo)',
      team: 'فريقنا',
    },
    hero: {
      badge: 'منصة إدارة المرافق والعقارات #1 في سلطنة عُمان',
      title: '⚡ أدر 500+ عقار من لوحة تحكم واحدة',
      subtitle: 'منصة سحابية موحّدة لإدارة العقارات والصيانة والعقود والمدفوعات، مدعومة بمسح QR، تتبع GPS للفنيين، ومؤقتات SLA تلقائية.',
      cta: 'ابدأ الآن مجاناً',
      stats: [
        { value: '40%', label: 'خفّض تكاليف الصيانة 📉' },
        { value: '60%', label: 'زيادة الإنتاجية 📈' },
      ],
    },
  },
  en: {
    dir: 'ltr',
    nav: {
      features: 'Features',
      howItWorks: 'How It Works',
      whoFor: 'Who is it for?',
      pricing: 'Pricing',
      faq: 'FAQ',
      contact: 'Contact',
      switchLabel: 'AR',
      demo: 'Try Demo',
      team: 'Team',
    },
    hero: {
      badge: 'The #1 Facilities & Property Management Platform in Oman',
      title: '⚡ Manage 500+ Properties from One Dashboard',
      subtitle: 'A unified cloud platform for property, maintenance, contract and payment management with QR scanning, technician GPS tracking, and automatic SLA timers.',
      cta: 'Start Free Today',
      stats: [
        { value: '40%', label: 'Reduce Maintenance Costs 📉' },
        { value: '60%', label: 'Boost Productivity 📈' },
      ],
    },
  },
};

export default function HomePage() {
  const [lang, setLang] = useState<Lang>('ar');
  const [menuOpen, setMenuOpen] = useState(false);
  const isArabic = lang === 'ar';
  const t = STRINGS[lang];

  const items = [
    { label: t.nav.features, href: '#features' },
    { label: t.nav.howItWorks, href: '#how' },
    { label: t.nav.whoFor, href: '#why' },
    { label: t.nav.pricing, href: '#pricing' },
    { label: t.nav.faq, href: '#faq' },
    { label: t.nav.contact, href: '#contact' },
    { label: t.nav.team, href: '/team' },
  ];

  return (
    <div dir={t.dir} className={isArabic ? 'text-right' : 'text-left'}>
      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <a href="#" className="flex items-center gap-3">
              <div className="relative h-12 w-12">
                <Image
                  src="/images/logo.png"
                  alt="Rafid Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </a>

            <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 lg:flex">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition hover:text-[#FF7A00]"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-4 lg:flex">
              <button
                onClick={() => setLang(isArabic ? 'en' : 'ar')}
                className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
              >
                <Globe className="h-4 w-4" />
                {t.nav.switchLabel}
              </button>
              <a
                href="https://app.rafidsystem.com/c/demo/dashboard"
                className="rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-bold text-slate-900 transition hover:bg-slate-50 shadow-sm"
              >
                {t.nav.demo}
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 lg:hidden"
            >
              {menuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>

          {menuOpen && (
            <div className="absolute left-4 right-4 top-24 rounded-2xl border border-slate-200 bg-white p-4 shadow-2xl lg:hidden">
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50"
                  >
                    {item.label}
                  </a>
                ))}
                <hr className="my-2 border-slate-100" />
                <button
                  onClick={() => {
                    setLang(isArabic ? 'en' : 'ar');
                    setMenuOpen(false);
                  }}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-slate-50 text-right flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" />
                  {t.nav.switchLabel}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-bold text-blue-700 mb-6">
              {t.hero.badge}
            </span>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              {t.hero.title}
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#contact"
                className="px-8 py-3 bg-[#FF7A00] text-white font-bold rounded-xl hover:bg-orange-600 transition shadow-lg"
              >
                {t.hero.cta}
              </a>
              <a
                href="https://app.rafidsystem.com/c/demo/dashboard"
                className="px-8 py-3 border-2 border-slate-300 text-slate-900 font-bold rounded-xl hover:border-[#FF7A00] transition"
              >
                {t.nav.demo}
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {t.hero.stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-4xl font-bold text-[#FF7A00]">{stat.value}</div>
                <div className="text-sm text-slate-600 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Signals Section */}
      <TrustSection />

      {/* Demo Credentials Section */}
      <DemoCredentialsSection />

      {/* Screenshots Section */}
      <ScreenshotsSection lang={lang} />

      {/* Pricing Section */}
      <PricingSection align={lang === 'ar' ? 'rtl' : 'ltr'} />

      {/* FAQ Section */}
      <FAQSection lang={lang} />

      {/* Contact Section */}
      <ContactSection lang={lang} />

      {/* Footer */}
      <RichFooter lang={lang} />
    </div>
  );
}
