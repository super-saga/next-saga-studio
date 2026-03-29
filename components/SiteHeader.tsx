import Link from "next/link";
import { LanguageToggle } from "@/components/LanguageToggle";
import type { Locale } from "@/data/content";

type SiteHeaderProps = {
  locale: Locale;
  homeHref: string;
  ctaLabel: string;
  ctaHref: string;
  links: Array<{ href: string; label: string }>;
};

export function SiteHeader({ locale, homeHref, ctaLabel, ctaHref, links }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-4 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link href={homeHref} className="font-display text-lg font-semibold tracking-tight">
            Saga Tekno Studio
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <LanguageToggle locale={locale} />
            <a
              href={ctaHref}
              className="hidden shrink-0 rounded-full bg-brand px-4 py-2.5 text-sm font-medium text-white transition hover:bg-brand-strong sm:inline-flex"
            >
              {ctaLabel}
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between gap-4">
          <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
            {links.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={ctaHref}
            className="inline-flex shrink-0 rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-strong sm:hidden"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
