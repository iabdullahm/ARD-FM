'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { teamMembers } from '@/lib/team-data';
import { useLanguage } from '@/contexts/LanguageContext';
import { SiteHeader } from '@/components/layout/SiteHeader';

const STRINGS = {
  ar: {
    title: 'فريقنا',
    subtitle: 'تعرّف على من يقف خلف رافد',
    yearsExperience: 'سنوات خبرة',
    joinTitle: 'هل تريد الانضمام إلى فريقنا؟',
    joinSubtitle: 'نبحث عن مواهب مميزة لتطوير حلول إدارة العقارات والمرافق',
    joinCta: 'تواصل معنا',
  },
  en: {
    title: 'Our Team',
    subtitle: 'Meet the people behind Rafid',
    yearsExperience: 'Years of Experience',
    joinTitle: 'Want to Join Our Team?',
    joinSubtitle: "We're looking for talented people to build property and facility management solutions",
    joinCta: 'Contact Us',
  },
};

export default function TeamPage() {
  const { language: lang } = useLanguage();
  const isAr = lang === 'ar';
  const t = STRINGS[lang];

  return (
    <div dir={isAr ? 'rtl' : 'ltr'} className="min-h-screen bg-white">
      <SiteHeader />

      {/* Hero */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-[#0B1E3A] via-[#0F172A] to-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            {t.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            {t.subtitle}
          </motion.p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <Image
                    src={member.image}
                    alt={isAr ? member.nameAr : member.nameEn}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {isAr ? member.nameAr : member.nameEn}
                    </h3>
                    <h4 className="text-sm font-semibold text-slate-500 mb-2">
                      {isAr ? member.nameEn : member.nameAr}
                    </h4>
                    <span className="inline-block px-3 py-1 bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-semibold rounded-full">
                      {isAr ? member.roleAr : member.roleEn}
                    </span>
                  </div>

                  <p className="text-sm text-slate-600 mb-4">
                    {isAr ? member.bioAr : member.bioEn}
                  </p>

                  <div className="flex items-center gap-2 mb-4 text-sm text-slate-700">
                    <span className="font-semibold text-[#FF7A00]">
                      {member.yearsExperience}+
                    </span>
                    <span>{t.yearsExperience}</span>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <a
                      href={`mailto:${member.email}`}
                      title={member.email}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#FF7A00]/10 text-[#FF7A00] hover:bg-[#FF7A00] hover:text-white transition-all"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    {member.phone && (
                      <a
                        href={`tel:${member.phone}`}
                        title={member.phone}
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-700 hover:text-white transition-all"
                      >
                        <Phone className="h-5 w-5" />
                      </a>
                    )}
                    {member.social?.linkedin && (
                      <a
                        href={member.social.linkedin}
                        title="LinkedIn"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-700 hover:text-white transition-all"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-[#FF7A00]/10 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.joinTitle}</h2>
          <p className="text-lg text-slate-600 mb-8">{t.joinSubtitle}</p>
          <a
            href="mailto:abdullah.j@creativetechno.net"
            className="inline-block px-8 py-3 bg-[#FF7A00] text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg"
          >
            {t.joinCta}
          </a>
        </div>
      </section>
    </div>
  );
}
