import type { Metadata } from 'next';
import { ko } from '@/data/translations/ko';
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
  title: ko.meta.home.title,
  description: ko.meta.home.description,
  keywords: ['얼굴 교체', '얼굴 교체 앱', 'AI 얼굴 교체', '얼굴 합성', 'face swap'],
  alternates: {
    canonical: `${SITE_URL}/ko`,
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
    title: ko.meta.home.title,
    description: ko.meta.home.description,
    locale: 'ko_KR',
    alternateLocale: ['en_US', 'hi_IN', 'ar_SA', 'ja_JP', 'vi_VN'],
  },
};

export default function KoreanHomePage() {
  return (
    <>
      <HreflangTags path="/" />
      <LocalizedHero {...ko.hero} campaign="ko_homepage_hero" />
      <StatsCounter translations={ko.stats} />
      <FaceSwapShowcase translations={ko.faceSwapShowcase} />
      <HowItWorks translations={ko.howItWorks} />
      <FeatureGrid translations={ko.features} />
      <FAQ items={ko.faq} heading={ko.sections.faq} />
      <CTABanner campaign="ko_homepage_bottom" heading={ko.sections.download} subtext={ko.sections.downloadSubtitle} />
    </>
  );
}
