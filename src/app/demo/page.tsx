"use client"

import { useState, useEffect } from "react"
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
  MoreVertical,
  Edit2
} from "lucide-react"
import Image from "next/image"

type View = "dashboard" | "properties" | "tenants" | "contracts" | "maintenance" | "reports"

export default function DemoDashboard() {
  const [activeView, setActiveView] = useState<View>("dashboard")
  const [showWelcome, setShowWelcome] = useState(true)
  const [showRestriction, setShowRestriction] = useState(false)
  
  // Data
  const properties = [
    { id: 1, name: "فيلا الخوير", type: "سكني", units: 1, status: "مؤجر" },
    { id: 2, name: "شقة الموالح", type: "سكني", units: 1, status: "شاغر" },
    { id: 3, name: "بناية روي", type: "تجاري", units: 12, status: "مؤجر جزئياً" },
    { id: 4, name: "مكتب القرم", type: "تجاري", units: 1, status: "مؤجر" },
    { id: 5, name: "مخزن الرسيل", type: "صناعي", units: 1, status: "شاغر" },
  ]

  const tenants = [
    { id: 1, name: "أحمد البلوشي", phone: "+968 9123 4567", status: "نشط", prop: "فيلا الخوير" },
    { id: 2, name: "سالم الرواحي", phone: "+968 9234 5678", status: "نشط", prop: "شقة الموالح" },
    { id: 3, name: "فاطمة الهنائية", phone: "+968 9345 6789", status: "غير نشط", prop: "مكتب القرم" },
    { id: 4, name: "محمد الشحي", phone: "+968 9456 7890", status: "نشط", prop: "بناية روي" },
  ]

  const contracts = [
    { id: 1, type: "عقد نشط", tenant: "أحمد البلوشي", property: "فيلا الخوير", end: "2027-01-01", status: "نشط" },
    { id: 2, type: "عقد قريب الانتهاء", tenant: "سالم الرواحي", property: "شقة الموالح", end: "2026-06-15", status: "قريب الانتهاء" },
    { id: 3, type: "عقد منتهي", tenant: "فاطمة الهنائية", property: "مكتب القرم", end: "2026-01-10", status: "منتهي" },
    { id: 4, type: "عقد قيد التجديد", tenant: "محمد الشحي", property: "بناية روي", end: "2026-05-30", status: "قيد التجديد" },
  ]

  const maintenance = [
    { id: 1, issue: "تكييف لا يعمل", property: "فيلا الخوير", date: "2026-05-01", status: "مفتوح" },
    { id: 2, issue: "تسريب مياه", property: "شقة الموالح", date: "2026-05-02", status: "قيد التنفيذ" },
    { id: 3, issue: "مشكلة كهرباء", property: "بناية روي", date: "2026-05-03", status: "بانتظار قطع غيار" },
    { id: 4, issue: "صيانة باب رئيسي", property: "مكتب القرم", date: "2026-04-25", status: "مغلق" },
  ]

  const handleRestricted = () => {
    setShowRestriction(true)
    setTimeout(() => setShowRestriction(false), 4000)
  }

  const handleViewChange = (view: View) => {
    setActiveView(view)
  }

  return (
    <div className="flex h-screen bg-[#F8FAFC] font-arabic selection:bg-orange-500/20" dir="rtl">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-l border-slate-200 flex flex-col justify-between hidden md:flex z-10 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
        <div>
          <div className="h-20 flex items-center px-8 border-b border-slate-100">
             <div className="relative h-8 w-24">
                <Image src="/images/logo.png" alt="Rafid Logo" fill className="object-contain" />
             </div>
             <span className="mr-2 text-[10px] font-bold bg-orange-100 text-orange-600 px-2 py-1 rounded-full uppercase tracking-wider">Demo</span>
          </div>
          <nav className="p-4 space-y-2">
            <SidebarItem icon={<LayoutDashboard />} label="لوحة التحكم" active={activeView === "dashboard"} onClick={() => handleViewChange("dashboard")} />
            <SidebarItem icon={<Building2 />} label="العقارات" active={activeView === "properties"} onClick={() => handleViewChange("properties")} />
            <SidebarItem icon={<Users />} label="المستأجرين" active={activeView === "tenants"} onClick={() => handleViewChange("tenants")} />
            <SidebarItem icon={<FileText />} label="العقود" active={activeView === "contracts"} onClick={() => handleViewChange("contracts")} />
            <SidebarItem icon={<Wrench />} label="الصيانة" active={activeView === "maintenance"} onClick={() => handleViewChange("maintenance")} />
            <SidebarItem icon={<BarChart3 />} label="التقارير" active={activeView === "reports"} onClick={() => handleViewChange("reports")} />
          </nav>
        </div>
        <div className="p-4 border-t border-slate-100">
          <SidebarItem icon={<Settings />} label="الإعدادات" onClick={handleRestricted} active={false} />
          <a href="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors cursor-pointer mt-2">
             <LogOut className="h-5 w-5" />
             <span className="font-semibold text-sm">خروج من الديمو</span>
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
                placeholder="ابحث عن عقار، مستأجر، أو عقد..." 
                className="bg-transparent border-none outline-none mr-3 w-full text-sm font-medium text-slate-700 placeholder:text-slate-400"
              />
           </div>
           <div className="flex items-center gap-4">
              <button onClick={handleRestricted} className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-colors">
                 <Bell className="h-6 w-6" />
                 <span className="absolute top-1.5 right-2 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="h-8 w-px bg-slate-200 mx-2"></div>
              <div className="flex items-center gap-3 cursor-pointer" onClick={handleRestricted}>
                 <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold border border-orange-200">
                   DU
                 </div>
                 <div className="hidden sm:block text-right">
                    <p className="text-sm font-bold text-slate-900 leading-none">Demo User</p>
                    <p className="text-xs text-slate-500 mt-1">مدير النظام</p>
                 </div>
              </div>
           </div>
        </header>

        {/* View Content */}
        <div className="flex-1 overflow-auto p-8 relative">
           
           <AnimatePresence mode="wait">
             <motion.div
               key={activeView}
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
                           <h1 className="text-2xl font-black text-slate-900">نظرة عامة</h1>
                           <p className="text-slate-500 mt-1 text-sm">ملخص سريع لأداء المحفظة العقارية</p>
                        </div>
                        <div className="flex gap-3">
                           <button onClick={handleRestricted} className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-50 shadow-sm transition-colors">
                              <Download className="h-4 w-4" />
                              تصدير التقرير
                           </button>
                        </div>
                     </div>

                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard title="إجمالي العقارات" value="5" icon={<Building2 className="text-blue-500 h-6 w-6" />} bg="bg-blue-50" border="border-blue-100" />
                        <StatCard title="العقود النشطة" value="2" icon={<FileText className="text-green-500 h-6 w-6" />} bg="bg-green-50" border="border-green-100" />
                        <StatCard title="الإيرادات المتوقعة" value="12,500 ر.ع" icon={<BarChart3 className="text-orange-500 h-6 w-6" />} bg="bg-orange-50" border="border-orange-100" />
                        <StatCard title="طلبات صيانة مفتوحة" value="3" icon={<Wrench className="text-red-500 h-6 w-6" />} bg="bg-red-50" border="border-red-100" />
                     </div>

                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Quick Properties */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                           <div className="flex justify-between items-center mb-6">
                              <h3 className="font-bold text-lg text-slate-900">أحدث العقارات</h3>
                              <button onClick={() => handleViewChange("properties")} className="text-sm font-semibold text-orange-500 hover:text-orange-600">عرض الكل</button>
                           </div>
                           <div className="space-y-4">
                              {properties.slice(0, 3).map(p => (
                                 <div key={p.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div className="flex items-center gap-4">
                                       <div className="h-10 w-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                                          <Building2 className="h-5 w-5" />
                                       </div>
                                       <div>
                                          <p className="font-bold text-slate-900">{p.name}</p>
                                          <p className="text-xs text-slate-500">{p.type} • {p.units} وحدة</p>
                                       </div>
                                    </div>
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.status === 'مؤجر' ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-700'}`}>{p.status}</span>
                                 </div>
                              ))}
                           </div>
                        </div>

                        {/* Quick Maintenance */}
                        <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
                           <div className="flex justify-between items-center mb-6">
                              <h3 className="font-bold text-lg text-slate-900">طلبات الصيانة الأخيرة</h3>
                              <button onClick={() => handleViewChange("maintenance")} className="text-sm font-semibold text-orange-500 hover:text-orange-600">عرض الكل</button>
                           </div>
                           <div className="space-y-4">
                              {maintenance.slice(0, 3).map(m => (
                                 <div key={m.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                                    <div className="flex items-center gap-4">
                                       <div className="h-10 w-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600">
                                          <Wrench className="h-5 w-5" />
                                       </div>
                                       <div>
                                          <p className="font-bold text-slate-900">{m.issue}</p>
                                          <p className="text-xs text-slate-500">{m.property}</p>
                                       </div>
                                    </div>
                                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${m.status === 'مفتوح' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{m.status}</span>
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
                    title="العقارات"
                    desc="إدارة العقارات والوحدات السكنية والتجارية"
                    items={properties}
                    columns={["الاسم", "النوع", "الوحدات", "الحالة"]}
                    onAdd={handleRestricted}
                    onAction={handleRestricted}
                    renderRow={(p: typeof properties[0]) => (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600">
                                 <Building2 className="h-5 w-5" />
                              </div>
                              <span className="font-bold text-slate-900">{p.name}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{p.type}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{p.units}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className={`text-xs font-bold px-3 py-1 rounded-full ${p.status === 'مؤجر' ? 'bg-green-100 text-green-700' : p.status === 'شاغر' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{p.status}</span>
                        </td>
                      </>
                    )}
                  />
                )}

                {/* TENANTS VIEW */}
                {activeView === "tenants" && (
                  <ListView 
                    title="المستأجرين"
                    desc="إدارة بيانات المستأجرين وحالتهم"
                    items={tenants}
                    columns={["الاسم", "الهاتف", "العقار المرتبط", "الحالة"]}
                    onAdd={handleRestricted}
                    onAction={handleRestricted}
                    renderRow={(t: typeof tenants[0]) => (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg">
                                 {t.name.charAt(0)}
                              </div>
                              <span className="font-bold text-slate-900">{t.name}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600" dir="ltr">{t.phone}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{t.prop}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className={`text-xs font-bold px-3 py-1 rounded-full ${t.status === 'نشط' ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-700'}`}>{t.status}</span>
                        </td>
                      </>
                    )}
                  />
                )}

                {/* CONTRACTS VIEW */}
                {activeView === "contracts" && (
                  <ListView 
                    title="العقود"
                    desc="متابعة العقود النشطة، المنتهية والمجددة"
                    items={contracts}
                    columns={["نوع العقد", "المستأجر", "العقار", "تاريخ الانتهاء", "الحالة"]}
                    onAdd={handleRestricted}
                    onAction={handleRestricted}
                    renderRow={(c: typeof contracts[0]) => (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center gap-3">
                              <FileText className="h-5 w-5 text-slate-400" />
                              <span className="font-bold text-slate-900">{c.type}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{c.tenant}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{c.property}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{c.end}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className={`text-xs font-bold px-3 py-1 rounded-full ${c.status === 'نشط' ? 'bg-green-100 text-green-700' : c.status === 'منتهي' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{c.status}</span>
                        </td>
                      </>
                    )}
                  />
                )}

                {/* MAINTENANCE VIEW */}
                {activeView === "maintenance" && (
                  <ListView 
                    title="طلبات الصيانة"
                    desc="متابعة طلبات الصيانة وتعيين الفنيين"
                    items={maintenance}
                    columns={["المشكلة", "العقار", "التاريخ", "الحالة"]}
                    onAdd={handleRestricted} // But user said "إنشاء طلب صيانة تجريبي" is allowed? Let's just make it restricted for simplicity unless we want to mock a form. The prompt says "مسموح إنشاء طلب صيانة تجريبي". I'll mock a "Added" toast for simplicity.
                    onAddOverride={() => {
                       alert("تم رفع طلب صيانة تجريبي بنجاح!");
                    }}
                    renderRow={(m: typeof maintenance[0]) => (
                      <>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <div className="flex items-center gap-3">
                              <div className="h-10 w-10 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-red-600">
                                 <Wrench className="h-5 w-5" />
                              </div>
                              <span className="font-bold text-slate-900">{m.issue}</span>
                           </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{m.property}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600">{m.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                           <span className={`text-xs font-bold px-3 py-1 rounded-full ${m.status === 'مفتوح' ? 'bg-red-100 text-red-700' : m.status === 'مغلق' ? 'bg-slate-200 text-slate-700' : 'bg-yellow-100 text-yellow-700'}`}>{m.status}</span>
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
                           <h1 className="text-2xl font-black text-slate-900">التقارير التحليلية</h1>
                           <p className="text-slate-500 mt-1 text-sm">بيانات تجريبية للمحفظة</p>
                        </div>
                        <button onClick={handleRestricted} className="flex items-center gap-2 bg-[#FF7A00] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-[0_4px_10px_rgba(255,122,0,0.2)] transition-transform hover:-translate-y-0.5">
                           <Download className="h-4 w-4" />
                           تصدير PDF
                        </button>
                     </div>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col items-center justify-center h-64 text-center">
                           <BarChart3 className="h-16 w-16 text-slate-200 mb-4" />
                           <h3 className="font-bold text-lg text-slate-900 mb-1">تقرير الإيرادات الشهري</h3>
                           <p className="text-sm text-slate-500 mb-4">يعرض رسوماً بيانية للمدفوعات</p>
                           <button onClick={handleRestricted} className="text-sm font-bold text-orange-500 hover:text-orange-600">عرض التقرير المفصل &larr;</button>
                        </div>
                        <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm flex flex-col items-center justify-center h-64 text-center">
                           <Building2 className="h-16 w-16 text-slate-200 mb-4" />
                           <h3 className="font-bold text-lg text-slate-900 mb-1">تقرير إشغال العقارات</h3>
                           <p className="text-sm text-slate-500 mb-4">يعرض نسب الإشغال والشواغر</p>
                           <button onClick={handleRestricted} className="text-sm font-bold text-orange-500 hover:text-orange-600">عرض التقرير المفصل &larr;</button>
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
                 <p className="font-bold text-sm">هذه الخاصية غير متاحة في نسخة الديمو.</p>
                 <p className="text-xs text-slate-300 mt-0.5">للحصول على صلاحيات كاملة، يرجى طلب حساب رسمي.</p>
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
                 <h2 className="text-2xl font-black text-slate-900 mb-2">مرحباً بك في النسخة التجريبية من Rafid Facility System</h2>
                 <p className="text-slate-600 leading-relaxed mb-6">
                    هذه البيئة مخصصة للتجربة فقط. البيانات المعروضة تجريبية وليست حقيقية. 
                    بعض الخصائص مثل الحذف، التصدير، وإعدادات النظام غير مفعّلة في نسخة الديمو لضمان أمان البيئة.
                 </p>
                 
                 <div className="space-y-3 mb-6 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                    <h3 className="font-bold text-slate-900 text-sm">الجولة الإرشادية السريعة:</h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                       <li className="flex gap-2"><span>1️⃣</span> <strong>لوحة التحكم:</strong> ملخص سريع لعملياتك.</li>
                       <li className="flex gap-2"><span>2️⃣</span> <strong>العقارات والمستأجرين:</strong> تصفح البيانات بسهولة.</li>
                       <li className="flex gap-2"><span>3️⃣</span> <strong>العقود والصيانة:</strong> تابع الحالات النشطة.</li>
                    </ul>
                 </div>

                 <div className="space-y-3 mb-8 bg-orange-50 p-4 rounded-2xl border border-orange-100">
                    <h3 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                       <LayoutDashboard className="h-4 w-4 text-orange-600" />
                       النسخة التفاعلية الكاملة
                    </h3>
                    <p className="text-sm text-slate-600">
                       لتجربة النظام بصلاحيات كاملة، يمكنك زيارة الديمو الحي:
                    </p>
                    <div className="text-sm bg-white p-3 rounded-xl border border-orange-200 space-y-2">
                       <div className="flex justify-between items-center gap-4">
                          <span className="text-slate-500 font-medium whitespace-nowrap">الرابط:</span>
                          <a href="https://app.rafidsystem.com/c/demo/dashboard" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-bold font-sans truncate text-left" dir="ltr">
                             app.rafidsystem.com/c/demo/dashboard
                          </a>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-slate-500 font-medium">اسم المستخدم:</span>
                          <span className="font-mono font-bold bg-slate-100 px-2 py-1 rounded text-slate-700" dir="ltr">demo</span>
                       </div>
                       <div className="flex justify-between items-center">
                          <span className="text-slate-500 font-medium">كلمة المرور:</span>
                          <span className="font-mono font-bold bg-slate-100 px-2 py-1 rounded text-slate-700" dir="ltr">demo123</span>
                       </div>
                    </div>
                 </div>

                 <button
                   onClick={() => setShowWelcome(false)}
                   className="w-full bg-[#FF7A00] text-white font-bold text-lg py-4 rounded-xl shadow-[0_10px_20px_rgba(255,122,0,0.2)] hover:bg-orange-600 transition-colors"
                 >
                   ابدأ استكشاف النظام
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

function ListView({ title, desc, items, columns, renderRow, onAdd, onAddOverride }: any) {
  return (
    <div className="space-y-8">
       <div className="flex items-center justify-between">
          <div>
             <h1 className="text-2xl font-black text-slate-900">{title}</h1>
             <p className="text-slate-500 mt-1 text-sm">{desc}</p>
          </div>
          <button onClick={onAddOverride || onAdd} className="flex items-center gap-2 bg-[#FF7A00] text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-[0_4px_10px_rgba(255,122,0,0.2)] transition-transform hover:-translate-y-0.5">
             <Plus className="h-5 w-5" />
             إضافة جديد
          </button>
       </div>

       <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
             <table className="w-full">
                <thead className="bg-slate-50 border-b border-slate-100">
                   <tr>
                      {columns.map((col: string, i: number) => (
                         <th key={i} className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">{col}</th>
                      ))}
                      <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">الإجراءات</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {items.map((item: any, i: number) => (
                      <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                         {renderRow(item)}
                         <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium">
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
