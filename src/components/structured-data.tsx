import { contact, site } from "@/lib/site";

/**
 * Arama motorlari icin Organization + Person semasi.
 * Google'in "kurulus" kartinda logo, iletisim ve kurucu bilgisi gorunur.
 */
export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    alternateName: `${site.name} ${site.tagline}`,
    url: site.url,
    description: site.description,
    email: contact.email,
    telephone: contact.phone,
    address: { "@type": "PostalAddress", addressLocality: "İstanbul", addressCountry: "TR" },
    founder: { "@type": "Person", name: site.founder },
    knowsLanguage: "tr-TR",
    areaServed: "TR",
  };

  return (
    <script
      type="application/ld+json"
      /* JSON.stringify cikisi guvenli; kullanici girdisi icermez. */
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
