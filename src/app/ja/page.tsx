import type { Metadata } from 'next';
import { ja } from '@/data/translations/ja';
import { SITE_URL } from '@/lib/constants';
import LocalizedHero from '@/components/sections/LocalizedHero';
import StatsCounter from '@/components/sections/StatsCounter';
import HowItWorks from '@/components/sections/HowItWorks';
import FeatureGrid from '@/components/sections/FeatureGrid';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';

export const metadata: Metadata = {
  title: ja.meta.home.title,
  description: ja.meta.home.description,
  keywords: ['顔変換', '顔変換アプリ', 'AI顔変換', '顔入れ替え', 'face swap'],
  alternates: {
    canonical: `${SITE_URL}/ja`,
    languages: { en: SITE_URL, ja: `${SITE_URL}/ja`, 'x-default': SITE_URL },
  },
  openGraph: {
    title: ja.meta.home.title,
    description: ja.meta.home.description,
    locale: 'ja_JP',
  },
};

export default function JapaneseHomePage() {
  return (
    <>
      <LocalizedHero {...ja.hero} campaign="ja_homepage_hero" />
      <StatsCounter translations={ja.stats} />
      <HowItWorks translations={ja.howItWorks} />
      <FeatureGrid translations={ja.features} />
      <FAQ items={ja.faq} heading={ja.sections.faq} />
      <CTABanner campaign="ja_homepage_bottom" heading={ja.sections.download} subtext={ja.sections.downloadSubtitle} />
    </>
  );
}
