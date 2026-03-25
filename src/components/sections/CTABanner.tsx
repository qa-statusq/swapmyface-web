import Link from 'next/link';
import { playStoreLink } from '@/lib/constants';

interface CTABannerProps {
  campaign: string;
  heading?: React.ReactNode;
  subtext?: string;
}

const defaultHeading = (
  <>Download Swap<span className="brand-italic text-accent">MyFace</span><span className="inline-block h-1.5 w-1.5 rounded-full bg-[#7c5cfc] ml-[1px] align-super" /> Free on Google Play</>
);

export default function CTABanner({
  campaign,
  heading = defaultHeading,
  subtext = 'No subscription. No credits. Free forever. 500+ templates. Unlimited swaps. Ultra-realistic HD results.',
}: CTABannerProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-panel p-8 text-center sm:p-12">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10" />
          <div className="relative">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{heading}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">{subtext}</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={playStoreLink(campaign)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186a.996.996 0 01-.609-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.991l-2.302 2.302L5.864 2.658z" />
                </svg>
                Download Free on Google Play
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
