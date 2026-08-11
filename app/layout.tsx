import type { Metadata } from "next";
import Script from "next/script";
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
  metadataBase: new URL("https://devopsnotes.org"),

  title: {
    default:
      "Kamal Guidadou — Administrateur Systèmes & Réseaux | DevOps · DevSecOps · Cybersécurité",
    template: "%s | Kamal Guidadou",
  },

  description:
    "Portfolio de Kamal Guidadou, administrateur systèmes et réseaux spécialisé en infrastructures sécurisées, DevOps, DevSecOps, automatisation et cybersécurité. Découvrez mes projets, compétences et formations, dont K-Guard, plateforme d’observabilité et de sécurité pour clusters K3s.",

  applicationName: "Portfolio de Kamal Guidadou",

  authors: [
    {
      name: "Kamal Guidadou",
      url: "https://devopsnotes.org",
    },
  ],

  creator: "Kamal Guidadou",

  publisher: "Kamal Guidadou",

  alternates: {
    canonical: "/",
  },

  keywords: [
    "Kamal Guidadou",
    "administrateur systèmes et réseaux",
    "administrateur systèmes",
    "administrateur réseaux",
    "infrastructures sécurisées",
    "DevOps",
    "DevSecOps",
    "cybersécurité",
    "automatisation",
    "Kubernetes",
    "K3s",
    "Docker",
    "Linux",
    "Windows Server",
    "Cisco",
    "observabilité",
    "Infrastructure as Code",
    "CI/CD",
  ],

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://devopsnotes.org/",
    siteName: "Kamal Guidadou — Portfolio",

    title: "Kamal Guidadou — Administrateur Systèmes & Réseaux",

    description:
      "Administrateur systèmes et réseaux orienté DevOps, DevSecOps, automatisation, infrastructures sécurisées et cybersécurité. Découvrez mes projets, compétences et K-Guard.",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kamal Guidadou — Administrateur Systèmes & Réseaux, DevOps, DevSecOps et Cybersécurité",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Kamal Guidadou — Administrateur Systèmes & Réseaux",

    description:
      "Portfolio professionnel de Kamal Guidadou : systèmes, réseaux, DevOps, DevSecOps, automatisation et cybersécurité.",

    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/favicon.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        suppressHydrationWarning={true}
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-brand-bg`}
      >
        {/* Tracking Umami */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="4bb50590-c514-461e-aa76-08aab6acae1a"
          strategy="afterInteractive"
        />

        <main className="flex-1 w-full flex flex-col">{children}</main>

        <footer className="w-full pb-8 pt-2">
          <div className="max-w-7xl mx-auto px-4 md:px-2 flex justify-center md:justify-end">
            <p className="text-center text-[8px] md:text-xs text-gray-500 opacity-60 font-light tracking-widest uppercase transition-all duration-300">
              © {new Date().getFullYear()} Kamal Guidadou — devopsnotes.org •
              Tous droits réservés
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
