import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const dynamic = 'force-static';

export const metadata: Metadata = generatePageMetadata({
  title: 'Support',
  description:
    'SwapMyFace support page with contact information, common questions, legal links, and issue-reporting guidance.',
  path: '/support',
});

export default function SupportPage() {
  return (
    <div className="legal-shell">
      <div className="legal-meta">
        <span>Support</span>
        <span>Contact: <span className="mono">contact@facefitswap.com</span></span>
      </div>

      <h1>Support</h1>
      <p>
        For support, policy questions, bug reports, rights concerns, or app-related issues, contact us
        using the email below. This page is intended to give reviewers and users a clear public support
        route.
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
  );
}
