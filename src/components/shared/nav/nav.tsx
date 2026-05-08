'use client';
import { NAME } from '@/lib/constants';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import { LocaleToggle, ThemeToggle } from '@/components';

function Nav({ children }: { children: React.ReactNode }) {
  const t = useTranslations('Nav');
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/', label: t('home') },
    { href: '/skills', label: t('skills') },
    { href: '/projects', label: t('projects') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <>
      <nav className="glass border-border/50 fixed top-0 z-50 w-full border-b">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <p className="font-mono text-xl font-bold tracking-tight">{NAME}</p>

          <ul className="hidden items-center gap-6 md:flex">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="link-underline text-foreground hover:text-primary py-1 text-sm font-medium transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-1 md:gap-2">
            <ThemeToggle />
            <LocaleToggle />
            {/* TODO: CV download */}

            <button
              className="btn-scale hover:bg-muted ml-2 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md md:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span
                className={`bg-primary block h-0.5 w-5 rounded-full transition-transform duration-300 ${
                  open ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`bg-primary block h-0.5 w-5 rounded-full transition-opacity duration-300 ${
                  open ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`bg-primary block h-0.5 w-5 rounded-full transition-transform duration-300 ${
                  open ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <ul className="border-border/50 bg-background/50 flex flex-col border-t px-4 py-2">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-foreground hover:bg-primary/10 hover:text-primary block rounded-md px-2 py-3 text-sm font-medium transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="pt-16">{children}</main>
    </>
  );
}

export { Nav };
