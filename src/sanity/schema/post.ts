import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Blog Yazısı",
  type: "document",
  groups: [
    { name: "icerik", title: "İçerik", default: true },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Başlık",
      type: "string",
      group: "icerik",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "slug",
      title: "Adres (slug)",
      type: "slug",
      group: "icerik",
      options: { source: "title", maxLength: 96 },
      description: "Yazının web adresi. Başlıktan otomatik üretilir.",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Özet",
      type: "text",
      rows: 3,
      group: "icerik",
      description: "Liste sayfasında ve paylaşımlarda görünür.",
      validation: (rule) => rule.max(300),
    }),
    defineField({
      name: "coverImage",
      title: "Kapak görseli",
      type: "image",
      group: "icerik",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Görsel açıklaması",
          type: "string",
          description: "Görmeyen kullanıcılar için görselin ne anlattığını yazın.",
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({
      name: "publishedAt",
      title: "Yayın tarihi",
      type: "datetime",
      group: "icerik",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Kategoriler",
      type: "array",
      group: "icerik",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    }),
    defineField({
      name: "body",
      title: "Yazı",
      type: "array",
      group: "icerik",
      of: [
        {
          type: "block",
          styles: [
            { title: "Paragraf", value: "normal" },
            { title: "Başlık 2", value: "h2" },
            { title: "Başlık 3", value: "h3" },
            { title: "Alıntı", value: "blockquote" },
          ],
          lists: [
            { title: "Madde", value: "bullet" },
            { title: "Numaralı", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Kalın", value: "strong" },
              { title: "İtalik", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Bağlantı",
                fields: [
                  defineField({
                    name: "href",
                    title: "Adres",
                    type: "url",
                    validation: (rule) =>
                      rule.uri({ scheme: ["http", "https", "mailto", "tel"], allowRelative: true }),
                  }),
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Görsel açıklaması",
              type: "string",
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "seoDescription",
      title: "Arama motoru açıklaması",
      type: "text",
      rows: 2,
      group: "seo",
      description: "Boş bırakılırsa özet kullanılır.",
      validation: (rule) => rule.max(200),
    }),
  ],
  orderings: [
    {
      title: "Yayın tarihi (yeniden eskiye)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "publishedAt", media: "coverImage" },
    prepare: ({ title, subtitle, media }) => ({
      title,
      subtitle: subtitle ? new Date(subtitle).toLocaleDateString("tr-TR") : "Tarihsiz",
      media,
    }),
  },
});
