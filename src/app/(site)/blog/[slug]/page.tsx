import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MoveLeft } from "lucide-react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { PageShell } from "@/components/layout/page-shell";
import { urlForImage } from "@/sanity/client";
import { formatDate, getPost, getPostSlugs, type SanityImage } from "@/sanity/blog";

type Props = { params: Promise<{ slug: string }> };

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.seoDescription ?? post.excerpt,
    openGraph: { type: "article", publishedTime: post.publishedAt },
  };
}

/** Yazi govdesindeki bloklarin site tipografisine gore gorunumu. */
const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="mt-5 text-[16px] leading-[1.9] text-fg-muted">{children}</p>
    ),
    h2: ({ children }) => (
      <h2 className="mt-12 font-display text-[24px] font-bold leading-snug">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-9 font-display text-[19px] font-bold leading-snug">{children}</h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-8 border-l-[3px] border-accent pl-6 font-serif text-[19px] italic leading-[1.7] text-ink">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="mt-5 list-disc space-y-2 pl-6 text-[16px] leading-[1.85] text-fg-muted">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="mt-5 list-decimal space-y-2 pl-6 text-[16px] leading-[1.85] text-fg-muted">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-ink">{children}</strong>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        className="font-medium text-primary underline underline-offset-2"
        {...(value?.href?.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }: { value: SanityImage }) => {
      const url = urlForImage(value)?.width(1200).url();
      if (!url) return null;
      return (
        <Image
          src={url}
          alt={value.alt ?? ""}
          width={1200}
          height={800}
          sizes="(min-width: 768px) 68ch, 90vw"
          className="my-8 h-auto w-full rounded-2xl border border-border"
        />
      );
    },
  },
};

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const cover = post.coverImage ? urlForImage(post.coverImage)?.width(1400).url() : null;

  return (
    <PageShell title={post.title} lead={post.excerpt}>
      <article>
        <p className="text-[14px] text-fg-faint">
          <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
          {post.categories?.length ? ` · ${post.categories.map((c) => c.title).join(", ")}` : ""}
        </p>

        {cover && (
          <Image
            src={cover}
            alt={post.coverImage?.alt ?? ""}
            width={1400}
            height={875}
            priority
            sizes="(min-width: 1024px) 70vw, 92vw"
            className="mt-8 h-auto w-full rounded-2xl border border-border"
          />
        )}

        <div className="prose-measure mt-10">
          {post.body && <PortableText value={post.body} components={components} />}
        </div>
      </article>

      <Link
        href="/blog"
        className="mt-14 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
      >
        <MoveLeft className="size-4" aria-hidden />
        Tüm yazılar
      </Link>
    </PageShell>
  );
}
