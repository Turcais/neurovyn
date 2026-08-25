import type { Metadata } from "next";
import { ContentPending, PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Vizyonumuz",
  description: "Neurovyn, bireyi değiştirmeyi değil; bireyin kendini ve ekosistemini anlayarak yaşamını bilinçli şekilde tasarlamasını destekleyen bilim temelli bir Nöroyaşam Tasarımı sistemidir.",
};

export default function Page() {
  return (
    <PageShell title="Vizyonumuz" lead="Neurovyn, bireyi değiştirmeyi değil; bireyin kendini ve ekosistemini anlayarak yaşamını bilinçli şekilde tasarlamasını destekleyen bilim temelli bir Nöroyaşam Tasarımı sistemidir.">
      <ContentPending note="Vizyon metni ve altı vizyon ilkesi (Birey Merkezli, Ekosistem Odaklı, Etik ve Saygılı, Yaşam Tasarımı, Bilim Temelli, Sistem Yaklaşımı) bu sayfaya yerleştirilecek." />
    </PageShell>
  );
}
