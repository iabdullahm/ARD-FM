"use client"

import Image from "next/image"
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function RichFooter({ lang = "ar" }: { lang?: "ar" | "en" }) {
  const isRtl = lang === "ar"
  const year = new Date().getFullYear()

  const t = {
    tagline: isRtl
      ? "نظام رافد لإدارة المرافق والعقارات بكفاءة. منصة سحابية موحّدة لتشغيل المنشآت والأصول والعمليات اليومية."
      : "Rafid Facility Management System. A unified cloud platform for operating facilities, assets and daily operations.",
    product: isRtl ? "المنتج" : "Product",
    company: isRtl ? "الشركة" : "Company",
    legal: isRtl ? "القانونية" : "Legal",
    contact: isRtl ? "التواصل" : "Contact",
    productLinks: [
      { label: isRtl ? "الخصائص" : "Features", href: "#features" },
      { label: isRtl ? "كيف يعمل" : "How it works", href: "#how" },
      { label: isRtl ? "الأسعار" : "Pricing", href: "#pricing" },
      { label: isRtl ? "تجربة Demo" : "Try Demo", href: "https://app.rafidsystem.com/c/demo/dashboard" },
      { label: isRtl ? "الأسئلة الشائعة" : "FAQ", href: "#faq" },
    ],
    companyLinks: [
      { label: isRtl ? "من نحن" : "About", href: "#about" },
      { label: isRtl ? "اتصل بنا" : "Contact", href: "#contact" },
      { label: isRtl ? "المدوّنة" : "Blog", href: "#blog" },
      { label: isRtl ? "الوظائف" : "Careers", href: "#careers" },
    ],
    legalLinks: [
      { label: isRtl ? "سياسة الخصوصية" : "Privacy Policy", href: "/privacy" },
      { label: isRtl ? "شروط الاستخدام" : "Terms of Service", href: "/terms" },
    ],
    company_legal: isRtl
      ? "Creative Techno LLC · س.ت 1234567 · سلطنة عُمان"
      : "Creative Techno LLC · CR 1234567 · Sultanate of Oman",
    rights: isRtl
      ? `© ${year} رافد. جميع الحقوق محفوظة.`
      : `© ${year} Rafid. All rights reserved.`,
    madeIn: isRtl ? "صُنع بفخر في سلطنة عُمان" : "Proudly made in Sultanate of Oman",
  }

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.2fr]">
          {/* Brand column */}
          <div>
            <div className="relative h-14 w-14 mb-5">
              <Image
                src="/images/logo.png"
                alt="Rafid"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.tagline}
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                aria-label="LinkedIn"
                href="https://linkedin.com/company/rafidsystem"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition hover:border-[#FF7A00] hover:text-[#FF7A00]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                aria-label="Twitter / X"
                href="https://twitter.com/rafidsystem"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition hover:border-[#FF7A00] hover:text-[#FF7A00]"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                aria-label="Instagram"
                href="https://instagram.com/rafidsystem"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 text-slate-400 transition hover:border-[#FF7A00] hover:text-[#FF7A00]"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              {t.product}
            </h4>
            <ul className="space-y-3">
              {t.productLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#FF7A00] transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              {t.company}
            </h4>
            <ul className="space-y-3">
              {t.companyLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#FF7A00] transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              {t.legal}
            </h4>
            <ul className="space-y-3">
              {t.legalLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-[#FF7A00] transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5">
              {t.contact}
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 shrink-0 text-[#FF7A00]" />
                <a
                  href="mailto:sales@rafidsystem.com"
                  className="text-slate-400 hover:text-[#FF7A00] transition"
                  dir="ltr"
                >
                  sales@rafidsystem.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 shrink-0 text-[#FF7A00]" />
                <a
                  href="tel:+96824000000"
                  className="text-slate-400 hover:text-[#FF7A00] transition"
                  dir="ltr"
                >
                  +968 2400 0000
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-[#FF7A00]" />
                <span className="text-slate-400">
                  {isRtl ? "مسقط، سلطنة عُمان" : "Muscat, Oman"}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">{t.company_legal}</p>
          <p className="text-xs text-slate-500">{t.rights}</p>
          <p className="text-xs text-slate-500">🇴🇲 {t.madeIn}</p>
        </div>
      </div>
    </footer>
  )
}
