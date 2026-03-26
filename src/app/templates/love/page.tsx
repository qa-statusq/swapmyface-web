import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import nextDynamic from 'next/dynamic';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const CTABanner = nextDynamic(() => import('@/components/sections/CTABanner'));
import { playStoreLink } from '@/lib/constants';
import PlayStoreIcon from '@/components/ui/PlayStoreIcon';

export const dynamic = 'force-static';

export const metadata: Metadata = generatePageMetadata({
  title: 'Love Face Swap Templates \u2014 Romantic Heart-Themed Face Swaps',
  description:
    'Express love with beautiful heart-themed and romantic face swap templates. Perfect for sharing on social media. Free, unlimited, HD quality. Download SwapMyFace.',
  path: '/templates/love',
  keywords: ['love face swap', 'romantic face swap', 'heart face swap template', 'love photo template'],
});

export default function LoveTemplatesPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Templates', href: '/templates' },
            { label: 'Love', href: '/templates/love' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="hero-heading text-4xl font-extrabold leading-tight sm:text-5xl">
            Love Face Swap Templates &mdash; Share Your Love Beautifully
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            Express love and affection with beautiful heart-themed and romantic face swap templates. Perfect for sharing on Instagram, WhatsApp, Facebook, and with the ones you love most. Free, unlimited, ultra-realistic HD quality.
          </p>
          <div className="mt-8">
            <Link href={playStoreLink('love_templates_page')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90">
              <PlayStoreIcon />
              Download Free Love Face Swap App
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">Love Templates Collection</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Our love templates collection features beautiful heart-themed designs, rose-filled romantic scenes, and affection-themed face swaps crafted for sharing. Whether it&apos;s Valentine&apos;s Day, an anniversary, or just an everyday expression of love, SwapMyFace has the perfect template.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/templates/couple" className="rounded-xl border border-line bg-surface/50 px-4 py-2 text-sm text-muted hover:border-accent/30 hover:text-accent">Couple Templates &rarr;</Link>
            <Link href="/templates/festival" className="rounded-xl border border-line bg-surface/50 px-4 py-2 text-sm text-muted hover:border-accent/30 hover:text-accent">Festival Templates &rarr;</Link>
            <Link href="/templates/trending" className="rounded-xl border border-line bg-surface/50 px-4 py-2 text-sm text-muted hover:border-accent/30 hover:text-accent">Trending Templates &rarr;</Link>
          </div>
        </div>
      </section>

      <CTABanner campaign="love_templates_page" heading="Share Your Love with SwapMyFace" />
    </>
  );
}
