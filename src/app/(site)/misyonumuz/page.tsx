import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading, StepCard } from "@/components/ui/section";
import { acceptanceNote, missionStatement, tenPrinciples } from "@/lib/content";

export const metadata: Metadata = {
  title: "Misyonumuz",
  description: missionStatement,
};

/** 10 ilkeyi yasam alani renkleriyle dolasarak renklendirir. */
const cycle = [
  "--area-egitim",
  "--area-gelisim",
  "--area-kariyer",
  "--area-toplum",
  "--area-anlam",
  "--area-saglik",
  "--area-aile",
];

export default function MissionPage() {
  return (
    <PageShell cmsKey="misyonumuz" title="Misyonumuz" lead={missionStatement}>
      <SectionHeading
        eyebrow="Neurovyn'in 10 Temel İlkesi"
        title="Bilimle anlar, ekosistemiyle bütünleştirir, birlikte dönüştürürüz."
        lead="Bu on ilke, Neurovyn'in her çalışmasında başvurduğu ortak zemindir."
      />

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {tenPrinciples.map((principle, i) => (
          <StepCard
            key={principle.title}
            index={i + 1}
            title={principle.title}
            body={principle.body}
            colorVar={cycle[i % cycle.length]}
          />
        ))}
      </ol>

      <div className="mt-14 rounded-2xl border border-border bg-bg-subtle p-8 sm:p-10">
        <p className="prose-measure text-[15px] leading-[1.85] text-fg-muted">{acceptanceNote}</p>
      </div>

      <p className="mt-12 font-display text-sm font-bold uppercase tracking-[0.16em] text-fg-faint">
        Etiket değil, anlayış · Tanı değil, tasarım · Tek değil, birlikte
      </p>
    </PageShell>
  );
}
