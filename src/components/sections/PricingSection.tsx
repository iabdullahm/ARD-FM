"use client"
import { useState } from "react"
import { Check, ShieldCheck, Wrench, KeyRound, Calculator, Box } from "lucide-react"

type ModuleCode = "operations" | "facility" | "leasing" | "finance"

export function PricingSection({ align = "rtl" }: { align?: "rtl" | "ltr" }) {
  const [units, setUnits] = useState(10)
  const [activeModules, setActiveModules] = useState<ModuleCode[]>(["operations"])

  const isRtl = align === "rtl"

  const STRINGS = {
    ar: {
      title: "أسعار مرنة تتكيف مع احتياجك",
      subtitle: "اختر حجم عملك والموديلات التي تحتاجها، وسنقوم باحتساب السعر مباشرة.",
      unitsTitle: "عدد الوحدات الحالية",
      unitsLabel: "وحدة",
      modulesTitle: "الموديلات المطلوبة",
      coreTitle: "المنصة الأساسية",
      coreIncluded: "مضمن مجاناً",
      featuresIncluded: "تتضمن:",
      toggleOn: "مفعّل",
      toggleOff: "تعطيل",
      summaryTitle: "ملخص السعر (Quote Builder)",
      summaryBase: "أساسيات النظام",
      summaryModules: "الإضافات المحددة",
      summaryTotal: "الإجمالي التقديري",
      month: "/ شهرياً",
      btnCTA: "🚀 احسب وأنتج عرض السعر",
      btnDetails: "سيتم إرسال العرض المخصص لبريدك الإلكتروني مباشرة",
      currency: "ر.ع",
      premium: "Premium",
      modules: {
        operations: { title: "التشغيل والصيانة", desc: "إدارة التشغيل والصيانة", list: ["Work Orders", "Service Tickets", "Preventive Maintenance", "Technicians", "Bookings"] },
        facility: { title: "إدارة الأصول والعقارات", desc: "إدارة الأصول والعقارات", list: ["Facilities", "Buildings", "Units", "Assets"] },
        leasing: { title: "إدارة التأجير", desc: "إدارة العقود والإيجارات", list: ["Tenants", "Leases", "Contracts"] },
        finance: { title: "الإدارة المالية", desc: "محاسبة مالية للشركات", list: ["Invoices", "Payments", "Chart of Accounts", "Journals"] },
      },
      coreList: ["Dashboard", "Administration", "Reports"]
    },
    en: {
      title: "Flexible pricing built for your needs",
      subtitle: "Select your volume and required modules to build your perfect plan directly.",
      unitsTitle: "Number of Units",
      unitsLabel: "units",
      modulesTitle: "Required Modules",
      coreTitle: "Core Platform",
      coreIncluded: "Included Free",
      featuresIncluded: "Includes:",
      toggleOn: "ON",
      toggleOff: "OFF",
      summaryTitle: "Quote Summary",
      summaryBase: "Core System platform",
      summaryModules: "Selected Add-ons",
      summaryTotal: "Estimated Total",
      month: "/ month",
      btnCTA: "🚀 Generate Quote",
      btnDetails: "Your tailored quote will be sent to your email instantly.",
      currency: "OMR",
      premium: "Premium",
      modules: {
        operations: { title: "Operations", desc: "Operations & Maintenance", list: ["Work Orders", "Service Tickets", "Preventive Maintenance", "Technicians", "Bookings"] },
        facility: { title: "Facility Management", desc: "Asset & Facility Control", list: ["Facilities", "Buildings", "Units", "Assets"] },
        leasing: { title: "Leasing", desc: "Contracts & Tenant Management", list: ["Tenants", "Leases", "Contracts"] },
        finance: { title: "Finance", desc: "Financial Administration", list: ["Invoices", "Payments", "Chart of Accounts", "Journals"] },
      },
      coreList: ["Dashboard", "Administration", "Reports"]
    }
  }

  const t = STRINGS[isRtl ? "ar" : "en"]

  const MODULES_CONFIG = [
    { code: "operations" as const, price: 25, icon: Wrench, colorClass: "border-blue-500/40 bg-blue-500/10 text-blue-400", activeBg: "bg-blue-500" },
    { code: "facility" as const, price: 25, icon: Box, colorClass: "border-purple-500/40 bg-purple-500/10 text-purple-400", activeBg: "bg-purple-500" },
    { code: "leasing" as const, price: 20, icon: KeyRound, colorClass: "border-yellow-500/40 bg-yellow-500/10 text-yellow-400", activeBg: "bg-yellow-500" },
    { code: "finance" as const, price: 35, icon: Calculator, colorClass: "border-red-500/40 bg-red-500/10 text-red-500 ring-1 ring-red-500/30", activeBg: "bg-red-500", premium: true },
  ]

  // Tiers logic
  const getBasePrice = (u: number) => {
    if (u <= 10) return 19
    if (u <= 100) return 79
    if (u <= 1000) return 299
    return 299 + (u - 1000) * 0.2
  }

  const basePrice = getBasePrice(units)

  const modulesPrice = activeModules.reduce((acc, code) => {
    const mod = MODULES_CONFIG.find(m => m.code === code)
    return acc + (mod?.price || 0)
  }, 0)
  
  const finalPrice = Math.round(basePrice + modulesPrice)

  const toggleModule = (code: ModuleCode) => {
    if (activeModules.includes(code)) {
      setActiveModules(activeModules.filter((x) => x !== code))
    } else {
      setActiveModules([...activeModules, code])
    }
  }

  return (
    <div className={`mx-auto max-w-6xl rounded-[36px] border border-orange-500/20 bg-gradient-to-br from-[#0f1f38] via-[#0a1528] to-[#0b1322] p-6 shadow-2xl lg:p-12 ${isRtl ? "text-right" : "text-left"}`}>
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-black text-white sm:text-4xl">{t.title}</h2>
        <p className="mt-4 text-lg text-slate-300">{t.subtitle}</p>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        
        {/* Left: Configuration */}
        <div className="space-y-12">
          
          {/* Slider */}
          <div>
            <div className="flex justify-between items-end mb-6">
              <h3 className="text-xl font-bold text-white">{t.unitsTitle}</h3>
              <span className="text-2xl font-black text-orange-400">{units} <span className="text-sm font-normal text-slate-400">{t.unitsLabel}</span></span>
            </div>
            
            <input
              type="range"
              min={10}
              max={1500}
              step={10}
              value={units}
              onChange={(e) => setUnits(Number(e.target.value))}
              className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-orange-500 outline-none"
              aria-label={t.unitsTitle}
            />
            
            <div className="mt-4 flex justify-between text-xs font-medium text-slate-500 px-1">
               <span>10</span>
               <span>100</span>
               <span>500</span>
               <span>1000</span>
               <span>1500+</span>
            </div>
          </div>

          {/* Core Platform (Included) */}
          <div>
            <h3 className="text-lg font-bold text-slate-300 mb-4">{t.modulesTitle}</h3>
            
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 mb-4 opacity-90">
               <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                     <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                        <ShieldCheck className="h-5 w-5" />
                     </div>
                     <div>
                        <h4 className="text-base font-bold text-emerald-100 flex items-center gap-2">
                          {t.coreTitle}
                          <span className="px-2 py-0.5 rounded text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/20">✔ {t.coreIncluded}</span>
                        </h4>
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate-400">
                           {t.coreList.map(item => (
                             <span key={item} className="flex items-center gap-1"><Check className="h-3 w-3 text-emerald-500" /> {item}</span>
                           ))}
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Configurable Modules */}
            <div className="grid gap-4 sm:grid-cols-2">
              {MODULES_CONFIG.map((mod) => {
                const isActive = activeModules.includes(mod.code)
                const isPremium = mod.premium
                
                return (
                  <div
                    key={mod.code}
                    onClick={() => toggleModule(mod.code)}
                    className={`relative cursor-pointer rounded-2xl border p-5 transition-all duration-300 flex flex-col justify-between ${
                      isActive
                        ? mod.colorClass
                        : "border-white/10 bg-white/[0.02] hover:bg-white/[0.05]"
                    }`}
                  >
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${isActive ? mod.colorClass : 'bg-slate-800 text-slate-400'}`}>
                          <mod.icon className="h-5 w-5" />
                        </div>
                        
                        {/* Custom Toggle Switch */}
                        <div className={`flex items-center gap-2 text-xs font-bold ${isActive ? 'text-white' : 'text-slate-500'}`}>
                           {isActive ? t.toggleOn : t.toggleOff}
                           <div className={`flex h-5 w-9 items-center rounded-full p-1 transition-colors duration-300 ${isActive ? mod.activeBg : 'bg-slate-700'}`}>
                              <div className={`h-3 w-3 rounded-full bg-white transition-transform duration-300 ${isActive ? (isRtl ? '-translate-x-4' : 'translate-x-4') : 'translate-x-0'}`} />
                           </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <h4 className={`text-base font-bold ${isActive ? 'text-white' : 'text-slate-300'}`}>
                          {t.modules[mod.code].title}
                        </h4>
                        {isPremium && (
                           <span className="px-1.5 py-0.5 rounded text-[10px] uppercase font-bold bg-gradient-to-r from-red-500 to-orange-500 text-white leading-none">
                             {t.premium}
                           </span>
                        )}
                      </div>
                      
                      <p className="mt-3 text-xs font-medium text-slate-400 mb-2">{t.featuresIncluded}</p>
                      <ul className="space-y-1.5">
                         {t.modules[mod.code].list.map((item, idx) => (
                           <li key={idx} className="flex items-start gap-1.5 text-xs text-slate-300">
                             <Check className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${isActive ? 'text-white/70' : 'text-slate-500'}`} />
                             <span>{item}</span>
                           </li>
                         ))}
                      </ul>
                    </div>
                    
                    <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between">
                       <span className={`text-sm font-bold ${isActive ? 'text-white' : 'text-slate-400'}`}>
                         +{mod.price} {t.currency}
                       </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right: Summary & Quote */}
        <div className="relative">
          <div className="sticky top-28 flex flex-col justify-between rounded-3xl border border-white/10 bg-[#071426] p-8 shadow-xl">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-orange-500/10 blur-3xl z-0 pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4">{t.summaryTitle}</h3>
              
              <div className="mt-8 space-y-6">
                <div className="flex justify-between items-center text-slate-300">
                  <span>{t.summaryBase} ({units} {t.unitsLabel})</span>
                  <span className="text-lg text-white font-semibold">{basePrice} {t.currency}</span>
                </div>
                
                <div className="flex justify-between items-center text-slate-300 pb-6 border-b border-white/10">
                  <span>{t.summaryModules} ({activeModules.length})</span>
                  <span className="text-lg text-white font-semibold">+{modulesPrice} {t.currency}</span>
                </div>

                <div className="flex justify-between items-end pt-2">
                  <div>
                    <span className="text-sm text-slate-400">{t.summaryTotal}</span>
                  </div>
                  <div className="text-left" dir="ltr">
                    <span className="text-4xl font-black text-orange-400 tracking-tight">{t.currency} {finalPrice}</span>
                    <span className="text-sm text-slate-400 block mt-1">{t.month}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12">
              <button className="w-full flex justify-center items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 py-4 text-base font-bold text-white shadow-[0_10px_20px_rgba(249,115,22,0.2)] transition hover:from-orange-400 hover:to-amber-400 hover:-translate-y-1">
                {t.btnCTA}
              </button>
              <p className="text-center text-xs text-slate-400 mt-4 leading-relaxed max-w-[80%] mx-auto">
                {t.btnDetails}
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
