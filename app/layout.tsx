import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource-variable/inter-tight/wght.css";
import "@fontsource/ibm-plex-mono/400.css";
import "@fontsource/ibm-plex-mono/500.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nishita Gupta",
  description:
    "Portfolio of Nishita Gupta, a Computer Science student building real-time, collaborative web products with React, Next.js and Firebase.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
