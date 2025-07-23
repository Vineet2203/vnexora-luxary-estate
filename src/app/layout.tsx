import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";  
import Footer from '@/components/layout/Footer';  

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vnexora Luxury Estate",
  description: "Strategic Hospitality Solutions",
  keywords: [
    "Luxury Estate",
    "Hospitality Solutions",
    "Real Estate Solutions",
    "Five star hotels branding",
    "hospitality branding",
    "hospitality",
    "Luxury Resorts",
    "Luxury Hotels",
    "Real Estate",
    "Hospitality",
    "Vnexora",
    "Property",
    "Investment",
    "Hotel",
    "Resort",
    "Luxury Living",
    "Luxury Lifestyle",
    "Luxury Properties",
    "High End Luxury",
    "Varanasi",
    "India",
    "India's Leading Hospitality Solutions",
  ],
  authors: [{ name: "Vnexora Team", url: "https://vnexora.com" }],
  creator: "Vnexora",
  openGraph: {
    title: "Vnexora Luxury Estate",
    description: "Strategic Hospitality Solutions.  We help luxury hotels and resorts scale with personalized branding, operational excellence.",
    url: "https://vnexora.com",
    siteName: "Vnexora Luxury Estate",
    images: [
      {
        url: "/Images/Logo.png",
        width: 800,
        height: 600,
        alt: "Vnexora Logo"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vnexora Luxury Estate",
    description: "Strategic Hospitality Solutions",
    images: ["/Images/Logo.png"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Images/Logo.png" type="image/png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

