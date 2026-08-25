import Link from "next/link";
import { BrandTree } from "@/components/brand/brand-tree";
import { Logo } from "@/components/brand/logo";
import { contactLinks, footerNav, site, socialLinks } from "@/lib/site";

/** Footer'in sag alt kosesinde soluk duran marka agaci. */
function FooterFlourish() {
  return (
    <div
      className="pointer-events-none absolute -bottom-16 -right-10 hidden w-[26rem] opacity-[0.18] md:block"
      aria-hidden
    >
      <BrandTree decorative showHalo={false} />
    </div>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  const columns = [footerNav.quick, footerNav.corporate];

  return (
    <footer className="relative overflow-hidden bg-footer-bg text-footer-fg">
      <FooterFlourish />

      <div className="relative mx-auto max-w-[86rem] px-6 py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr] lg:gap-12">
          {/* Marka */}
          <div>
            <Logo size="sm" tone="onDark" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-footer-muted">{site.footerBlurb}</p>
            <ul className="mt-6 flex items-center gap-2.5">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="inline-flex size-9 items-center justify-center rounded-lg border border-white/15 text-footer-muted transition-colors hover:border-white/35 hover:text-footer-fg"
                    >
                      <Icon className="size-[17px]" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Bağlantı sütunları */}
          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-footer-fg">
                {column.title}
              </h2>
              <ul className="mt-5 space-y-2.5">
                {column.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-footer-muted transition-colors hover:text-footer-fg"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* İletişim */}
          <div>
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.14em] text-footer-fg">
              Bize Ulaşın
            </h2>
            <ul className="mt-5 space-y-3.5">
              {contactLinks.map((item) => {
                const Icon = item.icon;
                const body = (
                  <>
                    <Icon className="mt-0.5 size-[17px] shrink-0 text-footer-muted" aria-hidden />
                    <span>{item.label}</span>
                  </>
                );
                return (
                  <li key={item.label} className="text-sm text-footer-muted">
                    {item.href ? (
                      <a href={item.href} className="flex items-start gap-2.5 transition-colors hover:text-footer-fg">
                        {body}
                      </a>
                    ) : (
                      <span className="flex items-start gap-2.5">{body}</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6">
          <p className="text-xs text-footer-muted">
            © {year} {site.name}. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
