export interface Keyword {
  term: string;
  reach: number;
  difficulty: number;
  tier: 1 | 2 | 3;
}

export const TIER_1_KEYWORDS: Keyword[] = [
  { term: 'face swap', reach: 77601, difficulty: 7, tier: 1 },
  { term: 'ai face swap', reach: 1555, difficulty: 0, tier: 1 },
  { term: 'ai face changer', reach: 1364, difficulty: 7, tier: 1 },
  { term: 'face swap photo editor', reach: 782, difficulty: 7, tier: 1 },
  { term: 'zao face swap', reach: 1325, difficulty: 0, tier: 1 },
  { term: 'swap face ai', reach: 832, difficulty: 0, tier: 1 },
  { term: 'ai face changer app', reach: 1364, difficulty: 7, tier: 1 },
  { term: 'face changer app', reach: 773, difficulty: 10, tier: 1 },
];

export const TIER_2_KEYWORDS: Keyword[] = [
  { term: 'face app', reach: 557210, difficulty: 32, tier: 2 },
  { term: 'dream face', reach: 47060, difficulty: 0, tier: 2 },
  { term: 'face ai', reach: 14228, difficulty: 0, tier: 2 },
  { term: 'reface app', reach: 6627, difficulty: 25, tier: 2 },
  { term: 'zao face swap app', reach: 3941, difficulty: 0, tier: 2 },
  { term: 'face change app', reach: 1238, difficulty: 0, tier: 2 },
  { term: 'face changer editor', reach: 794, difficulty: 0, tier: 2 },
];

export const TIER_3_KEYWORDS: Keyword[] = [
  { term: 'face maker', reach: 781, difficulty: 0, tier: 3 },
  { term: 'face remake', reach: 783, difficulty: 7, tier: 3 },
  { term: 'face swap up', reach: 797, difficulty: 7, tier: 3 },
  { term: 'faceover photo face swap', reach: 1372, difficulty: 0, tier: 3 },
  { term: 'ai face', reach: 1323, difficulty: 0, tier: 3 },
  { term: 'face photo editor', reach: 794, difficulty: 27, tier: 3 },
  { term: 'face swap free', reach: 782, difficulty: 7, tier: 3 },
];

export const ALL_KEYWORDS = [...TIER_1_KEYWORDS, ...TIER_2_KEYWORDS, ...TIER_3_KEYWORDS];

export const PRIMARY_KEYWORDS = [
  'face swap', 'ai face swap', 'face swap app', 'free face swap',
  'ai face changer', 'face swap photo editor', 'face changer app',
  'festival face swap', 'diwali face swap', 'christmas face swap',
  'couple face swap', 'kids face swap', 'face swap free',
  'best face swap app', 'face swap HD', 'face swap templates',
  'ai face swap app', 'face swap unlimited', 'swap face ai',
  'face maker', 'face remake', 'photo face swap',
];
