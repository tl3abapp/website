import Image from "next/image";
import Link from "next/link";

const features = [
  {
    title: "Create the right match",
    text: "Set the area, date, time, player level, privacy, and who can see the game.",
  },
  {
    title: "Invite your circle",
    text: "Send games to friends, selected players, or your circle so the right people see it at home.",
  },
  {
    title: "Manage players",
    text: "Track requests, accepted players, replacements, and match updates from one host view.",
  },
  {
    title: "Stay notified",
    text: "Get updates for invites, approvals, match changes, and reminders before game time.",
  },
];

const steps = [
  "Create your profile",
  "Choose players or make it public",
  "Share, join, and manage the match",
];

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Main navigation">
        <Link className="brand-link" href="/">
          <Image
            src="/tl3b-icon.png"
            width={54}
            height={54}
            alt="TL3B app icon"
            priority
          />
          <span>TL3B?</span>
        </Link>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#privacy">Privacy</a>
          <Link href="/support">Support</Link>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Padel match organizing app</p>
          <h1>Find the right players and organize your next padel game.</h1>
          <p className="hero-text">
            TL3B helps players create games, invite friends and circles, manage
            requests, and keep everyone updated from one simple app.
          </p>
          <div className="hero-actions">
            <a className="primary-action" href="#privacy">
              View Privacy Policy
            </a>
            <Link className="secondary-action" href="/support">
              Contact support
            </Link>
          </div>
          <div className="hero-facts" aria-label="App highlights">
            <span>Kuwait focused</span>
            <span>Private circles</span>
            <span>Match reminders</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="TL3B app preview">
          <div className="phone-shell">
            <div className="phone-status" />
            <div className="app-top">
              <Image
                src="/tl3b-icon.png"
                width={42}
                height={42}
                alt=""
                aria-hidden="true"
              />
              <strong>TL3B?</strong>
            </div>
            <div className="welcome-panel">
              <span>Hi player</span>
              <strong>Ready for your next match?</strong>
              <div>
                <small>Kuwait City</small>
                <small>3 players nearby</small>
              </div>
            </div>
            <div className="match-card">
              <span>MY CIRCLE GAME</span>
              <h2>Evening Padel</h2>
              <p>Kuwait City · 8:30 PM · 2/4 players</p>
              <button>Manage</button>
            </div>
            <div className="match-card light">
              <span>PUBLIC GAME</span>
              <h2>Open Match</h2>
              <p>Salmiya · Tomorrow · Request to join</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section intro-band" aria-label="About TL3B">
        <div>
          <p className="eyebrow">About</p>
          <h2>A cleaner way to coordinate padel.</h2>
        </div>
        <p>
          TL3B is made for players who want less back-and-forth before a match.
          Hosts can create games, choose who receives the invite, approve public
          requests, and keep participants informed when details change.
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
          <h2>From idea to full court.</h2>
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

      <section className="section privacy-preview" id="privacy">
        <div>
          <p className="eyebrow">Privacy first</p>
          <h2>Your personal area is not public by default.</h2>
          <p>
            Public games can show the game area so players know where the match
            is. Your personal account details, private ratings, and account
            controls are handled separately.
          </p>
        </div>
        <Link className="primary-action compact" href="/privacy">
          Read full Privacy Policy
        </Link>
      </section>

      <section className="section release-section">
        <Image
          src="/tl3b-wordmark.png"
          width={280}
          height={90}
          alt="TL3B Arabic wordmark"
        />
        <div>
          <h2>TL3B for iOS, Android, and web.</h2>
          <p>
            The official release site for TL3B app information, privacy,
            support, and store review links.
          </p>
        </div>
      </section>

      <footer className="site-footer">
        <Link className="brand-link footer-brand" href="/">
          <Image src="/tl3b-icon.png" width={42} height={42} alt="" />
          <span>TL3B?</span>
        </Link>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/support">Support</Link>
        </div>
        <p>© 2026 TL3B. All rights reserved.</p>
      </footer>
    </main>
  );
}
