"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  LayoutDashboard,
  Building2,
  Users,
  FileText,
  Wrench,
  BarChart3,
  LogOut,
  Bell,
  Search,
  Settings,
  Plus,
  Trash2,
  Download,
  AlertCircle,
  CheckCircle2,
  Edit2
} from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

type View = "dashboard" | "properties" | "tenants" | "contracts" | "maintenance" | "reports"
type Lang = "ar" | "en"

/* ------------------------------------------------------------------ */
/* Status keys + colors (language-independent)                         */
/* ------------------------------------------------------------------ */

const STATUS_COLORS: Record<string, string> = {
  rented: "bg-green-100 text-green-700",
  vacant: "bg-red-100 text-red-700",
  partial: "bg-yellow-100 text-yellow-700",
  active: "bg-green-100 text-green-700",
  inactive: "bg-slate-200 text-slate-700",
  expiring: "bg-yellow-100 text-yellow-700",
  expired: "bg-red-100 text-red-700",
  renewing: "bg-yellow-100 text-yellow-700",
  open: "bg-red-100 text-red-700",
  inprogress: "bg-yellow-100 text-yellow-700",
  awaiting: "bg-yellow-100 text-yellow-700",
  closed: "bg-slate-200 text-slate-700",
}

const STATUS_LABELS: Record<Lang, Record<string, string>> = {
  ar: {
    rented: "مؤجر", vacant: "شاغر", partial: "مؤجر جزئياً",
    active: "نشط", inactive: "غير نشط",
    expiring: "قريب الانتهاء", expired: "منتهي", renewing: "قيد التجديد",
    open: "مفتوح", inprogress: "قيد التنفيذ", awaiting: "بانتظار قطع غيار", closed: "مغلق",
  },
  en: {
    rented: "Rented", vacant: "Vacant", partial: "Partially Rented",
    active: "Active", inactive: "Inactive",
    expiring: "Expiring Soon", expired: "Expired", renewing: "Renewing",
    open: "Open", inprogress: "In Progress", awaiting: "Awaiting Parts", closed: "Closed",
  },
}

/* ------------------------------------------------------------------ */
/* Demo data (bilingual)                                               */
/* ------------------------------------------------------------------ */

const PROPERTIES = [
  { id: 1, nameAr: "فيلا الخوير", nameEn: "Al Khuwair Villa", typeAr: "سكني", typeEn: "Residential", units: 1, status: "rented" },
  { id: 2, nameAr: "شقة الموالح", nameEn: "Al Mawaleh Apartment", typeAr: "سكني", typeEn: "Residential", units: 1, status: "vacant" },
  { id: 3, nameAr: "بناية روي", nameEn: "Ruwi Building", typeAr: "تجاري", typeEn: "Commercial", units: 12, status: "partial" },
  { id: 4, nameAr: "مكتب القرم", nameEn: "Al Qurum Office", typeAr: "تجاري", typeEn: "Commercial", units: 1, status: "rented" },
  { id: 5, nameAr: "مخزن الرسيل", nameEn: "Al Rusayl Warehouse", typeAr: "صناعي", typeEn: "Industrial", units: 1, status: "vacant" },
]

const TENANTS = [
  { id: 1, nameAr: "أحمد البلوشي", nameEn: "Ahmed Al Balushi", phone: "+968 9123 4567", status: "active", propAr: "فيلا الخوير", propEn: "Al Khuwair Villa" },
  { id: 2, nameAr: "سالم الرواحي", nameEn: "Salim Al Rawahi", phone: "+968 9234 5678", status: "active", propAr: "شقة الموالح", propEn: "Al Mawaleh Apartment" },
  { id: 3, nameAr: "فاطمة الهنائية", nameEn: "Fatma Al Hinai", phone: "+968 9345 6789", status: "inactive", propAr: "مكتب القرم", propEn: "Al Qurum Office" },
  { id: 4, nameAr: "محمد الشحي", nameEn: "Mohammed Al Shehhi", phone: "+968 9456 7890", status: "active", propAr: "بناية روي", propEn: "Ruwi Building" },
]

