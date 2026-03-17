'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import { CheckCircle } from 'lucide-react';

export function WhyRafidSection() {
  const { language } = useLanguage();
  const c = content[language].whyRafid;

  return (
    <section id="pricing" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 text-center fade-in-up">
        <span className="text-primary font-semibold">{c.eyebrow}</span>
        <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">{c.headline}</h2>
        <div className="mt-16 max-w-4xl mx-auto space-y-8">
          {c.boldStatements.map((statement, index) => (
            <div key={index} className="flex items-center justify-center gap-4">
               <CheckCircle className="h-8 w-8 text-primary flex-shrink-0" />
               <p className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">
                {statement}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
