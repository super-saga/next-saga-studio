import Link from "next/link";
import { LeadForm } from "@/components/LeadForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { copyByLocale, type Locale } from "@/data/content";
import { getRelatedServices, type ServiceSlug, getServiceDetail } from "@/data/service-details";

type ServiceDetailPageProps = {
  locale: Locale;
  slug: ServiceSlug;
};

export function ServiceDetailPage({ locale, slug }: ServiceDetailPageProps) {
  const copy = copyByLocale[locale];
  const detail = getServiceDetail(locale, slug);

  if (!detail) {
    return null;
  }

  const baseHref = locale === "id" ? "" : "/en";
  const related = getRelatedServices(locale, detail.relatedSlugs);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: detail.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: detail.title,
    provider: {
      "@type": "ProfessionalService",
      name: "Saga Tekno Studio",
    },
    areaServed: "Indonesia",
    description: detail.seoDescription,
    serviceType: detail.title,
    url: `https://sagatekno.com${baseHref}/services/${detail.slug}`,
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SiteHeader
        locale={locale}
        homeHref={locale === "id" ? "/" : "/en"}
        ctaLabel={copy.nav.call}
        ctaHref="#service-lead-form"
        links={[
          { href: "#overview", label: detail.overviewTitle },
          { href: "#deliverables", label: locale === "id" ? "Deliverables" : "Deliverables" },
          { href: "#faq", label: locale === "id" ? "FAQ" : "FAQ" },
        ]}
      />

      <main>
        <section className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-muted">
            <Link href={locale === "id" ? "/" : "/en"} className="hover:text-foreground">
              {locale === "id" ? "Beranda" : "Home"}
            </Link>
            <span>/</span>
            <span>{detail.title}</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="rounded-[2rem] border border-line bg-white/80 p-8">
              <span className="inline-flex rounded-full border border-brand/20 bg-brand/8 px-4 py-2 text-sm font-medium text-brand">
                {detail.shortTitle}
              </span>
              <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                {detail.heroTitle}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted">{detail.heroDescription}</p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-3">
                {detail.heroHighlights.map((highlight) => (
                  <li key={highlight} className="rounded-2xl border border-line bg-surface-strong px-4 py-3 text-sm text-foreground">
                    {highlight}
                  </li>
                ))}
              </ul>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-[1.5rem] border border-line bg-surface p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    {locale === "id" ? "Masalah utama" : "Core problem"}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-foreground">{detail.problem}</p>
                </div>
                <div className="rounded-[1.5rem] border border-line bg-surface p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">
                    {locale === "id" ? "Hasil yang dicari" : "Expected outcome"}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-foreground">{detail.outcome}</p>
                </div>
              </div>
            </div>

            <div className="lg:sticky lg:top-24 lg:self-start">
              <LeadForm
                formId="service-lead-form"
                locale={locale}
                title={copy.leadForm.title}
                description={copy.leadForm.description}
                defaultService={detail.value}
                labels={{
                  name: copy.leadForm.name,
                  email: copy.leadForm.email,
                  phone: copy.leadForm.phone,
                  service: copy.leadForm.service,
                  placeholder: copy.leadForm.placeholder,
                  submit: copy.leadForm.submit,
                  submitting: copy.leadForm.submitting,
                  success: copy.leadForm.success,
                  consent: copy.leadForm.consent,
                  error: copy.leadForm.errors.generic,
                }}
              />
            </div>
          </div>
        </section>

        <section id="overview" className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div className="rounded-[2rem] border border-line bg-white/80 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{detail.overviewTitle}</p>
              <p className="mt-4 text-base leading-8 text-muted">{detail.overview}</p>
              <p className="mt-6 rounded-2xl border border-brand/15 bg-brand/8 px-5 py-4 text-sm leading-6 text-foreground">
                {detail.geoNote}
              </p>
            </div>

            <div className="rounded-[2rem] border border-line bg-surface-strong p-6">
              <p className="font-display text-2xl font-semibold text-foreground">
                {locale === "id" ? "Cocok untuk" : "Best fit for"}
              </p>
              <ul className="mt-4 space-y-3 text-sm text-foreground">
                {detail.suitableFor.map((item) => (
                  <li key={item} className="rounded-2xl border border-line bg-white px-4 py-3">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-10">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-line bg-white/80 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                {locale === "id" ? "Tantangan yang sering muncul" : "Common challenges"}
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-foreground">
                {detail.painPoints.map((item) => (
                  <li key={item} className="rounded-2xl border border-line bg-surface px-4 py-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div id="deliverables" className="rounded-[2rem] border border-line bg-white/80 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
                {locale === "id" ? "Yang kami deliver" : "What we deliver"}
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-foreground">
                {detail.deliverables.map((item) => (
                  <li key={item} className="rounded-2xl border border-line bg-surface px-4 py-4">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-10">
          <div className="rounded-[2rem] border border-brand/20 bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(217,119,6,0.08))] p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              {locale === "id" ? "Poin presentasi saat konsultasi" : "Consultation talking points"}
            </p>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {detail.presentationPoints.map((point, index) => (
                <div key={point} className="rounded-[1.5rem] border border-white/60 bg-white/80 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">0{index + 1}</p>
                  <p className="mt-3 text-sm leading-6 text-foreground">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="mx-auto max-w-7xl px-6 py-6 lg:px-8 lg:py-10">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
            <div className="rounded-[2rem] border border-line bg-white/80 p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">FAQ</p>
              <div className="mt-6 space-y-4">
                {detail.faqs.map((faq) => (
                  <article key={faq.question} className="rounded-[1.5rem] border border-line bg-surface px-5 py-5">
                    <h2 className="font-semibold text-foreground">{faq.question}</h2>
                    <p className="mt-3 text-sm leading-6 text-muted">{faq.answer}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-line bg-surface-strong p-6">
              <p className="font-display text-2xl font-semibold text-foreground">
                {locale === "id" ? "Layanan terkait" : "Related services"}
              </p>
              <div className="mt-4 space-y-3">
                {related.map((service) => (
                  <Link
                    key={service.slug}
                    href={`${baseHref}/services/${service.slug}`}
                    className="block rounded-2xl border border-line bg-white px-4 py-4 text-sm text-foreground transition hover:border-brand"
                  >
                    <p className="font-semibold">{service.title}</p>
                    <p className="mt-2 text-muted">{service.problem}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter privacy={copy.footer.privacy} note={copy.footer.note} />
    </div>
  );
}
