'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const screenshots = PlaceHolderImages.filter(p => p.id.startsWith('screenshot-'));

export function ScreenshotsSection() {
  const { language } = useLanguage();
  const c = content[language].screenshots;

  return (
    <section id="screenshots" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 text-center fade-in-up">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">{c.headline}</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">{c.subheadline}</p>
      </div>

      <div className="mt-12 md:mt-20 fade-in-up">
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-2/3 pl-4">
                <div className="p-1">
                  <Card className="overflow-hidden border-2 border-primary/20 glow-effect">
                    <CardContent className="flex aspect-video items-center justify-center p-0">
                      <Image
                        src={screenshot.imageUrl}
                        alt={screenshot.description}
                        width={800}
                        height={450}
                        data-ai-hint={screenshot.imageHint}
                        className="w-full h-full object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
