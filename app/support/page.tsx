import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Support | TL3B",
  description: "Get support for TL3B.",
};

const supportItems = [
  {
    title: "Account help",
    text: "Get help with login, profile details, privacy settings, and account deletion.",
  },
  {
    title: "Match issues",
    text: "Report problems with creating games, requests, invitations, player replacement, or reminders.",
  },
  {
    title: "Safety and privacy",
    text: "Ask questions about visibility, notifications, uploaded photos, and your data.",
  },
];

export default function SupportPage() {
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
          <Link href="/terms">Terms</Link>
        </div>
      </nav>

      <section className="support-hero">
        <p className="eyebrow">Support</p>
        <h1>We are here to help with TL3B.</h1>
        <p>
          Send us the email connected to your account, a short description of
          the issue, and screenshots if they help explain what happened.
        </p>
        <a className="primary-action" href="mailto:support@tl3ab.app">
          Email support@tl3ab.app
        </a>
      </section>

      <section className="section support-grid">
        {supportItems.map((item) => (
          <article className="feature-card" key={item.title}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="section privacy-preview">
        <div>
          <p className="eyebrow">For store review</p>
          <h2>Official TL3B policy links.</h2>
          <p>
            Use these pages for App Store and Google Play release information.
          </p>
        </div>
        <div className="policy-links">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Use</Link>
        </div>
      </section>
    </main>
  );
}
