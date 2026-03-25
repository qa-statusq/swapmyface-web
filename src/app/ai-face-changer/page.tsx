import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { AI_FACE_SWAP_FAQ } from '@/data/faq';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { playStoreLink } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'AI Face Changer \u2014 Change Any Face with AI Free',
  description:
    'SwapMyFace is the smartest AI face changer app. Change and swap faces with 500+ templates. Ultra-realistic HD results. 100% free, unlimited. Download now on Google Play.',
  path: '/ai-face-changer',
  keywords: [
    'ai face changer', 'ai face changer app', 'face changer app', 'face change app',
    'face ai', 'ai face', 'face changer editor', 'face maker',
  ],
});

export default function AIFaceChangerPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'AI Face Changer', href: '/ai-face-changer' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            AI Face Changer &mdash; Change Any Face with AI, Free
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            SwapMyFace uses powerful deep AI technology to change and swap faces with stunning, ultra-realistic accuracy. Whether you choose from 500+ templates or upload your own photos, our AI face changer delivers full HD results that look completely natural &mdash; in seconds and completely free.
          </p>
          <div className="mt-8">
            <Link
              href={playStoreLink('ai_face_changer_page')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90"
            >
              Download Free AI Face Changer
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">Advanced AI Face Changing Technology</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Our deep learning AI engine does far more than a basic face swap. It intelligently analyses every face, detects geometry and angles, and blends it perfectly into the target image. The result is an AI face change that looks genuinely real and natural.
          </p>
          <ul className="mt-6 space-y-2 text-muted">
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> Accurate face alignment &mdash; automatically detects angles, orientation, and position</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> Natural skin tone matching &mdash; blends seamlessly with any background</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> Intelligent lighting adaptation &mdash; shadows and highlights adjusted to match</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> Precision edge blending &mdash; no harsh outlines, just clean seamless results</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> Full HD output resolution &mdash; every result is sharp and professionally high quality</li>
          </ul>
        </div>
      </section>

      <section className="border-y border-line bg-bg-soft/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">500+ AI-Optimised Face Changer Templates</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Choose from our massive and growing library of 500+ AI-optimised face swap templates across festivals, couples, kids, love, and trending categories. Every template is specifically designed for the best possible face change result.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <Link href="/templates/festival" className="rounded-xl border border-line bg-surface/50 p-4 text-sm text-muted hover:border-accent/30">Festival Templates &mdash; Diwali, Christmas, Eid, Halloween & more</Link>
            <Link href="/templates/couple" className="rounded-xl border border-line bg-surface/50 p-4 text-sm text-muted hover:border-accent/30">Couple Templates &mdash; Romantic designs for special occasions</Link>
            <Link href="/templates/kids" className="rounded-xl border border-line bg-surface/50 p-4 text-sm text-muted hover:border-accent/30">Kids Templates &mdash; Safe, fun characters for children</Link>
            <Link href="/templates/trending" className="rounded-xl border border-line bg-surface/50 p-4 text-sm text-muted hover:border-accent/30">Trending Templates &mdash; Viral designs updated daily</Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">How Our AI Face Changer Works</h2>
          <p className="mt-4 text-muted leading-relaxed">
            SwapMyFace uses a multi-stage AI pipeline for every face change:
          </p>
          <ol className="mt-6 space-y-3 text-muted">
            <li className="flex gap-3"><span className="font-bold text-accent">Step 1</span> Face detection and landmark mapping on both photos</li>
            <li className="flex gap-3"><span className="font-bold text-accent">Step 2</span> Geometric alignment and angle correction</li>
            <li className="flex gap-3"><span className="font-bold text-accent">Step 3</span> Skin tone analysis and lighting environment matching</li>
            <li className="flex gap-3"><span className="font-bold text-accent">Step 4</span> Deep neural network face blending and synthesis</li>
            <li className="flex gap-3"><span className="font-bold text-accent">Step 5</span> HD upscaling and edge refinement for final output</li>
          </ol>
        </div>
      </section>

      <FAQ items={AI_FACE_SWAP_FAQ} heading="AI Face Changer FAQ" />
      <CTABanner campaign="ai_face_changer_page" heading="Download the Smartest AI Face Changer" />
    </>
  );
}
