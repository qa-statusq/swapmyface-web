import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { FESTIVALS } from '@/data/festivals';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import HreflangTags from '@/components/seo/HreflangTags';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Festival Face Swap Templates \u2014 Diwali, Christmas, Eid, Holi & More',
  description:
    'Celebrate every festival with SwapMyFace! 500+ festival face swap templates for Diwali, Christmas, Eid, Holi, Halloween, New Year & more. Free, unlimited, HD quality.',
  path: '/templates/festival',
  keywords: [
    'festival face swap', 'diwali face swap', 'christmas face swap', 'eid face swap',
    'holi face swap', 'halloween face swap', 'festival photo template',
  ],
});

export default function FestivalTemplatesPage() {
  return (
    <>
      <HreflangTags path="/templates/festival" />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: 'Festival Face Swap Templates',
        description: 'Face swap templates for Diwali, Christmas, Eid, Holi, Halloween, New Year & more festivals worldwide.',
        url: `${SITE_URL}/templates/festival`,
        isPartOf: { '@type': 'WebSite', name: 'SwapMyFace', url: SITE_URL },
        numberOfItems: FESTIVALS.length,
      }} />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Templates', href: '/templates' },
            { label: 'Festival', href: '/templates/festival' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Festival Face Swap Templates for Every Celebration
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            Celebrate every festival in the world with SwapMyFace. From Diwali to Christmas, Eid to Halloween, Holi to New Year &mdash; our massive collection of festival face swap templates covers every culture, religion, and country. All free, unlimited, and in full HD.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FESTIVALS.map((festival) => (
              <Link
                key={festival.slug}
                href={`/templates/festival/${festival.slug}`}
                className="group rounded-2xl border border-line bg-surface/50 p-6 transition-all hover:border-accent/30 hover:shadow-lg"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl">{festival.emoji}</span>
                  <h2 className="text-lg font-semibold group-hover:text-accent transition-colors">
                    {festival.name} Face Swap
                  </h2>
                </div>
                <p className="text-sm text-muted leading-relaxed">{festival.description}</p>
                <div className="mt-4 text-sm font-medium text-accent">Browse {festival.name} templates &rarr;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner campaign="festival_templates_page" heading="Celebrate Every Festival with SwapMyFace" />
    </>
  );
}
