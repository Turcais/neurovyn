import type { Metadata } from "next";
import { ContentPending, PageShell } from "@/components/layout/page-shell";

export const metadata: Metadata = {
  title: "Yaklaşımımız",
  description: "İnsanı bütüncül olarak ele alır, yaşamıyla ve çevresiyle birlikte anlarız.",
};

export default function Page() {
  return (
    <PageShell title="Yaklaşımımız" lead="İnsanı bütüncül olarak ele alır, yaşamıyla ve çevresiyle birlikte anlarız.">
      <ContentPending note="Neurovyn Yaşam Döngüsü'nün altı aşaması (Yaşam Pusulası, Yaşam Profili, Yaşam Ekosistemi Haritalaması, Gelişim Rotası, Yaşam Laboratuvarı, Takip Sistemi) burada görselleştirilecek." />
    </PageShell>
  );
}
