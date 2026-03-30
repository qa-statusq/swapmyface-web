import type { Metadata } from 'next';
import Link from 'next/link';
import { vi } from '@/data/translations/vi';
import { SITE_URL, playStoreLink } from '@/lib/constants';
import nextDynamic from 'next/dynamic';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import HreflangTags from '@/components/seo/HreflangTags';

const FAQ = nextDynamic(() => import('@/components/sections/FAQ'));
const CTABanner = nextDynamic(() => import('@/components/sections/CTABanner'));
const HowItWorks = nextDynamic(() => import('@/components/sections/HowItWorks'));
import PlayStoreIcon from '@/components/ui/PlayStoreIcon';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: vi.meta.faceSwap.title,
  description: vi.meta.faceSwap.description,
  keywords: ['ghép mặt', 'ghép mặt AI', 'ứng dụng ghép mặt', 'face swap miễn phí'],
  alternates: {
    canonical: `${SITE_URL}/vi/face-swap`,
    languages: {
      en: `${SITE_URL}/face-swap`,
      hi: `${SITE_URL}/hi/face-swap`,
      ar: `${SITE_URL}/ar/face-swap`,
      ja: `${SITE_URL}/ja/face-swap`,
      ko: `${SITE_URL}/ko/face-swap`,
      vi: `${SITE_URL}/vi/face-swap`,
      'x-default': `${SITE_URL}/face-swap`,
    },
  },
  openGraph: {
    title: vi.meta.faceSwap.title,
    description: vi.meta.faceSwap.description,
    locale: 'vi_VN',
    alternateLocale: ['en_US', 'hi_IN', 'ar_SA', 'ja_JP', 'ko_KR'],
  },
};

export default function VietnameseFaceSwapPage() {
  return (
    <>
      <HreflangTags path="/face-swap" />
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ label: 'Trang chủ', href: '/vi' }, { label: 'Ghép mặt', href: '/vi/face-swap' }]} />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="hero-heading text-4xl font-extrabold leading-tight sm:text-5xl">
            Ứng Dụng Ghép Mặt &mdash; Ghép Mặt AI Miễn Phí, Không Giới Hạn
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">{vi.meta.faceSwap.description}</p>
          <div className="mt-8">
            <Link href={playStoreLink('vi_face_swap_page')} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90">
              <PlayStoreIcon />
              Tải ứng dụng ghép mặt miễn phí
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <h2 className="reveal text-3xl font-bold">Ứng dụng ghép mặt là gì?</h2>
          <p className="mt-4 text-muted leading-relaxed">
            Ứng dụng ghép mặt sử dụng trí tuệ nhân tạo để thay thế khuôn mặt trong ảnh. SwapMyFace là ứng dụng ghép mặt miễn phí tốt nhất với 500+ mẫu và tính năng ghép ảnh tùy chỉnh, mang lại kết quả HD siêu thực.
          </p>
          <p className="mt-4 text-muted leading-relaxed">
            Duyệt 500+ mẫu được thiết kế chuyên nghiệp trong các danh mục lễ hội, cặp đôi, trẻ em và xu hướng. Mọi lần ghép đều miễn phí, không giới hạn và chất lượng Full HD.
          </p>
        </div>
      </section>

      <HowItWorks translations={vi.howItWorks} />
      <FAQ items={vi.faq} heading={vi.sections.faq} />
      <CTABanner campaign="vi_face_swap_page" heading={vi.sections.download} subtext={vi.sections.downloadSubtitle} />
    </>
  );
}
