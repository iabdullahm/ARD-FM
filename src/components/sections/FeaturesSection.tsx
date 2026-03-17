'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import { cn } from '@/lib/utils';
import { BarChart3, FileText, Home, Wrench } from 'lucide-react';
import React from 'react';

const iconMap: { [key: string]: React.ElementType } = {
  contracts: FileText,
  rentals: Home,
  maintenance: Wrench,
  reports: BarChart3,
};

export function FeaturesSection() {
  const { language, dir } = useLanguage();
  const c = content[language].features;

  return (
    <section id="features" className="w-full py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12 md:mb-20 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{c.headline}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{c.subheadline}</p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {c.items.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={feature.title}
                className={cn(
                  'grid md:grid-cols-2 gap-8 md:gap-16 items-center fade-in-up',
                  { 'md:grid-flow-col-dense': isReversed }
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={cn(
                    'relative w-full aspect-square rounded-2xl bg-secondary flex items-center justify-center',
                    isReversed ? 'md:col-start-2' : ''
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl"></div>
                   <div className="w-3/4 h-3/4 glass-card rounded-xl flex items-center justify-center">
                    {Icon && <Icon className="w-24 h-24 text-primary" />}
                   </div>
                </div>
                <div className={cn('relative', isReversed ? 'md:col-start-1' : '')}>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{feature.title}</h3>
                  <p className="mt-4 text-muted-foreground text-lg">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
