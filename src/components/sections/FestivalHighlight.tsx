import Link from 'next/link';
import { FESTIVALS } from '@/data/festivals';

const highlightedFestivals = FESTIVALS.slice(0, 6);

interface FestivalHighlightTranslations {
  heading: string;
  subtitle: string;
  faceSwapSuffix: string;
  seeAll: string;
}

const defaultTranslations: FestivalHighlightTranslations = {
  heading: 'Face Swap Templates for Every Festival in the World',
  subtitle: 'Celebrate every occasion with SwapMyFace. From Diwali to Christmas, Eid to Halloween — 500+ festival templates covering every culture, religion, and country worldwide.',
  faceSwapSuffix: 'Face Swap',
  seeAll: 'See All Festival Templates',
};

interface FestivalHighlightProps {
  translations?: FestivalHighlightTranslations;
}

export default function FestivalHighlight({ translations }: FestivalHighlightProps) {
  const t = translations || defaultTranslations;

  return (
    <section className="relative py-16 sm:py-20 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-transparent before:via-bg-soft/40 before:to-transparent">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">{t.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">{t.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {highlightedFestivals.map((festival) => (
            <Link
              key={festival.slug}
              href={`/templates/festival/${festival.slug}`}
              className="group flex items-start gap-4 rounded-2xl border border-line bg-surface/50 p-5 transition-all hover:border-accent/30"
            >
              <span className="mt-0.5 text-3xl">{festival.emoji}</span>
              <div>
                <h3 className="font-semibold group-hover:text-accent transition-colors">
                  {festival.name} {t.faceSwapSuffix}
                </h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">
                  {festival.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/templates/festival"
            className="inline-flex items-center gap-2 rounded-xl bg-accent/10 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
          >
            {t.seeAll} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
