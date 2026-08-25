import { defineField, defineType } from "sanity";

/**
 * Tek kayitlik ayar belgesi.
 * Iletisim bilgileri, sosyal medya ve footer metni buradan yonetilir.
 */
export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Ayarları",
  type: "document",
  groups: [
    { name: "marka", title: "Marka" },
    { name: "iletisim", title: "İletişim" },
    { name: "sosyal", title: "Sosyal Medya" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "brandName",
      title: "Marka adı",
      type: "string",
      group: "marka",
      initialValue: "Neurovyn",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tagline",
      title: "Alt başlık",
      type: "string",
      group: "marka",
      initialValue: "Nöroyaşam Tasarımı",
      description: "Logonun altında görünen ifade.",
    }),
    defineField({
      name: "sloganLead",
      title: "Slogan — birinci bölüm",
      type: "string",
      group: "marka",
      initialValue: "Bilimle anlarız",
    }),
    defineField({
      name: "sloganTail",
      title: "Slogan — ikinci bölüm",
      type: "string",
      group: "marka",
      initialValue: "Birlikte tasarlarız",
      description: "Yeşil renkte görünen bölüm.",
    }),
    defineField({
      name: "footerBlurb",
      title: "Footer açıklaması",
      type: "text",
      rows: 3,
      group: "marka",
    }),

    defineField({
      name: "email",
      title: "E-posta",
      type: "string",
      group: "iletisim",
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: "phone",
      title: "Telefon (görünen hâli)",
      type: "string",
      group: "iletisim",
      description: "Örnek: +90 555 824 84 20",
    }),
    defineField({
      name: "phoneHref",
      title: "Telefon (arama bağlantısı)",
      type: "string",
      group: "iletisim",
      description: "Boşluksuz, başında + ile. Örnek: +905558248420",
    }),
    defineField({
      name: "whatsapp",
      title: "WhatsApp numarası",
      type: "string",
      group: "iletisim",
      description: "Boşluksuz ve + olmadan. Örnek: 905558248420",
    }),
    defineField({
      name: "whatsappMessage",
      title: "WhatsApp hazır mesajı",
      type: "string",
      group: "iletisim",
      description: "Butona tıklayanın mesaj kutusunda hazır gelecek metin.",
    }),
    defineField({
      name: "address",
      title: "Adres",
      type: "string",
      group: "iletisim",
    }),

    defineField({
      name: "socialLinks",
      title: "Sosyal medya bağlantıları",
      type: "array",
      group: "sosyal",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "platform",
              title: "Platform",
              type: "string",
              options: {
                list: [
                  { title: "LinkedIn", value: "linkedin" },
                  { title: "Instagram", value: "instagram" },
                  { title: "YouTube", value: "youtube" },
                  { title: "E-posta", value: "email" },
                ],
                layout: "dropdown",
              },
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "url",
              title: "Adres",
              type: "url",
              validation: (rule) => rule.required().uri({ scheme: ["http", "https", "mailto"] }),
            }),
          ],
          preview: { select: { title: "platform", subtitle: "url" } },
        },
      ],
    }),

    defineField({
      name: "seoDescription",
      title: "Arama motoru açıklaması",
      type: "text",
      rows: 3,
      group: "seo",
      description: "Google sonuçlarında görünen özet. 150-160 karakter idealdir.",
      validation: (rule) => rule.max(200).warning("160 karakteri aşarsa Google kısaltabilir."),
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Ayarları" }),
  },
});