const CONTRACTS = [
  { id: 1, typeAr: "عقد نشط", typeEn: "Active Lease", tenantAr: "أحمد البلوشي", tenantEn: "Ahmed Al Balushi", propAr: "فيلا الخوير", propEn: "Al Khuwair Villa", end: "2027-01-01", status: "active" },
  { id: 2, typeAr: "عقد قريب الانتهاء", typeEn: "Expiring Lease", tenantAr: "سالم الرواحي", tenantEn: "Salim Al Rawahi", propAr: "شقة الموالح", propEn: "Al Mawaleh Apartment", end: "2026-06-15", status: "expiring" },
  { id: 3, typeAr: "عقد منتهي", typeEn: "Expired Lease", tenantAr: "فاطمة الهنائية", tenantEn: "Fatma Al Hinai", propAr: "مكتب القرم", propEn: "Al Qurum Office", end: "2026-01-10", status: "expired" },
  { id: 4, typeAr: "عقد قيد التجديد", typeEn: "Renewing Lease", tenantAr: "محمد الشحي", tenantEn: "Mohammed Al Shehhi", propAr: "بناية روي", propEn: "Ruwi Building", end: "2026-05-30", status: "renewing" },
]

const MAINTENANCE = [
  { id: 1, issueAr: "تكييف لا يعمل", issueEn: "AC not working", propAr: "فيلا الخوير", propEn: "Al Khuwair Villa", date: "2026-05-01", status: "open" },
  { id: 2, issueAr: "تسريب مياه", issueEn: "Water leak", propAr: "شقة الموالح", propEn: "Al Mawaleh Apartment", date: "2026-05-02", status: "inprogress" },
  { id: 3, issueAr: "مشكلة كهرباء", issueEn: "Electrical issue", propAr: "بناية روي", propEn: "Ruwi Building", date: "2026-05-03", status: "awaiting" },
  { id: 4, issueAr: "صيانة باب رئيسي", issueEn: "Main door repair", propAr: "مكتب القرم", propEn: "Al Qurum Office", date: "2026-04-25", status: "closed" },
]

/* ------------------------------------------------------------------ */
/* UI strings                                                          */
/* ------------------------------------------------------------------ */

