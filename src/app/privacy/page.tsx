import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';

export const dynamic = 'force-static';

export const metadata: Metadata = generatePageMetadata({
  title: 'Privacy Policy \u2014 SwapMyFace',
  description:
    'SwapMyFace Privacy Policy covering uploads, retention, analytics, ads, cloud processing, diagnostics, and contact details.',
  path: '/privacy',
});

export default function PrivacyPage() {
  return (
    <div className="legal-shell">
      <div className="legal-meta">
        <span>Privacy Policy</span>
        <span>Last updated: March 12, 2026</span>
        <span>Contact: <span className="mono">contact@facefitswap.com</span></span>
      </div>

      <h1>Privacy Policy</h1>
      <p>
        This Privacy Policy explains how SwapMyFace (&ldquo;App&rdquo;, &ldquo;Service&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;)
        collects, uses, stores, shares, and protects information when you use the SwapMyFace
        mobile application and related services.
      </p>
      <p>
        We aim to be transparent about our data practices. By downloading, accessing, or using
        SwapMyFace, you acknowledge that you have read and understood this Privacy Policy.
        If you do not agree with this Privacy Policy, you should not use the App.
      </p>

      <nav className="legal-nav" aria-label="Privacy sections">
        <a href="#scope">Scope</a>
        <a href="#data-collect">Data We Collect</a>
        <a href="#data-direct">Data You Provide</a>
        <a href="#data-auto">Auto-Collected</a>
        <a href="#use">How We Use Data</a>
        <a href="#media">Media Processing</a>
        <a href="#legal-bases">Legal Bases</a>
        <a href="#sharing">Sharing</a>
        <a href="#third-party">Third Parties</a>
        <a href="#ads-analytics">Ads &amp; Analytics</a>
        <a href="#security">Security</a>
        <a href="#international">International</a>
        <a href="#children">Children</a>
        <a href="#rights">Your Rights</a>
        <a href="#retention">Retention</a>
        <a href="#permissions">Permissions</a>
        <a href="#changes">Changes</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="legal-section" id="scope">
        <h2>1. Scope of This Policy</h2>
        <p>This Privacy Policy applies to information collected through:</p>
        <ul>
          <li>The SwapMyFace mobile application.</li>
          <li>Our servers, APIs, cloud processing systems, and storage infrastructure used to operate the App.</li>
          <li>Customer support, abuse-prevention, analytics, crash reporting, monetization, and related operational tools connected to the App.</li>
        </ul>
        <p>
          This Privacy Policy does not automatically apply to third-party websites, app stores, advertising networks, payment processors, or other external services that may interact with the App. Those services may have their own privacy notices and terms.
        </p>
      </section>

      <section className="legal-section" id="data-collect">
        <h2>2. Information We Collect</h2>
        <p>Depending on how you use SwapMyFace, we may collect the following categories of information:</p>
        <ul>
          <li><strong>Account and authentication data</strong> &mdash; Such as anonymous identifiers assigned automatically without requiring account creation, platform account metadata, sign-in tokens, or Google account profile basics when you choose supported sign-in methods.</li>
          <li><strong>Uploaded media</strong> &mdash; Photos, images, or other media that you upload for face detection, face swapping, editing, analysis, generation, previewing, or export.</li>
          <li><strong>Generated output</strong> &mdash; Face-swapped images, previews, processed results, and related output files created through your use of the App.</li>
          <li><strong>Device and technical information</strong> &mdash; Device model, operating system version, app version, locale, language, approximate country or region inferred from technical signals, IP-related server logs, network state, crash diagnostics, and performance data.</li>
          <li><strong>Usage and interaction data</strong> &mdash; Screens viewed, buttons tapped, session timing, feature usage, queue activity, ad interactions, purchase events, and general analytics about how the App is used.</li>
          <li><strong>Support and communications data</strong> &mdash; Information you provide when contacting us, including your email address, messages, attachments, and any information you voluntarily include.</li>
          <li><strong>Fraud, abuse, and security data</strong> &mdash; Logs, moderation signals, request metadata, device-level abuse indicators, and operational records used to detect misuse, enforce policies, and protect the Service.</li>
          <li><strong>Transaction and subscription metadata</strong> &mdash; Platform purchase status, subscription tier, entitlement state, receipt validation outcomes, and billing-related status data made available to us through app store platforms or service providers.</li>
        </ul>
      </section>

      <section className="legal-section" id="data-direct">
        <h2>3. Information You Provide Directly</h2>
        <p>You may directly provide information to us when you:</p>
        <ul>
          <li>Upload media for AI processing.</li>
          <li>Sign in using an available authentication method.</li>
          <li>Contact support or send feedback.</li>
          <li>Participate in surveys, promotions, beta features, or testing opportunities if offered.</li>
          <li>Purchase or restore subscriptions or paid features where available.</li>
        </ul>
        <p>
          You are responsible for ensuring that you have the right to provide any personal information or media you submit through the App, including the likeness of any identifiable person in uploaded images.
        </p>
      </section>

      <section className="legal-section" id="data-auto">
        <h2>4. Information Collected Automatically</h2>
        <p>When you use SwapMyFace, certain information may be collected automatically by us or our service providers, including:</p>
        <ul>
          <li>App events and usage analytics.</li>
          <li>Crash reports and error diagnostics.</li>
          <li>Device identifiers or pseudonymous installation identifiers.</li>
          <li>Performance telemetry such as latency, feature reliability, queue timing, and failure rates.</li>
          <li>Ad-related event data where advertising is displayed.</li>
          <li>Security logs needed to detect spam, fraud, abuse, or unauthorized access.</li>
        </ul>
        <p>This data helps us operate, secure, troubleshoot, and improve the App.</p>
      </section>

      <section className="legal-section" id="use">
        <h2>5. How We Use Information</h2>
        <p>We may use collected information for the following purposes:</p>
        <ul>
          <li>To provide the App and perform AI face swap processing.</li>
          <li>To upload, transmit, store temporarily, process, and return generated output.</li>
          <li>To authenticate users and manage session state.</li>
          <li>To maintain infrastructure, monitor reliability, debug errors, and improve performance.</li>
          <li>To protect the App, users, partners, and systems from abuse, fraud, security threats, or policy violations.</li>
          <li>To understand product usage, improve features, optimize flows, and guide future development.</li>
          <li>To administer subscriptions, entitlements, ads, monetization systems, and app store integrations.</li>
          <li>To comply with legal obligations, enforce our Terms, and respond to lawful requests.</li>
          <li>To communicate with you regarding support issues, important policy changes, service notices, or operational updates.</li>
          <li>To maintain internal records reasonably necessary for auditing, dispute resolution, abuse prevention, and business continuity.</li>
        </ul>
      </section>

      <section className="legal-section" id="media">
        <h2>6. Media Processing and Retention</h2>
        <p>
          Because SwapMyFace is an AI-powered image processing service, uploaded and generated media may pass through our cloud infrastructure and trusted service providers in order to complete requested processing.
        </p>
        <p>Our current intended data handling approach includes:</p>
        <ul>
          <li>Uploaded media is used for face detection, alignment, generation, rendering, quality checks, delivery, and related technical processing.</li>
          <li>Generated output may be stored temporarily so it can be returned to your device, displayed in the App, or made available for download.</li>
          <li>Photos uploaded by users for processing are permanently deleted from our servers within <strong>24 hours</strong> of job completion.</li>
          <li>Generated face swap results and output files may be retained on our servers for up to <strong>90 days</strong> to allow users to access, download, or re-share their results, after which they are permanently deleted.</li>
          <li>Temporary caching, CDN delivery, secure object storage, and infrastructure-level backups may cause short-lived copies or delayed deletion timing in some systems.</li>
          <li>We do not state that uploaded or generated media is stored indefinitely for resale or standalone commercial licensing by us.</li>
          <li>We may retain minimal metadata, logs, job records, and abuse-prevention records after media deletion to operate and secure the Service.</li>
        </ul>
      </section>

      <section className="legal-section" id="legal-bases">
        <h2>7. Legal Bases and Consent</h2>
        <p>Depending on your jurisdiction, we may process personal information based on one or more of the following grounds:</p>
        <ul>
          <li>Your consent, including where you choose to upload images or permit certain device-level features.</li>
          <li>Performance of a contract or service request, such as processing images you submit through the App.</li>
          <li>Legitimate interests, including service security, analytics, fraud prevention, diagnostics, and product improvement.</li>
          <li>Compliance with legal obligations.</li>
        </ul>
        <p>
          Where consent is required by applicable law, you may decline certain processing by not using related features or by adjusting device or platform permissions, subject to feature availability and technical limitations.
        </p>
      </section>

      <section className="legal-section" id="sharing">
        <h2>8. When We Share Information</h2>
        <p>We may share information in limited circumstances, including:</p>
        <ul>
          <li>With cloud hosting, AI inference, storage, analytics, crash reporting, authentication, advertising, and infrastructure providers that help us operate the App.</li>
          <li>With app store or platform providers to manage subscriptions, purchases, entitlements, fraud prevention, and compliance.</li>
          <li>With professional advisors, auditors, insurers, or acquirers where reasonably necessary for legitimate business purposes.</li>
          <li>With law enforcement, regulators, courts, or other third parties when required by law or when reasonably necessary to investigate illegal activity, protect rights, or enforce our Terms.</li>
          <li>In connection with a merger, financing, acquisition, restructuring, sale of assets, or similar business transaction, subject to appropriate confidentiality and legal safeguards where applicable.</li>
        </ul>
        <p>
          We do not describe our practices as selling uploaded images or generated output as standalone content to unrelated third parties for their independent use.
        </p>
      </section>

      <section className="legal-section" id="third-party">
        <h2>9. Third-Party Services</h2>
        <p>SwapMyFace may rely on third-party tools and service providers, including providers for:</p>
        <ul>
          <li>Authentication and identity services.</li>
          <li>Analytics, diagnostics, and crash reporting.</li>
          <li>Cloud storage, content delivery, and AI processing.</li>
          <li>Advertising and monetization.</li>
          <li>Payment or subscription validation.</li>
          <li>Remote configuration, security monitoring, and abuse prevention.</li>
        </ul>
        <p>
          Those third parties may process information under their own policies and contractual arrangements with us. We encourage you to review the privacy practices of relevant platform providers, especially Google Play, Apple, Firebase-connected services, and other services that interact with your device or account.
        </p>
      </section>

      <section className="legal-section" id="ads-analytics">
        <h2>10. Advertising and Analytics</h2>
        <p>The App may display advertising and use analytics tools. In connection with those functions:</p>
        <ul>
          <li>We and our partners may collect event-level usage data, device information, and ad interaction data.</li>
          <li>Analytics tools help us understand app performance, retention, feature usage, and operational issues.</li>
          <li>Advertising providers may use technical signals to deliver, measure, limit, or optimize ads, subject to platform rules and applicable law.</li>
          <li>The exact identifiers and data points used may vary by platform, user permissions, OS behavior, and provider configuration.</li>
          <li>You may be able to manage certain advertising or analytics settings through your device, operating system, or platform account settings.</li>
        </ul>
      </section>

      <section className="legal-section" id="security">
        <h2>11. Data Security</h2>
        <p>
          We take reasonable administrative, technical, and organizational measures designed to protect information from unauthorized access, loss, misuse, alteration, or disclosure. These measures may include secure transport, access controls, environment segregation, logging, credential protections, and service-provider security controls.
        </p>
        <p>
          However, no system is completely secure. We cannot guarantee absolute security of any information transmitted over the internet or stored on connected systems. You use the App and submit information at your own risk.
        </p>
      </section>

      <section className="legal-section" id="international">
        <h2>12. International Processing</h2>
        <p>
          Your information may be processed, stored, or accessed in countries other than the country where you live, depending on where our providers, infrastructure, or support operations are located. Those countries may have data protection laws that differ from those in your jurisdiction.
        </p>
        <p>
          Where required, we may rely on contractual, technical, or organizational safeguards intended to support lawful cross-border processing.
        </p>
      </section>

      <section className="legal-section" id="children">
        <h2>13. Children&apos;s Privacy</h2>
        <p>
          SwapMyFace is not intended for children under the age of 13, or the minimum digital-consent age in the applicable jurisdiction if higher. We do not knowingly solicit or intentionally collect personal information from children in violation of applicable law.
        </p>
        <p>
          If you believe a child has provided personal information through the App without appropriate authorization, please contact us so we can review and take appropriate action.
        </p>
      </section>

      <section className="legal-section" id="rights">
        <h2>14. Your Rights and Choices</h2>
        <p>Depending on your location and applicable law, you may have rights relating to your personal information, which can include:</p>
        <ul>
          <li>Accessing or requesting a copy of certain personal information.</li>
          <li>Requesting correction of inaccurate information.</li>
          <li>Requesting deletion of certain information, subject to technical, legal, security, and operational limitations.</li>
          <li>Withdrawing consent where processing is based on consent.</li>
          <li>Objecting to or restricting certain processing in some circumstances.</li>
          <li>Requesting information about how data is used or shared.</li>
          <li>Managing device permissions or uninstalling the App.</li>
        </ul>
        <p>
          To exercise applicable rights, contact us at <span className="mono">contact@facefitswap.com</span>. We may need to verify your identity, request additional details, or decline requests where an exemption or legal basis allows us to do so.
        </p>
      </section>

      <section className="legal-section" id="retention">
        <h2>15. Data Retention</h2>
        <p>We retain information for as long as reasonably necessary for the purposes described in this Privacy Policy, including to:</p>
        <ul>
          <li>Provide the App and its features.</li>
          <li>Complete requested processing jobs.</li>
          <li>Maintain records related to subscriptions, support, security, and abuse prevention.</li>
          <li>Resolve disputes and enforce our Terms.</li>
          <li>Meet legal, tax, accounting, regulatory, or compliance obligations.</li>
        </ul>
        <p>Retention periods may vary by data type, system design, legal requirements, and legitimate business needs.</p>
        <p>For clarity: user-uploaded photos are permanently deleted within 24 hours of processing. Generated face swap results are retained for up to 90 days and then permanently deleted.</p>
      </section>

      <section className="legal-section" id="permissions">
        <h2>16. Platform Permissions</h2>
        <p>The App may request access to certain device capabilities, such as:</p>
        <ul>
          <li>Photos, media library, or file access so you can choose images.</li>
          <li>Camera access if capture features are offered.</li>
          <li>Network access to communicate with our infrastructure and service providers.</li>
          <li>Storage or save permissions to download or export generated content.</li>
        </ul>
        <p>If you deny certain permissions, some features may not function properly or may be unavailable.</p>
      </section>

      <section className="legal-section" id="changes">
        <h2>17. Policy Changes</h2>
        <p>
          We may update this Privacy Policy from time to time to reflect changes in the App, legal requirements, service providers, or our data practices. When we do, we may revise the &ldquo;Last updated&rdquo; date and, where appropriate, provide notice within the App or through other reasonable means.
        </p>
        <p>
          Your continued use of SwapMyFace after an updated Privacy Policy becomes effective means that you acknowledge the revised policy, subject to any additional consent requirements imposed by law.
        </p>
      </section>

      <section className="legal-section" id="contact">
        <h2>18. Contact Us</h2>
        <p>
          If you have questions, concerns, or privacy-related requests, please contact us at:
        </p>
        <p className="mono">contact@facefitswap.com</p>
        <p>
          If you contact us, please include enough detail for us to understand your request, including the device platform and the email address or account context associated with your use of the App where relevant.
        </p>
      </section>
    </div>
  );
}
