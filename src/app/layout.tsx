import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VibeCoding — Game Launcher & Valorant Account Manager",
  description:
    "Lade den Universal Game Launcher und Valorant Account Manager für Windows herunter. Native Desktop-Apps gebaut mit Tauri & Rust.",
  openGraph: {
    title: "VibeCoding — Game Launcher & Valorant Account Manager",
    description:
      "Universal Game Launcher und Valorant Account Manager — kostenlos für Windows herunterladen.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="h-full scroll-smooth antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}