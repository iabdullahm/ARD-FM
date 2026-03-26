"use client"

import Image from "next/image"
import { useEffect, useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  Check,
  FileX,
  Globe,
  Hammer,
  LayoutDashboard,
  Menu,
  Receipt,
  ShieldCheck,
  Sparkles,
  TimerOff,
  TrendingDown,
  Wallet,
  Wrench,
  X,
  MessageCircle,
  Cloud,
  Headset,
  MapPin,
  Settings,
  Star
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PricingSection } from "@/components/sections/PricingSection"

type Lang = "ar" | "en"

type Dictionary = {
  dir: "rtl" | "ltr"
  nav: {
    features: string
    system: string
    why: string
    pricing: string
    contact: string
    demo: string
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
  socialProof: {
    eyebrow: string
    title: string
    stats: { value: string; label: string }[]
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
  outcomes: {
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
    cards: { title: string; desc: string }[]
  }
  why: {
    eyebrow: string
    title: string
    items: { label: string; desc: string }[]
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
    links: { label: string; href: string }[]
  }
}

const copy: Record<Lang, Dictionary> = {
  ar: {
    dir: "rtl",
    nav: {
      features: "النتائج",
      system: "النظام",
      why: "لماذا رافد؟",
      pricing: "الأسعار",
      contact: "تواصل معنا",
      demo: "عرض حي (Live Demo)",
      switchLabel: "EN",
    },
    hero: {
      badge: "منصة إدارة العقارات والمرافق",
      title: "نظام متكامل لإدارة المنشآت والعقارات — من التشغيل إلى المالية في منصة واحدة",
      subtitle: "تحكم كامل في العمليات، الصيانة، التأجير، والفوترة — بدون تعقيد.",
      ctaPrimary: "🚀 ابدأ تجربة مجانية",
      ctaSecondary: "📊 احصل على عرض مخصص",
      metric1: "500+ وحدة مُدارة",
      metric2: "95% نسبة إشغال",
      metric3: "1M+ معاملات سنوية",
    },
    socialProof: {
      eyebrow: "شركاء النجاح",
      title: "أرقام تثبت قوة وفاعلية رافد في السوق",
      stats: [
        { value: "+50", label: "شركة تستخدم رافد" },
        { value: "+10,000", label: "وحدة مُدارة عبر النظام" },
        { value: "99.9%", label: "جاهزية واستقرار Uptime" }
      ]
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
    outcomes: {
      eyebrow: "النتائج",
      title: "مصمم ليخدم الإدارة التشغيلية اليومية بتحقيق نتائج فورية.",
      items: [
        {
          title: "تقليل وقت إدارة الصيانة بنسبة 40%",
          body: "عبر أتمتة دورة حياة التذكرة من تقديم الطلب، لتعيين الفني، وحتى الإغلاق والتقييم، بدون اتصالات ورسائل.",
          stat: "سرعة في الإنجاز",
        },
        {
          title: "تقارير مالية فورية بدون Excel",
          body: "استغنِ عن جداول الإكسيل. راقب الإيرادات، التحصيلات، وسندات القبض في لوحات حية وبضغطة زر.",
          stat: "تقارير لحظية",
        },
        {
          title: "متابعة العقود وتجديدها تلقائيًا",
          body: "لا مزيد من العقود المنتهية بلا تنبيه. النظام يخبرك مقدماً للإبقاء على الإشغال عالياً وتأمين الإيرادات.",
          stat: "أتمتة التأجير",
        },
        {
          title: "رؤية مركزية للملاك والإدارة",
          body: "وفر لأصحاب القرار ملخصات واضحة عن حالة الأصول والعمليات لتمكين تسريع عجلة التوسع والنمو.",
          stat: "منصة الملاك",
        },
      ],
    },
    screenshots: {
      eyebrow: "النظام",
      title: "لقطات منتج تعطي الثقة قبل الاجتماع الأول.",
      cards: [
        { title: "لوحة التحكم الذكية", desc: "راقب كل عملياتك لحظيًا في شاشة واحدة توفر لك الأهم بنظرة سريعة." },
        { title: "تفاصيل العقود المدمجة", desc: "نظرة شاملة لكل عقد مع الدفعات وتنبيهات الاستحقاق بدون جهد." },
        { title: "متابعة أوامر الصيانة", desc: "تخصيص المهام ومراقبة الأداء لكل فني لتحسين الجودة بشكل ملموس." },
        { title: "التقارير التحليلية", desc: "معلومات عميقة لتحديد نقاط قوة وضعف المحفظة العقارية بدقة." }
      ],
    },
    why: {
      eyebrow: "لماذا رافد؟",
      title: "أسس تقنية صلبة تخدم طموحك.",
      items: [
        { label: "نظام سحابي بالكامل", desc: "ادخل لنظامك من أي مكان، بلا سيرفرات معقدة أو عمليات تثبيت مكلفة." },
        { label: "مناسب للسوق الخليجي", desc: "مصمم لفهم طبيعة العقود والقوانين والتشريعات المحلية." },
        { label: "دعم عربي 100%", desc: "فريق فني يتحدث لغتك ومتاح لخدمتك متى ما احتجت." },
        { label: "قابل للتخصيص", desc: "يتماشى مع هيكلة شركتك والموديلات التي تلبي متطلباتك الدقيقة." },
      ],
    },
    cta: {
      title: "ابدأ الآن مع رافد",
      body: "اطلب عرضًا مخصصًا أو ابدأ تجربة مجانية وشاهد كيف تتحول الإدارة التشغيلية من التشتت إلى السيطرة.",
      primary: "احجز عرضًا حيًا (Demo)",
      secondary: "تواصل عبر واتساب",
    },
    footer: {
      address: "مسقط، سلطنة عمان",
      rights: "جميع الحقوق محفوظة لرافد",
      links: [
        { label: "الدعم الفني", href: "#" },
        { label: "سياسة الخصوصية", href: "#" },
        { label: "تواصل معنا", href: "#contact" },
        { label: "عن الشركة", href: "#" }
      ]
    },
  },
  en: {
    dir: "ltr",
    nav: {
      features: "Outcomes",
      system: "System",
      why: "Why Rafid?",
      pricing: "Pricing",
      contact: "Contact",
      demo: "Live Demo",
      switchLabel: "AR",
    },
    hero: {
      badge: "Property & facility management platform",
      title: "An integrated facility and property management system — from operations to finance in one platform",
      subtitle: "Full control over operations, maintenance, leasing, and billing — without complexity.",
      ctaPrimary: "🚀 Start Free Trial",
      ctaSecondary: "📊 Get Custom Quote",
      metric1: "500+ managed units",
      metric2: "95% occupancy",
      metric3: "1M+ yearly transactions",
    },
    socialProof: {
      eyebrow: "Success Partners",
      title: "Numbers that prove Rafid's effectiveness",
      stats: [
        { value: "+50", label: "Companies using Rafid" },
        { value: "+10,000", label: "Managed Units" },
        { value: "99.9%", label: "Uptime & Stability" }
      ]
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
    outcomes: {
      eyebrow: "Outcomes",
      title: "Designed for daily operations with immediate real results.",
      items: [
        {
          title: "Reduce maintenance time by 40%",
          body: "Automate the ticket lifecycle from submission to technician assignment and closure without endless calls.",
          stat: "Faster Operations",
        },
        {
          title: "Instant financial reports without Excel",
          body: "Drop spreadsheets. Monitor revenue, collections, and receipts in live dashboards with a single click.",
          stat: "Real-time Metrics",
        },
        {
          title: "Automated lease tracking",
          body: "No more expired contracts slipping through. The system alerts you early to maintain high occupancy.",
          stat: "Automated Leasing",
        },
        {
          title: "Centralized view for owners",
          body: "Provide decision-makers with clear summaries of asset health, empowering faster expansion and growth.",
          stat: "Owner Portal",
        },
      ],
    },
    screenshots: {
      eyebrow: "The System",
      title: "Product views that build confidence before the first meeting.",
      cards: [
        { title: "Smart Dashboard", desc: "Monitor all operations in real-time on one focused screen." },
        { title: "Integrated Contract Details", desc: "Holistic view of every contract, payments, and alerts effortlessly." },
        { title: "Maintenance Tracking", desc: "Assign tasks and monitor technician performance to improve quality." },
        { title: "Analytical Reports", desc: "Deep insights to accurately identify your portfolio's strengths and weaknesses." }
      ],
    },
    why: {
      eyebrow: "Why Rafid?",
      title: "Solid technological foundations to serve your ambition.",
      items: [
        { label: "100% Cloud Based", desc: "Access from anywhere without complex servers or costly local installations." },
        { label: "Built for the GCC", desc: "Designed to understand local contract laws, regulations, and market nuances." },
        { label: "Full Arabic & English Support", desc: "A technical team that speaks your language and is ready when you need them." },
        { label: "Highly Customizable", desc: "Adapts to your company structure and modules that fit your precise requirements." },
      ],
    },
    cta: {
      title: "Start with Rafid today",
      body: "Request a custom quote or start your free trial and watch your operations shift from fragmentation to control.",
      primary: "Book a Demo",
      secondary: "Contact via WhatsApp",
    },
    footer: {
      address: "Muscat, Oman",
      rights: "All rights reserved to Rafid",
      links: [
        { label: "Support", href: "#" },
        { label: "Privacy Policy", href: "#" },
        { label: "Contact Us", href: "#contact" },
        { label: "About Us", href: "#" }
      ]
    },
  },
}

const marqueeMetrics = [
  "500+ Units",
  "95% Occupancy",
  "1M+ Transactions",
  "40% Faster",
  "12 Active Tickets",
]

const problemIcons = [<FileX className="h-5 w-5" />, <TimerOff className="h-5 w-5" />, <Wrench className="h-5 w-5" />, <TrendingDown className="h-5 w-5" />]

const featureImages = [
  'https://storage.googleapis.com/ard3/Rafid%20Website/contracts%20management.png',
  'https://storage.googleapis.com/ard3/Rafid%20Website/Rafid-dashboard.png',
  'https://storage.googleapis.com/ard3/Rafid%20Website/maintenance.png',
  'https://storage.googleapis.com/ard3/Rafid%20Website/Rafid-dashboard.png',
]

const screenshotImages = [
  { url: 'https://storage.googleapis.com/ard3/Rafid%20Website/Rafid-dashboard.png', alt: 'Rafid Dashboard' },
  { url: 'https://storage.googleapis.com/ard3/Rafid%20Website/contracts%20management.png', alt: 'Rafid Contracts Management' },
  { url: 'https://storage.googleapis.com/ard3/Rafid%20Website/maintenance.png', alt: 'Rafid Maintenance' },
  { url: 'https://storage.googleapis.com/ard3/Rafid%20Website/Rafid-dashboard.png', alt: 'Rafid Dashboard' },
]

export default function Page() {
  const [lang, setLang] = useState<Lang>("ar")
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const t = useMemo(() => copy[lang], [lang])
  const isArabic = lang === "ar"

  useEffect(() => {
    document.documentElement.dir = t.dir
    document.documentElement.lang = lang
  }, [lang, t.dir])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300)
      const heroDashboard = document.getElementById("hero-dashboard")
      if (heroDashboard) {
        const y = window.scrollY
        heroDashboard.style.transform = `translateY(${y * -0.1}px) rotate(${isArabic ? -2 : 2}deg)`
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isArabic])

  return (
    <main
      dir={t.dir}
      className="min-h-screen overflow-x-hidden bg-[#071426] text-white selection:bg-orange-500/30 selection:text-white pb-16"
    >
      <BackgroundOrbs />
      <Header lang={lang} setLang={setLang} menuOpen={menuOpen} setMenuOpen={setMenuOpen} t={t} />

      {/* Hero Section */}
      <section className="relative mx-auto max-w-7xl px-4 pb-20 pt-28 sm:px-6 lg:px-8 lg:pb-16 lg:pt-32">
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

            <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-5xl">
              {t.hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              {t.hero.subtitle}
            </p>

            <div className={`mt-8 flex flex-wrap gap-4 ${isArabic ? "justify-start lg:justify-start" : "justify-start"}`}>
              <a
                href="#contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-orange-500 px-6 py-4 text-base font-bold text-white shadow-[0_10px_40px_rgba(249,115,22,.28)] transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="#pricing"
                className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-6 py-4 text-base font-bold text-slate-100 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </motion.div>

          <motion.div
            id="hero-dashboard"
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

      {/* Social Proof Stats */}
      <section className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 border-t border-white/5">
         <div className="text-center mb-8">
            <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest">{t.socialProof.eyebrow}</p>
            <h3 className="mt-2 text-2xl font-bold text-white">{t.socialProof.title}</h3>
         </div>
         <div className="grid gap-6 md:grid-cols-3">
            {t.socialProof.stats.map((stat, i) => (
              <motion.div 
                 key={i}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: i * 0.1 }}
                 className="flex flex-col items-center justify-center p-6 rounded-2xl bg-white/[0.02] border border-white/5"
              >
                 <span className="text-4xl font-black text-orange-400 mb-2">{stat.value}</span>
                 <span className="text-slate-300 font-medium">{stat.label}</span>
              </motion.div>
            ))}
         </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 pb-8 pt-8 sm:px-6 lg:px-8 marquee-container">
        <Marquee isArabic={isArabic} />
      </section>

      <SectionDivider />

      {/* Problems */}
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
              whileHover={{ y: -6, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.1)" }}
              className={[
                "group rounded-[28px] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition-all duration-300",
                index === 0 ? "md:col-span-3" : "",
                index === 1 ? "md:col-span-2" : "",
                index === 2 ? "md:col-span-2" : "",
                index === 3 ? "md:col-span-3" : "",
              ].join(" ")}
              style={{ rotate: index % 2 === 0 ? "-1.5deg" : "1.5deg" }}
            >
              <div className="flex h-full flex-col justify-between">
                <div className="rounded-2xl bg-orange-500/10 p-2 text-orange-300 w-fit">
                  {problemIcons[index]}
                </div>
                <p className="text-lg font-medium leading-8 text-slate-100">{item}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Solution diagram */}
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
      
      <SectionDivider />

      {/* Features to Outcomes */}
      <section id="features" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t.outcomes.eyebrow} title={t.outcomes.title} align={t.dir} />
        <div className="mt-12 space-y-8">
          {t.outcomes.items.map((feature, index) => (
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
                <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-300 font-semibold border border-emerald-500/20">
                  <Star className="w-4 h-4" /> {feature.stat}
                </div>
                <h3 className="text-2xl font-bold text-white">{feature.title}</h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">{feature.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* System Screenshots with Context */}
      <section id="system" className="relative w-full overflow-hidden py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t.screenshots.eyebrow} title={t.screenshots.title} align={t.dir} />
        </div>
        <div className="flex gap-6 overflow-x-auto px-4 pt-12 pb-8 sm:px-6 lg:px-8" style={{ scrollbarWidth: "none" }}>
            {screenshotImages.map((img, index) => (
            <Dialog key={img.url + index}>
                <DialogTrigger asChild>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative min-w-[320px] md:min-w-[420px] aspect-[4/3] flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-lg transition-all duration-300 hover:shadow-orange-500/10 flex flex-col"
                >
                    <div className="relative flex-1 overflow-hidden">
                       <Image
                         src={img.url}
                         alt={img.alt}
                         fill
                         className="object-cover transition-transform duration-500 group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f38] via-transparent to-transparent opacity-60" />
                    </div>
                    <div className="p-6 bg-[#0f1f38] border-t border-white/5">
                       <h3 className="text-lg font-bold text-white tracking-wide">{t.screenshots.cards[index].title}</h3>
                       <p className="mt-2 text-sm text-slate-400 leading-relaxed">{t.screenshots.cards[index].desc}</p>
                    </div>
                </motion.div>
                </DialogTrigger>
                <DialogContent className="max-w-6xl p-2 bg-black/80 border-white/10 backdrop-blur-lg">
                  <Image
                      src={img.url}
                      alt={img.alt}
                      width={1920}
                      height={1080}
                      className="w-full h-auto rounded-md object-contain"
                  />
                </DialogContent>
            </Dialog>
            ))}
        </div>
      </section>
      
      <SectionDivider />

      {/* Why Rafid Detailed Performance */}
      <section id="why" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          <SectionHeading eyebrow={t.why.eyebrow} title={t.why.title} align={t.dir} />
          <div className="grid gap-6 sm:grid-cols-2">
            {[<Cloud key="cloud" className="h-6 w-6"/>, <MapPin key="pin" className="h-6 w-6"/>, <Headset key="headset" className="h-6 w-6"/>, <Settings key="settings" className="h-6 w-6"/>].map((icon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`rounded-[28px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-xl transition hover:bg-white/[0.06] ${isArabic ? "text-right" : "text-left"}`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
                   {icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{t.why.items[index].label}</h4>
                <p className="text-slate-400 leading-7">{t.why.items[index].desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />
      
      {/* Dynamic CPQ PricingSection */}
      <section id="pricing" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <PricingSection align={t.dir} />
      </section>

      <SectionDivider />

      <section id="contact" className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-[#0f1f38] via-[#0a1528] to-[#0b1322] p-8 shadow-[0_30px_100px_rgba(2,6,23,.4)] lg:p-12">
          <div className="absolute -right-24 top-8 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className={isArabic ? "text-right" : "text-left"}>
              <p className="text-sm uppercase tracking-[0.22em] text-orange-300/80">Rafid</p>
              <h2 className="mt-3 text-3xl font-black text-white sm:text-4xl">{t.cta.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">{t.cta.body}</p>
            </div>
            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <motion.a
                 animate={{ scale: [1, 1.03, 1] }}
                 transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
                href="mailto:info@rafid.om"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-4 text-base font-bold text-white shadow-[0_0_30px_rgba(249,115,22,.2)] transition hover:-translate-y-0.5 hover:bg-orange-400"
              >
                {t.cta.primary}
              </motion.a>
              <a
                href="https://wa.me/96892975614"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-4 text-base font-bold text-slate-100 backdrop-blur-md transition hover:-translate-y-0.5 hover:bg-white/[0.08]"
              >
                <div className="w-2 h-2 rounded-full bg-green-500"></div> {t.cta.secondary}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 mt-12 bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-4 py-12 text-sm text-slate-400 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <a href="#" className="relative block h-12 w-28 mb-4">
              <Image
                src="https://storage.googleapis.com/ard3/ARD%20FM%20SYSTEM/logo%202.jpg"
                alt="Rafid Logo"
                fill
                className="object-contain"
              />
            </a>
            <p className="mt-2 text-slate-500">{t.footer.address}</p>
          </div>
          <div className="flex flex-wrap gap-x-8 gap-y-4 font-medium text-slate-300">
             {t.footer.links.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-white transition-colors">{link.label}</a>
             ))}
          </div>
          <p className="border-t border-white/10 pt-8 lg:border-t-0 lg:pt-0 text-slate-500">{t.footer.rights}</p>
        </div>
      </footer>

      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/96892975614" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="fixed bottom-6 left-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition-all hover:scale-110 focus:outline-none"
      >
         <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25"></div>
         <MessageCircle className="h-7 w-7" />
      </a>

      {/* Sticky Bottom Bar CTA that appears on scroll */}
       <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 inset-x-0 z-50 p-4 lg:hidden bg-[#071426]/90 backdrop-blur-lg border-t border-white/10"
          >
             <a
               href="#pricing"
               className="flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white shadow-lg"
             >
               {t.hero.ctaPrimary}
             </a>
          </motion.div>
        )}
      </AnimatePresence>
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
    { href: "#pricing", label: t.nav.pricing },
    { href: "#contact", label: t.nav.contact },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-[#081426]/80 px-4 py-3 shadow-[0_12px_30px_rgba(2,6,23,.25)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <a href="#" className="relative block h-8 w-20">
              <Image
                src="https://storage.googleapis.com/ard3/ARD%20FM%20SYSTEM/logo%202.jpg"
                alt="Rafid Logo"
                fill
                className="object-contain"
                priority
              />
            </a>

            <nav className="hidden items-center gap-7 text-sm font-medium text-slate-300 lg:flex">
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
                className="rounded-xl border border-white/10 bg-transparent px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5"
              >
                {t.nav.demo}
              </a>
              <a
                href="#pricing"
                className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-orange-400"
              >
                🚀 {t.hero.ctaPrimary.replace('🚀', '').trim()} 
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
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-sm text-slate-100 mt-2"
                >
                  <Globe className="h-4 w-4 inline mr-2 ml-2" />
                  {t.nav.switchLabel}
                </button>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl border border-slate-700 bg-transparent px-3 py-3 text-center text-sm font-semibold text-white mt-1"
                >
                  {t.nav.demo}
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl bg-orange-500 px-3 py-3 text-center text-sm font-semibold text-white mt-2"
                >
                  {t.hero.ctaPrimary}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

function SectionDivider() {
  return (
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="relative h-16">
        <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/12 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-24 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/8 blur-3xl" />
      </div>
    </div>
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
      <p className="text-sm font-bold uppercase tracking-widest text-orange-400">{eyebrow}</p>
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
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/15 text-orange-400">
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
      className="rounded-[30px] border border-orange-400/20 bg-gradient-to-br from-orange-500/15 to-white/[0.04] p-8 text-center backdrop-blur-xl shadow-lg"
    >
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.5)]">
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
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-4 backdrop-blur-xl">
      <motion.div
        animate={{ x: isArabic ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex min-w-max gap-12 px-6"
      >
        {items.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-3 text-sm whitespace-nowrap">
            <span className="font-black text-orange-400">{item.split(" ")[0]}</span>
            <span className="text-slate-300 font-medium">{item.split(" ").slice(1).join(" ")}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}