import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { TEMPLATE_CATEGORIES } from '@/data/templates';
import { FESTIVALS } from '@/data/festivals';
import nextDynamic from 'next/dynamic';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const CTABanner = nextDynamic(() => import('@/components/sections/CTABanner'));
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

export const metadata: Metadata = generatePageMetadata({
  title: '500+ Face Swap Templates \u2014 Festival, Couple, Kids & Trending',
  description:
    'Browse 500+ free face swap templates across festivals, couples, kids, love & trending categories. New templates added daily. Download SwapMyFace free on Google Play.',
  path: '/templates',
  keywords: ['face swap templates', 'face swap template free', 'face swap designs', 'face swap categories'],
});

export default function TemplatesPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: '500+ Face Swap Templates',
    description: 'Browse 500+ free face swap templates across festivals, couples, kids, love & trending categories.',
    url: `${SITE_URL}/templates`,
    isPartOf: { '@type': 'WebSite', name: 'SwapMyFace', url: SITE_URL },
    numberOfItems: 500,
  };

  return (
    <>
      <JsonLd data={collectionSchema} />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Templates', href: '/templates' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="hero-heading text-4xl font-extrabold leading-tight sm:text-5xl">
            500+ Face Swap Templates &mdash; New Added Every Day
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            Browse our ever-growing library of 500+ premium face swap templates designed for every mood, occasion, and celebration. All templates are 100% free, always.
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="reveal mb-8 text-2xl font-bold">Template Categories</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger">
            {TEMPLATE_CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={cat.href}
                className="reveal-scale card-hover group rounded-2xl border border-line bg-surface/50 p-6"
              >
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">{cat.name}</h3>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">{cat.count}</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{cat.description}</p>
                <div className="mt-4 text-sm font-medium text-accent">Browse templates &rarr;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Festivals */}
      <section className="border-t border-line py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-2xl font-bold">Festival Templates by Celebration</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FESTIVALS.map((festival) => (
              <Link
                key={festival.slug}
                href={`/templates/festival/${festival.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-line bg-surface/50 p-4 transition-all hover:border-accent/30"
              >
                <span className="text-2xl">{festival.emoji}</span>
                <span className="font-medium group-hover:text-accent transition-colors">{festival.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner campaign="templates_page" heading="Download SwapMyFace &mdash; All 500+ Templates Free" />
    </>
  );
}
