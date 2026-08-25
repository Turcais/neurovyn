import { trustPoints } from "@/lib/site";

export function TrustBar() {
  return (
    <section aria-label="Neurovyn'i tanımlayan ilkeler" className="mx-auto max-w-[86rem] px-6 pb-16 pt-6">
      <ul className="grid gap-x-6 gap-y-8 rounded-2xl border border-border bg-bg-subtle px-7 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-border">
        {trustPoints.map((point) => {
          const Icon = point.icon;
          return (
            <li key={point.title} className="flex items-start gap-3.5 lg:px-5 lg:first:pl-0 lg:last:pr-0">
              <Icon className="mt-0.5 size-7 shrink-0 stroke-[1.5] text-primary" aria-hidden />
              <div>
                <h3 className="font-display text-[14.5px] font-bold text-ink">{point.title}</h3>
                <p className="mt-1 text-[13px] leading-[1.65] text-fg-muted">{point.summary}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
