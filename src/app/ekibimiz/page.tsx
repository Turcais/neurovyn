import type { Metadata } from "next";
import { ContentPending, PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Ekibimiz",
  description: "Neurovyn'i birlikte kuran ve büyüten ekip.",
};

export default function Page() {
  return (
    <PageShell title="Ekibimiz" lead="Neurovyn'i birlikte kuran ve büyüten ekip.">
      <ContentPending note="Ekip üyelerinin fotoğrafları, unvanları ve kısa özgeçmişleri müşteriden gelince eklenecek." />
    </PageShell>
  );
}
