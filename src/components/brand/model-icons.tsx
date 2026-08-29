import type { SVGProps } from "react";

/**
 * Yasam Modeli basliklarinin yanindaki sematik cizimler.
 * Tumu currentColor kullanir, 32x32 kutuya cizilmistir ve
 * kucuk boyutta okunacak sadeliktedir.
 */

type IconProps = SVGProps<SVGSVGElement>;

const base = {
  viewBox: "0 0 32 32",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Zihin: iki loblu beyin ve içindeki kıvrımlar. */
export function MindIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 6.5v19" />
      <path d="M16 8.5a4 4 0 0 0-7.3 2.3A3.6 3.6 0 0 0 6 14.2a3.7 3.7 0 0 0 1.6 3 3.7 3.7 0 0 0 1.5 5.3A4 4 0 0 0 16 24.5" />
      <path d="M16 8.5a4 4 0 0 1 7.3 2.3 3.6 3.6 0 0 1 2.7 3.4 3.7 3.7 0 0 1-1.6 3 3.7 3.7 0 0 1-1.5 5.3A4 4 0 0 1 16 24.5" />
      <path d="M12.4 12.6c-1.4.3-2.2 1.2-2.4 2.6M19.6 12.6c1.4.3 2.2 1.2 2.4 2.6M12 19.6c-1.2.2-2 .9-2.3 2M20 19.6c1.2.2 2 .9 2.3 2" />
    </svg>
  );
}

/** Beden: kalp ve içinden geçen yaşam çizgisi. */
export function BodyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 27S4.5 20.4 4.5 12.7A5.7 5.7 0 0 1 16 9.9a5.7 5.7 0 0 1 11.5 2.8C27.5 20.4 16 27 16 27Z" />
      <path d="M7.5 15.6h4l1.8-3.4 2.6 6.2 2-3.6 1.6 2 1.4-1.2h3.6" strokeWidth="1.5" />
    </svg>
  );
}

/** Ekosistem: bireyi çevreleyen destek ağı. */
export function EcosystemIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="16" cy="16" r="4" />
      <circle cx="16" cy="5.2" r="2.4" />
      <circle cx="26.8" cy="16" r="2.4" />
      <circle cx="16" cy="26.8" r="2.4" />
      <circle cx="5.2" cy="16" r="2.4" />
      <path d="M16 7.6V12M20 16h4.4M16 20v4.4M7.6 16H12" />
    </svg>
  );
}

/** Kalıcı gelişim: kökten yükselen filiz. */
export function GrowthIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M16 27V13" />
      <path d="M16 17c-3.6 0-6.5-2.9-6.5-6.5 3.6 0 6.5 2.9 6.5 6.5Z" />
      <path d="M16 14.5c0-3.6 2.9-6.5 6.5-6.5 0 3.6-2.9 6.5-6.5 6.5Z" />
      <path d="M16 27c-2.4.3-4.3 1.2-5.6 2.6M16 27c2.4.3 4.3 1.2 5.6 2.6" strokeWidth="1.4" />
    </svg>
  );
}

export const modelIcons = {
  brain: MindIcon,
  heart: BodyIcon,
  ecosystem: EcosystemIcon,
  growth: GrowthIcon,
} as const;

export type ModelIconKey = keyof typeof modelIcons;
