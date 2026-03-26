'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { playStoreLink } from '@/lib/constants';
import { getLocaleFromPathname, getTranslations } from '@/lib/getTranslations';
import PlayStoreIcon from '@/components/ui/PlayStoreIcon';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getTranslations(locale);
  const label = t?.nav?.downloadFreeGooglePlay || 'Download Free on Google Play';

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-line bg-bg/95 px-4 py-3 backdrop-blur-lg md:hidden">
      <Link
        href={playStoreLink('floating_cta_mobile')}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent py-4 text-sm font-semibold text-white shadow-lg shadow-accent/25"
      >
        <PlayStoreIcon size={18} />
        {label}
      </Link>
    </div>
  );
}
