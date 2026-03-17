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
    <section id="contact" className="relative w-full py-20 md:py-32 bg-background border-t border-border mt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      </div>
      <div className="container mx-auto px-4 text-center fade-in-up relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground">
          {c.headline}
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
          {c.subheadline}
        </p>
        <div className="mt-10">
          <Button size="lg" className="group text-lg py-8 px-10 glow-effect">
            {c.cta}
            <ArrowLeft className={cn("h-6 w-6 transition-transform duration-300 group-hover:translate-x-1", language === 'ar' && "rotate-180 group-hover:-translate-x-1")} />
          </Button>
        </div>
      </div>
    </section>
  );
}
