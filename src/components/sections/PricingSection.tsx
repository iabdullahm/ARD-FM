"use client"
import { useState } from "react"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export function PricingSection({ align = "rtl" }: { align?: "rtl" | "ltr" }) {
  const [isAnnual, setIsAnnual] = useState(false)
  const isRtl = align === "rtl"

  const t = {
    title: isRtl ? "أسعار بسيطة تناسب عملك" : "Simple pricing for your business",
    subtitle: isRtl ? "اختر الباقة المناسبة لك أو خصص خطتك بسهولة" : "Choose the right plan for you",
    monthly: isRtl ? "شهري" : "Monthly",
    annual: isRtl ? "سنوي" : "Annual",
    saveBadge: isRtl ? "خصم 20%" : "20% off",
    saveMonths: isRtl ? "ما يعادل شهرين مجاناً" : "2 months free",
    currency: isRtl ? "ر.ع" : "OMR",
    month: isRtl ? "/شهرياً" : "/mo",
    yearTotal: isRtl ? "تُحاسب سنوياً" : "billed annually",
    popular: isRtl ? "الأكثر طلباً" : "Most Popular",
    cta: isRtl ? "ابدأ الآن" : "Start Now",
    or: isRtl ? "أو" : "OR",
    customTitle: isRtl ? "خصّص خطتك بنفسك" : "Customize your plan",
    customDesc: isRtl ? "اختر فقط الموديولات التي تحتاجها وادفع حسب استخدامك" : "Pay as you go",
    customCTA: isRtl ? "ابدأ التخصيص" : "Start Customizing",
    features: {
      core: isRtl ? "المنصة الأساسية (Core)" : "Core Platform",
      property: isRtl ? "إدارة العقارات" : "Property Management",
      operations: isRtl ? "الصيانة والتشغيل" : "Operations & Maintenance",
      leasing: isRtl ? "التأجير" : "Leasing",
      finance: isRtl ? "الإدارة المالية" : "Finance",
      all: isRtl ? "جميع الموديولات" : "All Modules",
    }
  }

  const plans = [
    { name: "Starter", priceMonthly: 39, effectiveMonthlyAnnual: 31, yearTotal: 374, popular: false,
      features: [t.features.core, t.features.property] },
    { name: "Operations", priceMonthly: 59, effectiveMonthlyAnnual: 47, yearTotal: 566, popular: true,
      features: [t.features.core, t.features.property, t.features.operations] },
    { name: "Business", priceMonthly: 79, effectiveMonthlyAnnual: 63, yearTotal: 758, popular: false,
      features: [t.features.all, t.features.property, t.features.leasing, t.features.operations, t.features.finance] }
  ]

  return (
    <section id="pricing" className={"mx-auto max-w-[1200px] py-10 px-4 " + (isRtl ? "text-right" : "text-left")}>
      <div className="text-center mb-12">
        <h2 className="text-3xl font-black text-slate-900 sm:text-4xl">{t.title}</h2>
        <p className="mt-4 text-lg text-slate-600">{t.subtitle}</p>

        <div className="mt-8 inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
          <button
            onClick={() => setIsAnnual(false)}
            aria-pressed={!isAnnual}
            className={"relative rounded-full px-5 py-2 text-sm font-bold transition-all " + (!isAnnual ? "bg-slate-900 text-white shadow" : "text-slate-600 hover:text-slate-900")}
          >
            {t.monthly}
          </button>
          <button
            onClick={() => setIsAnnual(true)}
            aria-pressed={isAnnual}
            className={"relative rounded-full px-5 py-2 text-sm font-bold transition-all flex items-center gap-2 " + (isAnnual ? "bg-slate-900 text-white shadow" : "text-slate-600 hover:text-slate-900")}
          >
            {t.annual}
            <span className={"inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold transition-colors " + (isAnnual ? "bg-emerald-400 text-emerald-950" : "bg-orange-100 text-orange-600")}>
              {t.saveBadge}
            </span>
          </button>
        </div>
        {isAnnual && (
          <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-3 text-sm font-semibold text-emerald-600">
            ✓ {t.saveMonths}
          </motion.p>
        )}
      </div>

      <div className="grid gap-8 lg:grid-cols-3 items-stretch">
        {plans.map((plan, index) => {
           const displayPrice = isAnnual ? plan.effectiveMonthlyAnnual : plan.priceMonthly;
           const originalPrice = plan.priceMonthly;
           return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={"relative rounded-[16px] bg-white p-8 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full " + (plan.popular ? "border-2 border-[#FF7A00] shadow-xl scale-100 lg:scale-105 z-10" : "border border-slate-200 shadow-sm")}
              >
                 {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-[#FF7A00] px-4 py-1 text-sm font-bold text-white shadow-sm whitespace-nowrap">
                       {t.popular}
                    </div>
                 )}
                 <div className="mb-6">
                    <h3 className="text-xl font-bold text-slate-900">{plan.name}</h3>
                    <div className="mt-4 flex items-baseline gap-2">
                       {isAnnual && (
                         <span className="text-lg font-bold text-slate-400 line-through">{originalPrice}</span>
                       )}
                       <span className="text-4xl font-black text-slate-900">{displayPrice}</span>
                       <span className="text-lg font-bold text-slate-500">{t.currency}</span>
                       <span className="text-sm text-slate-500">{t.month}</span>
                    </div>
                    <span className="text-xs text-slate-500 mt-2 block min-h-[1.25rem]">
                       {isAnnual ? (plan.yearTotal + " " + t.currency + " " + t.yearTotal) : " "}
                    </span>
                 </div>
                 <div className="mb-8 flex-1">
                    <ul className="space-y-4">
                       {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-3">
                             <Check className="h-5 w-5 shrink-0 text-[#FF7A00]" />
                             <span className="text-slate-600 font-medium">{feature}</span>
                          </li>
                       ))}
                    </ul>
                 </div>
                 <a href="https://app.rafidsystem.com/c/demo/dashboard"
                    className={"w-full inline-flex items-center justify-center rounded-[16px] py-4 font-bold transition-all " + (plan.popular ? "bg-[#FF7A00] text-white shadow-[0_10px_20px_rgba(255,122,0,0.2)] hover:bg-orange-600" : "bg-slate-50 text-slate-900 hover:bg-slate-100")}>
                    {t.cta}
                 </a>
              </motion.div>
           )
        })}
      </div>

      <div className="my-16 flex items-center justify-center relative">
         <div className="h-px w-full bg-slate-200" />
         <span className="absolute left-1/2 -translate-x-1/2 bg-[#F8FAFC] px-4 text-sm font-bold text-slate-400">{t.or}</span>
      </div>

      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true }}
         className="mx-auto max-w-4xl rounded-[16px] border border-slate-200 bg-white p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow"
      >
         <div>
            <h3 className="text-xl font-bold text-slate-900">{t.customTitle}</h3>
            <p className="mt-2 text-slate-600">{t.customDesc}</p>
         </div>
         <a href="#contact" className="whitespace-nowrap rounded-[16px] border border-slate-200 bg-white shadow-sm px-8 py-4 font-bold text-slate-900 transition-colors hover:bg-slate-50 hover:border-slate-300">
            {t.customCTA}
         </a>
      </motion.div>
    </section>
  )
}
