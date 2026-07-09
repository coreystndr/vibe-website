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
  title: "VibeCoding — Moderne Webentwicklung",
  description:
    "VibeCoding baut schnelle, elegante Websites und Apps. Von der Idee bis zum Deployment auf Vercel.",
  openGraph: {
    title: "VibeCoding — Moderne Webentwicklung",
    description: "Schnelle, elegante Websites und Apps — gebaut mit Next.js und deployed auf Vercel.",
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
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050508] text-zinc-100">
        {children}
      </body>
    </html>
  );
}