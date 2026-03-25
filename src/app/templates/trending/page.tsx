import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { playStoreLink } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Trending Face Swap Templates \u2014 Viral & Popular Designs',
  description:
    'Discover what the world is swapping right now. Trending and viral face swap templates updated daily. Free, unlimited, HD quality. Download SwapMyFace.',
  path: '/templates/trending',
  keywords: ['trending face swap', 'popular face swap', 'viral face swap templates', 'best face swap templates'],
});

export const revalidate = 3600;

export default function TrendingTemplatesPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Templates', href: '/templates' },
            { label: 'Trending', href: '/templates/trending' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Trending Face Swap Templates &mdash; What the World Is Swapping
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            Discover the most popular and viral face swap designs. Our team refreshes trending templates daily with the hottest designs so you are always ahead of the curve. All free, unlimited, and in full HD quality.
          </p>
          <div className="mt-8">
            <Link href={playStoreLink('trending_templates_page')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90">
              Download Free &mdash; See Trending Templates
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">Updated Daily</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Our dedicated team monitors trends across social media, pop culture, and viral moments to bring you the freshest face swap templates every single day. Whether it&apos;s a movie release, a meme trend, or a cultural moment, SwapMyFace has a template ready for you.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/templates/festival" className="rounded-xl border border-line bg-surface/50 px-4 py-2 text-sm text-muted hover:border-accent/30 hover:text-accent">Festival Templates &rarr;</Link>
            <Link href="/templates/couple" className="rounded-xl border border-line bg-surface/50 px-4 py-2 text-sm text-muted hover:border-accent/30 hover:text-accent">Couple Templates &rarr;</Link>
            <Link href="/templates/kids" className="rounded-xl border border-line bg-surface/50 px-4 py-2 text-sm text-muted hover:border-accent/30 hover:text-accent">Kids Templates &rarr;</Link>
          </div>
        </div>
      </section>

      <CTABanner campaign="trending_templates_page" heading="Stay Ahead of the Trend with SwapMyFace" />
    </>
  );
}
