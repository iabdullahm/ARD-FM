'use client';
import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import { cn } from '@/lib/utils';

export function MetricsSection() {
  const { language } = useLanguage();
  const c = content[language].metricsSection;

  return (
    <section className="w-full py-12 bg-secondary my-20 md:my-32">
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll">
          {[...c.metrics, ...c.metrics].map((metric, index) => (
            <div key={index} className="flex-shrink-0 mx-8 flex items-center gap-4">
              <span className="text-3xl md:text-4xl font-bold text-primary">{metric.value}</span>
              <span className="text-md md:text-lg text-muted-foreground">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
}
