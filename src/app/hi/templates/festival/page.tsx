import type { Metadata } from 'next';
import Link from 'next/link';
import { hi } from '@/data/translations/hi';
import { SITE_URL, playStoreLink } from '@/lib/constants';
import { FESTIVALS } from '@/data/festivals';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import HreflangTags from '@/components/seo/HreflangTags';

export const metadata: Metadata = {
  title: hi.meta.festival.title,
  description: hi.meta.festival.description,
  keywords: ['त्योहार फेस स्वैप', 'festival face swap', 'दिवाली face swap', 'होली face swap', 'diwali face swap'],
  alternates: {
    canonical: `${SITE_URL}/hi/templates/festival`,
    languages: {
      en: `${SITE_URL}/templates/festival`,
      hi: `${SITE_URL}/hi/templates/festival`,
      ar: `${SITE_URL}/ar/templates/festival`,
      'x-default': `${SITE_URL}/templates/festival`,
    },
  },
};

export default function HindiFestivalPage() {
  return (
    <>
      <HreflangTags path="/templates/festival" />

      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'होम', href: '/hi' },
            { label: 'टेम्प्लेट्स', href: '/templates' },
            { label: 'त्योहार', href: '/hi/templates/festival' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            हर त्योहार के लिए फेस स्वैप टेम्प्लेट्स
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            {hi.meta.festival.description}
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FESTIVALS.map((festival) => {
              const hindiPath = ['diwali', 'holi', 'navratri', 'ganesh-chaturthi', 'raksha-bandhan'].includes(festival.slug)
                ? `/hi/templates/festival/${festival.slug}`
                : `/templates/festival/${festival.slug}`;
              return (
                <Link
                  key={festival.slug}
                  href={hindiPath}
                  className="group rounded-2xl border border-line bg-surface/50 p-6 transition-all hover:border-accent/30 hover:shadow-lg"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="text-3xl">{festival.emoji}</span>
                    <h2 className="text-lg font-semibold group-hover:text-accent transition-colors">
                      {festival.name} फेस स्वैप
                    </h2>
                  </div>
                  <p className="text-sm text-muted leading-relaxed">{festival.description}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner campaign="hi_festival_page" heading={hi.sections.download} subtext={hi.sections.downloadSubtitle} />
    </>
  );
}
