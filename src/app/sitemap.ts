import { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/constants';
import { FESTIVALS } from '@/data/festivals';
import { BLOG_POSTS } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE_URL}/face-swap`, lastModified: now, changeFrequency: 'weekly', priority: 0.95 },
    { url: `${SITE_URL}/ai-face-swap`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/ai-face-changer`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/face-swap-photo-editor`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/free-face-swap`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/templates`, lastModified: now, changeFrequency: 'daily', priority: 0.85 },
    { url: `${SITE_URL}/templates/festival`, lastModified: now, changeFrequency: 'daily', priority: 0.85 },
    { url: `${SITE_URL}/templates/couple`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/templates/love`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/templates/kids`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/templates/trending`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${SITE_URL}/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/support`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
    { url: `${SITE_URL}/responsible-use`, lastModified: now, changeFrequency: 'monthly', priority: 0.3 },
  ];

  const festivalPages: MetadataRoute.Sitemap = FESTIVALS.map((f) => ({
    url: `${SITE_URL}/templates/festival/${f.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updatedDate || p.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Shared locale pages (all 5 locales get these)
  const localeSharedPages = ['hi', 'ar', 'ja', 'ko', 'vi'].flatMap((loc): MetadataRoute.Sitemap => [
    { url: `${SITE_URL}/${loc}`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/${loc}/face-swap`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE_URL}/${loc}/how-it-works`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/${loc}/templates`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${SITE_URL}/${loc}/templates/festival`, lastModified: now, changeFrequency: 'daily', priority: 0.8 },
    { url: `${SITE_URL}/${loc}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/${loc}/support`, lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
  ]);

  // Locale-specific festival pages
  const hiPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/hi/templates/festival/diwali`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/hi/templates/festival/holi`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const arPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/ar/templates/festival/eid`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];

  const jaPages: MetadataRoute.Sitemap = [];
  const koPages: MetadataRoute.Sitemap = [];
  const viPages: MetadataRoute.Sitemap = [];

  return [...staticPages, ...festivalPages, ...blogPages, ...localeSharedPages, ...hiPages, ...arPages, ...jaPages, ...koPages, ...viPages];
}
