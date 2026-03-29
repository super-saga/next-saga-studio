"use client";

import { useState, useTransition } from "react";
import { serviceOptions, type Locale } from "@/data/content";

type LeadFormProps = {
  formId?: string;
  locale: Locale;
  title: string;
  description: string;
  labels: {
    name: string;
    email: string;
    phone: string;
    service: string;
    placeholder: string;
    submit: string;
    submitting: string;
    success: string;
    consent: string;
    error: string;
  };
  compact?: boolean;
  defaultService?: string;
};

export function LeadForm({
  formId,
  locale,
  title,
  description,
  labels,
  compact = false,
  defaultService,
}: LeadFormProps) {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    startTransition(async () => {
      setMessage(null);
      setIsSuccess(false);

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          service: formData.get("service"),
        }),
      });

      const payload = (await response.json().catch(() => null)) as
        | { ok?: boolean; message?: string }
        | null;

      if (!response.ok || !payload?.ok) {
        setMessage(payload?.message || labels.error);
        return;
      }

      form.reset();
      setIsSuccess(true);
      setMessage(labels.success);
    });
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className={`rounded-[2rem] border border-line bg-surface p-6 shadow-[var(--shadow)] ${
        compact ? "lg:p-5" : "lg:p-7"
      }`}
    >
      <h2 className={`${compact ? "text-xl" : "text-2xl"} font-semibold text-foreground`}>{title}</h2>
      <p className="mt-2 text-sm leading-6 text-muted">{description}</p>

      <div className="mt-6 grid gap-4">
        <label className="text-sm font-medium text-foreground">
          {labels.name} <span className="text-danger">*</span>
          <input
            name="name"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 outline-none transition focus:border-brand"
          />
        </label>

        <label className="text-sm font-medium text-foreground">
          {labels.email} <span className="text-danger">*</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 outline-none transition focus:border-brand"
          />
        </label>

        <label className="text-sm font-medium text-foreground">
          {labels.phone} <span className="text-danger">*</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            required
            autoComplete="tel"
            className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 outline-none transition focus:border-brand"
          />
        </label>

        <label className="text-sm font-medium text-foreground">
          {labels.service} <span className="text-danger">*</span>
          <select
            name="service"
            required
            defaultValue={defaultService ?? ""}
            className="mt-2 w-full rounded-2xl border border-line bg-white px-4 py-3 outline-none transition focus:border-brand"
          >
            {!defaultService ? (
              <option value="" disabled>
                {labels.placeholder}
              </option>
            ) : null}
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="mt-4 text-xs leading-5 text-muted">{labels.consent}</p>

      <button
        type="submit"
        disabled={isPending}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-foreground px-5 py-3 font-medium text-background transition hover:bg-brand-strong disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isPending ? labels.submitting : labels.submit}
      </button>

      {message ? (
        <p
          className={`mt-4 rounded-2xl px-4 py-3 text-sm ${
            isSuccess ? "bg-emerald-50 text-emerald-700" : "bg-red-50 text-red-700"
          }`}
          aria-live="polite"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
