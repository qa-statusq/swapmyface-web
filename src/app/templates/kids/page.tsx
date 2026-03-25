import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { playStoreLink } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Kids Face Swap Templates \u2014 Safe & Fun Face Swaps for Children',
  description:
    'Fun, safe kids face swap templates \u2014 superheroes, cartoons, fairy tales & more. SwapMyFace is free, unlimited, and designed for the whole family. Download free.',
  path: '/templates/kids',
  keywords: ['kids face swap', 'children face swap', 'family face swap', 'fun face swap', 'face swap for kids'],
});

export default function KidsTemplatesPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Templates', href: '/templates' },
            { label: 'Kids', href: '/templates/kids' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Kids Face Swap Templates &mdash; Safe, Fun &amp; Free
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            Make your little ones laugh and feel like superstars with SwapMyFace! Adorable, fun, and safe face swap templates designed for children. Superheroes, cartoon characters, fairy tales, festive outfits, and more. All completely free.
          </p>
          <div className="mt-8">
            <Link href={playStoreLink('kids_templates_page')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90">
              Download Free Kids Face Swap App
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">Kids Templates Your Children Will Love</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'Superhero Templates', desc: 'Put your child\'s face onto their favourite superhero. Action poses, costumes, and heroic scenes.' },
              { title: 'Cartoon & Characters', desc: 'Beloved cartoon characters, animated figures, and fun illustrated designs.' },
              { title: 'Fairy Tale & Fantasy', desc: 'Princes, princesses, wizards, fairies, dragons, and magical fantasy scenes.' },
              { title: 'Kids Festival Templates', desc: 'Special kids versions of Diwali, Christmas, Eid, Halloween and more.' },
              { title: 'Birthday & Celebration', desc: 'Birthday celebration face swap templates with balloons, cakes, and party hats.' },
              { title: 'Funny & Playful', desc: 'Silly, playful designs guaranteed to make the entire family laugh.' },
            ].map((t) => (
              <div key={t.title} className="rounded-2xl border border-line bg-surface/50 p-5">
                <h3 className="font-semibold">{t.title}</h3>
                <p className="mt-1 text-sm text-muted">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner campaign="kids_templates_page" heading="Safe, Fun, Free &mdash; Face Swaps for the Whole Family" />
    </>
  );
}
