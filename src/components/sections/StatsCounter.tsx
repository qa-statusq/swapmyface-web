interface StatsTranslations {
  templates: string;
  free: string;
  swaps: string;
  results: string;
  newDaily: string;
}

const defaultLabels: StatsTranslations = {
  templates: 'Templates',
  free: 'Free',
  swaps: 'Swaps',
  results: 'Results',
  newDaily: 'New Templates',
};

interface StatsCounterProps {
  translations?: StatsTranslations;
}

export default function StatsCounter({ translations }: StatsCounterProps) {
  const t = translations || defaultLabels;
  const stats = [
    { value: '500+', label: t.templates },
    { value: '100%', label: t.free },
    { value: 'Unlimited', label: t.swaps },
    { value: 'Full HD', label: t.results },
    { value: 'Daily', label: t.newDaily },
  ];

  return (
    <section className="relative py-8 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-transparent before:via-bg-soft/40 before:to-transparent">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-6 px-4 sm:gap-10 md:gap-14">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-2xl font-bold text-accent sm:text-3xl">{stat.value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
