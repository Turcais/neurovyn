import { cn } from "@/lib/utils";

/**
 * Neurovyn beyin-agaci.
 *
 * Referans logodaki yapiyi uretir:
 *   - altin govde ve genis yayilan kokler (beden / bilimsel temel)
 *   - ikiye ayrilan tac: sol lob mor (zihin), sag lob yesil (ekosistem)
 *   - cevreleyen isik halkasi (ekosistemle karsilikli etkilesim)
 *
 * Dallar sabit tohumlu ozyineleme ile uretilir; Math.random kullanilmaz,
 * boylece sunucu ve istemci ciktisi birebir ayni kalir.
 *
 * Sag lob, sol lobun x=250 ekseninde aynasidir: bu hem beyin simetrisini
 * verir hem de iki lobun renklerinin birbirine karismasini onler.
 *
 * TODO: musteriden gercek logo dosyasi gelince bu bilesen <Image /> ile
 * degistirilecek.
 */

type Segment = { x1: number; y1: number; x2: number; y2: number; depth: number };

const CENTER_X = 250;
const CANOPY_ORIGIN_Y = 238;
const ROOT_ORIGIN_Y = 382;
const CANOPY_DEPTH = 6;
const ROOT_DEPTH = 4;

const UP = -Math.PI / 2;
const DOWN = Math.PI / 2;

