import type { Metadata } from 'next';
import { generatePageMetadata } from '@/lib/metadata';
import JsonLd from '@/components/seo/JsonLd';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import { SITE_URL } from '@/lib/constants';

export const dynamic = 'force-static';

export const metadata: Metadata = generatePageMetadata({
  title: 'Terms of Service',
  description:
    'SwapMyFace Terms of Service aligned to the current app setup, user responsibilities, prohibited uses, and service limitations.',
  path: '/terms',
});

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Terms of Service',
  description: 'SwapMyFace Terms of Service — user responsibilities, prohibited uses, and service limitations.',
  url: `${SITE_URL}/terms`,
  inLanguage: 'en',
  isPartOf: { '@type': 'WebSite', url: SITE_URL, name: 'SwapMyFace' },
  dateModified: '2026-03-12',
};

export default function TermsPage() {
  return (
    <div className="legal-shell">
      <JsonLd data={webPageSchema} />
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Terms of Service', href: '/terms' }]} />
      <div className="legal-meta">
        <span>Terms of Service</span>
        <span>Last updated: March 12, 2026</span>
        <span>Contact: <span className="mono">contact@facefitswap.com</span></span>
      </div>

      <h1>Terms of Service</h1>
      <p>
        Welcome to SwapMyFace (&ldquo;App&rdquo;, &ldquo;Service&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;).
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the SwapMyFace
        mobile application, including all features, content, and services offered through the App.
      </p>
      <p>
        By downloading, installing, accessing, or using SwapMyFace, you acknowledge that you
        have read, understood, and agree to be bound by these Terms and our{' '}
        <a href="/privacy">Privacy Policy</a>.
        If you do not agree with any part of these Terms, you must not use the App.
      </p>

      <nav className="legal-nav" aria-label="Terms sections">
        <a href="#acceptance">Acceptance</a>
        <a href="#service">Service</a>
        <a href="#responsibility">Responsibility</a>
        <a href="#prohibited">Prohibited Uses</a>
        <a href="#ai-disclaimer">AI Disclaimer</a>
        <a href="#ip">Intellectual Property</a>
        <a href="#data">Privacy &amp; Data</a>
        <a href="#availability">Availability</a>
        <a href="#purchases">Purchases</a>
        <a href="#ads">Advertisements</a>
        <a href="#termination">Termination</a>
        <a href="#liability">Liability</a>
        <a href="#indemnification">Indemnification</a>
        <a href="#third-party">Third Parties</a>
        <a href="#modifications">Modifications</a>
        <a href="#governing-law">Governing Law</a>
        <a href="#severability">Severability</a>
        <a href="#entire-agreement">Entire Agreement</a>
        <a href="#contact">Contact</a>
      </nav>

      <section className="legal-section" id="acceptance">
        <h2>1. Acceptance of Terms</h2>
        <p>By using SwapMyFace, you confirm that:</p>
        <ul>
          <li>You are at least 13 years of age (or the minimum age required in your jurisdiction).</li>
          <li>You have the legal capacity to enter into a binding agreement.</li>
          <li>You will comply with all applicable local, state, national, and international laws and regulations.</li>
          <li>You accept these Terms in their entirety.</li>
        </ul>
      </section>

      <section className="legal-section" id="service">
        <h2>2. Description of Service</h2>
        <p>SwapMyFace is an AI-powered face swap application that allows users to:</p>
        <ul>
          <li>Upload photos containing one or more faces.</li>
          <li>Select templates or provide target media made available by the App.</li>
          <li>Use automated AI processing to generate edited output media.</li>
        </ul>
        <p>
          The App is a self-serve software tool. We provide automated processing infrastructure only.
          We do not independently create, select, review, approve, endorse, or verify the legality,
          accuracy, quality, or appropriateness of user-provided content or user-generated output.
          All content created through the App is initiated by user action.
        </p>
      </section>

      <section className="legal-section" id="responsibility">
        <h2>3. User Responsibilities and Content Ownership</h2>
        <p>
          Users are solely responsible for the images they upload and generate using SwapMyFace.
          The App provides automated processing only and does not assume editorial control over user content.
        </p>
        <p>You represent and warrant that:</p>
        <ul>
          <li>You own or have obtained all necessary rights, permissions, and consents for any images you upload.</li>
          <li>You have obtained explicit consent from any identifiable individuals whose faces appear in the images you upload, before using their likeness in any face swap.</li>
          <li>Your use of the App does not infringe upon, misappropriate, or violate any third party&apos;s intellectual property rights, privacy rights, publicity rights, or any other legal rights.</li>
          <li>You are solely responsible for any content you create, share, distribute, export, save, or publish using the App.</li>
          <li>You will not rely on the App for legal, identity, biometric, security, medical, employment, or governmental purposes.</li>
          <li>Any misuse of the App or its output is solely your responsibility.</li>
        </ul>
      </section>

      <section className="legal-section" id="prohibited">
        <h2>4. Prohibited Uses</h2>
        <p>SwapMyFace strictly prohibits the creation of:</p>
        <ul>
          <li><strong>Non-consensual face swaps</strong> &mdash; Using the likeness of any person without their explicit prior consent.</li>
          <li><strong>Nudity or sexually explicit deepfakes</strong> &mdash; Creating, generating, or distributing any sexually explicit, pornographic, or nude imagery using face swap technology.</li>
          <li><strong>Harassment, defamation, or impersonation</strong> &mdash; Creating content intended to harass, bully, threaten, defame, or impersonate any individual or entity.</li>
          <li><strong>Content involving minors</strong> &mdash; Any face swap content that involves, depicts, or targets individuals under the age of 18 in any inappropriate or exploitative manner.</li>
          <li><strong>Fraudulent or deceptive content</strong> &mdash; Creating images intended to deceive, defraud, or mislead others, including but not limited to identity fraud, fake identification, or misinformation.</li>
          <li><strong>Illegal activities</strong> &mdash; Using the App to facilitate, promote, or engage in any activity that is illegal under applicable law.</li>
          <li><strong>Hate speech or discrimination</strong> &mdash; Creating content that promotes hatred, violence, or discrimination based on race, ethnicity, gender, religion, sexual orientation, disability, or any other protected characteristic.</li>
          <li><strong>Political manipulation</strong> &mdash; Creating deepfake content of political figures or content intended to manipulate public opinion or interfere with democratic processes.</li>
          <li>Any use that violates applicable law, platform policy, or the rights of any person or entity.</li>
        </ul>
        <div className="callout warn">
          We may investigate, remove, restrict, suspend, or terminate access to the App for any suspected violation
          of these Terms, for legal compliance, for platform integrity, or to protect our systems, users, partners,
          or reputation, with or without notice and without liability to you.
        </div>
      </section>

      <section className="legal-section" id="ai-disclaimer">
        <h2>5. AI-Generated Content Disclaimer</h2>
        <p>
          All images processed through SwapMyFace are generated using artificial intelligence
          technology. You acknowledge and agree that:
        </p>
        <ul>
          <li>AI-generated results may not be perfect, accurate, or suitable for all purposes.</li>
          <li>The quality and accuracy of face swaps depend on the quality and characteristics of uploaded images.</li>
          <li>AI processing may occasionally produce unexpected, unintended, or imperfect results.</li>
          <li>SwapMyFace is not responsible for any decision, action, loss, claim, or harm arising from use of AI-generated content.</li>
          <li>Generated images may contain visible artifacts, distortions, inconsistencies, watermarks, or other indicators of AI processing.</li>
          <li>We do not guarantee that output will meet your expectations, be commercially usable, or be fit for any particular purpose.</li>
        </ul>
      </section>

      <section className="legal-section" id="ip">
        <h2>6. Intellectual Property</h2>
        <ul>
          <li><strong>App Ownership:</strong> The SwapMyFace application, including its design, code, AI models, algorithms, logos, trademarks, and all related intellectual property, are owned by SwapMyFace and its licensors. All rights are reserved.</li>
          <li><strong>User Content:</strong> You retain ownership of the original content you upload, subject to any third-party rights. You grant SwapMyFace a limited, non-exclusive, royalty-free license to host, copy, transmit, process, adapt, and transform such content solely as necessary to operate, secure, troubleshoot, improve, and provide the App.</li>
          <li><strong>Generated Content:</strong> You own the output images generated through your use of the App, subject to these Terms and any applicable third-party rights.</li>
          <li><strong>Template Images:</strong> Template images provided within the App are licensed for use exclusively within SwapMyFace. You may not extract, redistribute, resell, or use template images outside of the App unless we expressly permit it.</li>
          <li>We reserve all rights not expressly granted in these Terms.</li>
        </ul>
      </section>

      <section className="legal-section" id="data">
        <h2>7. Privacy and Data Handling</h2>
        <p>Your privacy is important to us. Our data handling practices include:</p>
        <ul>
          <li>Photos uploaded by users for processing are permanently deleted from our servers within <strong>24 hours</strong> of job completion. Generated face swap results and output files may be retained for up to <strong>90 days</strong> to allow users to access, download, or re-share their results, after which they are permanently deleted.</li>
          <li>We may use trusted third-party service providers and infrastructure partners to process, store, transmit, secure, monitor, and operate the App.</li>
          <li>We do not sell your uploaded images or generated content as standalone content to third parties.</li>
          <li>We may collect usage data, device information, crash reports, diagnostics, and analytics to operate, secure, monitor, and improve the App.</li>
          <li>We may retain limited operational records, logs, abuse-prevention records, and legally required data for longer periods where necessary for security, fraud prevention, dispute resolution, legal compliance, or enforcement of these Terms.</li>
          <li>Features of the App may require internet access, device permissions, and communication with our servers or service providers.</li>
          <li>For complete details on how we collect, use, and protect your personal information, please refer to our <a href="/privacy">Privacy Policy</a>.</li>
          <li>By using the App, you consent to the collection and use of data as described in our Privacy Policy.</li>
        </ul>
      </section>

      <section className="legal-section" id="availability">
        <h2>8. App Availability and Changes</h2>
        <ul>
          <li>We may add, remove, suspend, limit, replace, or modify any feature, workflow, content set, template library, queue rule, quality setting, or technical requirement at any time.</li>
          <li>We do not guarantee uninterrupted availability of the App or any specific feature.</li>
          <li>We may impose usage limits, throttling, maintenance windows, or service restrictions to protect infrastructure, comply with law, or maintain service quality.</li>
          <li>We may update the App automatically or require you to update to continue using some or all features.</li>
          <li>We are not liable for any loss caused by service interruptions, feature removal, third-party outages, or changes to the App.</li>
        </ul>
      </section>

      <section className="legal-section" id="purchases">
        <h2>9. In-App Purchases and Paid Features</h2>
        <ul>
          <li>Certain versions of the App may offer paid features, subscriptions, premium access, or other in-app purchases now or in the future.</li>
          <li>Where offered, all purchases are processed through the Apple App Store or Google Play Store and are subject to the terms, billing rules, and refund policies of the applicable platform.</li>
          <li>We may change pricing, packaging, features, eligibility, promotional offers, or access terms at any time to the extent permitted by applicable law.</li>
          <li>Unless otherwise required by law or platform policy, purchases are non-refundable.</li>
          <li>Access to any paid or premium feature may be suspended, changed, or discontinued if required for legal, technical, security, abuse-prevention, or platform-related reasons.</li>
        </ul>
      </section>

      <section className="legal-section" id="ads">
        <h2>10. Advertisements</h2>
        <p>
          The App may display advertisements provided by third-party ad networks.
          By using the App, you acknowledge that:
        </p>
        <ul>
          <li>Advertisements may be displayed during your use of the App.</li>
          <li>Third-party advertisers may collect data as described in our Privacy Policy.</li>
          <li>Ad availability is not guaranteed, and failure to load or display an ad does not create any obligation or liability on our part.</li>
          <li>We are not responsible for the content, accuracy, legality, or availability of third-party advertisements.</li>
        </ul>
      </section>

      <section className="legal-section" id="termination">
        <h2>11. Suspension and Termination</h2>
        <p>We reserve the right, at our sole discretion, to:</p>
        <ul>
          <li>Suspend, restrict, or terminate your access to the App at any time, with or without notice.</li>
          <li>Remove, block, or refuse to process any content.</li>
          <li>Disable features, reject requests, or impose access controls to protect the App, our partners, other users, or our legal and business interests.</li>
          <li>Cooperate with law enforcement, regulators, rights holders, or platform operators where required or reasonably appropriate.</li>
        </ul>
        <p>
          Upon suspension or termination, your right to use the App ends immediately. Sections that by their nature should survive termination will survive.
        </p>
      </section>

      <section className="legal-section" id="liability">
        <h2>12. Limitation of Liability</h2>
        <p>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:</p>
        <ul>
          <li>SWAPMYFACE IS PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE.</li>
          <li>WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, AND ACCURACY.</li>
          <li>IN NO EVENT SHALL SWAPMYFACE, ITS DEVELOPERS, AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES.</li>
          <li>OUR TOTAL LIABILITY FOR ANY CLAIMS ARISING FROM YOUR USE OF THE APP SHALL NOT EXCEED THE AMOUNT YOU PAID TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR $50.00 USD, WHICHEVER IS GREATER.</li>
          <li>WE ARE NOT LIABLE FOR ANY CONTENT CREATED, UPLOADED, PROCESSED, SAVED, SHARED, OR DISTRIBUTED BY USERS OF THE APP.</li>
          <li>WE ARE NOT LIABLE FOR PLATFORM ACTIONS, APP STORE DECISIONS, AD NETWORK BEHAVIOR, THIRD-PARTY SERVICE FAILURES, OR DELAYS CAUSED BY INFRASTRUCTURE PROVIDERS.</li>
        </ul>
      </section>

      <section className="legal-section" id="indemnification">
        <h2>13. Indemnification</h2>
        <p>
          You agree to indemnify, defend, and hold harmless SwapMyFace, its developers, affiliates,
          officers, directors, employees, and agents from and against any and all claims, damages, obligations,
          losses, liabilities, costs, and expenses (including reasonable attorney&apos;s fees) arising from:
        </p>
        <ul>
          <li>Your use or misuse of the App.</li>
          <li>Your violation of these Terms.</li>
          <li>Your violation of any third party&apos;s rights, including intellectual property, privacy, or publicity rights.</li>
          <li>Any content you create, upload, process, save, share, export, or distribute using the App.</li>
          <li>Any claim that your use of the App caused damage to a third party.</li>
        </ul>
      </section>

      <section className="legal-section" id="third-party">
        <h2>14. Third-Party Services</h2>
        <p>The App may integrate with or rely on third-party services, including but not limited to:</p>
        <ul>
          <li>Cloud processing services for AI image generation.</li>
          <li>Authentication, analytics, crash reporting, and remote configuration services.</li>
          <li>Payment processing platforms.</li>
          <li>Ad networks and hosting or storage providers.</li>
        </ul>
        <p>
          We are not responsible for the availability, accuracy, or content of third-party services.
          Your use of third-party services is subject to their respective terms and policies. Third-party services may
          change, fail, restrict access, suspend service, or impose their own rules without notice to us.
        </p>
      </section>

      <section className="legal-section" id="modifications">
        <h2>15. Modifications to Terms</h2>
        <p>
          We reserve the right to modify these Terms at any time. Changes will be effective upon
          posting the updated Terms within the App. Your continued use of the App after any changes
          constitutes your acceptance of the revised Terms.
        </p>
        <p>We encourage you to review these Terms periodically for any updates.</p>
      </section>

      <section className="legal-section" id="governing-law">
        <h2>16. Governing Law and Dispute Resolution</h2>
        <ul>
          <li>These Terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.</li>
          <li>Any disputes arising from these Terms or your use of the App shall first be attempted to be resolved through good-faith negotiation.</li>
          <li>If negotiation fails, disputes shall be resolved through binding arbitration in accordance with applicable arbitration rules.</li>
          <li>You agree to waive any right to participate in a class action lawsuit or class-wide arbitration.</li>
        </ul>
      </section>

      <section className="legal-section" id="severability">
        <h2>17. Severability</h2>
        <p>
          If any provision of these Terms is found to be unenforceable or invalid by a court of
          competent jurisdiction, that provision shall be modified to the minimum extent necessary
          to make it enforceable, and the remaining provisions shall continue in full force and effect.
        </p>
      </section>

      <section className="legal-section" id="entire-agreement">
        <h2>18. Entire Agreement</h2>
        <p>
          These Terms, together with our <a href="/privacy">Privacy Policy</a>,
          constitute the entire agreement between you and SwapMyFace regarding your use of the App
          and supersede all prior agreements, understandings, and representations.
        </p>
      </section>

      <section className="legal-section" id="contact">
        <h2>19. Contact Information</h2>
        <p>
          If you have any questions, concerns, or feedback regarding these Terms, please contact us at:
        </p>
        <p className="mono">contact@facefitswap.com</p>
        <p>
          By using SwapMyFace, you acknowledge that you have read, understood, and agree to
          be bound by these Terms of Service.
        </p>
      </section>
    </div>
  );
}
