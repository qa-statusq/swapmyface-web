'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { NAV_LINKS } from '@/lib/constants';
import ThemeToggle from '@/components/ui/ThemeToggle';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';
import { getLocaleFromPathname, getTranslations } from '@/lib/getTranslations';
import PlayStoreIcon from '@/components/ui/PlayStoreIcon';

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const locale = getLocaleFromPathname(pathname);
  const t = getTranslations(locale);
  const navLabels = t?.nav;
  const labelMap: Record<string, string> = navLabels
    ? { Home: navLabels.home, 'Face Swap': navLabels.faceSwap, Templates: navLabels.templates, 'How It Works': navLabels.howItWorks, Blog: navLabels.blog, Support: navLabels.support }
    : {};
  const downloadLabel = navLabels?.downloadFree || 'Download Free';
  const downloadLabelMobile = navLabels?.downloadFreeGooglePlay || 'Download Free on Google Play';

  const localePrefix = locale === 'en' ? '' : `/${locale}`;

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href={localePrefix || '/'} className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <Image
            src="/images/icons/icon-192.png"
            alt="SwapMyFace logo — free AI face swap app"
            width={36}
            height={36}
            className="rounded-xl"
          />
          <span>Swap<span className="brand-italic text-accent">MyFace</span><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#7c5cfc] ml-0.5 align-super"></span></span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const href = `${localePrefix}${link.href}`;
            const active = pathname === href || (link.href === '/' && pathname === localePrefix);
            return (
              <Link
                key={link.href}
                href={href}
                className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? 'bg-accent/15 text-accent'
                    : 'text-muted hover:bg-white/5 hover:text-text'
                }`}
              >
                {labelMap[link.label] || link.label}
              </Link>
            );
          })}
          <div className="ml-2 flex items-center gap-1">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
          <Link
            href="https://play.google.com/store/apps/details?id=com.swapmyface.aifaceswap&utm_source=website&utm_medium=header&utm_campaign=nav_cta"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            <PlayStoreIcon size={16} />
            {downloadLabel}
          </Link>
        </nav>

        {/* Mobile: theme + lang + hamburger */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <LanguageSwitcher />
          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg text-muted hover:bg-white/5"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-line bg-bg px-4 pb-4 md:hidden" aria-label="Mobile">
          {NAV_LINKS.map((link) => {
            const href = `${localePrefix}${link.href}`;
            const active = pathname === href;
            return (
              <Link
                key={link.href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`block rounded-lg px-3 py-3 text-sm font-medium transition-colors ${
                  active ? 'text-accent' : 'text-muted hover:text-text'
                }`}
              >
                {labelMap[link.label] || link.label}
              </Link>
            );
          })}
          <Link
            href="https://play.google.com/store/apps/details?id=com.swapmyface.aifaceswap&utm_source=website&utm_medium=header&utm_campaign=nav_cta_mobile"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-3.5 text-sm font-semibold text-white"
          >
            <PlayStoreIcon size={16} />
            {downloadLabelMobile}
          </Link>
        </nav>
      )}
    </header>
  );
}
