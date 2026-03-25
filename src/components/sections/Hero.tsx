import Link from 'next/link';
import { playStoreLink } from '@/lib/constants';

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
            #1 Free AI Face Swap App
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Swap Any Face Instantly with AI
            <span className="block gradient-text">500+ Templates, Always Free</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            Swap<span className="brand-italic text-accent">MyFace</span><span className="inline-block h-1 w-1 rounded-full bg-[#7c5cfc] ml-[1px] align-super" /> is the best free AI face swap app. 500+ festival, couple, kids & trending
            templates. Ultra-realistic HD results. Unlimited swaps. Zero cost. Forever.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={playStoreLink('homepage_hero')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent/90 hover:shadow-xl"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 01-.609-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.991l-2.302 2.302L5.864 2.658z" />
              </svg>
              Download Free on Google Play
            </Link>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 rounded-xl border border-line px-6 py-4 text-base font-medium transition-colors hover:bg-white/5"
            >
              See How It Works &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
