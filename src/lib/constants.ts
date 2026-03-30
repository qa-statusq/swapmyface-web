export const SITE_NAME = 'SwapMyFace';
export const SITE_URL = 'https://facefitswap.com';
export const SITE_DESCRIPTION =
  'SwapMyFace is the best free AI face swap app with 500+ templates for festivals, couples, kids & trending. Unlimited swaps, ultra-realistic HD results. Download free on Google Play.';

export const CONTACT_EMAIL = 'contact@facefitswap.com';

export const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=com.swapmyface.aifaceswap';

export const playStoreLink = (campaign: string) =>
  `${PLAY_STORE_URL}&utm_source=website&utm_medium=landing_page&utm_campaign=${campaign}`;

export const APP_TITLE = 'SwapMyFace \u2013 AI Face Swap App';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/face-swap', label: 'Face Swap' },
  { href: '/templates', label: 'Templates' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/blog', label: 'Blog' },
  { href: '/support', label: 'Support' },
] as const;

export const FOOTER_LINKS = {
  product: [
    { href: '/face-swap', label: 'Face Swap' },
    { href: '/ai-face-swap', label: 'AI Face Swap' },
    { href: '/ai-face-changer', label: 'AI Face Changer' },
    { href: '/free-face-swap', label: 'Free Face Swap' },
    { href: '/face-swap-photo-editor', label: 'Face Swap Photo Editor' },
    { href: '/how-it-works', label: 'How It Works' },
  ],
  templates: [
    { href: '/templates', label: 'All Templates' },
    { href: '/templates/festival', label: 'Festival Templates' },
    { href: '/templates/couple', label: 'Couple Templates' },
    { href: '/templates/love', label: 'Love Templates' },
    { href: '/templates/kids', label: 'Kids Templates' },
    { href: '/templates/trending', label: 'Trending Templates' },
  ],
  festivals: [
    { href: '/templates/festival/diwali', label: 'Diwali Face Swap' },
    { href: '/templates/festival/christmas', label: 'Christmas Face Swap' },
    { href: '/templates/festival/eid', label: 'Eid Face Swap' },
    { href: '/templates/festival/halloween', label: 'Halloween Face Swap' },
    { href: '/templates/festival/holi', label: 'Holi Face Swap' },
    { href: '/templates/festival/new-year', label: 'New Year Face Swap' },
  ],
  blog: [
    { href: '/blog', label: 'All Articles' },
    { href: '/blog/best-face-swap-apps-2026', label: 'Best Face Swap Apps 2026' },
    { href: '/blog/ai-face-swap-technology-explained', label: 'AI Face Swap Explained' },
    { href: '/blog/face-swap-vs-deepfake', label: 'Face Swap vs Deepfake' },
    { href: '/blog/face-swap-for-instagram', label: 'Face Swap for Instagram' },
    { href: '/blog/face-swap-app-vs-photoshop', label: 'Face Swap vs Photoshop' },
  ],
  legal: [
    { href: '/about', label: 'About Us' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/responsible-use', label: 'Responsible Use' },
    { href: '/support', label: 'Support' },
  ],
} as const;
