'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import { Button } from '../ui/button';
import { Languages, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { Separator } from '../ui/separator';

export function Header() {
  const { language, toggleLanguage } = useLanguage();
  const c = content[language].header;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: c.nav.problem, href: '#problem' },
    { label: c.nav.solution, href: '#solution' },
    { label: c.nav.features, href: '#features' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl text-primary">Rafid</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className="transition-colors hover:text-foreground/80 text-foreground/60">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Toggle language">
            <Languages className="h-5 w-5" />
          </Button>
          <Link href="/login" passHref>
             <Button variant="ghost" className="hidden sm:inline-flex">
                {c.login}
             </Button>
          </Link>
          <Button className="hidden sm:inline-flex">{c.cta}</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="flex flex-col space-y-2 p-4 border-t border-border/40">
          {navItems.map((item) => (
             <Link key={item.label} href={item.href} className="py-2 text-center text-sm font-medium transition-colors hover:text-foreground/80 text-foreground/60" onClick={() => setIsMenuOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Separator className="my-2" />
          <Link href="/login" passHref>
            <Button variant="outline" className="w-full" onClick={() => setIsMenuOpen(false)}>{c.login}</Button>
          </Link>
          <Button className="w-full" onClick={() => setIsMenuOpen(false)}>{c.cta}</Button>
        </div>
      </div>
    </header>
  );
}
