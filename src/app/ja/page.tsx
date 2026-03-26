import type { Metadata } from 'next';
import { ja } from '@/data/translations/ja';
import { SITE_URL } from '@/lib/constants';
import nextDynamic from 'next/dynamic';
import LocalizedHero from '@/components/sections/LocalizedHero';
import StatsCounter from '@/components/sections/StatsCounter';
import HreflangTags from '@/components/seo/HreflangTags';

const HowItWorks = nextDynamic(() => import('@/components/sections/HowItWorks'));
const FeatureGrid = nextDynamic(() => import('@/components/sections/FeatureGrid'));
const FAQ = nextDynamic(() => import('@/components/sections/FAQ'));
const CTABanner = nextDynamic(() => import('@/components/sections/CTABanner'));
const FaceSwapShowcase = nextDynamic(() => import('@/components/sections/FaceSwapShowcase'));

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: ja.meta.home.title,
  description: ja.meta.home.description,
  keywords: ['顔変換', '顔変換アプリ', 'AI顔変換', '顔入れ替え', 'face swap'],
  alternates: {
    canonical: `${SITE_URL}/ja`,
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
    title: ja.meta.home.title,
    description: ja.meta.home.description,
    locale: 'ja_JP',
    alternateLocale: ['en_US', 'hi_IN', 'ar_SA', 'ko_KR', 'vi_VN'],
  },
};

export default function JapaneseHomePage() {
  return (
    <>
      <HreflangTags path="/" />
      <LocalizedHero {...ja.hero} campaign="ja_homepage_hero" />
      <StatsCounter translations={ja.stats} />
      <FaceSwapShowcase translations={ja.faceSwapShowcase} />
      <HowItWorks translations={ja.howItWorks} />
      <FeatureGrid translations={ja.features} />
      <FAQ items={ja.faq} heading={ja.sections.faq} />
      <CTABanner campaign="ja_homepage_bottom" heading={ja.sections.download} subtext={ja.sections.downloadSubtitle} />
    </>
  );
}
