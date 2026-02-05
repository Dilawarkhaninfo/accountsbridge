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
  title: "Accounts Bridge - Strategic Finance Partners",
  description: "Expert accounting, taxation, and advisory for innovative SMEs. Focused on growth and strategic financial planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans min-h-screen bg-background antialiased flex flex-col`}>
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
