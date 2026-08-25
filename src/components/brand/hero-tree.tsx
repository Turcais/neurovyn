import { cn } from "@/lib/utils";

/**
 * Hero gorseli: mor -> yesil gecisli tac yapraga sahip yasam agaci.
 * Yaprak konumlari altin acili spiral ile deterministik uretilir
 * (Math.random kullanilmaz; sunucu ve istemci ciktisi ayni olmalidir).
 *
 * TODO: musteriden gercek hero illustrasyonu gelince bu bilesen degistirilecek.
 */

const LEAF_COUNT = 150;
const GOLDEN_ANGLE = 2.399963;
const CANOPY = { cx: 250, cy: 196, rx: 158, ry: 132 };

type Leaf = { x: number; y: number; r: number; o: number };

function buildCanopy(): Leaf[] {
  const leaves: Leaf[] = [];
  for (let i = 0; i < LEAF_COUNT; i++) {
    const t = (i + 0.5) / LEAF_COUNT;
    const spread = Math.sqrt(t);
    const angle = i * GOLDEN_ANGLE;
    leaves.push({
      x: CANOPY.cx + spread * CANOPY.rx * Math.cos(angle),
      y: CANOPY.cy + spread * CANOPY.ry * Math.sin(angle) * 0.92,
      r: 4.5 + (1 - spread) * 7,
      o: 0.32 + (1 - spread) * 0.5,
    });
  }
  return leaves;
}

const leaves = buildCanopy();

export function HeroTree({ className }: { className?: string }) {
  return (
    <div className={cn("relative", className)}>
      <svg viewBox="0 0 500 470" className="size-full" role="img" aria-label="Neurovyn yaşam ağacı: mor ve yeşil tacıyla, kökleri geniş yayılan bir ağaç">
        <defs>
          <linearGradient id="ht-canopy" x1="0" y1="0" x2="1" y2="0.3">
            <stop offset="0%" stopColor="#8b5cf6" />
            <stop offset="34%" stopColor="#c084fc" />
            <stop offset="58%" stopColor="#fcd34d" />
            <stop offset="80%" stopColor="#84cc16" />
            <stop offset="100%" stopColor="#4d7c0f" />
          </linearGradient>
          <linearGradient id="ht-trunk" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#a16207" />
            <stop offset="45%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#92400e" />
          </linearGradient>
          <radialGradient id="ht-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fffbeb" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#fde68a" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fde68a" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ht-hill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.16" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0.02" />
          </linearGradient>
        </defs>

        {/* uzak tepeler */}
        <path d="M0 372 L96 300 L168 356 L246 286 L330 358 L404 314 L500 380 L500 470 L0 470 Z" fill="url(#ht-hill)" />

        {/* tacin ardindaki isik */}
        <ellipse cx={CANOPY.cx} cy={CANOPY.cy} rx="150" ry="140" fill="url(#ht-core)" />

        {/* kokler */}
        <g stroke="url(#ht-trunk)" strokeLinecap="round" fill="none" opacity="0.9">
          <path d="M250 396c-26 6-46 20-60 42" strokeWidth="5" />
          <path d="M250 396c26 6 46 20 60 42" strokeWidth="5" />
          <path d="M250 402c-16 12-27 26-33 44" strokeWidth="3.5" />
          <path d="M250 402c16 12 27 26 33 44" strokeWidth="3.5" />
          <path d="M250 404c-4 16-5 32-3 48" strokeWidth="2.6" />
          <path d="M190 438c-14 6-25 15-33 27" strokeWidth="2.2" />
          <path d="M310 438c14 6 25 15 33 27" strokeWidth="2.2" />
        </g>

        {/* govde */}
        <path d="M236 404c6-42 9-84 9-126h10c0 42 3 84 9 126-9 4-19 4-28 0Z" fill="url(#ht-trunk)" />

        {/* dallar */}
        <g stroke="url(#ht-trunk)" strokeLinecap="round" fill="none">
          <path d="M247 278c-24-10-42-27-54-50" strokeWidth="4.5" />
          <path d="M253 278c24-10 42-27 54-50" strokeWidth="4.5" />
          <path d="M248 246c-18-12-31-28-38-48" strokeWidth="3.4" />
          <path d="M252 246c18-12 31-28 38-48" strokeWidth="3.4" />
          <path d="M249 214c-9-16-13-33-12-52" strokeWidth="2.8" />
          <path d="M251 214c9-16 13-33 12-52" strokeWidth="2.8" />
        </g>

        {/* tac yapraklari */}
        <g fill="url(#ht-canopy)">
          {leaves.map((leaf, i) => (
            <circle key={i} cx={leaf.x} cy={leaf.y} r={leaf.r} opacity={leaf.o} />
          ))}
        </g>
      </svg>
    </div>
  );
}
