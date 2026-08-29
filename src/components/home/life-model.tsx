import { Plus, MoveRight } from "lucide-react";
import { modelIcons, type ModelIconKey } from "@/components/brand/model-icons";
import { lifeModel } from "@/lib/content";

/**
 * Zihin + Beden + Ekosistem -> Kalici ve Surdurulebilir Gelisim
 * Marka rehberindeki "Neurovyn Yasam Modeli" bolumunun karsiligi.
 */
export function LifeModel() {
  return (
    <section className="mx-auto max-w-[86rem] px-6 py-6">
      <div className="rounded-2xl border border-border bg-bg-subtle p-8 sm:p-10">
        <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-accent-text">
          Neurovyn Yaşam Modeli
        </h2>
        <p className="prose-measure mt-4 font-display text-[19px] font-semibold leading-[1.6] text-ink sm:text-[22px]">
          İnsan yalnızca zihninden ibaret değildir. Zihin, beden ve yaşadığı ekosistem sürekli
          etkileşim içindedir.
        </p>

        <div className="mt-9 flex flex-col items-stretch gap-4 lg:flex-row lg:items-center">
          {lifeModel.parts.map((part, i) => (
            <div key={part.title} className="flex flex-1 items-center gap-4">
              <div className="flex-1 rounded-xl border border-border bg-surface p-5">
                <div className="flex items-center gap-3">
                  {(() => {
                    const Icon = modelIcons[part.icon as ModelIconKey];
                    return (
                      <span
                        className="inline-flex size-10 shrink-0 items-center justify-center rounded-full"
                        style={{
                          backgroundColor: `color-mix(in srgb, var(${part.colorVar}) 12%, transparent)`,
                          color: `var(${part.colorVar})`,
                        }}
                      >
                        <Icon className="size-6" />
                      </span>
                    );
                  })()}
                  <h3
                    className="font-display text-[17px] font-bold"
                    style={{ color: `var(${part.colorVar})` }}
                  >
                    {part.title}
                  </h3>
                </div>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-fg-muted">{part.body}</p>
              </div>
              {i < lifeModel.parts.length - 1 && (
                <Plus className="hidden size-5 shrink-0 text-fg-faint lg:block" aria-hidden />
              )}
            </div>
          ))}

          <MoveRight className="mx-auto size-5 shrink-0 rotate-90 text-fg-faint lg:rotate-0" aria-hidden />

          <div
            className="flex-1 rounded-xl border-2 p-5"
            style={{
              borderColor: `color-mix(in srgb, var(${lifeModel.outcome.colorVar}) 45%, transparent)`,
              backgroundColor: `color-mix(in srgb, var(${lifeModel.outcome.colorVar}) 7%, transparent)`,
            }}
          >
            <div className="flex items-center gap-3">
              {(() => {
                const Icon = modelIcons[lifeModel.outcome.icon as ModelIconKey];
                return (
                  <span
                    className="inline-flex size-10 shrink-0 items-center justify-center rounded-full"
                    style={{
                      backgroundColor: `color-mix(in srgb, var(${lifeModel.outcome.colorVar}) 14%, transparent)`,
                      color: `var(${lifeModel.outcome.colorVar})`,
                    }}
                  >
                    <Icon className="size-6" />
                  </span>
                );
              })()}
              <h3
                className="font-display text-[17px] font-bold leading-snug"
                style={{ color: `var(${lifeModel.outcome.colorVar})` }}
              >
                {lifeModel.outcome.title}
              </h3>
            </div>
            <p className="mt-3 text-[13.5px] leading-[1.7] text-fg-muted">
              {lifeModel.outcome.body}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
