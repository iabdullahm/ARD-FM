'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';
import { BarChart3, FileText, Home, Wrench } from 'lucide-react';
import React from 'react';

const iconMap: { [key: string]: React.ElementType } = {
  contracts: FileText,
  rentals: Home,
  maintenance: Wrench,
  reports: BarChart3,
};

export function SolutionSection() {
  const { language } = useLanguage();
  const c = content[language].solution;

  const modulePositions = [
    'md:absolute md:top-0 md:left-0',
    'md:absolute md:top-0 md:right-0',
    'md:absolute md:bottom-0 md:left-0',
    'md:absolute md:bottom-0 md:right-0',
  ];

  return (
    <section id="solution" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 fade-in-up">
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-primary font-semibold">{c.eyebrow}</span>
          <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">{c.headline}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{c.subheadline}</p>
        </div>

        <div className="relative mt-16 md:mt-24 md:h-[500px]">
          <div className="hidden md:block absolute inset-0">
             {/* Connecting lines */}
            <svg width="100%" height="100%" className="absolute inset-0">
              <line x1="20%" y1="20%" x2="50%" y2="50%" stroke="hsl(var(--border))" strokeWidth="1" />
              <line x1="80%" y1="20%" x2="50%" y2="50%" stroke="hsl(var(--border))" strokeWidth="1" />
              <line x1="20%" y1="80%" x2="50%" y2="50%" stroke="hsl(var(--border))" strokeWidth="1" />
              <line x1="80%" y1="80%" x2="50%" y2="50%" stroke="hsl(var(--border))" strokeWidth="1" />
            </svg>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-56 md:h-56 bg-primary rounded-full flex flex-col items-center justify-center text-center p-4 shadow-2xl glow-effect">
            <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground">Rafid</h3>
            <p className="text-sm text-primary-foreground/80 mt-1">{c.centerText}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4 mt-8 md:mt-0">
            {c.modules.map((module, index) => {
              const Icon = iconMap[module.icon];
              return (
                <Card
                  key={module.title}
                  className={cn(
                    'relative w-full md:w-56 p-4 glass-card hover:scale-105 transition-transform duration-300',
                    'md:transform-none',
                    modulePositions[index]
                  )}
                >
                  <div className="flex flex-col items-center text-center md:items-start md:text-left gap-2">
                    {Icon && <Icon className="w-8 h-8 text-primary mb-2" />}
                    <h4 className="font-bold text-lg text-foreground">{module.title}</h4>
                    <p className="text-sm text-muted-foreground">{module.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
