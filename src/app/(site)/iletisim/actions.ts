"use server";

import { Resend } from "resend";
import { z } from "zod";
import { writeClient } from "@/sanity/client";
import { contact, site } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Lütfen adınızı yazın.").max(120),
  email: z.email("Geçerli bir e-posta adresi yazın.").max(200),
  subject: z.string().trim().max(160).optional(),
  message: z
    .string()
    .trim()
    .min(20, "Mesajınız en az 20 karakter olmalı.")
    .max(4000, "Mesajınız çok uzun."),
  /* Bot tuzagi: gorunmez alan; doldurulmussa istek sessizce yutulur. */
  website: z.string().max(0).optional(),
});

export type ContactState = {
  status: "idle" | "success" | "error";
  message?: string;
  fieldErrors?: Partial<Record<"name" | "email" | "subject" | "message", string>>;
};

type Payload = z.infer<typeof schema>;

/** Mesaji yonetim panelinde gorunecek sekilde kaydeder. */
async function saveToPanel(data: Payload) {
  if (!writeClient) return false;
  await writeClient.create({
    _type: "contactSubmission",
    name: data.name,
    email: data.email,
    subject: data.subject || undefined,
    message: data.message,
    receivedAt: new Date().toISOString(),
    status: "yeni",
  });
  return true;
}

/** Bildirim e-postasi gonderir. */
async function sendNotification(data: Payload) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM ?? `${site.name} <onboarding@resend.dev>`,
    to: process.env.CONTACT_TO ?? contact.email,
    replyTo: data.email,
    subject: data.subject?.trim()
      ? `[Neurovyn] ${data.subject}`
      : `[Neurovyn] ${data.name} — yeni mesaj`,
    text: [
      `Ad Soyad: ${data.name}`,
      `E-posta: ${data.email}`,
      data.subject?.trim() ? `Konu: ${data.subject}` : null,
      "",
      data.message,
    ]
      .filter(Boolean)
      .join("\n"),
  });

  if (error) throw new Error(error.message);
  return true;
}

export async function sendContactMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const parsed = schema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
    website: formData.get("website"),
  });

  if (!parsed.success) {
    const fieldErrors: ContactState["fieldErrors"] = {};
    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      if (field === "website") {
        /* Bot yakalandi: hata gostermeden basarili gibi don. */
        return { status: "success", message: "Mesajınız alındı. En kısa sürede dönüş yapacağız." };
      }
      if (typeof field === "string" && !(field in fieldErrors)) {
        fieldErrors[field as keyof typeof fieldErrors] = issue.message;
      }
    }
    return { status: "error", message: "Lütfen işaretli alanları düzeltin.", fieldErrors };
  }

  /* Iki kanal da denenir. Biri calisirsa mesaj kaybolmaz. */
  const [saved, mailed] = await Promise.allSettled([
    saveToPanel(parsed.data),
    sendNotification(parsed.data),
  ]);

  const savedOk = saved.status === "fulfilled" && saved.value;
  const mailedOk = mailed.status === "fulfilled" && mailed.value;

  if (saved.status === "rejected") console.error("[iletisim] Panele kayıt başarısız:", saved.reason);
  if (mailed.status === "rejected") console.error("[iletisim] E-posta gönderilemedi:", mailed.reason);

  if (!savedOk && !mailedOk) {
    return {
      status: "error",
      message: `Mesaj şu anda iletilemedi. Lütfen doğrudan ${contact.email} adresine yazın ya da WhatsApp'tan ulaşın.`,
    };
  }

  return {
    status: "success",
    message: "Mesajınız bize ulaştı. En kısa sürede dönüş yapacağız.",
  };
}
