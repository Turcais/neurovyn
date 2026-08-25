import { cn } from "@/lib/utils";

/**
 * Neurovyn agac-beyin sembolunun cizgisel karsiligi.
 * currentColor kullanir; logotype icindeki "O" harfinin yerine gecer.
 * TODO: musteriden gercek SVG logo gelince bu bilesen onunla degistirilecek.
 */
export function TreeMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("size-full", className)}
      aria-hidden
    >
      <circle cx="16" cy="16" r="14.6" strokeWidth="1.6" />
      {/* govde */}
      <path d="M16 26.5V12.4" strokeWidth="1.7" />
      {/* kokler */}
      <path d="M16 26.5c-1.9.2-3.4 1-4.6 2.3M16 26.5c1.9.2 3.4 1 4.6 2.3M16 27.4c-.9.7-1.6 1.5-2.1 2.4M16 27.4c.9.7 1.6 1.5 2.1 2.4" />
      {/* alt dallar */}
      <path d="M16 18.2c-2.2-.9-3.9-2.4-5-4.5M16 18.2c2.2-.9 3.9-2.4 5-4.5" />
      {/* orta dallar */}
      <path d="M16 13.6c-1.7-1-3-2.5-3.8-4.4M16 13.6c1.7-1 3-2.5 3.8-4.4" />
      {/* tepe */}
      <path d="M16 12.4c-.7-1.5-1-3.1-.9-4.8M16 12.4c.7-1.5 1-3.1.9-4.8" />
      {/* yaprak uclari */}
      <circle cx="10.4" cy="12.9" r="1" fill="currentColor" stroke="none" />
      <circle cx="21.6" cy="12.9" r="1" fill="currentColor" stroke="none" />
      <circle cx="11.9" cy="8.6" r=".9" fill="currentColor" stroke="none" />
      <circle cx="20.1" cy="8.6" r=".9" fill="currentColor" stroke="none" />
      <circle cx="15.1" cy="7.3" r=".9" fill="currentColor" stroke="none" />
      <circle cx="16.9" cy="7.3" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}
