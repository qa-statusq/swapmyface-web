import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getTranslations } from '@/lib/getTranslations';
import { isRenderableSlug } from '@/lib/localeMetadata';
import HowItWorks from '@/components/sections/HowItWorks';
import FeatureGrid from '@/components/sections/FeatureGrid';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import TemplateShowcase from '@/components/sections/TemplateShowcase';
import FestivalHighlight from '@/components/sections/FestivalHighlight';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import HreflangTags from '@/components/seo/HreflangTags';
import { TEMPLATE_CATEGORIES } from '@/data/templates';
import { FESTIVALS } from '@/data/festivals';
import { BLOG_POSTS } from '@/data/blog';
import { HOME_FAQ } from '@/data/faq';
import { SITE_URL, playStoreLink } from '@/lib/constants';
import PlayStoreIcon from '@/components/ui/PlayStoreIcon';
import JsonLd from '@/components/seo/JsonLd';

interface LocalePageRendererProps {
  locale: string;
  slug: string[];
}

export default function LocalePageRenderer({ locale, slug }: LocalePageRendererProps) {
  if (!isRenderableSlug(slug)) {
    notFound();
  }

  const t = getTranslations(locale);
  const prefix = `/${locale}`;
  const joined = slug.join('/');

  switch (joined) {
    case 'how-it-works':
      return <HowItWorksContent t={t} prefix={prefix} />;
    case 'templates':
      return <TemplatesContent t={t} prefix={prefix} locale={locale} />;
    case 'templates/festival':
      return <FestivalTemplatesContent t={t} prefix={prefix} locale={locale} />;
    case 'templates/couple':
    case 'templates/kids':
    case 'templates/love':
    case 'templates/trending':
      return <TemplateCategoryContent t={t} prefix={prefix} category={slug[1]} />;
    case 'blog':
      return <BlogContent t={t} prefix={prefix} />;
    case 'support':
      return <SupportContent t={t} prefix={prefix} />;
    default:
      notFound();
  }
}

/* ── How It Works ── */
function HowItWorksContent({ t, prefix }: { t: ReturnType<typeof getTranslations>; prefix: string }) {
  return (
    <>
      <HreflangTags path="/how-it-works" />
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ label: t.nav.home, href: prefix }, { label: t.nav.howItWorks, href: prefix + '/how-it-works' }]} />
      </div>
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{t.sections.howItWorks}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">{t.sections.howItWorksSubtitle}</p>
        </div>
      </section>
      <HowItWorks translations={t.howItWorks} />
      <FeatureGrid translations={t.features} />
      <FAQ items={t.faq} heading={t.sections.faq} />
      <CTABanner campaign={`${prefix.slice(1)}_how_it_works`} heading={<>{t.sections.download}</>} subtext={t.sections.downloadSubtitle} />
    </>
  );
}

/* ── Templates Hub ── */
function TemplatesContent({ t, prefix, locale }: { t: ReturnType<typeof getTranslations>; prefix: string; locale: string }) {
  return (
    <>
      <HreflangTags path="/templates" />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: t.meta.templates.title,
        description: t.meta.templates.description,
        url: `${SITE_URL}${prefix}/templates`,
        isPartOf: { '@type': 'WebSite', name: 'SwapMyFace', url: SITE_URL },
        numberOfItems: 500,
      }} />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ label: t.nav.home, href: prefix }, { label: t.nav.templates, href: prefix + '/templates' }]} />
      </div>
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{t.sections.templates}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">{t.sections.templatesSubtitle}</p>
        </div>
      </section>
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TEMPLATE_CATEGORIES.map((cat) => (
              <Link key={cat.slug} href={prefix + cat.href} className="group rounded-2xl border border-line bg-surface/50 p-6 transition-all hover:border-accent/30 hover:shadow-lg">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">{cat.name}</h3>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">{cat.count}</span>
                </div>
                <p className="text-sm text-muted leading-relaxed">{cat.description}</p>
                <div className="mt-4 text-sm font-medium text-accent">{t.templateShowcase.browseTemplates} &rarr;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="border-t border-line py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="mb-8 text-2xl font-bold">{t.sections.festivals}</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {FESTIVALS.map((festival) => (
              <Link key={festival.slug} href={`${prefix}/templates/festival/${festival.slug}`} className="group flex items-center gap-3 rounded-xl border border-line bg-surface/50 p-4 transition-all hover:border-accent/30">
                <span className="text-2xl">{festival.emoji}</span>
                <span className="font-medium group-hover:text-accent transition-colors">{festival.name} {t.festivalHighlight.faceSwapSuffix}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner campaign={`${prefix.slice(1)}_templates`} heading={<>{t.sections.download}</>} subtext={t.sections.downloadSubtitle} />
    </>
  );
}

