import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { contactLinks, footerNav, site, socialLinks } from "@/lib/site";

/** Footer'in sag alt kosesindeki dekoratif isikli yaprak kumesi. */
function FooterFlourish() {
  return (
    <div className="pointer-events-none absolute bottom-0 right-0 hidden h-52 w-72 overflow-hidden md:block" aria-hidden>
      <svg viewBox="0 0 288 208" fill="none" className="size-full">
        <defs>
          <radialGradient id="ff-glow" cx="50%" cy="70%" r="60%">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.30" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="186" cy="150" rx="110" ry="80" fill="url(#ff-glow)" />
        <g stroke="#8b93c7" strokeOpacity="0.5" strokeWidth="1.2" strokeLinecap="round">
          <path d="M186 208V118" />
          <path d="M186 156c-16-4-28-14-34-28M186 156c16-4 28-14 34-28M186 132c-12-6-20-16-23-29M186 132c12-6 20-16 23-29" />
        </g>
        {[
          { cx: 150, cy: 126, r: 13, fill: "#a78bfa" },
          { cx: 222, cy: 126, r: 13, fill: "#a3e635" },
          { cx: 161, cy: 100, r: 11, fill: "#f472b6" },
          { cx: 211, cy: 100, r: 11, fill: "#60a5fa" },
          { cx: 186, cy: 84, r: 12, fill: "#fbbf24" },
        ].map((leaf) => (
          <ellipse
            key={`${leaf.cx}-${leaf.cy}`}
            cx={leaf.cx}
            cy={leaf.cy}
            rx={leaf.r}
            ry={leaf.r * 1.5}
            fill={leaf.fill}
            fillOpacity="0.5"
            transform={`rotate(${leaf.cx < 186 ? -28 : leaf.cx > 186 ? 28 : 0} ${leaf.cx} ${leaf.cy})`}
          />
        ))}
      </svg>
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
