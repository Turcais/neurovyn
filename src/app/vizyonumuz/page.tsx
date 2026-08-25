import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/ui/section";
import { corePrinciple, visionPillars, visionStatement } from "@/lib/content";

export const metadata: Metadata = {
  title: "Vizyonumuz",
  description: visionStatement,
};

export default function VisionPage() {
  return (
    <PageShell title="Vizyonumuz" lead="Neye inanıyoruz?">
      <blockquote className="rounded-2xl border border-border bg-bg-subtle p-8 sm:p-10">
        <p className="prose-measure font-display text-[20px] font-semibold leading-[1.6] text-ink sm:text-[24px]">
          {visionStatement}
        </p>
      </blockquote>

      <div className="mt-16">
        <SectionHeading
          eyebrow="Vizyonumuzun Anlamı"
          title="Altı temel bakış"
          lead="Vizyonumuz soyut bir cümle değil; her gün çalışma biçimimizi belirleyen altı somut ilkedir."
        />

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visionPillars.map((pillar) => (
            <li key={pillar.title} className="rounded-2xl border border-border bg-surface p-6">
              <span
                className="block h-1 w-10 rounded-full"
                style={{ backgroundColor: `var(${pillar.colorVar})` }}
                aria-hidden
              />
              <h3
                className="mt-4 font-display text-[17px] font-bold"
                style={{ color: `var(${pillar.colorVar})` }}
              >
                {pillar.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.75] text-fg-muted">{pillar.body}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-bg-subtle p-8 sm:p-10">
        <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-accent-text">
          Neurovyn İlkesi
        </h2>
        <ul className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
          {corePrinciple.map((line) => (
            <li key={line} className="flex items-start gap-3">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span className="font-display text-[15px] font-semibold leading-snug text-ink">
                {line}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-12 text-center font-serif text-[19px] italic text-fg-muted">
        Her birey özeldir. Anlanır, desteklenir, gelişir.
      </p>
    </PageShell>
  );
}
