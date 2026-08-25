"use server";

import { Resend } from "resend";
import { z } from "zod";
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

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[iletisim] RESEND_API_KEY tanımlı değil; mesaj gönderilemedi.");
    return {
      status: "error",
      message: `Form şu anda yapılandırılmadığı için mesaj gönderilemedi. Lütfen doğrudan ${contact.email} adresine yazın.`,
    };
  }

  const { name, email, subject, message } = parsed.data;

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM ?? `${site.name} <onboarding@resend.dev>`,
      to: process.env.CONTACT_TO ?? contact.email,
      replyTo: email,
      subject: subject?.trim() ? `[Neurovyn] ${subject}` : `[Neurovyn] ${name} — yeni mesaj`,
      text: [
        `Ad Soyad: ${name}`,
        `E-posta: ${email}`,
        subject?.trim() ? `Konu: ${subject}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    if (error) throw new Error(error.message);
  } catch (cause) {
    console.error("[iletisim] Gönderim hatası:", cause);
    return {
      status: "error",
      message: `Mesaj gönderilemedi. Lütfen tekrar deneyin ya da ${contact.email} adresine yazın.`,
    };
  }

  return {
    status: "success",
    message: "Mesajınız bize ulaştı. En kısa sürede dönüş yapacağız.",
  };
}
