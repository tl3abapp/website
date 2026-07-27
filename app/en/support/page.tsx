import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Support | TL3B",
  description: "Support and account deletion instructions for TL3B.",
};

const supportItems = [
  {
    title: "Account help",
    text: "Login, profile, privacy settings, and account information updates.",
  },
  {
    title: "Match issues",
    text: "Creating a match, invites, join requests, replacing a player, or time alerts.",
  },
  {
    title: "Privacy and safety",
    text: "Visible information, notifications, uploaded images, and deleting your account or data.",
  },
];

export default function EnglishSupportPage() {
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
          <Link href="/en/terms">Terms</Link>
          <Link className="language-switch" href="/support" lang="ar">
            العربية
          </Link>
        </div>
      </nav>

      <section className="support-hero">
        <p className="eyebrow">Support</p>
        <h1>We can help with anything inside TL3B.</h1>
        <p>
          Send us the email linked to your account, a short explanation of the
          issue, and screenshots if they help. Support will review your request
          and reply as soon as possible.
        </p>
        <a className="primary-action" href="mailto:support@til3b.com">
          Email support@til3b.com
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

      <section className="section delete-section">
        <div>
          <p className="eyebrow">Delete account</p>
          <h2>From inside the app</h2>
          <p>
            Open TL3B, go to Profile, choose Settings, then Account, and tap
            Delete account. After confirmation, your account and related data
            deletion request will begin.
          </p>
        </div>
        <div className="delete-steps">
          <span>1</span>
          <strong>Profile</strong>
          <span>2</span>
          <strong>Settings</strong>
          <span>3</span>
          <strong>Account, then Delete account</strong>
        </div>
      </section>

      <section className="section privacy-preview">
        <div>
          <p className="eyebrow">If you cannot access the app</p>
          <h2>Request deletion by email.</h2>
          <p>
            Email us from the address registered to your account at
            support@til3b.com, and include your username or phone number so we
            can verify the request.
          </p>
        </div>
        <div className="policy-links">
          <Link href="/en/privacy">Privacy Policy</Link>
          <Link href="/en/terms">Terms of Use</Link>
        </div>
      </section>
    </main>
  );
}
