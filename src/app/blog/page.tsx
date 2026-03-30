import type { Metadata } from 'next';
import Link from 'next/link';
import { generatePageMetadata } from '@/lib/metadata';
import { BLOG_POSTS } from '@/data/blog';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import HreflangTags from '@/components/seo/HreflangTags';

export const dynamic = 'force-static';

export const metadata: Metadata = generatePageMetadata({
  title: 'Blog \u2014 Face Swap Tips, Guides & Ideas',
  description:
    'Read the SwapMyFace blog for face swap guides, AI technology insights, creative template ideas, and tips for getting the best results. Updated weekly.',
  path: '/blog',
  keywords: ['face swap blog', 'face swap tips', 'face swap ideas', 'ai face swap guide'],
});

export default function BlogPage() {
  return (
    <>
      <HreflangTags path="/blog" />
      <div className="mx-auto max-w-4xl px-4 pt-10 sm:px-6">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Blog', href: '/blog' },
          ]}
        />
      </div>

      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h1 className="hero-heading text-4xl font-extrabold leading-tight sm:text-5xl">
            SwapMyFace Blog
          </h1>
          <p className="hero-paragraph mx-auto mt-6 max-w-2xl text-lg text-muted leading-relaxed">
            Guides, tips, ideas, and insights about AI face swap technology, creative templates, and getting the best results with SwapMyFace.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="grid gap-6 stagger">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="reveal card-hover group rounded-2xl border border-line bg-surface/50 p-6 sm:p-8"
              >
                <div className="mb-3 flex flex-wrap items-center gap-3 text-sm text-muted">
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="text-xl font-bold group-hover:text-accent transition-colors sm:text-2xl">
                  {post.title}
                </h2>
                <p className="mt-3 text-muted leading-relaxed">{post.description}</p>
                <div className="mt-4 text-sm font-medium text-accent">
                  Read article &rarr;
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
