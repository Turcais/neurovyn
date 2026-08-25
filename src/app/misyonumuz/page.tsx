import type { Metadata } from "next";
import { ContentPending, PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Misyonumuz",
  description: "Bireyi anlamak, ekosistemini anlamlandırmak ve yaşamını birlikte tasarlamak.",
};

export default function Page() {
  return (
    <PageShell title="Misyonumuz" lead="Bireyi anlamak, ekosistemini anlamlandırmak ve yaşamını birlikte tasarlamak.">
      <ContentPending note="Misyon metni ve Neurovyn'in 10 Temel İlkesi bu sayfada yer alacak." />
    </PageShell>
  );
}
