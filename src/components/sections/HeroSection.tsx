'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft, PlayCircle } from 'lucide-react';

function DashboardCard({ title, value, unit }: { title: string; value: string; unit?: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-md"
    >
      <p className="text-muted-foreground text-sm">{title}</p>
      <p className="text-xl font-bold mt-1 text-foreground">
        {value}
        {unit && <span className="text-sm text-muted-foreground ml-1">{unit}</span>}
      </p>
    </motion.div>
  );
}

export function HeroSection() {
  const { language, dir } = useLanguage();
  const c = content[language].hero;

  const dashboardCards = [
    { title: c.cards.contracts, value: '128' },
    { title: c.cards.revenue, value: '45,200', unit: language === 'ar' ? 'ريال' : 'SAR' },
    { title: c.cards.maintenance, value: '12' },
    { title: c.cards.alerts, value: '6' },
  ];

  return (
    <section dir={dir} className="relative min-h-screen bg-background text-foreground flex items-center overflow-hidden">
      
      {/* Gradient & Glow Backgrounds */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3A] via-[#0F172A] to-black opacity-90" />
      <div className="absolute -inset-10 bg-primary/10 blur-3xl rounded-full lg:left-1/2" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className={cn("space-y-6 z-10", dir === 'rtl' ? 'text-right lg:order-last' : 'text-left')}>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold leading-tight"
          >
            {c.headline}
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-muted-foreground text-lg"
          >
            {c.subheadline}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className={cn("flex gap-4", dir === 'rtl' ? 'justify-end' : 'justify-start')}
          >
            <Button size="lg" className="group">
              {c.cta1}
              <ArrowLeft className={cn("h-5 w-5 transition-transform duration-300 group-hover:translate-x-1", language === 'ar' && "rotate-180 group-hover:-translate-x-1")} />
            </Button>
            <Button size="lg" variant="outline">
              <PlayCircle />
              {c.cta2}
            </Button>
          </motion.div>
        </div>

        {/* DASHBOARD */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 40, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: (dir === 'rtl' ? 5 : -5) }}
            transition={{ duration: 0.8, type: 'spring' }}
            className="relative bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 shadow-2xl"
          >
            <h3 className="text-muted-foreground mb-4">{language === 'ar' ? 'لوحة التحكم' : 'Dashboard'}</h3>
            <div className="grid grid-cols-2 gap-4">
               {dashboardCards.map((card, i) => (
                 <DashboardCard key={i} title={card.title} value={card.value} unit={card.unit} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
