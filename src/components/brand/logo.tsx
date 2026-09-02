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
  sm: { word: "text-[22px] sm:text-[26px]", mark: "size-[21px] sm:size-[25px]", tag: "text-[10.5px] sm:text-[12px]" },
  lg: { word: "text-5xl sm:text-6xl lg:text-7xl", mark: "size-[46px] sm:size-[56px] lg:size-[67px]", tag: "text-lg sm:text-xl lg:text-2xl" },
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
        <span className={cn("mx-[0.04em] inline-block", s.mark)} aria-hidden>
          <TreeMark
            treeClassName={tone === "onDark" ? "text-secondary-bright" : "text-secondary"}
          />
        </span>
        <span aria-hidden>vyn</span>
        <span className="sr-only">{site.name}</span>
      </span>

      {withTagline && (
        <span
          className={cn(
            "mt-0.5 text-balance font-display font-medium leading-tight tracking-tight",
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
