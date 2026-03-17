'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import { content } from '@/lib/content';
import { Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const { language } = useLanguage();
  const c = content[language].footer;

  return (
    <footer className="w-full bg-background border-t border-white/10 py-8 mt-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-primary">Rafid</h3>
            <p className="text-muted-foreground text-sm mt-1">{c.tagline}</p>
          </div>
          <div className="flex gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="GitHub">
              <Github className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
        <div className="border-t border-white/10 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>{c.copyright}</p>
          <div className="flex items-center gap-4 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">{c.privacy}</Link>
            <Link href="#" className="hover:text-primary transition-colors">{c.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
