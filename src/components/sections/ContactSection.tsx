"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

export function ContactSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isRtl = lang === "ar"
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    units: "",
    message: "",
  })

  const t = {
    eyebrow: isRtl ? "تواصل معنا" : "Contact Us",
    title: isRtl ? "احجز عرضاً تجريبياً مخصصاً" : "Book a Tailored Demo",
    subtitle: isRtl
      ? "أرسل بياناتك وسيتواصل معك مستشار رافد خلال 24 ساعة لعرض النظام على بياناتك الفعلية."
      : "Send your details and a Rafid consultant will contact you within 24 hours to demo the system on your actual data.",
    name: isRtl ? "الاسم الكامل" : "Full Name",
    company: isRtl ? "اسم الشركة" : "Company Name",
    email: isRtl ? "البريد الإلكتروني" : "Email",
    phone: isRtl ? "رقم الهاتف" : "Phone",
    units: isRtl ? "عدد الوحدات تقريباً" : "Approx. Number of Units",
    message: isRtl ? "ملاحظات (اختياري)" : "Notes (optional)",
    submit: isRtl ? "أرسل الطلب" : "Send Request",
    sending: isRtl ? "جارٍ الإرسال..." : "Sending...",
    success: isRtl
      ? "تم استلام طلبك! سنتواصل معك قريباً."
      : "Request received! We'll be in touch soon.",
    contactInfo: isRtl ? "معلومات التواصل" : "Contact Information",
    workingHours: isRtl ? "ساعات العمل" : "Working Hours",
    hours: isRtl
      ? "الأحد - الخميس: 8 ص - 5 م (توقيت مسقط)"
      : "Sunday - Thursday: 8 AM - 5 PM (Muscat time)",
    location: isRtl ? "مسقط، سلطنة عُمان" : "Muscat, Sultanate of Oman",
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would POST to an API endpoint or CRM webhook
    setSubmitted(true)
    // Simulate network request
    setTimeout(() => {
      // Reset state after some time if needed
    }, 100)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold uppercase tracking-widest text-[#FF7A00]">
            {t.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{t.subtitle}</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          {/* Info column */}
          <div className="rounded-3xl bg-slate-900 p-10 text-white">
            <h3 className="text-xl font-bold mb-8">{t.contactInfo}</h3>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF7A00]/20 text-[#FF7A00]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {t.email}
                  </p>
                  <a
                    href="mailto:sales@rafidsystem.com"
                    className="mt-1 block text-base font-bold text-white hover:text-[#FF7A00] transition"
                    dir="ltr"
                  >
                    sales@rafidsystem.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF7A00]/20 text-[#FF7A00]">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {t.phone}
                  </p>
                  <a
                    href="tel:+96824000000"
                    className="mt-1 block text-base font-bold text-white hover:text-[#FF7A00] transition"
                    dir="ltr"
                  >
                    +968 2400 0000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FF7A00]/20 text-[#FF7A00]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {isRtl ? "المقر" : "Headquarters"}
                  </p>
                  <p className="mt-1 text-base font-bold">{t.location}</p>
                </div>
              </li>
            </ul>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                {t.workingHours}
              </p>
              <p className="mt-2 text-sm text-slate-300">{t.hours}</p>
            </div>
          </div>

          {/* Form column */}
          <div className="rounded-3xl border border-slate-200 bg-[#F8FAFC] p-10">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full py-12 text-center"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-6">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2">
                  {t.success}
                </h3>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {t.name} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:border-[#FF7A00] focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {t.company} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:border-[#FF7A00] focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {t.email} *
                    </label>
                    <input
                      type="email"
                      required
                      dir="ltr"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:border-[#FF7A00] focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {t.phone}
                    </label>
                    <input
                      type="tel"
                      dir="ltr"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:border-[#FF7A00] focus:ring-2 focus:ring-orange-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {t.units}
                  </label>
                  <select
                    value={formData.units}
                    onChange={(e) =>
                      setFormData({ ...formData, units: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:border-[#FF7A00] focus:ring-2 focus:ring-orange-100"
                  >
                    <option value="">—</option>
                    <option value="1-50">1 - 50</option>
                    <option value="51-200">51 - 200</option>
                    <option value="201-500">201 - 500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {t.message}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:border-[#FF7A00] focus:ring-2 focus:ring-orange-100 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF7A00] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_20px_rgba(255,122,0,0.2)] transition hover:bg-orange-600 hover:-translate-y-0.5"
                >
                  <Send className="h-4 w-4" />
                  {t.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
