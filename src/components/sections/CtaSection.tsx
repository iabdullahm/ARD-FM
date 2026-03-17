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
    <section id="cta" className="w-full py-20 md:py-32 bg-secondary mt-20">
      <div className="container mx-auto px-4 text-center fade-in-up">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-secondary-foreground">
          {c.headline}
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          {c.subheadline}
        </p>
        <div className="mt-10">
          <Button size="lg" className="group text-lg py-8 px-10">
            {c.cta}
            <ArrowLeft className={cn("h-6 w-6 transition-transform duration-300 group-hover:translate-x-1", language === 'ar' && "rotate-180 group-hover:-translate-x-1")} />
          </Button>
        </div>
      </div>
    </section>
  );
}
