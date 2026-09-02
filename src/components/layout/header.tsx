"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Logo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { ButtonLink } from "@/components/ui/button";
import { ctaNav, mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  /* Menu acikken: govde kaydirmasini kilitle, Escape ile kapat, odagi panele tasi */
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-bg/85 backdrop-blur-md">
      <div className="relative z-10 mx-auto flex max-w-[86rem] items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo size="sm" />

        {/* ---- Masaustu menu: ikon ustte, etiket altta ---- */}
        <nav aria-label="Ana menü" className="hidden xl:block">
          <ul className="flex items-stretch gap-1.5">
            {mainNav.map((item) => {
              const active = isActive(pathname, item.href);
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "relative flex h-full w-[5.1rem] flex-col items-center justify-start gap-1.5 rounded-xl",
                      "border px-2 pb-2.5 pt-2.5 text-center transition-colors",
                      active
                        ? "border-border-strong bg-surface text-primary shadow-sm"
                        : "border-transparent text-fg-muted hover:border-border hover:bg-surface hover:text-ink",
                    )}
                  >
                    <Icon className="size-[18px] shrink-0" aria-hidden />
                    <span className="text-[10.5px] font-medium leading-[1.25]">{item.label}</span>
                    {active && (
                      <span
                        className="absolute inset-x-2.5 -bottom-[9px] h-[3px] rounded-full bg-accent"
                        aria-hidden
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href={ctaNav.href} size="md" className="hidden sm:inline-flex">
            {ctaNav.label}
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Menüyü aç"
            aria-expanded={open}
            aria-controls="mobil-menu"
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:bg-bg-subtle hover:text-ink xl:hidden"
          >
            <Menu className="size-5" aria-hidden />
          </button>
        </div>
      </div>

      {/* ---- Mobil menu ----
          Portal zorunlu: header'da backdrop-blur var. backdrop-filter tasiyan
          bir element, fixed konumlu tum cocuklari icin "containing block"
          olusturur; bu yuzden drawer viewport yerine header kutusuna hapsolup
          gorunmez oluyordu. document.body'ye portalliyoruz. ---- */}
      {open &&
        createPortal(
          <div className="fixed inset-0 z-[100] xl:hidden">
            <button
              type="button"
              aria-label="Menüyü kapat"
              tabIndex={-1}
              onClick={() => setOpen(false)}
              className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
            />
            <div
              id="mobil-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Ana menü"
              className="absolute inset-y-0 right-0 flex w-[min(22rem,88vw)] flex-col overflow-y-auto border-l border-border bg-bg shadow-2xl"
            >
              <div className="flex items-center justify-between border-b border-border px-5 py-4">
                <Logo size="sm" withTagline={false} />
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Menüyü kapat"
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-fg-muted transition-colors hover:bg-bg-subtle hover:text-ink"
                >
                  <X className="size-5" aria-hidden />
                </button>
              </div>

              <nav aria-label="Mobil menü" className="flex-1 px-3 py-4">
                <ul className="space-y-1">
                  {mainNav.map((item) => {
                    const active = isActive(pathname, item.href);
                    const Icon = item.icon;
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-medium transition-colors",
                            active
                              ? "bg-primary-soft text-primary"
                              : "text-fg hover:bg-bg-subtle hover:text-ink",
                          )}
                        >
                          <Icon className="size-[19px] shrink-0" aria-hidden />
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className="border-t border-border p-5">
                <ButtonLink href={ctaNav.href} onClick={() => setOpen(false)} size="lg" className="w-full">
                  <MessageCircle className="size-[18px]" aria-hidden />
                  {ctaNav.label}
                </ButtonLink>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
