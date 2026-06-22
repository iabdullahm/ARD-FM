'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Linkedin, Phone } from 'lucide-react';
import { teamMembers } from '@/lib/team-data';
import { useState } from 'react';

export default function TeamPage() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');

  const departments = ['All', ...new Set(teamMembers.map(m => m.department))];
  const filteredMembers = selectedDepartment === 'All'
    ? teamMembers
    : teamMembers.filter(m => m.department === selectedDepartment);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-[#0B1E3A] via-[#0F172A] to-black text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            فريقنا المتميز / Our Exceptional Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto"
          >
            نخبة من المحترفين بخبرات عميقة في إدارة التكنولوجيا والعقارات / Elite professionals with deep expertise in technology and property management
          </motion.p>
        </div>
      </section>

      {/* Department Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedDepartment === dept
                    ? 'bg-[#FF7A00] text-white shadow-lg'
                    : 'bg-white text-slate-700 border-2 border-gray-300 hover:border-[#FF7A00]'
                }`}
              >
                {dept === 'All' ? 'جميع الأقسام / All Departments' : dept}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <Image
                    src={member.image}
                    alt={member.nameEn}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                      {member.nameAr}
                    </h3>
                    <h4 className="text-sm font-semibold text-slate-600 mb-2">
                      {member.nameEn}
                    </h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-block px-3 py-1 bg-[#FF7A00]/10 text-[#FF7A00] text-xs font-semibold rounded-full">
                        {member.roleAr}
                      </span>
                      <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                        {member.roleEn}
                      </span>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                    {member.bioAr}
                  </p>
                  <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                    {member.bioEn}
                  </p>

                  {/* Experience */}
                  <div className="flex items-center gap-2 mb-4 text-sm text-slate-700">
                    <span className="font-semibold text-[#FF7A00]">
                      {member.yearsExperience}+
                    </span>
                    <span>سنوات خبرة / Years Experience</span>
                  </div>

                  {/* Contact Icons */}
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
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
                      >
                        <Phone className="h-5 w-5" />
                      </a>
                    )}
                    {member.social?.linkedin && (
                      <a
                        href={member.social.linkedin}
                        title="LinkedIn"
                        className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-all"
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
      <section className="py-16 bg-gradient-to-r from-[#FF7A00]/10 to-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            هل تريد الانضمام إلى فريقنا؟ / Want to Join Our Team?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            نحن نبحث عن مواهب مميزة لتطوير حلول إدارة العقارات / We're looking for talented individuals to develop property management solutions
          </p>
          <a
            href="mailto:careers@rafidsystem.com"
            className="inline-block px-8 py-3 bg-[#FF7A00] text-white font-bold rounded-lg hover:bg-orange-600 transition-all shadow-lg"
          >
            تواصل معنا / Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
