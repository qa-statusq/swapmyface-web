import { hi } from '@/data/translations/hi';
import { ar } from '@/data/translations/ar';
import { ja } from '@/data/translations/ja';
import { ko } from '@/data/translations/ko';
import { vi } from '@/data/translations/vi';

const translations: Record<string, typeof hi> = { hi, ar: ar as typeof hi, ja: ja as typeof hi, ko: ko as typeof hi, vi: vi as typeof hi };

export function getTranslations(locale: string) {
  return translations[locale] || null;
}

export function getLocaleFromPathname(pathname: string): string {
  const segment = pathname.split('/')[1];
  if (['hi', 'ar', 'ja', 'ko', 'vi'].includes(segment)) return segment;
  return 'en';
}
