import type { Metadata } from 'next';
import Link from 'next/link';
import { hi } from '@/data/translations/hi';
import { SITE_URL, playStoreLink } from '@/lib/constants';
import nextDynamic from 'next/dynamic';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const FAQ = nextDynamic(() => import('@/components/sections/FAQ'));
const CTABanner = nextDynamic(() => import('@/components/sections/CTABanner'));
const HowItWorks = nextDynamic(() => import('@/components/sections/HowItWorks'));
import HreflangTags from '@/components/seo/HreflangTags';
import PlayStoreIcon from '@/components/ui/PlayStoreIcon';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: hi.meta.faceSwap.title,
  description: hi.meta.faceSwap.description,
  keywords: ['face swap', 'face swap app', 'फेस स्वैप', 'फेस स्वैप ऐप', 'ai face swap'],
  alternates: {
    canonical: `${SITE_URL}/hi/face-swap`,
    languages: {
      en: `${SITE_URL}/face-swap`,
      hi: `${SITE_URL}/hi/face-swap`,
      ar: `${SITE_URL}/ar/face-swap`,
      ja: `${SITE_URL}/ja/face-swap`,
      ko: `${SITE_URL}/ko/face-swap`,
      vi: `${SITE_URL}/vi/face-swap`,
      'x-default': `${SITE_URL}/face-swap`,
    },
  },
  openGraph: {
    title: hi.meta.faceSwap.title,
    description: hi.meta.faceSwap.description,
    locale: 'hi_IN',
    alternateLocale: ['en_US', 'ar_SA', 'ja_JP', 'ko_KR', 'vi_VN'],
  },
};

export default function HindiFaceSwapPage() {
  return (
    <>
      <HreflangTags path="/face-swap" />

      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'होम', href: '/hi' },
            { label: 'फेस स्वैप', href: '/hi/face-swap' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="hero-heading text-4xl font-extrabold leading-tight sm:text-5xl">
            फेस स्वैप ऐप &mdash; AI से फ्री फेस स्वैप, अनलिमिटेड
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            {hi.meta.faceSwap.description}
          </p>
          <div className="mt-8">
            <Link
              href={playStoreLink('hi_face_swap_page')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90"
            >
              <PlayStoreIcon />
              फ्री फेस स्वैप ऐप डाउनलोड करें
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="reveal text-3xl font-bold">फेस स्वैप ऐप क्या है?</h2>
          <p className="mt-4 text-muted leading-relaxed">
            फेस स्वैप ऐप आर्टिफिशियल इंटेलिजेंस का उपयोग करके एक फोटो में एक चेहरे को दूसरे से बदल देता है। SwapMyFace सबसे अच्छा फ्री फेस स्वैप ऐप है जिसमें 500+ टेम्प्लेट्स और कस्टम फोटो स्वैप की सुविधा है, जो अल्ट्रा-रियलिस्टिक फुल HD रिजल्ट्स देता है।
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            त्योहारों, कपल्स, बच्चों और ट्रेंडिंग कैटेगरीज़ में 500+ प्रोफेशनली डिज़ाइन किए गए टेम्प्लेट्स ब्राउज़ करें। हर स्वैप फ्री, अनलिमिटेड, और फुल HD क्वालिटी में।
          </p>
        </div>
      </section>

      <HowItWorks translations={hi.howItWorks} />

      <section className="border-y border-line bg-bg-soft/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="reveal text-3xl font-bold">SwapMyFace सबसे अच्छा फेस स्वैप ऐप क्यों है</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 stagger">
            {[
              { title: '100% फ्री, हमेशा', desc: 'कोई सब्सक्रिप्शन नहीं, कोई क्रेडिट्स नहीं। हर फीचर बिल्कुल फ्री।' },
              { title: 'अनलिमिटेड स्वैप्स', desc: 'जितने चाहें उतने स्वैप करें, किसी भी समय। कोई सीमा नहीं।' },
              { title: '500+ टेम्प्लेट्स', desc: 'त्योहार, कपल, बच्चे, प्रेम और ट्रेंडिंग कैटेगरीज़।' },
              { title: 'रोज़ नए टेम्प्लेट्स', desc: 'हर दिन नए टेम्प्लेट्स जोड़े जाते हैं। हमेशा कुछ नया।' },
            ].map((f) => (
              <div key={f.title} className="reveal-scale card-hover rounded-2xl border border-line bg-surface/50 p-5">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={hi.faq} heading={hi.sections.faq} />
      <CTABanner campaign="hi_face_swap_page" heading={hi.sections.download} subtext={hi.sections.downloadSubtitle} />
    </>
  );
}
