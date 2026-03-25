export interface Festival {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  shortDescription: string;
  keywords: string[];
  relatedFestivals: string[];
}

export const FESTIVALS: Festival[] = [
  {
    slug: 'diwali',
    name: 'Diwali',
    emoji: '\uD83E\uDE94',
    description:
      'Celebrate the festival of lights with stunning Diwali face swap templates. Traditional Indian festive attire, diya and rangoli-themed designs, and beautiful ethnic wear templates.',
    shortDescription: 'Festival of lights face swap templates with diyas, rangoli & ethnic wear.',
    keywords: ['diwali face swap', 'diwali photo editor', 'diwali face swap template', 'diwali photo frame'],
    relatedFestivals: ['holi', 'navratri', 'ganesh-chaturthi', 'durga-puja'],
  },
  {
    slug: 'christmas',
    name: 'Christmas',
    emoji: '\uD83C\uDF84',
    description:
      'Get into the holiday spirit with Christmas face swap templates. Santa Claus outfits, winter wonderland scenes, and warm family Christmas templates for the whole family.',
    shortDescription: 'Santa Claus, winter wonderland & family Christmas templates.',
    keywords: ['christmas face swap', 'santa face swap', 'christmas photo template'],
    relatedFestivals: ['new-year', 'thanksgiving', 'easter'],
  },
  {
    slug: 'eid',
    name: 'Eid',
    emoji: '\uD83C\uDF19',
    description:
      'Beautiful and elegant Eid face swap templates for Eid al-Fitr and Eid al-Adha celebrations. Share stunning face swap results with family and friends during the festivities.',
    shortDescription: 'Elegant Eid al-Fitr & Eid al-Adha celebration templates.',
    keywords: ['eid face swap', 'eid mubarak photo', 'eid face swap template'],
    relatedFestivals: ['diwali', 'christmas', 'new-year'],
  },
  {
    slug: 'halloween',
    name: 'Halloween',
    emoji: '\uD83C\uDF83',
    description:
      'Spooky and fun Halloween face swap templates. Scary costumes, horror characters, and trick-or-treat themed designs for the entire family to enjoy.',
    shortDescription: 'Spooky costumes, scary characters & horror-themed fun templates.',
    keywords: ['halloween face swap', 'scary face swap', 'halloween costume face'],
    relatedFestivals: ['christmas', 'thanksgiving', 'easter'],
  },
  {
    slug: 'holi',
    name: 'Holi',
    emoji: '\uD83C\uDF08',
    description:
      'Celebrate the festival of colors with vibrant Holi face swap templates. Colorful powder designs, joyful splashes, and celebratory group templates.',
    shortDescription: 'Colorful powder festival & vibrant celebration templates.',
    keywords: ['holi face swap', 'holi photo editor', 'holi face template'],
    relatedFestivals: ['diwali', 'navratri', 'baisakhi'],
  },
  {
    slug: 'new-year',
    name: 'New Year',
    emoji: '\uD83C\uDF86',
    description:
      'Ring in the New Year with festive face swap templates. Countdown celebrations, fireworks, party themes, and champagne celebration designs.',
    shortDescription: 'Countdown, fireworks & party celebration templates.',
    keywords: ['new year face swap', 'happy new year photo swap', 'new year photo template'],
    relatedFestivals: ['christmas', 'diwali', 'chinese-new-year'],
  },
  {
    slug: 'navratri',
    name: 'Navratri',
    emoji: '\uD83E\uDD41',
    description:
      'Traditional Navratri and Garba face swap templates. Beautiful dance costumes, colorful festive attire, and celebration designs for the nine nights of devotion.',
    shortDescription: 'Traditional dance costumes & colorful festive attire templates.',
    keywords: ['navratri face swap', 'garba face swap', 'navratri photo'],
    relatedFestivals: ['diwali', 'durga-puja', 'ganesh-chaturthi'],
  },
  {
    slug: 'easter',
    name: 'Easter',
    emoji: '\uD83C\uDF38',
    description:
      'Celebrate Easter with spring-themed face swap templates. Easter bunny designs, pastel themes, spring flowers, and joyful celebration templates for the whole family.',
    shortDescription: 'Easter bunny, spring flowers & pastel celebration templates.',
    keywords: ['easter face swap', 'easter bunny face swap', 'easter photo template'],
    relatedFestivals: ['christmas', 'thanksgiving', 'halloween'],
  },
  {
    slug: 'thanksgiving',
    name: 'Thanksgiving',
    emoji: '\uD83C\uDF3E',
    description:
      'Harvest-themed Thanksgiving face swap templates. Family gathering designs, gratitude celebrations, and autumn-inspired face swap templates.',
    shortDescription: 'Harvest, family gathering & gratitude celebration templates.',
    keywords: ['thanksgiving face swap', 'thanksgiving photo template'],
    relatedFestivals: ['christmas', 'halloween', 'easter'],
  },
  {
    slug: 'pongal',
    name: 'Pongal',
    emoji: '\uD83C\uDF3E',
    description:
      'Beautiful Pongal face swap templates celebrating the harvest festival of South India. Traditional designs with kolam, sugarcane, and festive themes.',
    shortDescription: 'South Indian harvest festival celebration templates.',
    keywords: ['pongal face swap', 'pongal photo editor'],
    relatedFestivals: ['onam', 'diwali', 'baisakhi'],
  },
  {
    slug: 'onam',
    name: 'Onam',
    emoji: '\uD83C\uDF3A',
    description:
      'Celebrate Kerala\'s harvest festival with Onam face swap templates. Traditional floral designs, boat race themes, and Onam celebration templates.',
    shortDescription: 'Kerala harvest festival & traditional floral templates.',
    keywords: ['onam face swap', 'onam photo template'],
    relatedFestivals: ['pongal', 'diwali', 'baisakhi'],
  },
  {
    slug: 'durga-puja',
    name: 'Durga Puja',
    emoji: '\uD83E\uDD41',
    description:
      'Iconic Durga Puja face swap templates. Beautiful pandal themes, traditional Bengali attire, and celebration designs for the grand festival.',
    shortDescription: 'Pandal themes & traditional Bengali celebration templates.',
    keywords: ['durga puja face swap', 'durga puja photo'],
    relatedFestivals: ['navratri', 'diwali', 'ganesh-chaturthi'],
  },
  {
    slug: 'ganesh-chaturthi',
    name: 'Ganesh Chaturthi',
    emoji: '\uD83D\uDC18',
    description:
      'Celebrate Lord Ganesha with Ganesh Chaturthi face swap templates. Beautiful idol-themed designs, modak celebrations, and festive templates.',
    shortDescription: 'Lord Ganesha celebration & festive idol-themed templates.',
    keywords: ['ganesh chaturthi face swap', 'ganesh chaturthi photo'],
    relatedFestivals: ['diwali', 'navratri', 'durga-puja'],
  },
  {
    slug: 'raksha-bandhan',
    name: 'Raksha Bandhan',
    emoji: '\uD83E\uDDF5',
    description:
      'Celebrate the bond between siblings with Raksha Bandhan face swap templates. Rakhi-themed designs, sibling love templates, and festive celebration designs.',
    shortDescription: 'Sibling bond & rakhi-themed celebration templates.',
    keywords: ['raksha bandhan face swap', 'rakhi photo template'],
    relatedFestivals: ['diwali', 'holi', 'navratri'],
  },
  {
    slug: 'baisakhi',
    name: 'Baisakhi',
    emoji: '\uD83C\uDF3E',
    description:
      'Celebrate the Punjabi harvest festival with Baisakhi face swap templates. Bhangra dance themes, vibrant turban designs, and harvest celebration templates.',
    shortDescription: 'Punjabi harvest festival & Bhangra celebration templates.',
    keywords: ['baisakhi face swap', 'baisakhi photo template'],
    relatedFestivals: ['holi', 'diwali', 'pongal'],
  },
  {
    slug: 'chinese-new-year',
    name: 'Chinese New Year',
    emoji: '\uD83C\uDFEE',
    description:
      'Vibrant Chinese New Year face swap templates. Red and gold themed designs, dragon and lantern motifs, and lucky celebration templates for the Lunar New Year.',
    shortDescription: 'Red & gold themed Lunar New Year celebration templates.',
    keywords: ['chinese new year face swap', 'lunar new year face swap'],
    relatedFestivals: ['new-year', 'diwali', 'eid'],
  },
];

export function getFestivalBySlug(slug: string): Festival | undefined {
  return FESTIVALS.find((f) => f.slug === slug);
}
