import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading } from "@/components/ui/section";
import { approachClosing, lifeCycle } from "@/lib/content";
import { lifeAreas } from "@/lib/site";

export const metadata: Metadata = {
  title: "Yaklaşımımız",
  description:
    "Neurovyn Yaşam Döngüsü: değerlendirme, planlama, uygulama ve takip eden döngüsel çalışma modelimiz.",
};

const cycleColors = [
  "--area-egitim",
  "--area-gelisim",
  "--area-kariyer",
  "--area-toplum",
  "--area-anlam",
  "--area-saglik",
];

export default function ApproachPage() {
  return (
    <PageShell
      title="Yaklaşımımız"
      lead="İnsanı bütüncül olarak ele alır, yaşamıyla ve çevresiyle birlikte anlarız. Güçlü yönlerini görünür kılar, gelişim potansiyelini ortaya çıkarır ve yaşamını bilinçli şekilde tasarlamasına rehberlik ederiz."
    >
      {/* Yaşam Döngüsü */}
      <SectionHeading
        eyebrow="Neurovyn Yaşam Döngüsü"
        title="Nasıl çalışıyoruz?"
        lead="Değerlendirme, planlama, uygulama ve takip eden döngüsel çalışma modelimizdir. Döngü biter değil, döner: her tur bir öncekinin üzerine kurulur."
      />

      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {lifeCycle.map((step, i) => (
          <li key={step.title} className="rounded-2xl border border-border bg-surface p-6">
            <div className="flex items-center gap-3">
              <span
                className="inline-flex size-9 items-center justify-center rounded-full font-display text-sm font-bold"
                style={{
                  backgroundColor: `color-mix(in srgb, var(${cycleColors[i]}) 14%, transparent)`,
                  color: `var(${cycleColors[i]})`,
                }}
                aria-hidden
              >
                {i + 1}
              </span>
              <h3 className="font-display text-[16px] font-bold leading-snug">{step.title}</h3>
            </div>
            <p className="mt-3 text-[14px] leading-[1.75] text-fg-muted">{step.body}</p>
          </li>
        ))}
      </ol>

      {/* Yedi Yaşam Alanı */}
      <div className="mt-20">
        <SectionHeading
          eyebrow="Yaşam Alanları"
          title="Gelişim tek bir alanda büyümek değildir"
          lead="Yaşamın tüm alanları arasında denge, uyum ve anlam oluşturabilmektir. Bir alanın ihmali, diğerlerini etkiler."
        />

        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {lifeAreas.map((area) => (
            <li key={area.slug} className="rounded-2xl border border-border bg-surface p-5">
              <span
                className="inline-block size-2.5 rounded-full"
                style={{ backgroundColor: `var(${area.colorVar})` }}
                aria-hidden
              />
              <h3
                className="mt-3 font-display text-[15px] font-bold leading-snug"
                style={{ color: `var(${area.colorVar})` }}
              >
                {area.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-fg-muted">{area.summary}</p>
            </li>
          ))}
        </ul>
      </div>

      <p className="prose-measure mt-16 rounded-2xl border border-border bg-bg-subtle p-8 text-[16px] leading-[1.85] text-fg-muted sm:p-10">
        {approachClosing}
      </p>
    </PageShell>
  );
}
