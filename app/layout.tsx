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
  title: "Kamal Guidadou Portfolio",
  description: "2026",
  icons: {
    icon: [
      { url: '/favicon.png', sizes:'32x32', type: 'image/png' },
    ],
    // Affichage "pro" sur iPhone/iPad
    apple: [
      { url: '/favicon.png' }, 
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
        {/* Tracking Umami - Kamal pseudo Cloud */}
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="4bb50590-c514-461e-aa76-08aab6acae1a"
          strategy="afterInteractive"
        />

        {/* Le main avec flex-1 va occuper tout l'espace disponible, 
          ce qui force le footer à rester tout en bas de la page.
        */}
        <main className="flex-1 w-full flex flex-col">
          {children}
        </main>

        <footer className="w-full pb-8 pt-2">
          {/* On utilise max-w-7xl et px-4 md:px-10 pour matcher avec ton composant Home */}
          <div className="max-w-7xl mx-auto px-4 md:px-2 flex justify-center md:justify-end">
            <p className="text-center text-[8px] md:text-xs text-gray-500 opacity-60 font-light tracking-widest uppercase transition-all duration-300">
              © {new Date().getFullYear()} Kamal Guidadou — devopsnotes.org • Tous droits réservés
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}