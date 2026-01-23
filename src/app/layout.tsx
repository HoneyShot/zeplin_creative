import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { GoogleAnalytics } from '@next/third-parties/google';

export const metadata: Metadata = {
  title: "Profuture Teknoloji Dergisi",
  description: "Teknoloji alanında akademik ve bilimsel makalelerin yayınlandığı hakemli bir dergi. Yapay zeka, makine öğrenmesi, siber güvenlik ve daha fazlası.",
  keywords: ["teknoloji", "akademik dergi", "yapay zeka", "makine öğrenmesi", "siber güvenlik"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="overflow-x-hidden">
      <head>
        <meta name="google-site-verification" content="RUP4QWHtMEWCEQCb3UaWeSUHwIMwVicraT0Y2NhdQkc" />
      </head>
      <body className="min-h-screen flex flex-col overflow-x-hidden">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
      </body>
    </html>
  );
}
