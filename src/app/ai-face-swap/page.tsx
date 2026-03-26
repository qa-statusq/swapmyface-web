import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { AI_FACE_SWAP_FAQ } from '@/data/faq';
import nextDynamic from 'next/dynamic';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

const FAQ = nextDynamic(() => import('@/components/sections/FAQ'));
const CTABanner = nextDynamic(() => import('@/components/sections/CTABanner'));
import { playStoreLink } from '@/lib/constants';
import PlayStoreIcon from '@/components/ui/PlayStoreIcon';

export const dynamic = 'force-static';

export const metadata: Metadata = generatePageMetadata({
  title: 'AI Face Swap \u2014 Free AI-Powered Face Swap App',
  description:
    'SwapMyFace uses advanced AI to deliver ultra-realistic face swaps. 500+ templates, custom photo swap, full HD results. 100% free, unlimited. Download the best AI face swap app.',
  path: '/ai-face-swap',
  keywords: [
    'ai face swap', 'ai face swap app', 'ai face swap free', 'best ai face swap',
    'ai face swap photo', 'swap face ai', 'ai face swap online',
  ],
});

export default function AIFaceSwapPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'AI Face Swap', href: '/ai-face-swap' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="hero-heading text-4xl font-extrabold leading-tight sm:text-5xl">
            AI Face Swap &mdash; Free AI-Powered Face Swap App
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            SwapMyFace uses advanced deep AI technology to deliver ultra-realistic face swaps in seconds. Choose from 500+ templates or upload your own photos for a fully custom AI face swap. Every swap is free, unlimited, and rendered in full HD quality.
          </p>
          <div className="mt-8">
            <Link
              href={playStoreLink('ai_face_swap_page')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90"
            >
              <PlayStoreIcon />
              Download Free AI Face Swap App
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="reveal text-3xl font-bold">How AI Face Swap Technology Works</h2>
          <p className="mt-4 text-muted leading-relaxed">
            AI face swap goes far beyond basic photo editing. Our deep learning neural networks analyze facial features at the pixel level, detecting landmarks, geometry, skin tones, and lighting conditions. The AI then seamlessly blends the source face into the target image, producing results that look genuinely real and natural.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            SwapMyFace processes every AI face swap through a multi-stage pipeline: face detection, landmark mapping, geometric alignment, skin tone analysis, deep neural network blending, and HD upscaling. The result is a face swap that looks completely natural, not digitally processed.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-bg-soft/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="reveal text-3xl font-bold">What Makes SwapMyFace the Best AI Face Swap App</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 stagger">
            {[
              { title: 'Advanced Deep AI Engine', desc: 'Multi-stage pipeline with face detection, alignment, blending, and HD upscaling for photorealistic results.' },
              { title: '500+ AI-Optimized Templates', desc: 'Every template is designed and optimized specifically for the best possible AI face swap result.' },
              { title: 'Custom Photo AI Swap', desc: 'Upload any two photos and let the AI create a perfect face swap with automatic blending.' },
              { title: 'Full HD Every Time', desc: 'Crystal clear, sharp output at full HD resolution on every single AI face swap.' },
              { title: '100% Free, Unlimited', desc: 'No subscription, no credits, no cost. Unlimited AI face swaps for every user, forever.' },
              { title: 'New Templates Daily', desc: 'Festivals, couples, kids, trending \u2014 new AI-optimized templates added every day.' },
            ].map((feature) => (
              <div key={feature.title} className="reveal-scale card-hover rounded-2xl border border-line bg-surface/50 p-5">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="reveal text-3xl font-bold">AI Face Swap vs Manual Photo Editing</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Manual face swapping in tools like Photoshop requires hours of careful selection, masking, color correction, and blending. AI face swap technology automates this entire process in seconds, delivering results that often surpass what manual editing can achieve.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            SwapMyFace handles all the complex technical work automatically: face detection, geometric alignment, skin tone matching, lighting adaptation, and precision edge blending. The AI processes everything in the cloud and returns a full HD result in seconds, making professional-quality face swaps accessible to everyone for free.
          </p>
        </div>
      </section>

      <FAQ items={AI_FACE_SWAP_FAQ} heading="AI Face Swap FAQ" />
      <CTABanner campaign="ai_face_swap_page" heading="Download the Best Free AI Face Swap App" />
    </>
  );
}
