import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terms of Use | TL3B",
  description: "Terms of Use for TL3B.",
};

export default function EnglishTermsPage() {
  return (
    <main className="ltr-page" lang="en" dir="ltr">
      <nav className="site-nav legal-nav" aria-label="Main navigation">
        <Link className="brand-link" href="/en">
          <Image
            src="/tl3b-full-logo.png"
            width={96}
            height={96}
            alt="TL3B logo"
            unoptimized
          />
        </Link>
        <div className="nav-links">
          <Link href="/en">Home</Link>
          <Link href="/en/privacy">Privacy</Link>
          <Link href="/en/support">Support</Link>
          <Link className="language-switch" href="/terms" lang="ar">
            العربية
          </Link>
        </div>
      </nav>

      <article className="legal-page">
        <p className="eyebrow">Last updated: July 27, 2026</p>
        <h1>Terms of Use</h1>
        <p className="legal-lead">
          These terms explain the rules for using TL3B. By using the app or
          website, you agree to use the service responsibly.
        </p>

        <section>
          <h2>Using TL3B</h2>
          <p>
            TL3B lets you create matches, invite players, request to join public
            games, manage participants, post in the community, and communicate
            around matches. You are responsible for the accuracy of the
            information you provide.
          </p>
        </section>

        <section>
          <h2>Account and conduct</h2>
          <p>
            Keep your account secure and do not use another person&apos;s
            account. Harassment, impersonation, spam, harmful content, or using
            TL3B in a way that harms players or the service is not allowed.
          </p>
        </section>

        <section>
          <h2>Matches and safety</h2>
          <p>
            Hosts and players are responsible for confirming court bookings,
            payment, attendance, and any other real-world arrangements. TL3B
            helps with coordination but does not operate courts or guarantee
            player attendance.
          </p>
        </section>

        <section>
          <h2>Content</h2>
          <p>
            You own the content you upload, such as posts, messages, profile
            photos, and booking images. You allow TL3B to store, display, and
            process that content as needed to operate the service.
          </p>
        </section>

        <section>
          <h2>Service changes</h2>
          <p>
            We may update, improve, or discontinue parts of the service. We may
            suspend accounts that violate these terms or create risk for users.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href="mailto:support@til3b.com">support@til3b.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
