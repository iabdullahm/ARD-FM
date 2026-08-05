"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus } from "lucide-react"

type FAQ = { q: string; a: string }

const FAQS_AR: FAQ[] = [
  {
    q: "هل يدعم رافد اللغة العربية والإنجليزية؟",
    a: "نعم، رافد ثنائي اللغة بالكامل (عربي/إنجليزي) مع دعم اتجاه RTL تلقائياً، ويمكن التبديل بين اللغتين من أي صفحة في النظام.",
  },
  {
    q: "أين تُخزَّن بياناتي؟",
    a: "تُخزَّن بياناتك في مراكز بيانات سحابية معتمدة عالية التوفر، ومحمية بتشفير AES-256 أثناء النقل والتخزين، مع نسخ احتياطي يومي تلقائي.",
  },
  {
    q: "هل يمكن ترحيل بياناتي من نظام قديم أو من Excel؟",
    a: "نعم، نوفّر قالب CSV قياسي وأداة تحقق للتأكد من جودة البيانات قبل الاستيراد. كما يقدّم فريقنا دعماً مجانياً لترحيل البيانات للباقات Operations و Business.",
  },
  {
    q: "هل يعمل النظام عند انقطاع الإنترنت؟",
    a: "يحتوي تطبيق الفنيين الميداني على وضع Sync-on-Reconnect: يمكن للفني تنفيذ المهام وتسجيل الأدلة بدون إنترنت، وتُرفع البيانات تلقائياً عند عودة الاتصال.",
  },
  {
    q: "ما الفرق بين باقات Starter و Operations و Business؟",
    a: "Starter تتضمن المنصة الأساسية وإدارة العقارات. Operations تضيف وحدة الصيانة والتشغيل وأوامر العمل. Business تشمل جميع الموديولات (العقارات + التأجير + الصيانة + الإدارة المالية + التقارير المتقدمة).",
  },
  {
    q: "هل تقدمون فترة تجريبية مجانية؟",
    a: "نعم، تتوفر نسخة Demo تفاعلية كاملة دون الحاجة إلى بطاقة ائتمان. كما نقدم تجربة مجانية لمدة 14 يوماً على الباقات المدفوعة بعد التواصل مع المبيعات.",
  },
  {
    q: "هل النظام آمن للبيانات الحساسة؟",
    a: "نعم، يطبّق رافد تشفير AES-256، مصادقة ثنائية إلزامية للحسابات الإدارية، صلاحيات RBAC دقيقة لكل دور، وسجل تدقيق كامل (Audit Log) لكل تعديل.",
  },
  {
    q: "هل يمكن للفنيين تسجيل العمل من الجوال؟",
    a: "نعم، يحتوي رافد على بوابة محسّنة للجوال للفنيين تدعم: مسح QR للأصول، تسجيل وقت العمل (Start/Stop Timer)، رفع صور قبل/بعد، وتسجيل الموقع GPS تلقائياً.",
  },
]

const FAQS_EN: FAQ[] = [
  {
    q: "Does Rafid support both Arabic and English?",
    a: "Yes, Rafid is fully bilingual (Arabic/English) with automatic RTL support, and you can switch languages from any page in the system.",
  },
  {
    q: "Where is my data stored?",
    a: "Your data is stored in certified high-availability cloud data centers, protected by AES-256 encryption in transit and at rest, with automatic daily backups.",
  },
  {
    q: "Can I migrate data from a legacy system or Excel?",
    a: "Yes, we provide a standardized CSV template and validation tool to ensure data quality before import. Our team also offers free data migration support for Operations and Business tiers.",
  },
  {
    q: "Does the system work offline?",
    a: "The field technician app includes Sync-on-Reconnect mode: technicians can perform tasks and record evidence offline, and data is automatically uploaded when connectivity returns.",
  },
  {
    q: "What's the difference between Starter, Operations, and Business tiers?",
    a: "Starter includes Core platform and Property Management. Operations adds Maintenance, Operations, and Work Orders. Business includes all modules (Property + Leasing + Operations + Finance + Advanced Reports).",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes, a full interactive Demo is available without credit card. We also offer a 14-day free trial on paid plans after speaking with sales.",
  },
  {
    q: "Is the system secure for sensitive data?",
    a: "Yes, Rafid implements AES-256 encryption, mandatory MFA for admin accounts, granular RBAC permissions per role, and a full audit log for every change.",
  },
  {
    q: "Can technicians log work from mobile?",
    a: "Yes, Rafid has a mobile-optimized portal for technicians supporting: QR asset scanning, work time tracking (Start/Stop timer), before/after photo uploads, and automatic GPS location logging.",
  },
]

export function FAQSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isRtl = lang === "ar"
  const faqs = isRtl ? FAQS_AR : FAQS_EN
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const t = {
    eyebrow: isRtl ? "الأسئلة الشائعة" : "FAQ",
    title: isRtl ? "كل ما تحتاج معرفته عن رافد" : "Everything you need to know about Rafid",
    subtitle: isRtl
      ? "لم تجد إجابتك؟ تواصل معنا وسنرد عليك خلال 24 ساعة."
      : "Couldn't find your answer? Contact us and we'll respond within 24 hours.",
  }

  return (
    <section id="faq" className="py-24 bg-[#F8FAFC] border-y border-slate-100">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-sm font-bold uppercase tracking-widest text-[#FF7A00]">
            {t.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-slate-600">{t.subtitle}</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all ${
                  isOpen
                    ? "border-[#FF7A00] bg-white shadow-md"
                    : "border-slate-200 bg-white hover:border-slate-300"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`flex w-full items-center justify-between gap-4 px-6 py-5 ${isRtl ? "text-right" : "text-left"}`}
                  aria-expanded={isOpen}
                >
                  <span className="flex-1 text-base font-bold text-slate-900 sm:text-lg">
                    {faq.q}
                  </span>
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors ${
                      isOpen
                        ? "bg-[#FF7A00] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
