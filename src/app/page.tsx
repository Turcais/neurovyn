import { ThemeToggle } from "@/components/theme-toggle";
import { lifeAreas, site } from "@/lib/site";

export default function Home() {
  return (
    <main id="icerik" className="mx-auto max-w-5xl px-6 py-16 sm:py-24">
      <header className="mb-16 flex items-start justify-between gap-6">
        <div>
          <p className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl">
            <span className="text-gradient-brand">{site.name}</span>
          </p>
          <p className="mt-1 text-sm uppercase tracking-[0.25em] text-fg-muted">{site.tagline}</p>
        </div>
        <ThemeToggle />
      </header>

      <section className="mb-20">
        <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">
          İnsanı anlamak,
          <br />
          <span className="text-gradient-brand">yaşamı birlikte tasarlamanın</span>
          <br />
          ilk adımıdır.
        </h1>
        <p className="prose-measure mt-6 text-lg leading-relaxed text-fg-muted">
          Her bireyin kendine özgü bir gelişim yolu vardır. Neurovyn; bilimsel bilgiyle yaşamı
          buluşturur, güçlü yönleri görünür kılar, potansiyeli ortaya çıkarır ve daha bilinçli,
          dengeli bir yaşam tasarlamanıza rehberlik eder.
        </p>
        <blockquote className="prose-measure mt-8 border-l-2 border-primary pl-5 font-serif text-xl italic leading-relaxed">
          Gelişim tek bir alanda büyümek değildir; yaşamın tüm alanları arasında denge, uyum ve
          anlam oluşturabilmektir.
        </blockquote>
      </section>

      <section className="mb-20">
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-fg-faint">
          Yedi Yaşam Alanı
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {lifeAreas.map((area) => (
            <li
              key={area.slug}
              className="rounded-[var(--radius-card)] border border-border bg-surface p-5"
            >
              <span
                className="inline-block size-3 rounded-full"
                style={{ backgroundColor: `var(${area.colorVar})` }}
                aria-hidden
              />
              <h3
                className="mt-3 font-display text-base font-bold"
                style={{ color: `var(${area.colorVar})` }}
              >
                {area.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{area.summary}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-fg-faint">
          Yüzey ve Tipografi Denetimi
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            { name: "Zemin", varName: "--bg" },
            { name: "Yüzey", varName: "--surface" },
            { name: "Alt zemin", varName: "--bg-subtle" },
            { name: "Birincil", varName: "--primary" },
            { name: "İkincil", varName: "--secondary" },
            { name: "Vurgu", varName: "--accent" },
          ].map((token) => (
            <div key={token.varName} className="rounded-xl border border-border p-4">
              <div
                className="h-12 w-full rounded-lg border border-border-strong"
                style={{ backgroundColor: `var(${token.varName})` }}
              />
              <p className="mt-2 text-xs text-fg-muted">
                {token.name} <code className="text-fg-faint">{token.varName}</code>
              </p>
            </div>
          ))}
        </div>

        <div className="prose-measure mt-10 space-y-3">
          <p className="font-display text-2xl font-bold">Manrope — başlıklar (Türkçe: ĞÜŞİÖÇ ğüşıöç)</p>
          <p className="text-base text-fg">Inter — gövde metni. Uzun paragraflarda okunabilirlik önceliğimizdir.</p>
          <p className="font-serif text-lg italic text-fg-muted">Lora — alıntılar ve manifesto sesi.</p>
        </div>
      </section>
    </main>
  );
}
