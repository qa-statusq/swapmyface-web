'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FOOTER_LINKS, CONTACT_EMAIL, SITE_NAME } from '@/lib/constants';
import { getLocaleFromPathname, getTranslations } from '@/lib/getTranslations';

const defaultFooter = {
  tagline: 'Swap Faces, Own the Moment. The best free AI face swap app with 500+ templates.',
  contact: 'Contact:',
  product: 'Product',
  templates: 'Templates',
  festivals: 'Festivals',
  legal: 'Legal',
  copyright: 'All rights reserved.',
};

export default function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getTranslations(locale)?.footer || defaultFooter;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-bg-soft">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <Image
                src="/images/icons/icon-192.png"
                alt="SwapMyFace"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span>Swap<span className="brand-italic text-accent">MyFace</span><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#7c5cfc] ml-0.5 align-super"></span></span>
            </Link>
            <p className="mt-3 text-sm text-muted">{t.tagline}</p>
            <p className="mt-3 text-sm text-muted">
              {t.contact}{' '}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              {t.product}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.product.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-text transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Templates */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              {t.templates}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.templates.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-text transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Festivals */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              {t.festivals}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.festivals.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-text transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              {t.legal}
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted hover:text-text transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-6 text-center text-sm text-muted">
          <p>&copy; {currentYear} {SITE_NAME}. {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
