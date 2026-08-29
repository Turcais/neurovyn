import Link from "next/link";
import { ChevronRight, MoveRight } from "lucide-react";
import { valueAreasLead } from "@/lib/content";
import { pillars } from "@/lib/site";
import { getValueAreas } from "@/lib/value-areas";

export async function WhatWeDo() {
  const valueAreas = await getValueAreas();

  return (
    <section className="mx-auto grid max-w-[86rem] gap-6 px-6 py-6 lg:grid-cols-2 lg:gap-7">
      {/* ---------- NE YAPIYORUZ? ---------- */}
      <div className="flex flex-col rounded-2xl border border-border bg-bg-subtle p-7 sm:p-9">
        <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-primary sm:text-[22px]">
          Ne Yapıyoruz?
        </h2>
        <p className="mt-4 text-[15px] text-fg-muted">Bilimle, birlikte, bütüncül bir yaklaşım.</p>

        <ul className="mt-6 flex-1 divide-y divide-border">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <li key={pillar.title}>
                <Link
                  href={pillar.href}
                  className="group flex items-start gap-4 py-5 transition-colors hover:bg-surface/70"
                >
                  <span
                    className="mt-0.5 inline-flex size-12 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `color-mix(in srgb, var(${pillar.colorVar}) 12%, transparent)`,
                      color: `var(${pillar.colorVar})`,
                    }}
                  >
                    <Icon className="size-[22px]" aria-hidden />
                  </span>

                  <span className="flex-1">
                    <span className="block font-display text-[15px] font-bold text-ink">
                      {pillar.title}
                    </span>
                    <span className="mt-1.5 block text-[13.5px] leading-[1.7] text-fg-muted">
                      {pillar.summary}
                    </span>
                  </span>

                  <span
                    className="mt-2 inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-fg-muted transition-colors group-hover:border-primary group-hover:text-primary"
                    aria-hidden
                  >
                    <ChevronRight className="size-4" />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/ne-yapiyoruz"
          className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-primary hover:underline"
        >
          Ne Yaptığımızı Keşfedin
          <MoveRight className="size-4" aria-hidden />
        </Link>
      </div>

      {/* ---------- DEĞER ÜRETTİĞİMİZ ALANLAR ---------- */}
      <div className="flex flex-col rounded-2xl border border-border bg-bg-subtle p-7 sm:p-9">
        <h2 className="font-display text-xl font-extrabold uppercase tracking-tight text-secondary sm:text-[22px]">
          Değer Ürettiğimiz Alanlar
        </h2>
        <p className="mt-4 max-w-md text-[15px] leading-[1.7] text-fg-muted">
          {valueAreasLead}
        </p>

        <ul className="mt-6 flex-1 space-y-2.5">
          {valueAreas.map((area) => {
            const Icon = area.icon;
            return (
              <li key={area.slug}>
                <Link
                  href={`/alanlarimiz/${area.slug}`}
                  className="group flex items-center gap-3.5 rounded-xl border border-border bg-surface px-4 py-3.5 transition-colors hover:border-secondary/60"
                >
                  <Icon
                    className="size-[21px] shrink-0"
                    style={{ color: `var(${area.colorVar})` }}
                    aria-hidden
                  />
                  <span className="flex-1 font-display text-[14.5px] font-semibold text-ink">
                    {area.title}
                  </span>
                  <ChevronRight
                    className="size-[18px] shrink-0 text-fg-faint transition-colors group-hover:text-secondary"
                    aria-hidden
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href="/alanlarimiz"
          className="mt-7 inline-flex items-center gap-2 self-start text-sm font-semibold text-secondary hover:underline"
        >
          Tüm Alanlarımızı Keşfedin
          <MoveRight className="size-4" aria-hidden />
        </Link>
      </div>
    </section>
  );
}
