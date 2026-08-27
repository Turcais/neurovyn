import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { WhatsAppLink } from "@/components/layout/whatsapp-button";
import { getSettings } from "@/lib/settings";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Bize Ulaşın",
  description:
    "Sorularınız, iş birlikleri ve görüşme talepleriniz için Neurovyn ile iletişime geçin.",
};

export default async function ContactPage() {
  const settings = await getSettings();

  return (
    <PageShell cmsKey="iletisim"       title="Bize Ulaşın"
      lead="Sorularınız, iş birlikleri ve görüşme talepleriniz için bize yazın. Genellikle iki iş günü içinde dönüş yapıyoruz."
    >
      <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        <div className="rounded-2xl border border-border bg-bg-subtle p-7 sm:p-9">
          <ContactForm />
        </div>

        <aside>
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-accent-text">
            İletişim Bilgileri
          </h2>
          <ul className="mt-6 space-y-4">
            {settings.contactLinks.map((item) => {
              const Icon = item.icon;
              const body = (
                <>
                  <Icon className="mt-0.5 size-[18px] shrink-0 text-primary" aria-hidden />
                  <span className="text-[15px] leading-relaxed text-fg-muted">{item.label}</span>
                </>
              );
              return (
                <li key={item.label}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-start gap-3 transition-colors hover:text-ink"
                    >
                      {body}
                    </a>
                  ) : (
                    <span className="flex items-start gap-3">{body}</span>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-8">
            <WhatsAppLink />
            <p className="mt-2.5 text-[13px] text-fg-faint">
              Hızlı soru için WhatsApp genellikle en pratik yol.
            </p>
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-surface p-6">
            <h3 className="font-display text-[15px] font-bold">İlk görüşme nasıl ilerler?</h3>
            <ol className="mt-4 space-y-3 text-[14px] leading-[1.7] text-fg-muted">
              <li>
                <strong className="font-semibold text-ink">1.</strong> Talebinizi ve içinde
                bulunduğunuz durumu dinleriz.
              </li>
              <li>
                <strong className="font-semibold text-ink">2.</strong> Hangi çalışma biçiminin size
                uygun olduğunu birlikte değerlendiririz.
              </li>
              <li>
                <strong className="font-semibold text-ink">3.</strong> Uygun görürseniz bir gelişim
                rotası tasarlamaya başlarız.
              </li>
            </ol>
          </div>
        </aside>
      </div>
    </PageShell>
  );
}
