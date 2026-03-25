import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { FACE_SWAP_FAQ } from '@/data/faq';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { playStoreLink } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Face Swap Photo Editor \u2014 Free AI Photo Face Swap',
  description:
    'SwapMyFace is the ultimate face swap photo editor. Edit any photo with AI face swap technology. 500+ templates, custom photo swap, full HD results. 100% free, unlimited.',
  path: '/face-swap-photo-editor',
  keywords: [
    'face swap photo editor', 'face swap photo', 'photo face swap',
    'face photo editor', 'face editor app', 'face swap editor free',
  ],
});

export default function FaceSwapPhotoEditorPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Face Swap Photo Editor', href: '/face-swap-photo-editor' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Face Swap Photo Editor &mdash; AI-Powered Photo Face Swap
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            SwapMyFace is the ultimate face swap photo editor. Transform any photo with AI-powered face swaps using 500+ templates or your own custom photos. Ultra-realistic full HD results, completely free, and unlimited.
          </p>
          <div className="mt-8">
            <Link
              href={playStoreLink('face_swap_photo_editor_page')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90"
            >
              Download Free Face Swap Editor
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">The Best Face Swap Photo Editor</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Unlike generic photo editors that offer basic cropping and filters, SwapMyFace is purpose-built for face swapping. Our AI engine is specifically designed to detect faces, align geometry, match skin tones, adapt lighting, and blend edges with pixel-perfect precision. The result is a face swap that looks completely real in every photo.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            With 500+ professionally designed templates and a powerful custom photo swap feature, SwapMyFace gives you two ways to create stunning face swap photos. Browse templates across festivals, couples, kids, and trending categories, or upload any two of your own photos for a fully custom face swap.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-bg-soft/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">Face Swap Photo Editor Features</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { title: '500+ Photo Templates', desc: 'Festival, couple, kids, love & trending photo templates designed for face swapping.' },
              { title: 'Custom Photo Swap', desc: 'Upload any target photo and source face for a fully custom face swap edit.' },
              { title: 'AI-Powered Precision', desc: 'Deep AI handles alignment, blending, skin tone matching, and lighting automatically.' },
              { title: 'Full HD Photo Output', desc: 'Every face swap photo is rendered in crystal clear full HD resolution.' },
              { title: 'Instant Processing', desc: 'AI processes your face swap photo in seconds, not minutes.' },
              { title: '100% Free Editor', desc: 'No subscription, no credits. Every photo editing feature is completely free.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-line bg-surface/50 p-5">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">How to Edit Photos with Face Swap</h2>
          <ol className="mt-6 space-y-3 text-muted">
            <li className="flex gap-3"><span className="font-bold text-accent">1.</span> Browse 500+ templates or upload your own target photo as the base</li>
            <li className="flex gap-3"><span className="font-bold text-accent">2.</span> Upload your source photo &mdash; the face you want to swap into the scene</li>
            <li className="flex gap-3"><span className="font-bold text-accent">3.</span> Tap SWAP and let our AI photo editor do its magic in seconds</li>
            <li className="flex gap-3"><span className="font-bold text-accent">4.</span> Save or share your ultra-realistic full HD face swap photo result</li>
          </ol>
        </div>
      </section>

      <FAQ items={FACE_SWAP_FAQ} heading="Face Swap Photo Editor FAQ" />
      <CTABanner campaign="face_swap_photo_editor_page" heading="Download the Best Free Face Swap Photo Editor" />
    </>
  );
}