const T = {
  ar: {
    nav: { dashboard: "لوحة التحكم", properties: "العقارات", tenants: "المستأجرين", contracts: "العقود", maintenance: "الصيانة", reports: "التقارير", settings: "الإعدادات", exit: "خروج من الديمو" },
    searchPlaceholder: "ابحث عن عقار، مستأجر، أو عقد...",
    role: "مدير النظام",
    overviewTitle: "نظرة عامة",
    overviewDesc: "ملخص سريع لأداء المحفظة العقارية",
    exportReport: "تصدير التقرير",
    statProperties: "إجمالي العقارات",
    statContracts: "العقود النشطة",
    statRevenue: "الإيرادات المتوقعة",
    statMaintenance: "طلبات صيانة مفتوحة",
    revenueValue: "12,500 ر.ع",
    latestProperties: "أحدث العقارات",
    latestMaintenance: "طلبات الصيانة الأخيرة",
    viewAll: "عرض الكل",
    unit: "وحدة",
    views: {
      properties: { title: "العقارات", desc: "إدارة العقارات والوحدات السكنية والتجارية", columns: ["الاسم", "النوع", "الوحدات", "الحالة"] },
      tenants: { title: "المستأجرين", desc: "إدارة بيانات المستأجرين وحالتهم", columns: ["الاسم", "الهاتف", "العقار المرتبط", "الحالة"] },
      contracts: { title: "العقود", desc: "متابعة العقود النشطة، المنتهية والمجددة", columns: ["نوع العقد", "المستأجر", "العقار", "تاريخ الانتهاء", "الحالة"] },
      maintenance: { title: "طلبات الصيانة", desc: "متابعة طلبات الصيانة وتعيين الفنيين", columns: ["المشكلة", "العقار", "التاريخ", "الحالة"] },
    },
    actions: "الإجراءات",
    addNew: "إضافة جديد",
    reportsTitle: "التقارير التحليلية",
    reportsDesc: "بيانات تجريبية للمحفظة",
    exportPdf: "تصدير PDF",
    revenueReport: "تقرير الإيرادات الشهري",
    revenueReportDesc: "يعرض رسوماً بيانية للمدفوعات",
    occupancyReport: "تقرير إشغال العقارات",
    occupancyReportDesc: "يعرض نسب الإشغال والشواغر",
    viewDetailed: "عرض التقرير المفصل ←",
    restrictedTitle: "هذه الخاصية غير متاحة في نسخة الديمو.",
    restrictedDesc: "للحصول على صلاحيات كاملة، يرجى طلب حساب رسمي.",
    addSuccessTitle: "تم رفع طلب صيانة تجريبي بنجاح!",
    addSuccessDesc: "هذا إجراء تجريبي — لن يُحفظ الطلب في النظام.",
    welcomeTitle: "مرحباً بك في النسخة التجريبية من رافد",
    welcomeDesc: "هذه البيئة مخصصة للتجربة فقط. البيانات المعروضة تجريبية وليست حقيقية. بعض الخصائص مثل الحذف، التصدير، وإعدادات النظام غير مفعّلة في نسخة الديمو لضمان أمان البيئة.",
    tourTitle: "الجولة الإرشادية السريعة:",
    tour: [
      ["لوحة التحكم:", "ملخص سريع لعملياتك."],
      ["العقارات والمستأجرين:", "تصفح البيانات بسهولة."],
      ["العقود والصيانة:", "تابع الحالات النشطة."],
    ],
    fullVersionTitle: "النسخة التفاعلية الكاملة",
    fullVersionDesc: "لتجربة النظام بصلاحيات كاملة، يمكنك زيارة الديمو الحي:",
    linkLabel: "الرابط:",
    userLabel: "اسم المستخدم:",
    passLabel: "كلمة المرور:",
    startBtn: "ابدأ استكشاف النظام",
  },
  en: {
    nav: { dashboard: "Dashboard", properties: "Properties", tenants: "Tenants", contracts: "Contracts", maintenance: "Maintenance", reports: "Reports", settings: "Settings", exit: "Exit Demo" },
    searchPlaceholder: "Search properties, tenants, or contracts...",
    role: "System Admin",
    overviewTitle: "Overview",
    overviewDesc: "A quick summary of your portfolio performance",
    exportReport: "Export Report",
    statProperties: "Total Properties",
    statContracts: "Active Contracts",
    statRevenue: "Expected Revenue",
    statMaintenance: "Open Maintenance",
    revenueValue: "OMR 12,500",
    latestProperties: "Latest Properties",
    latestMaintenance: "Recent Maintenance Requests",
    viewAll: "View All",
    unit: "unit(s)",
    views: {
      properties: { title: "Properties", desc: "Manage residential and commercial properties and units", columns: ["Name", "Type", "Units", "Status"] },
      tenants: { title: "Tenants", desc: "Manage tenant records and their status", columns: ["Name", "Phone", "Linked Property", "Status"] },
      contracts: { title: "Contracts", desc: "Track active, expired and renewing contracts", columns: ["Contract Type", "Tenant", "Property", "End Date", "Status"] },
      maintenance: { title: "Maintenance Requests", desc: "Track maintenance requests and assign technicians", columns: ["Issue", "Property", "Date", "Status"] },
    },
    actions: "Actions",
    addNew: "Add New",
    reportsTitle: "Analytics Reports",
    reportsDesc: "Sample portfolio data",
    exportPdf: "Export PDF",
    revenueReport: "Monthly Revenue Report",
    revenueReportDesc: "Displays payment charts",
    occupancyReport: "Occupancy Report",
    occupancyReportDesc: "Shows occupancy and vacancy rates",
    viewDetailed: "View detailed report →",
    restrictedTitle: "This feature is not available in the demo.",
    restrictedDesc: "For full access, please request an official account.",
    addSuccessTitle: "Demo maintenance request submitted!",
    addSuccessDesc: "This is a demo action — the request will not be saved.",
    welcomeTitle: "Welcome to the Rafid Demo",
    welcomeDesc: "This environment is for evaluation only. All data shown is sample data. Some features such as delete, export, and system settings are disabled in the demo to keep the environment safe.",
    tourTitle: "Quick tour:",
    tour: [
      ["Dashboard:", "a quick summary of your operations."],
      ["Properties & Tenants:", "browse records with ease."],
      ["Contracts & Maintenance:", "track active items."],
    ],
    fullVersionTitle: "Full Interactive Version",
    fullVersionDesc: "To try the system with full permissions, visit the live demo:",
    linkLabel: "Link:",
    userLabel: "Username:",
    passLabel: "Password:",
    startBtn: "Start Exploring",
  },
}

