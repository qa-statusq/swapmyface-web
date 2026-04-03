import type { Metadata } from 'next';
import { SITE_URL, SITE_NAME } from './constants';
import { getTranslations } from './getTranslations';
import { localizedPaths, type Locale } from './i18n';
import { FESTIVALS } from '@/data/festivals';

const localeOgMap: Record<string, string> = {
  en: 'en_US',
  hi: 'hi_IN',
  ar: 'ar_SA',
  ja: 'ja_JP',
  ko: 'ko_KR',
  vi: 'vi_VN',
};

/** Build alternates.languages for a given path, only including locales that have that path */
export function generateLocaleAlternates(path: string): { canonical: string; languages: Record<string, string> } {
  const locales = localizedPaths[path] || ['en'];
  const suffix = path === '/' ? '' : path; // avoid trailing slash on homepage
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    const url = loc === 'en' ? `${SITE_URL}${suffix}` : `${SITE_URL}/${loc}${suffix}`;
    languages[loc] = url;
  }
  languages['x-default'] = `${SITE_URL}${suffix}`;
  return { canonical: languages['en'] || `${SITE_URL}${suffix}`, languages };
}

/** Slug-to-path mapping for the catch-all pages */
function slugToPath(slug: string[]): string {
  return `/${slug.join('/')}`;
}

/** Known slugs that the catch-all can render */
const RENDERABLE_SLUGS = [
  'how-it-works',
  'templates',
  'blog',
  'support',
  'templates/festival',
  'templates/couple',
  'templates/kids',
  'templates/love',
  'templates/trending',
];

export function isRenderableSlug(slug: string[]): boolean {
  return RENDERABLE_SLUGS.includes(slug.join('/'));
}

/**
 * If the slug is a festival page that doesn't have a locale version,
 * return the English URL to redirect to. Otherwise return null (no redirect needed).
 */
export function getFestivalRedirect(locale: string, slug: string[]): string | null {
  if (slug.length === 3 && slug[0] === 'templates' && slug[1] === 'festival') {
    const festivalSlug = slug[2];
    const path = `/templates/festival/${festivalSlug}`;
    const locales = localizedPaths[path];
    // If this locale has a dedicated page, no redirect needed
    if (locales?.includes(locale as Locale)) return null;
    // If the festival exists in English, redirect there
    if (FESTIVALS.some((f) => f.slug === festivalSlug)) return path;
  }
  return null;
}

/** Generate full Metadata for a locale catch-all page */
export function generateLocalePageMetadata(locale: string, slug: string[]): Metadata | null {
  const path = slugToPath(slug);
  const joined = slug.join('/');
  const t = getTranslations(locale);
  const localeUrl = `${SITE_URL}/${locale}${path}`;
  const ogLocale = localeOgMap[locale] || 'en_US';
  const alternateLocales = Object.keys(localeOgMap).filter((l) => l !== locale).map((l) => localeOgMap[l]);

  let title: string;
  let description: string;

  switch (joined) {
    case 'how-it-works':
      title = t.meta.howItWorks.title;
      description = t.meta.howItWorks.description;
      break;
    case 'templates':
    case 'templates/festival':
    case 'templates/couple':
    case 'templates/kids':
    case 'templates/love':
    case 'templates/trending':
      title = t.meta.templates.title;
      description = t.meta.templates.description;
      break;
    case 'blog':
      title = `Blog — ${SITE_NAME}`;
      description = t.meta.home.description;
      break;
    case 'support':
      title = t.meta.support.title;
      description = t.meta.support.description;
      break;
    default:
      return null;
  }

  // Build alternates only for paths listed in localizedPaths
  const altPath = localizedPaths[path] ? path : null;
  const alternates = altPath
    ? generateLocaleAlternates(altPath)
    : { canonical: localeUrl, languages: {} as Record<string, string> };

  return {
    title,
    description,
    alternates: {
      canonical: localeUrl,
      languages: alternates.languages,
    },
    openGraph: {
      title,
      description,
      url: localeUrl,
      siteName: SITE_NAME,
      locale: ogLocale,
      alternateLocale: alternateLocales,
      images: [{ url: '/images/og/home.jpg', width: 1200, height: 630, alt: title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og/home.jpg'],
    },
  };
}
