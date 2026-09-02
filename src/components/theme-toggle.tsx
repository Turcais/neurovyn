"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Tema anahtari.
 * Iki ikonu da render edip dogrusunu CSS ile gosteririz; boylece
 * sunucu ve istemci ciktisi ayni kalir ve "mounted" durumu gerekmez.
 *
 * Hedef temayi next-themes'in resolvedTheme'i yerine <html> uzerindeki
 * sinifitan okuyoruz: resolvedTheme ilk mount'ta undefined olabiliyor ve
 * o durumda ilk tiklama gorunurde hicbir sey yapmiyordu.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { setTheme } = useTheme();

  const toggle = () => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Temayı değiştir"
      title="Temayı değiştir"
      className={cn(
        "relative z-10 inline-flex size-10 shrink-0 cursor-pointer items-center justify-center",
        "rounded-full border border-border",
        "text-fg-muted transition-colors hover:bg-bg-subtle hover:text-ink",
        className,
      )}
    >
      <Moon className="size-[18px] dark:hidden" aria-hidden />
      <Sun className="hidden size-[18px] dark:block" aria-hidden />
    </button>
  );
}
