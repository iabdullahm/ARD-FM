"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  Globe,
  Hammer,
  LayoutDashboard,
  Menu,
  Receipt,
  ShieldCheck,
  Sparkles,
  Wallet,
  Wrench,
  X,
} from "lucide-react"

type Lang = "ar" | "en"

type Dictionary = {
  dir: "rtl" | "ltr"
  nav: {
    features: string
    system: string
    why: string
    contact: string
    requestDemo: string
    switchLabel: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    metric1: string
    metric2: string
    metric3: string
  }
  dashboard: {
    title: string
    contracts: string
    revenue: string
    maintenance: string
    alerts: string
    occupancy: string
    collections: string
    pending: string
  }
  problems: {
    eyebrow: string
    title: string
    intro: string
    items: string[]
  }
  solution: {
    eyebrow: string
    title: string
    intro: string
    owner: string
    tenant: string
    maintenance: string
    reports: string
    core: string
  }
  features: {
    eyebrow: string
    title: string
    items: {
      title: string
      body: string
      stat: string
    }[]
  }
  screenshots: {
    eyebrow: string
    title: string
    cards: string[]
  }
  why: {
    eyebrow: string
    title: string
    lines: string[]
  }
  cta: {
    title: string
    body: string
    primary: string
    secondary: string
  }
  footer: {
    address: string
    rights: string
  }
}