/** Sabit tohumlu, tekrarlanabilir sozde-rastgele uretec. */
function makeWobble(seed: number) {
  let state = seed;
  return () => {
    state = (state * 1103515245 + 12345) & 0x7fffffff;
    return (state / 0x7fffffff) * 2 - 1;
  };
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

type GrowOptions = {
  maxDepth: number;
  decay: number;
  spread: number;
  /** Dalin sapabilecegi aci araligi — loblarin birbirine gecmesini onler */
  minAngle: number;
  maxAngle: number;
};

function grow(
  out: Segment[],
  wobble: () => number,
  x: number,
  y: number,
  angle: number,
  length: number,
  depth: number,
  options: GrowOptions,
) {
  const x2 = x + Math.cos(angle) * length;
  const y2 = y + Math.sin(angle) * length;
  out.push({ x1: x, y1: y, x2, y2, depth });

  if (depth >= options.maxDepth) return;

  const next = length * options.decay;
  const spread = options.spread * (1 - depth * 0.05);

  for (const direction of [-1, 1]) {
    const jitter = wobble() * 0.14;
    const childAngle = clamp(angle + direction * spread + jitter, options.minAngle, options.maxAngle);
    const childLength = next * (1 + wobble() * 0.14);
    grow(out, wobble, x2, y2, childAngle, childLength, depth + 1, options);
  }
}

function build(seed: number, originY: number, angle: number, length: number, options: GrowOptions) {
  const segments: Segment[] = [];
  grow(segments, makeWobble(seed), CENTER_X, originY, angle, length, 0, options);
  return segments;
}

/** x=250 ekseninde aynalar. */
const mirror = (segments: Segment[]): Segment[] =>
  segments.map((s) => ({
    x1: 2 * CENTER_X - s.x1,
    y1: s.y1,
    x2: 2 * CENTER_X - s.x2,
    y2: s.y2,
    depth: s.depth,
  }));

/* Sol lob: yukaridan en fazla 0.16 rad saga, en fazla 1.30 rad sola sapabilir. */
const leftCanopy = build(11, CANOPY_ORIGIN_Y, UP - 0.20, 54, {
  maxDepth: CANOPY_DEPTH,
  decay: 0.745,
  spread: 0.42,
  minAngle: UP - 1.3,
  maxAngle: UP - 0.16,
});
const rightCanopy = mirror(leftCanopy);

/* Kokler genis ve sig yayilir: kisa ilk dal + yavas kisalma + genis aci araligi. */
const leftRoots = build(29, ROOT_ORIGIN_Y, DOWN + 0.48, 22, {
  maxDepth: ROOT_DEPTH,
  decay: 0.92,
  spread: 0.55,
  minAngle: DOWN - 0.02,
  maxAngle: DOWN + 1.52,
});
const rightRoots = mirror(leftRoots);

/** Iki hex rengi t oraninda karistirir. */
function mix(from: string, to: string, t: number) {
  const parse = (hex: string) => [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const [r1, g1, b1] = parse(from);
  const [r2, g2, b2] = parse(to);
  const channel = (a: number, b: number) => Math.round(a + (b - a) * t);
  return `rgb(${channel(r1, r2)} ${channel(g1, g2)} ${channel(b1, b2)})`;
}

const GOLD = "#eab308";
const VIOLET = "#c084fc";
const LIME = "#a3e635";
const ROOT_BROWN = "#b45309";

/** Ayni derinlikteki dallari tek path'te toplar; DOM'u hafif tutar. */
function depthPaths(segments: Segment[], tipColor: string, maxDepth: number, baseWidth: number) {
  const byDepth: Segment[][] = Array.from({ length: maxDepth + 1 }, () => []);
  for (const segment of segments) byDepth[segment.depth].push(segment);

  return byDepth.map((group, depth) => ({
    depth,
    d: group
      .map((s) => `M${s.x1.toFixed(1)} ${s.y1.toFixed(1)}L${s.x2.toFixed(1)} ${s.y2.toFixed(1)}`)
      .join(""),
    color: mix(GOLD, tipColor, depth / maxDepth),
    width: Math.max(0.85, baseWidth * Math.pow(0.75, depth)),
    opacity: 0.95 - depth * 0.055,
  }));
}

const canopyPaths = [
  ...depthPaths(leftCanopy, VIOLET, CANOPY_DEPTH, 6),
  ...depthPaths(rightCanopy, LIME, CANOPY_DEPTH, 6),
];
const rootPaths = [
  ...depthPaths(leftRoots, ROOT_BROWN, ROOT_DEPTH, 5),
  ...depthPaths(rightRoots, ROOT_BROWN, ROOT_DEPTH, 5),
];

const tips = (segments: Segment[]) => segments.filter((s) => s.depth === CANOPY_DEPTH);
const leftTips = tips(leftCanopy);
const rightTips = tips(rightCanopy);

/* Halka: taci kucaklayacak, en dis dallara degecek sekilde secildi.
   Tac sinirlari x 138..362, y 53..238; halka x 72..428, y 12..368. */
const HALO_CY = 190;
const HALO_R = 178;

export function BrandTree({
  className,
  showHalo = true,
  title = "Neurovyn beyin-ağacı: sol yarısı mor (zihin), sağ yarısı yeşil (ekosistem), altın gövde ve geniş kökleriyle yaşam ağacı",
  decorative = false,
}: {
  className?: string;
  showHalo?: boolean;
  title?: string;
  /** true ise ekran okuyuculardan gizlenir */
  decorative?: boolean;
}) {
  const a11y = decorative
    ? ({ "aria-hidden": true } as const)
    : ({ role: "img", "aria-label": title } as const);

  return (
    <svg viewBox="0 0 500 500" className={cn("size-full", className)} {...a11y}>
      <defs>
        <radialGradient id="bt-core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.9" />
          <stop offset="38%" stopColor="#fde68a" stopOpacity="0.38" />
          <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="bt-halo" x1="0" y1="0.5" x2="1" y2="0.5">
          <stop offset="0%" stopColor="#a855f7" />
          <stop offset="50%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#84cc16" />
        </linearGradient>
        <linearGradient id="bt-trunk" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#a16207" />
          <stop offset="42%" stopColor="#fbbf24" />
          <stop offset="100%" stopColor="#92400e" />
        </linearGradient>
      </defs>

      {/* isik halkasi — ekosistemle karsilikli etkilesim */}
      {showHalo && (
        <circle
          cx={CENTER_X}
          cy={HALO_CY}
          r={HALO_R}
          fill="none"
          stroke="url(#bt-halo)"
          strokeWidth="2"
          strokeOpacity="0.55"
        />
      )}

      {/* tacin ardindaki isik */}
      <ellipse cx={CENTER_X} cy={HALO_CY - 26} rx={152} ry={132} fill="url(#bt-core)" />

      {/* kokler — bilimsel temel */}
      <g fill="none" strokeLinecap="round">
        {rootPaths.map((path, i) => (
          <path
            key={`root-${i}`}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
          />
        ))}
      </g>

      {/* govde — beden, denge, yasam enerjisi */}
      <path
        d="M238 386c5-40 7-88 7-150h10c0 62 2 110 7 150-7 4-17 4-24 0Z"
        fill="url(#bt-trunk)"
      />

      {/* tac — sol lob zihin, sag lob ekosistem */}
      <g fill="none" strokeLinecap="round">
        {canopyPaths.map((path, i) => (
          <path
            key={`canopy-${i}`}
            d={path.d}
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
          />
        ))}
      </g>

      {/* dal uclarindaki isiklar */}
      <g>
        {leftTips.map((tip, i) => (
          <circle key={`lt-${i}`} cx={tip.x2} cy={tip.y2} r={2.4} fill={VIOLET} fillOpacity={0.9} />
        ))}
        {rightTips.map((tip, i) => (
          <circle key={`rt-${i}`} cx={tip.x2} cy={tip.y2} r={2.4} fill={LIME} fillOpacity={0.9} />
        ))}
      </g>
    </svg>
  );
}
