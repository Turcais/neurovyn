import type { PortableTextBlock } from "next-sanity";
import { sanityFetch } from "./client";
import { postBySlugQuery, postSlugsQuery, postsQuery } from "./queries";

export type SanityImage = {
  asset?: { _ref: string };
  alt?: string;
};

export type PostSummary = {
  slug: string;
  title: string;
  excerpt?: string;
  publishedAt: string;
  coverImage?: SanityImage;
  categories?: { title: string; slug: string }[];
};

export type Post = PostSummary & {
  body?: PortableTextBlock[];
  seoDescription?: string;
};

/** Yayindaki tum yazilar. CMS kurulu degilse bos liste doner. */
export function getPosts() {
  return sanityFetch<PostSummary[]>(postsQuery, {}, [], { tags: ["post"] });
}

/** Tek yazi. Bulunamazsa null. */
export function getPost(slug: string) {
  return sanityFetch<Post | null>(postBySlugQuery, { slug }, null, { tags: ["post"] });
}

/** generateStaticParams icin slug listesi. */
export function getPostSlugs() {
  return sanityFetch<string[]>(postSlugsQuery, {}, []);
}

/** Tarihi Turkce uzun bicimde yazar. */
export function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("tr-TR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
