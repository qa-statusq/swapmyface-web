import type { TranslationSchema } from '@/data/translations/types';
import { en } from '@/data/translations/en';
import { hi } from '@/data/translations/hi';
import { ar } from '@/data/translations/ar';
import { ja } from '@/data/translations/ja';
import { ko } from '@/data/translations/ko';
import { vi } from '@/data/translations/vi';

const translations: Record<string, TranslationSchema> = { en, hi, ar, ja, ko, vi };

/**
 * Deep merge source into target — any missing key in source falls back to target.
 */
function deepMerge(target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
  const result: Record<string, unknown> = { ...target };
  for (const key of Object.keys(source)) {
    const srcVal = source[key];
    const tgtVal = target[key];
    if (
      srcVal !== null &&
      srcVal !== undefined &&
      typeof srcVal === 'object' &&
      !Array.isArray(srcVal) &&
      typeof tgtVal === 'object' &&
      tgtVal !== null &&
      !Array.isArray(tgtVal)
    ) {
      result[key] = deepMerge(tgtVal as Record<string, unknown>, srcVal as Record<string, unknown>);
    } else if (srcVal !== undefined && srcVal !== null && srcVal !== '') {
      result[key] = srcVal;
    }
  }
  return result;
}

/**
 * Returns a complete translation object for the given locale.
 * Missing keys automatically fall back to English defaults.
 */
export function getTranslations(locale: string): TranslationSchema {
  if (locale === 'en' || !translations[locale]) {
    return en;
  }
  return deepMerge(en as unknown as Record<string, unknown>, translations[locale] as unknown as Record<string, unknown>) as unknown as TranslationSchema;
}

export function getLocaleFromPathname(pathname: string): string {
  const segment = pathname.split('/')[1];
  if (['hi', 'ar', 'ja', 'ko', 'vi'].includes(segment)) return segment;
  return 'en';
}
