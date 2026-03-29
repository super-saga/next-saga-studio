import Link from "next/link";
import type { Locale } from "@/data/content";

type LanguageToggleProps = {
  locale: Locale;
};

export function LanguageToggle({ locale }: LanguageToggleProps) {
  const isId = locale === "id";

  return (
    <div className="inline-flex rounded-full border border-line bg-white/80 p-1 text-sm shadow-sm backdrop-blur">
      <Link
        href="/"
        className={`rounded-full px-3 py-1.5 transition ${isId ? "bg-foreground text-background" : "text-muted"}`}
      >
        ID
      </Link>
      <Link
        href="/en"
        className={`rounded-full px-3 py-1.5 transition ${!isId ? "bg-foreground text-background" : "text-muted"}`}
      >
        EN
      </Link>
    </div>
  );
}
