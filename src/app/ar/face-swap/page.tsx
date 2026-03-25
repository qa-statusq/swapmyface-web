import type { Metadata } from 'next';
import Link from 'next/link';
import { ar } from '@/data/translations/ar';
import { SITE_URL, playStoreLink } from '@/lib/constants';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import HreflangTags from '@/components/seo/HreflangTags';

export const metadata: Metadata = {
  title: ar.meta.faceSwap.title,
  description: ar.meta.faceSwap.description,
  keywords: ['face swap', 'تبديل الوجوه', 'تطبيق تبديل وجوه', 'ai face swap'],
  alternates: {
    canonical: `${SITE_URL}/ar/face-swap`,
    languages: {
      en: `${SITE_URL}/face-swap`,
      hi: `${SITE_URL}/hi/face-swap`,
      ar: `${SITE_URL}/ar/face-swap`,
      'x-default': `${SITE_URL}/face-swap`,
    },
  },
};

export default function ArabicFaceSwapPage() {
  return (
    <>
      <HreflangTags path="/face-swap" />

      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'تبديل الوجوه', href: '/ar/face-swap' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            تطبيق تبديل الوجوه &mdash; تبديل مجاني بالذكاء الاصطناعي
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            {ar.meta.faceSwap.description}
          </p>
          <div className="mt-8">
            <Link
              href={playStoreLink('ar_face_swap_page')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90"
            >
              حمل تطبيق تبديل الوجوه مجاناً
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">ما هو تطبيق تبديل الوجوه؟</h2>
          <p className="mt-4 text-muted leading-relaxed">
            تطبيق تبديل الوجوه يستخدم الذكاء الاصطناعي لاستبدال وجه بآخر في الصور. SwapMyFace هو أفضل تطبيق مجاني لتبديل الوجوه مع 500+ قالب وميزة تبديل الصور المخصصة، يقدم نتائج HD واقعية للغاية.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-bg-soft/50 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">لماذا SwapMyFace هو الأفضل</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              { title: 'مجاني 100%', desc: 'بدون اشتراك، بدون رسوم. كل الميزات مجانية إلى الأبد.' },
              { title: 'تبديل غير محدود', desc: 'بدل وجوه بقدر ما تريد، بدون حدود.' },
              { title: '500+ قالب', desc: 'أعياد، أزواج، أطفال، حب وترندينغ.' },
              { title: 'جودة HD', desc: 'نتائج واقعية بجودة عالية في كل مرة.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-line bg-surface/50 p-5">
                <h3 className="font-semibold">{f.title}</h3>
                <p className="mt-1 text-sm text-muted">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ items={ar.faq} heading={ar.sections.faq} />
      <CTABanner campaign="ar_face_swap_page" heading={ar.sections.download} subtext={ar.sections.downloadSubtitle} />
    </>
  );
}
