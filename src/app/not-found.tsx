import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-accent">404</h1>
        <h2 className="mt-4 text-2xl font-bold">Page Not Found</h2>
        <p className="mt-3 text-muted">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
          >
            Go to Homepage
          </Link>
          <Link
            href="/templates"
            className="rounded-xl border border-line px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5"
          >
            Browse Templates
          </Link>
        </div>
      </div>
    </section>
  );
}
