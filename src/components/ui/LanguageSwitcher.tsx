'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { locales, localeConfig, defaultLocale, type Locale } from '@/lib/i18n';

function getCurrentLocale(pathname: string): Locale {
  const segment = pathname.split('/')[1];
  if (locales.includes(segment as Locale) && segment !== defaultLocale) {
    return segment as Locale;
  }
  return defaultLocale;
}

function getPathWithoutLocale(pathname: string, currentLocale: Locale): string {
  if (currentLocale === defaultLocale) return pathname;
  const withoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
  return withoutLocale;
}

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = getCurrentLocale(pathname);
  const current = localeConfig[currentLocale];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchLocale = (locale: Locale) => {
    const basePath = getPathWithoutLocale(pathname, currentLocale);
    const newPath = locale === defaultLocale ? basePath : `/${locale}${basePath === '/' ? '' : basePath}`;
    setOpen(false);
    router.push(newPath);
  };

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-9 items-center gap-1.5 rounded-lg px-2 text-sm text-muted transition-colors hover:bg-white/5 hover:text-text"
        aria-label="Change language"
      >
        <span className="text-base">{current.flag}</span>
        <span className="hidden sm:inline">{current.nativeName}</span>
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform ${open ? 'rotate-180' : ''}`}>
          <path d="M3 5l3 3 3-3" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-[160px] overflow-hidden rounded-xl border border-line bg-panel shadow-xl">
          {locales.map((locale) => {
            const config = localeConfig[locale];
            const isActive = locale === currentLocale;
            return (
              <button
                key={locale}
                onClick={() => switchLocale(locale)}
                className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                  isActive
                    ? 'bg-accent/10 text-accent'
                    : 'text-muted hover:bg-white/5 hover:text-text'
                }`}
              >
                <span className="text-base">{config.flag}</span>
                <span>{config.nativeName}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
