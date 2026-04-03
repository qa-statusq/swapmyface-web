import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './constants';
import { localizedPaths, type Locale } from './i18n';

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
}

/** Build hreflang alternates for a given path if locale versions exist */
function buildLanguages(path: string): Record<string, string> | undefined {
  const locales = localizedPaths[path];
  if (!locales || locales.length <= 1) return undefined;

  const suffix = path === '/' ? '' : path; // avoid trailing slash on homepage
  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = loc === 'en' ? `${SITE_URL}${suffix}` : `${SITE_URL}/${loc}${suffix}`;
  }
  languages['x-default'] = `${SITE_URL}${suffix}`;
  return languages;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = '/images/og/home.jpg',
  keywords,
}: PageMetaOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const languages = buildLanguages(path);

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
      ...(languages ? { languages } : {}),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
