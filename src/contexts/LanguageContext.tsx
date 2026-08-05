'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { cn } from '@/lib/utils';

type Language = 'ar' | 'en';
type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  dir: Direction;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'rafid-lang';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');
  const [dir, setDir] = useState<Direction>('rtl');

  // Restore saved preference once on mount
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'ar') {
        setLanguage(saved);
      }
    } catch {
      // localStorage unavailable (private mode etc.) — keep default
    }
  }, []);

  useEffect(() => {
    const newDir: Direction = language === 'ar' ? 'rtl' : 'ltr';
    setDir(newDir);
    document.documentElement.lang = language;
    document.documentElement.dir = newDir;
    // Light theme only
    document.documentElement.classList.remove('dark');

    document.body.className = cn(
      'min-h-screen bg-background font-body antialiased',
      language === 'ar' ? 'font-arabic' : 'font-body'
    );

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // ignore
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'ar' ? 'en' : 'ar'));
  };

  return (
    <LanguageContext.Provider value={{ language, dir, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
