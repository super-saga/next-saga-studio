import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saga Tekno Studio - AI, IoT & CRM Solutions for Modern Businesses",
  description: "Saga Tekno Studio provides cutting-edge AI solutions, IoT integrations, and CRM services. We transform businesses with innovative technology solutions.",
  keywords: "Saga Tekno Studio, AI solutions, IoT integrations, CRM services, custom software development, digital transformation, software company",
  authors: [{ name: "Saga Tekno Studio" }],
  creator: "Saga Tekno Studio",
  publisher: "Saga Tekno Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sagatekno.com",
    title: "Saga Tekno Studio - AI, IoT & CRM Solutions",
    description: "Transform your business with innovative AI solutions, IoT integrations, and CRM services from Saga Tekno Studio.",
    siteName: "Saga Tekno Studio",
    images: [
      {
        url: "https://sagatekno.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Saga Tekno Studio - AI, IoT & CRM Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saga Tekno Studio - AI, IoT & CRM Solutions",
    description: "Transform your business with innovative AI solutions, IoT integrations, and CRM services from Saga Tekno Studio.",
    creator: "@sagatekno",
    images: ["https://sagatekno.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
