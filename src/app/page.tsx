import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import StatsCounter from '@/components/sections/StatsCounter';
import HowItWorks from '@/components/sections/HowItWorks';
import TemplateShowcase from '@/components/sections/TemplateShowcase';
import FeatureGrid from '@/components/sections/FeatureGrid';
import FestivalHighlight from '@/components/sections/FestivalHighlight';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import { HOME_FAQ } from '@/data/faq';
import { SITE_URL } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'SwapMyFace - Best Free AI Face Swap App | 500+ Templates | Download Free',
  description:
    'SwapMyFace is the #1 free AI face swap app with 500+ templates for festivals, couples, kids & trending designs. Unlimited swaps, ultra-realistic full HD results. No subscription. Download free on Google Play.',
  alternates: { canonical: SITE_URL },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsCounter />
      <HowItWorks />
      <TemplateShowcase />
      <FeatureGrid />
      <FestivalHighlight />
      <FAQ items={HOME_FAQ} />
      <CTABanner campaign="homepage_bottom" />
    </>
  );
}