const copy: Record<Lang, Dictionary> = {
  ar: {
    dir: "rtl",
    nav: {
      features: "المميزات",
      system: "النظام",
      why: "لماذا رافد",
      contact: "تواصل",
      requestDemo: "اطلب عرض",
      switchLabel: "EN",
    },
    hero: {
      badge: "منصة إدارة العقارات والمرافق",
      title: "إدارة عقاراتك بذكاء... مع رافد",
      subtitle:
        "نظام متكامل لإدارة العقود والإيجارات والصيانة والتقارير في تجربة واحدة واضحة وسريعة وقابلة للتوسع.",
      ctaPrimary: "اطلب عرض",
      ctaSecondary: "شاهد النظام",
      metric1: "500+ وحدة مُدارة",
      metric2: "95% نسبة إشغال",
      metric3: "1M+ معاملات سنوية",
    },
    dashboard: {
      title: "لوحة تحكم تشغيلية",
      contracts: "العقود",
      revenue: "الإيرادات",
      maintenance: "الصيانة",
      alerts: "التنبيهات",
      occupancy: "الإشغال",
      collections: "التحصيل",
      pending: "طلبات معلقة",
    },
    problems: {
      eyebrow: "التحدي",
      title: "المشكلة ليست في كثرة الأصول... بل في غياب السيطرة.",
      intro:
        "الشركات العقارية لا تخسر من نقص البيانات، بل من تشتتها. رافد يجمع الصورة التشغيلية كاملة في مكان واحد.",
      items: [
        "ضياع العقود بين الجداول والملفات",
        "تأخر التحصيل وعدم وضوح المستحقات",
        "طلبات صيانة غير متعقبة بوضوح",
        "تقارير متأخرة لا تدعم القرار السريع",
      ],
    },
    solution: {
      eyebrow: "الحل",
      title: "رافد يربط كل طرف تشغيلي في منظومة واحدة.",
      intro:
        "بدلاً من الأدوات المنفصلة، تحصل على مسار عمل مترابط من العقد إلى التحصيل إلى الصيانة إلى التقارير.",
      owner: "المالك",
      tenant: "المستأجر",
      maintenance: "الصيانة",
      reports: "التقارير",
      core: "محرك رافد",
    },
    features: {
      eyebrow: "المميزات",
      title: "مصمم ليخدم الإدارة التشغيلية اليومية، لا مجرد العرض الجميل.",
      items: [
        {
          title: "إدارة العقود والملفات",
          body: "هيكلة موحدة للعقود والتواريخ والتنبيهات والمرفقات في واجهة واحدة سهلة المراجعة.",
          stat: "128 عقد نشط",
        },
        {
          title: "تحصيل الإيجارات والمتابعة",
          body: "متابعة الاستحقاقات والتحصيلات والتنبيهات المالية من خلال لوحات مرئية سريعة الفهم.",
          stat: "45,200 ر.ع",
        },
        {
          title: "إدارة الصيانة بوضوح",
          body: "تسجيل الطلب، تعيينه، متابعة حالته، وإغلاقه بسجل زمني واضح ومسؤوليات محددة.",
          stat: "12 طلب صيانة",
        },
        {
          title: "تقارير تدعم القرار",
          body: "قراءة مباشرة لمؤشرات الإشغال والتحصيل والتنبيهات والعمليات الحرجة لسرعة اتخاذ القرار.",
          stat: "95% إشغال",
        },
      ],
    },
    screenshots: {
      eyebrow: "النظام",
      title: "لقطات منتج تعطي الثقة قبل الاجتماع الأول.",
      cards: ["لوحة تنفيذية", "تفاصيل عقد", "إدارة الصيانة", "تقارير المؤشرات"],
    },
    why: {
      eyebrow: "لماذا رافد",
      title: "منتج عملي لشركات تدير أصولًا حقيقية.",
      lines: [
        "تحكم كامل.",
        "رؤية واضحة.",
        "قرارات أسرع.",
      ],
    },
    cta: {
      title: "ابدأ الآن مع رافد",
      body: "اطلب عرضًا مخصصًا وشاهد كيف تتحول الإدارة التشغيلية من التشتت إلى السيطرة.",
      primary: "احجز عرضًا",
      secondary: "تحدث معنا",
    },
    footer: {
      address: "مسقط، سلطنة عمان",
      rights: "جميع الحقوق محفوظة لرافد",
    },
  },
  en: {
    dir: "ltr",
    nav: {
      features: "Features",
      system: "System",
      why: "Why Rafid",
      contact: "Contact",
      requestDemo: "Request Demo",
      switchLabel: "AR",
    },
    hero: {
      badge: "Property & facility management platform",
      title: "Manage your properties intelligently with Rafid",
      subtitle:
        "A unified system for contracts, rent collection, maintenance, and reporting in one clear, scalable experience.",
      ctaPrimary: "Request Demo",
      ctaSecondary: "View System",
      metric1: "500+ managed units",
      metric2: "95% occupancy",
      metric3: "1M+ yearly transactions",
    },
    dashboard: {
      title: "Operational dashboard",
      contracts: "Contracts",
      revenue: "Revenue",
      maintenance: "Maintenance",
      alerts: "Alerts",
      occupancy: "Occupancy",
      collections: "Collections",
      pending: "Pending requests",
    },
    problems: {
      eyebrow: "The challenge",
      title: "The issue is not asset volume. It is lack of control.",
      intro:
        "Real estate teams rarely fail from lack of data. They fail because data is fragmented. Rafid centralizes the operational picture.",
      items: [
        "Contracts scattered across files and spreadsheets",
        "Slow collections and unclear dues visibility",
        "Maintenance requests without traceable status",
        "Late reporting that slows decision-making",
      ],
    },
    solution: {
      eyebrow: "The solution",
      title: "Rafid connects every operational stakeholder into one system.",
      intro:
        "Instead of disconnected tools, you get a linked workflow from contract to collections to maintenance to reporting.",
      owner: "Owner",
      tenant: "Tenant",
      maintenance: "Maintenance",
      reports: "Reports",
      core: "Rafid Core",
    },
    features: {
      eyebrow: "Features",
      title: "Designed for daily operations, not just for visual appeal.",
      items: [
        {
          title: "Contract & document control",
          body: "A structured view of contracts, dates, alerts, and attachments in one consistent interface.",
          stat: "128 active contracts",
        },
        {
          title: "Rent collection management",
          body: "Track dues, payments, and financial alerts through visual dashboards built for fast review.",
          stat: "OMR 45,200",
        },
        {
          title: "Clear maintenance workflow",
          body: "Log, assign, monitor, and close maintenance tickets with full timeline visibility.",
          stat: "12 open tickets",
        },
        {
          title: "Decision-ready reporting",
          body: "Get direct insight into occupancy, collections, alerts, and critical operational metrics.",
          stat: "95% occupancy",
        },
      ],
    },
    screenshots: {
      eyebrow: "The product",
      title: "Product views that build confidence before the first meeting.",
      cards: ["Executive dashboard", "Contract detail", "Maintenance queue", "Reporting panel"],
    },
    why: {
      eyebrow: "Why Rafid",
      title: "A practical product for teams managing real assets.",
      lines: ["Full control.", "Clear visibility.", "Faster decisions."],
    },
    cta: {
      title: "Start with Rafid today",
      body: "Request a tailored walkthrough and see how your operations shift from fragmentation to control.",
      primary: "Book a demo",
      secondary: "Talk to us",
    },
    footer: {
      address: "Muscat, Oman",
      rights: "All rights reserved to Rafid",
    },
  },
}

