import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { playStoreLink } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Couple Face Swap Templates \u2014 Romantic & Love Face Swaps Free',
  description:
    'Create romantic couple face swaps with SwapMyFace. Beautiful couple & love templates for anniversaries, Valentine\'s Day, and special moments. Free, unlimited, HD quality.',
  path: '/templates/couple',
  keywords: ['couple face swap', 'love face swap', 'valentine face swap', 'romantic face swap', 'anniversary face swap'],
});

export default function CoupleTemplatesPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Templates', href: '/templates' },
            { label: 'Couple', href: '/templates/couple' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Couple &amp; Love Face Swap Templates
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            Create beautiful, romantic couple face swaps with SwapMyFace. Dedicated templates for anniversaries, Valentine&apos;s Day, weddings, and every special moment together. Completely free, unlimited swaps, ultra-realistic full HD quality.
          </p>
          <div className="mt-8">
            <Link href={playStoreLink('couple_templates_page')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90">
              Download Free Couple Face Swap App
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">Templates for Every Romantic Moment</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Couple Face Swap', desc: 'Adorable and romantic designs made for two. Perfect for sharing on Instagram, WhatsApp, and Facebook.' },
              { title: 'Valentine\'s Day', desc: 'Heart-themed, rose-filled, and romantically designed templates for Valentine\'s Day and love celebrations.' },
              { title: 'Anniversary & Wedding', desc: 'Milestone anniversary designs, wedding celebration scenes, and engagement themed templates.' },
              { title: 'Trending Couple', desc: 'The most popular and viral couple face swap designs, updated daily by our team.' },
              { title: 'Festival Couple', desc: 'Special couple versions of Diwali, Christmas, Eid, New Year and more festival templates.' },
              { title: 'Love & Romantic', desc: 'Beautiful love and affection themed designs made for sharing with someone special.' },
            ].map((t) => (
              <div key={t.title} className="rounded-2xl border border-line bg-surface/50 p-5">
                <h3 className="font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner campaign="couple_templates_page" heading="Make Every Moment Together More Beautiful" />
    </>
  );
}
