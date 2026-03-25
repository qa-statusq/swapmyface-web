import type { Metadata } from 'next';
import { vi } from '@/data/translations/vi';
import { SITE_URL } from '@/lib/constants';
import LocalizedHero from '@/components/sections/LocalizedHero';
import StatsCounter from '@/components/sections/StatsCounter';
import HowItWorks from '@/components/sections/HowItWorks';
import FeatureGrid from '@/components/sections/FeatureGrid';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: vi.meta.home.title,
  description: vi.meta.home.description,
  keywords: ['ghép mặt', 'ghép mặt AI', 'ứng dụng ghép mặt', 'face swap miễn phí', 'face swap'],
  alternates: {
    canonical: `${SITE_URL}/vi`,
    languages: { en: SITE_URL, vi: `${SITE_URL}/vi`, 'x-default': SITE_URL },
  },
  openGraph: { title: vi.meta.home.title, description: vi.meta.home.description, locale: 'vi_VN' },
};

export default function VietnameseHomePage() {
  return (
    <>
      <LocalizedHero {...vi.hero} campaign="vi_homepage_hero" />
      <StatsCounter translations={vi.stats} />
      <HowItWorks translations={vi.howItWorks} />
      <FeatureGrid translations={vi.features} />
      <FAQ items={vi.faq} heading={vi.sections.faq} />
      <CTABanner campaign="vi_homepage_bottom" heading={vi.sections.download} subtext={vi.sections.downloadSubtitle} />
    </>
  );
}
