import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { FACE_SWAP_FAQ } from '@/data/faq';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import HowItWorks from '@/components/sections/HowItWorks';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { playStoreLink } from '@/lib/constants';

export const metadata: Metadata = generatePageMetadata({
  title: 'Face Swap App \u2014 Free AI Face Swap with 500+ Templates',
  description:
    'Looking for the best face swap app? SwapMyFace delivers ultra-realistic AI face swaps completely free \u2014 500+ templates, unlimited swaps, and full HD results. Download the #1 face swap app on Google Play.',
  path: '/face-swap',
  keywords: [
    'face swap', 'face swap app', 'best face swap app', 'face swap free',
    'ai face swap', 'face swap photo editor', 'face swap online',
    'face swap HD', 'face swap templates', 'face swap unlimited',
  ],
});

export default function FaceSwapPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Face Swap', href: '/face-swap' },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Face Swap App &mdash; Swap Any Face with AI, Free &amp; Unlimited
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            SwapMyFace is the best free face swap app available on Google Play. Powered by advanced deep AI technology, it delivers ultra-realistic face swaps with 500+ templates across festivals, couples, kids, and trending categories. Every swap is free, unlimited, and rendered in full HD quality.
          </p>
          <div className="mt-8">
            <Link
              href={playStoreLink('face_swap_page')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90"
            >
              Download Free Face Swap App
            </Link>
          </div>
        </div>
      </section>

      {/* What is Face Swap */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">What Is a Face Swap App?</h2>
          <p className="mt-4 text-muted leading-relaxed">
            A face swap app uses artificial intelligence to seamlessly replace one face with another in a photo. Unlike basic photo editors, a true AI face swap app automatically handles face detection, geometric alignment, skin tone matching, lighting adaptation, and edge blending to produce results that look completely natural and realistic.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            SwapMyFace is built from the ground up as a dedicated face swap app. With 500+ professionally designed templates and the ability to swap faces using your own custom photos, it is the most complete free face swap solution available. Every face swap is processed by our deep AI engine and delivered in ultra-realistic full HD quality.
          </p>
        </div>
      </section>

      <HowItWorks />

      {/* Template Categories */}
      <section className="border-y border-line bg-bg-soft/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">500+ Face Swap Templates for Every Occasion</h2>
          <p className="mt-4 text-muted leading-relaxed">
            SwapMyFace offers the largest free template library of any face swap app. Browse templates across five major categories, with new designs added every single day:
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { name: 'Festival Templates', href: '/templates/festival', desc: 'Diwali, Christmas, Eid, Halloween, Holi, New Year, Navratri & hundreds more.' },
              { name: 'Couple Templates', href: '/templates/couple', desc: 'Romantic designs for anniversaries, Valentine\'s Day & special moments.' },
              { name: 'Kids Templates', href: '/templates/kids', desc: 'Safe, fun templates with superheroes, cartoons & fairy tales for children.' },
              { name: 'Trending Templates', href: '/templates/trending', desc: 'Viral and popular face swap designs refreshed daily.' },
            ].map((cat) => (
              <Link key={cat.href} href={cat.href} className="rounded-2xl border border-line bg-surface/50 p-5 transition-all hover:border-accent/30">
                <h3 className="font-semibold text-accent">{cat.name}</h3>
                <p className="mt-1 text-sm text-muted">{cat.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">Ultra-Realistic AI Face Swap Quality</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Every face swap processed by SwapMyFace goes through a multi-stage AI pipeline designed for photorealistic results:
          </p>
          <ul className="mt-4 space-y-2 text-muted">
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> Full HD resolution output on every single swap</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> Accurate face detection and landmark mapping</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> Automatic skin tone matching and lighting adaptation</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> Precision edge blending for seamless results</li>
            <li className="flex gap-3"><span className="mt-1 text-accent">&#10003;</span> Consistent professional quality without exception</li>
          </ul>
        </div>
      </section>

      {/* Why SwapMyFace */}
      <section className="border-y border-line bg-bg-soft/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">Why SwapMyFace Is the Best Face Swap App</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { title: '100% Free, Forever', desc: 'No subscription, no credits, no in-app purchases. Every feature is completely free for all users.' },
              { title: 'Unlimited Swaps', desc: 'Swap as many faces as you want, any time, every day. No daily caps or restrictions.' },
              { title: '500+ Templates', desc: 'The largest free template library — festivals, couples, kids, love & trending categories.' },
              { title: 'Custom Photo Swap', desc: 'Upload any two photos for a fully custom face swap. Not limited to templates.' },
              { title: 'New Daily', desc: 'Fresh templates added every single day. There is always something new to discover.' },
              { title: 'Safe & Private', desc: 'Uploaded photos deleted within 24 hours. No misuse allowed.' },
            ].map((feature) => (
              <div key={feature.title} className="rounded-2xl border border-line bg-surface/50 p-5">
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-1 text-sm text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={FACE_SWAP_FAQ} heading="Face Swap App FAQ" />
      <CTABanner campaign="face_swap_page" heading="Download the Best Free Face Swap App" />
    </>
  );
}
