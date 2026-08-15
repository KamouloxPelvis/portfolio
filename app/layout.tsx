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
      "Kamal Guidadou — Administrateur Systèmes & Réseaux | Alternance Infrastructure, Cloud & DevOps",
    template: "%s | Kamal Guidadou",
  },

  description:
    "Administrateur systèmes et réseaux, Kamal Guidadou recherche un contrat de professionnalisation en Infrastructure, Cloud & DevOps à Sup de Vinci Rennes.",

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
    "alternance DevOps",
    "contrat de professionnalisation DevOps",
    "Infrastructure Cloud DevOps",
    "Sup de Vinci Rennes",
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

    title: "Kamal Guidadou — Alternance Infrastructure, Cloud & DevOps",

    description:
      "Administrateur systèmes et réseaux, titulaire du titre professionnel Administrateur d’Infrastructures Sécurisées, à la recherche d’un contrat de professionnalisation en Infrastructure, Cloud & DevOps.",

    images: [
      {
        url: "/og-image.png",
        width: 1731,
        height: 909,
        alt: "Kamal Guidadou — Administrateur Systèmes & Réseaux, alternance Infrastructure, Cloud & DevOps",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Kamal Guidadou — Alternance Infrastructure, Cloud & DevOps",

    description:
      "Administrateur systèmes et réseaux à la recherche d’un contrat de professionnalisation en Infrastructure, Cloud & DevOps.",

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
