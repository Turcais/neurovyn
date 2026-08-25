import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/ui/section";
import { brandClosing, neurodiversityView, neurovynPrinciples, workingPrinciples } from "@/lib/content";

export const metadata: Metadata = {
  title: "İlkelerimiz",
  description:
    "Neurovyn İlkeleri: Anlamak dönüşümün başlangıcıdır. Hiçbir birey tek başına gelişmez. Her yaşam yeniden tasarlanabilir.",
};

const cycle = [
  "--area-egitim",
  "--area-gelisim",
  "--area-kariyer",
  "--area-toplum",
  "--area-anlam",
  "--area-saglik",
  "--area-aile",
];

export default function PrinciplesPage() {
  return (
    <PageShell
      title="Neurovyn İlkeleri"
      lead="Anlamakla başlar, etkileşimle dönüşür, gelişimle devam eder. Bu on sekiz cümle, Neurovyn'in nasıl düşündüğünü anlatır."
    >
      {/* Çalışma ilkeleri */}
      <ul className="flex flex-wrap gap-2.5">
        {workingPrinciples.map((principle) => (
          <li
            key={principle.title}
            className="rounded-full border px-4 py-2 font-display text-[13.5px] font-semibold"
            style={{
              borderColor: `color-mix(in srgb, var(${principle.colorVar}) 40%, transparent)`,
              color: `var(${principle.colorVar})`,
              backgroundColor: `color-mix(in srgb, var(${principle.colorVar}) 7%, transparent)`,
            }}
          >
            {principle.title}
          </li>
        ))}
      </ul>

      {/* 18 ilke */}
      <div className="mt-16">
        <SectionHeading eyebrow="On Sekiz İlke" title="Neye göre çalışırız?" />

        <ol className="grid gap-x-6 gap-y-0 sm:grid-cols-2">
          {neurovynPrinciples.map((principle, i) => (
            <li
              key={principle}
              className="flex items-start gap-4 border-b border-border py-5 last:border-b-0"
            >
              <span
                className="mt-0.5 inline-flex size-8 shrink-0 items-center justify-center rounded-full font-display text-[13px] font-bold tabular-nums"
                style={{
                  backgroundColor: `color-mix(in srgb, var(${cycle[i % cycle.length]}) 13%, transparent)`,
                  color: `var(${cycle[i % cycle.length]})`,
                }}
                aria-hidden
              >
                {i + 1}
              </span>
              <span className="text-[15px] leading-[1.75] text-fg">{principle}</span>
            </li>
          ))}
        </ol>
      </div>

      {/* Nöroçeşitliliğe bakış */}
      <section className="mt-16 rounded-2xl border border-border bg-bg-subtle p-8 sm:p-12">
        <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-accent-text">
          Nöroçeşitliliğe Bakışımız
        </h2>
        <p className="prose-measure mt-6 font-display text-[19px] font-semibold leading-[1.6] text-ink sm:text-[22px]">
          {neurodiversityView.lead}
        </p>
        <p className="prose-measure mt-5 text-[16px] leading-[1.85] text-fg-muted">
          {neurodiversityView.body}
        </p>
      </section>

      <p className="prose-measure mt-14 font-serif text-[19px] italic leading-[1.7] text-fg-muted sm:text-[21px]">
        {brandClosing}
      </p>
    </PageShell>
  );
}
