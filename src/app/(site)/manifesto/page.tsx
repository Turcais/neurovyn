import type { Metadata } from "next";
import { MoveRight } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { ButtonLink } from "@/components/ui/button";
import { manifesto } from "@/lib/content";

export const metadata: Metadata = {
  title: "Manifesto",
  description:
    "Neurovyn Manifestosu: Anlamak dönüşümün başlangıcıdır. İnsan anlaşılırsa öğrenme güçlenir.",
};

export default function ManifestoPage() {
  return (
    <PageShell cmsKey="manifesto" title="Neurovyn Manifestosu" lead={manifesto.lead}>
      <div className="space-y-14">
        {manifesto.sections.map((section) => (
          <section key={section.title}>
            <h2 className="prose-measure font-display text-[21px] font-bold leading-snug sm:text-[25px]">
              {section.title}
            </h2>
            <div className="prose-measure mt-5 space-y-4">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[16px] leading-[1.9] text-fg-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-16 rounded-2xl border border-border bg-bg-subtle p-8 sm:p-12">
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-accent-text">
          Çünkü inanıyoruz ki
        </p>
        <ul className="mt-7 space-y-4">
          {manifesto.creed.map((line) => (
            <li
              key={line}
              className="font-serif text-[20px] leading-[1.6] text-ink sm:text-[24px]"
            >
              {line}
            </li>
          ))}
        </ul>
        <p className="mt-9 font-display text-[17px] font-bold text-primary">{manifesto.closing}</p>
      </div>

      <div className="mt-14">
        <ButtonLink href="/hakkimizda" variant="outline" size="lg">
          Neurovyn nasıl doğdu?
          <MoveRight className="size-[18px]" aria-hidden />
        </ButtonLink>
      </div>
    </PageShell>
  );
}
