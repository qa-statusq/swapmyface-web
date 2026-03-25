import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import JsonLd from '@/components/seo/JsonLd';
import { SITE_URL, SITE_NAME, CONTACT_EMAIL } from '@/lib/constants';
import { PRIMARY_KEYWORDS } from '@/lib/keywords';
import FloatingCTA from '@/components/ui/FloatingCTA';
import ScrollToTop from '@/components/ui/ScrollToTop';
import ThemeProvider from '@/components/providers/ThemeProvider';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

// Replace with your actual GA4 Measurement ID (e.g., G-XXXXXXXXXX)
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || '';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'SwapMyFace - Free AI Face Swap App | 500+ Templates | HD Results',
    template: '%s | SwapMyFace',
  },
  description:
    'SwapMyFace is the best free AI face swap app with 500+ templates for festivals, couples, kids & trending. Unlimited swaps, ultra-realistic HD results. Download free on Google Play.',
  keywords: PRIMARY_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  applicationName: SITE_NAME,
  category: 'Photography',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
    title: 'SwapMyFace - Free AI Face Swap App | 500+ Templates',
    description:
      'Swap any face with 500+ templates. Free, unlimited & ultra HD results always. Download on Google Play.',
    images: [
      {
        url: '/images/og/home.jpg',
        width: 1200,
        height: 630,
        alt: 'SwapMyFace AI Face Swap App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SwapMyFace - Free AI Face Swap App',
    description:
      'Swap any face with 500+ templates. Free, unlimited & ultra HD results.',
    images: ['/images/og/home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    // Replace with your actual Google Search Console verification code
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || 'YOUR_GOOGLE_VERIFICATION_CODE',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/images/icons/logo.png`,
  description:
    'SwapMyFace is the best free AI face swap app with 500+ templates.',
  contactPoint: {
    '@type': 'ContactPoint',
    email: CONTACT_EMAIL,
    contactType: 'customer support',
  },
};

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: SITE_NAME,
  operatingSystem: 'Android',
  applicationCategory: 'PhotographyApplication',
  description:
    'Free AI face swap app with 500+ templates. Unlimited swaps, ultra-realistic full HD results.',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  featureList:
    'AI Face Swap, 500+ Templates, Festival Templates, Couple Templates, Kids Templates, Custom Photo Swap, Ultra HD Results, 100% Free, Unlimited Swaps',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} h-full antialiased`}>
      <head>
        {/* Performance: preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://play.google.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body className="flex min-h-full flex-col">
        <ThemeProvider>
          {/* Soft ambient glow at top — fades smoothly, no hard edges */}
          <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(94,140,255,0.15),transparent)]" />
          <JsonLd data={organizationSchema} />
          <JsonLd data={softwareAppSchema} />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingCTA />
          <ScrollToTop />
          {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
        </ThemeProvider>
      </body>
    </html>
  );
}
