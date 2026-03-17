'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import { Button } from '../ui/button';
import { ArrowLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CtaSection() {
  const { language } = useLanguage();
  const c = content[language].ctaSection;

  return (
    <section id="cta" className="w-full py-20 md:py-32 bg-primary/5 mt-20">
      <div className="container mx-auto px-4 text-center fade-in-up">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          {c.headline}
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          {c.subheadline}
        </p>
        <div className="mt-8">
          <Button size="lg" className="group">
            {c.cta}
            <ArrowLeft className={cn("h-5 w-5 transition-transform duration-300 group-hover:translate-x-1", language === 'ar' && "rotate-180 group-hover:-translate-x-1")} />
          </Button>
        </div>
      </div>
    </section>
  );
}
