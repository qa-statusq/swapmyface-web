export interface TemplateCategory {
  slug: string;
  name: string;
  description: string;
  count: string;
  href: string;
}

export const TEMPLATE_CATEGORIES: TemplateCategory[] = [
  {
    slug: 'festival',
    name: 'Festival Templates',
    description:
      'Diwali, Christmas, Eid, Halloween, Holi, New Year & hundreds more festivals from every culture. New festival templates added for every upcoming celebration.',
    count: '200+',
    href: '/templates/festival',
  },
  {
    slug: 'couple',
    name: 'Couple Templates',
    description:
      'Sweet and romantic couple face swap designs. Perfect for anniversaries, Valentine\'s Day, and sharing with your special someone.',
    count: '80+',
    href: '/templates/couple',
  },
  {
    slug: 'love',
    name: 'Love Templates',
    description:
      'Express love and affection with beautiful heart-themed and romantic face swap templates. Perfect for sharing on social media.',
    count: '60+',
    href: '/templates/love',
  },
  {
    slug: 'kids',
    name: 'Kids Templates',
    description:
      'Safe, fun, and adorable face swap templates designed for children. Superhero costumes, cartoon characters, fairy tales, and sweet moments.',
    count: '100+',
    href: '/templates/kids',
  },
  {
    slug: 'trending',
    name: 'Trending Templates',
    description:
      'What the world is swapping right now. Viral and popular designs refreshed daily with the latest trends.',
    count: '50+',
    href: '/templates/trending',
  },
];
