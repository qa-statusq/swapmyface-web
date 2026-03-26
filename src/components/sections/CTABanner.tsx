import Link from 'next/link';
import { playStoreLink } from '@/lib/constants';
import PlayStoreIcon from '@/components/ui/PlayStoreIcon';

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
      <div className="reveal-scale mx-auto max-w-4xl px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-panel p-8 text-center sm:p-12">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent-2/10" />

          {/* Animated corner accents */}
          <div className="absolute top-4 left-4 h-8 w-8 rounded-tl-xl border-t-2 border-l-2 border-accent/20" />
          <div className="absolute top-4 right-4 h-8 w-8 rounded-tr-xl border-t-2 border-r-2 border-accent/20" />
          <div className="absolute bottom-4 left-4 h-8 w-8 rounded-bl-xl border-b-2 border-l-2 border-accent/20" />
          <div className="absolute bottom-4 right-4 h-8 w-8 rounded-br-xl border-b-2 border-r-2 border-accent/20" />

          <div className="relative">
            <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{heading}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">{subtext}</p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href={playStoreLink(campaign)}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-xl bg-accent px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:shadow-xl hover:shadow-accent/30"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <PlayStoreIcon />
                Download Free on Google Play
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
