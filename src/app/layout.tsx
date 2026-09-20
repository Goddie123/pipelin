import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pipelin — The GTM engineering team for AI startups",
  description:
    "Pipelin builds signals-based GTM engines — so one GTM engineer with Claude and Clay outperforms an SDR team of ten. We book demos in weeks, not quarters.",
  metadataBase: new URL("https://pipelin.com"),
  openGraph: {
    title: "Pipelin — The GTM engineering team for AI startups",
    description:
      "We build and run signals-based GTM engines for hyper-growth AI startups. 20+ additional demos a week, consistently delivered.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink font-sans">
        {children}
      </body>
    </html>
  );
}
