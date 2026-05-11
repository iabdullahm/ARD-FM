"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
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
  Zap
} from "lucide-react"
import { PricingSection } from "@/components/sections/PricingSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { RichFooter } from "@/components/sections/RichFooter"

type Lang = "ar" | "en"

const STRINGS = {
  ar: {
    dir: "rtl",
    nav: {
      features: "الخصائص",
      howItWorks: "كيف يعمل؟",
      whoFor: "لمن رافد؟",
      pricing: "الأسعار",
      faq: "الأسئلة الشائعة",
      contact: "تواصل معنا",
      switchLabel: "EN",
      demo: "جرب النظام الآن (Demo)",
    },
    hero: {
      badge: "منصة إدارة المرافق والعقارات #1 في سلطنة عُمان",
      title: "أدر منشآتك بكفاءة، واختصر زمن الإصلاح بنسبة 30%",
      subtitle: "منصة سحابية موحّدة لإدارة العقارات والصيانة والعقود والمدفوعات، مدعومة بمسح QR، تتبع GPS للفنيين، ومؤقتات SLA تلقائية. صُممت خصيصاً لشركات إدارة المرافق وملاك العقارات.",
      stats: [
        { value: "30%", label: "تقليل زمن الإصلاح" },
        { value: "99.99%", label: "توفر الخدمة" },
        { value: "50+", label: "منشأة/الساعة" },
      ],
      primary: "احجز عرضاً تجريبياً",
      secondary: "جرب النظام الآن (Demo)",
    },
    whatOffers: {
      eyebrow: "ماذا يقدم رافد؟",
      title: "كل ما تحتاجه لإدارة العقارات في نظام واحد",
      items: [
        "إدارة العقارات والوحدات",
        "إدارة المستأجرين",
        "إدارة العقود",
        "متابعة الصيانة",
        "إدارة الدفعات",
        "تقارير شاملة",
      ]
    },
    coreFeatures: {
      eyebrow: "الخصائص الأساسية",
      title: "نظام تشغيل يومي متكامل",
      items: [
        {
          title: "إدارة العقارات",
          desc: "تسجيل جميع العقارات والوحدات، متابعة حالة الإشغال، وتنظيم بيانات الأصول.",
        },
        {
          title: "إدارة المستأجرين",
          desc: "حفظ بيانات المستأجرين، ربط المستأجر بالعقود، وسجل كامل للتعاملات.",
        },
        {
          title: "إدارة العقود",
          desc: "إنشاء وإدارة العقود، تحديد تواريخ البداية والنهاية، ومتابعة التجديدات.",
        },
        {
          title: "إدارة الدفعات",
          desc: "تسجيل الإيجارات، متابعة حالة السداد، وتنظيم الفواتير.",
        },
        {
          title: "إدارة الصيانة",
          desc: "تسجيل طلبات الصيانة، متابعة حالة الطلب، وتوزيع المهام.",
        },
        {
          title: "التقارير",
          desc: "تقارير مالية، تقارير إشغال، ونظرة شاملة على الأداء.",
        }
      ]
    },
    howItWorks: {
      eyebrow: "كيف يعمل رافد؟",
      title: "خطوات بسيطة لإدارة أفضل",
      steps: [
        "إضافة العقارات والوحدات",
        "تسجيل المستأجرين",
        "إنشاء العقود",
        "متابعة الدفعات والصيانة",
        "مراجعة التقارير"
      ]
    },
    whoFor: {
      eyebrow: "لمن رافد؟",
      title: "نظام صُمم لخدمة القطاع العقاري",
      items: [
        "شركات إدارة المرافق",
        "ملاك العقارات",
        "مدراء الأملاك",
        "شركات التطوير العقاري"
      ]
    },
    why: {
      eyebrow: "لماذا رافد؟",
      title: "الخيار الأفضل لعملك",
      items: [
        "نظام مركزي لكل العمليات",
        "سهولة في الاستخدام",
        "تنظيم البيانات بشكل احترافي",
        "تقليل العمل اليدوي",
        "تحسين متابعة العمليات اليومية"
      ]
    },
    cta: {
      title: "ابدأ بإدارة عقاراتك بطريقة أكثر تنظيمًا واحترافية",
      button: "👉 ابدأ الآن"
    },
    footer: {
      rights: "جميع الحقوق محفوظة لرافد",
    }
  },
  en: {
    dir: "ltr",
    nav: {
      features: "Features",
      howItWorks: "How it works",
      whoFor: "Who is it for",
      pricing: "Pricing",
      faq: "FAQ",
      contact: "Contact",
      switchLabel: "AR",
      demo: "Try Demo Now",
    },
    hero: {
      badge: "#1 Facility & Property Management Platform in Oman",
      title: "Run your facilities efficiently, cut repair time by 30%",
      subtitle: "Unified cloud platform for property, maintenance, contracts, and payments — powered by QR scanning, technician GPS tracking, and automated SLA timers. Built for FM companies and property owners.",
      stats: [
        { value: "30%", label: "Faster repair time" },
        { value: "99.99%", label: "Uptime SLA" },
        { value: "50+", label: "Facilities/hour" },
      ],
      primary: "Book a Demo",
      secondary: "Try Demo Now",
    },
    whatOffers: {
      eyebrow: "What Rafid Offers",
      title: "Everything you need in one system",
      items: [
        "Property & Unit Management",
        "Tenant Management",
        "Contract Management",
        "Maintenance Tracking",
        "Payment Management",
        "Comprehensive Reports",
      ]
    },
    coreFeatures: {
      eyebrow: "Core Features",
      title: "Complete daily operating system",
      items: [
        {
          title: "Property Management",
          desc: "Register all properties and units, track occupancy, and organize asset data.",
        },
        {
          title: "Tenant Management",
          desc: "Save tenant data, link tenants to contracts, and keep full transaction records.",
        },
        {
          title: "Contract Management",
          desc: "Create and manage contracts, set dates, and track renewals.",
        },
        {
          title: "Payment Management",
          desc: "Record rent, track payment status, and organize invoices.",
        },
        {
          title: "Maintenance Management",
          desc: "Log maintenance requests, track status, and assign tasks.",
        },
        {
          title: "Reports",
          desc: "Financial reports, occupancy reports, and comprehensive performance views.",
        }
      ]
    },
    howItWorks: {
      eyebrow: "How it works",
      title: "Simple steps for better management",
      steps: [
        "Add properties and units",
        "Register tenants",
        "Create contracts",
        "Track payments and maintenance",
        "Review reports"
      ]
    },
    whoFor: {
      eyebrow: "Who is it for?",
      title: "Designed for the real estate sector",
      items: [
        "Facility Management Companies",
        "Landlords",
        "Property Managers",
        "Real Estate Developers"
      ]
    },
    why: {
      eyebrow: "Why Rafid?",
      title: "The best choice for your business",
      items: [
        "Centralized system for all operations",
        "Ease of use",
        "Professional data organization",
        "Reduced manual work",
        "Improved daily operation tracking"
      ]
    },
    cta: {
      title: "Start managing your properties in a more organized and professional way",
      button: "👉 Start Now"
    },
    footer: {
      rights: "All rights reserved for Rafid",
    }
  }
}

