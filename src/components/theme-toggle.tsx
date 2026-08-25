"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Tema anahtari.
 * Iki ikonu da render edip dogrusunu CSS ile gosteririz; boylece
 * sunucu ve istemci ciktisi ayni kalir ve "mounted" durumu gerekmez.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Temayı değiştir"
      title="Temayı değiştir"
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-border",
        "text-fg-muted transition-colors hover:bg-bg-subtle hover:text-ink",
        className,
      )}
    >
      <Moon className="size-[18px] dark:hidden" aria-hidden />
      <Sun className="hidden size-[18px] dark:block" aria-hidden />
    </button>
  );
}