/* ------------------------------------------------------------------ */

export default function DemoDashboard() {
  const { language: lang } = useLanguage()
  const isAr = lang === "ar"
  const t = T[lang]
  const statusLabel = (key: string) => STATUS_LABELS[lang][key] ?? key
  const statusColor = (key: string) => STATUS_COLORS[key] ?? "bg-slate-200 text-slate-700"

  const [activeView, setActiveView] = useState<View>("dashboard")
  const [showWelcome, setShowWelcome] = useState(true)
  const [showRestriction, setShowRestriction] = useState(false)
  const [showAddSuccess, setShowAddSuccess] = useState(false)

  const handleRestricted = () => {
    setShowRestriction(true)
    setTimeout(() => setShowRestriction(false), 4000)
  }

  const handleAddMaintenanceDemo = () => {
    setShowAddSuccess(true)
    setTimeout(() => setShowAddSuccess(false), 4000)
  }

  const handleViewChange = (view: View) => {
    setActiveView(view)
  }

  return (
    <div className={`flex h-screen bg-[#F8FAFC] ${isAr ? "font-arabic" : "font-body"} selection:bg-orange-500/20`} dir={isAr ? "rtl" : "ltr"}>

      {/* Sidebar */}
      <aside className="w-64 bg-white border-e border-slate-200 flex-col justify-between hidden md:flex z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div>
          <div className="h-20 flex items-center px-8 border-b border-slate-100">
             <div className="relative h-8 w-24">
                <Image src="/images/logo.png" alt="Rafid Logo" fill className="object-contain" />
             </div>
             <span className="ms-2 text-[10px] font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded-full uppercase tracking-wider">Demo</span>
          </div>
          <nav className="p-4 space-y-2">
            <SidebarItem icon={<LayoutDashboard />} label={t.nav.dashboard} active={activeView === "dashboard"} onClick={() => handleViewChange("dashboard")} />
            <SidebarItem icon={<Building2 />} label={t.nav.properties} active={activeView === "properties"} onClick={() => handleViewChange("properties")} />
            <SidebarItem icon={<Users />} label={t.nav.tenants} active={activeView === "tenants"} onClick={() => handleViewChange("tenants")} />
            <SidebarItem icon={<FileText />} label={t.nav.contracts} active={activeView === "contracts"} onClick={() => handleViewChange("contracts")} />
            <SidebarItem icon={<Wrench />} label={t.nav.maintenance} active={activeView === "maintenance"} onClick={() => handleViewChange("maintenance")} />
            <SidebarItem icon={<BarChart3 />} label={t.nav.reports} active={activeView === "reports"} onClick={() => handleViewChange("reports")} />
          </nav>
        </div>
        <div className="p-4 border-t border-slate-100">
          <SidebarItem icon={<Settings />} label={t.nav.settings} onClick={handleRestricted} active={false} />
          <a href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer mt-2">
             <LogOut className="h-5 w-5" />
             <span className="font-semibold text-sm">{t.nav.exit}</span>
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">

        {/* Topbar */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8 z-10 shadow-[0_4px_24px_rgba(0,0,0,0.02)]">
           <div className="flex items-center bg-[#F8FAFC] border border-slate-200 rounded-xl px-4 py-2 w-96">
              <Search className="h-5 w-5 text-slate-400" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                className="bg-transparent border-none outline-none ms-3 w-full text-sm font-medium text-slate-700 placeholder:text-slate-400"
              />
           </div>
           <div className="flex items-center gap-4">
              <button onClick={handleRestricted} className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                 <Bell className="h-6 w-6" />
                 <span className="absolute top-1.5 end-2 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="h-8 w-px bg-slate-200 mx-2"></div>
              <div className="flex items-center gap-3 cursor-pointer" onClick={handleRestricted}>
                 <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold border border-orange-200">
                   DU
                 </div>
                 <div className="hidden sm:block text-start">
                    <p className="text-sm font-bold text-slate-900 leading-none">Demo User</p>
                    <p className="text-xs text-slate-500 mt-1">{t.role}</p>
                 </div>
              </div>
           </div>
        </header>

        {/* View Content */}
        <div className="flex-1 overflow-auto p-8 relative">

           <AnimatePresence mode="wait">
             <motion.div
               key={activeView + lang}
               initial={{ opacity: 0, y: 10 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -10 }}
               transition={{ duration: 0.2 }}
               className="max-w-7xl mx-auto"
             >
                {/* DASHBOARD VIEW */}
                {activeView === "dashboard" && (
                  <div className="space-y-8">
                     <div className="flex items-center justify-between">
                        <div>
                           <h1 className="text-2xl font-black text-slate-900">{t.overviewTitle}</h1>
                           <p className="text-slate-500 mt-1 text-sm">{t.overviewDesc}</p>
                        </div>
                        <div className="flex gap-3">
                           <button onClick={handleRestricted} className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-50 shadow-sm transition-colors">
                              <Download className="h-4 w-4" />
                              {t.exportReport}
                           </button>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard title={t.statProperties} value="5" icon={<Building2 className="text-blue-500 h-6 w-6" />} bg="bg-blue-50" border="border-blue-100" />
                        <StatCard title={t.statContracts} value="2" icon={<FileText className="text-green-500 h-6 w-6" />} bg="bg-green-50" border="border-green-100" />
                        <StatCard title={t.statRevenue} value={t.revenueValue} icon={<BarChart3 className="text-orange-500 h-6 w-6" />} bg="bg-orange-50" border="border-orange-100" />
                        <StatCard title={t.statMaintenance} value="3" icon={<Wrench className="text-red-500 h-6 w-6" />} bg="bg-red-50" border="border-red-100" />
                     </div>

                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Quick Properties */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                           <div className="flex justify-between items-center mb-6">
                              <h3 className="font-bold text-lg text-slate-900">{t.latestProperties}</h3>
                              <button onClick={() => handleViewChange("properties")} className="text-sm font-semibold text-orange-500 hover:text-orange-600">{t.viewAll}</button>
                           </div>
                           <div className="space-y-4">
                              {PROPERTIES.slice(0, 3).map(p => (
                                 <div key={p.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div className="flex items-center gap-4">
                                       <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                                          <Building2 className="h-5 w-5" />
                                       </div>
                                       <div>
                                          <p className="font-bold text-slate-900">{isAr ? p.nameAr : p.nameEn}</p>
                                          <p className="text-xs text-slate-500">{isAr ? p.typeAr : p.typeEn} • {p.units} {t.unit}</p>
                                       </div>
                                    </div>
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor(p.status)}`}>{statusLabel(p.status)}</span>
                                 </div>
                              ))}
                           </div>
                        </div>

                        {/* Quick Maintenance */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                           <div className="flex justify-between items-center mb-6">
                              <h3 className="font-bold text-lg text-slate-900">{t.latestMaintenance}</h3>
                              <button onClick={() => handleViewChange("maintenance")} className="text-sm font-semibold text-orange-500 hover:text-orange-600">{t.viewAll}</button>
                           </div>
                           <div className="space-y-4">
                              {MAINTENANCE.slice(0, 3).map(m => (
                                 <div key={m.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div className="flex items-center gap-4">
                                       <div className="h-10 w-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                                          <Wrench className="h-5 w-5" />
                                       </div>
                                       <div>
                                          <p className="font-bold text-slate-900">{isAr ? m.issueAr : m.issueEn}</p>
                                          <p className="text-xs text-slate-500">{isAr ? m.propAr : m.propEn}</p>
                                       </div>
                                    </div>
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor(m.status)}`}>{statusLabel(m.status)}</span>
                                 </div>
                              ))}
                           </div>
                        </div>
                     </div>
                  </div>
                )}

                {/* PROPERTIES VIEW */}
                {activeView === "properties" && (
                  <ListView
                    title={t.views.properties.title}
                    desc={t.views.properties.desc}
                    items={PROPERTIES}
                    columns={t.views.properties.columns}
                    actionsLabel={t.actions}
                    addLabel={t.addNew}
                    onAdd={handleRestricted}
                    renderRow={(p: typeof PROPERTIES[0]) => (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                                 <Building2 className="h-5 w-5" />
                              </div>
                              <span className="font-bold text-slate-900">{isAr ? p.nameAr : p.nameEn}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{isAr ? p.typeAr : p.typeEn}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{p.units}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor(p.status)}`}>{statusLabel(p.status)}</span>
                        </td>
                      </>
                    )}
                  />
                )}

                {/* TENANTS VIEW */}
                {activeView === "tenants" && (
                  <ListView
                    title={t.views.tenants.title}
                    desc={t.views.tenants.desc}
                    items={TENANTS}
                    columns={t.views.tenants.columns}
                    actionsLabel={t.actions}
                    addLabel={t.addNew}
                    onAdd={handleRestricted}
                    renderRow={(tn: typeof TENANTS[0]) => (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg">
                                 {(isAr ? tn.nameAr : tn.nameEn).charAt(0)}
                              </div>
                              <span className="font-bold text-slate-900">{isAr ? tn.nameAr : tn.nameEn}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600" dir="ltr">{tn.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{isAr ? tn.propAr : tn.propEn}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor(tn.status)}`}>{statusLabel(tn.status)}</span>
                        </td>
                      </>
                    )}
                  />
                )}

                {/* CONTRACTS VIEW */}
                {activeView === "contracts" && (
                  <ListView
                    title={t.views.contracts.title}
                    desc={t.views.contracts.desc}
                    items={CONTRACTS}
                    columns={t.views.contracts.columns}
                    actionsLabel={t.actions}
                    addLabel={t.addNew}
                    onAdd={handleRestricted}
                    renderRow={(c: typeof CONTRACTS[0]) => (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center gap-3">
                              <FileText className="h-5 w-5 text-slate-400" />
                              <span className="font-bold text-slate-900">{isAr ? c.typeAr : c.typeEn}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{isAr ? c.tenantAr : c.tenantEn}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{isAr ? c.propAr : c.propEn}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{c.end}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor(c.status)}`}>{statusLabel(c.status)}</span>
                        </td>
                      </>
                    )}
                  />
                )}

                {/* MAINTENANCE VIEW */}
                {activeView === "maintenance" && (
                  <ListView
                    title={t.views.maintenance.title}
                    desc={t.views.maintenance.desc}
                    items={MAINTENANCE}
                    columns={t.views.maintenance.columns}
                    actionsLabel={t.actions}
                    addLabel={t.addNew}
                    onAdd={handleRestricted}
                    onAddOverride={handleAddMaintenanceDemo}
                    renderRow={(m: typeof MAINTENANCE[0]) => (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
                                 <Wrench className="h-5 w-5" />
                              </div>
                              <span className="font-bold text-slate-900">{isAr ? m.issueAr : m.issueEn}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{isAr ? m.propAr : m.propEn}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{m.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className={`text-xs font-bold px-3 py-1 rounded-full ${statusColor(m.status)}`}>{statusLabel(m.status)}</span>
                        </td>
                      </>
                    )}
                  />
                )}

                {/* REPORTS VIEW */}
                {activeView === "reports" && (
                  <div className="space-y-8">
                     <div className="flex items-center justify-between">
                        <div>
                           <h1 className="text-2xl font-black text-slate-900">{t.reportsTitle}</h1>
                           <p className="text-slate-500 mt-1 text-sm">{t.reportsDesc}</p>
                        </div>
                        <button onClick={handleRestricted} className="flex items-center gap-2 bg-[#FF7A00] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-[0_4px_10px_rgba(255,122,0,0.2)] transition-transform hover:-translate-y-0.5">
                           <Download className="h-4 w-4" />
                           {t.exportPdf}
                        </button>
                     </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col items-center justify-center h-64 text-center">
                           <BarChart3 className="h-16 w-16 text-slate-200 mb-4" />
                           <h3 className="font-bold text-lg text-slate-900 mb-1">{t.revenueReport}</h3>
                           <p className="text-sm text-slate-500 mb-4">{t.revenueReportDesc}</p>
                           <button onClick={handleRestricted} className="text-sm font-bold text-orange-500 hover:text-orange-600">{t.viewDetailed}</button>
                        </div>
                        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col items-center justify-center h-64 text-center">
                           <Building2 className="h-16 w-16 text-slate-200 mb-4" />
                           <h3 className="font-bold text-lg text-slate-900 mb-1">{t.occupancyReport}</h3>
                           <p className="text-sm text-slate-500 mb-4">{t.occupancyReportDesc}</p>
                           <button onClick={handleRestricted} className="text-sm font-bold text-orange-500 hover:text-orange-600">{t.viewDetailed}</button>
                        </div>
                     </div>
                  </div>
                )}
             </motion.div>
           </AnimatePresence>

        </div>
      </main>

      {/* RESTRICTION TOAST */}
      <AnimatePresence>
        {showRestriction && (
           <motion.div
             initial={{ opacity: 0, y: 50, scale: 0.9 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, y: 20, scale: 0.9 }}
             className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 z-50 min-w-[400px] border border-slate-800"
           >
              <div className="h-10 w-10 bg-red-500/20 rounded-full flex items-center justify-center shrink-0">
                 <AlertCircle className="h-5 w-5 text-red-500" />
              </div>
              <div>
                 <p className="font-bold text-sm">{t.restrictedTitle}</p>
                 <p className="text-xs text-slate-300 mt-0.5">{t.restrictedDesc}</p>
              </div>
           </motion.div>
        )}
      </AnimatePresence>

      {/* ADD SUCCESS TOAST */}
      <AnimatePresence>
        {showAddSuccess && (
           <motion.div
             initial={{ opacity: 0, y: 50, scale: 0.9 }}
             animate={{ opacity: 1, y: 0, scale: 1 }}
             exit={{ opacity: 0, y: 20, scale: 0.9 }}
             className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 z-50 min-w-[400px] border border-slate-800"
           >
              <div className="h-10 w-10 bg-emerald-500/20 rounded-full flex items-center justify-center shrink-0">
                 <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <div>
                 <p className="font-bold text-sm">{t.addSuccessTitle}</p>
                 <p className="text-xs text-slate-300 mt-0.5">{t.addSuccessDesc}</p>
              </div>
           </motion.div>
        )}
      </AnimatePresence>

      {/* WELCOME MODAL / TOUR */}
      <AnimatePresence>
        {showWelcome && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
           >
              <motion.div
                 initial={{ scale: 0.95, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 exit={{ scale: 0.95, opacity: 0 }}
                 className="bg-white rounded-[32px] p-8 max-w-lg w-full shadow-2xl border border-slate-100"
              >
                 <div className="h-16 w-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 border border-orange-200">
                    <LayoutDashboard className="h-8 w-8 text-orange-600" />
                 </div>
                 <h2 className="text-2xl font-black text-slate-900 mb-2">{t.welcomeTitle}</h2>
                 <p className="text-slate-600 leading-relaxed mb-6">{t.welcomeDesc}</p>

                 <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 text-sm">{t.tourTitle}</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                       {t.tour.map(([label, desc], i) => (
                          <li key={i} className="flex gap-2">
                             <span className="font-bold text-orange-600">{i + 1}.</span>
                             <span><strong>{label}</strong> {desc}</span>
                          </li>
                       ))}
                    </ul>
                 </div>

                 <div className="space-y-3 mb-8 bg-orange-50 p-4 rounded-2xl border border-orange-100">
                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                       <LayoutDashboard className="h-4 w-4 text-orange-600" />
                       {t.fullVersionTitle}
                    </h3>
                    <p className="text-sm text-slate-600">{t.fullVersionDesc}</p>
                    <div className="text-sm bg-white p-3 rounded-xl border border-orange-200 space-y-2">
                       <div className="flex justify-between items-center gap-4">
                          <span className="text-slate-500 font-medium whitespace-nowrap">{t.linkLabel}</span>
                          <a href="https://app.rafidsystem.com/c/demo/dashboard" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-bold font-sans truncate text-start" dir="ltr">
                             app.rafidsystem.com/c/demo/dashboard
                          </a>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-slate-500 font-medium">{t.userLabel}</span>
                          <span className="font-mono font-bold bg-slate-100 px-2 py-1 rounded text-slate-700" dir="ltr">demo</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-slate-500 font-medium">{t.passLabel}</span>
                          <span className="font-mono font-bold bg-slate-100 px-2 py-1 rounded text-slate-700" dir="ltr">demo123</span>
                       </div>
                    </div>
                 </div>

                 <button
                   onClick={() => setShowWelcome(false)}
                   className="w-full bg-[#FF7A00] text-white font-bold text-lg py-4 rounded-xl shadow-[0_10px_20px_rgba(255,122,0,0.2)] hover:bg-orange-600 transition-colors"
                 >
                   {t.startBtn}
                 </button>
              </motion.div>
           </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

function SidebarItem({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${active ? 'bg-orange-50 text-orange-600 font-bold' : 'text-slate-600 hover:bg-slate-50 font-semibold'}`}
    >
      <div className={`${active ? 'text-orange-500' : 'text-slate-400'}`}>
         {icon}
      </div>
      <span className="text-sm">{label}</span>
    </button>
  )
}

