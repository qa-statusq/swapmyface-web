import type { Metadata } from 'next';
import { ko } from '@/data/translations/ko';
import { SITE_URL } from '@/lib/constants';
import LocalizedHero from '@/components/sections/LocalizedHero';
import StatsCounter from '@/components/sections/StatsCounter';
import HowItWorks from '@/components/sections/HowItWorks';
import FeatureGrid from '@/components/sections/FeatureGrid';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: ko.meta.home.title,
  description: ko.meta.home.description,
  keywords: ['얼굴 교체', '얼굴 교체 앱', 'AI 얼굴 교체', '얼굴 합성', 'face swap'],
  alternates: {
    canonical: `${SITE_URL}/ko`,
    languages: { en: SITE_URL, ko: `${SITE_URL}/ko`, 'x-default': SITE_URL },
  },
  openGraph: { title: ko.meta.home.title, description: ko.meta.home.description, locale: 'ko_KR' },
};

export default function KoreanHomePage() {
  return (
    <>
      <LocalizedHero {...ko.hero} campaign="ko_homepage_hero" />
      <StatsCounter translations={ko.stats} />
      <HowItWorks translations={ko.howItWorks} />
      <FeatureGrid translations={ko.features} />
      <FAQ items={ko.faq} heading={ko.sections.faq} />
      <CTABanner campaign="ko_homepage_bottom" heading={ko.sections.download} subtext={ko.sections.downloadSubtitle} />
    </>
  );
}
