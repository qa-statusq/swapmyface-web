import type { Metadata } from 'next';
import Link from 'next/link';
import { ja } from '@/data/translations/ja';
import { SITE_URL, playStoreLink } from '@/lib/constants';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import HowItWorks from '@/components/sections/HowItWorks';

export const metadata: Metadata = {
  title: ja.meta.faceSwap.title,
  description: ja.meta.faceSwap.description,
  keywords: ['顔変換', '顔変換アプリ', 'AI顔変換', '顔入れ替えアプリ', 'face swap 無料'],
  alternates: {
    canonical: `${SITE_URL}/ja/face-swap`,
    languages: { en: `${SITE_URL}/face-swap`, ja: `${SITE_URL}/ja/face-swap`, 'x-default': `${SITE_URL}/face-swap` },
  },
};

export default function JapaneseFaceSwapPage() {
  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ label: 'ホーム', href: '/ja' }, { label: '顔変換', href: '/ja/face-swap' }]} />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            顔変換アプリ &mdash; AIで無料顔変換、無制限
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">{ja.meta.faceSwap.description}</p>
          <div className="mt-8">
            <Link href={playStoreLink('ja_face_swap_page')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90">
              無料顔変換アプリをダウンロード
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="text-3xl font-bold">顔変換アプリとは？</h2>
          <p className="mt-4 text-muted leading-relaxed">
            顔変換アプリは人工知能を使用して、写真の中の顔を別の顔に置き換えます。SwapMyFaceは500以上のテンプレートとカスタム写真スワップ機能を備えた最高の無料顔変換アプリです。ディープAIエンジンによるウルトラリアルなフルHD結果を提供します。
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            お祣、カップル、子供向け、トレンドカテゴリーの500以上のプロフェッショナルデザインテンプレートを閲覧してください。すべてのスワップは無料、無制限、フルHD品質です。
          </p>
        </div>
      </section>

      <HowItWorks translations={ja.howItWorks} />
      <FAQ items={ja.faq} heading={ja.sections.faq} />
      <CTABanner campaign="ja_face_swap_page" heading={ja.sections.download} subtext={ja.sections.downloadSubtitle} />
    </>
  );
}
