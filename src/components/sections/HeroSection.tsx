'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { ArrowLeft, PlayCircle, FileText, Bell, CircleDollarSign, Wrench } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export function HeroSection() {
  const { language } = useLanguage();
  const c = content[language].hero;

  const dashboardCards = [
    { title: c.cards.contracts, value: '128', icon: FileText },
    { title: c.cards.revenue, value: '45,200', icon: CircleDollarSign, unit: language === 'ar' ? 'ريال' : 'SAR' },
    { title: c.cards.alerts, value: '6', icon: Bell },
    { title: c.cards.maintenance, value: '12', icon: Wrench },
  ];

  return (
    <section dir={language === 'ar' ? 'rtl' : 'ltr'} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20 md:py-0">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80 z-10"></div>
      <div className="absolute inset-0">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 z-20 grid md:grid-cols-2 gap-8 items-center">
        {/* Right side for Text (RTL friendly) */}
        <div className="text-center md:text-start">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-tight md:leading-snug">
            {c.headline}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto md:mx-0 text-lg md:text-xl text-muted-foreground">
            {c.subheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
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

        {/* Left side for Dashboard Mockup */}
        <div className="relative animate-float-slow">
            <Card className="glass-card border-white/5 p-4 md:p-6 shadow-2xl">
                <CardHeader>
                    <CardTitle className="text-lg font-bold text-foreground">{language === 'ar' ? 'لوحة التحكم' : 'Dashboard'}</CardTitle>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-4">
                    {dashboardCards.map((item, index) => (
                        <Card key={index} className="bg-background/40 border-white/5 transition-transform hover:scale-105 hover:-translate-y-1">
                            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                                <CardTitle className="text-sm font-medium text-muted-foreground">{item.title}</CardTitle>
                                <item.icon className="h-4 w-4 text-muted-foreground" />
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold">
                                  {item.value} 
                                  {item.unit && <span className="text-sm text-muted-foreground ml-1">{item.unit}</span>}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </CardContent>
            </Card>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }
        .animation-delay-2000 {
            animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}