/* ── Festival Templates ── */
function FestivalTemplatesContent({ t, prefix, locale }: { t: ReturnType<typeof getTranslations>; prefix: string; locale: string }) {
  return (
    <>
      <HreflangTags path="/templates/festival" />
      <JsonLd data={{
        '@context': 'https://schema.org',
        '@type': 'CollectionPage',
        name: t.meta.festival.title,
        description: t.meta.festival.description,
        url: `${SITE_URL}${prefix}/templates/festival`,
        isPartOf: { '@type': 'WebSite', name: 'SwapMyFace', url: SITE_URL },
      }} />
      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ label: t.nav.home, href: prefix }, { label: t.nav.templates, href: prefix + '/templates' }, { label: t.sections.festivals, href: prefix + '/templates/festival' }]} />
      </div>
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{t.sections.festivals}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">{t.sections.festivalsSubtitle}</p>
        </div>
      </section>
      <section className="py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FESTIVALS.map((festival) => (
              <Link key={festival.slug} href={`${prefix}/templates/festival/${festival.slug}`} className="group flex items-start gap-4 rounded-2xl border border-line bg-surface/50 p-5 transition-all hover:border-accent/30">
                <span className="mt-0.5 text-3xl">{festival.emoji}</span>
                <div>
                  <h3 className="font-semibold group-hover:text-accent transition-colors">{festival.name} {t.festivalHighlight.faceSwapSuffix}</h3>
                  <p className="mt-1 text-sm text-muted leading-relaxed">{festival.shortDescription}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTABanner campaign={`${prefix.slice(1)}_festival_templates`} heading={<>{t.sections.download}</>} subtext={t.sections.downloadSubtitle} />
    </>
  );
}

/* ── Template Category (couple, kids, love, trending) ── */
function TemplateCategoryContent({ t, prefix, category }: { t: ReturnType<typeof getTranslations>; prefix: string; category: string }) {
  const cat = TEMPLATE_CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  return (
    <>
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ label: t.nav.home, href: prefix }, { label: t.nav.templates, href: prefix + '/templates' }, { label: cat.name, href: `${prefix}${cat.href}` }]} />
      </div>
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">{cat.name} {t.festivalHighlight.faceSwapSuffix}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">{cat.description}</p>
          <div className="mt-8">
            <Link href={playStoreLink(`${prefix.slice(1)}_${category}_templates`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90">
              <PlayStoreIcon />
              {t.hero.cta}
            </Link>
          </div>
        </div>
      </section>
      <CTABanner campaign={`${prefix.slice(1)}_${category}_templates`} heading={<>{t.sections.download}</>} subtext={t.sections.downloadSubtitle} />
    </>
  );
}

/* ── Blog (English content, localized UI) ── */
function BlogContent({ t, prefix }: { t: ReturnType<typeof getTranslations>; prefix: string }) {
  return (
    <>
      <HreflangTags path="/blog" />
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ label: t.nav.home, href: prefix }, { label: t.nav.blog, href: prefix + '/blog' }]} />
      </div>
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl">SwapMyFace {t.nav.blog}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            Guides, tips, ideas, and insights about AI face swap technology, creative templates, and getting the best results with SwapMyFace.
          </p>
        </div>
      </section>
      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-6">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group rounded-2xl border border-line bg-surface/50 p-6 transition-all hover:border-accent/30 hover:shadow-lg sm:p-8">
                <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted">
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">{post.category}</span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold group-hover:text-accent transition-colors sm:text-2xl">{post.title}</h2>
                <p className="mt-3 text-muted leading-relaxed">{post.description}</p>
                <div className="mt-4 text-sm font-medium text-accent">Read article &rarr;</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Support (English content, localized UI) ── */
function SupportContent({ t, prefix }: { t: ReturnType<typeof getTranslations>; prefix: string }) {
  return (
    <>
      <HreflangTags path="/support" />
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs items={[{ label: t.nav.home, href: prefix }, { label: t.nav.support, href: prefix + '/support' }]} />
      </div>
      <div className="legal-shell">
        <div className="legal-meta">
          <span>{t.nav.support}</span>
          <span>{t.footer.contact} <span className="mono">contact@facefitswap.com</span></span>
        </div>

        <h1>{t.nav.support}</h1>
        <p>
          For support, policy questions, bug reports, rights concerns, or app-related issues, contact us
          using the email below.
        </p>

        <section className="legal-section">
          <h2>1. Contact</h2>
          <p className="mono">contact@facefitswap.com</p>
        </section>

        <section className="legal-section">
          <h2>2. What to include in your message</h2>
          <ul>
            <li>device model and OS version;</li>
            <li>app version;</li>
            <li>what you were doing when the issue happened;</li>
            <li>screenshots or screen recordings if available;</li>
            <li>the date and time of the issue.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>3. Common topics</h2>
          <ul>
            <li><strong>App not opening:</strong> restart the app and check network connectivity.</li>
            <li><strong>Ad not loading:</strong> ad availability is not guaranteed; the app may continue without showing an ad.</li>
            <li><strong>Swap not processing:</strong> verify internet connection and try again with supported media.</li>
            <li><strong>Permissions:</strong> check camera and media permissions in device settings.</li>
            <li><strong>Legal questions:</strong> review our Privacy Policy, Terms of Service, and Responsible Use pages.</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Rights and abuse concerns</h2>
          <p>
            If you are reporting impersonation, misuse of your likeness, unlawful content, abuse involving
            minors, or other rights-related concerns, include as much detail as possible so we can review
            the report.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Legal and policy pages</h2>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/responsible-use">Responsible Use</a></li>
          </ul>
        </section>
      </div>
    </>
  );
}
