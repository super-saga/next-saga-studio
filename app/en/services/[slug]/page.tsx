import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { getAllServiceSlugs, getServiceDetail, type ServiceSlug } from "@/data/service-details";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const detail = getServiceDetail("en", slug as ServiceSlug);

  if (!detail) {
    return {};
  }

  return {
    title: detail.seoTitle,
    description: detail.seoDescription,
    alternates: {
      canonical: `/en/services/${detail.slug}`,
      languages: {
        "id-ID": `/services/${detail.slug}`,
        en: `/en/services/${detail.slug}`,
      },
    },
    openGraph: {
      title: detail.seoTitle,
      description: detail.seoDescription,
      url: `https://sagatekno.com/en/services/${detail.slug}`,
      locale: "en_US",
      type: "article",
    },
  };
}

export default async function EnglishServicePage({ params }: PageProps) {
  const { slug } = await params;
  const detail = getServiceDetail("en", slug as ServiceSlug);

  if (!detail) {
    notFound();
  }

  return <ServiceDetailPage locale="en" slug={detail.slug} />;
}
