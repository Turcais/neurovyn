import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { SectionHeading, StepCard } from "@/components/ui/section";
import { applicationModes, methodologySteps } from "@/lib/content";
import { pillars } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ne Yapıyoruz",
  description:
    "Bilimle, birlikte, bütüncül bir yaklaşım: anlıyoruz, tasarlıyoruz, destekliyoruz. Neurovyn Metodolojisi'nin sekiz adımı.",
};

/** Ana sayfadaki uc sutunun ayrintili anlatimi. */
const pillarDetails: Record<string, string[]> = {
  Anlıyoruz: [
    "Bireyin nörolojik işleyişini, güçlü yönlerini, ilgi alanlarını ve zorlandığı noktaları birlikte keşfederiz.",
    "Değerlendirme bizim için bir not verme süreci değildir. Amacımız etiketlemek değil, davranışın altındaki nedeni görmektir.",
  ],
  Tasarlıyoruz: [
    "Kişiye özel bir nöroyaşam planı oluştururuz: hedefler, stratejiler, çevresel düzenlemeler ve destek sistemleri.",
    "Plan hazır bir kalıp değildir. Bireyin ritmine, yaşam koşullarına ve önceliklerine göre birlikte şekillenir.",
  ],
  Destekliyoruz: [
    "Planı küçük ve sürdürülebilir adımlarla hayata geçiririz; ilerlemeyi düzenli olarak izler ve gerektiğinde birlikte güncelleriz.",
    "Gelişim tek seferlik bir müdahale değil, yaşamın içinde devam eden dinamik bir süreçtir.",
  ],
};

export default function WhatWeDoPage() {
  return (
    <PageShell
      title="Ne Yapıyoruz"
      lead="Bilimle, birlikte, bütüncül bir yaklaşım. İnsanı bütüncül olarak ele alır, yaşamıyla ve çevresiyle birlikte anlarız."
    >
      {/* Üç sütun */}
      <div className="space-y-5">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <section
              key={pillar.title}
              id={pillar.href.split("#")[1]}
              className="scroll-mt-28 rounded-2xl border border-border bg-surface p-7 sm:p-9"
            >
              <div className="flex items-start gap-5">
                <span
                  className="inline-flex size-14 shrink-0 items-center justify-center rounded-full"
                  style={{
                    backgroundColor: `color-mix(in srgb, var(${pillar.colorVar}) 12%, transparent)`,
                    color: `var(${pillar.colorVar})`,
                  }}
                >
                  <Icon className="size-6" aria-hidden />
                </span>
                <div>
                  <h2
                    className="font-display text-[22px] font-bold"
                    style={{ color: `var(${pillar.colorVar})` }}
                  >
                    {pillar.title}
                  </h2>
                  <div className="prose-measure mt-3 space-y-3">
                    {pillarDetails[pillar.title]?.map((paragraph) => (
                      <p key={paragraph} className="text-[15px] leading-[1.85] text-fg-muted">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Metodoloji */}
      <div className="mt-20">
        <SectionHeading
          eyebrow="Neurovyn Metodolojisi (NVM)"
          title="Ekosistem temelli nöroyaşam tasarımının sekiz adımı"
          lead="Her birey farklıdır. Her yaşam bir bütündür. Biz, bireyi ve ekosistemini birlikte dönüştürürüz."
        />

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {methodologySteps.map((step, i) => (
            <StepCard
              key={step.title}
              index={i + 1}
              title={step.title}
              body={step.body}
              colorVar={step.colorVar}
            />
          ))}
        </ol>

        <p className="mt-10 rounded-2xl border border-border bg-bg-subtle p-8 font-display text-[15px] font-semibold leading-[1.75] text-ink sm:p-10">
          Amaç: Bireyin potansiyelini ortaya çıkarmak ve ekosisteminde kabul, katılım ve aidiyetle
          yaşamasını sağlamak.
        </p>
      </div>

      {/* Uygulama modları */}
      <div className="mt-20">
        <SectionHeading
          eyebrow="Uygulama Modları"
          title="Bu yaklaşımı dört farklı biçimde çalıştırırız"
          lead="Hangi modda çalışacağımıza, ilk görüşmede ihtiyacınızı birlikte değerlendirerek karar veririz."
        />

        <ul className="grid gap-4 sm:grid-cols-2">
          {applicationModes.map((mode) => (
            <li key={mode.title} className="rounded-2xl border border-border bg-surface p-7">
              <span
                className="block h-1 w-10 rounded-full"
                style={{ backgroundColor: `var(${mode.colorVar})` }}
                aria-hidden
              />
              <h3
                className="mt-4 font-display text-[17px] font-bold"
                style={{ color: `var(${mode.colorVar})` }}
              >
                {mode.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.75] text-fg-muted">{mode.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}
