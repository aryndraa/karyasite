import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "karyasite — Coming Soon",
  description:
    "karyasite is coming soon. A personal creative space showcasing projects, design, and ideas.",
  keywords: ["karyasite", "personal website", "coming soon", "portfolio"],
  openGraph: {
    title: "karyasite — Coming Soon",
    description:
      "karyasite is coming soon. A personal creative space showcasing projects, design, and ideas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preconnect"
          href="https://api.fontshare.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@300,400,500,700,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="overflow-y-hidden">{children}</body>
    </html>
  );
}
