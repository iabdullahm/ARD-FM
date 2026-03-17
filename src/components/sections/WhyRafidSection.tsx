'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';

export function WhyRafidSection() {
  const { language } = useLanguage();
  const c = content[language].whyRafid;

  return (
    <section id="why-rafid" className="w-full py-20 md:py-32 bg-secondary/50">
      <div className="container mx-auto px-4 text-center fade-in-up">
        <span className="text-primary font-semibold">{c.eyebrow}</span>
        <h2 className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight">{c.headline}</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {c.points.map((point, index) => (
            <div key={index} className="p-8 border border-border rounded-xl bg-background/50">
              <h3 className="text-4xl font-bold text-primary">{point.number}</h3>
              <p className="mt-2 text-lg font-semibold text-foreground">{point.title}</p>
              <p className="mt-1 text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <p className="text-2xl md:text-4xl font-bold text-foreground tracking-tight">
            {c.boldStatement}
          </p>
        </div>
      </div>
    </section>
  );
}
