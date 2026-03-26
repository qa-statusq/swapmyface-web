import Link from 'next/link';
import { playStoreLink } from '@/lib/constants';
import PlayStoreIcon from '@/components/ui/PlayStoreIcon';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* ── Abstract background layers ── */}
      <div className="absolute inset-0 -z-10">
        {/* Primary glow — animated drift */}
        <div
          className="absolute left-1/2 top-0 h-[500px] w-[800px] rounded-full bg-accent/8 blur-3xl"
          style={{ animation: 'hero-glow-drift 12s ease-in-out infinite' }}
        />
        {/* Secondary teal glow */}
        <div className="absolute right-[15%] top-[30%] h-[300px] w-[300px] rounded-full bg-accent-2/[0.04] blur-3xl" />

        {/* Dot grid pattern */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(94,140,255,0.15) 1px, transparent 1px)',
            backgroundSize: '32px 32px',
            animation: 'hero-grid-fade 1.5s ease both',
          }}
        />

        {/* Floating orbs */}
        <div
          className="absolute left-[12%] top-[20%] h-2 w-2 rounded-full bg-accent/30"
          style={{ animation: 'hero-orb-float 5s ease-in-out infinite' }}
        />
        <div
          className="absolute right-[18%] top-[35%] h-1.5 w-1.5 rounded-full bg-accent-2/25"
          style={{ animation: 'hero-orb-float 6s ease-in-out infinite 1s' }}
        />
        <div
          className="absolute left-[25%] bottom-[20%] h-1 w-1 rounded-full bg-accent/20"
          style={{ animation: 'hero-orb-float 4.5s ease-in-out infinite 2s' }}
        />
        <div
          className="absolute right-[10%] bottom-[30%] h-2.5 w-2.5 rounded-full bg-accent/15"
          style={{ animation: 'hero-orb-float 7s ease-in-out infinite 0.5s' }}
        />

        {/* Decorative rings */}
        <div className="absolute left-[8%] top-[15%] h-24 w-24 rounded-full border border-accent/[0.06] sm:h-32 sm:w-32" />
        <div className="absolute right-[10%] bottom-[15%] h-20 w-20 rounded-full border border-accent-2/[0.05] sm:h-28 sm:w-28" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="hero-badge inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            #1 Free AI Face Swap App
          </span>

          <h1 className="hero-heading mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Swap Any Face Instantly with AI
            <span className="block gradient-text">500+ Templates, Always Free</span>
          </h1>

          <p className="hero-paragraph mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            Swap<span className="brand-italic text-accent">MyFace</span><span className="inline-block h-1 w-1 rounded-full bg-[#7c5cfc] ml-[1px] align-super" /> is the best free AI face swap app. 500+ festival, couple, kids & trending
            templates. Ultra-realistic HD results. Unlimited swaps. Zero cost. Forever.
          </p>

          <div className="hero-cta mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={playStoreLink('homepage_hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/30"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <PlayStoreIcon />
              Download Free on Google Play
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-6 py-4 text-base font-medium transition-all hover:bg-white/5 hover:border-accent/20"
            >
              See How It Works &rarr;
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom gradient divider */}
      <div className="gradient-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
