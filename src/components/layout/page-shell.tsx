import type { ReactNode } from "react";
import { RichText } from "@/components/portable-text";
import { getPageText, type PageKey } from "@/lib/page-content";

/**
 * Ic sayfalarin ortak baslik blogu.
 *
 * `cmsKey` verilirse baslik, giris metni ve serbest metin yonetim
 * panelinden okunur. Panelde kayit yoksa buradaki degerler kullanilir.
 */
export async function PageShell({
  title,
  lead,
  cmsKey,
  children,
}: {
  title: string;
  lead?: string;
  cmsKey?: PageKey;
  children?: ReactNode;
}) {
  const cms = cmsKey ? await getPageText(cmsKey) : {};
  const heading = cms.title?.trim() || title;
  const intro = cms.lead?.trim() || lead;

  return (
    <>
      <div className="hero-wash border-b border-border">
        <div className="mx-auto max-w-[86rem] px-6 py-14 lg:py-20">
          <hr className="h-1 w-14 rounded-full border-0 bg-accent" />
          <h1 className="mt-6 font-display text-[34px] font-bold leading-[1.18] tracking-tight sm:text-[44px]">
            {heading}
          </h1>
          {intro && (
            <p className="prose-measure mt-5 text-[17px] leading-[1.8] text-fg-muted">{intro}</p>
          )}
        </div>
      </div>

      <div className="mx-auto max-w-[86rem] px-6 py-14 lg:py-20">
        {cms.body && cms.body.length > 0 && (
          <div className="prose-measure mb-14">
            <RichText value={cms.body} />
          </div>
        )}
        {children}
      </div>
    </>
  );
}

/** Icerigi henuz yazilmamis bolumler icin gecici not. */
export function ContentPending({ note }: { note: string }) {
  return (
    <div className="prose-measure rounded-2xl border border-dashed border-border-strong bg-bg-subtle p-8">
      <p className="font-display text-sm font-bold uppercase tracking-[0.14em] text-fg-faint">
        İçerik hazırlanıyor
      </p>
      <p className="mt-3 text-[15px] leading-[1.8] text-fg-muted">{note}</p>
    </div>
  );
}
