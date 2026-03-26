import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import nextDynamic from 'next/dynamic';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const HowItWorks = nextDynamic(() => import('@/components/sections/HowItWorks'));
const FAQ = nextDynamic(() => import('@/components/sections/FAQ'));
const CTABanner = nextDynamic(() => import('@/components/sections/CTABanner'));
import { HOME_FAQ } from '@/data/faq';

export const dynamic = 'force-static';

export const metadata: Metadata = generatePageMetadata({
  title: 'How It Works \u2014 Face Swap in 4 Easy Steps',
  description:
    'Learn how SwapMyFace works. Swap any face in 4 easy steps: browse templates, upload your face, tap swap, save HD result. Free AI face swap app with 500+ templates.',
  path: '/how-it-works',
  keywords: ['how to face swap', 'how does face swap work', 'face swap tutorial', 'face swap steps'],
});

export default function HowItWorksPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'How It Works', href: '/how-it-works' },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            How SwapMyFace Works
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            SwapMyFace uses advanced deep AI technology to swap faces with stunning accuracy. Whether you use our 500+ templates or upload your own photos, the process takes just seconds and delivers ultra-realistic full HD results every time.
          </p>
        </div>
      </section>

      <HowItWorks />

      {/* Template Swap */}
      <section className="border-y border-line bg-bg-soft/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">Option 1: Template Face Swap</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Browse our library of 500+ professionally designed templates across festivals, couples, kids, love, and trending categories. Pick any template, upload your photo, and get an instant ultra-realistic face swap result. Our template library grows daily, so there is always something new.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-line bg-surface/50 p-5 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">1</div>
              <p className="text-sm text-muted">Browse 500+ templates by category</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface/50 p-5 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">2</div>
              <p className="text-sm text-muted">Upload your face photo</p>
            </div>
            <div className="rounded-2xl border border-line bg-surface/50 p-5 text-center">
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">3</div>
              <p className="text-sm text-muted">Get instant HD face swap result</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Swap */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">Option 2: Custom Photo Face Swap</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Want to go beyond templates? SwapMyFace lets you create fully custom face swaps using any two photos:
          </p>
          <ul className="mt-4 space-y-3 text-muted">
            <li className="flex gap-3">
              <span className="mt-0.5 font-bold text-accent">1.</span>
              <span><strong className="text-text">Upload your TARGET photo</strong> &mdash; the base image or scene you want the face placed into</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 font-bold text-accent">2.</span>
              <span><strong className="text-text">Upload your SOURCE photo</strong> &mdash; the face you want to swap in</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 font-bold text-accent">3.</span>
              <span><strong className="text-text">Tap SWAP</strong> &mdash; our AI engine processes both photos and blends them with stunning accuracy</span>
            </li>
            <li className="flex gap-3">
              <span className="mt-0.5 font-bold text-accent">4.</span>
              <span><strong className="text-text">Save your result</strong> &mdash; full HD quality, ready to share with anyone, anywhere</span>
            </li>
          </ul>
          <p className="mt-4 text-muted leading-relaxed">
            Our AI automatically handles face alignment, skin tone matching, lighting adaptation, and precise edge blending so every custom swap looks completely natural and realistic.
          </p>
        </div>
      </section>

      {/* AI Pipeline */}
      <section className="border-y border-line bg-bg-soft/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">The AI Behind SwapMyFace</h2>
          <p className="mt-4 text-muted leading-relaxed">
            SwapMyFace uses a multi-stage deep AI pipeline to deliver photorealistic face swaps:
          </p>
          <div className="mt-6 space-y-4">
            {[
              { step: 'Face Detection', desc: 'AI detects and maps facial landmarks on both the source and target photos.' },
              { step: 'Geometric Alignment', desc: 'Facial geometry is aligned, correcting for angle, orientation, and position differences.' },
              { step: 'Skin Tone Analysis', desc: 'The AI analyzes skin tones and matches them naturally to the target environment.' },
              { step: 'Neural Network Blending', desc: 'Deep neural networks blend the faces seamlessly, producing a photorealistic composite.' },
              { step: 'HD Upscaling & Refinement', desc: 'Final output is upscaled to full HD with precision edge refinement for a polished result.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 rounded-xl border border-line bg-surface/50 p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-xs font-bold text-accent">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold">{item.step}</h3>
                  <p className="mt-1 text-sm text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={HOME_FAQ} heading="Common Questions" />
      <CTABanner campaign="how_it_works_page" />
    </>
  );
}
