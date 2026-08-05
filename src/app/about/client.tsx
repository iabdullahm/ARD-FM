'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { motion } from 'framer-motion';
import {
  Target,
  Lightbulb,
  Users,
  Award,
  TrendingUp,
  Shield,
  Zap,
  Globe,
} from 'lucide-react';
import Link from 'next/link';

type Lang = 'ar' | 'en';

const STRINGS = {
  ar: {
    title: 'عن رافد',
    subtitle: 'نظام إدارة العقارات والمرافق الأول في سلطنة عُمان',

    storySection: {
      title: 'قصتنا',
      heading: 'رحلة تحويل إدارة العقارات',
      content: [
        'بدأت رافد من رؤية بسيطة: جعل إدارة العقارات سهلة وفعّالة للجميع. مؤسسنا عبدالله الجهوري، رائد أعمال عماني بخبرة تتجاوز 10 سنوات في التكنولوجيا والعقارات، رأى التحديات الكبيرة التي يواجهها مديرو العقارات.',
        'في عام 2023، قررنا بناء حل شامل يجمع بين التكنولوجيا المتقدمة والفهم العميق لسوق العقارات العماني. واليوم يساعد رافد شركات إدارة العقارات والمرافق على تحسين كفاءتها التشغيلية.',
        'نحن فخورون بكوننا منصة عُمانية مبنية للمحترفين في قطاع العقارات والمرافق، والتزامنا بالابتكار المستمر يدفعنا للتطوير كل يوم.',
      ],
      stats: [
        { value: '2023', label: 'سنة التأسيس' },
        { value: '100%', label: 'شركة عُمانية' },
        { value: 'AR/EN', label: 'واجهة ثنائية اللغة' },
        { value: '24/7', label: 'وصول سحابي' },
      ],
    },

    missionSection: {
      title: 'مهمتنا ورؤيتنا',
      mission: {
        icon: Target,
        heading: 'مهمتنا',
        content: 'نمكّن مديري العقارات والمرافق بحلول تكنولوجية ذكية تبسّط العمليات، توفّر الوقت والمال، وتحسّن تجربة المستأجرين والملاك.',
      },
      vision: {
        icon: Lightbulb,
        heading: 'رؤيتنا',
        content: 'أن نصبح المنصة الرائدة لإدارة العقارات الذكية في منطقة الخليج، حيث التكنولوجيا والابتكار يلتقيان مع الخدمة المتميزة.',
      },
    },

    valuesSection: {
      title: 'قيمنا الأساسية',
      values: [
        {
          icon: Users,
          heading: 'تركيز على العميل',
          content: 'كل قرار نتخذه يبدأ بسؤال: هل هذا يساعد عملاؤنا؟ نستمع، نتعلم، ونتحسّن باستمرار.',
        },
        {
          icon: Zap,
          heading: 'الابتكار المستمر',
          content: 'نحن لا نتابع الاتجاهات، نصنعها. التحديث المستمر والتطوير هو جزء من DNA الشركة.',
        },
        {
          icon: Shield,
          heading: 'الأمان والثقة',
          content: 'بيانات عملائنا آمنة عندنا. نستخدم أفضل ممارسات الأمان وتشفير متقدم لحماية المعلومات.',
        },
        {
          icon: Globe,
          heading: 'التميز المحلي',
          content: 'نفهم السوق العماني بعمق. حلولنا مصممة خصيصاً لاحتياجات المنطقة والثقافة المحلية.',
        },
      ],
    },

    whySection: {
      title: 'لماذا تختار رافد؟',
      reasons: [
        {
          icon: Award,
          heading: 'خبرة معترف بها',
          content: 'يقود رافد مؤسس بخبرة تتجاوز 10 سنوات في التكنولوجيا والعقارات العمانية.',
        },
        {
          icon: TrendingUp,
          heading: 'مصمم لتحقيق النتائج',
          content: 'صُمم رافد ليساعدك على خفض تكاليف الصيانة حتى 40% وزيادة الإنتاجية حتى 60%.',
        },
        {
          icon: Shield,
          heading: 'دعم متميز',
          content: 'فريق دعم مخصص متاح 24/7 للإجابة على أسئلتك ومساعدتك في النجاح.',
        },
        {
          icon: Zap,
          heading: 'تحديثات منتظمة',
          content: 'نضيف ميزات جديدة وتحسينات كل شهر بناءً على تغذية عملائنا.',
        },
      ],
    },

    teamSection: {
      heading: 'تعرّف على الفريق',
      description: 'نحن فريق من المتخصصين الشغوفين بتحويل قطاع إدارة العقارات. تعرّف على الوجوه خلف رافد.',
      cta: 'شاهد فريقنا الكامل',
    },

    footer: {
      heading: 'ابدأ معنا اليوم',
      description: 'اكتشف كيف يمكن لرافد أن تحسّن عمليات إدارة عقاراتك وتوفر الوقت والمال.',
      cta: 'احجز عرضاً توضيحياً',
    },
  },

  en: {
    title: 'About Us',
    subtitle: 'The #1 Property & Facilities Management Platform in Oman',

    storySection: {
      title: 'Our Story',
      heading: 'A Journey to Transform Property Management',
      content: [
        'Rafid was born from a simple vision: to make property management easy and efficient for everyone. Our founder, Abdullah Al Jahwari, an Omani entrepreneur with 10+ years of experience in technology and real estate, saw the challenges property managers faced every day.',
        'In 2023, we decided to build a comprehensive solution combining cutting-edge technology with deep understanding of the Omani real estate market. Today, Rafid helps property and facility management companies improve their operational efficiency.',
        'We are proud to be an Oman-built platform made for real estate and facilities professionals. Our commitment to continuous innovation drives us to improve every day.',
      ],
      stats: [
        { value: '2023', label: 'Founded' },
        { value: '100%', label: 'Omani Company' },
        { value: 'AR/EN', label: 'Bilingual Interface' },
        { value: '24/7', label: 'Cloud Access' },
      ],
    },

    missionSection: {
      title: 'Our Mission & Vision',
      mission: {
        icon: Target,
        heading: 'Our Mission',
        content: 'We empower property and facilities managers with smart technology solutions that simplify operations, save time and money, and enhance the experience of tenants and property owners.',
      },
      vision: {
        icon: Lightbulb,
        heading: 'Our Vision',
        content: 'To become the leading smart property management platform in the GCC region, where technology and innovation meet exceptional service.',
      },
    },

    valuesSection: {
      title: 'Our Core Values',
      values: [
        {
          icon: Users,
          heading: 'Customer First',
          content: 'Every decision we make starts with one question: Does this help our customers? We listen, learn, and improve constantly.',
        },
        {
          icon: Zap,
          heading: 'Continuous Innovation',
          content: 'We don\'t follow trends; we create them. Constant updates and improvements are part of our company DNA.',
        },
        {
          icon: Shield,
          heading: 'Security & Trust',
          content: 'Your data is safe with us. We use best-in-class security practices and advanced encryption to protect your information.',
        },
        {
          icon: Globe,
          heading: 'Local Excellence',
          content: 'We understand the Omani market deeply. Our solutions are tailored to the unique needs and culture of the region.',
        },
      ],
    },

    whySection: {
      title: 'Why Choose Rafid?',
      reasons: [
        {
          icon: Award,
          heading: 'Proven Expertise',
          content: 'Rafid is led by a founder with over 10 years of experience in technology and Omani real estate.',
        },
        {
          icon: TrendingUp,
          heading: 'Built for Results',
          content: 'Rafid is designed to help you cut maintenance costs by up to 40% and boost productivity by up to 60%.',
        },
        {
          icon: Shield,
          heading: 'Premium Support',
          content: 'Dedicated support team available 24/7 to answer your questions and help you succeed.',
        },
        {
          icon: Zap,
          heading: 'Regular Updates',
          content: 'We add new features and improvements every month based on our customers\' feedback.',
        },
      ],
    },

    teamSection: {
      heading: 'Meet the Team',
      description: 'We\'re a team of passionate specialists dedicated to transforming the property management industry. Get to know the faces behind Rafid.',
      cta: 'View Full Team',
    },

    footer: {
      heading: 'Start Your Journey Today',
      description: 'Discover how Rafid can transform your property management operations and save you time and money.',
      cta: 'Book a Demo',
    },
  },
};

