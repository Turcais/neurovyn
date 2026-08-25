import { groq } from "next-sanity";

/** Blog listesi — govde metni haric, hafif alanlar. */
export const postsQuery = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    "slug": slug.current,
    title,
    excerpt,
    publishedAt,
    coverImage,
    "categories": categories[]->{ title, "slug": slug.current }
  }
`;

/** Tek yazi — govde dahil. */
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    "slug": slug.current,
    title,
    excerpt,
    seoDescription,
    publishedAt,
    coverImage,
    body,
    "categories": categories[]->{ title, "slug": slug.current }
  }
`;

/** Statik yol uretimi icin yalnizca slug'lar. */
export const postSlugsQuery = groq`
  *[_type == "post" && defined(slug.current)].slug.current
`;

/** Tek kayitlik site ayarlari. */
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    brandName, tagline, sloganLead, sloganTail, footerBlurb,
    email, phone, phoneHref, whatsapp, whatsappMessage, address,
    seoDescription,
    socialLinks[]{ platform, url }
  }
`;

/** Sabit sayfa metni (anahtara gore). */
export const pageContentQuery = groq`
  *[_type == "pageContent" && key == $key][0] {
    title, lead, body, seoDescription
  }
`;
