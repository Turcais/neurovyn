import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Ic sayfalarda tekrar eden bolum basligi. */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  className,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-10", className)}>
      {eyebrow && (
        <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-accent-text">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 font-display text-[26px] font-bold leading-tight tracking-tight sm:text-[32px]">
        {title}
      </h2>
      {lead && <p className="prose-measure mt-4 text-[16px] leading-[1.8] text-fg-muted">{lead}</p>}
    </div>
  );
}

/** Numarali ilke veya adim karti. */
export function StepCard({
  index,
  title,
  body,
  colorVar = "--primary",
}: {
  index: number;
  title: string;
  body: string;
  colorVar?: string;
}) {
  return (
    <li className="relative rounded-2xl border border-border bg-surface p-6">
      <span
        className="inline-flex size-9 items-center justify-center rounded-full font-display text-sm font-bold"
        style={{
          backgroundColor: `color-mix(in srgb, var(${colorVar}) 14%, transparent)`,
          color: `var(${colorVar})`,
        }}
        aria-hidden
      >
        {index}
      </span>
      <h3 className="mt-4 font-display text-[16px] font-bold leading-snug">{title}</h3>
      <p className="mt-2 text-[14px] leading-[1.75] text-fg-muted">{body}</p>
    </li>
  );
}

/** Uzun metin bloklari icin olculu paragraf sarmalayicisi. */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("prose-measure space-y-5 text-[16px] leading-[1.85] text-fg", className)}>
      {children}
    </div>
  );
}

/** One cikan alinti. */
export function PullQuote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="prose-measure my-10 border-l-[3px] border-accent pl-6 font-serif text-[20px] italic leading-[1.7] text-ink sm:text-[22px]">
      {children}
    </blockquote>
  );
}
