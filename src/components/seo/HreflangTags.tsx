import { SITE_URL } from '@/lib/constants';
import { locales, defaultLocale, localizedPaths, type Locale } from '@/lib/i18n';

interface HreflangTagsProps {
  path: string;
}

export default function HreflangTags({ path }: HreflangTagsProps) {
  const availableLocales = localizedPaths[path];
  if (!availableLocales || availableLocales.length <= 1) return null;

  return (
    <>
      {availableLocales.map((locale: Locale) => {
        const url =
          locale === defaultLocale
            ? `${SITE_URL}${path}`
            : `${SITE_URL}/${locale}${path}`;
        return (
          <link key={locale} rel="alternate" hrefLang={locale} href={url} />
        );
      })}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${path}`} />
    </>
  );
}
