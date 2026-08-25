import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, MoveRight } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button";
import { valueAreaDetails } from "@/lib/content";
import { valueAreas } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return valueAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = valueAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return { title: area.title, description: valueAreaDetails[slug]?.lead };
}

export default async function ValueAreaPage({ params }: Props) {
  const { slug } = await params;
  const area = valueAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const detail = valueAreaDetails[slug];
  const others = valueAreas.filter((a) => a.slug !== slug);

  return (
    <PageShell title={area.title} lead={detail?.lead}>
      {detail && (
        <section className="rounded-2xl border border-border bg-bg-subtle p-8 sm:p-10">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-accent-text">
            Kimler için?
          </h2>
          <ul className="mt-6 space-y-3.5">
            {detail.forWhom.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check
                  className="mt-0.5 size-[18px] shrink-0"
                  style={{ color: `var(${area.colorVar})` }}
                  aria-hidden
                />
                <span className="text-[15px] leading-[1.7] text-fg-muted">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-14">
        <h2 className="font-display text-[20px] font-bold">Nasıl ilerliyoruz?</h2>
        <p className="prose-measure mt-4 text-[15px] leading-[1.85] text-fg-muted">
          Her çalışma Neurovyn Yaşam Döngüsü ile ilerler: önce anlarız, ekosistemi haritalarız,
          birlikte bir gelişim rotası tasarlar ve süreci takip ederiz. Ayrıntılar için{" "}
          <Link href="/yaklasimimiz" className="font-semibold text-primary hover:underline">
            yaklaşımımıza
          </Link>{" "}
          göz atabilirsiniz.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/iletisim" size="lg">
            Görüşme talep edin
            <MoveRight className="size-[18px]" aria-hidden />
          </ButtonLink>
          <ButtonLink href="/yaklasimimiz" variant="outline" size="lg">
            Yaklaşımımız
          </ButtonLink>
        </div>
      </section>

      <section className="mt-20 border-t border-border pt-10">
        <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-fg-faint">
          Diğer alanlar
        </h2>
        <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other) => {
            const Icon = other.icon;
            return (
              <li key={other.slug}>
                <Link
                  href={`/alanlarimiz/${other.slug}`}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3.5 transition-colors hover:border-primary/50"
                >
                  <Icon
                    className="size-[19px] shrink-0"
                    style={{ color: `var(${other.colorVar})` }}
                    aria-hidden
                  />
                  <span className="font-display text-[14px] font-semibold text-ink">
                    {other.title}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </PageShell>
  );
}
