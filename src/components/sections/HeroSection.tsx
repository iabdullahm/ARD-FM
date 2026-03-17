'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import { Button } from '../ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { ArrowLeft, PlayCircle } from 'lucide-react';

const mockup1 = PlaceHolderImages.find(p => p.id === 'dashboard-mockup-1');
const mockup2 = PlaceHolderImages.find(p => p.id === 'dashboard-mockup-2');

export function HeroSection() {
  const { language } = useLanguage();
  const c = content[language].hero;

  return (
    <section className="relative w-full h-[90vh] md:h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-10"></div>
      <div className="absolute inset-0">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-[hsl(var(--brand-cyan))]/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      {mockup1 && (
        <Image
          src={mockup1.imageUrl}
          alt={mockup1.description}
          width={500}
          height={300}
          data-ai-hint={mockup1.imageHint}
          className="absolute top-1/4 left-[5%] w-48 md:w-64 object-contain rounded-lg shadow-2xl opacity-30 md:opacity-80 glass-card animate-float-slow"
        />
      )}
      {mockup2 && (
        <Image
          src={mockup2.imageUrl}
          alt={mockup2.description}
          width={400}
          height={450}
          data-ai-hint={mockup2.imageHint}
          className="absolute bottom-1/4 right-[5%] w-40 md:w-56 object-contain rounded-lg shadow-2xl opacity-30 md:opacity-80 glass-card animate-float-fast"
        />
      )}
      
      <div className="container mx-auto px-4 text-center z-20">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight md:leading-snug">
          {c.headline}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
          {c.subheadline}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="group">
            {c.cta1}
            <ArrowLeft className={cn("h-5 w-5 transition-transform duration-300 group-hover:translate-x-1", language === 'ar' && "rotate-180 group-hover:-translate-x-1")} />
          </Button>
          <Button size="lg" variant="outline">
            <PlayCircle />
            {c.cta2}
          </Button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(25px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animate-float-fast {
          animation: float-fast 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
