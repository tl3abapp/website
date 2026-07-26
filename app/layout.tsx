import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tl3b.app"),
  title: {
    default: "TL3B? | Padel Match Organizer",
    template: "%s | TL3B?",
  },
  description:
    "Official website for TL3B, the padel match organizing app for creating games, inviting players, and managing match updates.",
  openGraph: {
    title: "TL3B? | Padel Match Organizer",
    description:
      "Create padel games, invite friends and circles, manage requests, and keep players updated.",
    siteName: "TL3B?",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "TL3B? | Padel Match Organizer",
    description:
      "Create padel games, invite friends and circles, manage requests, and keep players updated.",
  },
  icons: {
    icon: "/tl3b-icon.png",
    shortcut: "/tl3b-icon.png",
    apple: "/tl3b-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
