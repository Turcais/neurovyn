import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Neurovyn yasam agaci — musterinin onayladigi logo gorseli.
 *
 * Gorsel kendi koyu zemininde, yuvarlak bir panel icinde durur. Boylece
 * hem acik hem koyu temada aynı sekilde net gorunur; arka plan silme
 * islemi yapilmadigi icin tacta ve isik halkasinda hicbir bozulma olmaz.
 * Gorselin kenarlari panele karisacak sekilde yumusatilmistir.
 */

const ALT =
  "Neurovyn yaşam ağacı: sol yarısı mor (zihin), sağ yarısı yeşil (ekosistem), altın gövde ve kökleriyle beyin biçimli ağaç, çevresinde ekosistem çemberi";

export function BrandTreeImage({
  className,
  priority = false,
  decorative = false,
  sizes = "(min-width: 1024px) 40vw, 90vw",
  /** false verilirse panel cizilmez, gorsel dogrudan yerlesir */
  panel = true,
}: {
  className?: string;
  priority?: boolean;
  decorative?: boolean;
  sizes?: string;
  panel?: boolean;
}) {
  return (
    <div
      className={cn(
        "relative overflow-hidden",
        panel && "rounded-[2rem] bg-[#05070f] p-4 ring-1 ring-white/10 sm:p-6",
        className,
      )}
    >
      <Image
        src="/marka/agac-logo.webp"
        alt={decorative ? "" : ALT}
        aria-hidden={decorative || undefined}
        width={900}
        height={1025}
        sizes={sizes}
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}
