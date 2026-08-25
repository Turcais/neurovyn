import type { Metadata } from "next";
import { ContentPending, PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Ne Yapıyoruz",
  description: "Bilimle, birlikte, bütüncül bir yaklaşım: anlıyoruz, tasarlıyoruz, destekliyoruz.",
};

export default function Page() {
  return (
    <PageShell title="Ne Yapıyoruz" lead="Bilimle, birlikte, bütüncül bir yaklaşım: anlıyoruz, tasarlıyoruz, destekliyoruz.">
      <ContentPending note="Anlıyoruz / Tasarlıyoruz / Destekliyoruz başlıklarının ayrıntılı anlatımı ve Neurovyn Metodolojisi'nin sekiz adımı bu sayfaya gelecek." />
    </PageShell>
  );
}
