import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Terms of Use | TL3B",
  description: "Terms of Use for TL3B.",
};

export default function TermsPage() {
  return (
    <main>
      <nav className="site-nav legal-nav" aria-label="Main navigation">
        <Link className="brand-link" href="/">
          <Image
            src="/tl3b-icon.png"
            width={48}
            height={48}
            alt="TL3B app icon"
          />
          <span>TL3B?</span>
        </Link>
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/support">Support</Link>
        </div>
      </nav>

      <article className="legal-page">
        <p className="eyebrow">Last updated July 26, 2026</p>
        <h1>Terms of Use</h1>
        <p className="legal-lead">
          These terms explain the rules for using TL3B. By using the app or
          website, you agree to use the service responsibly.
        </p>

        <section>
          <h2>Using TL3B</h2>
          <p>
            TL3B lets players create games, invite others, request to join
            public matches, manage participants, post in the community, and chat
            around match activity. You are responsible for the accuracy of the
            information you provide.
          </p>
        </section>

        <section>
          <h2>Accounts and conduct</h2>
          <p>
            Keep your account secure and do not use another person&apos;s
            account. Do not harass, impersonate, spam, upload harmful content,
            or use TL3B in a way that disrupts other players or the service.
          </p>
        </section>

        <section>
          <h2>Matches and safety</h2>
          <p>
            Hosts and players are responsible for confirming court bookings,
            payments, attendance, and any real-world arrangements. TL3B helps
            coordinate games but does not operate courts or guarantee player
            attendance.
          </p>
        </section>

        <section>
          <h2>Content</h2>
          <p>
            You keep ownership of content you submit, such as posts, messages,
            profile photos, and booking images. You give TL3B permission to
            store, display, and process that content as needed to operate the
            service.
          </p>
        </section>

        <section>
          <h2>Service changes</h2>
          <p>
            We may update, improve, pause, or remove parts of the service. We
            may also suspend accounts that violate these terms or create risk
            for other users.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For questions about these terms, contact{" "}
            <a href="mailto:support@tl3ab.app">support@tl3ab.app</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
