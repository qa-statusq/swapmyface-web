import type { Metadata } from 'next';
import Link from 'next/link';
import { ar } from '@/data/translations/ar';
import { SITE_URL, playStoreLink } from '@/lib/constants';
import PlayStoreIcon from '@/components/ui/PlayStoreIcon';
import nextDynamic from 'next/dynamic';
import StatsCounter from '@/components/sections/StatsCounter';
import HreflangTags from '@/components/seo/HreflangTags';

const FeatureGrid = nextDynamic(() => import('@/components/sections/FeatureGrid'));
const FAQ = nextDynamic(() => import('@/components/sections/FAQ'));
const CTABanner = nextDynamic(() => import('@/components/sections/CTABanner'));
const FaceSwapShowcase = nextDynamic(() => import('@/components/sections/FaceSwapShowcase'));

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: ar.meta.home.title,
  description: ar.meta.home.description,
  keywords: ['تبديل الوجوه', 'تطبيق تبديل الوجوه', 'تبديل وجوه مجاني', 'AI face swap', 'face swap'],
  alternates: {
    canonical: `${SITE_URL}/ar`,
    languages: {
      en: SITE_URL,
      hi: `${SITE_URL}/hi`,
      ar: `${SITE_URL}/ar`,
      ja: `${SITE_URL}/ja`,
      ko: `${SITE_URL}/ko`,
      vi: `${SITE_URL}/vi`,
      'x-default': SITE_URL,
    },
  },
  openGraph: {
    title: ar.meta.home.title,
    description: ar.meta.home.description,
    locale: 'ar_SA',
    alternateLocale: ['en_US', 'hi_IN', 'ja_JP', 'ko_KR', 'vi_VN'],
  },
};

export default function ArabicHomePage() {
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
              {ar.hero.badge}
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              {ar.hero.title}
              <span className="block gradient-text">{ar.hero.titleHighlight}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
              {ar.hero.subtitle}
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={playStoreLink('ar_homepage_hero')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-xl"
              >
                <PlayStoreIcon />
                {ar.hero.cta}
              </Link>
              <Link
                href="/how-it-works"
                className="inline-flex items-center gap-2 rounded-xl border border-line px-6 py-4 text-base font-medium transition-colors hover:bg-white/5"
              >
                {ar.hero.secondaryCta} &larr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      <StatsCounter translations={ar.stats} />
      <FaceSwapShowcase translations={ar.faceSwapShowcase} />

      {/* Eid Highlight */}
      <section className="border-y border-line bg-bg-soft/50 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              قوالب تبديل الوجوه لكل عيد ومناسبة
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              احتفل بكل مناسبة مع SwapMyFace. قوالب لعيد الفطر، عيد الأضحى، كريسماس، هالوين والمزيد.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Link href="/ar/templates/festival/eid" className="group flex items-start gap-4 rounded-2xl border border-line bg-surface/50 p-5 transition-all hover:border-accent/30">
              <span className="mt-0.5 text-3xl">{'��'}</span>
              <div>
                <h3 className="font-semibold group-hover:text-accent">عيد الفطر وعيد الأضحى</h3>
                <p className="mt-1 text-sm text-muted">قوالب أنيقة للاحتفال بالعيد</p>
              </div>
            </Link>
            <Link href="/templates/festival/christmas" className="group flex items-start gap-4 rounded-2xl border border-line bg-surface/50 p-5 transition-all hover:border-accent/30">
              <span className="mt-0.5 text-3xl">{'��'}</span>
              <div>
                <h3 className="font-semibold group-hover:text-accent">كريسماس</h3>
                <p className="mt-1 text-sm text-muted">قوالب عيد الميلاد والشتاء</p>
              </div>
            </Link>
            <Link href="/templates/festival/new-year" className="group flex items-start gap-4 rounded-2xl border border-line bg-surface/50 p-5 transition-all hover:border-accent/30">
              <span className="mt-0.5 text-3xl">{'��'}</span>
              <div>
                <h3 className="font-semibold group-hover:text-accent">رأس السنة</h3>
                <p className="mt-1 text-sm text-muted">قوالب احتفال بالعام الجديد</p>
              </div>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link href="/ar/templates/festival" className="inline-flex items-center gap-2 rounded-xl bg-accent/10 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/20">
              &larr; عرض جميع قوالب الأعياد
            </Link>
          </div>
        </div>
      </section>

      <FeatureGrid translations={ar.features} />
      <FAQ items={ar.faq} heading={ar.sections.faq} />
      <CTABanner campaign="ar_homepage_bottom" heading={ar.sections.download} subtext={ar.sections.downloadSubtitle} />
    </>
  );
}
