import type { Metadata } from "next";
import { Brain, Globe, HeartHandshake, Library, Puzzle, Sprout, type LucideIcon } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { scientificBasis, scientificBasisLead } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bilimsel Temelimiz",
  description: scientificBasisLead,
};

/** Alt basliklarin ikonlari — icerik sirasiyla eslesir. */
const icons: LucideIcon[] = [Brain, Puzzle, Library, Sprout, HeartHandshake, Globe];

export default function ScientificBasisPage() {
  return (
    <PageShell cmsKey="bilimsel-temelimiz" title="Bilimsel Temelimiz" lead={scientificBasisLead}>
      <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-accent-text">
        Altında şu altı alanı kullanırız
      </p>

      <ol className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {scientificBasis.map((field, i) => {
          const Icon = icons[i];
          return (
            <li key={field.title} className="rounded-2xl border border-border bg-surface p-7">
              <div className="flex items-center gap-3.5">
                <span
                  className="inline-flex size-11 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `color-mix(in srgb, var(${field.colorVar}) 12%, transparent)`,
                    color: `var(${field.colorVar})`,
                  }}
                >
                  <Icon className="size-[21px]" aria-hidden />
                </span>
                <h2
                  className="font-display text-[17px] font-bold leading-snug"
                  style={{ color: `var(${field.colorVar})` }}
                >
                  {field.title}
                </h2>
              </div>
              <p className="mt-3.5 text-[14px] leading-[1.8] text-fg-muted">{field.body}</p>
            </li>
          );
        })}
      </ol>
    </PageShell>
  );
}
