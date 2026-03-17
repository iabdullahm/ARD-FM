'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const featureImages = PlaceHolderImages.filter(p => p.id.startsWith('screenshot-')).slice(0, 4);

export function FeaturesSection() {
  const { language } = useLanguage();
  const c = content[language].features;

  return (
    <section id="features" className="w-full py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20 fade-in-up">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{c.headline}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{c.subheadline}</p>
        </div>

        <div className="space-y-20 md:space-y-32">
          {c.items.map((feature, index) => {
            const image = featureImages[index % featureImages.length];
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={feature.title}
                className={cn(
                  'grid md:grid-cols-2 gap-12 md:gap-16 items-center fade-in-up'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div
                  className={cn(
                    'relative w-full aspect-video rounded-2xl overflow-hidden group',
                    isReversed ? 'md:order-last' : ''
                  )}
                >
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    fill
                    data-ai-hint={image.imageHint}
                    className="object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 rounded-2xl"></div>
                </div>
                <div className={cn('relative', isReversed ? 'md:order-first' : '')}>
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
