import type { Metadata } from "next";
import Link from "next/link";
import { MoveRight } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { valueAreaDetails } from "@/lib/content";
import { valueAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Değer Ürettiğimiz Alanlar",
  description: "Bireylerden kurumlara kadar yaşamın her alanında değer üretiyoruz.",
};

export default function ValueAreasPage() {
  return (
    <PageShell
      title="Değer Ürettiğimiz Alanlar"
      lead="Bireylerden kurumlara kadar yaşamın her alanında değer üretiyoruz. Yöntemlerimiz alana göre değişir; yaklaşımımız değişmez."
    >
      <ul className="grid gap-4 md:grid-cols-2">
        {valueAreas.map((area) => {
          const Icon = area.icon;
          const detail = valueAreaDetails[area.slug];
          return (
            <li key={area.slug}>
              <Link
                href={`/alanlarimiz/${area.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-7 transition-colors hover:border-primary/50"
              >
                <span
                  className="inline-flex size-12 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `color-mix(in srgb, var(${area.colorVar}) 12%, transparent)`,
                    color: `var(${area.colorVar})`,
                  }}
                >
                  <Icon className="size-[22px]" aria-hidden />
                </span>

                <h2
                  className="mt-5 font-display text-[18px] font-bold leading-snug"
                  style={{ color: `var(${area.colorVar})` }}
                >
                  {area.title}
                </h2>

                {detail && (
                  <p className="mt-3 flex-1 text-[14.5px] leading-[1.8] text-fg-muted">
                    {detail.lead}
                  </p>
                )}

                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Ayrıntılar
                  <MoveRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </PageShell>
  );
}
