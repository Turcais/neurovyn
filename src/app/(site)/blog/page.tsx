import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MoveRight, PenLine } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button";
import { urlForImage } from "@/sanity/client";
import { formatDate, getPosts } from "@/sanity/blog";

export const metadata: Metadata = {
  title: "Blog",
  description: "Yazılar, notlar ve bilimden yaşama taşıdıklarımız.",
};

/* Yazilar CMS'ten gelir; saatte bir tazelenir. */
export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <PageShell
        title="Blog"
        lead="Yazılar, notlar ve bilimden yaşama taşıdıklarımız. Nöroyaşam tasarımı, öğrenme, ekosistem ve gelişim üzerine."
      >
        <div className="rounded-2xl border border-dashed border-border-strong bg-bg-subtle p-10 text-center sm:p-16">
          <span
            className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-primary-soft text-primary"
            aria-hidden
          >
            <PenLine className="size-6" />
          </span>
          <h2 className="mt-6 font-display text-[20px] font-bold">İlk yazı hazırlanıyor</h2>
          <p className="prose-measure mx-auto mt-3 text-[15px] leading-[1.8] text-fg-muted">
            Blog içerikleri yakında burada yayınlanacak. Bu arada Neurovyn&apos;in nasıl düşündüğünü
            manifestomuzdan okuyabilirsiniz.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <ButtonLink href="/manifesto" size="lg">
              Manifestoyu okuyun
              <MoveRight className="size-[18px]" aria-hidden />
            </ButtonLink>
            <ButtonLink href="/iletisim" variant="outline" size="lg">
              Bize Ulaşın
            </ButtonLink>
          </div>
        </div>
      </PageShell>
    );
  }

  return (
    <PageShell
      title="Blog"
      lead="Yazılar, notlar ve bilimden yaşama taşıdıklarımız. Nöroyaşam tasarımı, öğrenme, ekosistem ve gelişim üzerine."
    >
      <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          const cover = post.coverImage ? urlForImage(post.coverImage)?.width(800).height(500).url() : null;
          return (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-primary/50"
              >
                {cover && (
                  <Image
                    src={cover}
                    alt={post.coverImage?.alt ?? ""}
                    width={800}
                    height={500}
                    sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw"
                    className="aspect-[8/5] w-full object-cover"
                  />
                )}

                <div className="flex flex-1 flex-col p-6">
                  <time dateTime={post.publishedAt} className="text-[13px] text-fg-faint">
                    {formatDate(post.publishedAt)}
                  </time>
                  <h2 className="mt-2 font-display text-[17px] font-bold leading-snug">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="mt-2.5 flex-1 text-[14px] leading-[1.75] text-fg-muted">
                      {post.excerpt}
                    </p>
                  )}
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Okuyun
                    <MoveRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </PageShell>
  );
}
