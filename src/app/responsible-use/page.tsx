import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const dynamic = 'force-static';

export const metadata: Metadata = generatePageMetadata({
  title: 'Responsible Use',
  description:
    'Responsible Use policy for SwapMyFace covering consent, non-consensual edits, minors, fraud, harassment, and abuse prevention.',
  path: '/responsible-use',
});

export default function ResponsibleUsePage() {
  return (
    <div className="legal-shell">
      <div className="legal-meta">
        <span>Responsible Use</span>
        <span>Last updated: March 12, 2026</span>
      </div>

      <h1>Responsible Use</h1>
      <p>
        SwapMyFace is designed for creative editing, entertainment, and lawful personal use. Users are
        expected to act responsibly, obtain consent where required, and avoid any use that harms others,
        violates rights, or misuses AI-generated media.
      </p>

      <section className="legal-section">
        <h2>1. Consent Comes First</h2>
        <ul>
          <li>Do not upload or use someone&apos;s likeness without the permissions required by law or policy.</li>
          <li>Do not create deceptive, humiliating, defamatory, or non-consensual edits of real people.</li>
          <li>Do not use the app to impersonate another person in a misleading or abusive way.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>2. Zero Tolerance Uses</h2>
        <ul>
          <li>sexual or nude deepfakes;</li>
          <li>content involving minors in exploitative, inappropriate, or unlawful contexts;</li>
          <li>identity fraud, fake IDs, scams, blackmail, extortion, or harassment;</li>
          <li>political manipulation, misinformation, or harmful impersonation;</li>
          <li>hate speech, extremist propaganda, or incitement of violence.</li>
        </ul>
      </section>

      <section className="legal-section">
        <h2>3. Platform and Legal Compliance</h2>
        <p>
          Users must comply with applicable law, app store requirements, third-party rights, and our
          Terms of Service. Use of the app in violation of those requirements can lead to restrictions,
          suspension, reporting, or other action.
        </p>
      </section>

      <section className="legal-section">
        <h2>4. Developer Enforcement</h2>
        <p>
          We may investigate abuse, refuse processing, limit features, suspend access, or cooperate with
          legal or platform authorities where reasonably necessary. We are not required to provide advance
          notice before taking protective action.
        </p>
      </section>

      <section className="legal-section">
        <h2>5. Reporting Concerns</h2>
        <p>
          To report misuse, abuse, impersonation, or rights-related concerns, contact:
        </p>
        <p className="mono">contact@facefitswap.com</p>
      </section>
    </div>
  );
}
