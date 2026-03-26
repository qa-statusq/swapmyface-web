'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider';
import { getLocaleFromPathname, getTranslations } from '@/lib/getTranslations';

interface FaceSwapShowcaseTranslations {
  heading: string;
  subtitle: string;
  templateLabel: string;
  customLabel: string;
  before: string;
  after: string;
}

interface FaceSwapShowcaseProps {
  translations?: FaceSwapShowcaseTranslations;
}

export default function FaceSwapShowcase({ translations }: FaceSwapShowcaseProps) {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = translations || getTranslations(locale).faceSwapShowcase;

  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Heading */}
        <div className="reveal text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">{t.heading}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">{t.subtitle}</p>
        </div>

        {/* Desktop: 2-column with right arrow | Mobile: stacked with down arrow */}
        <div className="reveal mt-12 grid items-stretch gap-6 lg:grid-cols-[1fr_auto_1fr]">

          {/* Left column: Template + Source + Abstract filler */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-semibold">{t.templateLabel}</h3>
            <div className="grid grid-cols-5 items-center gap-3">
              {/* Template Photo */}
              <div className="col-span-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-surface/50">
                  <Image
                    src="/images/showcase/template.jpg"
                    alt="Woman in straw hat — face swap template example"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 40vw, 20vw"
                  />
                  <div className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                    Template
                  </div>
                </div>
              </div>

              {/* Plus icon */}
              <div className="col-span-1 flex items-center justify-center">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M8 3v10M3 8h10" />
                  </svg>
                </div>
              </div>

              {/* Source Face Photo */}
              <div className="col-span-2">
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line bg-surface/50">
                  <Image
                    src="/images/showcase/source.jpg"
                    alt="User selfie used as source face for AI swap"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 40vw, 20vw"
                  />
                  <div className="absolute bottom-2 left-2 rounded-md bg-black/60 px-2 py-0.5 text-[10px] font-semibold text-white backdrop-blur-sm">
                    Your Face
                  </div>
                </div>
              </div>
            </div>

            {/* Premium abstract panel — desktop only */}
            <div className="relative mt-5 hidden min-h-[220px] flex-1 overflow-hidden rounded-2xl lg:block">
              {/* Animated gradient border */}
              <div
                className="absolute -inset-px rounded-2xl bg-[length:300%_300%] opacity-60"
                style={{
                  backgroundImage: 'linear-gradient(135deg, rgba(94,140,255,0.4), rgba(40,211,184,0.3), rgba(94,140,255,0.1), rgba(40,211,184,0.4))',
                  animation: 'showcase-gradient-shift 6s ease infinite',
                }}
              />
              {/* Inner background */}
              <div className="absolute inset-px rounded-[15px] bg-bg" />

              {/* Radial glow layers */}
              <div className="absolute inset-0 rounded-[15px] bg-[radial-gradient(ellipse_at_30%_20%,rgba(94,140,255,0.08),transparent_60%)]" />
              <div className="absolute inset-0 rounded-[15px] bg-[radial-gradient(ellipse_at_70%_80%,rgba(40,211,184,0.06),transparent_60%)]" />

              {/* Animated rotating ring in center */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                {/* Outer rotating ring */}
                <div
                  className="absolute -top-[60px] -left-[60px] h-[120px] w-[120px] rounded-full border border-dashed border-accent/15"
                  style={{ animation: 'showcase-rotate 20s linear infinite' }}
                >
                  <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-accent/60 shadow-[0_0_8px_rgba(94,140,255,0.6)]" />
                  <div className="absolute -bottom-1 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-2/50" />
                </div>
                {/* Middle rotating ring — reverse */}
                <div
                  className="absolute -top-[42px] -left-[42px] h-[84px] w-[84px] rounded-full border border-accent/10"
                  style={{ animation: 'showcase-rotate 15s linear infinite reverse' }}
                >
                  <div className="absolute -top-0.5 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent-2/60 shadow-[0_0_6px_rgba(40,211,184,0.5)]" />
                </div>
                {/* Inner static ring with glow */}
                <div className="absolute -top-[24px] -left-[24px] h-[48px] w-[48px] rounded-full border border-accent/20 shadow-[inset_0_0_20px_rgba(94,140,255,0.06)]" />
              </div>

              {/* Expanding pulse rings from center */}
              <div
                className="absolute top-1/2 left-1/2 h-16 w-16 rounded-full border border-accent/20"
                style={{ animation: 'showcase-ring-expand 4s ease-out infinite' }}
              />
              <div
                className="absolute top-1/2 left-1/2 h-16 w-16 rounded-full border border-accent-2/15"
                style={{ animation: 'showcase-ring-expand 4s ease-out infinite 2s' }}
              />

              {/* Rising particles */}
              <div className="absolute bottom-0 left-[20%] h-1 w-1 rounded-full bg-accent/50" style={{ animation: 'showcase-particle-rise 5s ease-in infinite' }} />
              <div className="absolute bottom-0 left-[45%] h-1.5 w-1.5 rounded-full bg-accent-2/40" style={{ animation: 'showcase-particle-rise-alt 6s ease-in infinite 1s' }} />
              <div className="absolute bottom-0 left-[70%] h-1 w-1 rounded-full bg-accent/30" style={{ animation: 'showcase-particle-rise 7s ease-in infinite 2.5s' }} />
              <div className="absolute bottom-0 left-[35%] h-0.5 w-0.5 rounded-full bg-accent-2/50" style={{ animation: 'showcase-particle-rise-alt 4.5s ease-in infinite 0.5s' }} />
              <div className="absolute bottom-0 left-[60%] h-1 w-1 rounded-full bg-accent/40" style={{ animation: 'showcase-particle-rise 5.5s ease-in infinite 3s' }} />
              <div className="absolute bottom-0 left-[85%] h-0.5 w-0.5 rounded-full bg-accent-2/30" style={{ animation: 'showcase-particle-rise-alt 6.5s ease-in infinite 1.5s' }} />

              {/* Floating glass card — center */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-5 p-6">
                {/* AI icon with glow */}
                <div className="relative" style={{ animation: 'showcase-float 4s ease-in-out infinite' }}>
                  <div className="absolute -inset-3 rounded-2xl bg-accent/10 blur-xl" style={{ animation: 'showcase-glow-pulse 3s ease-in-out infinite' }} />
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/25 bg-surface/90 shadow-lg shadow-accent/10 backdrop-blur-md">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" className="text-accent">
                      <path d="M12 2L14.5 7.5L20 10L14.5 12.5L12 18L9.5 12.5L4 10L9.5 7.5L12 2Z" fill="currentColor" opacity="0.9" />
                      <path d="M19 14L20 16.5L22.5 17.5L20 18.5L19 21L18 18.5L15.5 17.5L18 16.5L19 14Z" fill="currentColor" opacity="0.4" />
                    </svg>
                  </div>
                </div>

                {/* Steps with connecting line */}
                <div className="relative flex flex-col items-start gap-0">
                  {/* Vertical connector */}
                  <div className="absolute left-[15px] top-[18px] bottom-[18px] w-px bg-gradient-to-b from-accent/30 via-accent/15 to-accent/30" />

                  {/* Step 1 */}
                  <div className="relative flex items-center gap-3 py-1.5">
                    <div className="relative z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-accent/25 bg-surface/90 text-xs font-semibold text-accent shadow-sm backdrop-blur-sm">
                      1
                    </div>
                    <span className="text-xs text-muted">Choose template</span>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-center gap-3 py-1.5">
                    <div className="relative z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-accent/25 bg-surface/90 text-xs font-semibold text-accent shadow-sm backdrop-blur-sm">
                      2
                    </div>
                    <span className="text-xs text-muted">Upload your photo</span>
                  </div>

                  {/* Step 3 — active */}
                  <div className="relative flex items-center gap-3 py-1.5">
                    <div className="relative z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-white shadow-md shadow-accent/30">
                      3
                    </div>
                    <span
                      className="bg-[length:200%_auto] bg-clip-text text-xs font-semibold text-transparent"
                      style={{
                        backgroundImage: 'linear-gradient(90deg, #5e8cff, #28d3b8, #5e8cff)',
                        animation: 'showcase-text-shimmer 3s linear infinite',
                      }}
                    >
                      Instant AI swap
                    </span>
                  </div>
                </div>

                {/* Bottom tagline */}
                <div
                  className="rounded-full border border-line/50 bg-surface/60 px-4 py-1.5 backdrop-blur-sm"
                  style={{ animation: 'showcase-border-glow 3s ease-in-out infinite' }}
                >
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted/70">
                    Powered by AI
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Middle: Arrow — right on desktop, down on mobile */}
          <div className="flex items-center justify-center">
            {/* Down arrow — mobile only */}
            <div className="flex flex-col items-center gap-2 lg:hidden">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/25">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 2v12M4 10l4 4 4-4" />
                </svg>
              </div>
              <span className="text-sm font-semibold text-accent">Swapped Result</span>
            </div>

            {/* Right arrow — desktop only */}
            <div className="hidden flex-col items-center gap-3 lg:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-accent/25">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 8h12M10 4l4 4-4 4" />
                </svg>
              </div>
              <span className="whitespace-nowrap text-sm font-semibold text-accent">Result</span>
            </div>
          </div>

          {/* Right column: Before/After Slider */}
          <div className="flex flex-col">
            <h3 className="mb-4 text-lg font-semibold">
              {t.before} / {t.after}
            </h3>
            <BeforeAfterSlider
              beforeImage="/images/showcase/template.jpg"
              afterImage="/images/showcase/result.jpg"
              beforeLabel={t.before}
              afterLabel={t.after}
              beforeAlt="Original template photo before AI face swap"
              afterAlt="Swapped result showing user face blended into template"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
