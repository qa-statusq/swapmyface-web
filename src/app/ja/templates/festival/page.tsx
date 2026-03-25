import type { Metadata } from 'next';
import Link from 'next/link';
import { ja } from '@/data/translations/ja';
import { SITE_URL } from '@/lib/constants';
import { FESTIVALS } from '@/data/festivals';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata: Metadata = {
  title: ja.meta.festival.title,
  description: ja.meta.festival.description,
  keywords: ['お祣顔変換', 'クリスマス顔変換', 'ハロウィン顔変換', 'お正月顔変換'],
  alternates: {
    canonical: `${SITE_URL}/ja/templates/festival`,
    languages: { en: `${SITE_URL}/templates/festival`, ja: `${SITE_URL}/ja/templates/festival`, 'x-default': `${SITE_URL}/templates/festival` },
  },
};

export default function JapaneseFestivalPage() {
  return (
    <>
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ label: 'ホーム', href: '/ja' }, { label: 'テンプレート', href: '/templates' }, { label: 'お祣', href: '/ja/templates/festival' }]} />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{ja.sections.festivals}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">{ja.meta.festival.description}</p>
        </div>
      </section>

      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FESTIVALS.map((festival) => (
              <Link key={festival.slug} href={`/templates/festival/${festival.slug}`} className="group rounded-2xl border border-line bg-surface/50 p-6 transition-all hover:border-accent/30 hover:shadow-lg">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-3xl">{festival.emoji}</span>
                  <h2 className="text-lg font-semibold group-hover:text-accent transition-colors">{festival.name} 顔変換</h2>
                </div>
                <p className="text-sm text-muted leading-relaxed">{festival.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTABanner campaign="ja_festival_page" heading={ja.sections.download} subtext={ja.sections.downloadSubtitle} />
    </>
  );
}
