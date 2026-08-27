import type { PortableTextBlock } from "next-sanity";
import { sanityFetch } from "@/sanity/client";
import { pageContentQuery } from "@/sanity/queries";

/**
 * Sabit sayfalarin panelden duzenlenebilir metni.
 * Panelde kayit yoksa (veya alan bosaltilmissa) sayfanin koddaki
 * metni gecerli kalir; bu yuzden kismi doldurma guvenlidir.
 */

export type PageText = {
  title?: string;
  lead?: string;
  body?: PortableTextBlock[];
  seoDescription?: string;
};

/** Panelde tanimli sayfa anahtarlari. */
export type PageKey =
  | "home"
  | "vizyonumuz"
  | "misyonumuz"
  | "ne-yapiyoruz"
  | "yaklasimimiz"
  | "ilkelerimiz"
  | "manifesto"
  | "hakkimizda"
  | "ekibimiz"
  | "iletisim"
  | "gizlilik-politikasi"
  | "kullanim-kosullari";

export async function getPageText(key: PageKey): Promise<PageText> {
  const cms = await sanityFetch<PageText | null>(pageContentQuery, { key }, null, {
    tags: ["pageContent"],
  });
  return cms ?? {};
}
