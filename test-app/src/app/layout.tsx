import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { TooltipProvider, Toaster } from "@catcatcat/ui";
import "./globals.css";

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-ibm-plex-mono",
});

export const metadata: Metadata = {
  title: "@catcatcat/ui test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ibmPlexMono.variable}>
      <head>
        <link rel="stylesheet" href="/tokens.css" />
        <link rel="stylesheet" href="/components.css" />
        <link rel="stylesheet" href="/radix-compat.css" />
        <link rel="stylesheet" href="/motion.css" />
      </head>
      <body>
        <TooltipProvider>{children}</TooltipProvider>
        <Toaster />
      </body>
    </html>
  );
}
