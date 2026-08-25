import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Neurovyn yasam agaci — musterinin gercek marka gorseli.
 *
 * Iki surum de render edilir, dogrusu CSS ile gosterilir; boylece
 * tema anahtari aninda calisir ve sunucu/istemci ciktisi ayni kalir.
 * Iki dosya ayni en-boy oranindadir, tema degisiminde yer degistirmez.
 */

const ALT =
  "Neurovyn yaşam ağacı: sol yarısı mor (zihin), sağ yarısı yeşil (ekosistem), altın gövde ve geniş kökleriyle beyin biçimli ağaç";

export function BrandTreeImage({
  className,
  priority = false,
  decorative = false,
  sizes = "(min-width: 1024px) 40vw, 90vw",
  variant = "auto",
}: {
  className?: string;
  priority?: boolean;
  /** true ise ekran okuyuculardan gizlenir */
  decorative?: boolean;
  sizes?: string;
  /** "auto" temaya uyar; footer gibi her zaman koyu yuzeylerde "dark" kullanin */
  variant?: "auto" | "light" | "dark";
}) {
  const alt = decorative ? "" : ALT;

  const lightImage = (
    <Image
      src="/marka/agac-acik.webp"
      alt={alt}
      width={540}
      height={619}
      sizes={sizes}
      priority={priority}
      className={cn("h-auto w-full", variant === "auto" && "dark:hidden")}
    />
  );

  const darkImage = (
    <Image
      src="/marka/agac-koyu.webp"
      alt={variant === "dark" ? alt : ""}
      aria-hidden={variant === "dark" ? undefined : true}
      width={560}
      height={642}
      sizes={sizes}
      priority={priority}
      className={cn("h-auto w-full", variant === "auto" && "hidden dark:block")}
    />
  );

  return (
    <div className={cn("relative", className)}>
      {variant !== "dark" && lightImage}
      {variant !== "light" && darkImage}
    </div>
  );
}
