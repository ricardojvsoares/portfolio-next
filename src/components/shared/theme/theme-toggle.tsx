'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components';
import { useTranslations } from 'next-intl';

function ThemeToggle() {
  const t = useTranslations('ThemeToggle');
  const { setTheme } = useTheme();

  function handleThemeChange() {
    const theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
    setTheme(theme);
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleThemeChange}
      className="btn-scale glow-hover"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-transform duration-300 dark:scale-0 dark:-rotate-90" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-transform duration-300 dark:scale-100 dark:rotate-0" />
      <span className="sr-only">{t('toggleTheme')}</span>
    </Button>
  );
}

export { ThemeToggle };
