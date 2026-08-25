"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  /* Sunucuda tema bilinmez; mount edilene kadar notr metin kullaniriz. */
  const label = mounted ? (isDark ? "Açık temaya geç" : "Koyu temaya geç") : "Temayı değiştir";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex size-10 items-center justify-center rounded-full border border-border",
        "text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg",
        className,
      )}
    >
      {mounted ? (
        isDark ? (
          <Sun className="size-[18px]" aria-hidden />
        ) : (
          <Moon className="size-[18px]" aria-hidden />
        )
      ) : (
        <span className="size-[18px]" aria-hidden />
      )}
    </button>
  );
}
