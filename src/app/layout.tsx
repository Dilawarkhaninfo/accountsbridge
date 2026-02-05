import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Preloader } from "@/components/ui/Preloader";
import { ChatWidget } from "@/components/layout/ChatWidget";
import JsonLd from "@/components/seo/JsonLd";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  metadataBase: new URL("https://accountsbridge.vercel.app"),
  title: "Accounts Bridge - Strategic Finance Partners",
  description: "Expert accounting, taxation, and advisory for innovative SMEs. Focused on growth and strategic financial planning.",
  openGraph: {
    title: "Accounts Bridge - Strategic Finance Partners",
    description: "Expert accounting, taxation, and advisory for innovative SMEs. Focused on growth and strategic financial planning.",
    url: "https://accountsbridge.vercel.app",
    siteName: "Accounts Bridge",
    images: [
      {
        url: "/icons.png",
        width: 1200,
        height: 630,
        alt: "Accounts Bridge Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounts Bridge - Strategic Finance Partners",
    description: "Expert accounting, taxation, and advisory for innovative SMEs. Focused on growth and strategic financial planning.",
    images: ["/icons.png"],
  },
  icons: {
    icon: "/icons.png",
    shortcut: "/icons.png",
    apple: "/icons.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans min-h-screen bg-background antialiased flex flex-col`} suppressHydrationWarning>
        <JsonLd />
        <Preloader />
        <TopBar />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <ChatWidget />
        <Footer />
      </body>
    </html>
  );
}
