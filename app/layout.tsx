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
    default: "تلعب؟ | تنظيم مباريات البادل",
    template: "%s | تلعب؟",
  },
  description:
    "الموقع الرسمي لتطبيق تلعب لتنظيم مباريات البادل، دعوة اللاعبين، إدارة الطلبات، وسياسة الخصوصية والدعم.",
  openGraph: {
    title: "تلعب؟ | تنظيم مباريات البادل",
    description:
      "سو مباريات بادل، ادع الأصدقاء والسيركل، تابع الطلبات، ووصل التحديثات للمشاركين.",
    siteName: "تلعب؟",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "تلعب؟ | تنظيم مباريات البادل",
    description:
      "سو مباريات بادل، ادع الأصدقاء والسيركل، تابع الطلبات، ووصل التحديثات للمشاركين.",
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
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
