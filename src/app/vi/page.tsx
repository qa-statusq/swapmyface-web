import type { Metadata } from 'next';
import { vi } from '@/data/translations/vi';
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
  title: vi.meta.home.title,
  description: vi.meta.home.description,
  keywords: ['ghép mặt', 'ghép mặt AI', 'ứng dụng ghép mặt', 'face swap miễn phí', 'face swap'],
  alternates: {
    canonical: `${SITE_URL}/vi`,
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
    title: vi.meta.home.title,
    description: vi.meta.home.description,
    locale: 'vi_VN',
    alternateLocale: ['en_US', 'hi_IN', 'ar_SA', 'ja_JP', 'ko_KR'],
  },
};

export default function VietnameseHomePage() {
  return (
    <>
      <HreflangTags path="/" />
      <LocalizedHero {...vi.hero} campaign="vi_homepage_hero" />
      <StatsCounter translations={vi.stats} />
      <FaceSwapShowcase translations={vi.faceSwapShowcase} />
      <HowItWorks translations={vi.howItWorks} />
      <FeatureGrid translations={vi.features} />
      <FAQ items={vi.faq} heading={vi.sections.faq} />
      <CTABanner campaign="vi_homepage_bottom" heading={vi.sections.download} subtext={vi.sections.downloadSubtitle} />
    </>
  );
}
