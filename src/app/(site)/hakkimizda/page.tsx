import type { Metadata } from "next";
import { MoveRight } from "lucide-react";
import { PageShell } from "@/components/layout/page-shell";
import { BrandTreeImage } from "@/components/brand/tree-image";
import { ButtonLink } from "@/components/ui/button";
import { Prose, PullQuote, SectionHeading } from "@/components/ui/section";
import { founderStory, logoMeaning } from "@/lib/content";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Hakkımızda",
  description: founderStory.lead,
};

export default function AboutPage() {
  return (
    <PageShell cmsKey="hakkimizda" title="Neurovyn nasıl doğdu?" lead={founderStory.lead}>
      <Prose>
        {founderStory.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Prose>

      <PullQuote>{founderStory.pullQuote}</PullQuote>

      <div className="mt-14">
        <SectionHeading
          eyebrow="Amacım"
          title="Bilgi aktarmak ya da danışmanlık yapmaktan fazlası"
          lead="Bugün Neurovyn'i geliştirirken farklı disiplinlerden beslenmeye, bilimsel gelişmeleri takip etmeye ve sürekli öğrenmeye devam ediyorum."
        />

        <ul className="grid gap-3 sm:grid-cols-2">
          {founderStory.aims.map((aim) => (
            <li
              key={aim}
              className="flex items-start gap-3 rounded-xl border border-border bg-surface px-5 py-4"
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span className="text-[14.5px] leading-[1.7] text-fg-muted">{aim}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Kurucu */}
      <section className="mt-20 rounded-2xl border border-border bg-bg-subtle p-8 sm:p-12">
        <div className="grid gap-8 lg:grid-cols-[auto_1fr] lg:gap-12">
          {/* TODO: musteriden kurucu fotografi gelince buraya yerlestirilecek. */}
          <div
            className="flex size-32 shrink-0 items-center justify-center rounded-2xl border border-dashed border-border-strong bg-surface text-center font-display text-[11px] font-semibold uppercase tracking-wider text-fg-faint lg:size-40"
            aria-hidden
          >
            Fotoğraf
            <br />
            eklenecek
          </div>

          <div>
            <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-accent-text">
              Kurucu
            </p>
            <h2 className="mt-3 font-display text-[24px] font-bold sm:text-[28px]">
              {site.founder}
            </h2>
            <div className="prose-measure mt-5 space-y-4">
              {founderStory.bio.map((paragraph) => (
                <p key={paragraph} className="text-[15px] leading-[1.85] text-fg-muted">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>

        <p className="prose-measure mt-10 border-t border-border pt-8 text-[15px] leading-[1.85] text-fg-muted">
          {founderStory.closing}
        </p>

        <p className="prose-measure mt-7 text-[14px] italic leading-[1.8] text-fg-muted">
          {founderStory.signatureNote}
        </p>

        {/* İmza: ad en altta, ünvanlar altında küçük puntoda */}
        <div className="mt-9">
          <p className="font-display text-[18px] font-bold text-ink">
            {founderStory.signature.name}
          </p>
          <p className="mt-1 font-display text-[15px] font-semibold text-ink">
            {founderStory.signature.role}
          </p>
          <p className="mt-1.5 text-[13px] italic text-fg-muted">
            {founderStory.signature.credentials}
          </p>
        </div>
      </section>

      {/* Logomuzun anlamı */}
      <section className="mt-20">
        <SectionHeading
          eyebrow="Logomuzun Anlamı"
          title="Beyin şeklindeki ağaç"
          lead="Logodaki her öge, Neurovyn'in nasıl düşündüğünü anlatan bir karşılığa sahiptir."
        />

        <div className="grid gap-8 lg:grid-cols-[22rem_1fr] lg:gap-12">
          <BrandTreeImage
            decorative
            sizes="(min-width: 1024px) 22rem, 90vw"
            className="mx-auto w-full max-w-[22rem]"
          />

          <ul className="grid gap-3 sm:grid-cols-2">
          {logoMeaning.map((item) => (
            <li key={item.symbol} className="rounded-2xl border border-border bg-surface p-6">
              <span
                className="inline-block size-2.5 rounded-full"
                style={{ backgroundColor: `var(${item.colorVar})` }}
                aria-hidden
              />
              <h3
                className="mt-3 font-display text-[15px] font-bold leading-snug"
                style={{ color: `var(${item.colorVar})` }}
              >
                {item.symbol}
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-fg-muted">{item.meaning}</p>
            </li>
          ))}
          </ul>
        </div>
      </section>

      <div className="mt-14 flex flex-wrap gap-4">
        <ButtonLink href="/manifesto" size="lg">
          Manifestoyu okuyun
          <MoveRight className="size-[18px]" aria-hidden />
        </ButtonLink>
        <ButtonLink href="/ilkelerimiz" variant="outline" size="lg">
          İlkelerimiz
        </ButtonLink>
      </div>
    </PageShell>
  );
}
