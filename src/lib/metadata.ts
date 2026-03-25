import { Metadata } from 'next';
import { SITE_NAME, SITE_URL } from './constants';

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  keywords?: string[];
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = '/images/og/home.jpg',
  keywords,
}: PageMetaOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}
