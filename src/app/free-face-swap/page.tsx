import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { FREE_FACE_SWAP_FAQ } from '@/data/faq';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { playStoreLink } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Free Face Swap \u2014 100% Free AI Face Swap App, No Cost Ever',
  description:
    'SwapMyFace is genuinely, completely, and permanently 100% free. No tricks, no trials, no premium tiers. Unlimited face swaps, 500+ templates, full HD results. Zero cost forever.',
  path: '/free-face-swap',
  keywords: [
    'free face swap', 'free face swap app', 'face swap free', 'unlimited face swap',
    'best free face swap app', 'face swap no cost', 'face swap without payment',
  ],
});

export default function FreeFaceSwapPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Free Face Swap', href: '/free-face-swap' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Truly Free Face Swap &mdash; Unlimited Forever, Zero Cost
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            SwapMyFace is the only AI face swap app that is genuinely, completely, and permanently 100% free. No tricks, no trials, no premium tiers, no credits system, no subscriptions, and absolutely no hidden charges. Unlimited face swaps for every single user, forever.
          </p>
          <div className="mt-8">
            <Link
              href={playStoreLink('free_face_swap_page')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90"
            >
              Download Free &mdash; Zero Cost Forever
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">What Free Actually Means in SwapMyFace</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Most face swap apps say &ldquo;free&rdquo; but mean free to download only. In SwapMyFace, free means truly free in every way:
          </p>
          <ul className="mt-6 space-y-3 text-muted">
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> <strong className="text-text">Unlimited swaps</strong> &mdash; swap as many faces as you want, any time, every day, no daily caps</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> <strong className="text-text">Zero cost</strong> &mdash; not a single rupee, dollar, euro, or any other currency is ever charged</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> <strong className="text-text">No subscription</strong> &mdash; no weekly, monthly, or yearly payment plan of any kind</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> <strong className="text-text">No credits system</strong> &mdash; no tokens to buy, no coins to earn, no points to spend</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> <strong className="text-text">No account required</strong> &mdash; start swapping faces immediately after install</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> <strong className="text-text">Full HD quality</strong> &mdash; every swap result is high resolution, always, at no extra cost</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> <strong className="text-text">All 500+ templates free</strong> &mdash; every template in the entire library is always free</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> <strong className="text-text">New daily templates free</strong> &mdash; every new template added is always and forever free</li>
          </ul>
          <p className="mt-6 text-muted leading-relaxed">
            That is what truly free means. No asterisk. No fine print. That is exactly what SwapMyFace delivers to every user.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-bg-soft/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">500+ Free Templates Across Every Category</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Every template in our massive library is completely free to use. All 500+ templates across festivals, couples, love, kids, and trending categories. No premium tier, no locked content.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link href="/templates/festival" className="rounded-xl border border-line bg-surface/50 p-4 text-sm text-muted hover:border-accent/30">Festival Templates &mdash; Diwali, Christmas, Eid & hundreds more, all free</Link>
            <Link href="/templates/couple" className="rounded-xl border border-line bg-surface/50 p-4 text-sm text-muted hover:border-accent/30">Couple Templates &mdash; Romantic designs, always free</Link>
            <Link href="/templates/kids" className="rounded-xl border border-line bg-surface/50 p-4 text-sm text-muted hover:border-accent/30">Kids Templates &mdash; Safe, fun characters, completely free</Link>
            <Link href="/templates/trending" className="rounded-xl border border-line bg-surface/50 p-4 text-sm text-muted hover:border-accent/30">Trending Templates &mdash; Viral designs, updated daily, free</Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">Free Does Not Mean Low Quality</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Just because SwapMyFace is free does not mean it compromises on results. Our deep AI engine delivers full HD resolution on every single swap, ultra-realistic face blending, natural skin tone matching, and seamless edge detection. Free and professional quality at the same time.
          </p>
        </div>
      </section>

      <FAQ items={FREE_FACE_SWAP_FAQ} heading="Free Face Swap FAQ" />
      <CTABanner
        campaign="free_face_swap_page"
        heading="Download SwapMyFace &mdash; Genuinely Free, Forever"
        subtext="No subscription. No credits. No hidden fees. 500+ templates. Unlimited swaps. Full HD quality. Zero cost. Always."
      />
    </>
  );
}