function StatCard({ title, value, icon, bg, border }: { title: string, value: string, icon: React.ReactNode, bg: string, border: string }) {
  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
       <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${bg} ${border} border mb-4`}>
          {icon}
       </div>
       <p className="text-slate-500 text-sm font-semibold mb-1">{title}</p>
       <p className="text-2xl font-black text-slate-900">{value}</p>
    </div>
  )
}

function ListView({ title, desc, items, columns, renderRow, onAdd, onAddOverride, actionsLabel, addLabel }: any) {
  return (
    <div className="space-y-8">
       <div className="flex items-center justify-between">
          <div>
             <h1 className="text-2xl font-black text-slate-900">{title}</h1>
             <p className="text-slate-500 mt-1 text-sm">{desc}</p>
          </div>
          <button onClick={onAddOverride || onAdd} className="flex items-center gap-2 bg-[#FF7A00] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-[0_4px_10px_rgba(255,122,0,0.2)] transition-transform hover:-translate-y-0.5">
             <Plus className="h-5 w-5" />
             {addLabel}
          </button>
       </div>

       <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
             <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-100">
                   <tr>
                      {columns.map((col: string, i: number) => (
                         <th key={i} className="px-6 py-4 text-start text-xs font-bold text-slate-500 uppercase tracking-wider">{col}</th>
                      ))}
                      <th className="px-6 py-4 text-end text-xs font-bold text-slate-500 uppercase tracking-wider">{actionsLabel}</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {items.map((item: any, i: number) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                         {renderRow(item)}
                         <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                            <div className="flex items-center justify-end gap-2">
                               <button onClick={onAdd} className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                  <Edit2 className="h-4 w-4" />
                               </button>
                               <button onClick={onAdd} className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                  <Trash2 className="h-4 w-4" />
                               </button>
                            </div>
                         </td>
                      </tr>
                   ))}
                </tbody>
             </table>
          </div>
       </div>
    </div>
  )
}