export default function AboutPage() {
  const { language: lang } = useLanguage();
  const isRtl = lang === 'ar';
  const t = STRINGS[lang];
  const storyStats = t.storySection.stats;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Header */}
      <SiteHeader />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-slate-50 to-white px-4">
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

      {/* Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-[#FF7A00]">
              {t.storySection.title}
            </span>
            <h2 className="text-4xl font-black text-slate-900 mt-2 mb-8">
              {t.storySection.heading}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {t.storySection.content.map((para, idx) => (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="text-lg text-slate-600 mb-6 leading-relaxed"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6">
              {storyStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-[#FF7A00]/10 to-orange-50 p-6 rounded-xl border border-[#FF7A00]/20"
                >
                  <div className="text-3xl font-black text-[#FF7A00]">{stat.value}</div>
                  <div className="text-sm text-slate-600 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-slate-900 text-center mb-16"
          >
            {t.missionSection.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[t.missionSection.mission, t.missionSection.vision].map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-8 rounded-2xl border-2 border-[#FF7A00]/20"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-[#FF7A00]/10 rounded-xl">
                      <Icon className="h-6 w-6 text-[#FF7A00]" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900">{item.heading}</h3>
                  </div>
                  <p className="text-slate-600 leading-relaxed">{item.content}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-slate-900 text-center mb-16"
          >
            {t.valuesSection.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {t.valuesSection.values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 hover:border-[#FF7A00]/50 transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#FF7A00]/10 rounded-lg shrink-0">
                      <Icon className="h-6 w-6 text-[#FF7A00]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{value.heading}</h3>
                      <p className="text-slate-600">{value.content}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Rafid Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white text-center mb-16"
          >
            {t.whySection.title}
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8">
            {t.whySection.reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 bg-white/10 backdrop-blur border border-white/20 rounded-xl hover:bg-white/15 transition"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-[#FF7A00]/20 rounded-lg shrink-0">
                      <Icon className="h-6 w-6 text-[#FF7A00]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{reason.heading}</h3>
                      <p className="text-white/80">{reason.content}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-slate-900 mb-4"
          >
            {t.teamSection.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto"
          >
            {t.teamSection.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link
              href="/team"
              className="inline-block px-8 py-3 bg-[#FF7A00] text-white font-bold rounded-xl hover:bg-orange-600 transition"
            >
              {t.teamSection.cta}
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#FF7A00] to-orange-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black text-white mb-4"
          >
            {t.footer.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-white/90 mb-8"
          >
            {t.footer.description}
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
              {t.footer.cta}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
