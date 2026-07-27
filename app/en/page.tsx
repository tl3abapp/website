import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "TL3B? | Padel Match Organizer",
  description:
    "Official website for TL3B, the padel match organizing app for creating games, inviting players, and managing match updates.",
};

const features = [
  {
    title: "Create matches easily",
    text: "Set the area, date, time, player level, privacy, and invitation type in a few simple steps.",
  },
  {
    title: "Invite friends and circles",
    text: "Choose who can see the game: public players, friends, your circle, or selected players.",
  },
  {
    title: "Manage players",
    text: "Track join requests, accepted players, replacements, and match time updates.",
  },
  {
    title: "Useful notifications",
    text: "Send participants alerts for invites, approvals, time changes, and match reminders.",
  },
];

const steps = [
  "Create your profile",
  "Create a game and choose who to invite",
  "Share the match and manage players",
];

export default function EnglishHome() {
  return (
    <main className="ltr-page" lang="en" dir="ltr">
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="brand-link" href="/en">
          <Image
            src="/tl3b-full-logo.png"
            width={96}
            height={96}
            alt="TL3B logo"
            priority
            unoptimized
          />
        </Link>
        <div className="nav-links">
          <a href="#features">Features</a>
          <Link href="/en/privacy">Privacy</Link>
          <Link href="/en/support">Support</Link>
          <Link className="language-switch" href="/" lang="ar">
            العربية
          </Link>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Padel match organizing app</p>
          <h1>Organize your match, invite your people, and fill the court faster.</h1>
          <p className="hero-text">
            TL3B helps you create padel games, choose the right players, track
            join requests, and keep participants updated without messy group
            chats.
          </p>
          <div className="hero-actions">
            <Link className="primary-action" href="/en/privacy">
              Privacy Policy
            </Link>
            <a className="secondary-action" href="#delete-account">
              Delete account
            </a>
          </div>
          <div className="hero-facts" aria-label="Highlights">
            <span>Kuwait focused</span>
            <span>Private invites</span>
            <span>Match reminders</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="TL3B brand">
          <div className="brand-showcase">
            <Image
              src="/tl3b-full-logo.png"
              width={720}
              height={720}
              alt="TL3B logo"
              priority
              unoptimized
              className="full-logo"
            />
            <div className="mini-app-card">
              <div>
                <span>Circle game</span>
                <strong>Evening padel</strong>
                <p>Kuwait · 8:30 PM · 2/4 players</p>
              </div>
              <button>Manage</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-band" aria-label="About TL3B">
        <div>
          <p className="eyebrow">About TL3B</p>
          <h2>A cleaner way to coordinate padel games.</h2>
        </div>
        <p>
          TL3B is made for players who want less back-and-forth before a match.
          Hosts can create games, choose who receives the invite, approve public
          requests, and inform participants when the time or details change.
        </p>
      </section>

      <section className="section" id="features">
        <div className="section-heading">
          <p className="eyebrow">Features</p>
          <h2>Built around real match flow.</h2>
        </div>
        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>From match idea to a full court.</h2>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <div className="step" key={step}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="section privacy-preview">
        <div>
          <p className="eyebrow">Privacy</p>
          <h2>Your personal area is not shown as a public address.</h2>
          <p>
            Public games may show the game area so players know where they will
            play. Your account details, private ratings, and settings are handled
            separately inside the app.
          </p>
        </div>
        <Link className="primary-action compact" href="/en/privacy">
          Read Privacy Policy
        </Link>
      </section>

      <section className="section delete-section" id="delete-account">
        <div>
          <p className="eyebrow">Delete account</p>
          <h2>You can request account and data deletion.</h2>
          <p>
            In the app, open Profile, then Settings, then Account, and choose
            Delete account. If you cannot access the app, email us from your
            registered email at support@til3b.com and write that you want to
            delete your account.
          </p>
        </div>
        <Link className="secondary-action compact" href="/en/support">
          Support details
        </Link>
      </section>

      <footer className="site-footer">
        <Link className="brand-link footer-brand" href="/en">
          <Image
            src="/tl3b-full-logo.png"
            width={86}
            height={86}
            alt="TL3B logo"
            unoptimized
          />
        </Link>
        <div>
          <Link href="/en/privacy">Privacy</Link>
          <Link href="/en/terms">Terms</Link>
          <Link href="/en/support">Support</Link>
          <Link href="/" lang="ar">
            العربية
          </Link>
        </div>
        <p>© 2026 TL3B. All rights reserved.</p>
      </footer>
    </main>
  );
}
