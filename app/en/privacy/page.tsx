import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | TL3B",
  description: "Privacy Policy for the TL3B padel match organizing app.",
};

export default function EnglishPrivacyPage() {
  return (
    <main className="ltr-page" lang="en" dir="ltr">
      <LegalNav />
      <article className="legal-page">
        <p className="eyebrow">Last updated: July 27, 2026</p>
        <h1>Privacy Policy</h1>
        <p className="legal-lead">
          TL3B helps players create padel matches, invite players, manage join
          requests, and receive alerts. This policy explains what information we
          collect and how we use it.
        </p>

        <section>
          <h2>Information we collect</h2>
          <p>
            We collect only the information needed to create your account and
            operate the app, such as name, username, email, phone number, date
            of birth, profile photo, selected area, skill level, friends, and
            circle lists. We may also process app activity such as match
            activity, posts, messages, notifications, and support requests.
          </p>
          <p>
            When you upload a profile photo or court booking image, it is stored
            and used only to show it inside the app where you choose to share it
            or where it is needed to manage a match.
          </p>
        </section>

        <section>
          <h2>Location and areas</h2>
          <p>
            TL3B uses area-level information, such as Kuwait City or Salmiya, to
            help players find suitable games. Your personal account area is not
            published as a public address by default. Public games you create
            may show the game area because players need to know where the match
            will be played.
          </p>
        </section>

        <section>
          <h2>How we use information</h2>
          <p>
            We use information to create accounts, show matches, send invites
            and alerts, process join requests, operate chats and posts, improve
            safety, prevent misuse, and provide support.
          </p>
        </section>

        <section>
          <h2>Sharing information</h2>
          <p>
            Hosts and participants may see information needed to manage a match,
            such as display name, username, join status, and match details.
            Public games may be visible to app users. Friends, circle, and
            selected-player games are shown based on the audience chosen by the
            host.
          </p>
          <p>
            We do not sell your personal information. We may share information
            only to operate the service, comply with law, protect users, or work
            with technical service providers.
          </p>
        </section>

        <section>
          <h2>Notifications</h2>
          <p>
            If you allow notifications, TL3B may send alerts about invites, join
            approvals, match time changes, chats, and match reminders. You can
            control notification permission from your device settings.
          </p>
        </section>

        <section>
          <h2>Account and data deletion</h2>
          <p>
            You can delete your account inside the app by opening Profile, then
            Settings, then Account, then Delete account. After confirmation, the
            account is disabled and deletion of related data begins.
          </p>
          <p>
            If you cannot access the app, send an account deletion request to{" "}
            <a href="mailto:support@til3b.com">support@til3b.com</a> from the
            email registered to your account. Include your username or phone
            number so we can verify the request.
          </p>
          <p>
            We may keep limited information for a short period when required for
            legal, security, misuse prevention, or service operation records.
          </p>
        </section>

        <section>
          <h2>Children</h2>
          <p>
            TL3B is not intended for children under 13. If you believe a child
            has provided personal information, contact us so we can review the
            request and delete information where appropriate.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            For privacy or data deletion questions, contact us at{" "}
            <a href="mailto:support@til3b.com">support@til3b.com</a>.
          </p>
        </section>
      </article>
    </main>
  );
}

function LegalNav() {
  return (
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
        <Link href="/en/terms">Terms</Link>
        <Link href="/en/support">Support</Link>
        <Link className="language-switch" href="/privacy" lang="ar">
          العربية
        </Link>
      </div>
    </nav>
  );
}
