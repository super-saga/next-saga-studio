import { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { copyByLocale } from "@/data/content";

export const metadata: Metadata = {
  title: copyByLocale.en.metaTitle,
  description: copyByLocale.en.metaDescription,
  alternates: {
    canonical: "/en",
  },
};

export default function EnglishPage() {
  return <LandingPage locale="en" />;
}
