import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { CONTACT_EMAIL, PLAY_STORE_URL } from '@/lib/constants';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const dynamic = 'force-static';

export const metadata: Metadata = generatePageMetadata({
  title: 'About SwapMyFace — Our Story & Mission',
  description:
    'Learn about SwapMyFace, the free AI face swap app trusted by users worldwide. Our mission, values, team, and commitment to responsible AI.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
          ]}
        />
      </div>

      <section className="py-10 sm:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <h1 className="hero-heading text-3xl font-extrabold sm:text-4xl">About SwapMyFace</h1>
          <p className="mt-4 text-lg leading-relaxed text-muted">
            SwapMyFace is a free AI-powered face swap app built for creativity, fun, and self-expression.
            Available on Google Play with 500+ templates and growing daily.
          </p>
        </div>
      </section>

      <section className="pb-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 space-y-12">
          {/* Mission */}
          <div>
            <h2 className="reveal text-2xl font-bold">Our Mission</h2>
            <p className="mt-3 leading-relaxed text-muted">
              We believe AI-powered creativity should be accessible to everyone — not locked behind
              subscriptions or paywalls. SwapMyFace is 100% free, with no hidden costs, no credit
              systems, and no limits. Our mission is to make high-quality face swap technology
              available to every user, everywhere.
            </p>
          </div>

          {/* What We Do */}
          <div>
            <h2 className="reveal text-2xl font-bold">What We Do</h2>
            <p className="mt-3 leading-relaxed text-muted">
              SwapMyFace uses advanced deep-learning AI to seamlessly blend faces into templates
              with realistic lighting, skin-tone matching, and edge blending. Users can choose from
              500+ curated templates across categories like festivals, couples, kids, love, and
              trending designs — or upload any two photos for a fully custom swap.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-muted">
              <li>500+ templates with new ones added daily</li>
              <li>Ultra-realistic full HD output</li>
              <li>Festival templates for Diwali, Christmas, Eid, Holi, Halloween, and more</li>
              <li>Custom photo swap — any two photos, instant result</li>
              <li>Available in 6 languages: English, Hindi, Arabic, Japanese, Korean, Vietnamese</li>
            </ul>
          </div>

          {/* Our Values */}
          <div>
            <h2 className="reveal text-2xl font-bold">Our Values</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 stagger">
              {[
                {
                  title: 'Free for Everyone',
                  desc: 'No subscriptions, no credits, no hidden fees. Every feature is free, always.',
                },
                {
                  title: 'Privacy First',
                  desc: 'Uploaded photos are processed securely and deleted within 24 hours. We never sell user data.',
                },
                {
                  title: 'Responsible AI',
                  desc: 'We actively prevent misuse through content moderation, usage policies, and community guidelines.',
                },
                {
                  title: 'Quality Without Compromise',
                  desc: 'Every swap is processed with our advanced AI engine for ultra-realistic, full HD results.',
                },
              ].map((v) => (
                <div
                  key={v.title}
                  className="reveal-scale card-hover rounded-xl border border-line bg-surface/50 p-5"
                >
                  <h3 className="font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Trust & Safety */}
          <div>
            <h2 className="reveal text-2xl font-bold">Trust &amp; Safety</h2>
            <p className="mt-3 leading-relaxed text-muted">
              We take responsible AI use seriously. SwapMyFace prohibits non-consensual deepfakes,
              impersonation, harassment, and any content involving minors. Our{' '}
              <Link href="/responsible-use" className="text-accent underline">
                Responsible Use Policy
              </Link>{' '}
              outlines prohibited uses, and our{' '}
              <Link href="/privacy" className="text-accent underline">
                Privacy Policy
              </Link>{' '}
              details how we handle user data. We comply with applicable data protection regulations
              and continuously improve our safety measures.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="reveal text-2xl font-bold">Contact Us</h2>
            <p className="mt-3 leading-relaxed text-muted">
              Have questions, feedback, or concerns? Reach out to us at{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-accent underline"
              >
                {CONTACT_EMAIL}
              </a>
              . You can also visit our{' '}
              <Link href="/support" className="text-accent underline">
                Support page
              </Link>{' '}
              for common questions and troubleshooting.
            </p>
          </div>

          {/* Download CTA */}
          <div className="rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
            <p className="text-lg font-semibold">Try SwapMyFace Free</p>
            <p className="mt-2 text-sm text-muted">
              500+ templates. Unlimited swaps. Full HD. Zero cost.
            </p>
            <a
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Download Free on Google Play
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
