import JsonLd from '@/components/seo/JsonLd';

interface HowItWorksTranslations {
  heading: string;
  subtitle: string;
  steps: { title: string; description: string }[];
}

const defaultTranslations: HowItWorksTranslations = {
  heading: 'How to Face Swap in 4 Easy Steps',
  subtitle: 'SwapMyFace makes face swapping effortless. Pick a template, upload your face, tap swap, and get stunning HD results in seconds.',
  steps: [
    { title: 'Browse Templates', description: 'Browse 500+ templates across festivals, couples, kids & trending — or upload your own target photo as the base.' },
    { title: 'Upload Your Face', description: 'Upload your source photo — the face you want to swap into the template or scene.' },
    { title: 'Tap Swap', description: 'Tap SWAP and let our powerful deep AI engine do its magic in seconds.' },
    { title: 'Save & Share', description: 'Save or share your ultra-realistic full HD face swap result instantly.' },
  ],
};

interface HowItWorksProps {
  translations?: HowItWorksTranslations;
}

export default function HowItWorks({ translations }: HowItWorksProps) {
  const t = translations || defaultTranslations;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: t.heading,
    description: t.subtitle,
    step: t.steps.map((step) => ({
      '@type': 'HowToStep',
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <section className="py-16 sm:py-20">
      <JsonLd data={schema} />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="reveal text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">{t.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">{t.subtitle}</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 stagger">
          {t.steps.map((step, i) => (
            <div key={i} className="reveal-scale card-hover group relative rounded-2xl border border-line bg-surface/50 p-6 text-center">
              {/* Connecting dashed line — visible on lg between cards */}
              {i < t.steps.length - 1 && (
                <div className="pointer-events-none absolute -right-3 top-1/2 hidden h-px w-6 border-t border-dashed border-accent/25 lg:block" />
              )}
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-bold text-white shadow-lg shadow-accent/20 transition-transform duration-300 group-hover:scale-110">
                {i + 1}
              </div>
              <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
