import Link from "next/link";
import { copyByLocale, type Locale } from "@/data/content";
import { LeadForm } from "@/components/LeadForm";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

type LandingPageProps = {
  locale: Locale;
};

export function LandingPage({ locale }: LandingPageProps) {
  const copy = copyByLocale[locale];
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Saga Tekno Studio",
    url: locale === "id" ? "https://sagatekno.com/" : "https://sagatekno.com/en",
    areaServed: "Indonesia",
    availableLanguage: ["id", "en"],
    serviceType: copy.services.map((service) => service.title),
    description: copy.hero.description,
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SiteHeader
        locale={locale}
        homeHref={locale === "id" ? "/" : "/en"}
        ctaLabel={copy.nav.call}
        ctaHref="#lead-form"
        links={[
          { href: "#services", label: copy.nav.services },
          { href: "#ai", label: copy.nav.ai },
          { href: "#lead-form", label: copy.nav.contact },
        ]}
      />

      <main>
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[minmax(0,1.1fr)_400px] lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-brand/20 bg-brand/8 px-4 py-2 text-sm font-medium text-brand">
                {copy.hero.badge}
              </span>
              <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {copy.hero.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-muted sm:text-lg">{copy.hero.description}</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#lead-form"
                  className="rounded-full bg-brand px-6 py-3 font-medium text-white transition hover:bg-brand-strong"
                >
                  {copy.hero.primaryCta}
                </a>
                <a
                  href="#services"
                  className="rounded-full border border-line bg-white/70 px-6 py-3 font-medium text-foreground transition hover:border-brand"
                >
                  {copy.hero.secondaryCta}
                </a>
              </div>

              <ul className="mt-10 grid gap-3 text-sm text-muted sm:grid-cols-3">
                {copy.hero.metrics.map((metric) => (
                  <li key={metric} className="rounded-2xl border border-line bg-white/70 px-4 py-3">
                    {metric}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:sticky lg:top-24">
              <LeadForm
                formId="lead-form"
                locale={locale}
                title={copy.leadForm.title}
                description={copy.leadForm.description}
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

        <section id="services" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{copy.serviceSection.eyebrow}</p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {copy.serviceSection.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">{copy.serviceSection.description}</p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {copy.services.map((service) => (
              <Link
                key={service.value}
                href={`${locale === "id" ? "" : "/en"}/services/${service.slug}`}
                className="group block rounded-[1.75rem] border border-line bg-white/80 p-6 transition hover:-translate-y-0.5 hover:border-brand hover:shadow-[var(--shadow)]"
              >
                <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">{service.title}</h3>
                <p className="mt-4 text-sm leading-6 text-muted">{service.problem}</p>
                <p className="mt-4 text-sm leading-6 text-foreground">{service.outcome}</p>
                <div className="mt-6 flex items-center justify-between gap-4 text-sm">
                  <span className="font-semibold text-brand">
                    {locale === "id" ? "Klik kartu untuk detail" : "Click card for details"}
                  </span>
                  <span className="text-foreground transition group-hover:text-brand">
                    {copy.nav.contact}
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-line bg-surface-strong p-6 lg:p-8">
            <h3 className="font-display text-2xl font-semibold text-foreground">{copy.process.title}</h3>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {copy.process.steps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-line bg-white px-5 py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">0{index + 1}</p>
                  <p className="mt-3 text-sm text-foreground">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <LeadForm
              formId="lead-form-secondary"
              locale={locale}
              title={copy.leadForm.title}
              description={copy.leadForm.description}
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

            <div className="hidden lg:block lg:sticky lg:top-24 lg:self-start">
              <LeadForm
                formId="lead-form-sidebar"
                locale={locale}
                title={copy.sidebar.title}
                description={copy.sidebar.description}
                labels={{
                  name: copy.leadForm.name,
                  email: copy.leadForm.email,
                  phone: copy.leadForm.phone,
                  service: copy.leadForm.service,
                  placeholder: copy.leadForm.placeholder,
                  submit: copy.sidebar.cta,
                  submitting: copy.leadForm.submitting,
                  success: copy.leadForm.success,
                  consent: copy.leadForm.consent,
                  error: copy.leadForm.errors.generic,
                }}
                compact
              />
            </div>
          </div>
        </section>

        <section id="ai" className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-16">
          <div className="rounded-[2rem] border border-brand/20 bg-[linear-gradient(135deg,rgba(15,118,110,0.12),rgba(217,119,6,0.08))] p-8 lg:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{copy.ai.eyebrow}</p>
            <div className="mt-5 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
              <div>
                <h2 className="font-display text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                  {copy.ai.title}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-8 text-muted">{copy.ai.description}</p>
                <p className="mt-4 rounded-2xl border border-white/60 bg-white/80 px-5 py-4 text-sm leading-6 text-foreground">
                  {copy.ai.example}
                </p>
              </div>

              <ul className="space-y-3 rounded-[1.75rem] border border-white/60 bg-white/70 p-6 text-sm text-foreground">
                {copy.ai.bullets.map((bullet) => (
                  <li key={bullet} className="rounded-2xl border border-line bg-white px-4 py-3">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter privacy={copy.footer.privacy} note={copy.footer.note} />
    </div>
  );
}
