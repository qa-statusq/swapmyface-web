import type { Metadata } from 'next';
import Link from 'next/link';
import { ar } from '@/data/translations/ar';
import { SITE_URL, playStoreLink } from '@/lib/constants';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import HreflangTags from '@/components/seo/HreflangTags';
import PlayStoreIcon from '@/components/ui/PlayStoreIcon';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: ar.meta.eid!.title,
  description: ar.meta.eid!.description,
  keywords: ['عيد فيس سواب', 'eid face swap', 'عيد الفطر face swap', 'عيد الأضحى', 'eid mubarak photo'],
  alternates: {
    canonical: `${SITE_URL}/ar/templates/festival/eid`,
    languages: {
      en: `${SITE_URL}/templates/festival/eid`,
      ar: `${SITE_URL}/ar/templates/festival/eid`,
      'x-default': `${SITE_URL}/templates/festival/eid`,
    },
  },
};

const eidFaq = [
  {
    question: 'هل قوالب العيد مجانية؟',
    answer: 'نعم، جميع قوالب العيد في SwapMyFace مجانية 100%. بدون اشتراك، بدون رسوم. تبديل غير محدود للعيد، مجاني دائماً.',
  },
  {
    question: 'كيف أصنع صورة عيد بتبديل الوجوه؟',
    answer: 'افتح SwapMyFace، تصفح قوالب العيد، اختر تصميمك المفضل، ارفع صورتك، واضغط SWAP. الذكاء الاصطناعي يصنع النتيجة في ثوانٍ.',
  },
  {
    question: 'هل يتم إضافة قوالب عيد جديدة؟',
    answer: 'نعم، فريقنا يضيف قوالب عيد جديدة بانتظام، خاصة مع اقتراب عيد الفطر وعيد الأضحى. دائماً جديد ومميز.',
  },
];

export default function ArabicEidPage() {
  return (
    <>
      <HreflangTags path="/templates/festival/eid" />

      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'الرئيسية', href: '/ar' },
            { label: 'الأعياد', href: '/ar/templates/festival' },
            { label: 'العيد', href: '/ar/templates/festival/eid' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <span className="text-5xl">{'��'}</span>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            قوالب تبديل الوجوه للعيد
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            احتفل بعيد الفطر وعيد الأضحى مع قوالب تبديل الوجوه الرائعة! تصاميم أنيقة وجميلة للاحتفالات الإسلامية. شارك النتائج مع العائلة والأصدقاء. مجاني، غير محدود، جودة HD.
          </p>
          <div className="mt-8">
            <Link
              href={playStoreLink('ar_eid_page')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90"
            >
              <PlayStoreIcon />
              حمل تطبيق العيد مجاناً
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">كيف تصنع صورة عيد بتبديل الوجوه</h2>
          <ol className="mt-6 space-y-3 text-muted">
            <li className="flex gap-3"><span className="font-bold text-accent">1.</span> تصفح قوالب العيد في SwapMyFace</li>
            <li className="flex gap-3"><span className="font-bold text-accent">2.</span> اختر تصميم العيد المفضل</li>
            <li className="flex gap-3"><span className="font-bold text-accent">3.</span> ارفع صورتك</li>
            <li className="flex gap-3"><span className="font-bold text-accent">4.</span> اضغط SWAP &mdash; الذكاء الاصطناعي يصنع النتيجة في ثوانٍ</li>
            <li className="flex gap-3"><span className="font-bold text-accent">5.</span> احفظ وشارك نتيجتك HD مع العائلة</li>
          </ol>
        </div>
      </section>

      <FAQ items={eidFaq} heading="أسئلة شائعة عن العيد" />
      <CTABanner campaign="ar_eid_page" heading="احتفل بالعيد مع SwapMyFace" subtext={ar.sections.downloadSubtitle} />
    </>
  );
}
