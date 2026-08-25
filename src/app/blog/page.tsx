import type { Metadata } from "next";
import { MoveRight, PenLine } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Blog",
  description: "Yazılar, notlar ve bilimden yaşama taşıdıklarımız.",
};

/* TODO: Sanity baglandiginda yazilar buradan cekilecek. */
const posts: { slug: string; title: string; excerpt: string; date: string }[] = [];

export default function BlogPage() {
  return (
    <PageShell
      title="Blog"
      lead="Yazılar, notlar ve bilimden yaşama taşıdıklarımız. Nöroyaşam tasarımı, öğrenme, ekosistem ve gelişim üzerine."
    >
      {posts.length === 0 ? (
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
      ) : (
        <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug} className="rounded-2xl border border-border bg-surface p-6">
              <time dateTime={post.date} className="text-[13px] text-fg-faint">
                {post.date}
              </time>
              <h2 className="mt-2 font-display text-[17px] font-bold leading-snug">{post.title}</h2>
              <p className="mt-2.5 text-[14px] leading-[1.75] text-fg-muted">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      )}
    </PageShell>
  );
}