const marqueeMetrics = [
  "500+ Units",
  "95% Occupancy",
  "1M+ Transactions",
  "40% Faster Collections",
  "12 Active Tickets",
]

const featureImages = [
  'https://storage.googleapis.com/ard3/Rafid%20Website/contracts%20management.png',
  'https://storage.googleapis.com/ard3/Rafid%20Website/Rafid-dashboard.png', // Placeholder for "Rent collection"
  'https://storage.googleapis.com/ard3/Rafid%20Website/maintenance.png',
  'https://storage.googleapis.com/ard3/Rafid%20Website/Rafid-dashboard.png', // Placeholder for "Reporting"
]

const screenshotImages = [
  { url: 'https://storage.googleapis.com/ard3/Rafid%20Website/Rafid-dashboard.png', alt: 'Rafid Dashboard' },
  { url: 'https://storage.googleapis.com/ard3/Rafid%20Website/contracts%20management.png', alt: 'Rafid Contracts Management' },
  { url: 'https://storage.googleapis.com/ard3/Rafid%20Website/maintenance.png', alt: 'Rafid Maintenance' },
  { url: 'https://storage.googleapis.com/ard3/Rafid%20Website/Rafid-dashboard.png', alt: 'Rafid Dashboard' }, // Repeating for 4th card
]


