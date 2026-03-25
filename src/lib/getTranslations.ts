import { hi } from '@/data/translations/hi';
import { ar } from '@/data/translations/ar';
import { ja } from '@/data/translations/ja';
import { ko } from '@/data/translations/ko';
import { vi } from '@/data/translations/vi';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const translations: Record<string, any> = { hi, ar, ja, ko, vi };

export function getTranslations(locale: string) {
  return translations[locale] || null;
}

export function getLocaleFromPathname(pathname: string): string {
  const segment = pathname.split('/')[1];
  if (['hi', 'ar', 'ja', 'ko', 'vi'].includes(segment)) return segment;
  return 'en';
}
