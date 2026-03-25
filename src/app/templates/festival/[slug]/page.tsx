import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FESTIVALS, getFestivalBySlug } from '@/data/festivals';
import { SITE_URL, playStoreLink } from '@/lib/constants';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export function generateStaticParams() {
  return FESTIVALS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const festival = getFestivalBySlug(slug);
  if (!festival) return {};

  return {
    title: `${festival.name} Face Swap Templates \u2014 Free AI ${festival.name} Photo Face Swap`,
    description: `Celebrate ${festival.name} with stunning face swap templates! ${festival.shortDescription} Free, unlimited, HD quality. Download SwapMyFace.`,
    keywords: festival.keywords,
    alternates: { canonical: `${SITE_URL}/templates/festival/${slug}` },
    openGraph: {
      title: `${festival.name} Face Swap Templates \u2014 Free AI ${festival.name} Face Swap`,
      description: `Celebrate ${festival.name} with SwapMyFace! Beautiful ${festival.name} face swap templates. Free & unlimited.`,
      url: `${SITE_URL}/templates/festival/${slug}`,
      siteName: 'SwapMyFace',
      type: 'website',
    },
  };
}

export default async function FestivalPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const festival = getFestivalBySlug(slug);
  if (!festival) notFound();

  const relatedFestivals = festival.relatedFestivals
    .map((s) => getFestivalBySlug(s))
    .filter(Boolean);

  const faqItems = [
    {
      question: `Is ${festival.name} face swap free?`,
      answer: `Yes, all ${festival.name} face swap templates in SwapMyFace are 100% free. No subscription, no credits, no cost. Unlimited ${festival.name} face swaps, always free.`,
    },
    {
      question: `How do I create a ${festival.name} face swap?`,
      answer: `Open SwapMyFace, browse the ${festival.name} templates, select one you like, upload your photo, and tap SWAP. Our AI creates an ultra-realistic ${festival.name} face swap in seconds. Save and share the HD result instantly.`,
    },
    {
      question: `Are new ${festival.name} templates added?`,
      answer: `Yes, our team adds fresh ${festival.name} templates regularly, especially as the celebration approaches. There is always something new and exciting for ${festival.name}.`,
    },
    {
      question: `What quality are ${festival.name} face swap results?`,
      answer: `Every ${festival.name} face swap is processed by our deep AI engine and delivered in ultra-realistic full HD quality with natural skin tone matching, accurate face alignment, and seamless edge blending.`,
    },
  ];

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Templates', href: '/templates' },
            { label: 'Festival', href: '/templates/festival' },
            { label: festival.name, href: `/templates/festival/${slug}` },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-5xl">{festival.emoji}</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            {festival.name} Face Swap Templates
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            {festival.description}
          </p>
          <div className="mt-8">
            <Link
              href={playStoreLink(`festival_${slug}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90"
            >
              Download Free {festival.name} Face Swap App
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">How to Create {festival.name} Face Swaps</h2>
          <ol className="mt-6 space-y-3 text-muted">
            <li className="flex gap-3"><span className="font-bold text-accent">1.</span> Browse {festival.name} templates in SwapMyFace</li>
            <li className="flex gap-3"><span className="font-bold text-accent">2.</span> Select your favourite {festival.name} template design</li>
            <li className="flex gap-3"><span className="font-bold text-accent">3.</span> Upload your photo with a single tap</li>
            <li className="flex gap-3"><span className="font-bold text-accent">4.</span> Tap SWAP &mdash; AI creates a perfect result in seconds</li>
            <li className="flex gap-3"><span className="font-bold text-accent">5.</span> Save your full HD result and share with family and friends</li>
          </ol>
          <p className="mt-6 text-muted leading-relaxed">
            You can also upload your own target and source photos for fully custom {festival.name} face swaps. Our AI automatically handles face alignment, skin tone matching, and natural blending for perfect results every time.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-bg-soft/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">Why SwapMyFace for {festival.name}</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-line bg-surface/50 p-5">
              <h3 className="font-semibold">Dedicated {festival.name} Templates</h3>
              <p className="mt-1 text-sm text-muted">Beautiful designs crafted specifically for {festival.name} celebrations.</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface/50 p-5">
              <h3 className="font-semibold">Ultra-Realistic HD Quality</h3>
              <p className="mt-1 text-sm text-muted">Every {festival.name} face swap is full HD with natural blending.</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface/50 p-5">
              <h3 className="font-semibold">100% Free, Always</h3>
              <p className="mt-1 text-sm text-muted">All {festival.name} templates are free. No cost, no subscription.</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface/50 p-5">
              <h3 className="font-semibold">New Templates Added</h3>
              <p className="mt-1 text-sm text-muted">Fresh {festival.name} designs added regularly for every celebration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Festivals */}
      {relatedFestivals.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <h2 className="mb-6 text-2xl font-bold">More Festival Templates</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {relatedFestivals.map((rf) => rf && (
                <Link
                  key={rf.slug}
                  href={`/templates/festival/${rf.slug}`}
                  className="group flex items-center gap-3 rounded-xl border border-line bg-surface/50 p-4 transition-all hover:border-accent/30"
                >
                  <span className="text-2xl">{rf.emoji}</span>
                  <div>
                    <span className="font-medium group-hover:text-accent transition-colors">{rf.name} Face Swap</span>
                    <p className="text-xs text-muted">{rf.shortDescription}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FAQ items={faqItems} heading={`${festival.name} Face Swap FAQ`} />
      <CTABanner campaign={`festival_${slug}_page`} heading={`Celebrate ${festival.name} with SwapMyFace`} />
    </>
  );
}
