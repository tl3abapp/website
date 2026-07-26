import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | TL3B",
  description:
    "Privacy Policy for TL3B, the padel match organizing application.",
};

export default function PrivacyPage() {
  return (
    <main>
      <LegalNav />
      <article className="legal-page">
        <p className="eyebrow">Last updated July 26, 2026</p>
        <h1>Privacy Policy</h1>
        <p className="legal-lead">
          TL3B helps players create, discover, join, and manage padel matches.
          This policy explains what information we collect and how we use it.
        </p>

        <section>
          <h2>Information we collect</h2>
          <p>
            We may collect account information such as your name, handle, email,
            phone number, birth date, profile photo, selected area, skill level,
            friends, circle relationships, match activity, community posts,
            chat messages, notifications, and support requests.
          </p>
          <p>
            If you upload a court booking image or profile photo, that image is
            stored so it can be shown in the app where you choose to share it.
          </p>
        </section>

        <section>
          <h2>Location and match areas</h2>
          <p>
            TL3B uses area-level information, such as Kuwait City or Salmiya, to
            help players find relevant games. We do not publish your personal
            account area to other players as a public profile location by
            default. Public games you create may display the game area because
            players need to know where the match is taking place.
          </p>
        </section>

        <section>
          <h2>How we use information</h2>
          <p>
            We use information to create and manage accounts, show matches,
            send invitations and notifications, process join requests, support
            chat and community features, improve safety, prevent misuse, and
            provide customer support.
          </p>
        </section>

        <section>
          <h2>Sharing</h2>
          <p>
            Match hosts and participants may see information needed to manage a
            game, such as display name, handle, game status, and join request
            status. Public games may be visible to users in the app. Private,
            friend, circle, and selected-player games are shown based on the
            audience chosen by the host.
          </p>
          <p>
            We do not sell your personal information. We may share information
            only when needed to operate the service, comply with law, protect
            users, or handle business and infrastructure providers.
          </p>
        </section>

        <section>
          <h2>Notifications</h2>
          <p>
            If you allow notifications, TL3B may send alerts about invitations,
            join approvals, match updates, chat activity, and match reminders.
            You can control notification permissions from your device settings.
          </p>
        </section>

        <section>
          <h2>Data retention and deletion</h2>
          <p>
            We keep account and match information while your account is active
            or as needed to provide the service. You can request account
            deletion or contact support for help with your data.
          </p>
        </section>

        <section>
          <h2>Children</h2>
          <p>
            TL3B is not intended for children under 13. If you believe a child
            has provided personal information, contact us so we can review and
            remove it where appropriate.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For privacy questions, contact TL3B support at{" "}
            <a href="mailto:support@tl3ab.app">support@tl3ab.app</a>.
          </p>
        </section>
      </article>
    </main>
  );
}

function LegalNav() {
  return (
    <nav className="site-nav legal-nav" aria-label="Main navigation">
      <Link className="brand-link" href="/">
        <Image src="/tl3b-icon.png" width={48} height={48} alt="TL3B app icon" />
        <span>TL3B?</span>
      </Link>
      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/support">Support</Link>
      </div>
    </nav>
  );
}
