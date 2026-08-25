/**
 * Sanity ortam degiskenleri.
 *
 * Proje kimligi tanimli degilken site cökmez: icerik yerel dosyalardan
 * (src/lib/content.ts) okunmaya devam eder. Bu sayede CMS kurulmadan once de
 * site calisir, kurulduktan sonra icerik otomatik olarak CMS'ten gelir.
 */

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim() || "";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET?.trim() || "production";

/** Sanity API surumu — tarih olarak sabitlenir ki sema degisiklikleri siteyi bozmasin. */
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION?.trim() || "2026-01-01";

/** Yazma yetkili token (iletisim formu kayitlari icin). Yalnizca sunucuda kullanilir. */
export const writeToken = process.env.SANITY_API_WRITE_TOKEN?.trim() || "";

export const isSanityConfigured = projectId.length > 0;
export const canWriteToSanity = isSanityConfigured && writeToken.length > 0;
