import { defineField, defineType } from "sanity";

/**
 * Sabit sayfalarin duzenlenebilir metinleri.
 * Her sayfa icin tek kayit; anahtar ile eslesir.
 * Kayit yoksa site yerel metne duser, bu yuzden kismi gecis guvenlidir.
 */
export const pageContent = defineType({
  name: "pageContent",
  title: "Sayfa Metni",
  type: "document",
  fields: [
    defineField({
      name: "key",
      title: "Sayfa",
      type: "string",
      options: {
        list: [
          { title: "Ana Sayfa — hero", value: "home" },
          { title: "Vizyonumuz", value: "vizyonumuz" },
          { title: "Misyonumuz", value: "misyonumuz" },
          { title: "Ne Yapıyoruz", value: "ne-yapiyoruz" },
          { title: "Bilimsel Temelimiz", value: "bilimsel-temelimiz" },
          { title: "Yaklaşımımız", value: "yaklasimimiz" },
          { title: "İlkelerimiz", value: "ilkelerimiz" },
          { title: "Manifesto", value: "manifesto" },
          { title: "Hakkımızda", value: "hakkimizda" },
          { title: "Ekibimiz", value: "ekibimiz" },
          { title: "Bize Ulaşın", value: "iletisim" },
          { title: "Gizlilik Politikası", value: "gizlilik-politikasi" },
          { title: "Kullanım Koşulları", value: "kullanim-kosullari" },
        ],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      title: "Sayfa başlığı",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "lead",
      title: "Giriş metni",
      type: "text",
      rows: 3,
      description: "Başlığın altında görünen açıklama.",
    }),
    defineField({
      name: "body",
      title: "Serbest metin",
      type: "array",
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
        },
      ],
      description: "Boş bırakılırsa sayfanın hazır içeriği görünmeye devam eder.",
    }),
    defineField({
      name: "seoDescription",
      title: "Arama motoru açıklaması",
      type: "text",
      rows: 2,
      validation: (rule) => rule.max(200),
    }),
  ],
  preview: { select: { title: "title", subtitle: "key" } },
});
