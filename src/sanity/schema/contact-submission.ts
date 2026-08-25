import { defineField, defineType } from "sanity";

/**
 * Iletisim formundan gelen mesajlar.
 * Panelden okunur; alanlar salt okunurdur ki kayit degistirilmesin.
 */
export const contactSubmission = defineType({
  name: "contactSubmission",
  title: "Gelen Mesaj",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Ad Soyad", type: "string", readOnly: true }),
    defineField({ name: "email", title: "E-posta", type: "string", readOnly: true }),
    defineField({ name: "subject", title: "Konu", type: "string", readOnly: true }),
    defineField({ name: "message", title: "Mesaj", type: "text", rows: 8, readOnly: true }),
    defineField({ name: "receivedAt", title: "Geliş zamanı", type: "datetime", readOnly: true }),
    defineField({
      name: "status",
      title: "Durum",
      type: "string",
      options: {
        list: [
          { title: "Yeni", value: "yeni" },
          { title: "Okundu", value: "okundu" },
          { title: "Yanıtlandı", value: "yanitlandi" },
          { title: "Arşiv", value: "arsiv" },
        ],
        layout: "radio",
      },
      initialValue: "yeni",
      description: "Bu alanı siz değiştirebilirsiniz.",
    }),
    defineField({
      name: "notes",
      title: "Notlarınız",
      type: "text",
      rows: 3,
      description: "Kendi notunuz; ziyaretçi görmez.",
    }),
  ],
  orderings: [
    {
      title: "En yeni önce",
      name: "receivedAtDesc",
      by: [{ field: "receivedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "subject", status: "status", date: "receivedAt" },
    prepare: ({ title, subtitle, status, date }) => ({
      title: `${status === "yeni" ? "● " : ""}${title ?? "İsimsiz"}`,
      subtitle: [subtitle, date ? new Date(date).toLocaleString("tr-TR") : null]
        .filter(Boolean)
        .join(" — "),
    }),
  },
});
