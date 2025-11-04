import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CultureSips - Jeu à boire culturel",
  description: "Testez vos connaissances culturelles tout en vous amusant ! Devinez des pays à partir d'images et prenez une gorgée à chaque bonne réponse.",
  keywords: ["jeu à boire", "culture", "quiz", "pays", "géographie", "soirée", "party game"],
  authors: [{ name: "CultureSips Team" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "CultureSips",
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    title: "CultureSips - Jeu à boire culturel",
    description: "Testez vos connaissances culturelles ! Devinez des pays et buvez une gorgée à chaque bonne réponse.",
    siteName: "CultureSips",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#f97316",
};

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  return (
    <html lang={locale}>
      <head>
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
