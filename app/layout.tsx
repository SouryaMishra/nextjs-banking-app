import type { Metadata } from "next";
import * as Sentry from "@sentry/nextjs";
import { Inter, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexSerif = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export function generateMetadata(): Metadata {
  return {
    title: "PennyPinch",
    description: "PennyPinch is a modern banking platform for everyone",
    icons: {
      icon: "/icons/logo.svg",
    },
    other: {
      ...Sentry.getTraceData(),
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}
