import Link from 'next/link';
import { playStoreLink } from '@/lib/constants';

interface LocalizedHeroProps {
  badge: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  cta: string;
  secondaryCta: string;
  campaign: string;
  rtl?: boolean;
}

export default function LocalizedHero({
  badge, title, titleHighlight, subtitle, cta, secondaryCta, campaign, rtl,
}: LocalizedHeroProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/8 blur-3xl" />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            {badge}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {title}
            <span className="block gradient-text">{titleHighlight}</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">{subtitle}</p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={playStoreLink(campaign)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-xl"
            >
              {cta}
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-6 py-4 text-base font-medium transition-colors hover:bg-white/5"
            >
              {secondaryCta} {rtl ? '\u2190' : '\u2192'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
