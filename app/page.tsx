import { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { copyByLocale } from "@/data/content";

export const metadata: Metadata = {
  title: copyByLocale.id.metaTitle,
  description: copyByLocale.id.metaDescription,
};

export default function HomePage() {
  return <LandingPage locale="id" />;
}
