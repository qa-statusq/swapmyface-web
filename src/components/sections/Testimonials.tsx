const TESTIMONIALS = [
  {
    name: 'Priya S.',
    location: 'India',
    text: 'Best face swap app I have used! The Diwali templates are amazing and the results look so real. Love that it is completely free.',
    rating: 5,
  },
  {
    name: 'James K.',
    location: 'United States',
    text: 'I have tried almost every face swap app out there. SwapMyFace has the most templates and the quality is genuinely HD. No annoying subscriptions either.',
    rating: 5,
  },
  {
    name: 'Yuki T.',
    location: 'Japan',
    text: 'The AI quality is impressive. Skin tone and lighting match perfectly every time. I use it for fun with friends and the results always get laughs.',
    rating: 5,
  },
  {
    name: 'Fatima A.',
    location: 'UAE',
    text: 'Love the Eid templates! It is so easy to use and the results look completely natural. My whole family enjoys using this app.',
    rating: 5,
  },
  {
    name: 'Carlos M.',
    location: 'Brazil',
    text: 'I was skeptical about a free face swap app being any good, but SwapMyFace proved me wrong. HD quality, tons of templates, and zero cost.',
    rating: 5,
  },
  {
    name: 'Minh L.',
    location: 'Vietnam',
    text: 'New templates every day and the couple templates are so cute! The app is fast and results come out perfectly every time.',
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 text-amber-400" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 20 20"
          fill={i < rating ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M10 1l2.39 4.84L17.82 7l-3.91 3.81.92 5.38L10 13.47l-4.83 2.72.92-5.38L2.18 7l5.43-1.16L10 1z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Loved by Users Worldwide</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            Real reviews from real users across the globe.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="reveal-scale card-hover flex flex-col rounded-2xl border border-line bg-surface/50 p-5"
            >
              <StarRating rating={t.rating} />
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/15 text-sm font-bold text-accent">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
