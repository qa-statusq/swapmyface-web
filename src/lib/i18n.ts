export const defaultLocale = 'en';

export const locales = ['en', 'hi', 'ar', 'ja', 'ko', 'vi'] as const;

export type Locale = (typeof locales)[number];

export const localeConfig: Record<Locale, { name: string; nativeName: string; flag: string; dir: 'ltr' | 'rtl'; hreflang: string }> = {
  en: { name: 'English', nativeName: 'English', flag: '🇺🇸', dir: 'ltr', hreflang: 'en' },
  hi: { name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳', dir: 'ltr', hreflang: 'hi' },
  ar: { name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', dir: 'rtl', hreflang: 'ar' },
  ja: { name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', dir: 'ltr', hreflang: 'ja' },
  ko: { name: 'Korean', nativeName: '한국어', flag: '🇰🇷', dir: 'ltr', hreflang: 'ko' },
  vi: { name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳', dir: 'ltr', hreflang: 'vi' },
};

export function isRtlLocale(locale: Locale): boolean {
  return localeConfig[locale].dir === 'rtl';
}

/** Pages that have localized versions — used for hreflang and sitemap generation */
export const localizedPaths: Record<string, Locale[]> = {
  '/': ['en', 'hi', 'ar', 'ja', 'ko', 'vi'],
  '/face-swap': ['en', 'hi', 'ar', 'ja', 'ko', 'vi'],
  '/how-it-works': ['en', 'hi', 'ar', 'ja', 'ko', 'vi'],
  '/templates': ['en', 'hi', 'ar', 'ja', 'ko', 'vi'],
  '/blog': ['en', 'hi', 'ar', 'ja', 'ko', 'vi'],
  '/support': ['en', 'hi', 'ar', 'ja', 'ko', 'vi'],
  '/templates/festival': ['en', 'hi', 'ar', 'ja', 'ko', 'vi'],
  '/templates/festival/diwali': ['en', 'hi'],
  '/templates/festival/holi': ['en', 'hi'],
  '/templates/festival/eid': ['en', 'ar'],
  '/templates/festival/navratri': ['en', 'hi'],
  '/templates/festival/ganesh-chaturthi': ['en', 'hi'],
  '/templates/festival/raksha-bandhan': ['en', 'hi'],
};

export function getLocalizedUrl(path: string, locale: Locale): string {
  if (locale === defaultLocale) return path;
  return `/${locale}${path}`;
}
