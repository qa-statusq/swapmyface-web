'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { getLocaleFromPathname, getTranslations } from '@/lib/getTranslations';

export default function NotFound() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getTranslations(locale);
  const prefix = locale === 'en' ? '' : `/${locale}`;

  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-accent">404</h1>
        <h2 className="mt-4 text-2xl font-bold">{t.notFound.title}</h2>
        <p className="mt-3 text-muted">
          {t.notFound.subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href={`${prefix}/`}
            className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            {t.notFound.goHome}
          </Link>
          <Link
            href={`${prefix}/templates`}
            className="rounded-xl border border-line px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5"
          >
            {t.notFound.browseTemplates}
          </Link>
        </div>
      </div>
    </section>
  );
}
