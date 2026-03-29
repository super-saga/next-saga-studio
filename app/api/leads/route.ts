import { NextResponse } from "next/server";
import { persistLead } from "@/lib/leads";
import { serviceOptions, type Locale } from "@/data/content";

type LeadRequest = {
  locale?: "id" | "en";
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
};

function normalizeString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getErrorMessage(locale: "id" | "en") {
  return locale === "en"
    ? "Please complete all required fields with a valid service category."
    : "Mohon lengkapi semua field wajib dengan kategori layanan yang valid.";
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as LeadRequest | null;
  const locale: Locale = body?.locale === "en" ? "en" : "id";

  const payload = {
    locale,
    name: normalizeString(body?.name),
    email: normalizeString(body?.email),
    phone: normalizeString(body?.phone),
    service: normalizeString(body?.service),
  };

  const isValid =
    payload.name.length >= 2 &&
    payload.email.includes("@") &&
    payload.phone.length >= 6 &&
    serviceOptions.includes(payload.service);

  if (!isValid) {
    return NextResponse.json(
      {
        ok: false,
        message: getErrorMessage(locale),
      },
      { status: 400 },
    );
  }

  try {
    await persistLead(payload);
  } catch (error) {
    console.error("Failed to persist lead", error);

    return NextResponse.json(
      {
        ok: false,
        message:
          locale === "en"
            ? "We could not save your request right now. Please try again."
            : "Permintaan Anda belum bisa disimpan saat ini. Silakan coba lagi.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
