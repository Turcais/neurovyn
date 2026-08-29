import { cn } from "@/lib/utils";

/**
 * Logotype icindeki "O" harfinin yerini alan isaret.
 *
 * Halka, harfin govdesidir: kalinligi diger harflerle ayni agirlikta
 * durur ve `currentColor` alir. Icindeki sematik agac ayri renklenir
 * (musteri referansindaki yesil agac), kucuk boyutta okunacak sadelikte.
 */
export function TreeMark({
  className,
  treeClassName,
}: {
  className?: string;
  /** Icteki agacin rengi; verilmezse halka rengini alir */
  treeClassName?: string;
}) {
  return (
    <svg viewBox="0 0 64 64" className={cn("size-full", className)} aria-hidden>
      {/* Harfin govdesi: kalin halka */}
      <circle cx="32" cy="32" r="25.5" fill="none" stroke="currentColor" strokeWidth="9" />

      <g className={treeClassName}>
        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" fill="none">
          {/* govde */}
          <path d="M32 50V30" strokeWidth="3.2" />
          {/* kokler */}
          <path d="M32 50c-3.2.5-5.6 1.8-7.2 3.8M32 50c3.2.5 5.6 1.8 7.2 3.8" strokeWidth="2" />
          {/* alt dallar */}
          <path d="M32 37c-4-1.6-6.9-4.3-8.6-8.1M32 37c4-1.6 6.9-4.3 8.6-8.1" strokeWidth="2.6" />
          {/* ust dallar */}
          <path d="M32 29c-2.9-2-4.9-4.8-6-8.2M32 29c2.9-2 4.9-4.8 6-8.2" strokeWidth="2.2" />
        </g>

        {/* yapraklar — tac hacmini kucuk boyutta da gorunur kilar */}
        <g fill="currentColor">
          {[
            { cx: 32, cy: 15, r: 4.4 },
            { cx: 23.5, cy: 18.5, r: 4 },
            { cx: 40.5, cy: 18.5, r: 4 },
            { cx: 18.5, cy: 25, r: 3.6 },
            { cx: 45.5, cy: 25, r: 3.6 },
            { cx: 26.5, cy: 25.5, r: 3.3 },
            { cx: 37.5, cy: 25.5, r: 3.3 },
            { cx: 22, cy: 32, r: 2.9 },
            { cx: 42, cy: 32, r: 2.9 },
          ].map((leaf) => (
            <circle key={`${leaf.cx}-${leaf.cy}`} cx={leaf.cx} cy={leaf.cy} r={leaf.r} />
          ))}
        </g>
      </g>
    </svg>
  );
}