export default function Page() {
  const [lang, setLang] = useState<Lang>("ar")
  const [menuOpen, setMenuOpen] = useState(false)

  const t = useMemo(() => copy[lang], [lang])

  useEffect(() => {
    document.documentElement.dir = t.dir
    document.documentElement.lang = lang
  }, [lang, t.dir])

  const isArabic = lang === "ar"

  return (
    <main
      dir={t.dir}
      className="min-h-screen overflow-x-hidden bg-[#071426] text-white selection:bg-orange-500/30 selection:text-white"
    >
      <BackgroundOrbs />
      <Header lang={lang} setLang={setLang} menuOpen={menuOpen} setMenuOpen={setMenuOpen} t={t} />

      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className={`order-2 lg:order-1 ${isArabic ? "text-right" : "text-left"}`}
          >
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-300 backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-orange-400" />
              {t.hero.badge}
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {t.hero.subtitle}
            </p>

            <div className={`mt-8 flex flex-wrap gap-4 ${isArabic ? "justify-start lg:justify-start" : "justify-start"}`}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_40px_rgba(249,115,22,.28)] transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                {t.hero.ctaPrimary}
                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#system"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3">
              {[t.hero.metric1, t.hero.metric2, t.hero.metric3].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 * index + 0.25, duration: 0.6 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-slate-200 backdrop-blur-md"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, rotate: isArabic ? -3 : 3 }}
            animate={{ opacity: 1, scale: 1, rotate: isArabic ? -2 : 2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative order-1 lg:order-2"
          >
            <div className="absolute -inset-6 rounded-[36px] bg-orange-500/10 blur-3xl" />
            <div className="relative rounded-[32px] border border-white/10 bg-white/5 p-2 shadow-[0_24px_80px_rgba(2,6,23,.45)] backdrop-blur-xl">
               <Image
                src="https://storage.googleapis.com/ard3/Rafid%20Website/Rafid-dashboard.png"
                alt="Rafid Dashboard Preview"
                width={1236}
                height={794}
                className="rounded-[26px] object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
        <Marquee isArabic={isArabic} />
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.problems.eyebrow} title={t.problems.title} intro={t.problems.intro} align={t.dir} />
        <div className="mt-12 grid auto-rows-[160px] gap-5 md:grid-cols-6">
          {t.problems.items.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className={[
                "group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/[0.06]",
                index === 0 ? "md:col-span-3" : "",
                index === 1 ? "md:col-span-2" : "",
                index === 2 ? "md:col-span-2" : "",
                index === 3 ? "md:col-span-3" : "",
              ].join(" ")}
              style={{ rotate: index % 2 === 0 ? "-1.5deg" : "1.5deg" }}
            >
              <div className="flex h-full flex-col justify-between">
                <div className="rounded-2xl bg-orange-500/10 p-2 text-orange-300 w-fit">
                  <Building2 className="h-5 w-5" />
                </div>
                <p className="text-lg font-medium leading-8 text-slate-100">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.solution.eyebrow} title={t.solution.title} intro={t.solution.intro} align={t.dir} />
        <div className="mt-12 rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.03] p-6 backdrop-blur-xl lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-3">
            <FlowNode title={t.solution.owner} icon={<Building2 className="h-5 w-5" />} />
            <CoreNode title={t.solution.core} />
            <FlowNode title={t.solution.tenant} icon={<LayoutDashboard className="h-5 w-5" />} />
          </div>
          <div className="my-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
          <div className="grid items-center gap-8 lg:grid-cols-3">
            <div className="hidden lg:block" />
            <FlowNode title={t.solution.maintenance} icon={<Hammer className="h-5 w-5" />} />
            <div className="hidden lg:block" />
          </div>
          <div className="my-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block" />
          <div className="grid items-center gap-8 lg:grid-cols-3">
            <div className="hidden lg:block" />
            <FlowNode title={t.solution.reports} icon={<BarChart3 className="h-5 w-5" />} />
            <div className="hidden lg:block" />
          </div>
        </div>
      </section>

      <section id="features" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.features.eyebrow} title={t.features.title} align={t.dir} />
        <div className="mt-12 space-y-8">
          {t.features.items.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="grid gap-6 rounded-[32px] border border-white/10 bg-white/[0.04] p-5 backdrop-blur-xl lg:grid-cols-2 lg:p-8"
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""} rounded-[26px] border border-white/10 bg-[#0f1f38] p-1`}>
                <FeatureVisual imageUrl={featureImages[index]} alt={feature.title} />
              </div>
              <div className={`flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""} ${isArabic ? "text-right" : "text-left"}`}>
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-orange-500/10 px-3 py-1 text-sm text-orange-300">
                  {feature.stat}
                </div>
                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">{feature.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="system" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.screenshots.eyebrow} title={t.screenshots.title} align={t.dir} />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.screenshots.cards.map((card, index) => (
            <motion.div
              key={card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              className="group rounded-[28px] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-xl"
            >
              <div className="rounded-[24px] border border-white/10 bg-[#0d1d35] p-4 transition duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_20px_60px_rgba(249,115,22,.12)]">
                <div className="mb-4 h-44 overflow-hidden rounded-[18px]">
                  <Image
                    src={screenshotImages[index].url}
                    alt={screenshotImages[index].alt}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <p className="text-base font-semibold text-white">{card}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="why" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} align={t.dir} />
          <div className={`grid gap-4 sm:grid-cols-3 ${isArabic ? "text-right" : "text-left"}`}>
            {t.why.lines.map((line, index) => (
              <motion.div
                key={line}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-2xl font-black tracking-tight text-white backdrop-blur-xl"
              >
                {line}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0f1f38] via-[#0a1528] to-[#0b1322] p-8 shadow-[0_30px_100px_rgba(2,6,23,.4)] lg:p-12">
          <div className="absolute -right-24 top-8 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className={isArabic ? "text-right" : "text-left"}>
              <p className="text-sm uppercase tracking-[0.22em] text-orange-300/80">Rafid</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">{t.cta.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{t.cta.body}</p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@rafid.om"
                className="inline-flex items-center gap-2 rounded-xl bg-orange-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                {t.cta.primary}
              </a>
              <a
                href="https://wa.me/96892975614"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                {t.cta.secondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="font-semibold text-slate-200">Rafid</p>
            <p className="mt-1">{t.footer.address}</p>
          </div>
          <p>{t.footer.rights}</p>
        </div>
      </footer>
    </main>
  )
}

function Header({
  lang,
  setLang,
  menuOpen,
  setMenuOpen,
  t,
}: {
  lang: Lang
  setLang: (lang: Lang) => void
  menuOpen: boolean
  setMenuOpen: (open: boolean) => void
  t: Dictionary
}) {
  const items = [
    { href: "#features", label: t.nav.features },
    { href: "#system", label: t.nav.system },
    { href: "#why", label: t.nav.why },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#081426]/80 px-4 py-3 shadow-[0_12px_30px_rgba(2,6,23,.25)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <a href="#" className="text-lg font-black tracking-tight text-orange-400">
              Rafid
            </a>

            <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
              {items.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-white">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 lg:flex">
              <button
                onClick={() => setLang(lang === "ar" ? "en" : "ar")}
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-slate-200 backdrop-blur-md transition hover:bg-white/[0.08]"
              >
                <Globe className="h-4 w-4" />
                {t.nav.switchLabel}
              </button>
              <a
                href="#contact"
                className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-400"
              >
                {t.nav.requestDemo}
              </a>
            </div>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-200 lg:hidden"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {menuOpen && (
            <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.04] p-3 lg:hidden">
              <div className="flex flex-col gap-2">
                {items.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm text-slate-200 transition hover:bg-white/[0.05]"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  onClick={() => {
                    setLang(lang === "ar" ? "en" : "ar")
                    setMenuOpen(false)
                  }}
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-slate-100"
                >
                  {t.nav.switchLabel}
                </button>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl bg-orange-500 px-3 py-3 text-center text-sm font-semibold text-white"
                >
                  {t.nav.requestDemo}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function BackgroundOrbs() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-[-10%] top-[-5%] h-[28rem] w-[28rem] rounded-full bg-sky-500/10 blur-3xl" />
      <div className="absolute right-[-10%] top-[10rem] h-[24rem] w-[24rem] rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-[10rem] left-[35%] h-[20rem] w-[20rem] rounded-full bg-indigo-500/10 blur-3xl" />
    </div>
  )
}

function SectionHeading({
  eyebrow,
  title,
  intro,
  align,
}: {
  eyebrow: string
  title: string
  intro?: string
  align: "rtl" | "ltr"
}) {
  return (
    <div className={align === "rtl" ? "text-right" : "text-left"}>
      <p className="text-sm uppercase tracking-[0.22em] text-orange-300/80">{eyebrow}</p>
      <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white sm:text-4xl">
        {title}
      </h2>
      {intro ? <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{intro}</p> : null}
    </div>
  )
}

function FlowNode({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="rounded-[28px] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-300">
        {icon}
      </div>
      <p className="mt-4 text-lg font-semibold text-white">{title}</p>
    </motion.div>
  )
}

function CoreNode({ title }: { title: string }) {
  return (
    <motion.div
      animate={{ boxShadow: ["0 0 0 rgba(249,115,22,0)", "0 0 40px rgba(249,115,22,0.16)", "0 0 0 rgba(249,115,22,0)"] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
      className="rounded-[30px] border border-orange-400/20 bg-gradient-to-br from-orange-500/15 to-white/[0.04] p-8 text-center backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/20 text-orange-300">
        <Sparkles className="h-7 w-7" />
      </div>
      <p className="mt-4 text-xl font-black text-white">{title}</p>
    </motion.div>
  )
}

function FeatureVisual({ imageUrl, alt }: { imageUrl: string, alt: string }) {
  return (
    <div className="relative aspect-video h-full w-full overflow-hidden rounded-[24px]">
      <Image
        src={imageUrl}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  )
}

function Marquee({ isArabic }: { isArabic: boolean }) {
  const items = [...marqueeMetrics, ...marqueeMetrics]
  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] py-4 backdrop-blur-xl">
      <motion.div
        animate={{ x: isArabic ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
        className="flex min-w-max gap-10 px-6"
      >
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-3 text-sm whitespace-nowrap">
            <span className="font-black text-orange-400">{item.split(" ")[0]}</span>
            <span className="text-slate-300">{item.split(" ").slice(1).join(" ")}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
