import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import LocalePageRenderer from '@/components/pages/LocalePageRenderer';
import { generateLocalePageMetadata, isRenderableSlug } from '@/lib/localeMetadata';

const LOCALE = 'ja';

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
  const { slug } = await params;
  if (!isRenderableSlug(slug)) return {};
  return generateLocalePageMetadata(LOCALE, slug) || {};
}

export default async function JapaneseCatchAllPage({ params }: { params: Promise<{ slug: string[] }> }) {
  const { slug } = await params;
  if (!isRenderableSlug(slug)) notFound();
  return <LocalePageRenderer locale={LOCALE} slug={slug} />;
}
