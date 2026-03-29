import { createCipheriv, createHash, randomBytes } from "node:crypto";
import { mkdir, appendFile } from "node:fs/promises";
import path from "node:path";

export type LeadPayload = {
  locale: "id" | "en";
  name: string;
  email: string;
  phone: string;
  service: string;
};

const DATA_DIR = path.join(process.cwd(), "data");
const LEAD_FILE = path.join(DATA_DIR, "leads.ndjson");

function getKey() {
  const source =
    process.env.LEADS_ENCRYPTION_KEY ||
    process.env.APP_SECRET ||
    "saga-tekno-studio-local-dev-secret";

  return createHash("sha256").update(source).digest();
}

function encryptLead(payload: LeadPayload) {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", getKey(), iv);
  const serialized = JSON.stringify(payload);
  const encrypted = Buffer.concat([cipher.update(serialized, "utf8"), cipher.final()]);
  const tag = cipher.getAuthTag();

  return JSON.stringify({
    createdAt: new Date().toISOString(),
    iv: iv.toString("hex"),
    tag: tag.toString("hex"),
    data: encrypted.toString("hex"),
  });
}

export async function persistLead(payload: LeadPayload) {
  await mkdir(DATA_DIR, { recursive: true });
  await appendFile(LEAD_FILE, `${encryptLead(payload)}\n`, "utf8");
}
