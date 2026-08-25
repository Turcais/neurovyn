import { defineField, defineType } from "sanity";

/** Değer Ürettiğimiz Alanlar — altı çalışma alanı. */
export const valueArea = defineType({
  name: "valueArea",
  title: "Değer Ürettiğimiz Alan",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Adres (slug)",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "order",
      title: "Sıra",
      type: "number",
      description: "Küçük sayı önce görünür.",
      validation: (rule) => rule.required().integer().min(1),
    }),
    defineField({
      name: "icon",
      title: "İkon",
      type: "string",
      options: {
        list: [
          { title: "Kişi", value: "user" },
          { title: "Mezuniyet külahı", value: "graduation" },
          { title: "Beyin", value: "brain" },
          { title: "Aile", value: "users" },
          { title: "Sunum", value: "presentation" },
          { title: "Bina", value: "building" },
        ],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "color",
      title: "Renk",
      type: "string",
      options: {
        list: [
          { title: "Mor", value: "egitim" },
          { title: "Yeşil", value: "toplum" },
          { title: "Pembe", value: "saglik" },
          { title: "Turkuaz", value: "kariyer" },
          { title: "Mavi", value: "gelisim" },
          { title: "Altın", value: "anlam" },
        ],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lead",
      title: "Giriş metni",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "forWhom",
      title: "Kimler için?",
      type: "array",
      of: [{ type: "string" }],
      description: "Her satır bir madde olarak görünür.",
    }),
  ],
  orderings: [{ title: "Sıraya göre", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "title", subtitle: "lead" } },
});
