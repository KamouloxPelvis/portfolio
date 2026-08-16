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
      "Kamal Guidadou — Administrateur Systèmes & Réseaux | Alternance Mastère Infrastructure, Cloud & DevOps",
    template: "%s | Kamal Guidadou",
  },

  description:
    "Portfolio de Kamal Guidadou — Administrateur Systèmes & Réseaux (Titre AIS, Cisco DevNet). Candidat en alternance Mastère / Master Infrastructure, Cloud & DevOps (contrat pro / apprentissage) et ouvert aux postes en administration d'infrastructures.",

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
    "administrateur infrastructures sécurisées",
    "ingénieur DevOps junior",
    "alternance DevOps",
    "alternance Cloud",
    "alternance infrastructure",
    "alternance administrateur systèmes",
    "contrat de professionnalisation DevOps",
    "contrat d'apprentissage DevOps",
    "mastère infrastructure cloud et devops",
    "mastère DevOps",
    "master DevOps",
    "master cloud computing",
    "master informatique alternance",
    "bac+5 DevOps",
    "infrastructures cloud",
    "infrastructures sécurisées",
    "DevOps",
    "DevSecOps",
    "cybersécurité",
    "automatisation",
    "Kubernetes",
    "K3s",
    "Docker",
    "Linux",
    "Debian",
    "Windows Server",
    "Active Directory",
    "Cisco",
    "Cisco DevNet",
    "observabilité",
    "Prometheus",
    "Grafana",
    "Wazuh",
    "Falco",
    "Infrastructure as Code",
    "Ansible",
    "CI/CD",
    "GitLab CI",
    "GitHub Actions",
    "FastAPI",
    "Spring Boot",
    "Rennes",
    "Bretagne",
    "télétravail",
    "France",
  ],

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://devopsnotes.org/",
    siteName: "Kamal Guidadou — Portfolio",

    title:
      "Kamal Guidadou — Administrateur Systèmes & Réseaux | Alternance Mastère Infrastructure, Cloud & DevOps",

    description:
      "Administrateur systèmes et réseaux (Titre Pro AIS, Cisco DevNet). Candidat en alternance Mastère / Master Infrastructure, Cloud & DevOps et ouvert aux opportunités en administration systèmes et réseaux.",

    images: [
      {
        url: "/og-image.png",
        width: 1731,
        height: 909,
        alt: "Kamal Guidadou — Administrateur Systèmes & Réseaux, Alternance Mastère Infrastructure, Cloud & DevOps",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Kamal Guidadou — Administrateur Systèmes & Réseaux | Alternance Mastère Infrastructure, Cloud & DevOps",

    description:
      "Administrateur systèmes et réseaux à la recherche d’une alternance en Mastère / Master Infrastructure, Cloud & DevOps ou d’un poste en administration d'infrastructures.",

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

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://devopsnotes.org/#person",
      "name": "Kamal Guidadou",
      "url": "https://devopsnotes.org",
      "jobTitle": [
        "Administrateur Systèmes & Réseaux",
        "Candidat Alternance Mastère Infrastructure, Cloud & DevOps",
        "Spécialiste DevSecOps & Automatisation"
      ],
      "description": "Administrateur systèmes et réseaux certifié (Titre Pro AIS, Cisco DevNet Associate), spécialisé en conteneurisation K3s, sécurité runtime (Falco, Wazuh), automatisation Ansible et observabilité.",
      "sameAs": [
        "https://www.linkedin.com/in/kamal-guidadou",
        "https://github.com/KamouloxPelvis",
        "https://gitlab.com/portfolio-kamal-guidadou",
        "https://tryhackme.com/p/KamouloxPelvis",
        "https://www.root-me.org/KamouloxPelvis"
      ],
      "knowsAbout": [
        "Administration Systèmes et Réseaux",
        "Cloud Computing & Virtualisation",
        "DevOps & DevSecOps",
        "Kubernetes & K3s",
        "Docker & Conteneurisation",
        "Sécurité des Systèmes d'Information",
        "Automatisation & Scripting (Python, Bash, PowerShell, Ansible)",
        "Observabilité & Monitoring (Prometheus, Grafana, ELK)",
        "Réseaux Cisco & Protocoles de routage",
        "Active Directory & Windows Server",
        "Linux (Debian, Ubuntu Server)"
      ],
      "alumniOf": [
        {
          "@type": "EducationalOrganization",
          "name": "AFPA",
          "description": "Titre Professionnel Administrateur d'Infrastructures Sécurisées (AIS)"
        },
        {
          "@type": "EducationalOrganization",
          "name": "Cisco Networking Academy",
          "description": "Cisco DevNet Associate"
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://devopsnotes.org/#website",
      "url": "https://devopsnotes.org",
      "name": "Kamal Guidadou — Portfolio & Projets DevOps / Cloud / Systèmes",
      "publisher": {
        "@id": "https://devopsnotes.org/#person"
      },
      "inLanguage": "fr-FR"
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
