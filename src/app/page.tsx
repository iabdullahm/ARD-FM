'use client';

import { CtaSection } from '@/components/sections/CtaSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { ScreenshotsSection } from '@/components/sections/ScreenshotsSection';
import { SolutionSection } from '@/components/sections/SolutionSection';
import { WhyRafidSection } from '@/components/sections/WhyRafidSection';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { MetricsSection } from '@/components/sections/MetricsSection';

export default function Home() {
  useScrollAnimation();
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <WhyRafidSection />
        <MetricsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
