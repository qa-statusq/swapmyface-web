import type { Metadata } from 'next';
import Link from 'next/link';
import { hi } from '@/data/translations/hi';
import { SITE_URL, playStoreLink } from '@/lib/constants';
import StatsCounter from '@/components/sections/StatsCounter';
import HowItWorks from '@/components/sections/HowItWorks';
import FeatureGrid from '@/components/sections/FeatureGrid';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import HreflangTags from '@/components/seo/HreflangTags';
import { FESTIVALS } from '@/data/festivals';

export const metadata: Metadata = {
  title: hi.meta.home.title,
  description: hi.meta.home.description,
  alternates: {
    canonical: `${SITE_URL}/hi`,
    languages: {
      en: SITE_URL,
      hi: `${SITE_URL}/hi`,
      ar: `${SITE_URL}/ar`,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    title: hi.meta.home.title,
    description: hi.meta.home.description,
    locale: 'hi_IN',
    alternateLocale: ['en_US', 'ar_SA'],
  },
};

const hindiFestivals = FESTIVALS.filter((f) =>
  ['diwali', 'holi', 'navratri', 'ganesh-chaturthi', 'raksha-bandhan', 'durga-puja'].includes(f.slug)
);

export default function HindiHomePage() {
  return (
    <>
      <HreflangTags path="/" />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/8 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
              {hi.hero.badge}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {hi.hero.title}
              <span className="block gradient-text">{hi.hero.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
              {hi.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={playStoreLink('hi_homepage_hero')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-xl"
              >
                {hi.hero.cta}
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-line px-6 py-4 text-base font-medium transition-colors hover:bg-white/5"
              >
                {hi.hero.secondaryCta} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StatsCounter translations={hi.stats} />
      <HowItWorks translations={hi.howItWorks} />

      {/* Festival Section - Hindi focused */}
      <section className="border-y border-line bg-bg-soft/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">{hi.sections.festivals}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">{hi.sections.festivalsSubtitle}</p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hindiFestivals.map((festival) => (
              <Link
                key={festival.slug}
                href={`/hi/templates/festival/${festival.slug}`}
                className="group flex items-start gap-4 rounded-2xl border border-line bg-surface/50 p-5 transition-all hover:border-accent/30"
              >
                <span className="mt-0.5 text-3xl">{festival.emoji}</span>
                <div>
                  <h3 className="font-semibold group-hover:text-accent transition-colors">
                    {festival.name} फेस स्वैप
                  </h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed">{festival.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/hi/templates/festival" className="inline-flex items-center gap-2 rounded-xl bg-accent/10 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/20">
              सभी त्योहार टेम्प्लेट्स देखें &rarr;
            </Link>
          </div>
        </div>
      </section>

      <FeatureGrid translations={hi.features} />
      <FAQ items={hi.faq} heading={hi.sections.faq} />
      <CTABanner campaign="hi_homepage_bottom" heading={hi.sections.download} subtext={hi.sections.downloadSubtitle} />
    </>
  );
}
