import Link from 'next/link';
import { TEMPLATE_CATEGORIES } from '@/data/templates';

interface TemplateShowcaseTranslations {
  heading: string;
  subtitle: string;
  browseTemplates: string;
  viewAll: string;
}

const defaultTranslations: TemplateShowcaseTranslations = {
  heading: '500+ Face Swap Templates for Every Occasion',
  subtitle: 'Browse templates across festivals, couples, kids, love & trending categories. New templates added every single day.',
  browseTemplates: 'Browse templates',
  viewAll: 'View All 500+ Templates',
};

interface TemplateShowcaseProps {
  translations?: TemplateShowcaseTranslations;
}

export default function TemplateShowcase({ translations }: TemplateShowcaseProps) {
  const t = translations || defaultTranslations;

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">{t.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">{t.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEMPLATE_CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={category.href}
              className="group rounded-2xl border border-line bg-surface/50 p-6 transition-all hover:border-accent/30 hover:shadow-lg"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                  {category.name}
                </h3>
                <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                  {category.count}
                </span>
              </div>
              <p className="text-sm text-muted leading-relaxed">{category.description}</p>
              <div className="mt-4 text-sm font-medium text-accent">
                {t.browseTemplates} &rarr;
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/templates"
            className="inline-flex items-center gap-2 rounded-xl bg-accent/10 px-6 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent/20"
          >
            {t.viewAll} &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
