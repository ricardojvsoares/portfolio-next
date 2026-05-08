'use client';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { setLocaleCookie } from '@/i18n/locale';
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components';

import { LOCALES, type Locales } from '@/lib/constants';

function LocaleToggle() {
  const t = useTranslations('LocaleToggle');
  const locale = useLocale() as Locales;
  const router = useRouter();

  async function handleLocaleChange(next: string) {
    await setLocaleCookie(next);
    router.refresh();
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="btn-scale glow-hover font-medium">
          {locale.toUpperCase()}
          <span className="sr-only">{t('toggleLocale')}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="glass border-border/50">
        {LOCALES.map((loc) => (
          <DropdownMenuItem
            key={loc}
            onClick={() => handleLocaleChange(loc)}
            className="hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary cursor-pointer transition-colors"
          >
            {t(loc)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export { LocaleToggle };