export default function Page() {
  const [lang, setLang] = useState<Lang>("ar")
  const isArabic = lang === "ar"
  const t = STRINGS[lang]

  const featureIcons = [
    <Building2 key="bld" className="h-6 w-6" />,
    <Users key="usr" className="h-6 w-6" />,
    <FileText key="file" className="h-6 w-6" />,
    <Wallet key="wal" className="h-6 w-6" />,
    <Wrench key="wr" className="h-6 w-6" />,
    <BarChart3 key="bar" className="h-6 w-6" />
  ]

  return (
    <div className={`min-h-screen bg-[#F8FAFC] selection:bg-orange-500/20 text-slate-900 ${isArabic ? "font-arabic" : "font-sans"}`} dir={t.dir}>
      <Header lang={lang} setLang={setLang} t={t} />

      <main className="pt-24">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-[#F8FAFC] pb-20 pt-16 lg:pt-24 border-b border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
              <div className={`flex flex-col ${isArabic ? "text-right" : "text-left"}`}>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white shadow-sm px-4 py-2 text-xs font-semibold text-slate-600 self-start">
                  <div className="relative h-5 w-5">
                    <Image src="/images/logo.png" alt="Logo" fill className="object-contain" />
                  </div>
                  {t.hero.badge}
                </div>
                <h1 className="text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl lg:leading-[1.15] text-balance">
                  {t.hero.title}
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-slate-600 text-balance max-w-lg">
                  {t.hero.subtitle}
                </p>
                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="#contact" className="rounded-xl bg-[#FF7A00] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_20px_rgba(255,122,0,0.2)] transition hover:bg-orange-600 hover:-translate-y-1">
                    {t.hero.primary}
                  </a>
                  <a href="https://app.rafidsystem.com/c/demo/dashboard" className="rounded-xl bg-white border border-slate-200 px-8 py-4 text-sm font-bold text-slate-900 shadow-sm transition hover:bg-slate-50 hover:-translate-y-1">
                    {t.hero.secondary}
                  </a>
                </div>

                {/* BRD-backed proof badges */}
                <div className="mt-12 grid grid-cols-3 gap-4 max-w-xl">
                  {t.hero.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                    >
                      <div className="text-2xl font-black text-[#FF7A00] sm:text-3xl">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-xs font-semibold text-slate-600 leading-tight">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Trust row */}
                <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                    {isArabic ? "تشفير AES-256" : "AES-256 Encryption"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Zap className="h-4 w-4 text-emerald-500" />
                    {isArabic ? "يعمل بدون إنترنت" : "Works Offline"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    {isArabic ? "مصادقة ثنائية MFA" : "MFA Enabled"}
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-4 rounded-[40px] bg-gradient-to-tr from-slate-200 to-slate-50 blur-2xl opacity-60" />
                <div className="relative rounded-[24px] border border-slate-200 bg-white p-2 shadow-xl hover:-translate-y-2 transition-transform duration-500">
                  <Image
                    src="/images/screenshots/hero.svg"
                    alt="Hero Dashboard"
                    width={1200}
                    height={800}
                    className="rounded-[16px] object-cover"
                    priority
                  />
                  <div className="absolute inset-0 rounded-[20px] ring-1 ring-inset ring-slate-900/5 pointer-events-none"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT RAFID OFFERS & CORE FEATURES */}
        <section id="features" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-sm font-bold uppercase tracking-widest text-[#FF7A00]">{t.coreFeatures.eyebrow}</span>
              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">{t.whatOffers.title}</h2>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {t.coreFeatures.items.map((item, index) => (
                <div key={index} className="group relative rounded-2xl border border-slate-100 bg-[#F8FAFC] p-8 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-1 hover:border-slate-200">
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[#FF7A00] border border-slate-200 shadow-sm transition-colors group-hover:bg-[#FF7A00] group-hover:text-white group-hover:border-[#FF7A00]">
                    {featureIcons[index]}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Middle CTA */}
            <div className="mt-16 flex justify-center">
               <a href="https://app.rafidsystem.com/c/demo/dashboard" className="rounded-xl bg-slate-900 px-8 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-slate-800 hover:-translate-y-1">
                 {t.hero.secondary}
               </a>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how" className="py-24 bg-[#F8FAFC] border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <span className="text-sm font-bold uppercase tracking-widest text-[#FF7A00]">{t.howItWorks.eyebrow}</span>
              <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">{t.howItWorks.title}</h2>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-slate-200 -translate-y-1/2" />
              <div className="grid gap-8 lg:grid-cols-5 relative z-10">
                {t.howItWorks.steps.map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center group cursor-default">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white border border-slate-200 text-xl font-black text-slate-400 shadow-sm mb-6 transition-all group-hover:border-[#FF7A00] group-hover:text-[#FF7A00] group-hover:-translate-y-1 group-hover:shadow-md">
                      {index + 1}
                    </div>
                    <h3 className="text-sm font-bold text-slate-900 px-2 leading-relaxed">{step}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* WHO IS IT FOR & WHY RAFID */}
        <section id="why" className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              
              {/* WHO FOR */}
              <div className="rounded-3xl border border-slate-100 bg-[#F8FAFC] p-10 transition-shadow hover:shadow-lg">
                 <span className="text-sm font-bold uppercase tracking-widest text-[#FF7A00]">{t.whoFor.eyebrow}</span>
                 <h2 className="mt-3 text-3xl font-black text-slate-900 mb-10">{t.whoFor.title}</h2>
                 <ul className="space-y-5">
                    {t.whoFor.items.map((item, index) => (
                      <li key={index} className="flex items-center gap-4">
                         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-slate-600">
                            <CheckCircle2 className="h-5 w-5 text-[#FF7A00]" />
                         </div>
                         <span className="text-lg font-semibold text-slate-800">{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>

              {/* WHY RAFID */}
              <div className="rounded-3xl border border-slate-100 bg-[#F8FAFC] p-10 transition-shadow hover:shadow-lg">
                 <span className="text-sm font-bold uppercase tracking-widest text-[#FF7A00]">{t.why.eyebrow}</span>
                 <h2 className="mt-3 text-3xl font-black text-slate-900 mb-10">{t.why.title}</h2>
                 <ul className="space-y-5">
                    {t.why.items.map((item, index) => (
                      <li key={index} className="flex items-center gap-4">
                         <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-slate-200 shadow-sm text-slate-600">
                            <CheckCircle2 className="h-5 w-5 text-[#FF7A00]" />
                         </div>
                         <span className="text-lg font-semibold text-slate-800">{item}</span>
                      </li>
                    ))}
                 </ul>
              </div>

            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <div id="pricing" className="border-t border-slate-100 bg-[#F8FAFC]">
           <PricingSection align={t.dir as "rtl" | "ltr"} />
        </div>

        {/* FAQ SECTION */}
        <FAQSection lang={lang} />

        {/* CONTACT SECTION */}
        <ContactSection lang={lang} />

        {/* FINAL CTA */}
        <section className="py-24 bg-[#FF7A00] relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8 relative z-10">
            <h2 className="text-3xl font-black leading-tight text-white sm:text-5xl text-balance">
              {t.cta.title}
            </h2>
            <div className="mt-12 flex justify-center">
              <a href="https://app.rafidsystem.com/c/demo/dashboard" className="rounded-xl bg-white px-10 py-5 text-lg font-bold text-[#FF7A00] shadow-xl transition hover:scale-105 hover:shadow-2xl">
                {t.cta.button}
              </a>
            </div>
          </div>
        </section>

      </main>

      <RichFooter lang={lang} />
    </div>
  )
}

function Header({ lang, setLang, t }: { lang: Lang, setLang: (l: Lang) => void, t: any }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const isArabic = lang === "ar"

  const items = [
    { label: t.nav.features, href: "#features" },
    { label: t.nav.howItWorks, href: "#how" },
    { label: t.nav.whoFor, href: "#why" },
    { label: t.nav.pricing, href: "#pricing" },
    { label: t.nav.faq, href: "#faq" },
    { label: t.nav.contact, href: "#contact" },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image src="/images/logo.png" alt="Rafid Logo" fill className="object-contain" />
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-slate-600 lg:flex">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#FF7A00]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <button
              onClick={() => setLang(isArabic ? "en" : "ar")}
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
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
                  setLang(isArabic ? "en" : "ar")
                  setMenuOpen(false)
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
  )
}
