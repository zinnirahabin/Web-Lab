import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CLAIM READY — Warranty Claim Checklist",
  description:
    "A free checklist for anyone about to file a warranty claim. A warranty claim is decided on records. Keep yours, and ask for theirs in writing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@500;600&family=Plus+Jakarta+Sans:wght@400;500;600;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><circle cx=%2250%22 cy=%2250%22 r=%2246%22 fill=%22%23087A58%22/><text y=%22.9em%22 x=%22.18em%22 font-size=%2270%22 fill=%22white%22 font-weight=%22800%22>CR</text></svg>"
        />
      </head>
      <body className="font-sans antialiased bg-surface text-on-surface selection:bg-primary-soft-2 selection:text-primary-ink">
        {children}
      </body>
    </html>
  );
}
