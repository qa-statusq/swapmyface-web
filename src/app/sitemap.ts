import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { FESTIVALS } from '@/data/festivals';
import { BLOG_POSTS } from '@/data/blog';
import { localizedPaths, type Locale } from '@/lib/i18n';

/** Build alternates.languages for a path using the localizedPaths map */
function buildAlternates(path: string): { languages: Record<string, string> } | undefined {
  const locales = localizedPaths[path];
  if (!locales || locales.length <= 1) return undefined;

  const languages: Record<string, string> = {};
  for (const loc of locales) {
    languages[loc] = loc === 'en' ? `${SITE_URL}${path}` : `${SITE_URL}/${loc}${path}`;
  }
  languages['x-default'] = `${SITE_URL}${path}`;
  return { languages };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0, alternates: buildAlternates('/') },
    { url: `${SITE_URL}/face-swap`, lastModified: now, changeFrequency: 'weekly', priority: 0.95, alternates: buildAlternates('/face-swap') },
    { url: `${SITE_URL}/ai-face-swap`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/ai-face-changer`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/face-swap-photo-editor`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/free-face-swap`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/templates`, lastModified: now, changeFrequency: 'daily', priority: 0.85, alternates: buildAlternates('/templates') },
    { url: `${SITE_URL}/templates/festival`, lastModified: now, changeFrequency: 'daily', priority: 0.85, alternates: buildAlternates('/templates/festival') },
    { url: `${SITE_URL}/templates/couple`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/templates/love`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/templates/kids`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/templates/trending`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${SITE_URL}/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.7, alternates: buildAlternates('/how-it-works') },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7, alternates: buildAlternates('/blog') },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/support`, lastModified: now, changeFrequency: 'monthly', priority: 0.5, alternates: buildAlternates('/support') },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${SITE_URL}/responsible-use`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ];

  const festivalPages: MetadataRoute.Sitemap = FESTIVALS.map((f) => ({
    url: `${SITE_URL}/templates/festival/${f.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
    alternates: buildAlternates(`/templates/festival/${f.slug}`),
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updatedDate || p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Locale pages — only include the locale-prefixed URLs (English versions are already above)
  const localePages: MetadataRoute.Sitemap = (['hi', 'ar', 'ja', 'ko', 'vi'] as Locale[]).flatMap((loc) => {
    const pages: MetadataRoute.Sitemap = [
      { url: `${SITE_URL}/${loc}`, lastModified: now, changeFrequency: 'weekly', priority: 0.9, alternates: buildAlternates('/') },
      { url: `${SITE_URL}/${loc}/face-swap`, lastModified: now, changeFrequency: 'weekly', priority: 0.85, alternates: buildAlternates('/face-swap') },
      { url: `${SITE_URL}/${loc}/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.7, alternates: buildAlternates('/how-it-works') },
      { url: `${SITE_URL}/${loc}/templates`, lastModified: now, changeFrequency: 'daily', priority: 0.8, alternates: buildAlternates('/templates') },
      { url: `${SITE_URL}/${loc}/templates/festival`, lastModified: now, changeFrequency: 'daily', priority: 0.8, alternates: buildAlternates('/templates/festival') },
      { url: `${SITE_URL}/${loc}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6, alternates: buildAlternates('/blog') },
      { url: `${SITE_URL}/${loc}/support`, lastModified: now, changeFrequency: 'monthly', priority: 0.4, alternates: buildAlternates('/support') },
    ];
    return pages;
  });

  // Locale-specific festival pages
  const localeFestivalPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/hi/templates/festival/diwali`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: buildAlternates('/templates/festival/diwali') },
    { url: `${SITE_URL}/hi/templates/festival/holi`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: buildAlternates('/templates/festival/holi') },
    { url: `${SITE_URL}/ar/templates/festival/eid`, lastModified: now, changeFrequency: 'weekly', priority: 0.8, alternates: buildAlternates('/templates/festival/eid') },
  ];

  return [...staticPages, ...festivalPages, ...blogPages, ...localePages, ...localeFestivalPages];
}
