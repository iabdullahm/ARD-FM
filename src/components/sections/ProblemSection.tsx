'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import { Card, CardContent } from '../ui/card';
import { cn } from '@/lib/utils';
import { AlertCircle } from 'lucide-react';

export function ProblemSection() {
  const { language } = useLanguage();
  const c = content[language].problem;

  return (
    <section id="problem" className="w-full py-20 md:py-32 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4 fade-in-up">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="relative h-96 md:h-[500px] order-last md:order-first">
            {c.painPoints.map((point, index) => {
              const positions = [
                'top-0 ltr:left-0 rtl:right-0 rotate-[-8deg] hover:!rotate-0',
                'top-1/3 ltr:right-0 rtl:left-0 rotate-[5deg] hover:!rotate-0',
                'bottom-0 ltr:left-1/4 rtl:right-1/4 rotate-[3deg] hover:!rotate-0',
              ];
              const zIndexes = ['z-10', 'z-20', 'z-0'];
              return (
                <Card
                  key={point}
                  className={cn(
                    'absolute w-64 md:w-80 glass-card shadow-xl transition-all duration-500 hover:scale-110 hover:z-30',
                    positions[index % positions.length],
                    zIndexes[index % zIndexes.length]
                  )}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <AlertCircle className="w-8 h-8 text-destructive" />
                      <p className="font-semibold text-lg text-foreground">{point}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <div className="md:order-last">
            <span className="text-primary font-semibold">{c.eyebrow}</span>
            <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">{c.headline}</h2>
            <p className="mt-4 text-lg text-muted-foreground">{c.subheadline}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
