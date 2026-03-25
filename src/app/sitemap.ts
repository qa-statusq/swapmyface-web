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

  // Hindi (hi) localized pages
  const hiPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/hi`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/hi/face-swap`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE_URL}/hi/templates/festival`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/hi/templates/festival/diwali`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/hi/templates/festival/holi`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];

  // Arabic (ar) localized pages
  const arPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/ar`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/ar/face-swap`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE_URL}/ar/templates/festival/eid`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];

  // Japanese (ja) localized pages — 顔変換 (3,735 reach, 0 difficulty)
  const jaPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/ja`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/ja/face-swap`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${SITE_URL}/ja/templates/festival`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
  ];

  // Korean (ko) localized pages — 얼굴 교체 (2,145 reach, 0 difficulty)
  const koPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/ko`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/ko/face-swap`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
  ];

  // Vietnamese (vi) localized pages — ghép mặt (2,194 reach, 0 difficulty)
  const viPages: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/vi`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/vi/face-swap`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
  ];

  return [...staticPages, ...festivalPages, ...blogPages, ...hiPages, ...arPages, ...jaPages, ...koPages, ...viPages];
}
