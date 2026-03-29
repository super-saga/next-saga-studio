import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sagatekno.com"),
  title: {
    default: "Saga Tekno Studio | Software House & IT Consulting Indonesia",
    template: "%s | Saga Tekno Studio",
  },
  description:
    "Saga Tekno Studio membantu bisnis Indonesia membangun software custom, migration, consulting, AI automation, quality improvement, dan SEO & GEO optimization dengan delivery production-grade 20% lebih cepat.",
  keywords: [
    "software house Indonesia",
    "jasa pembuatan software",
    "IT consulting Indonesia",
    "AI automation Indonesia",
    "migrasi sistem",
    "quality improvement software",
    "SEO GEO optimize Indonesia",
  ],
  alternates: {
    canonical: "/",
    languages: {
      "id-ID": "/",
      en: "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sagatekno.com",
    siteName: "Saga Tekno Studio",
    title: "Saga Tekno Studio | Software House & IT Consulting Indonesia",
    description:
      "Custom software, migration, consulting, AI automation, quality improvement, dan SEO & GEO optimize untuk bisnis Indonesia.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saga Tekno Studio | Software House & IT Consulting Indonesia",
    description:
      "Delivery production-grade 20% lebih cepat dengan workflow development berbasis AI.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${plusJakarta.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
