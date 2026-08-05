'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function SiteHeader() {
  const { language, toggleLanguage } = useLanguage();
  const isAr = language === 'ar';

  const links = [
    { href: '/', label: isAr ? 'الرئيسية' : 'Home' },
    { href: '/about', label: isAr ? 'عن رافد' : 'About' },
    { href: '/blog', label: isAr ? 'المدونة' : 'Blog' },
    { href: '/team', label: isAr ? 'فريقنا' : 'Team' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="relative block h-10 w-10 shrink-0">
          <Image src="/images/logo.png" alt="Rafid" fill className="object-contain" />
        </Link>

        <nav className="flex items-center gap-4 text-sm font-bold text-slate-600 sm:gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition hover:text-[#FF7A00]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          onClick={toggleLanguage}
          className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
        >
          <Globe className="h-4 w-4" />
          {isAr ? 'EN' : 'AR'}
        </button>
      </div>
    </header>
  );
}
