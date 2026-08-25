import { createClient, type SanityClient } from "next-sanity";
import imageUrlBuilder, { type SanityImageSource } from "@sanity/image-url";
import { apiVersion, canWriteToSanity, dataset, isSanityConfigured, projectId, writeToken } from "./env";

/** Okuma istemcisi — CMS kurulu degilse null. */
export const client: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      perspective: "published",
    })
  : null;

/** Yazma istemcisi — yalnizca sunucu tarafinda, iletisim formu kayitlari icin. */
export const writeClient: SanityClient | null = canWriteToSanity
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
      token: writeToken,
    })
  : null;

/**
 * Guvenli sorgu: CMS kurulu degilse veya sorgu hata verirse
 * yedek icerigi dondurur. Site hicbir kosulda cökmez.
 */
export async function sanityFetch<T>(
  query: string,
  params: Record<string, unknown>,
  fallback: T,
  options: { revalidate?: number; tags?: string[] } = {},
): Promise<T> {
  if (!client) return fallback;

  try {
    const result = await client.fetch<T>(query, params, {
      next: { revalidate: options.revalidate ?? 60, tags: options.tags },
    });
    return result ?? fallback;
  } catch (cause) {
    console.error("[sanity] Sorgu başarısız, yerel içeriğe düşüldü:", cause);
    return fallback;
  }
}

const builder = client ? imageUrlBuilder(client) : null;

/** Sanity gorseli icin optimize edilmis URL uretir. */
export function urlForImage(source: SanityImageSource) {
  return builder?.image(source);
}
