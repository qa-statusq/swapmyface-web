import type { Metadata } from 'next';
import Link from 'next/link';
import { hi } from '@/data/translations/hi';
import { SITE_URL, playStoreLink } from '@/lib/constants';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import HreflangTags from '@/components/seo/HreflangTags';

export const metadata: Metadata = {
  title: hi.meta.holi.title,
  description: hi.meta.holi.description,
  keywords: ['होली फेस स्वैप', 'holi face swap', 'होली फोटो', 'holi photo editor'],
  alternates: {
    canonical: `${SITE_URL}/hi/templates/festival/holi`,
    languages: {
      en: `${SITE_URL}/templates/festival/holi`,
      hi: `${SITE_URL}/hi/templates/festival/holi`,
      'x-default': `${SITE_URL}/templates/festival/holi`,
    },
  },
};

const holiFaq = [
  {
    question: 'क्या होली फेस स्वैप फ्री है?',
    answer: 'हाँ, SwapMyFace में सभी होली फेस स्वैप टेम्प्लेट्स 100% फ्री हैं। अनलिमिटेड होली फेस स्वैप, हमेशा फ्री।',
  },
  {
    question: 'होली फेस स्वैप कैसे बनाएं?',
    answer: 'SwapMyFace खोलें, होली टेम्प्लेट्स ब्राउज़ करें, डिज़ाइन चुनें, फोटो अपलोड करें और SWAP टैप करें। सेकंडों में HD रिजल्ट।',
  },
];

export default function HindiHoliPage() {
  return (
    <>
      <HreflangTags path="/templates/festival/holi" />

      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'होम', href: '/hi' },
            { label: 'त्योहार', href: '/hi/templates/festival' },
            { label: 'होली', href: '/hi/templates/festival/holi' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-5xl">{'��'}</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            होली फेस स्वैप टेम्प्लेट्स
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            रंगों के त्योहार को वाइब्रेंट होली फेस स्वैप टेम्प्लेट्स के साथ मनाएं! रंगीन पाउडर, खुशी स्प्लैश, और त्योहारी ग्रूप डिज़ाइन। फ्री, अनलिमिटेड, फुल HD।
          </p>
          <div className="mt-8">
            <Link
              href={playStoreLink('hi_holi_page')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90"
            >
              फ्री होली फेस स्वैप ऐप डाउनलोड करें
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-bg-soft/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">और त्योहार टेम्प्लेट्स</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link href="/hi/templates/festival/diwali" className="group flex items-center gap-3 rounded-xl border border-line bg-surface/50 p-4 hover:border-accent/30">
              <span className="text-2xl">{'��'}</span>
              <span className="font-medium group-hover:text-accent">दिवाली फेस स्वैप</span>
            </Link>
            <Link href="/templates/festival/navratri" className="group flex items-center gap-3 rounded-xl border border-line bg-surface/50 p-4 hover:border-accent/30">
              <span className="text-2xl">{'��'}</span>
              <span className="font-medium group-hover:text-accent">नवरात्रि फेस स्वैप</span>
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={holiFaq} heading="होली फेस स्वैप FAQ" />
      <CTABanner campaign="hi_holi_page" heading="SwapMyFace के साथ होली मनाएं" subtext={hi.sections.downloadSubtitle} />
    </>
  );
}
