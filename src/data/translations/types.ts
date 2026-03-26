export interface FAQItem {
  question: string;
  answer: string;
}

export interface TranslationSchema {
  meta: {
    home: { title: string; description: string };
    faceSwap: { title: string; description: string };
    festival: { title: string; description: string };
    howItWorks: { title: string; description: string };
    templates: { title: string; description: string };
    support: { title: string; description: string };
    diwali?: { title: string; description: string };
    holi?: { title: string; description: string };
    eid?: { title: string; description: string };
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  stats: {
    templates: string;
    free: string;
    swaps: string;
    results: string;
    newDaily: string;
  };
  sections: {
    howItWorks: string;
    howItWorksSubtitle: string;
    templates: string;
    templatesSubtitle: string;
    features: string;
    festivals: string;
    festivalsSubtitle: string;
    faq: string;
    download: string;
    downloadSubtitle: string;
  };
  nav: {
    home: string;
    faceSwap: string;
    templates: string;
    howItWorks: string;
    blog: string;
    support: string;
    downloadFree: string;
    downloadFreeGooglePlay: string;
  };
  howItWorks: {
    heading: string;
    subtitle: string;
    steps: { title: string; description: string }[];
  };
  features: {
    heading: string;
    subtitle: string;
    items: { title: string; description: string }[];
  };
  footer: {
    tagline: string;
    contact: string;
    product: string;
    templates: string;
    festivals: string;
    legal: string;
    copyright: string;
  };
  templateShowcase: {
    heading: string;
    subtitle: string;
    browseTemplates: string;
    viewAll: string;
  };
  festivalHighlight: {
    heading: string;
    subtitle: string;
    faceSwapSuffix: string;
    seeAll: string;
  };
  faq: FAQItem[];
  notFound: {
    title: string;
    subtitle: string;
    goHome: string;
    browseTemplates: string;
  };
  faceSwapShowcase: {
    heading: string;
    subtitle: string;
    templateLabel: string;
    customLabel: string;
    before: string;
    after: string;
  };
}
