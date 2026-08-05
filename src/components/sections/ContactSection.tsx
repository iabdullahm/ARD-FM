"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from "lucide-react"

type FormErrors = {
  name?: string
  company?: string
  email?: string
  phone?: string
}

const initialFormData = {
  name: "",
  company: "",
  email: "",
  phone: "",
  units: "",
  message: "",
  honeypot: "",
}

const FORM_ENDPOINT = "https://formspree.io/f/mzbnblrj"

export function ContactSection({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isRtl = lang === "ar"
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState("")
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState<FormErrors>({})

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
      ? "تم استلام طلبك! سنتواصل معك خلال 24 ساعة."
      : "Request received! We'll contact you within 24 hours.",
    contactInfo: isRtl ? "معلومات التواصل" : "Contact Information",
    workingHours: isRtl ? "ساعات العمل" : "Working Hours",
    hours: isRtl
      ? "الأحد - الخميس: 8 ص - 5 م (توقيت مسقط)"
      : "Sunday - Thursday: 8 AM - 5 PM (Muscat time)",
    location: isRtl ? "مسقط، سلطنة عُمان" : "Muscat, Sultanate of Oman",
    nameRequired: isRtl ? "الاسم مطلوب" : "Name is required",
    nameMinLength: isRtl ? "الاسم يجب أن يكون 2 حرف على الأقل" : "Name must be at least 2 characters",
    companyRequired: isRtl ? "اسم الشركة مطلوب" : "Company name is required",
    emailRequired: isRtl ? "البريد الإلكتروني مطلوب" : "Email is required",
    emailInvalid: isRtl ? "البريد الإلكتروني غير صحيح" : "Email is invalid",
    phoneInvalid: isRtl ? "رقم الهاتف غير صحيح" : "Phone number is invalid",
    submitFailed: isRtl
      ? "حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة عبر البريد الإلكتروني."
      : "Something went wrong while sending. Please try again or contact us directly by email.",
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string) => {
    if (!phone) return true
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/
    return phoneRegex.test(phone)
  }

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = t.nameRequired
    } else if (formData.name.trim().length < 2) {
      newErrors.name = t.nameMinLength
    }

    if (!formData.company.trim()) {
      newErrors.company = t.companyRequired
    }

    if (!formData.email.trim()) {
      newErrors.email = t.emailRequired
    } else if (!validateEmail(formData.email)) {
      newErrors.email = t.emailInvalid
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = t.phoneInvalid
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (formData.honeypot) {
      console.log("Honeypot triggered, ignoring submission")
      return
    }

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setSubmitError("")

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          phone: formData.phone,
          units: formData.units,
          message: formData.message,
          language: isRtl ? "Arabic" : "English",
          source: "Contact Section - Book a Demo",
        }),
      })

      if (!response.ok) {
        throw new Error(`Form submission failed with status ${response.status}`)
      }

      setSubmitted(true)
      setFormData(initialFormData)
      setErrors({})

      setTimeout(() => {
        setSubmitted(false)
      }, 8000)
    } catch (error) {
      console.error("Form submission error:", error)
      setSubmitError(t.submitFailed)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
    if (submitError) {
      setSubmitError("")
    }
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined,
      }))
    }
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
                    href="mailto:abdullah.j@creativetechno.net"
                    className="mt-1 block text-base font-bold text-white hover:text-[#FF7A00] transition"
                    dir="ltr"
                  >
                    abdullah.j@creativetechno.net
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
                    href="tel:+96892975614"
                    className="mt-1 block text-base font-bold text-white hover:text-[#FF7A00] transition"
                    dir="ltr"
                  >
                    +968 9297 5614
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
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {t.name} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full rounded-xl border ${
                        errors.name ? 'border-red-400' : 'border-slate-200'
                      } bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:border-[#FF7A00] focus:ring-2 ${
                        errors.name ? 'focus:ring-red-100' : 'focus:ring-orange-100'
                      }`}
                    />
                    {errors.name && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-red-600">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-xs font-medium">{errors.name}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {t.company} *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full rounded-xl border ${
                        errors.company ? 'border-red-400' : 'border-slate-200'
                      } bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:border-[#FF7A00] focus:ring-2 ${
                        errors.company ? 'focus:ring-red-100' : 'focus:ring-orange-100'
                      }`}
                    />
                    {errors.company && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-red-600">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-xs font-medium">{errors.company}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {t.email} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      dir="ltr"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full rounded-xl border ${
                        errors.email ? 'border-red-400' : 'border-slate-200'
                      } bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:border-[#FF7A00] focus:ring-2 ${
                        errors.email ? 'focus:ring-red-100' : 'focus:ring-orange-100'
                      }`}
                    />
                    {errors.email && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-red-600">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-xs font-medium">{errors.email}</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">
                      {t.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      dir="ltr"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full rounded-xl border ${
                        errors.phone ? 'border-red-400' : 'border-slate-200'
                      } bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:border-[#FF7A00] focus:ring-2 ${
                        errors.phone ? 'focus:ring-red-100' : 'focus:ring-orange-100'
                      }`}
                    />
                    {errors.phone && (
                      <div className="mt-1.5 flex items-center gap-1.5 text-red-600">
                        <AlertCircle className="h-4 w-4" />
                        <span className="text-xs font-medium">{errors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    {t.units}
                  </label>
                  <select
                    name="units"
                    value={formData.units}
                    onChange={handleChange}
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
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-900 outline-none focus:border-[#FF7A00] focus:ring-2 focus:ring-orange-100 resize-none"
                  />
                </div>

                {submitError && (
                  <div
                    role="alert"
                    className="flex items-start gap-2.5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-red-700"
                  >
                    <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{submitError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF7A00] px-8 py-4 text-sm font-bold text-white shadow-[0_10px_20px_rgba(255,122,0,0.2)] transition hover:bg-orange-600 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#FF7A00]"
                >
                  <Send className="h-4 w-4" />
                  {isLoading ? t.sending : t.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
