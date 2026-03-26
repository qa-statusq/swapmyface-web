import type { Metadata } from 'next';
import nextDynamic from 'next/dynamic';
import Hero from '@/components/sections/Hero';
import StatsCounter from '@/components/sections/StatsCounter';
import { HOME_FAQ } from '@/data/faq';
import { SITE_URL } from '@/lib/constants';
import HreflangTags from '@/components/seo/HreflangTags';

const FaceSwapShowcase = nextDynamic(() => import('@/components/sections/FaceSwapShowcase'));
const HowItWorks = nextDynamic(() => import('@/components/sections/HowItWorks'));
const TemplateShowcase = nextDynamic(() => import('@/components/sections/TemplateShowcase'));
const FeatureGrid = nextDynamic(() => import('@/components/sections/FeatureGrid'));
const FestivalHighlight = nextDynamic(() => import('@/components/sections/FestivalHighlight'));
const Testimonials = nextDynamic(() => import('@/components/sections/Testimonials'));
const FAQ = nextDynamic(() => import('@/components/sections/FAQ'));
const CTABanner = nextDynamic(() => import('@/components/sections/CTABanner'));

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'SwapMyFace - Free AI Face Swap App | 500+ Templates',
  description:
    'SwapMyFace is the #1 free AI face swap app with 500+ templates for festivals, couples, kids & trending designs. Unlimited swaps, ultra-realistic full HD results. No subscription. Download free on Google Play.',
  keywords: ['face swap app', 'free face swap', 'AI face swap', 'face swap templates', 'face swap photo editor'],
  alternates: {
    canonical: SITE_URL,
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
    title: 'SwapMyFace - Best Free AI Face Swap App | 500+ Templates',
    description: 'SwapMyFace is the #1 free AI face swap app with 500+ templates. Unlimited swaps, ultra-realistic full HD results. Download free on Google Play.',
    locale: 'en_US',
    alternateLocale: ['hi_IN', 'ar_SA', 'ja_JP', 'ko_KR', 'vi_VN'],
  },
};

export default function HomePage() {
  return (
    <>
      <HreflangTags path="/" />
      <Hero />
      <StatsCounter />
      <FaceSwapShowcase />
      <HowItWorks />
      <TemplateShowcase />
      <FeatureGrid />
      <FestivalHighlight />
      <Testimonials />
      <FAQ items={HOME_FAQ} />
      <CTABanner campaign="homepage_bottom" />
    </>
  );
}
