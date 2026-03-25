import type { Metadata } from 'next';
import Link from 'next/link';
import { ko } from '@/data/translations/ko';
import { SITE_URL, playStoreLink } from '@/lib/constants';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import HowItWorks from '@/components/sections/HowItWorks';

export const metadata: Metadata = {
  title: ko.meta.faceSwap.title,
  description: ko.meta.faceSwap.description,
  keywords: ['얼굴 교체', '얼굴 교체 앱', 'AI 얼굴 교체', '얼굴 합성 앱'],
  alternates: {
    canonical: `${SITE_URL}/ko/face-swap`,
    languages: { en: `${SITE_URL}/face-swap`, ko: `${SITE_URL}/ko/face-swap`, 'x-default': `${SITE_URL}/face-swap` },
  },
};

export default function KoreanFaceSwapPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ label: '홈', href: '/ko' }, { label: '얼굴 교체', href: '/ko/face-swap' }]} />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            얼굴 교체 앱 &mdash; AI로 무료 얼굴 교체, 무제한
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">{ko.meta.faceSwap.description}</p>
          <div className="mt-8">
            <Link href={playStoreLink('ko_face_swap_page')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90">
              무료 얼굴 교체 앱 다운로드
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">얼굴 교체 앱이란?</h2>
          <p className="mt-4 text-muted leading-relaxed">
            얼굴 교체 앱은 인공지능을 사용하여 사진 속 얼굴을 다른 얼굴로 교체합니다. SwapMyFace는 500개 이상의 템플릿과 맞춤 사진 교체 기능을 갖춘 최고의 무료 얼굴 교체 앱입니다. 딥 AI 엔진을 통해 초사실적인 풀 HD 결과를 제공합니다.
          </p>
        </div>
      </section>

      <HowItWorks translations={ko.howItWorks} />
      <FAQ items={ko.faq} heading={ko.sections.faq} />
      <CTABanner campaign="ko_face_swap_page" heading={ko.sections.download} subtext={ko.sections.downloadSubtitle} />
    </>
  );
}
