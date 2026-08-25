import Link from "next/link";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { TreeMark } from "./tree-mark";

type LogoProps = {
  /** Logotype boyutu. sm: header, lg: hero */
  size?: "sm" | "lg";
  /** Alt basligi gosterir */
  withTagline?: boolean;
  /** Link olarak sarmalanir */
  asLink?: boolean;
  /** Koyu zeminde (footer) kullanim */
  tone?: "default" | "onDark";
  className?: string;
};

const sizes = {
  sm: { word: "text-[22px] sm:text-[26px]", mark: "size-[19px] sm:size-[23px]", tag: "text-[11px] sm:text-[12px]" },
  lg: { word: "text-5xl sm:text-6xl lg:text-7xl", mark: "size-[42px] sm:size-[52px] lg:size-[62px]", tag: "text-xl sm:text-2xl" },
} as const;

export function Logo({ size = "sm", withTagline = true, asLink = true, tone = "default", className }: LogoProps) {
  const s = sizes[size];

  const content = (
    <span className={cn("inline-flex flex-col", className)}>
      {/* NEUR(agac)VYN — "O" harfinin yerini agac sembolu alir */}
      <span
        className={cn(
          "inline-flex items-center font-display font-extrabold uppercase leading-none tracking-[0.02em]",
          tone === "onDark" ? "text-footer-fg" : "text-ink",
          s.word,
        )}
      >
        <span aria-hidden>Neur</span>
        <span
          className={cn("mx-[0.06em] inline-block", tone === "onDark" ? "text-secondary-bright" : "text-primary", s.mark)}
          aria-hidden
        >
          <TreeMark />
        </span>
        <span aria-hidden>vyn</span>
        <span className="sr-only">{site.name}</span>
      </span>

      {withTagline && (
        <span
          className={cn(
            "mt-0.5 font-display font-medium tracking-tight",
            tone === "onDark" ? "text-footer-muted" : "text-primary",
            s.tag,
          )}
        >
          {site.tagline}
        </span>
      )}
    </span>
  );

  if (!asLink) return content;

  return (
    <Link href="/" aria-label={`${site.name} — ana sayfa`} className="rounded-lg">
      {content}
    </Link>
  );
}
