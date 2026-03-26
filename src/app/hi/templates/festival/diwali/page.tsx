import type { Metadata } from 'next';
import Link from 'next/link';
import { hi } from '@/data/translations/hi';
import { SITE_URL, playStoreLink } from '@/lib/constants';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import HreflangTags from '@/components/seo/HreflangTags';
import PlayStoreIcon from '@/components/ui/PlayStoreIcon';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: hi.meta.diwali!.title,
  description: hi.meta.diwali!.description,
  keywords: ['दिवाली फेस स्वैप', 'diwali face swap', 'दिवाली फोटो', 'diwali photo editor', 'दिवाली टेम्प्लेट'],
  alternates: {
    canonical: `${SITE_URL}/hi/templates/festival/diwali`,
    languages: {
      en: `${SITE_URL}/templates/festival/diwali`,
      hi: `${SITE_URL}/hi/templates/festival/diwali`,
      'x-default': `${SITE_URL}/templates/festival/diwali`,
    },
  },
};

const diwaliFaq = [
  {
    question: 'क्या दिवाली फेस स्वैप फ्री है?',
    answer: 'हाँ, SwapMyFace में सभी दिवाली फेस स्वैप टेम्प्लेट्स 100% फ्री हैं। कोई सब्सक्रिप्शन नहीं, कोई क्रेडिट्स नहीं। अनलिमिटेड दिवाली फेस स्वैप, हमेशा फ्री।',
  },
  {
    question: 'दिवाली फेस स्वैप कैसे बनाएं?',
    answer: 'SwapMyFace खोलें, दिवाली टेम्प्लेट्स ब्राउज़ करें, अपना पसंदीदा डिज़ाइन चुनें, फोटो अपलोड करें और SWAP टैप करें। AI सेकंडों में रिजल्ट तैयार कर देता है।',
  },
  {
    question: 'क्या नए दिवाली टेम्प्लेट्स जोड़े जाते हैं?',
    answer: 'हाँ, हमारी टीम नियमित रूप से नए दिवाली टेम्प्लेट्स जोड़ती है, खासकर दिवाली के नज़दीक आने पर। हमेशा कुछ नया और रोमांचक।',
  },
];

export default function HindiDiwaliPage() {
  return (
    <>
      <HreflangTags path="/templates/festival/diwali" />

      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'होम', href: '/hi' },
            { label: 'त्योहार', href: '/hi/templates/festival' },
            { label: 'दिवाली', href: '/hi/templates/festival/diwali' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-5xl">{'��'}</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            दिवाली फेस स्वैप टेम्प्लेट्स
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            दीपावली के खूबसूरत फेस स्वैप टेम्प्लेट्स के साथ दिवाली मनाएं! पारंपरिक भारतीय त्योहार वेशभूषा, दीये और रंगोली थीम्ड डिज़ाइन, और सुंदर एथ्निक वियर टेम्प्लेट्स।
          </p>
          <div className="mt-8">
            <Link
              href={playStoreLink('hi_diwali_page')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90"
            >
              <PlayStoreIcon />
              फ्री दिवाली फेस स्वैप ऐप डाउनलोड करें
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">दिवाली फेस स्वैप कैसे बनाएं</h2>
          <ol className="mt-6 space-y-3 text-muted">
            <li className="flex gap-3"><span className="font-bold text-accent">1.</span> SwapMyFace में दिवाली टेम्प्लेट्स ब्राउज़ करें</li>
            <li className="flex gap-3"><span className="font-bold text-accent">2.</span> अपना पसंदीदा दिवाली डिज़ाइन चुनें</li>
            <li className="flex gap-3"><span className="font-bold text-accent">3.</span> अपनी फोटो अपलोड करें</li>
            <li className="flex gap-3"><span className="font-bold text-accent">4.</span> SWAP टैप करें &mdash; AI सेकंडों में रिजल्ट तैयार कर देता है</li>
            <li className="flex gap-3"><span className="font-bold text-accent">5.</span> अपना फुल HD रिजल्ट सेव करें और परिवार और दोस्तों के साथ शेयर करें</li>
          </ol>
        </div>
      </section>

      <section className="border-y border-line bg-bg-soft/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">और त्योहार टेम्प्लेट्स</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link href="/hi/templates/festival/holi" className="group flex items-center gap-3 rounded-xl border border-line bg-surface/50 p-4 transition-all hover:border-accent/30">
              <span className="text-2xl">{'��'}</span>
              <span className="font-medium group-hover:text-accent">होली फेस स्वैप</span>
            </Link>
            <Link href="/templates/festival/navratri" className="group flex items-center gap-3 rounded-xl border border-line bg-surface/50 p-4 transition-all hover:border-accent/30">
              <span className="text-2xl">{'��'}</span>
              <span className="font-medium group-hover:text-accent">नवरात्रि फेस स्वैप</span>
            </Link>
            <Link href="/templates/festival/ganesh-chaturthi" className="group flex items-center gap-3 rounded-xl border border-line bg-surface/50 p-4 transition-all hover:border-accent/30">
              <span className="text-2xl">{'��'}</span>
              <span className="font-medium group-hover:text-accent">गणेश चतुर्थी फेस स्वैप</span>
            </Link>
            <Link href="/templates/festival/raksha-bandhan" className="group flex items-center gap-3 rounded-xl border border-line bg-surface/50 p-4 transition-all hover:border-accent/30">
              <span className="text-2xl">{'��'}</span>
              <span className="font-medium group-hover:text-accent">रक्षा बंधन फेस स्वैप</span>
            </Link>
          </div>
        </div>
      </section>

      <FAQ items={diwaliFaq} heading="दिवाली फेस स्वैप FAQ" />
      <CTABanner campaign="hi_diwali_page" heading="SwapMyFace के साथ दिवाली मनाएं" subtext={hi.sections.downloadSubtitle} />
    </>
  );
}
