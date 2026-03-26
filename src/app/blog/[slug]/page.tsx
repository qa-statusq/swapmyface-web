import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogPostBySlug } from '@/data/blog';
import { SITE_URL, SITE_NAME, playStoreLink } from '@/lib/constants';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd from '@/components/seo/JsonLd';
import FAQ from '@/components/sections/FAQ';
import CTABanner from '@/components/sections/CTABanner';
import PlayStoreIcon from '@/components/ui/PlayStoreIcon';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.description,
    keywords: post.keywords,
    alternates: { canonical: `${SITE_URL}/blog/${slug}` },
    openGraph: {
      title: post.metaTitle,
      description: post.description,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: SITE_NAME,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedDate || post.date,
      authors: [post.author?.name || SITE_NAME],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metaTitle,
      description: post.description,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: {
      '@type': 'Person',
      name: post.author?.name || SITE_NAME,
      jobTitle: post.author?.role,
      url: `${SITE_URL}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${slug}`,
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${slug}` },
          ]}
        />
      </div>

      {/* Article Header */}
      <header className="py-8 sm:py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
              {post.category}
            </span>
            <time dateTime={post.date}>{post.date}</time>
            <span>{post.readTime}</span>
          </div>
          {post.author && (
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                {post.author.name.charAt(0)}
              </div>
              <div>
                <Link href="/about" className="text-sm font-semibold hover:text-accent transition-colors">
                  {post.author.name}
                </Link>
                <p className="text-xs text-muted">{post.author.role}</p>
              </div>
            </div>
          )}
          <h1 className="hero-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-lg text-muted leading-relaxed">{post.description}</p>
        </div>
      </header>

      {/* Article Body */}
      <article className="pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          {post.sections.map((section, i) => (
            <section key={i} className="reveal mb-10">
              <h2 className="mb-4 text-2xl font-bold">{section.heading}</h2>
              {section.content.map((paragraph, j) => (
                <p key={j} className="mb-4 text-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>
          ))}

          {/* Internal Links */}
          <div className="reveal my-10 rounded-2xl border border-line bg-surface/50 p-6">
            <h3 className="mb-4 text-lg font-semibold">Related Pages</h3>
            <div className="flex flex-wrap gap-3">
              {post.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-line bg-bg px-4 py-2 text-sm font-medium text-accent transition-colors hover:border-accent/30 hover:bg-accent/10"
                >
                  {link.label} &rarr;
                </Link>
              ))}
            </div>
          </div>

          {/* Download CTA mid-article */}
          <div className="my-10 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
            <p className="text-lg font-semibold">Try SwapMyFace Free</p>
            <p className="mt-2 text-sm text-muted">500+ templates. Unlimited swaps. Full HD. Zero cost.</p>
            <Link
              href={playStoreLink(`blog_${slug}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              <PlayStoreIcon />
              Download Free on Google Play
            </Link>
          </div>
        </div>
      </article>

      {/* FAQ */}
      {post.faq && post.faq.length > 0 && (
        <FAQ items={post.faq} heading="FAQ" />
      )}

      <CTABanner campaign={`blog_${slug}`} />
    </>
  );
}
